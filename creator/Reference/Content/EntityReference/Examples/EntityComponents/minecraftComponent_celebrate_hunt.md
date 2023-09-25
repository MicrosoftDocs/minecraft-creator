---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:celebrate_hunt
description: "A reference document detailing the 'celebrate_hunt' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:celebrate_hunt

`minecraft:celebrate_hunt` compels an entity to celebrate when hunting a specific entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|broadcast| true| Boolean|  If true, celebration will be broadcasted to other entities in the radius. |
|[celebration_targets](../FilterList.md)|*not set* | Minecraft Filter|  The list of conditions that the target of a hunt must satisfy to initiate celebration. |
|celebrate_sound|*not set* | String|  The sound event to play when the mob is celebrating |
|duration| 4| Integer| Duration, in seconds, of celebration |
|radius| 16| Decimal|  If broadcast is enabled, specifies the radius in which it will notify other entities for celebration. |
| sound_interval| 0| Range [a, b]| The range of time in seconds to wait before playing the sound again |

## Example

```json
"minecraft:celebrate_hunt":{
    "broadcast": true,
    "celebration_targets": {
            "all_of": [
              {
                "test": "is_family",
                "value": "cow"
              }
            ]
          },
    "celebrate_sound": "celebrate",
    "duration": 4,
    "radius": 16.0,
    "sound_interval": {
            "range_min": 1.0,
            "range_max": 5.0
    }
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:celebrate_hunt": {
    "celebration_targets": {
    "all_of": [
        {
        "test": "is_family",
        "value": "hoglin"
        }
    ]
    },
    "broadcast": true,
    "duration": 10,
    "celebrate_sound": "celebrate",
    "sound_interval": {
        "range_min": 2.0,
        "range_max": 5.0
    },
    "radius": 16
}
```

## Vanilla entities using `minecraft:celebrate_hunt`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
