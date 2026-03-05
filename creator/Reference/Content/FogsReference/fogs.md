---
author: mammerla
ms.author: mikeam
title: "Fogs Documentation - minecraft:fogs"
description: "Describes the minecraft:fogs fog element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Fogs Documentation - minecraft:fogs

Defines fog rendering settings used by resource packs.


## Fog Settings Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| format_version | *not set* | Version |  | 
| minecraft:fog_settings | *not set* | [Fog Settings](#fog-settings) item |  | 

### Fog Settings

#### Fog Settings Properties

**JSON path:** `minecraft:fog_settings`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| description | *not set* | [Description](#description) item |  | 
| distance | *not set* | [Distance](#distance) item | The distance fog settings for different camera locations. | 
| volumetric | *not set* | [Volumetric](#volumetric) item | The volumetric fog settings. | 

#### Description

##### Description Properties

**JSON path:** `minecraft:fog_settings > description`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| identifier | *not set* | String | The identifier for these fog settings. The identifier must include a namespace. | 

#### Distance

##### Distance Properties

**JSON path:** `minecraft:fog_settings > distance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| air | *not set* | [Air](#air) item | The fog settings when the camera is in the air. | 
| lava | *not set* | [Lava](#lava) item | The fog settings when the camera is in lava. | 
| lava_resistance | *not set* | [Lava Resistance](#lava-resistance) item | The fog settings when the camera is in lava and the player has the lava resistance effect active. | 
| powder_snow | *not set* | [Powder Snow](#powder-snow) item | The fog settings when the camera is inside a Powder Snow block. | 
| water | *not set* | [Water](#water) item | The fog settings when the camera is in water. | 
| weather | *not set* | [Weather](#weather) item | The fog settings for when the camera is in the air with active weather (rain, snow, etc..). | 

##### Air

###### Air Properties

**JSON path:** `minecraft:fog_settings > distance > air`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. | 
| transition_fog | *not set* | [Transition Fog](#transition-fog) item | Additional fog data which will slowly transition to the distance fog of current biome. | 

###### Transition Fog

###### Transition Fog Properties

**JSON path:** `minecraft:fog_settings > distance > air > transition_fog`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| init_fog | *not set* | [Init Fog](#init-fog) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. | 

###### Init Fog

###### Init Fog Properties

**JSON path:** `minecraft:fog_settings > distance > air > transition_fog > init_fog`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. | 

##### Lava

Same structure as [Air](#air).


##### Lava Resistance

Same structure as [Air](#air).


##### Powder Snow

Same structure as [Air](#air).


##### Water

Same structure as [Air](#air).


##### Weather

Same structure as [Air](#air).


#### Volumetric

##### Volumetric Properties

**JSON path:** `minecraft:fog_settings > volumetric`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| density | *not set* | [Density](#density) item | The density settings for different camera locations. | 
| media_coefficients | *not set* | [Media Coefficients](#media-coefficients) item | The coefficient settings for the volumetric fog in different blocks. | 

##### Density

###### Density Properties

**JSON path:** `minecraft:fog_settings > volumetric > density`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| air | *not set* | [Air](#air) item | Fog density values as light passes through air blocks. | 
| lava | *not set* | [Lava](#lava) item | Fog density values as light passes through lava blocks. | 
| lava_resistance | *not set* | [Lava Resistance](#lava-resistance) item | Fog density values as light passes through lava blocks while the player has lava resistance. | 
| water | *not set* | [Water](#water) item | Fog density values as light passes through water blocks. | 
| weather | *not set* | [Weather](#weather) item | Fog density values as light passes through air blocks with active weather (rain, snow, etc..). | 

##### Media Coefficients

###### Media Coefficients Properties

**JSON path:** `minecraft:fog_settings > volumetric > media_coefficients`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| air | *not set* | Object | Fog coefficient values while light passes through air. | 
| cloud | *not set* | Object | Fog coefficient values while light passes through clouds. | 
| water | *not set* | Object | Fog coefficient values while light passes through water. | 