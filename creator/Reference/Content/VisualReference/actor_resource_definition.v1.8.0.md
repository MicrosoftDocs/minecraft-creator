---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:actor_resource_definition.v1.8.0"
description: "Describes the minecraft:actor_resource_definition.v1.8.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:actor_resource_definition.v1.8.0

Defines an entity client resource definition document with format_version 1.8.0.


## Actor Resource Definition (v1.8.0) Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version |  | 
| minecraft:(client_entity|attachable) | *not set* | [(client Entity|attachable)](#client-entity|attachable) item |  | 

### (client Entity|attachable)

#### (client Entity|attachable) Properties

**JSON path:** `minecraft:(client_entity|attachable)`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 

#### Description

##### Description Properties

**JSON path:** `minecraft:(client_entity|attachable) > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| animation_controllers | *not set* | Array of objects |  | 
| animation_controllers (as Array of strings) | *not set* | Array of strings |  | 
| animations | *not set* | Object |  | 
| animations (as String) | *not set* | String |  | 
| enable_attachables | *not set* | Boolean true/false |  | 
| geometry | *not set* | Object |  | 
| geometry (as String) | *not set* | String |  | 
| held_item_ignores_lighting | *not set* | Boolean true/false |  | 
| hide_armor | *not set* | Boolean true/false |  | 
| identifier | *not set* | String |  | 
| materials | *not set* | Object |  | 
| materials (as String) | *not set* | String |  | 
| min_engine_version | *not set* | Version |  | 
| particle_effects | *not set* | Object |  | 
| particle_effects (as String) | *not set* | String |  | 
| particle_emitters | *not set* | Object |  | 
| particle_emitters (as String) | *not set* | String |  | 
| render_controllers | *not set* | Array of strings |  | 
| scripts | *not set* | [Scripts](#scripts) item |  | 
| sound_effects | *not set* | Object |  | 
| sound_effects (as String) | *not set* | String |  | 
| spawn_egg | *not set* | [Spawn Egg](#spawn-egg) item |  | 
| textures | *not set* | Object |  | 
| textures (as String) | *not set* | String |  | 

##### Scripts

###### Scripts Properties

**JSON path:** `minecraft:(client_entity|attachable) > description > scripts`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| parent_setup | *not set* | Molang |  | 
| pre_animation | *not set* | Molang array |  | 
| scale | *not set* | Molang |  | 
| scale[xX] | *not set* | Molang |  | 
| scale[yY] | *not set* | Molang |  | 
| scale[zZ] | *not set* | Molang |  | 

##### Spawn Egg

###### Spawn Egg Properties

**JSON path:** `minecraft:(client_entity|attachable) > description > spawn_egg`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| base_color | *not set* | String |  | 
| overlay_color | *not set* | String |  | 
| texture | *not set* | String |  | 
| texture_index | *not set* | Integer number |  | 