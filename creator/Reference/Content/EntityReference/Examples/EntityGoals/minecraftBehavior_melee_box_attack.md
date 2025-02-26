---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.melee_box_attack"
description: "Describes the minecraft:behavior.melee_box_attack ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.melee_box_attack

Allows an entity to deal damage through a melee attack with reach calculations based on bounding boxes.


## Melee Box Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_once | false | Boolean true/false | Allows the entity to use this attack behavior, only once EVER. | Bee: `true` | 
| attack_types | *not set* | String | Defines the entity types this entity will attack. |  | 
| can_spread_on_fire | false | Boolean true/false | If the entity is on fire, this allows the entity's target to catch on fire after being hit. | Drowned: `true` | 
| cooldown_time | 1 | Decimal number | Cooldown time (in seconds) between attacks. | Creaking: `2`, Hoglin: `0.75` | 
| horizontal_reach | 0.8 | Decimal number | The attack reach of the mob will be a box with the size of the mobs bounds increased by this value in all horizontal directions. |  | 
| inner_boundary_time_increase | 0.25 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_inner_boundary". |  | 
| max_dist | *not set* | Decimal number | Unused. No effect on "minecraft:behavior.melee_attack". |  | 
| max_path_time | 0.55 | Decimal number | Maximum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| melee_fov | 90 | Decimal number | Field of view (in degrees) when using the sensing component to detect an attack target. | Warden: `360` | 
| min_path_time | 0.2 | Decimal number | Minimum base time (in seconds) to recalculate new attack path to target (before increases applied). |  | 
| on_attack | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when this entity successfully attacks. | Bee: `{"event":"countdown_to_perish_event","target":"self"}` | 
| on_kill | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Axolotl: `{"event":"killed_enemy_event","target":"self"}` | 
| outer_boundary_time_increase | 0.5 | Decimal number | Time (in seconds) to add to attack path recalculation when the target is beyond the "path_outer_boundary". |  | 
| path_fail_time_increase | 0.75 | Decimal number | Time (in seconds) to add to attack path recalculation when this entity cannot move along the current path. |  | 
| path_inner_boundary | 16 | Decimal number | Distance at which to increase attack path recalculation by "inner_boundary_tick_increase". |  | 
| path_outer_boundary | 32 | Decimal number | Distance at which to increase attack path recalculation by "outer_boundary_tick_increase". |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Axolotl: `4`, Bee: `2`, Blaze: `3` | 
| random_stop_interval | 0 | Integer number | This entity will have a 1 in N chance to stop it's current attack, where N = "random_stop_interval". | Cave Spider: `100` | 
| require_complete_path | false | Boolean true/false | Toggles (on/off) the need to have a full path from the entity to the target when using this melee attack behavior. | Drowned: `true` | 
| set_persistent | false | Boolean true/false | Allows the actor to be set to persist upon targeting a player |  | 
| speed_multiplier | 1 | Decimal number | This multiplier modifies the attacking entity's speed when moving toward the target. | Bee: `1.4`, Bogged: `1.25`, Drowned: `1` | 
| target_dist | *not set* | Decimal number | Unused. No effect on "minecraft:behavior.melee_attack". |  | 
| track_target | false | Boolean true/false | Allows the entity to track the attack target, even if the entity has no sensing. | Bogged: `true` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 

## Samples

#### [Axolotl](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/axolotl.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 4,
  "on_kill": {
    "event": "killed_enemy_event",
    "target": "self"
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 2,
  "attack_once": true,
  "speed_multiplier": 1.4,
  "on_attack": {
    "event": "countdown_to_perish_event",
    "target": "self"
  }
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 3
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 4,
  "track_target": true,
  "speed_multiplier": 1.25
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)

At /minecraft:entity/component_groups/minecraft:spider_hostile/minecraft:behavior.melee_box_attack/: 

```json
"minecraft:behavior.melee_box_attack": {
  "priority": 3,
  "track_target": true,
  "random_stop_interval": 100
}
```

At /minecraft:entity/component_groups/minecraft:spider_angry/minecraft:behavior.melee_box_attack/: 

```json
"minecraft:behavior.melee_box_attack": {
  "priority": 3,
  "track_target": true
}
```

#### [Creaking](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creaking.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 2,
  "cooldown_time": 2
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 2,
  "track_target": true
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:behavior.melee_box_attack": {
  "can_spread_on_fire": true,
  "priority": 3,
  "speed_multiplier": 1,
  "track_target": false,
  "require_complete_path": true
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:behavior.melee_box_attack": {
  "priority": 2
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)

At /minecraft:entity/component_groups/minecraft:docile_fox/minecraft:behavior.melee_box_attack/: 

```json
"minecraft:behavior.melee_box_attack": {
  "priority": 10,
  "track_target": true,
  "require_complete_path": true
}
```

At /minecraft:entity/component_groups/minecraft:defending_fox/minecraft:behavior.melee_box_attack/: 

```json
"minecraft:behavior.melee_box_attack": {
  "priority": 1,
  "track_target": true,
  "require_complete_path": true
}
```
