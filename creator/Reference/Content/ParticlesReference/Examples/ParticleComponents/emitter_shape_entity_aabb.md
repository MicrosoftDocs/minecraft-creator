---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_shape_entity_aabb"
description: "Describes the minecraft:emitter_shape_entity_aabb particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_shape_entity_aabb

Emits particles from random positions within the attached entity's axis-aligned bounding box. The emission volume automatically scales with entity size, making it perfect for body-covering effects like burning, freezing, poison clouds, healing auras, or damage feedback that should wrap around creatures of any size.


## Client Particles Emitter Shape Entity Aabb Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| surface_only | false | Boolean true/false |  |  | 