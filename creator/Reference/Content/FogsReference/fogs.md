---
author: mammerla
ms.author: mikeam
title: "Fogs Documentation - minecraft:fogs"
description: "Describes the minecraft:fogs fog element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Fogs Documentation - minecraft:fogs


## Fogs Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| format_version | *not set* | Version |  |  | 
| minecraft:fog_settings | *not set* | [Fog Settings](#fog-settings-item-type) item |  |  | 

## Fog Settings item type

#### Fog Settings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#description-item-type) item |  |  | 
| distance | *not set* | [Distance](#distance-item-type) item | The distance fog settings for different camera locations. |  | 
| volumetric | *not set* | [Volumetric](#volumetric-item-type) item | The volumetric fog settings. |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The identifier for these fog settings. The identifier must include a namespace. |  | 

## Distance item type

#### Distance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| air | *not set* | [Air](#air-item-type) item | The fog settings when the camera is in the air. |  | 
| lava | *not set* | [Lava](#lava-item-type) item | The fog settings when the camera is in lava. |  | 
| lava_resistance | *not set* | [Lava Resistance](#lava-resistance-item-type) item | The fog settings when the camera is in lava and the player has the lava resistance effect active. |  | 
| powder_snow | *not set* | [Powder Snow](#powder-snow-item-type) item | The fog settings when the camera is inside a Powder Snow block. |  | 
| water | *not set* | [Water](#water-item-type) item | The fog settings when the camera is in water. |  | 
| weather | *not set* | [Weather](#weather-item-type) item | The fog settings for when the camera is in the air with active weather (rain, snow, etc..). |  | 

## Air item type

#### Air Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Lava item type

#### Lava Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Lava Resistance item type

#### Lava Resistance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Powder Snow item type

#### Powder Snow Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Water item type

#### Water Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Weather item type

#### Weather Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 
| transition_fog | *not set* | [Transition Fog](#transition-fog-item-type) item | Additional fog data which will slowly transition to the distance fog of current biome. |  | 

## Transition Fog item type

#### Transition Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| init_fog | *not set* | [Init Fog](#init-fog-item-type) item | Initial fog that will slowly transition into water distance fog of the biome when player goes into water. |  | 

## Init Fog item type

#### Init Fog Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| render_distance_type"<"fixed", "render" | *not set* | String | Determines how distance value is used. Fixed distance is measured in blocks. Dynamic distance is multiplied by the current render distance. |  | 

## Volumetric item type

#### Volumetric Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| density | *not set* | [Density](#density-item-type) item | The density settings for different camera locations. |  | 
| media_coefficients | *not set* | [Media Coefficients](#media-coefficients-item-type) item | The coefficient settings for the volumetric fog in different blocks. |  | 

## Density item type

#### Density Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| air | *not set* | [Air](#air-item-type) item | Fog density values as light passes through air blocks. |  | 
| lava | *not set* | [Lava](#lava-item-type) item | Fog density values as light passes through lava blocks. |  | 
| lava_resistance | *not set* | [Lava Resistance](#lava-resistance-item-type) item | Fog density values as light passes through lava blocks while the player has lava resistance. |  | 
| water | *not set* | [Water](#water-item-type) item | Fog density values as light passes through water blocks. |  | 
| weather | *not set* | [Weather](#weather-item-type) item | Fog density values as light passes through air blocks with active weather (rain, snow, etc..). |  | 

## Air item type

#### Air Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| uniform | *not set* | Boolean true/false | When set to true, the density will be uniform across all heights. |  | 

## Lava item type

#### Lava Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| uniform | *not set* | Boolean true/false | When set to true, the density will be uniform across all heights. |  | 

## Lava Resistance item type

#### Lava Resistance Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| uniform | *not set* | Boolean true/false | When set to true, the density will be uniform across all heights. |  | 

## Water item type

#### Water Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| uniform | *not set* | Boolean true/false | When set to true, the density will be uniform across all heights. |  | 

## Weather item type

#### Weather Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| uniform | *not set* | Boolean true/false | When set to true, the density will be uniform across all heights. |  | 

## Media Coefficients item type

#### Media Coefficients Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| air | *not set* | Object | Fog coefficient values while light passes through air. |  | 
| cloud | *not set* | Object | Fog coefficient values while light passes through clouds. |  | 
| water | *not set* | Object | Fog coefficient values while light passes through water. |  | 