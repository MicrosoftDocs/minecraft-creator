---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.stomp_attack"
description: "Describes the minecraft:behavior.stomp_attack ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.stomp_attack

Allows an entity to attack using stomp AoE damage behavior.


## Entity Stomp Attack Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_once | false | Boolean true/false | Allows the mob to perform this melee attack behavior only once during its lifetime. |  | 
| attack_types |  | String | Defines the entity types this entity will attack. |  | 
| can_spread_on_fire | false | Boolean true/false | Allows the mob, if on fire and empty handed, to ignite its target upon a successful attack. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| cooldown_time | 1 | Decimal number | Cooldown time, in seconds, between consecutive attacks. |  | 
| inner_boundary_time_increase | 0.25 | Decimal number | Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_inner_boundary". |  | 
| max_path_time | 0.550000011920929 | Decimal number | Maximum base time, in seconds, before recalculating a new attack path to the target (before increases are applied). |  | 
| min_path_time | 0.20000000298023224 | Decimal number | Minimum base time, in seconds, before recalculating a new attack path to the target (before increases are applied). |  | 
| no_damage_range_multiplier | 2 | Decimal number | Multiplied with the final AoE damage range to determine a no damage range. The stomp attack will go on cooldown if target is in this no damage range. Value must be > 0. | Polar Bear: `2` | 
| on_attack | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Attack](#entity-actordefinitiontrigger) item | Defines the event to trigger when this entity successfully attacks. |  | 
| on_kill | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Kill](#entity-actordefinitiontrigger) item | Defines the event to trigger when this entity kills the target. |  | 
| outer_boundary_time_increase | 0.5 | Decimal number | Time, in seconds, added to the attack path recalculation interval when the target is beyond "path_outer_boundary". |  | 
| path_fail_time_increase | 0.75 | Decimal number | Time, in seconds, added to the attack path recalculation interval when the mob cannot move along the current path. |  | 
| path_inner_boundary | 16 | Decimal number | Distance at which to increase attack path recalculation by "inner_boundary_time_increase". |  | 
| path_outer_boundary | 32 | Decimal number | Distance at which to increase attack path recalculation by "outer_boundary_time_increase". |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Polar Bear: `1` | 
| random_stop_interval | 0 | Integer number | Defines a 1-in-N chance for the mob to stop its current attack, where N equals "random_stop_interval". |  | 
| reach_multiplier | 2 | Decimal number | Used with the base size of the entity to determine minimum target-distance before trying to deal attack damage. |  | 
| require_complete_path | false | Boolean true/false | Specifies whether a full navigation path from the mob to the target is required. | Polar Bear: `true` | 
| speed_multiplier | 1 | Decimal number | Multiplier applied to the mob's movement speed when moving toward its target. |  | 
| stomp_range_multiplier | 2 | Decimal number | Multiplied with the base size of the entity to determine stomp AoE damage range. Value must be > 0. | Polar Bear: `2` | 
| track_target | false | Boolean true/false | Allows the mob to track its target even if it lacks a hard-coded sensing component. | Polar Bear: `true` | 
| x_max_rotation | 30 | Decimal number | Maximum rotation, in degrees, on the X-axis while the mob is trying to look at its target. |  | 
| y_max_head_rotation | 30 | Decimal number | Maximum rotation, in degrees, on the Y-axis while the mob is trying to look at its target. |  | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_attack`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


#### Filters

##### Filters Properties

**JSON path:** `on_attack > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

## Samples

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)


```json
"minecraft:behavior.stomp_attack": {
  "priority": 1,
  "track_target": true,
  "require_complete_path": true,
  "stomp_range_multiplier": 2,
  "no_damage_range_multiplier": 2
}
```
