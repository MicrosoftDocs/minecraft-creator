---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:trail_placement_conditions_entry"
description: "Describes the minecraft:trail_placement_conditions_entry entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:trail_placement_conditions_entry


## Entity Trail Placement Conditions Entry Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block_types (Block Types) | [] | Array of [Block Types](#block-types) items | Block types that satisfy this condition at its vertical offset from the placement position. Value must have at least 1 items. | 
| block_types (as String) | *not set* | String |  | 
| block_types (as Object) | *not set* | Object |  | 
| y_offset | 0 | Integer number | Vertical offset from the trail block placement position. Defaults to 0. Value must be >= -16. Value must be <= 16. | 

### Block Types

#### Block Types Properties

**JSON path:** `block_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 