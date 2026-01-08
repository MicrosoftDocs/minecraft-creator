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
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Camel Husk: `3`, Cat: `1`, Cave Spider: `5` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Camel Husk: `4`, Cat: `1.25`, Chicken: `1.5` | 
| target_dist | 0 | Decimal number | The distance at which this mob wants to be away from its target | Skeleton Horse: `4` | 
| track_target | false | Boolean true/false | If true, this mob will chase after the target as long as it's a valid target | Camel Husk: `true` | 

## Samples

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 3,
  "speed_multiplier": 4,
  "target_dist": 0,
  "track_target": true
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 1,
  "speed_multiplier": 1.25,
  "target_dist": 0,
  "track_target": true
}
```

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

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 2,
  "speed_multiplier": 1.25,
  "target_dist": 0,
  "track_target": true
}
```

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 5,
  "speed_multiplier": 1.5,
  "target_dist": 0,
  "track_target": true
}
```

#### [Skeleton Horse](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/skeleton_horse.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 2,
  "speed_multiplier": 1.5,
  "target_dist": 4,
  "track_target": true
}
```

#### [Sheepomelon](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/1_hello_world/behavior_packs/aop_mobs/entities/sheepomelon.behavior.json)


```json
"minecraft:behavior.mount_pathing": {
  "priority": 3,
  "speed_multiplier": 1.5,
  "target_dist": 0,
  "track_target": true
}
```
