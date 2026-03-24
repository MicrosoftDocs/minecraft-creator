---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.play_dead"
description: "Describes the minecraft:behavior.play_dead ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.play_dead

Allows this entity to pretend to be dead to avoid being targeted by attackers.


## Entity Play Dead Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| apply_regeneration | false | Boolean true/false | Whether the mob will receive the regeneration effect while playing dead. | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| damage_sources | [] | [Damage Sources](#damage-sources-choices) choices | The list of Entity Damage Sources that will cause this mob to play dead. | 
| duration | 1 | Decimal number | The amount of time the mob will remain playing dead (in seconds). | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | The list of other triggers that are required for the mob to activate play dead | 
| filters (Alternate 1) | *not set* | Object |  | 
| force_below_health | 0 | Integer number | The amount of health at which damage will cause the mob to play dead. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| random_damage_range | {"max":0,"min":0} | [Random Damage Range](#item-components-intrange) item | The range of damage that may cause the goal to start depending on randomness. | 
| random_start_chance | 1 | Decimal number | The likelihood of this goal starting upon taking damage. | 

### random_damage_range

The range of damage that may cause the goal to start depending on randomness. Damage taken below the min will never cause the goal to start. Damage taken above the max will always cause the goal to start.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Damage Sources choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| all | All | |
| anvil | Anvil | |
| block_explosion | Block explosion | |
| campfire | Campfire | |
| charging | Charging | |
| contact | Contact | |
| drowning | Drowning | |
| entity_attack | Entity attack | |
| entity_explosion | Entity explosion | |
| fall | Fall | |
| falling_block | Falling block | |
| fire | Fire | |
| fire_tick | Fire tick | |
| fireworks | Fireworks | |
| fly_into_wall | Fly into wall | |
| freezing | Freezing | |
| lava | Lava | |
| lightning | Lightning | |
| mace_smash | Mace smash | |
| magic | Magic | |
| magma | Magma | |
| none | None | |
| override | Override | |
| piston | Piston | |
| projectile | Projectile | |
| ram_attack | Ram attack | |
| self_destruct | Self destruct | |
| sonic_boom | Sonic boom | |
| soul_campfire | Soul campfire | |
| stalactite | Stalactite | |
| stalagmite | Stalagmite | |
| starve | Starve | |
| suffocation | Suffocation | |
| temperature | Temperature | |
| thorns | Thorns | |
| void | Void | |
| wither | Wither | |

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

### Item Components IntRange
Has minimum and maximum integer values.


#### Item Components IntRange Properties

**JSON path:** `random_damage_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples
