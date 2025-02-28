---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.find_mount"
description: "Describes the minecraft:behavior.find_mount ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.find_mount

Allows the mob to look around for another mob to ride atop it.


## Find Mount Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| avoid_water | false | Boolean true/false | If true, the mob will not go into water blocks when going towards a mount | Parrot: `true` | 
| max_failed_attempts | *not set* | Decimal number |  | Piglin: `20` | 
| mount_distance | -1 | Decimal number | This is the distance the mob needs to be, in blocks, from the desired mount to mount it. If the value is below 0, the mob will use its default attack distance | Parrot: `2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Husk: `1`, Parrot: `4` | 
| start_delay | 0 | Integer number | Time the mob will wait before starting to move towards the mount | Parrot: `100`, Piglin: `15` | 
| target_needed | false | Boolean true/false | If true, the mob will only look for a mount if it has a target |  | 
| within_radius | 0 | Decimal number | Distance in blocks within which the mob will look for a mount | Husk: `16` | 

## Samples

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)


```json
"minecraft:behavior.find_mount": {
  "priority": 1,
  "within_radius": 16
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.find_mount": {
  "priority": 4,
  "within_radius": 16,
  "avoid_water": true,
  "start_delay": 100,
  "target_needed": false,
  "mount_distance": 2
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.find_mount": {
  "priority": 1,
  "within_radius": 16,
  "start_delay": 15,
  "max_failed_attempts": 20
}
```
