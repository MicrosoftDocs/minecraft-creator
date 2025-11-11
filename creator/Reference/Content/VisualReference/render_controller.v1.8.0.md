---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:render_controller.v1.8.0"
description: "Describes the minecraft:render_controller.v1.8.0 visual element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:render_controller.v1.8.0


## Render Controller Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version |  |  | 
| render_controllers | *not set* | Key/item pairs of [Render Controllers](#render-controllers) items |  |  | 

## Render Controllers

#### Render Controllers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| arrays | *not set* | [Arrays](#arrays) item |  |  | 
| color | *not set* | [Color](#color) item |  |  | 
| filter_lighting | *not set* | Boolean true/false |  |  | 
| geometry | *not set* | String |  |  | 
| ignore_lighting | *not set* | Boolean true/false |  |  | 
| is_hurt_color | *not set* | [Is Hurt Color](#is-hurt-color) item |  |  | 
| light_color_multiplier | *not set* | Molang |  |  | 
| materials | *not set* | Array of [Materials](#materials) items |  |  | 
| materials (Alternate 1) | *not set* | Array of strings |  |  | 
| on_fire_color | *not set* | [Fire Color](#fire-color) item |  |  | 
| overlay_color | *not set* | [Overlay Color](#overlay-color) item |  |  | 
| part_visibility | *not set* | Array of [Part Visibility](#part-visibility) items |  |  | 
| part_visibility (Alternate 1) | *not set* | Array of strings |  |  | 
| rebuild_animation_matrices | *not set* | Boolean true/false |  |  | 
| textures | *not set* | Array of strings |  |  | 
| uv_anim | *not set* | [Uv Anim](#uv-anim) item |  |  | 

## Arrays

#### Arrays Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| geometries | *not set* | Key/item pairs of [Geometries](#geometries) items |  |  | 
| materials | *not set* | Key/item pairs of [Materials](#materials) items |  |  | 
| textures | *not set* | Key/item pairs of [Textures](#textures) items |  |  | 

## Geometries

#### Geometries Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| array.<scope_identifier> | *not set* | Array of strings |  |  | 

## Materials

#### Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| array.<scope_identifier> | *not set* | Array of strings |  |  | 

## Textures

#### Textures Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| array.<scope_identifier> | *not set* | Array of strings |  |  | 

## Color

#### Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| a | *not set* | Molang |  |  | 
| b | *not set* | Molang |  |  | 
| g | *not set* | Molang |  |  | 
| r | *not set* | Molang |  |  | 

## Is Hurt Color

#### Is Hurt Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| a | *not set* | Molang |  |  | 
| b | *not set* | Molang |  |  | 
| g | *not set* | Molang |  |  | 
| r | *not set* | Molang |  |  | 

## Fire Color

#### Fire Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| a | *not set* | Molang |  |  | 
| b | *not set* | Molang |  |  | 
| g | *not set* | Molang |  |  | 
| r | *not set* | Molang |  |  | 

## Overlay Color

#### Overlay Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| a | *not set* | Molang |  |  | 
| b | *not set* | Molang |  |  | 
| g | *not set* | Molang |  |  | 
| r | *not set* | Molang |  |  | 

## Part Visibility

#### Part Visibility Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_.:*]+ | *not set* | Molang |  |  | 

## Uv Anim

#### Uv Anim Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| offset | *not set* | Molang array |  |  | 
| scale | *not set* | Molang array |  |  | 