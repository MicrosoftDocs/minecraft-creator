---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.melee_attack"
description: "Describes the minecraft:behavior.melee_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.melee_attack

Allows an entity to deal damage through a melee attack.

> [!Note]
> Requires a target in order to work properly. Entities can generate targets via one of the following behaviors:
> 
> * [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
> * [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)
> [!Note]
> Requires the following component in order to work properly:
> 
> * [Attack (minecraft:attack)](../EntityComponents/minecraftComponent_attack.md)
> 

## Melee Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_once | false | Boolean true/false | Allows the entity to use this attack behavior, only once EVER. |  | 
| attack_types | *not set* | String | Defines the entity types this entity will attack. |  | 
| can_spread_on_fire | false | Boolean true/false | If the entity is on fire, this allows the entity's target to catch on fire after being hit. |  | 
| cooldown_time | 1 | Decimal number | Cooldown time (in seconds) between attacks. | Axe Turret: `0.1` | 
| inner_boundary_time_increase | 0.25 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary". |  | 
| max_path_time | 0.55 | Decimal number | Maximum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| melee_fov | 90 | Decimal number | Field of view (in degrees) when using the sensing component to detect an attack target. | Axe Turret: `360` | 
| min_path_time | 0.2 | Decimal number | Minimum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| on_attack | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when this entity successfully attacks. |  | 
| on_kill | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when this entity kills the target. |  | 
| outer_boundary_time_increase | 0.5 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary". |  | 
| path_fail_time_increase | 0.75 | Decimal number | Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path. |  | 
| path_inner_boundary | 16 | Decimal number | Distance at which to increase attack path recalculation by "inner_boundary_tick_increase". |  | 
| path_outer_boundary | 32 | Decimal number | Distance at which to increase attack path recalculation by "outer_boundary_tick_increase". |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Creeper: `4`, Sheepomelon: `2`, Cow: `3` | 
| random_stop_interval | 0 | Integer number | This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval". |  | 
| reach_multiplier | 2 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |  | 
| require_complete_path | false | Boolean true/false | Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior. |  | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the attacking entity's speed when moving toward the target. | Creeper: `1.25`, Axe Turret: `5` | 
| track_target | false | Boolean true/false | Allows the entity to track the attack target, even if the entity has no sensing. | Axe Turret: `true` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. | Axe Turret: `360` | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. | Axe Turret: `360` | 

## Samples

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)


```json
"minecraft:behavior.melee_attack": {
  "priority": 4,
  "speed_multiplier": 1.25,
  "track_target": false,
  "reach_multiplier": 0
}
```

#### [Sheepomelon](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/sheepomelon.behavior.json)


```json
"minecraft:behavior.melee_attack": {
  "priority": 2
}
```

#### [Cow](https://github.com/microsoft/minecraft-samples/tree/main/behavior_pack_sample/entities/cow.json)


```json
"minecraft:behavior.melee_attack": {
  "priority": 3
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:behavior.melee_attack": {
  "priority": 1,
  "melee_fov": 360,
  "speed_multiplier": 5,
  "cooldown_time": 0.1,
  "track_target": true,
  "y_max_head_rotation": 360,
  "x_max_rotation": 360,
  "attack_once": false
}
```
