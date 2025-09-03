---
author: mammerla
ms.author: mikeam
title: "Pack Manifest Documentation - minecraft:packmanifestdocument"
description: "Describes the minecraft:packmanifestdocument pack manifest"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Pack Manifest Documentation - minecraft:packmanifestdocument


## 3.0.0.PackManifestDocument Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| capabilities | *not set* | Array of strings |  |  | 
| dependencies | *not set* | Array of strings |  |  | 
| format_version | *not set* | Integer number |  |  | 
| has_education_metadata | *not set* | Boolean true/false |  |  | 
| header | *not set* | [0.0.Header) Header (3](#3.0.0.header) item |  |  | 
| metadata | *not set* | [0.0.Metadata) Metadata (3](#3.0.0.metadata) item |  |  | 
| modules | *not set* | [0.0.Module) Modules (3](#3.0.0.module) item |  |  | 
| settings | *not set* | Array of strings |  |  | 
| subpacks | *not set* | [0.0.Subpack) Subpacks (3](#3.0.0.subpack) item |  |  | 

## 3.0.0.Header

#### 3.0.0.Header Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_random_seed | *not set* | Boolean true/false |  |  | 
| base_game_version | *not set* | String |  |  | 
| description | *not set* | String |  |  | 
| lock_template_options | *not set* | Boolean true/false |  |  | 
| min_engine_version | *not set* | String |  |  | 
| name | *not set* | String |  |  | 
| pack_optimization_version (Pack Optimization Version) | *not set* | [Pack Optimization Version (Pack Optimization Version)](#pack-optimization-version-pack-optimization-version) item |  |  | 
| pack_optimization_version (Alternate 1) | *not set* | String |  |  | 
| pack_scope | *not set* | String |  |  | 
| platform_locked | *not set* | Boolean true/false |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version (Version)](#version-version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## Pack Optimization Version (Pack Optimization Version)

#### Pack Optimization Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta | *not set* | String |  |  | 
| major | *not set* | Integer number |  |  | 
| minor | *not set* | Integer number |  |  | 
| patch | *not set* | Integer number |  |  | 
| preRelease | *not set* | String |  |  | 

## Version (Version)

#### Version Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| buildMeta | *not set* | String |  |  | 
| major | *not set* | Integer number |  |  | 
| minor | *not set* | Integer number |  |  | 
| patch | *not set* | Integer number |  |  | 
| preRelease | *not set* | String |  |  | 

## 3.0.0.Metadata

#### 3.0.0.Metadata Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| authors | *not set* | Array of strings |  |  | 
| generated_with | *not set* | Object |  |  | 
| license | *not set* | String |  |  | 
| product_type | *not set* | String |  |  | 
| url | *not set* | String |  |  | 

## 3.0.0.Module

#### 3.0.0.Module Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | String |  |  | 
| entry | *not set* | String |  |  | 
| language | *not set* | String |  |  | 
| type | *not set* | String |  |  | 
| uuid | *not set* | Object |  |  | 
| version (Version) | *not set* | [Version (Version)](#version-version) item |  |  | 
| version (Alternate 1) | *not set* | String |  |  | 

## 3.0.0.Subpack

#### 3.0.0.Subpack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| folder_name | *not set* | String |  |  | 
| memory_performance_tier | *not set* | Integer number |  |  | 
| name | *not set* | String |  |  | 