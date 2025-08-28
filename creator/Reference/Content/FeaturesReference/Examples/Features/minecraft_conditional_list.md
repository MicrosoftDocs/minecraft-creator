---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:conditional_list"
description: "Describes the minecraft:conditional_list feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:conditional_list

> [!IMPORTANT]
> This type is internal to vanilla Minecraft usage, and is not functional or supported within custom Minecraft content.


## Conditional List Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditional_features | *not set* | Array of [Conditional Features](#conditional-features) items |  |  | 
| conditional_features (Alternate 1) | *not set* | Array of strings | Array of Features, and their associated Conditions, for attempted placement. These features will be evaluated as ordered. |  | 
| description | *not set* | [Description](#description) item |  |  | 
| early_out_scheme"<"condition_success", "placement_success" | *not set* | String | Denote whether placement should end on first successful placement or first passed condition. |  | 
| format_version | *not set* | String |  |  | 

## Conditional Features

#### Conditional Features Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| condition | *not set* | Molang | Condition for placing associated Feature |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 