---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ocelotattack"
description: "Describes the minecraft:behavior.ocelotattack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ocelotattack

Allows an entity to attack by sneaking and pouncing.


## Ocelotattack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 1 | Decimal number | Time (in seconds) between attacks. | Cat: `1` | 
| max_distance | 15 | Decimal number | Max distance from the target, this entity will use this attack behavior. | Cat: `15` | 
| max_sneak_range | 15 | Decimal number | Max distance from the target, this entity starts sneaking. | Cat: `15` | 
| max_sprint_range | 4 | Decimal number | Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking). | Cat: `4` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `4` | 
| reach_multiplier | 2 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. | Cat: `2` | 
| sneak_speed_multiplier | 0.6 | Decimal number | Modifies the attacking entity's movement speed while sneaking. | Cat: `0.6` | 
| sprint_speed_multiplier | 1.33 | Decimal number | Modifies the attacking entity's movement speed while sprinting. | Cat: `1.33` | 
| walk_speed_multiplier | 0.8 | Decimal number | Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range. | Cat: `0.8` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. | Cat: `30` | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. | Cat: `30` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.ocelotattack": {
  "priority": 4,
  "cooldown_time": 1,
  "x_max_rotation": 30,
  "y_max_head_rotation": 30,
  "max_distance": 15,
  "max_sneak_range": 15,
  "max_sprint_range": 4,
  "reach_multiplier": 2,
  "sneak_speed_multiplier": 0.6,
  "sprint_speed_multiplier": 1.33,
  "walk_speed_multiplier": 0.8
}
```
