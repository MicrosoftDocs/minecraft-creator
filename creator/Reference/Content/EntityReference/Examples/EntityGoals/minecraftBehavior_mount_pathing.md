---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.mount_pathing"
description: "Describes the minecraft:behavior.mount_pathing ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.mount_pathing

Allows the mob to move around on its own while mounted seeking a target to attack. Also will allow an entity to target another entity for an attack.


## Mount Pathing Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cave Spider: `5`, Chicken: `2`, Llama: `1` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Cave Spider: `1.25`, Chicken: `1.5` | 
| target_dist | 0 | Decimal number | The distance at which this mob wants to be away from its target |  | 
| track_target | false | Boolean true/false | If true, this mob will chase after the target as long as it's a valid target | Cave Spider: `true` | 

## Samples

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 5,
  "speed_multiplier": 1.25,
  "target_dist": 0,
  "track_target": true
}
```

#### [Chicken](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/chicken.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 2,
  "speed_multiplier": 1.5,
  "target_dist": 0,
  "track_target": true
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 1,
  "speed_multiplier": 1.25,
  "target_dist": 0,
  "track_target": true
}
```
