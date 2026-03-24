---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.dragonstrafeplayer"
description: "Describes the minecraft:behavior.dragonstrafeplayer ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.dragonstrafeplayer

Allows this entity to fly around looking for a player to shoot fireballs at.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Ender Dragon (minecraft:ender_dragon)
> 

## Entity Dragonstrafeplayer Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_speed | 0.6000000238418579 | Decimal number | The speed this entity moves when this behavior has started or while it's active. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| fireball_range | 64 | Decimal number | Maximum distance of this entity's fireball attack while strafing. Value must be > 0. |  | 
| flight_speed | 0.6000000238418579 | Decimal number | The speed this entity moves while this behavior is not active. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ender Dragon: `2` | 
| switch_direction_probability | 0.125 | Decimal number | Percent chance to to switch this entity's strafe direction between clockwise and counterclockwise. Switch direction chance occurs each time a new target is chosen (1.0 = 100%). Value must be <= 1. |  | 
| target_in_range_and_in_view_time | 0.25 | Decimal number | Time (in seconds) the target must be in fireball range, and in view [ie, no solid terrain in-between the target and this entity], before a fireball can be shot. Value must be > 0. |  | 
| target_zone | {"max":150,"min":10} | [Target Zone](#item-components-floatrange) item | Minimum and maximum distance, from the target, this entity can use this behavior. |  | 
| turn_speed | 0.699999988079071 | Decimal number | The speed at which this entity turns while using this behavior. |  | 
| view_angle | 10 | Decimal number | The target must be within "view_angle" degrees of the dragon's current rotation before a fireball can be shot. Value must be > 0. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `target_zone`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:behavior.dragonstrafeplayer": {
  "priority": 2
}
```
