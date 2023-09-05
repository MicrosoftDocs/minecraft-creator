---
author: mammerla
ms.author: v-jillheaden
title: Introduction to Entity Properties
description: "An introductory article detailing entity properties"
ms.service: minecraft-bedrock-edition
---

# Introduction to Entity Properties

Entity Properties are data fields defined in the Behavior Pack for any type of Minecraft entity. Any Entity Property defined on a particular `minecraft:entity` will have separate values for that Property tracked for every instance of the entity type. Entity Property values are always persisted through saving and loading. Entity Properties can be of four different types – `int`, `float`, `enum`, and `bool`, and can be optionally sent to game clients where they can be read by Resource Packs to affect how entities render or animate.

## One Property Definition but Multiple Values

When a single Entity Property is defined on a single type of entity, every instance of that entity type will have that property. Additionally, every instance will keep track of its own separate value for that property.

### Example Properties

Here are some example Entity Properties on an imaginary truck entity that someone might want to implement. These properties will describe the number of open windows, the amount of fuel in the gas tank, whether the truck is running, and what setting the gear shift is in.

```json
"example:num_open_windows": { 
    "type": "int", 
    "range": [0, 4], 
    "default": 0 
} 
```

Here, `example:num_open_windows` is an integer property that starts with a default value of zero and can range as low as 0 and as high as 4. Note the `"example:"` in the name; Entity Property names must have a namespace prefix, similar to other named concepts in our game.

Replace `"example"` with your studio name or something else, anything other than `"minecraft"` because that namespace is reserved for official content.

```json
"example:remaining_fuel": { 
    "type": "float", 
    "range": [0.0, 30.0], 
    "default": "math.random(20, 25)" 
}
```

Here, `"example:remaining_fuel"` is a floating point property that starts with a default value determined by a Molang expression; in this case, a random value from 20 to 25. Because this is a `"float"`, it can hold decimal values like 0.5.

```json
"example:engine_on": { 
    "type": "bool", 
    "default": false 
} 
```

Here, `"example:engine_on"` is a bool property that starts off as false. Entity Properties with type `bool` don't have a range, because they can only be true or false.

```json
"example:gearshift": { 
    "type": "enum", 
    "values": ["park", "reverse", "neutral", "drive"], 
    "default": "park", 
    "client_sync": true 
} 
```

Finally, we have an example of an `enum` property. Here, `"example:gearshift"` is an enum property that starts off with a value of `"park"`, though it could also have several other values according to the "values" array. This example also includes a line setting `"client_sync"` to `true`, which means that this should be sent to **clients**, where it will be available to the content in the Resource Pack so it can influence how the entity renders and animates.

## Why Use Entity Properties?

Entity Properties allow high-level states about Minecraft entities to be defined for specific types of entities, without those values being confused as intended for some other purpose. They also allow a flexible way to affect behavior, rendering, and animation of an entity in a way that is much easier to author and understand.

Without Entity Properties, a content creator making a car for a city scenario might want to animate its windshield wipers based on some interaction that turns the wipers on and off. 
Because there's no `"minecraft:windshield_wipers"` component, the content creator might figure out that they can add a `"minecraft:is_baby"` component to indicate that the wipers are on, and set up animations to play when `"query.is_baby"` detects that condition in the Resource Pack.

As this content gets developed further, the list of associations like `"for example:car, is_baby means my wipers are on"` can get more and more confusing, and, with each feature, the creator needs to find another component to use in a clever way. This also has a drawback that being a baby may have some built-in consequence in the Minecraft engine which is not desired or expected.

By using Entity Properties, the same content creator can instead use their own property definitions like `"example:car_wipers_on"` to track the state of their entities without the above drawbacks.

## How are Entity Properties Changed?

As Entity Properties represent the high-level state of an entity, their property values are changed via entity events – the same system through which component groups are currently added or removed to entity instances.

```json
"events": {
  "example:first": {
    "add": { "component_groups": [ "example:some_group" ] },
    "set_property": {
      "example:my_property": 4
    }
  },

  "example:second": {
    "set_property": {
      "example:another": "query.property('example:another') + 1"
    } 
  },

  "example:third": {
    "set_property": { 
      "example:my_bool": false,
      "example:my_enum": "park"
    }
  }
}
```

Here are several examples of how Entity Properties can be modified by entity events. The first sets a property `"example:my_property"` to 4 while also adding a component group, which is a common thing for events to do already. The second event shows that a Molang expression can be used to do more complicated logic. For example, here it sets `"example:another"` to 1 more than the current value of that property. The third event shows that multiple properties can be modified by a single `"set_property"` definition.

### Property Value Changes and Property Ranges

