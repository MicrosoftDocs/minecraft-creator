---
author: mammerla
ms.author: mikeam
title: Block Documentation - Block Properties and Permutations
ms.prod: gaming
---

# Block Documentation - Block Properties and Permutations

Consider block permutations as variations of the same block, while block properties are the flags that can be changed and queried in order to determine which permutation a block should use. Block permutations and properties go hand in hand, so let's look at how they are used together.

## Block Properties

Block properties are variables that can be set to different values. Their current value can be evaluated in a permutation's "condition" to determine if that permutation should be used.
The "properties" field is contained in the "description" section of a custom block's behavior pack JSON file. It is a JSON object. Inside, a map of key/value pairs must be provided. Each key is the name of a property, which must be properly namespaced. Each value is an array that contains all of the possible values of that property. Property values can be Booleans, numbers, or strings.

> [!NOTE]
> Property values can also be json objects, defining a range of numbers:
>
> "test:integer_property":{"values":{"min":0,"max":3}} would be the same as "test:integer_property":[0, 1, 2, 3]

## Block Permutations

You can think of permutations as different variations of the same block. For example, you may have a TV block with a different permutation for each way it may be rotated (North, South, East, or West). These permutations are all the same TV block, but with different rotations.

Another example is a lamp block with one permutation for its "on" state that consists of a high light emission, and another permutation for its "off" state that consists of zero light emission. These permutations are the same lamp, simply having different light emission values.

Permutations allow you to create variations of the same block inside one block behavior pack json file instead of making files for each variation of the same block. For the lamp, instead of making 2 separate behavior pack JSON files, one for the lamp that is "on" and one for the lamp that is "off", you have one file with 2 permutations.

Each permutation is a JSON Object that consists of 2 parameters, shown below.

### Block Permutation Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String| A Molang expression that evaluates to true or false to determine if this permutation should be used. For permutation conditions you are limited to using one Molang query: `"query.block_property()"`. |
|component|*not set* | JSON Object| List of all components that are used in this permutation. |

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

The block has one block property, `"custom:is_lit"` that has two values, true and false. The values represent the "on" state and the "off" state.

The block has one permutation for its "on" state and one permutation for its "off" state. The first permutation's condition requires that the block property `"custom:is_lit"` be equal to true in order to be used.

The second permutation's condition requires that the block property` "custom:is_lit"` be equal to false to be used.

Now the question becomes "How does the block property "custom:is_lit" get set or changed?"

### Using the /setblock command to set a custom block with a specific value for a block property

One way to give a block a specific property value is by using the `/setblock` command. In the above example, you can set the lamp's "on" state like this:

`/setblock ~ ~ ~ custom:lamp_block [ "custom:is_lit": true ]`

> [!NOTE]
> You can list several block properties with specific values in the brackets to set multiple block property values at once.

### Using events to set a specific block property

Events can also be used to set a specific block property. Use a [block event trigger component](./BlockTriggers/BlockTriggerList.md) to determine when you want an event to fire, and use the event response "set_block_property" to set the block property to a specific value when it fires.

### Unlimited* Power!

A cap of 65,536 permutations that all blocks on a map can generate has been placed due to performance concerns. Attempting to add a resource pack with more permutations than said cap will result in the following warning:

>World with over 65536 block permutations may degrade performance. Current world has XXXXXX permutations."

This warning will block marketplace ingestion, so you'll definitely want to fix this issue before submitting. The good news is that you can troubleshoot the issue with the debug log, which contains a list of blocks with permutations, sorted with the largest amount at the top.

*Yes, it's not **technically** unlimited, but 65536 is so mind-bogglingly impressive that it may as well be, right? 
