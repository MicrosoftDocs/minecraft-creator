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

Controls specific attack behavior for Ocelots.


## Entity Ocelotattack Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown_time | 1 | Decimal number | Time (in seconds) between attacks. Value must be > 0. | 
| max_distance | 15 | Decimal number | Max distance from the target, this entity will use this attack behavior. Value must be > 0. | 
| max_sneak_range | 15 | Decimal number | Max distance from the target, this entity starts sneaking. Value must be > 0. | 
| max_sprint_range | 4 | Decimal number | Max distance from the target, this entity starts sprinting (sprinting takes priority over sneaking). Value must be > 0. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| reach_multiplier | 2 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. Value must be > 0. | 
| sneak_speed_multiplier | 0.6000000238418579 | Decimal number | Modifies the attacking entity's movement speed while sneaking. Value must be > 0. | 
| sprint_speed_multiplier | 1.3300000429153442 | Decimal number | Modifies the attacking entity's movement speed while sprinting. Value must be > 0. | 
| walk_speed_multiplier | 0.800000011920929 | Decimal number | Modifies the attacking entity's movement speed when not sneaking or sprinting, but still within attack range. Value must be > 0. | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. Value must be > 0. | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity's head can rotate while trying to look at the target. Value must be > 0. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
