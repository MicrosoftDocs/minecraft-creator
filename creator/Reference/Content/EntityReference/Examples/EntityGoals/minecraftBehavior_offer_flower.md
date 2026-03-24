---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.offer_flower"
description: "Describes the minecraft:behavior.offer_flower ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.offer_flower

Allows the mob to offer a flower to another mob with the minecraft:take_flower behavior.

> [!Note]
> Requires a flower item to be held by the entity.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Entity Offer Flower Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance_to_start | 0.0001250000059371814 | Decimal number | Percent chance that the mob will start this goal from 0.0 to 1.0 (where 1.0 = 100%). Value must be <= 1. |  | 
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that need to be met for the behavior to start. | Iron Golem: `{"test":"is_daytime"}` | 
| filters (Alternate 1) | *not set* | Object |  |  | 
| max_head_rotation_y | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 
| max_offer_flower_duration | 20 | Decimal number | The max amount of time (in seconds) that the mob will offer the flower for before exiting the Goal. |  | 
| max_rotation_x | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `5` | 
| search_area | [6, 2, 6] | Array of numbers | The dimensions of the AABB used to search for a potential mob to offer flower to. |  | 
| search_area (Search Area) | *not set* | [Search Area (Search Area)](#search-area-search-area) item |  |  | 

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

### Search Area (Search Area)

#### Search Area Properties

**JSON path:** `search_area`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.offer_flower": {
  "filters": {
    "test": "is_daytime"
  },
  "priority": 5
}
```
