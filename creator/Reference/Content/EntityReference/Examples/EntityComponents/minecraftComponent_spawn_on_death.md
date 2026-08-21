---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:spawn_on_death"
description: "Describes the minecraft:spawn_on_death entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:spawn_on_death

Component for spawning entities when an entity perishes.

> [!Note]
> Added in 1.26.20. Spawns one or more entities when the owning entity perishes. `entity_to_spawn` defaults to the owning entity, `spawn_method` defaults to `spawned` (also accepts `born` and `summoned`), `spawn_amount` defaults to 1, `inherit_parent_name` defaults to true, and `additional_spawn_range` adds optional random offset. `filters` gates whether the spawn is triggered at all.

> [!Note]
> This item requires a format version of at least 1.26.20.


## Entity Spawn On Death Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| additional_spawn_range | {"max":0,"min":0} | [Additional Spawn Range](#block-intrange) item | Additional random range of entities to spawn, defaults to 0, 0 when not set | 
| entity_to_spawn | self | String | What entity to spawn, defaults to owning entity when not set | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | 
| filters (Alternate 1) | *not set* | Object |  | 
| inherit_parent_name | true | Boolean true/false | If true, the entity will inherit the name of the parent entity, defaults to true when not set | 
| spawn_amount | 1 | Integer number | How many entities to spawn, defaults to 1 when not set Value must be > 0. | 
| spawn_method | spawned | String | Spawn method. born, spawned, or summoned, defaults to spawned when not set | 

### Block IntRange

#### Block IntRange Properties

**JSON path:** `additional_spawn_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

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