An important thing to keep in mind about the "range" of Entity Properties of type `int` or `float` is that the value will always stay within the values listed in the "range" of the property definition. For example, if you have a range of `"[0, 10]"` and set the value to 25, whether directly or through a Molang expression, the value will be limited to 10 without any warning or error being sent.

### When New Values are Calculated versus When they are Applied

Because entity events can be triggered by entity behaviors, players, command blocks, or other sources, it's not always safe for entity events to apply their changes right away. Instead, the effects of events are calculated and are applied the next time the entity ticks on the Behavior Pack/server side of the game. This means the effects of an event can take place during the current tick, or in the next tick, depending on a variety of factors. This also means that if two events are received by an entity in the same tick, the second event won't necessarily "see" the effect of the first event, as it hasn't been applied yet.

Entity Properties follow this pattern as well. When a `"set_property"` section in an event handler runs, it will immediately calculate the new values (often by evaluating a Molang expression) for any specified property value changes. Those values will be queued with any other property changes or add/remove of component groups, then later all of the changes will take place.

### A Note on Large Integer Entity Property Values

When using a `"set_property"` expression to change an Entity Property of type `"int"`, floating point-related math errors can be encountered if the values are very high or very low.

For example:

```json
   "set_property": {
      "example:my_int": "query.property('example:my_int') + 1" 
   }
```

Here a Molang expression is defined that is used to increment the `"example:my_int"` property. Since Molang expressions are evaluated as float values, this logic will fail when the value exceeds about 16.7 million.

Because of this, it's recommended to keep Entity Properties of type "int" between -1 million and +1 million, and if you need to exceed that value range, test your content carefully.

### How Are Entity Properties Read?

Entity Properties can be read by two systems to affect how the game behaves: Molang and Filters.

### Reading Properties with Molang

Molang has two main queries to consider related to Entity Properties - `"query.property"` and `"query.has_property"`.

`"query.property"` takes one argument – the full name of a property – and will return the value of that property, or will send a content error message and return 0 if no property with that name is found.

For example, `"(query.property('example:fuel') > 5) ? query.property('example.fuel') : 1"` will return the value of the `"example:fuel"` property if it is over 5, otherwise it will return 1.

`"query.has_property"` takes one argument – the full name of a property – and will return 1 if that property exists, otherwise it will return 0. This query is useful to avoid errors in situations where the entity being inspected might not have a property with that name.

### Reading Properties with Filters

Entity Properties can be read by filters in Behavior Pack JSON files. This is useful for checking whether part of or all of an entity event should have an effect, or for controlling when various components take the appropriate action.

There are five types of filters – one for each type of Entity Property, and one to check for the existence of a property. Here is an example of each type of filter:

1. `"test":"int_property", "subject":"self", "domain":"test:myint", "value":4, "operator":">"`

1. `"test":"bool_property", "subject":"self", "domain":"test:mybool", "value":true, "operator":"=="`

1. `"test":"float_property", "subject":"self", "domain":"test:myfloat", "value":4.5, "operator":">"`

1. `"test":"enum_property", "subject":"self", "domain":"test:myenum", "value":"blue", "operator":"!="`

1. `"test":"has_property", "subject":"self", "value":"test:propertyname", "operator":"=="`

Like other filters, these have the usual parameters - `test`, `subject`, `value`, and `operator`. The type-specific tests also take a "domain" parameter.

Filter 1 passes if an Entity Property of type `int` and name `"test:myint"` exists on the entity with a value greater than 4.
Filter 2 checks for a `bool` property named `"test:mybool"` with a true value.
Filter 3 checks for a `float` value that is greater than 4.5.
And filter 4 checks for an `enum` value not equal to the `"blue"` enum entry.

The last example filter uses the `"has_property"` test, which passes if it finds a property with the specified name.

All of these filters assume a `"subject"` of `"self"` if that is not specified.

The `"bool_property"` filter will assume `"value"` is true if not specified, while other filters require a value.

The `"has_property"` filter will assume `"operator"` is `"=="`, while other filters require something to be specified. Using `"!="` for `"has_property"` will check for a property not existing with that name.

## Limitations of Entity Properties

Because **Entity Properties** are a new and potentially powerful system, some limitations have been implemented to maintain game stability and performance. Going past these limitations should cause a content error with a useful error message and prevent the property or properties from loading.

### Number of Entity Properties per Entity Type

Each type of entity is limited to 32 Entity Properties. Within that, there's no further limit on which types are used or how many of them have the `"client_sync"` property set to true.

### Enum Property Restrictions

Properties of type `"enum"` have several limitations. Each enum is limited to a maximum of 16 entries. Each entry has a minimum length of 1 and a maximum length of 32 characters. The first character of an enum entry must be alphabetical and the remaining characters can be alphabetical, numeric, or the underscore character.

### Default Value Restrictions

Default values for Entity Properties can be authored in two ways – either as a direct value, or as a Molang expression. If authored as a direct value (such as `5` for an int property), the value must be the correct type for the property and must be within the defined range.

