---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:render_controller.v1.8.0"
description: "Describes the minecraft:render_controller.v1.8.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:render_controller.v1.8.0

Render controllers define how entities are visually rendered, including which geometry, textures, and materials to use. They support arrays for dynamic selection based on Molang expressions, part visibility toggling, UV animations, and color tinting.


## Render Controller (v1.8.0) Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version |  | 
| render_controllers | *not set* | Key/item pairs of [Render Controllers](#render-controllers) items |  | 

### Render Controllers

#### Render Controllers Properties

**JSON path:** `render_controllers`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| arrays | *not set* | [Arrays](#arrays) item |  | 
| color | *not set* | [Color](#color) item |  | 
| filter_lighting | *not set* | Boolean true/false |  | 
| geometry | *not set* | String |  | 
| ignore_lighting | *not set* | Boolean true/false |  | 
| is_hurt_color | *not set* | [Is Hurt Color](#is-hurt-color) item |  | 
| light_color_multiplier | *not set* | Molang |  | 
| materials | *not set* | Array of [Materials](#materials) items |  | 
| materials (as Array of strings) | *not set* | Array of strings |  | 
| on_fire_color | *not set* | [Fire Color](#fire-color) item |  | 
| overlay_color | *not set* | [Overlay Color](#overlay-color) item |  | 
| part_visibility | *not set* | Array of [Part Visibility](#part-visibility) items |  | 
| part_visibility (as Array of strings) | *not set* | Array of strings |  | 
| rebuild_animation_matrices | *not set* | Boolean true/false |  | 
| textures | *not set* | Array of strings |  | 
| uv_anim | *not set* | [Uv Anim](#uv-anim) item |  | 

#### Arrays

##### Arrays Properties

**JSON path:** `render_controllers > arrays`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| geometries | *not set* | Key/item pairs of [Geometries](#geometries) items |  | 
| materials | *not set* | Key/item pairs of [Materials](#materials) items |  | 
| textures | *not set* | Key/item pairs of [Textures](#textures) items |  | 

##### Geometries

###### Geometries Properties

**JSON path:** `render_controllers > arrays > geometries`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| array.<scope_identifier> | *not set* | Array of strings |  | 

##### Materials

Same structure as [Geometries](#geometries).


##### Textures

Same structure as [Geometries](#geometries).


#### Color

##### Color Properties

**JSON path:** `render_controllers > color`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| a | *not set* | Molang |  | 
| b | *not set* | Molang |  | 
| g | *not set* | Molang |  | 
| r | *not set* | Molang |  | 

#### Is Hurt Color

Same structure as [Color](#color).


#### Fire Color

Same structure as [Color](#color).


#### Overlay Color

Same structure as [Color](#color).


#### Part Visibility

##### Part Visibility Properties

**JSON path:** `render_controllers > part_visibility`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| [a-zA-Z0-9_.:*]+ | *not set* | Molang |  | 

#### Uv Anim

##### Uv Anim Properties

**JSON path:** `render_controllers > uv_anim`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| offset | *not set* | Molang array |  | 
| scale | *not set* | Molang array |  | 