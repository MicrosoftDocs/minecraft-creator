---
author: mammerla
ms.author: mikeam
title: "Feature Rules Documentation - minecraft:feature_rules_document"
description: "Describes the minecraft:feature_rules_document feature rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Rules Documentation - minecraft:feature_rules_document

A Minecraft Bedrock Edition feature rules definition document. Feature rules control where world generation features (like trees, ores, and structures) are placed in the world based on biome conditions.


## Feature Rules Document Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this feature rules file. Use '1.13.0' or later. |  | 
| minecraft:feature_rules | *not set* | [Feature Rules](#feature-rules) item | The feature rules definition containing description and conditions. |  | 

## Feature Rules

#### Feature Rules Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| conditions | *not set* | Object | Conditions that control where the feature is placed. |  | 
| description | *not set* | [Description](#description) item | Contains the identifier and the feature to place. |  | 

## Description

#### Feature Rules Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | Boolean true/false | The unique identifier for this feature rule. |  | 
| places_feature | *not set* | Boolean true/false | The identifier of the feature to place. |  | 