Molang expressions can be used for default values as well. In this case, the expression is evaluated then the result is cast to the appropriate type and clamped to be within the defined range. An error can still occur if a numeric result is returned from the expression for an enum property (which expects a string result), or if a non-numeric result is returned for an int, float, or bool property.

Molang expressions for default values cannot assign or read Molang variables, as the entity hasn't been constructed yet. Lastly, the only query that is available in a default value's Molang expression is "query.had_component_group", which is used for reading the state of previously saved entity data whose entity definition has been updated to use Entity Properties. See **Entity Properties and Changes to Entity Definitions** later in this article for more information.

### Property Change Restrictions

When Entity Properties are modified with the `"set_property"` section of an event handler, either a direct value or a Molang expression can be specified for the new value.

Molang expressions for property changes cannot assign Molang variables but can read them. They can use the "query.property" or "query.has_property" queries to read other property values, but can't currently use other queries. This restriction has to do with the fact that events can be called from a variety of places including other entities, command blocks, or manually typed "/event" commands, so it's not always predictable what state the game will be in when a query is executing. Alternatives to this restriction include using filters within the event handler to detect a situation or using an animation in the Behavior Pack that sets a Molang variable, which can then be read by the "set_property" Molang expression.

## Entity Properties and Changes to Entity Definitions

It's possible to define an entity, create worlds where instances of that entity are saved, then modify the definition of the entity. To help avoid entities that are loaded from older data but newer definitions, this section is meant to explain what happens in several related scenarios.

### Added or removed properties

If an entity is loaded and there is a new Entity Property defined for which there is no previously saved data, a value will be added to the entity based on the property's default value. If an entity has a value for an Entity Property that is no longer in the entity definition, that value will be discarded.

### Renamed Properties

All Entity Property data is saved according to the full name of each property. If a property is renamed in the entity definition, that will be handled the same way as if the property was removed and then a new property was added. The effect being that the data would be discarded, and new values would be generated according to the property's default value.

### Changed Types

If a value for an Entity Property is loaded, and the type of that property doesn't match the type of the loaded data, the value will be discarded and a new value will be generated from the property's default value.

### Changed Range

If a numeric (int or float) property value is loaded and is outside of the range defined for that Entity Property, the value will be clamped to be within that range. For example, a saved value of 120 that is loaded for an integer property with range `"[0, 100]"` will become 100, without any error or warning being sent.

### Changed Enum Values

Enum values are saved in their string form, rather than the index they happen to have in the values array. Because of this, rearranging the order of entries in an enum property's values array will have no effect. If an enum entry is removed, any property values saved with that entry will be reset according to the property's default value.

## Loading Old Data with an Upgraded Entity Property-Enabled Entity

Sometimes a creator may want to upgrade how part of an entity works to use the Entity Properties feature, where existing saved data for that entity already exists. For example, a `"sample:truck"` might be authored to indicate that the headlights are turned on by using the `"minecraft:is_baby"` component:

```json
"component_groups": {
  "example:headlights": {
    "minecraft:is_baby": { }
  }
}

"events": {
  "example:turn_on_headlights": {  
    "add": { "component_groups": [ "example:headlights" ]  
  }
}
```

This sort of thing technically works, but it uses the concept of `"is_baby"` in an odd way and can get very confusing to keep track of what the different components are cleverly used for. Instead, this sort of thing could be implemented with Entity Properties, for example:

```json
"description": {
  "properties": {
    "example:headlights_on": {
      "type": "bool",
      "default": false
    }
  }
}

"events": {
  "example:turn_on_headlights": {  
    "set_property": { "example:headlights_on": true }  
  }
}
```

With this change, the `"example:headlights"` component group has been removed, and instead of making the game think the entity is a baby, it now sets a new `"example:headlights_on"` property to true.

This conversion would work, with the drawback that if any previously saved entities has the `"example:headlights"` component group active, they will lose that state when they load, meaning that some `"sample:truck"` entities will have their headlights turned back off.

To solve situations like this, the Molang query `"query.had_component_group"` has been added for use in the default value expression for Entity Properties.

The default value can be changed to this expression instead:

`"default": "query.had_component_group('example:headlights')"`

What this will do is set the value of the "example:headlights_on" property to true if the entity is being loaded from previously saved data that had a component group named `"example:headlights"` active. If there's no data being loaded, or the loaded data didn't have that component group active, the query will return 0, making the `"example:headlights_on"` property value false.

A mechanism like this is used in the "minecraft:bee" to allow bees to not lose track of their `"has_nectar"` state in the event that the bee was saved with nectar in an older version, then loaded with the new version of the bee's definition that uses an Entity Property.

## Real Minecraft Example: The Bee's minecraft:has_nectar Property

