---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.find_cover
description: "A reference document detailing the 'behavior.find_cover' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.find_cover

`minecraft:behavior.find_cover` compels an entity to locate shade in the world.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the mob has to wait before using the goal again. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.find_cover":{
    "priority": 2,
    "cooldown_time":10,
    "speed_multiplier":3
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.find_cover": {
          "priority": 0,
          "speed_multiplier": 1,
          "cooldown_time": 0.0
        }
```

## Vanilla entities using `minecraft:behavior.find_cover`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
