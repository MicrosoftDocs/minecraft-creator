---
title: Entity Behavior Introduction
author: ReWrite-Media
---
# Entity Behavior Introduction

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to create and use behavior files to change an entity's behavior.
> - How to use components to expand an entity's behavior.
> - How to use events to modify active components based on some condition.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Add Entity](IntroductionToAddEntity.md)

## Introduction

Behavior files in Minecraft: Bedrock Edition allow us to customize how an entity behaves and interacts with the world. They're a part of behavior packs, but behavior packs can also contain other types of files like functions and loot tables.

Behavior files were first introduced along with add-ons as a way to customize how vanilla entities behave. Components were created to split the previously hard-coded mechanics of individual mobs into small pieces that could be used by creators to customize entities. For example, the taming mechanic that cats and dogs use was transferred to the `tameable` component so that creators could make other entities tamable as well.

The goal was to make every single mechanic of entities customizable over the years.

When Add Entity was introduced, behavior files became a way to create new entities from scratch using all the components from vanilla entities.

There are two ways in which behavior files can be used:

- Modifying vanilla entities. Since the introduction of Add Entity, this should only be used for small adjustments to the vanilla game, not for additional content.
- Creating custom entities. Behavior files serve as the base for custom entities.

## Format Overview

Entity behavior files are saved in the `entities` folder of your behavior pack. The game loads all files in that folder so you can use subfolders to manage your entities. The files use the extension `.json`. This extension is used by a lot of files within add-ons, so if you want to avoid confusion, you can use the extended extension `.behavior.json` for behavior files specifically. For other extended extensions, see [this table](IntroductionToAddEntity.md#naming).

The files are written in JSON and the basic structure looks like this:

```json
{
    "format_version": "1.13.0",
    "minecraft:entity": {
        "description": {
            "identifier":"compass:example",
            "is_spawnable":true,
            "is_summonable":true
        },
        "components": {},
        "component_groups": {},
        "events": {}
    }
}
```
Inside the `description` tag, a few basic properties define how the game registers the entity:

|Parameter Name|Type|Description|
|-|-|-|
|`identifier`|String|Identifier of the entity. If this is a custom entity in an add-on, you should use a custom unique namespace as seen in the example.|
|`runtime_identifier`|String|Identifier that's used internally by the game. This can be used to inherit custom mechanics from vanilla entities that are not yet available as a component. Only one runtime identifier may be specified per entity **Only use this if it is really necessary.** If a vanilla entity's mechanics are turned into components, you may lose functionality if you are relying on those mechanics through a runtime identifier.|
|`is_spawnable`|Boolean|If true, a spawn egg for the entity is added to the creative inventory.|
|`is_summonable`|Boolean|If true, the entity can be summoned using the `/summon` command.|
|`is_experimental`|Boolean|If true, the entity can use experimental features. The entity will only work in experimental worlds. **Marketplace content can not be submitted with this option enabled.**|
|`animations`|Object|A list of behavior animations or animation controllers. These can be used to run commands or events on the entity.|
|`scripts`|Object|Scripts work similarly to how they work in client entity files, and they can be used to play behavior animations.|

## Components and Component Groups

Components are properties or mechanics that you can add to your entity. There are two ways to add components: Directly to the **component tag** or with a **component group**.

- Components added to the base **component tag** are always active unless removed through a component group in an event.
- **Component groups** are sets of one or more components each that aren't active by default but can be enabled or disabled through events. For instance, this can be used to create a variant of the entity, such as a baby.

In this example, a component group is used to create a baby variant of the entity. The components defined in the main component section are always active, while the components in the `baby` component group are only active when that group is added.

```json
{
    "format_version": "1.13.0",
    "minecraft:entity": {
        "description": {
            "identifier":"compass:example",
            "is_spawnable":true,
            "is_summonable":true
        },
        "components": {
            "minecraft:physics":{}
        },
        "component_groups": {
            "baby": {
               "minecraft:behavior.follow_parent": {},
               "minecraft:is_baby": {}
            }
        },
        "events": {}
    }
}
```

All Minecraft components use the `minecraft:` namespace.

Almost all components are defined as a JSON object. Most components have options that can be specified inside this object, but some components work without options, as shown in the previous example.

### How to Learn Components

A full list of available components can be found [here](/creator/Reference/Content/EntityReference/Examples/ComponentList.md).

A good way to learn about a component and see how it's used in practice is to look at the behavior files of default Minecraft entities. You can always find the latest default behavior pack at this URL: https://aka.ms/behaviorpacktemplate.

**Note:** The way a component works can sometimes change between versions. So if a component from a vanilla entity is not working on your entity, check if both files are using the same format version. You're encouraged to always use the latest version of the component as it's been refined and can include fixes.

### Essential Components

|Component Name|Options|Description|
|-|-|-|
|`minecraft:physics`|`has_collision`<br>`has_gravity`|You'll need this component on 99% of custom entities. It allows the entity to stay on the ground and react to interaction and punches in a way that you would expect.|
|`minecraft:scale`|`value`|Sets the scale of the entity.|
|`minecraft:collision_box`|`width`<br>`height`|Sets the collision box of the entity. Only the width and height can be changed. The collision box always has a square base that's aligned to the world axes.|
|`minecraft:type_family`|`family`|Sets a list of type families that the entity is in. Type families can be tested by other entities. For example, to test which mobs they are hostile towards.|
|`minecraft:movement`|`value`|Sets the movement speed of the entity. 0.25 is the regular speed of most animals in Minecraft.|
|`minecraft:movement.basic`|[See documentation](/creator/Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_movement.basic.md)|Allows the entity to move around on the ground.|
|`minecraft:navigation.walk`|[See documentation](/creator/Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_navigation.walk.md)|Allows the entity to navigate through the world by walking. There are other types of navigation as well, like hovering.|
|`minecraft:is_baby`<br>`minecraft:is_ignited`<br>`minecraft:is_saddled`<br>`minecraft:is_sheared`<br>`minecraft:is_tamed`<br>`minecraft:is_illager_captain`<br>|-|These components don’t do anything on their own, but they can be queried in animations, animation controllers, or render controllers, allowing you to control animations and other visuals from the entity behavior.|
|`minecraft:variant`<br>`minecraft:mark_variant`<br>`minecraft:skin_id`|`value`|These components work like the ones above, but instead of only storing an on/off state, they can store an integer value.|

### Priorities

The option `priority` can be used on all behavior components (AI goals). `0` is the highest priority and the default priority of all behavior components. The higher the number, the lower the priority. If the entity is busy doing a low priority behavior and a high priority behavior comes up, the entity will immediately switch to the higher priority behavior.

In the following example, the hurt_by_target component has a higher priority. If the entity gets attacked while strolling, it will immediately target the attacker.

```json
"minecraft:behavior.random_stroll": {
    "priority": 4
},
"minecraft:behavior.hurt_by_target": {
    "priority": 1
}
```

### Removing Components

When a component group is removed from an entity, the effect of the components will be removed as well. This won’t cause any problems in most cases. But in some cases, it's important to consider that components **overwrite** each other. Therefore, removing a component won’t make it go back to the previous state of that component, and it won’t use the same component from another component group or the base components. Instead, the component will be **removed completely** and reset to its default values.

Here's an example: Let’s say you have an entity with a scale of `2` defined in the base `components` tag. You add a baby component group with a scale component that sets the scale to` 1.5`. This will correctly update the scale to `1.5`. Now, you remove that component group again. Instead of going back to `2`, the scale will now be reset to `1`. This happens because removing the component group will also remove the scale component entirely. The scale will be reset to the default value of `1`.

There are a few components where this is important to consider:

- Components that change a value of the entity like `minecraft:scale`, `minecraft:collision_box`, or `minecraft:variant`.
- List components like `minecraft:interact`, `minecraft:environment_sensor`, or `minecraft:damage_sensor`
- Any other components that you might want to have different states of like `minecraft:rideable` (different seat counts or positions).

In order to avoid this behavior, you need to add a new component group with the updated state of the component. In the case of the scale example, this can be as easy as having two different component groups for the different states that you can switch between:

```json
        "components": {
            "minecraft:scale":{
               "value": 2
            }
        },
        "component_groups": {
            "baby": {
               "minecraft:scale": {
                   "value": 1.5
               }
            },
            "adult": {
               "minecraft:scale": {
                   "value": 2
               }
            }
        },
        "events": {
            "set_baby":{
               "remove": {"component_groups": ["adult"]},
               "add": {"component_groups": ["baby"]}
            },
            "set_adult":{
               "remove": {"component_groups": ["baby"]},
               "add": {"component_groups": ["adult"]}
            }
        }
```

## Events

Events are used to add and remove component groups from the entity. In this example, an old component group is removed while two new ones are added:

```json
"events": {
    "compass:example_event": {
        "remove": {
            "component_groups": ["compass:group_a"]
        },
        "add": {
            "component_groups": ["compass:group_b","compass:group_c"]
        }
    }
}
```

Events can be triggered by many components such as `minecraft:interact` or `minecraft:environment_sensor`, by behavior animations, or by the summon command. The following command will spawn the entity while running the event above.

```
/summon compass:example_entity ~ ~ ~ compass:example_event
```

### Built-in Events

A few events are built into Minecraft and run if the entity is spawned under certain conditions.

|Event Name|Description|
|-|-|
|`minecraft:entity_born`|The event runs when the entity is spawned by breeding.|
|`minecraft:entity_spawned`|The event runs whenever the entity spawns. Note that it won’t run if you manually `/summon` it.|
|`minecraft:entity_transformed`|The event runs when another entity transforms into this entity.|
|`minecraft:on_prime`|The event runs when the entity is primed and ready to explode.|

### Randomizers

If you want to randomize which component group gets added to the entity, you can use the randomize function. You specify an array of objects, each of which can add and remove component groups. The game will randomly pick and run one of these objects.

Optionally, you can add a weight option to the options to change the probability of each option. All weights combined count as 100%. In the following example, the entity will spawn as a baby with a 20% (1 to 4) chance, while in the other cases, no component group is added:

```json
"events": {
    "minecraft:entity_spawned": {
        "randomize": [
            {
               "weight": 40
            },
            {
               "weight": 10,
               "add": {
                   "component_groups": ["baby"]
               }
            }
        ]
    }
}
```

### Sequences

Sometimes you need to run multiple event instances one after the other in the same event. For example, you might want to randomize two aspects of the entity, like the color and mark pattern. In this case, you can use a sequence. Sequences are structured similarly to randomizers, but each item in the list is executed in order. This is also quite useful in combination with filters, which will be explained in the following section.

Sequences and randomizers can be nested indefinitely.

In this example, the group **initial** will be added when the entity is spawned. After that, the baby component will be randomized like in the previous section.

```json
        "events": {
            "minecraft:entity_spawned":{
               "sequence": [
                   {
                       "add": {
                           "component_groups": ["initial"]
                       }
                    },
                   {
                       "randomize": [
                           {
                               "weight": 40
                           },
                           {
                               "weight": 10,
                               "add": {
                                   "component_groups": ["baby"]
                               }
                           }
                       ]
                    }
               ]
            }
        }
```

### Filters

Filters condition an event or a part of an event by testing for a specific property on the current entity — the interacting entity or the world. Filters can be used in any event, but you can also use them directly in some components.

An event consists of up to five parameters. The parameters `test` and `value` are required — the others are optional:

|Test Type|The property to test for|
|-|-|
|`value`|The value to test for. This can be a string when testing for strings, a number when testing for numeric values, or a boolean.|
|`subject`|The entity that the test runs on. By default this is `self`, but it can also target the other entity involved in an interaction.|
|`operator`|The way in which the value is compared. This defaults to `equals` but can also test for smaller or greater values (on numeric values) or for inequality.|
|`domain`|This is only used by a few tests to provide additional context, such as the inventory slot to test in for the `has_equipment` test.|

**Note:** A full list of the filters, and how these parameters interact with them, can be found in the Entities technical document.

A minimal example of a filter inside an event could look like this: The component group can only be added if the entity has the tag `event_allowed`.

```json
"events": {
    "compass:example_event": {
        "filters": {
            "test": "has_tag", 
            "value":"event_allowed"
        },
        "add": {
            "component_groups": ["baby"]
        }
    }
}
```

If you want to use multiple filters, you can group them using the lists `all_of`, `any_of`, or `none_of` and will only succeed if all of the filters inside, any one of the filters inside, or none of the filters inside succeeded. These lists can be nested indefinitely.

In the following example, we're adding a second condition to the filter. The event will only run if the entity has the tag from the previous example **and** is less than 10 blocks away from the nearest player.

```json
"events": {
    "compass:example_event": {
        "filters": {
            "all_of":[
               {"test": "has_tag", "value": "event_allowed"},
               {"test": "distance_to_nearest_player", "operator": "<", "value": 10}
            ]
        },
        "add": {
            "component_groups": ["baby"]
        }
    }
}
```

## What's Next? 

If you ever get stuck or want a better understanding on how a component works, checking the vanilla behavior files will allow you to see working examples. Deconstructing a vanilla entity and applying it to a different entity is a great way to get started. Take the `minecraft:teleport` component from an Endermen and apply it to a creeper. Make a zombie rideable by the player. Make baby creepers.

The component system allows you to customize what your entity does and how it interacts with the world. If you want to learn more about designing how your entity looks and moves, check out the entity modeling and animation tutorial. 

> [!div class="nextstepaction"]
> [Entity Modeling and Animation](EntityModelingAndAnimation.md)