To provide a real example of a working Entity Property, the part of the Minecraft bee that tracks whether it has nectar will be converted to use this new feature. Here is an explanation of those changes.

### Property Definition

First, a new Entity Property will be added to the "minecraft:bee"'s "description" section:

```json
  "properties": {
    "minecraft:has_nectar": { 
      "type": "bool", 
      "client_sync": true, 
      "default": "query.had_component_group('has_nectar')" 
    } 
  }
```

This causes every bee in the game to have a per-bee true or false value named `"minecraft:has_nectar"`. Like with all Entity Properties it will be persisted when the world saves and loads. Because `"client_sync"` is set to `true`, these values will also be sent to the client side of the game where Resource Pack files can read them for things like rendering and animation.

The default value expression here causes the value to initialize to true if the bee is being loaded from previously saved data where the entity had an active component group named `"has_nectar"`. This is only necessary to avoid old bees forgetting their has_nectar state – if having nectar was a new aspect of bees, or if there was no existing save data that needed to be gracefully upgraded, the default value could just be `"false"` instead to start all bees without nectar.

### Component Replacement

Next, the bee's behavior JSON file (the same file where the property is defined) will be updated to set the property instead of using the old `"minecraft:is_charged"` component.

This line from the "has_nectar" component group will be removed:

`"minecraft:is_charged": {},`

Any events that "add" the "has_nectar" component group will have this section added to set the property to true:

```json
      "set_property": { 
        "minecraft:has_nectar": true 
      } 
```

And any events that "remove" the "has_nectar" component group will have this section added to set the property to false:

```json
      "set_property": { 
        "minecraft:has_nectar": false 
      } 
```

### Filter Replacement

There are a few filters in the file that check for the `"minecraft:is_charged"` component, or the lack of such a component. These filters will be updated to instead check the value of the new Entity Property.

This filter checks for the `"minecraft:is_charged"` component:

```json
    "filters": { 
      "test": "has_component", 
      "value": "minecraft:is_charged" 
    }, 
```

This will be replaced with a "bool_property" filter as follows:

```json
    "filters": { 
      "test": "bool_property", 
      "domain": "minecraft:has_nectar" 
    }, 
```

Note that this filter assumes a `"value"` of `true` and an `"operator"` of `"=="`, so those don't have to be specified.

There are a few similar filters that use an `"operator"` of `"!="` to check that the component is not there. In those cases, the same replacement will be made, leaving the `"operator"` as-is, which will end up with this filter:

```json
    "filters": { 
      "test": "bool_property", 
      "operator": "!=", 
      "domain": "minecraft:has_nectar" 
    },  
```

This filter will allow the appropriate behavior when the `"minecraft:has_nectar"` bool property is not equal to true.

### Animation Controller Update

In the Resource Pack, the bee's animation controller has a `"dripping"` animation state that is active when the Molang expression `"query.is_powered"` returns 1, and another transition out of that state when the opposite of that expression returns 1:

```json
        "default": { 
          "transitions": [ 
            { "dripping": "query.is_powered" } 
          ] 
        }, 
        "dripping": { 
...
          "transitions": [ 
            { "default": "!query.is_powered" } 
          ] 
        } 
```

The Molang query `"is_powered"` returns true when the `"minecraft:is_charged"` component is active on an entity. Converting to use the new Entity Property is straightforward, just replacing that query with a `"query.property"` call that specifies the property name:

```json
        "default": { 
          "transitions": [ 
            { "dripping": "query.property('minecraft:has_nectar')" } 
          ] 
        }, 
...
        "dripping": { 
          "transitions": [ 
            { "default": "!query.property('minecraft:has_nectar')" } 
          ] 
        } 
```

## Render Controller Update

The bee's render controller (also in the Resource Pack) has this line which chooses a texture during rendering based on whether the bee has nectar and some other logic:

`"textures": [ "array.skins[query.is_powered + query.is_angry * 2]" ]`

Like the above animation transition change, this will be updated to instead read the new Entity Property.

`"textures": [ "array.skins[query.property('minecraft:has_nectar') + query.is_angry * 2]" ]`

## Conclusion

This concludes the explanation of what Entity Properties are, while giving some context about their value and an example of how this will be used with the game's bee entity.

Entity Properties allow for a much simpler way to author entity state, especially for properties that are intended to persist across sessions and to sync to clients where they can affect how an entity appears. We look forward to what our community comes up with using this new feature!

## What's Next?

In this guide we have added a complete custom entity to the game. If you used the existing model files instead of creating your own, now might be a good time to learn about Blockbench. Or, you can read more about entity behavior for the server.

> [!div class="nextstepaction"]
> [Entity Modeling and Animation](EntityModelingAndAnimation.md)
> [Entity Behavior Introduction](EntityBehaviorIntroduction.md)
