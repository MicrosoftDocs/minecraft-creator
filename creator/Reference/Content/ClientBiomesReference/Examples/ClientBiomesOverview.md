---
author: mammerla
ms.author: mikeam
title: Client Biomes JSON and Overview
description: "A reference document discussing biomes"
ms.service: minecraft-bedrock-edition
---

# Client Biome JSON and Overview

Minecraft client_biome files define client-side settings for biomes in resource packs.

This is the new preferred location for per-biome settings that used to be in biomes_client.json.

(As of base game version 1.21.40, biomes_client.json is no longer loaded from built-in Vanilla resource packs. That file will still be loaded for other content regardless of version, and worlds using older base game versions will also still use it.)

These files are not part of the 'Custom Biomes' experiment and do not cause biome definitions to exist on their own, but they can be used to customize client-side settings of custom biomes.

## JSON format and definition

All biomes should specify the version that they target via the `"format_version"` field. 

## Client Biome JSON File

Contains a format version and a Client Biome definition

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|format_version| String| Required| Version of the JSON schema used by this file|
|minecraft:client_biome| Object of type client biome definition| Required| A single client biome definition, containing rendering or sound settings related to a Biome defined by the game or a behavior pack|

## Client Biome Description

Contains non-component settings for a client biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|identifier| String| Required| The name of the client biome, used by other features like the '/locate biome' command. Must match the name of a biome defined by the game or a behavior pack.|

## Client Biome Definition

Contains a description and components to define a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|components| Object of type client biome components| Required| Components for this biome.|
|description| Object of type client biome description| Required| Non-component settings, including the client biome name.|

## Client Biome Components
|Client Biome Component JSON |
|:-----|
|[ambient_sounds](./Components/minecraftClientBiomes_ambient_sounds.md)|
|[biome_music](./Components/minecraftClientBiomes_biome_music.md)|
|[fog_appearance](./Components/minecraftClientBiomes_fog_appearance.md)|
|[sky_color](./Components/minecraftClientBiomes_sky_color.md)|
|[water_appearance](./Components/minecraftClientBiomes_water_appearance.md)|


### Example

```json
{
  "format_version": "1.21.40",
  "minecraft:client_biome": {
    "description": {
      "identifier": "the_end"
    },
    "components": {
      "minecraft:sky_color": {
        "sky_color": "#000000"
      },
      "minecraft:fog_appearance": {
        "fog_identifier": "minecraft:fog_the_end"
      },
      "minecraft:water_appearance": {
        "surface_color": "#62529e"
      }
    }
  }
}
```
