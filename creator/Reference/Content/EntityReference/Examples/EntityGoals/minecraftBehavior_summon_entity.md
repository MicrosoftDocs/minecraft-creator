---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.summon_entity"
description: "Describes the minecraft:behavior.summon_entity ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.summon_entity

Allows the mob to attack the player by summoning other entities.

> [!Note]
> This item requires a format version of at least 1.21.50.


## Summon Entity Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| summon_choices | *not set* | Array of [Summon Choices](#summon-choices) items | List of spells for the mob to use to summon entities. |  | 

## Summon Choices

#### Summon Choice Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cast_duration | *not set* | Decimal number | Time in seconds the spell casting will take. |  | 
| cooldown_time | 0 | Decimal number | Time in seconds the mob has to wait before using the spell again. |  | 
| do_casting | true | Boolean true/false | If true, the mob will do the casting animations and render spell particles. |  | 
| filters | *not set* | Object | Conditions that must be met for this summon choice to be valid. |  | 
| max_activation_range | 32 | Decimal number | Upper bound of the activation distance in blocks for this spell. |  | 
| min_activation_range | 1 | Decimal number | Lower bound of the activation distance in blocks for this spell. |  | 
| particle_color | *not set* | String | The color of the particles for this spell. Can be an integer (ARGB) or a hex string like '#AARRGGBB'. |  | 
| particle_color (Alternate 1) | *not set* | Integer number |  |  | 
| sequence | *not set* | Array of [Sequence](#sequence) items | List of summon steps for the spell. |  | 
| start_sound_event | *not set* | String | Sound event to play when casting starts. |  | 
| weight | 1 | Decimal number | Relative weight for random selection among summon choices. |  | 

## Sequence

#### Summon Step Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_delay | 0 | Decimal number | Delay in seconds before this step starts. |  | 
| delay_per_summon | 0 | Decimal number | Delay in seconds between each entity summon. |  | 
| entity_type | *not set* | String | The entity type to summon. |  | 
| num_entities_spawned | 1 | Integer number | Number of entities to spawn in this step. |  | 
| shape | circle | String | Shape of the summon pattern: 'circle' or 'line'. |  | 
| size | 1 | Decimal number | Size of the summon pattern. |  | 
| sound_event | *not set* | String | Sound event to play when summoning. |  | 
| summon_cap | 0 | Integer number | Maximum number of entities that can be summoned. |  | 
| summon_cap_radius | 0 | Decimal number | Radius to check for existing summoned entities. |  | 
| target | self | String | Target for the summon: 'self' or 'other'. |  | 

## Samples
