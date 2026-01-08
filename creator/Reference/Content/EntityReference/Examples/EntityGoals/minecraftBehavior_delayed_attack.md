---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.delayed_attack"
description: "Describes the minecraft:behavior.delayed_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.delayed_attack

Allows an entity to attack, while also delaying the damage-dealt until a specific time in the attack animation.


## Delayed Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_duration | 0.75 | Decimal number | The entity's attack animation will play out over this duration (in seconds). Also controls attack cooldown. | Ravager: `0.75` | 
| attack_once | false | Boolean true/false | Allows the entity to use this attack behavior, only once EVER. |  | 
| attack_types | *not set* | String | Defines the entity types this entity will attack. |  | 
| can_spread_on_fire | false | Boolean true/false | If the entity is on fire, this allows the entity's target to catch on fire after being hit. |  | 
| hit_delay_pct | 0.5 | Decimal number | The percentage into the attack animation to apply the damage of the attack (1.0 = 100%). | Ravager: `0.5` | 
| inner_boundary_time_increase | 0.25 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary". |  | 
| max_path_time | 0.55 | Decimal number | Maximum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| melee_fov | 90 | Decimal number | Field of view (in degrees) when using the sensing component to detect an attack target. |  | 
| min_path_time | 0.2 | Decimal number | Minimum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| on_attack | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when this entity successfully attacks. |  | 
| on_kill | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when this entity kills the target. |  | 
| outer_boundary_time_increase | 0.5 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary". |  | 
| path_fail_time_increase | 0.75 | Decimal number | Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path. |  | 
| path_inner_boundary | 16 | Decimal number | Distance at which to increase attack path recalculation by "inner_boundary_tick_increase". |  | 
| path_outer_boundary | 32 | Decimal number | Distance at which to increase attack path recalculation by "outer_boundary_tick_increase". |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Ravager: `4` | 
| random_stop_interval | 0 | Integer number | This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval". |  | 
| reach_multiplier | 1.5 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. | Ravager: `1.5` | 
| require_complete_path | false | Boolean true/false | Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior. |  | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the attacking entity's speed when moving toward the target. | Ravager: `1` | 
| track_target | true | Boolean true/false | Allows the entity to track the attack target, even if the entity has no sensing. | Ravager: `true` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 

## Samples

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


```json
"minecraft:behavior.delayed_attack": {
  "priority": 4,
  "attack_once": false,
  "track_target": true,
  "require_complete_path": false,
  "random_stop_interval": 0,
  "reach_multiplier": 1.5,
  "speed_multiplier": 1,
  "attack_duration": 0.75,
  "hit_delay_pct": 0.5
}
```
