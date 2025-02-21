---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:celebrate_hunt"
description: "Describes the minecraft:celebrate_hunt entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:celebrate_hunt

Specifies hunt celebration behaviour.


## Celebrate Hunt Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| broadcast | true | Boolean true/false | If true, celebration will be broadcasted to other entities in the radius. | Piglin: `true` | 
| celeberation_targets | *not set* | Minecraft filter | The list of conditions that target of hunt must satisfy to initiate celebration. |  | 
| celebrate_sound | *not set* | String | The sound event to play when the mob is celebrating | Piglin: `"celebrate"` | 
| celebration_targets | *not set* | [Celebration Targets](#celebration-targets-item-type) item |  | Piglin: `{"all_of":[{"test":"is_family","value":"hoglin"}]}` | 
| duration | 4 | Integer number | Duration, in seconds, of celebration | Piglin: `10` | 
| radius | 16 | Decimal number | If broadcast is enabled, specifies the radius in which it will notify other entities for celebration. | Piglin: `16` | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again | Piglin: `{"range_min":2,"range_max":5}` | 

## Celebration Targets item type

#### Celebration_targets Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| all_of | *not set* | String |  | Piglin: `[{"test":"is_family","value":"hoglin"}]` | 

## Samples

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


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
    "range_min": 2,
    "range_max": 5
  },
  "radius": 16
}
```
