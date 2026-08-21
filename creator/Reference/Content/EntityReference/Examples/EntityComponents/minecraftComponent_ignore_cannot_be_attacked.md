---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:ignore_cannot_be_attacked"
description: "Describes the minecraft:ignore_cannot_be_attacked entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:ignore_cannot_be_attacked

Allows the owner entity to ignore the "minecraft:cannot_be_attacked" component on entities that fulfill the filter.

> [!Note]
> This item requires a format version of at least 1.21.50.


## Entity Ignore Cannot Be Attacked Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject "other". | 
| filters (Alternate 1) | *not set* | Object |  | 

### filters

Defines which entities are exceptions and are allowed to be attacked by the owner entity, potentially attacked entity is subject "other". If this is not specified then all attacks by the owner are allowed.


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