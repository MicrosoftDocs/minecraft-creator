---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ranged_attack"
description: "Describes the minecraft:behavior.ranged_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ranged_attack

Allows an entity to attack by using ranged shots. "charge_shoot_trigger" must be greater than 0 to enable charged up burst-shot attacks. Requires minecraft:shooter to define projectile behaviour.


## Entity Ranged Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_interval | {"max":-1,"min":-1} | [Attack Interval](#item-floatrange) item | Reload-time range (in seconds), when not using a charged shot. | Bogged: `3.5`, `2.5` | 
| attack_interval_max | 0 | Decimal number | Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. | Blaze: `5`, Shulker: `3` | 
| attack_interval_min | 0 | Decimal number | Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. | Blaze: `3`, Shulker: `1` | 
| attack_radius | 0 | Decimal number | Minimum distance to target before this entity will attempt to shoot. Value must be > 0. | Blaze: `48`, Bogged: `15`, Llama: `64` | 
| attack_radius_min | 0 | Decimal number | Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing Value must be > 0. |  | 
| burst_interval | 0 | Decimal number | Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack. Value must be > 0. | Blaze: `0.3` | 
| burst_shots | 1 | Integer number | Number of shots fired every time the attacking entity uses a charged up attack. | Blaze: `3` | 
| charge_charged_trigger | 0 | Decimal number | Time (in seconds, then add "charge_shoot_trigger"), before a charged up attack is done charging. Charge-time decays while target is not in sight. Value must be > 0. | Llama: `1` | 
| charge_shoot_trigger | 0 | Decimal number | Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight. Value must be > 0. | Blaze: `4`, Llama: `2` | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Blaze: `3`, Llama: `2`, Parched: `1` | 
| ranged_fov | 90 | Decimal number | Field of view (in degrees) when using sensing to detect a target for attack. |  | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| speed_multiplier | 1 | Decimal number | During attack behavior, this multiplier modifies the entity's speed when moving toward the target. Value must be > 0. |  | 
| swing | false | Boolean true/false | If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack. |  | 
| target_in_sight_time | 1 | Decimal number | Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it. Value must be > 0. |  | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 

### attack_interval

Reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance.  Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected.


### Item FloatRange
Specifies a numeric range between minimum and maximum values for randomized item properties. Used for variable durability, damage ranges, or timing intervals. The game picks a random value within the range when the property is evaluated, adding natural variation to item behavior.


#### Item FloatRange Properties

**JSON path:** `attack_interval`

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

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.ranged_attack": {
  "charge_shoot_trigger": 4,
  "attack_interval_max": 5,
  "attack_interval_min": 3,
  "attack_radius": 48,
  "burst_interval": 0.3,
  "burst_shots": 3,
  "priority": 3,
  "charge_charged_trigger": 0
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:behavior.ranged_attack/: 

```json
"minecraft:behavior.ranged_attack": {
  "attack_interval": 3.5,
  "attack_radius": 15,
  "priority": 0
}
```

At /minecraft:entity/component_groups/minecraft:ranged_attack_hard/minecraft:behavior.ranged_attack/: 

```json
"minecraft:behavior.ranged_attack": {
  "attack_interval": 2.5,
  "attack_radius": 15,
  "priority": 0
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

At /minecraft:entity/component_groups/minecraft:llama_angry/minecraft:behavior.ranged_attack/: 

```json
"minecraft:behavior.ranged_attack": {
  "priority": 2,
  "attack_radius": 64,
  "charge_shoot_trigger": 2,
  "charge_charged_trigger": 1
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)

At /minecraft:entity/component_groups/minecraft:ranged_attack/minecraft:behavior.ranged_attack/: 

```json
"minecraft:behavior.ranged_attack": {
  "attack_interval": 3.5,
  "attack_radius": 15,
  "priority": 1
}
```

At /minecraft:entity/component_groups/minecraft:ranged_attack_hard/minecraft:behavior.ranged_attack/: 

```json
"minecraft:behavior.ranged_attack": {
  "attack_interval": 2.5,
  "attack_radius": 15,
  "priority": 1
}
```

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)


```json
"minecraft:behavior.ranged_attack": {
  "attack_interval_max": 3,
  "attack_interval_min": 1,
  "attack_radius": 15
}
```
