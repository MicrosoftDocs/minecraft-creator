---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:conditional_list"
description: "Describes the minecraft:conditional_list feature type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:conditional_list

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.

Evaluates conditions and places features from the first matching entry. Each entry has a condition expression and associated feature—when the condition passes, that feature generates and later entries are skipped. Enables biome-dependent variants or terrain-responsive structure selection during world generation.


## Conditional List Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| conditional_features | *not set* | Array of [Conditional Features](#conditional-features) items |  | 
| conditional_features (as Array of strings) | *not set* | Array of strings | Array of features, and their associated conditions, for attempted placement. These features will be evaluated as ordered. | 
| description | *not set* | [Description](#description) item |  | 
| early_out_scheme"<"condition_success", "placement_success", "none" | *not set* | String | Denote whether placement should end on first successful placement ('placement_success'), first passed condition ('condition_success'), or evaluate all features ('none'). Defaults to 'none'. | 
| format_version | *not set* | String |  | 

### Conditional Features

#### Conditional Features Properties

**JSON path:** `conditional_features`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| condition | *not set* | Molang | Condition for placing associated Feature. If omitted, always places. | 

### Description

#### Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. | 