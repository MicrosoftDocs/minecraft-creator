---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_owner"
description: "Describes the minecraft:behavior.follow_owner ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_owner

Allows a mob to follow the player that owns it.

> [!Note]
> Requires the entity to be marked as an owner through taming.


## Follow Owner Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| can_teleport | true | Boolean true/false | Defines if the mob will teleport to its owner when too far away. |  | 
| ignore_vibration | true | Boolean true/false | Defines if the mob should disregard following its owner after detecting a recent vibration. |  | 
| max_distance | 60 | Decimal number | The maximum distance the mob can be from its owner to start following it. Applicable only when "can_teleport" is set to false. |  | 
| post_teleport_distance | false | Boolean true/false | Defines how far (in blocks) the entity will be from its owner after teleporting. If not specified, it defaults to "stop_distance" + 1, allowing the entity to seamlessly resume navigation. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `6`, Cat: `4`, Parrot: `3` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Allay: `8`, Cat: `1` | 
| start_distance | 10 | Decimal number | The minimum distance the mob must be from its owner to start following it. | Allay: `16`, Cat: `10`, Parrot: `5` | 
| stop_distance | 2 | Decimal number | The distance at which the mob will stop following its owner. | Allay: `4`, Cat: `2`, Parrot: `1` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.follow_owner": {
  "priority": 6,
  "speed_multiplier": 8,
  "start_distance": 16,
  "stop_distance": 4,
  "can_teleport": false,
  "ignore_vibration": false
}
```

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.follow_owner": {
  "priority": 4,
  "speed_multiplier": 1,
  "start_distance": 10,
  "stop_distance": 2
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.follow_owner": {
  "priority": 3,
  "speed_multiplier": 1,
  "start_distance": 5,
  "stop_distance": 1
}
```

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:behavior.follow_owner": {
  "priority": 6,
  "speed_multiplier": 1,
  "start_distance": 10,
  "stop_distance": 2
}
```
