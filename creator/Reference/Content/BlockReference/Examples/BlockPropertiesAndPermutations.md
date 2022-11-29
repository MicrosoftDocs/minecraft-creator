---
author: mammerla
ms.author: mikeam
title: Block Documentation - Block Properties and Permutations
ms.prod: gaming
---

# Block Documentation - Block Properties and Permutations

Block permutations can be thought of as different variations of the same block. Block properties are the flags that can be changed and queried in order to determine which permutation a block should use. Clearly, block permutations and properties go hand in hand. Let's learn how they are used together.

> [!IMPORTANT]
> Block Properties and Permutations require the Holiday Creator Features experimental toggle to be set to true in order to function properly.
> Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
> To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../Documents/ExperimentalFeaturesToggle.md).

## Block Properties

Block properties are kind of like variables that can be set to different values. Their current value can then be evaluated in a permutation's "condition" to determine if that permutation should be used.
The "properties" field is contained in the "description" section of your custom block's behavior pack JSON file. It is a JSON object. Inside, you must provide a map of key/value pairs. Each key is the name of a property, which must be properly namespaced. Each value is an array that contains all of the possible values of that property. Property values can be Booleans, numbers, or strings.

## Block Permutations

You can think of permutations as different variations of the same block. So, for example, you may have a TV block that has a different permutation for each way it may be rotated, North, South, East, or West. These permutations are all the same TV block, but with different rotations. Or you may have a lamp block that has one permutation for its "on" state that consists of a high light emission, and another permutation for its "off" state that consists of zero light emission. These permutations are the same lamp, except for having different light emission values.

These examples already show us how permutations are useful. They allow you to create variations of the same block inside one block behavior pack json file, instead of having to make multiple block behavior pack json files for different variations of the same block. So instead of making 4 separate behavior pack JSON files, one for each rotation of the TV block, you just need one file with 4 permutations. Same for the lamp, instead of making 2 separate behavior pack JSON files, one for the lamp that is "on" and one for the lamp that is "off", you just need one file with 2 permutations.

Each permutation is a JSON Object that consists of 2 parameters, shown below.

### Block Permutation Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String| A Molang expression that evaluates to true or false to determine if this permutation should be used. For permutation conditions you are limited to using one Molang query: `"query.block_property()"`. |
|component|*not set* | JSON Object| List of all components that are used in this permutation. View the list of components in the [Block Components List](\BlockComponents\BlockComponentsList.md). |

### Code example of a custom block's behavior JSON file with block properties and permutations

```json
{
  "format_version": "1.19.40",
  "minecraft:block": {
    "description": {
      "identifier": "custom:lamp_block",
      "properties": {
        "custom:is_lit": [ true, false ]
      }
    },
    "permutations": {
      {
        "condition": "query.block_property('custom:is_lit') == true",
        "components": {
          "minecraft:light_emission": 15
        }
      },
      {
        "condition": "query.block_property('custom:is_lit') == false",
        "components": {
          "minecraft:light_emission": 0
        }
      }
    },
    "components": {
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00" 
    }
  }
}
```

This JSON file represents a lamp block that has two different states: an "on" state and an "off" state.

This block has one block property, `"custom:is_lit"` that has two values, true and false. These two values represent the "on" state and the "off" state.

This block has one permutation for its "on" state and one permutation for its "off" state. The first permutation's condition requires that the block property `"custom:is_lit"` be equal to true in order for that permutation to be used. That makes sense because the light emission value in this permutation is 15, so we can see that it represents the lamp's "on" state. 
The second permutation's condition requires that the block property` "custom:is_lit"` be equal to false in order for that permutation to be used. That makes sense because the light emission value in this permutation is 0, so we can see that it represents the lamp's "off" state.

So, in summary, when the block property `"custom:is_lit"` is equal to true, the first permutation (with a high light emission) is used. When it is equal to false, the second permutation (with a low light emission) is used. But how does the block property "custom:is_lit" get set or changed?

### Using the /setblock command to set a custom block with a specific value for a block property

One way you can give a block a specific value for its properties is by using the `/setblock` command. Previously, this ability was only available for Vanilla blocks, to set a specific Vanilla block with a specific block state, like so:

`/setblock ~ ~ ~ planks [ "wood_type": "oak" ]`

But now, this ability is available for custom blocks as well. So for the above example, you can set a lamp with its "on" state by doing:

`/setblock ~ ~ ~ custom:lamp_block [ "custom:is_lit": true ]`

> [!NOTE]
> You can list several block properties with specific values in the square brackets if you want to set multiple block property values at the same time.

### Using events to set a specific block property

You can also use events to set a specific block property. You can use a [block event trigger component](./BlockTriggers/BlockTriggerList.md) to determine when you want an event to fire, and you can use the event response "set_block_property" (as explained in [Set Block Property](\BlockEvents\minecraftBlock_set_block_property.md)) to set your block property to a specific value when the event fires.
