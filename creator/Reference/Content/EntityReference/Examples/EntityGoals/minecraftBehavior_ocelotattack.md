---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ocelotattack"
description: "Describes the minecraft:behavior.ocelotattack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ocelotattack

Allows an entity to attack by sneaking and pouncing.


## Ocelotattack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 1 | Decimal number | Time (in seconds) between attacks. |  | 
| max_distance | 15 | Decimal number | Max distance from the target, this entity will use this attack behavior. |  | 
| max_sneak_range | 15 | Decimal number | Max distance from the target, this entity starts sneaking. |  | 
| max_sprint_range | 4 | Decimal number | Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking). |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| reach_multiplier | 2 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |  | 
| sneak_speed_multiplier | 0.6 | Decimal number | Modifies the attacking entity's movement speed while sneaking. |  | 
| sprint_speed_multiplier | 1.33 | Decimal number | Modifies the attacking entity's movement speed while sprinting. |  | 
| walk_speed_multiplier | 0.8 | Decimal number | Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range. |  | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 

## Samples
