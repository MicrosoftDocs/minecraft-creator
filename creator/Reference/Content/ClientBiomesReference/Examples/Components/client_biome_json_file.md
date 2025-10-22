---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:client_biome_json_file"
description: "Describes the minecraft:client_biome_json_file client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:client_biome_json_file

Contains a format version and a Client Biome definition.


## Client Biome JSON File Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | String | Version of the JSON schema used by this file |  | 
| minecraft:client_biome | *not set* | [Client Biome](#client-biome-definition) item | A single Client Biome definition, containing rendering or sound settings related to a Biome defined by the game or a behavior pack |  | 

## Client Biome Definition
Contains a description and components to define a Client Biome.


#### Client Biome Definition Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#client-biome-components) item | Components for this Client Biome. |  | 
| description | *not set* | [Description](#client-biome-description) item | Non-component settings, including the Client Biome name. |  | 

## Client Biome Components
Any components that this Client Biome uses.


#### Client Biome Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:ambient_sounds | *not set* | [Ambient Sounds](#minecraft-ambient-sounds) item | Set the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file. |  | 
| minecraft:atmosphere_identifier | *not set* | [Atmosphere Identifier](#client-biome-atmosphere-identifier) item | Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings. |  | 
| minecraft:biome_music | *not set* | [Biome Music](#minecraft-biome-music) item | Affect how music plays within the biome |  | 
| minecraft:color_grading_identifier | *not set* | [Color Grading Identifier](#client-biome-color-grading-identifier) item | Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings. |  | 
| minecraft:dry_foliage_color | *not set* | [Dry Foliage Color](#client-biome-dry-foliage-color) item | Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior. |  | 
| minecraft:fog_appearance | *not set* | [Fog Appearance](#minecraft-fog-appearance) item | Set the fog settings used during rendering. Biomes without this component will have default fog settings. |  | 
| minecraft:foliage_appearance | *not set* | [Foliage Appearance](#minecraft-foliage-appearance) item | Set the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance. |  | 
| minecraft:grass_appearance | *not set* | [Grass Appearance](#client-biome-grass-appearance) item | Set the grass color or color map used during rendering. Biomes without this component will have default grass appearance. |  | 
| minecraft:lighting_identifier | *not set* | [Lighting Identifier](#client-biome-lighting-identifier) item | Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings. |  | 
| minecraft:sky_color | *not set* | [Sky Color](#minecraft-sky-color) item | Set the sky color used during rendering. Biomes without this component will have default sky color behavior. |  | 
| minecraft:water_appearance | *not set* | [Water Appearance](#client-biome-water-appearance) item | Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior. |  | 
| minecraft:water_identifier | *not set* | [Water Identifier](#client-biome-water-identifier) item | Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings. |  | 

## Minecraft Ambient Sounds
Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.


#### Minecraft Ambient Sounds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| addition | *not set* | Object | Named sound that occasionally plays at the listener position |  | 
| loop | *not set* | Object | Named sound that loops while the listener position is inside the biome |  | 
| mood | *not set* | Object | Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound. |  | 

## Client Biome Atmosphere Identifier
Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings.


#### Client Biome Atmosphere Identifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| atmosphere_identifier | *not set* | Object | Identifier of atmosphere definition to use |  | 

## Minecraft Biome Music
Affects how music plays within the biome.


#### Minecraft Biome Music Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| music_definition | *not set* | Object | Music to be played when inside this biome. If left off or not found the default music will be determined by the dimension. Empty string will result in no music. |  | 
| volume_multiplier | *not set* | Decimal number | Multiplier temporarily and gradually applied to music volume when within this biome. Must be a value between 0 and 1, inclusive. |  | 

## Client Biome Color Grading Identifier
Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings.


#### Client Biome Color Grading Identifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color_grading_identifier | *not set* | Object | Identifier of color_grading definition to use |  | 

## Client Biome Dry Foliage Color
Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior.


#### Client Biome Dry Foliage Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | String | RGB color of dry foliage |  | 
| color (Alternate 1) | *not set* | Array of numbers |  |  | 

## Minecraft Fog Appearance
Sets the fog settings used during rendering. Biomes without this component will have default fog settings.


#### Minecraft Fog Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| fog_identifier | *not set* | Object | Identifier of fog definition to use |  | 

## Minecraft Foliage Appearance
Sets the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance.


#### Minecraft Foliage Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Object | RGB color of foliage, or a Foliage Color Map object. |  | 

## Client Biome Grass Appearance
Set the grass color or color map used during rendering. Biomes without this component will have default grass appearance.


#### Client Biome Grass Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Object | RGB color of grass. |  | 

## Client Biome Lighting Identifier
Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings.


#### Client Biome Lighting Identifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| lighting_identifier | *not set* | Object | Identifier of lighting definition to use |  | 

## Minecraft Sky Color
Sets the sky color used during rendering. Biomes without this component will have default sky color behavior.


#### Minecraft Sky Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| sky_color | *not set* | String | RGB color of the sky |  | 
| sky_color (Alternate 1) | *not set* | Array of numbers |  |  | 

## Client Biome Water Appearance
Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.


#### Client Biome Water Appearance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| surface_color | *not set* | String | RGB color of the water surface |  | 
| surface_color (Alternate 1) | *not set* | Array of numbers |  |  | 
| surface_opacity | *not set* | Decimal number | Opacity of the water surface (must be between 0 for invisible and 1 for opaque, inclusive) |  | 

## Client Biome Water Identifier
Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings.


#### Client Biome Water Identifier Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| water_identifier | *not set* | Object | Identifier of water definition to use |  | 

## Client Biome Description
Contains non-component settings for a Client Biome.


#### Client Biome Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of the Client Biome, used by other features like the '/locate biome' command. Must match the name of a Biome defined by the game or a behavior pack. Value must match a regular expression pattern of "^[a-z0-9._%+-]+:[a-z0-9._%+-]+$". |  | 