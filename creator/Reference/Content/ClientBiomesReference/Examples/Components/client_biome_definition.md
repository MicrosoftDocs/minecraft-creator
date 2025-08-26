---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:client_biome_definition"
description: "Describes the minecraft:client_biome_definition client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:client_biome_definition

Contains a description and components to define a Client Biome.


## Client Biome Definition Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#components-item-type) item | Components for this Client Biome. |  | 
| description | *not set* | [Description](#description-item-type) item | Non-component settings, including the Client Biome name. |  | 

## Components item type
Any components that this Client Biome uses.


#### Client Biome Components Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:ambient_sounds | *not set* | [Ambient Sounds](#ambient-sounds-item-type) item | Set the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file. |  | 
| minecraft:atmosphere_identifier | *not set* | [Atmosphere Identifier](#atmosphere-identifier-item-type) item | Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings. |  | 
| minecraft:biome_music | *not set* | [Biome Music](#biome-music-item-type) item | Affect how music plays within the biome |  | 
| minecraft:color_grading_identifier | *not set* | [Color Grading Identifier](#color-grading-identifier-item-type) item | Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings. |  | 
| minecraft:dry_foliage_color | *not set* | [Dry Foliage Color](#dry-foliage-color-item-type) item | Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior. |  | 
| minecraft:fog_appearance | *not set* | [Fog Appearance](#fog-appearance-item-type) item | Set the fog settings used during rendering. Biomes without this component will have default fog settings. |  | 
| minecraft:foliage_appearance | *not set* | [Foliage Appearance](#foliage-appearance-item-type) item | Set the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance. |  | 
| minecraft:grass_appearance | *not set* | [Grass Appearance](#grass-appearance-item-type) item | Set the grass color or color map used during rendering. Biomes without this component will have default grass appearance. |  | 
| minecraft:lighting_identifier | *not set* | [Lighting Identifier](#lighting-identifier-item-type) item | Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings. |  | 
| minecraft:sky_color | *not set* | [Sky Color](#sky-color-item-type) item | Set the sky color used during rendering. Biomes without this component will have default sky color behavior. |  | 
| minecraft:water_appearance | *not set* | [Water Appearance](#water-appearance-item-type) item | Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior. |  | 
| minecraft:water_identifier | *not set* | [Water Identifier](#water-identifier-item-type) item | Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings. |  | 

## Ambient Sounds item type
Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.


#### Minecraft Ambient Sounds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| addition | *not set* | Object | Named sound that occasionally plays at the listener position |  | 
| loop | *not set* | Object | Named sound that loops while the listener position is inside the biome |  | 
| mood | *not set* | Object | Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound. |  | 

## Atmosphere Identifier item type
Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings.


#### Minecraft Atmosphere Identifier Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| atmosphere_identifier | *not set* | Object | Identifier of atmosphere definition to use |  | 

## Biome Music item type
Affects how music plays within the biome.


#### Minecraft Biome Music Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| music_definition | *not set* | Object | Music to be played when inside this biome. If left off or not found the default music will be determined by the dimension. Empty string will result in no music. |  | 
| volume_multiplier | *not set* | Decimal number | Multiplier temporarily and gradually applied to music volume when within this biome. Must be a value between 0 and 1, inclusive. |  | 

## Color Grading Identifier item type
Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings.


#### Minecraft Color Grading Identifier Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color_grading_identifier | *not set* | Object | Identifier of color_grading definition to use |  | 

## Dry Foliage Color item type
Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior.


#### Minecraft Dry Foliage Color Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | String | RGB color of dry foliage |  | 
| color (Alternate 1) | *not set* | Array of numbers |  |  | 

## Fog Appearance item type
Sets the fog settings used during rendering. Biomes without this component will have default fog settings.


#### Minecraft Fog Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| fog_identifier | *not set* | Object | Identifier of fog definition to use |  | 

## Foliage Appearance item type
Sets the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance.


#### Minecraft Foliage Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Object | RGB color of foliage, or a Foliage Color Map object. |  | 

## Grass Appearance item type
Set the grass color or color map used during rendering. Biomes without this component will have default grass appearance.


#### Minecraft Grass Appearance Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Object | RGB color of grass. |  | 

## Lighting Identifier item type
Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings.


#### Minecraft Lighting Identifier Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| lighting_identifier | *not set* | Object | Identifier of lighting definition to use |  | 

## Sky Color item type
Sets the sky color used during rendering. Biomes without this component will have default sky color behavior.


#### Minecraft Sky Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| sky_color | *not set* | String | RGB color of the sky |  | 
| sky_color (Alternate 1) | *not set* | Array of numbers |  |  | 

## Water Appearance item type
Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.


#### Minecraft Water Appearance Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| surface_color | *not set* | String | RGB color of the water surface |  | 
| surface_color (Alternate 1) | *not set* | Array of numbers |  |  | 
| surface_opacity | *not set* | Decimal number | Opacity of the water surface (must be between 0 for invisible and 1 for opaque, inclusive) |  | 

## Water Identifier item type
Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings.


#### Minecraft Water Identifier Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| water_identifier | *not set* | Object | Identifier of water definition to use |  | 

## Description item type
Contains non-component settings for a Client Biome.


#### Client Biome Description Client Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of the Client Biome, used by other features like the '/locate biome' command. Must match the name of a Biome defined by the game or a behavior pack. Value must match a regular expression pattern of "^[a-z0-9._%+-]+:[a-z0-9._%+-]+$". |  | 