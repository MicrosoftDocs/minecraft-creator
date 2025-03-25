---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:biome_json_file"
description: "Describes the minecraft:biome_json_file biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:biome_json_file

Contains a format version and a biome definition.


## Biome JSON File Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | Version of the JSON schema used by this file |  | 
| minecraft:biome | *not set* | [Biome](#biome-item-type) item | A single biome definition |  | 

## Biome item type
Contains a description and components to define a Biome.


#### Biome Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | Object | Components for this Biome. |  | 
| description | *not set* | [Description](#description-item-type) item | Non-component settings, including the Biome name. |  | 

## Description item type
Contains non-component settings for a Biome.


#### Biome Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of the Biome, used by other features like the '/locate biome' command. |  | 