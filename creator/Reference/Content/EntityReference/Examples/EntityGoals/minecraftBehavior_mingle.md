---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.mingle"
description: "Describes the minecraft:behavior.mingle ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.mingle

Allows an entity to go to the village bell and mingle with other entities.


## Mingle Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the goal again | Villager V2: `10` | 
| duration | 1 | Decimal number | Amount of time in seconds that the entity will chat with another entity | Villager V2: `30` | 
| mingle_distance | 2 | Decimal number | The distance from its partner that this entity will mingle. If the entity type is not the same as the entity, this value needs to be identical on both entities. | Villager V2: `2` | 
| mingle_partner_type | empty | Array of strings | The entity type that this entity is allowed to mingle with | Villager V2: `"minecraft:villager_v2"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `7` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Villager V2: `0.5` | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)

At /minecraft:entity/component_groups/job_specific_goals/minecraft:behavior.mingle/: 

```json
"minecraft:behavior.mingle": {}
```

At /minecraft:entity/component_groups/gather_schedule_villager/minecraft:behavior.mingle/: 

```json
"minecraft:behavior.mingle": {
  "priority": 7,
  "speed_multiplier": 0.5,
  "duration": 30,
  "cooldown_time": 10,
  "mingle_partner_type": "minecraft:villager_v2",
  "mingle_distance": 2
}
```
