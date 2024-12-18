---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.hide
description: "A reference document detailing the 'behavior.hide' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.hide

`minecraft:behavior.hide` compels a mob with the `hide` component to attempt to move to an owned or nearby point of interest (POI) and hide there.

>[!IMPORTANT]
> `minecraft:behavior.hide` requires a point of interest to be set in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|duration| 1.0| Decimal| Amount of time in seconds that the mob reacts. |
|poi_type|*not set* | String| Defines what POI type to hide at. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|timeout_cooldown| 8.0| Decimal| The cooldown time in seconds before the goal can be reused after a internal failure or timeout condition. |

## Example

```json
"minecraft:behavior.hide":{
    "priority": 2,
    "speed_multiplier": 1.2,
    "poi_type": "bed",
    "duration": 60.0,
    "timeout_cooldown": 8.0
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.hide": {
        "priority": 0,
        "speed_multiplier": 0.8,
        "poi_type": "bed",
        "duration": 30.0
      }
```

## Vanilla entities using `minecraft:behavior.hide`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
