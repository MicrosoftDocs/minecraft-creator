---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.swoop_attack"
description: "Describes the minecraft:behavior.swoop_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.swoop_attack

Allows an entity to attack using swoop attack behavior; Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.


## Entity Swoop Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| damage_reach | 0.20000000298023224 | Decimal number | Added to the base size of the entity, to determine the target's maximum allowable distance, when trying to deal attack damage. |  | 
| delay_range | {"max":20,"min":10} | [Delay Range](#item-components-floatrange) item | Minimum and maximum cooldown time-range (in seconds) between each attempted swoop attack. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Phantom: `2` | 
| speed_multiplier | 1 | Decimal number | During swoop attack behavior, this determines the multiplier the entity's speed is modified by when moving toward the target. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `delay_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Phantom](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/phantom.json)


```json
"minecraft:behavior.swoop_attack": {
  "priority": 2
}
```
