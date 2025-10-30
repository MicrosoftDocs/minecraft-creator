---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.ranged_attack"
description: "Describes the minecraft:behavior.ranged_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.ranged_attack

Allows an entity to attack by using ranged shots. "charge_shoot_trigger" must be greater than 0 to enable charged up burst-shot attacks. Requires minecraft:shooter to define projectile behaviour.


## Ranged Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_interval | 0 | Decimal number | Alternative to "attack_interval_min" & "attack_interval_max". Consistent reload-time (in seconds), when not using a charged shot. Does not scale with target-distance. | Bogged: `3.5`, Snow Golem: `1` | 
| attack_interval_max | 0 | Decimal number | Maximum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. | Blaze: `5`, Drowned: `3`, Piglin: `1` | 
| attack_interval_min | 0 | Decimal number | Minimum bound for reload-time range (in seconds), when not using a charged shot. Reload-time range scales with target-distance. | Blaze: `3`, Drowned: `1`, Bow Turret: `2.4` | 
| attack_radius | 0 | Decimal number | Minimum distance to target before this entity will attempt to shoot. | Blaze: `48`, Bogged: `15`, Drowned: `10` | 
| attack_radius_min | 0 | Decimal number | Minimum distance the target can be for this mob to fire. If the target is closer, this mob will move first before firing | Piglin: `4` | 
| burst_interval | 0 | Decimal number | Time (in seconds) between each individual shot when firing a burst of shots from a charged up attack. | Blaze: `0.3` | 
| burst_shots | 1 | Integer number | Number of shots fired every time the attacking entity uses a charged up attack. | Blaze: `3` | 
| charge_charged_trigger | 0 | Decimal number | Time (in seconds, then add "charge_shoot_trigger"), before a charged up attack is done charging. Charge-time decays while target is not in sight. | Ghast: `1` | 
| charge_shoot_trigger | 0 | Decimal number | Amount of time (in seconds, then doubled) a charged shot must be charging before reloading burst shots. Charge-time decays while target is not in sight. | Blaze: `4`, Ghast: `2` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Blaze: `3`, Ghast: `1`, Llama: `2` | 
| ranged_fov | 90 | Decimal number | Field of view (in degrees) when using sensing to detect a target for attack. | Bow Turret: `360` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| speed_multiplier | 1 | Decimal number | During attack behavior, this multiplier modifies the entity's speed when moving toward the target. | Piglin: `1`, Snow Golem: `1.25` | 
| swing | false | Boolean true/false | If a swing animation (using variable.attack_time) exists, this causes the actor to swing their arm(s) upon firing the ranged attack. | Drowned: `true` | 
| target_in_sight_time | 1 | Decimal number | Minimum amount of time (in seconds) the attacking entity needs to see the target before moving toward it. | Piglin: `0.1` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. | Bow Turret: `360` | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. | Bow Turret: `360` | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 3,
  "burst_shots": 3,
  "burst_interval": 0.3,
  "charge_charged_trigger": 0,
  "charge_shoot_trigger": 4,
  "attack_interval_min": 3,
  "attack_interval_max": 5,
  "attack_radius": 48
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 0,
  "attack_interval": 3.5,
  "attack_radius": 15
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 3,
  "attack_interval_min": 1,
  "attack_interval_max": 3,
  "attack_radius": 10,
  "swing": true
}
```

#### [Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ghast.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 1,
  "attack_radius": 64,
  "charge_shoot_trigger": 2,
  "charge_charged_trigger": 1
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


```json
"minecraft:behavior.ranged_attack": {
  "priority": 1,
  "attack_interval": 3.5,
  "attack_radius": 15
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 8,
  "attack_interval_min": 1,
  "attack_interval_max": 1,
  "attack_radius": 8,
  "attack_radius_min": 4,
  "speed_multiplier": 1,
  "target_in_sight_time": 0.1
}
```

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 4,
  "attack_interval_min": 1,
  "attack_interval_max": 1,
  "attack_radius": 8
}
```

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)


```json
"minecraft:behavior.ranged_attack": {
  "attack_interval_min": 1,
  "attack_interval_max": 3,
  "attack_radius": 15
}
```

#### [Snow Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snow_golem.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 1,
  "speed_multiplier": 1.25,
  "attack_interval": 1,
  "attack_radius": 10
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:behavior.ranged_attack": {
  "priority": 2,
  "speed_multiplier": 1,
  "attack_interval_min": 3,
  "attack_interval_max": 3,
  "attack_radius": 10
}
```

#### [Bow Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/bow_turret.behavior.json)


```json
"minecraft:behavior.ranged_attack": {
  "attack_interval_min": 2.4,
  "attack_interval_max": 3.8,
  "attack_radius": 19,
  "ranged_fov": 360,
  "y_max_head_rotation": 360,
  "x_max_rotation": 360
}
```
