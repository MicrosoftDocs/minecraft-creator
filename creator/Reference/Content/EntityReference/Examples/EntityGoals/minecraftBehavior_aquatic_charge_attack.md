---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.aquatic_charge_attack"
description: "Describes the minecraft:behavior.aquatic_charge_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.aquatic_charge_attack

Enables an aquatic mob to dash at its target with knockback; includes overshoot and cooldown settings.


## Entity Aquatic Charge Attack Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| attack_reach | 0.05000000074505806 | Decimal number | Horizontal reach grown around the mob's AABB to register a hit. | 
| charge_cooldown_time | {"max":6,"min":2} | [Charge Cooldown Time](#item-components-floatrange) item | Range of time in seconds to wait before starting another charge. Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected | 
| charge_overshoot_distance | 1.5 | Decimal number | Distance beyond the target the mob aims during a charge. | 
| charge_speed | 0.05999999865889549 | Decimal number | Absolute speed used during the charge attack. Value must be >= 0.05000000074505806. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| knockback_force | 2 | Decimal number | Knockback force applied to the target on hit. | 
| max_charge_distance | 16 | Decimal number | Maximum distance at which the mob attempts a charge. | 
| priority | 0 | Integer number |  | 

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `charge_cooldown_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
