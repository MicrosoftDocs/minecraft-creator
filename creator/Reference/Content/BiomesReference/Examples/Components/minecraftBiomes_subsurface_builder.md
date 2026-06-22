---
author: mammerla
ms.author: mikeam
title: "Biome Documentation - minecraft:subsurface_builder"
description: "Describes the minecraft:subsurface_builder biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Biome Documentation - minecraft:subsurface_builder

Sub Surface Builders allow specifying a `minecraft:surface_builder` to be applied to biomes located underneath regular terrain surface. Note, however, that pre-existing surface builder types' processing have not been updated to accommodate the ability to specify them for sub-terrain height ranges, which may lead to unexpected results when using them.

> [!Note]
> This item requires a format version of at least 1.26.30.


## Subsurface Builder Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| builder | *not set* | Object | Controls block types and strategy used for terrain generation. | 