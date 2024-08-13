---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.stay_near_noteblock
description: "A reference document detailing the 'behavior.stay_near_noteblock' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.stay_near_noteblock

`minecraft:behavior.stay_near_noteblock` compels the entity to stay near a recently played noteblock.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| listen_time| 0 | Integer| Sets the time an entity should stay near a noteblock after hearing it. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| speed| 1.000000| Decimal| Sets the entity's speed when moving toward the block. |
| start_distance| 10.000000| Decimal| Sets the distance the entity needs to be away from the block to attempt to start the goal. |
| stop_distance| 2.000000| Decimal| Sets the distance from the block the entity will attempt to reach. |

## Example

```json
"minecraft:behavior.stay_near_noteblock": {
        "priority": 5,
        "speed": 8,
        "start_distance": 16,
        "stop_distance": 4
      }
```

## Vanilla entities example

### allay

```json
"minecraft:behavior.stay_near_noteblock": {
        "priority": 5,
        "speed": 8,
        "start_distance": 16,
        "stop_distance": 4
      }
```

## Vanilla entities using `minecraft:behavior.go_and_give_items_to_noteblock`

- [allay](../../../../Source/VanillaBehaviorPack_Snippets/entities/allay.md)
