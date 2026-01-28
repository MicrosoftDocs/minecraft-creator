---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_effect_description"
description: "Describes the minecraft:particle_effect_description particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_effect_description

The description MUST contain an identifier and basic_render_parameters.


## Client Particles Particle Effect Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| basic_render_parameters | *not set* | [Basic Render Parameters](#client-particles-particle-effect-basic-render-parameters) item | The parameters MUST contain a material and texture. |  | 
| identifier | *not set* | String |  |  | 

## Client Particles Particle Effect Basic Render Parameters
The parameters MUST contain a material and texture.


#### Client Particles Particle Effect Basic Render Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material | *not set* | String | The material used for rendering the particle effect. |  | 
| texture | *not set* | String | The texture path used for the particle effect. |  | 