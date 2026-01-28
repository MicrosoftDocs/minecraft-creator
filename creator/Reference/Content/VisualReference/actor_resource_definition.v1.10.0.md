---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:actor_resource_definition.v1.10.0"
description: "Describes the minecraft:actor_resource_definition.v1.10.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:actor_resource_definition.v1.10.0

Defines an entity client resource definition document with format_version 1.10.0.


## Actor Resource Definition (v1.10.0) Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | Specifies the format version of this client entity definition. Determines which features and syntax are available. |  | 
| minecraft:attachable | *not set* | [Attachable](#attachable) item |  |  | 
| minecraft:client_entity | *not set* | [Client Entity](#client-entity) item | Defines the client-side rendering properties for an entity, including textures, geometry, animations, and render controllers. |  | 

## Attachable

#### Attachable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item |  |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animations | *not set* | Object |  |  | 
| animations (Alternate 1) | *not set* | String |  |  | 
| enable_attachables | *not set* | Boolean true/false |  |  | 
| geometry | *not set* | Object |  |  | 
| geometry (Alternate 1) | *not set* | String |  |  | 
| held_item_ignores_lighting | *not set* | Boolean true/false |  |  | 
| hide_armor | *not set* | Boolean true/false |  |  | 
| identifier | *not set* | String |  |  | 
| item | *not set* | Object |  |  | 
| item (Alternate 1) | *not set* | String |  |  | 
| item (Alternate 2) | *not set* | Molang |  |  | 
| materials | *not set* | Object |  |  | 
| materials (Alternate 1) | *not set* | String |  |  | 
| min_engine_version | *not set* | Version |  |  | 
| particle_effects | *not set* | Object |  |  | 
| particle_effects (Alternate 1) | *not set* | String |  |  | 
| particle_emitters | *not set* | Object |  |  | 
| particle_emitters (Alternate 1) | *not set* | String |  |  | 
| queryable_geometry | *not set* | String |  |  | 
| render_controllers | *not set* | Array of objects |  |  | 
| render_controllers (Alternate 1) | *not set* | Array of strings |  |  | 
| render_controllers (Alternate 2) | *not set* | Molang |  |  | 
| scripts | *not set* | [Scripts](#scripts) item |  |  | 
| sound_effects | *not set* | Object |  |  | 
| sound_effects (Alternate 1) | *not set* | String |  |  | 
| spawn_egg | *not set* | [Spawn Egg](#spawn-egg) item |  |  | 
| textures | *not set* | Object |  |  | 
| textures (Alternate 1) | *not set* | String |  |  | 

## Scripts

#### Scripts Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animate | *not set* | String | List of animations to play. Each item can be a string animation name or an object mapping animation name to a Molang condition. |  | 
| initialize | *not set* | Molang array |  |  | 
| parent_setup | *not set* | Molang |  |  | 
| pre_animation | *not set* | Molang array |  |  | 
| scale | *not set* | Molang |  |  | 
| scale[xX] | *not set* | Molang |  |  | 
| scale[yY] | *not set* | Molang |  |  | 
| scale[zZ] | *not set* | Molang |  |  | 
| should_update_bones_and_effects_offscreen | *not set* | Molang | Bones and effects will still be updated if the entity is off screen if this expression returns anything other than 0.0. |  | 
| should_update_effects_offscreen | *not set* | Molang | Effects will still be updated if the entity is off screen if this expression or `should_update_bones_and_effects_offscreen` returns anything other than 0.0. |  | 
| variables | *not set* | [Variables](#variables) item | A list of variables that need certain settings applied to them. Currently, for the client, only "public" is supported. |  | 

## Variables

#### Variables Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| variable.[a-zA-Z_][a-zA-Z0-9_]*"<"public" | *not set* | String | If a variable is public, it can be read by other mobs. See the molang '->' operator for details. |  | 

## Spawn Egg

#### Spawn Egg Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| base_color | *not set* | String |  |  | 
| overlay_color | *not set* | String |  |  | 
| texture | *not set* | String |  |  | 
| texture_index | *not set* | Integer number |  |  | 

## Client Entity

#### Client Entity Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item | Contains all the visual definition properties for this entity, including identifier, textures, geometry, materials, animations, and spawn egg settings. |  | 