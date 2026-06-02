---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.knockback_roar"
description: "Describes the minecraft:behavior.knockback_roar ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.knockback_roar

Allows the mob to perform a damaging knockback that affects all nearby entities.


## Entity Knockback Roar Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| attack_time | 0.5 | Decimal number | The delay after which the knockback occurs (in seconds). | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown_time | 0.10000000149011612 | Decimal number | Time (in seconds) the mob has to wait before using the goal again. | 
| damage_filters (Damage Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Damage Filters](#damage-filters) item | The list of conditions another entity must meet to be a valid target to apply damage to. | 
| damage_filters (Alternate 1) | *not set* | Object |  | 
| duration | 1 | Decimal number | The max duration of the roar (in seconds). | 
| knockback_damage | 6 | Integer number | The damage dealt by the knockback roar. | 
| knockback_filters (Knockback Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Knockback Filters](#knockback-filters) item | The list of conditions another entity must meet to be a valid target to apply knockback to. | 
| knockback_filters (Alternate 1) | *not set* | Object |  | 
| knockback_height_cap | 0.4000000059604645 | Decimal number | The maximum height for vertical knockback. | 
| knockback_horizontal_strength | 4 | Integer number | The strength of the horizontal knockback. | 
| knockback_range | 4 | Integer number | The radius (in blocks) of the knockback effect. | 
| knockback_vertical_strength | 4 | Integer number | The strength of the vertical knockback. | 
| on_roar_end (Entity ActorDefinitionTrigger) | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Roar End](#entity-actordefinitiontrigger) item | Event that is triggered when the roar ends. Can be an object with event and target properties, or a simple event string. | 
| on_roar_end (as String) | *not set* | String |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Damage Filters

#### Damage Filters Properties

**JSON path:** `damage_filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Knockback Filters

Same structure as [Damage Filters](#damage-filters).


### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_roar_end`

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

**JSON path:** `on_roar_end > filters`

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
