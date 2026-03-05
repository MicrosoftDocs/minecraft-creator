---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:client_biome_definition"
description: "Describes the minecraft:client_biome_definition client biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:client_biome_definition

Defines the client-side visual and audio properties of a biome. Client biomes control fog, water color, grass tint, ambient sounds, and music within a biome. They are paired with server-side biome definitions that control gameplay behavior.


## Client Biome Definition Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| components | *not set* | [Components](#client-biome-components) item | Components for this Client Biome. | 
| description | *not set* | [Description](#client-biome-description) item | Non-component settings, including the Client Biome name. | 

### Client Biome Components
Any components that this Client Biome uses.


#### Client Biome Components Properties

**JSON path:** `components`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:ambient_sounds | *not set* | [Ambient Sounds](#minecraft-ambient-sounds) item | Set the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file. | 
| minecraft:atmosphere_identifier | *not set* | [Atmosphere Identifier](#client-biome-atmosphere-identifier) item | Set the identifier used for atmospherics in Vibrant Visuals mode. | 
| minecraft:biome_music | *not set* | [Biome Music](#minecraft-biome-music) item | Affect how music plays within the biome | 
| minecraft:color_grading_identifier | *not set* | [Color Grading Identifier](#client-biome-color-grading-identifier) item | Set the identifier used for color grading in Vibrant Visuals mode. | 
| minecraft:dry_foliage_color | *not set* | [Dry Foliage Color](#client-biome-dry-foliage-color) item | Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior. | 
| minecraft:fog_appearance | *not set* | [Fog Appearance](#minecraft-fog-appearance) item | Set the fog settings used during rendering. Biomes without this component will have default fog settings. | 
| minecraft:foliage_appearance | *not set* | [Foliage Appearance](#minecraft-foliage-appearance) item | Set the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance. | 
| minecraft:grass_appearance | *not set* | [Grass Appearance](#client-biome-grass-appearance) item | Set the grass color or color map used during rendering. Biomes without this component will have default grass appearance. | 
| minecraft:lighting_identifier | *not set* | [Lighting Identifier](#client-biome-lighting-identifier) item | Set the identifier used for lighting in Vibrant Visuals mode. | 
| minecraft:sky_color | *not set* | [Sky Color](#minecraft-sky-color) item | Set the sky color used during rendering. Biomes without this component will have default sky color behavior. | 
| minecraft:water_appearance | *not set* | [Water Appearance](#client-biome-water-appearance) item | Set the water surface color used during rendering. | 
| minecraft:water_identifier | *not set* | [Water Identifier](#client-biome-water-identifier) item | Set the identifier used for rendering water in Vibrant Visuals mode. | 

#### minecraft:atmosphere_identifier

Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings.

#### minecraft:color_grading_identifier

Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings.

#### minecraft:lighting_identifier

Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings.

#### minecraft:water_appearance

Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.  Make sure that at least either the surface color or the opacity is specified.

#### minecraft:water_identifier

Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings.


#### Minecraft Ambient Sounds
Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.


##### Minecraft Ambient Sounds Properties

**JSON path:** `components > minecraft:ambient_sounds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| addition |  | Object | Named sound that occasionally plays at the listener position | 
| loop |  | Object | Named sound that loops while the listener position is inside the biome | 
| mood |  | Object | Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound. | 

#### Client Biome Atmosphere Identifier
Set the identifier used for atmospherics in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Atmospheric Scattering JSON schemas under the "atmospherics" directory. Biomes without this component will have default atmosphere settings.


##### Client Biome Atmosphere Identifier Properties

**JSON path:** `components > minecraft:atmosphere_identifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| atmosphere_identifier | *not set* | Object | Identifier of atmosphere definition to use | 

#### Minecraft Biome Music
Affects how music plays within the biome.


##### Minecraft Biome Music Properties

**JSON path:** `components > minecraft:biome_music`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| music_definition | *not set* | Object | Music to be played when inside this biome. If left off or not found the default music will be determined by the dimension. Empty string will result in no music. | 
| volume_multiplier | *not set* | Decimal number | Multiplier temporarily and gradually applied to music volume when within this biome. Must be a value between 0 and 1, inclusive. | 

#### Client Biome Color Grading Identifier
Set the identifier used for color grading in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Color Grading JSON schemas under the "color_grading" directory. Biomes without this component will have default color_grading settings.


##### Client Biome Color Grading Identifier Properties

**JSON path:** `components > minecraft:color_grading_identifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color_grading_identifier | *not set* | Object | Identifier of color_grading definition to use | 

#### Client Biome Dry Foliage Color
Set the dry foliage color used during rendering. Biomes without this component will have default dry foliage color behavior.


##### Client Biome Dry Foliage Color Properties

**JSON path:** `components > minecraft:dry_foliage_color`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | String | RGB color of dry foliage | 
| color (as Array of numbers) | *not set* | Array of numbers |  | 

#### Minecraft Fog Appearance
Sets the fog settings used during rendering. Biomes without this component will have default fog settings.


##### Minecraft Fog Appearance Properties

**JSON path:** `components > minecraft:fog_appearance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| fog_identifier | *not set* | Object | Identifier of fog definition to use | 

#### Minecraft Foliage Appearance
Sets the foliage color or color map used during rendering. Biomes without this component will have default foliage appearance.


##### Minecraft Foliage Appearance Properties

**JSON path:** `components > minecraft:foliage_appearance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | Object | RGB color of foliage, or a Foliage Color Map object. | 

#### Client Biome Grass Appearance

Same structure as [Minecraft Foliage Appearance](#minecraft-foliage-appearance).


#### Client Biome Lighting Identifier
Set the identifier used for lighting in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Lighting JSON schemas under the "lighting" directory. Biomes without this component will have default lighting settings.


##### Client Biome Lighting Identifier Properties

**JSON path:** `components > minecraft:lighting_identifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| lighting_identifier | *not set* | Object | Identifier of lighting definition to use | 

#### Minecraft Sky Color
Sets the sky color used during rendering. Biomes without this component will have default sky color behavior.


##### Minecraft Sky Color Properties

**JSON path:** `components > minecraft:sky_color`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| sky_color | *not set* | String | RGB color of the sky | 
| sky_color (as Array of numbers) | *not set* | Array of numbers |  | 

#### Client Biome Water Appearance
Set the water surface color used during rendering. Biomes without this component will have default water surface color behavior.


##### Client Biome Water Appearance Properties

**JSON path:** `components > minecraft:water_appearance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| surface_color | *not set* | String | RGB color of the water surface | 
| surface_color (as Array of numbers) | *not set* | Array of numbers |  | 
| surface_opacity | *not set* | Decimal number | Opacity of the water surface (must be between 0 for invisible and 1 for opaque, inclusive) | 

#### Client Biome Water Identifier
Set the identifier used for rendering water in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Water JSON schemas under the "water" directory. Biomes without this component will have default water settings.


##### Client Biome Water Identifier Properties

**JSON path:** `components > minecraft:water_identifier`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| water_identifier | *not set* | Object | Identifier of water definition to use | 

### Client Biome Description
Contains non-component settings for a Client Biome.


#### Client Biome Description Properties

**JSON path:** `description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The name of the Client Biome, used by other features like the '/locate biome' command. | 

#### identifier

The name of the Client Biome, used by other features like the '/locate biome' command. Must match the name of a Biome defined by the game or a behavior pack. Value must match a regular expression pattern of "^[a-z0-9._%+-]+:[a-z0-9._%+-]+$".
