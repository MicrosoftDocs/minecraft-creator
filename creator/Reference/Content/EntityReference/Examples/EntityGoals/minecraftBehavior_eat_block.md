---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.eat_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.eat_block

`minecraft:behavior.eat_block` allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| eat_and_replace_block_pairs| N/A| List| A collection of pairs of blocks; the first ("eat_block") is the block the entity should eat, the second ("replace_block") is the block that should replace the eaten block. |
| on_eat| N/A| Trigger| The event to trigger when the block eating animation has completed. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| success_chance| 0.02| Molang| A molang expression defining the success chance the entity has to consume a block. |
| time_until_eat| 1.8| Decimal| The amount of time (in seconds) it takes for the block to be eaten upon a successful eat attempt. |

## Example

```json
"minecraft:behavior.eat_block": {
    "priority": 1,
    "success_chance": "query.is_baby ? 0.02 : 0.003",
    "time_until_eat": 3,
    "eat_and_replace_block_pairs": [
        { "eat_block": "grass", "replace_block": "dirt" },
        { "eat_block": "tallgrass", "replace_block": "air" }
    ],
    "on_eat": {
        "event": "minecraft:on_eat_block",
        "target": "self"
    }
}
```

## Vanilla entities examples

### sheep

```json
"minecraft:behavior.eat_block": {
    "priority": 6,
    "success_chance": "query.is_baby ? 0.02 : 0.001",
    "time_until_eat": 1.8,
    "eat_and_replace_block_pairs": [
        { "eat_block": "grass", "replace_block": "dirt" },
        { "eat_block": "tallgrass", "replace_block": "air" }
    ],
    "on_eat": {
        "event": "minecraft:on_eat_block",
        "target": "self"
    }
}
```

## Vanilla entities using `eat_block`

- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
