---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - Block States and Permutations
description: "A reference document providing an overview of block permutations and block states"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block States and Permutations

Consider block permutations as variations of the same block, while block states are the flags that can be changed and queried in order to determine which permutation a block should use. Block permutations and states go hand in hand, so let's look at how they are used together.

## Block States

Block states are variables that can be set to different values. Their current value can be evaluated in a permutation's "condition" to determine if that permutation should be used.

The "states" field is contained in the "description" section of a custom block's behavior pack JSON file. It is a JSON object. Inside, a map of key/value pairs must be provided. Each key is the name of a state, which must be properly namespaced. Each value is an array that contains all of the possible values of that state. State values can be Booleans, numbers, or strings.

> [!NOTE]
> State values can also be json objects, defining a range of numbers:
>
> "test:integer_state":{"values":{"min":0,"max":3}} would be the same as "test:integer_state":[0, 1, 2, 3]

> [!NOTE]
> To use custom block states, the _Holiday Creator Features_ experiment must be toggled ON.

## Block Permutations

You can think of permutations as different variations of the same block. For example, you may have a TV block with a different permutation for each way it may be rotated (North, South, East, or West). These permutations are all the same TV block, but with different rotations.

Another example is a lamp block with one permutation for its "on" state that consists of a high light emission, and another permutation for its "off" state that consists of zero light emission. These permutations are the same lamp, simply having different light emission values.

Permutations allow you to create variations of the same block inside one block behavior pack JSON file instead of making files for each variation of the same block. For the lamp, instead of making two separate behavior pack JSON files, one for the lamp that is "on" and one for the lamp that is "off", you have one file with two permutations.

Each permutation is a JSON Object that consists of 2 parameters, shown below.

### Block Permutation Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|condition|*not set* | String| A Molang expression that evaluates to true or false to determine if this permutation should be used. For permutation conditions you are limited to using one Molang query: `"query.block_state()"`. |
|component|*not set* | JSON Object| List of all components that are used in this permutation. |

### Code example of a custom block's behavior JSON file with block states and permutations

```json
{
  "format_version": "1.19.40",
  "minecraft:block": {
    "description": {
      "identifier": "custom:lamp_block",
      "states": {
        "custom:is_lit": [ true, false ]
      }
    },
    "permutations": [
      {
        "condition": "query.block_state('custom:is_lit') == true",
        "components": {
          "minecraft:light_emission": 15
        }
      },
      {
        "condition": "query.block_state('custom:is_lit') == false",
        "components": {
          "minecraft:light_emission": 0
        }
      }
    ],
    "components": {
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00" 
    }
  }
}
```

This JSON file represents a lamp block that has two different conditions: "on" and "off".

The block has one block state, `"custom:is_lit"` that has two values, true and false. The values represent the "on" and "off" conditions.

The block has one permutation for "on" and one permutation for "off". The first permutation's condition requires that the block state `"custom:is_lit"` be equal to true in order to be used.

The second permutation's condition requires that the block state `"custom:is_lit"` be equal to false to be used.

Now the question becomes "How does the block state `"custom:is_lit"` get set or changed?"

### Using the /setblock command to set a custom block with a specific value for a block state

One way to give a block a specific state value is by using the `/setblock` command. In the above example, you can set the lamp to "on" like this:

`/setblock ~ ~ ~ custom:lamp_block [ "custom:is_lit": true ]`

> [!NOTE]
> You can list several block states with specific values in the brackets to set multiple block states at once.

### Unlimited* Power

A cap of 65,536 permutations that all blocks on a map can generate has been placed due to performance concerns. Attempting to add a resource pack with more permutations than said cap will result in the following warning:

"Worlds with over 65536 block permutations may degrade performance. Current world has XXXXXX permutations."

This warning will block marketplace ingestion, so you'll definitely want to fix this issue before submitting. The good news is that you can troubleshoot the issue with the debug log, which contains a list of blocks with permutations, sorted with the largest amount at the top.

*Yes, it's not **technically** unlimited, but 65536 is so mind-bogglingly impressive that it may as well be, right?
