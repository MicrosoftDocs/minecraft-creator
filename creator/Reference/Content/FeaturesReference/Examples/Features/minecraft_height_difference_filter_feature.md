---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:height_difference_filter_feature"
description: "Describes the minecraft:height_difference_filter_feature feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:height_difference_filter_feature

> [!Note]
> Introduced in 1.26.30. Conditionally places a referenced `places_feature` based on the upward and downward height differences (relative to the placement position) found within `search_radius` in each cardinal direction. Useful for placing features that only make sense on terrain with a specific shape (cliffs, gentle slopes, flat plateaus).

> [!Note]
> This item requires a format version of at least 1.26.30.


## Height Difference Filter Feature Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 
| max_allowed_downward_height_diff | *not set* | Integer number | Specifies the maximum height difference allowed downwards. | 
| max_allowed_upward_height_diff | *not set* | Integer number | Specifies the maximum height difference allowed upwards. | 
| min_required_downward_height_diff | *not set* | Integer number | Specifies the minimum height difference required downwards. | 
| min_required_upward_height_diff | *not set* | Integer number | Specifies the minimum height difference required upwards. | 
| search_radius | *not set* | Integer number | 'search_radius' specifies the the length in each cardinal direction the filter will check for blocks against the given differences. | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 