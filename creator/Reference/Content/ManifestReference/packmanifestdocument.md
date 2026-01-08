---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:packmanifestdocument"
description: "Describes the minecraft:packmanifestdocument pack manifest"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:packmanifestdocument

The root structure of a manifest.json file that defines an add-on pack. Every behavior pack and resource pack requires a manifest with a unique UUID, version info, and module declarations. This is the entry point Minecraft uses to identify and load your content.


## 3.0.0.PackManifestDocument Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| capabilities | *not set* | Array of strings |  |  | 
| dependencies | *not set* | Array of strings |  |  | 
| format_version | *not set* | Integer number |  |  | 
| has_education_metadata | *not set* | Boolean true/false |  |  | 
| header | *not set* | [Header](#3.0.0.header) item |  |  | 
| metadata | *not set* | [Metadata](#3.0.0.metadata) item |  |  | 
| modules | *not set* | [Modules](#3.0.0.module) item |  |  | 
| settings | *not set* | Array of strings |  |  | 
| subpacks | *not set* | [Subpacks](#3.0.0.subpack) item |  |  | 

## 3.0.0.Header
The header section of manifest.json containing the pack's identity: its name shown in the UI, description, unique UUID, and version. The min_engine_version field specifies the minimum Minecraft version required to load the pack.


#### 3.0.0.Header Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_random_seed | *not set* | Boolean true/false |  |  | 
| base_game_version | *not set* | String |  |  | 
| description | *not set* | String |  |  | 
| lock_template_options | *not set* | Boolean true/false |  |  | 
| min_engine_version | *not set* | String |  |  | 
| name | *not set* | String |  |  | 
| pack_optimization_version (Pack Optimization Version) | *not set* | [Pack Optimization Version](#pack-optimization-version) item |  |  | 
| pack_optimization_version (Alternate 1) | *not set* | String |  |  | 
| pack_scope | *not set* | String |  |  | 
| platform_locked | *not set* | Boolean true/false |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version](#version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## Pack Optimization Version

#### Pack Optimization Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta |  | String |  |  | 
| major | 0 | Integer number |  |  | 
| minor | 0 | Integer number |  |  | 
| patch | 0 | Integer number |  |  | 
| preRelease |  | String |  |  | 

## Version

#### Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta |  | String |  |  | 
| major | 0 | Integer number |  |  | 
| minor | 0 | Integer number |  |  | 
| patch | 0 | Integer number |  |  | 
| preRelease |  | String |  |  | 

## 3.0.0.Metadata
Optional metadata about the pack including author names, license information, and URL. Also includes generation tool info for debugging.


#### 3.0.0.Metadata Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| authors | *not set* | Array of strings |  |  | 
| generated_with | *not set* | Object |  |  | 
| license | *not set* | String |  |  | 
| product_type | *not set* | String |  |  | 
| url | *not set* | String |  |  | 

## 3.0.0.Module
Declares a module within the pack. Modules define what the pack contains: 'data' for behavior packs, 'resources' for resource packs, or 'script' for packs with JavaScript/TypeScript code. Script modules require an entry point file path.


#### 3.0.0.Module Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | String |  |  | 
| entry | *not set* | String |  |  | 
| language | *not set* | String |  |  | 
| type | *not set* | String |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version](#version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## 3.0.0.Subpack
Defines a subpack option that players can choose in pack settings. Subpacks allow offering different quality levels (like HD vs SD textures) that map to memory tiers, letting players with lower-end devices select lighter alternatives.


#### 3.0.0.Subpack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| folder_name | *not set* | String |  |  | 
| memory_performance_tier | *not set* | Integer number |  |  | 
| name | *not set* | String |  |  | 