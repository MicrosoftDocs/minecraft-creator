---
author: mammerla
ms.author: mikeam
title: "Attachables Documentation - minecraft:attachable"
description: "Describes the minecraft:attachable attachable definition"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Attachables Documentation - minecraft:attachable

An attachable definition for Minecraft Bedrock Edition. Attachables define how items render when equipped or held by entities, including armor, weapons, tools, and other wearable/holdable items.

> [!Note]
> Attachables are used to define how items render when equipped. They reference materials, textures, geometry, and optionally animations and render controllers defined in other resource pack files.


## Attachable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version | The format version of this attachable file. Common versions include '1.8.0' and '1.10.0'. |  | 
| minecraft:attachable | *not set* | [Attachable](#attachable) item | The attachable definition container. |  | 

## Attachable

#### Attachable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description) item | The attachable description containing all configuration. |  | 

## Description

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animations | *not set* | Key/item pairs of [Animations](#animations) items | Animation and animation controller definitions. Keys are short names used in scripts, values are full animation/controller identifiers. |  | 
| enable_attachables | *not set* | Boolean true/false | Whether to allow child attachables on this attachable. |  | 
| geometry | *not set* | Key/item pairs of [Geometry](#geometry) items | Geometry definitions for the attachable. Keys are geometry names (e.g., 'default'), values are geometry identifiers. |  | 
| identifier | *not set* | String | The unique identifier for this attachable. Should match the item identifier it attaches to (e.g., 'minecraft:iron_chestplate'). |  | 
| item | *not set* | String | The item identifier this attachable is associated with. If not specified, uses the attachable identifier. |  | 
| materials | *not set* | Key/item pairs of [Materials](#materials) items | Material definitions for rendering the attachable. Keys are material names (e.g., 'default', 'enchanted'), values are material identifiers. |  | 
| min_engine_version | *not set* | Integer number | The minimum engine version required for this attachable. |  | 
| particle_effects | *not set* | Key/item pairs of [Particle Effects](#particle-effects) items | Particle effect definitions for the attachable. |  | 
| render_controllers | *not set* | Array of strings | List of render controller identifiers or conditional render controllers. |  | 
| scripts | *not set* | [Scripts](#scripts) item | Script definitions for the attachable, including initialization and animation triggers. |  | 
| sound_effects | *not set* | Key/item pairs of [Sound Effects](#sound-effects) items | Sound effect definitions for the attachable. |  | 
| spawn_egg | *not set* | [Spawn Egg](#spawn-egg) item | Spawn egg configuration for this attachable, if applicable. |  | 
| textures | *not set* | Key/item pairs of [Textures](#textures) items | Texture definitions for the attachable. Keys are texture names (e.g., 'default', 'enchanted'), values are texture paths. |  | 

## Animations

#### Animations Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | An animation or animation controller identifier (e.g., 'animation.elytra.gliding', 'controller.animation.elytra.default'). |  | 

## Geometry

#### Geometry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | A geometry identifier (e.g., 'geometry.humanoid.armor.chestplate'). |  | 

## Materials

#### Materials Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | A material identifier (e.g., 'armor', 'armor_enchanted', 'elytra'). |  | 

## Particle Effects

#### Particle Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | A particle effect identifier. |  | 

## Scripts

#### Scripts Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animate | *not set* | Array of [Animate](#animate) items | List of animations to play. Can be animation short names or objects with conditional playback. |  | 
| animate (Alternate 1) | *not set* | Array of strings | Array of animation names to play. |  | 
| parent_setup | *not set* | Molang | Molang script executed when the attachable is set up on the parent entity. Used to set variables like 'variable.chest_layer_visible = 0.0;'. |  | 
| pre_animation | *not set* | Molang | Molang script executed before animations are processed. |  | 
| scale | *not set* | Molang | Molang expression for the scale of the attachable. |  | 
| should_update_bones_and_effects_offscreen | *not set* | Boolean true/false | Whether bones and effects should be updated when the entity is offscreen. |  | 
| should_update_effects_offscreen | *not set* | Boolean true/false | Whether effects should be updated when the entity is offscreen. |  | 

## Animate

#### Animate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animation_name | *not set* | String | Short name of an animation defined in the animations section. |  | 

## Sound Effects

#### Sound Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | A sound effect identifier. |  | 

## Spawn Egg

#### Spawn Egg Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| texture | *not set* | String | Texture path for the spawn egg. |  | 
| texture_index | *not set* | Integer number | Index into the spawn egg texture atlas. |  | 

## Textures

#### Textures Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_]+ | *not set* | String | A texture path relative to the resource pack (e.g., 'textures/models/armor/iron_1'). |  | 

## Samples

#### [Armor](armor)


```json
{
  "format_version": "1.8.0",
  "minecraft:attachable": {
    "description": {
      "identifier": "minecraft:iron_chestplate",
      "materials": {
        "default": "armor",
        "enchanted": "armor_enchanted"
      },
      "textures": {
        "default": "textures/models/armor/iron_1",
        "enchanted": "textures/misc/enchanted_actor_glint"
      },
      "geometry": {
        "default": "geometry.humanoid.armor.chestplate"
      },
      "scripts": {
        "parent_setup": "variable.chest_layer_visible = 0.0;"
      },
      "render_controllers": [
        "controller.render.armor"
      ]
    }
  }
}
```

#### [Elytra](elytra)


```json
{
  "format_version": "1.10.0",
  "minecraft:attachable": {
    "description": {
      "identifier": "minecraft:elytra",
      "materials": {
        "default": "elytra",
        "enchanted": "elytra_glint"
      },
      "textures": {
        "default": "textures/models/armor/elytra",
        "enchanted": "textures/misc/enchanted_actor_glint"
      },
      "geometry": {
        "default": "geometry.elytra"
      },
      "animations": {
        "default_controller": "controller.animation.elytra.default",
        "gliding": "animation.elytra.gliding"
      },
      "scripts": {
        "parent_setup": "variable.chest_layer_visible = 0.0;",
        "animate": [
          "default_controller"
        ]
      },
      "render_controllers": [
        "controller.render.armor"
      ]
    }
  }
}
```
