---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_mob"
description: "Describes the minecraft:behavior.follow_mob ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_mob

Allows the mob to follow other mobs.


## Entity Follow Mob Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | If non-empty, provides criteria for filtering which nearby Mobs can be followed. |  | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| preferred_actor_type |  | String | The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Parrot: `4` | 
| search_range | 0 | Integer number | The distance in blocks it will look for a mob to follow | Parrot: `20` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Parrot: `1` | 
| stop_distance | 2 | Decimal number | The distance in blocks this mob stops from the mob it is following | Parrot: `3` | 
| use_home_position_restriction | false | Boolean true/false | If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. |  | 

### filters

If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal.

### use_home_position_restriction

If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Filters

#### Filters Properties

**JSON path:** `filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

## Samples

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.follow_mob": {
  "priority": 4,
  "search_range": 20,
  "speed_multiplier": 1,
  "stop_distance": 3
}
```
