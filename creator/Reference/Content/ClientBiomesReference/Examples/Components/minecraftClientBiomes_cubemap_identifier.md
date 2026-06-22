---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:cubemap_identifier"
description: "Describes the minecraft:cubemap_identifier client biome"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:cubemap_identifier

Set the identifier used for cubemap in Vibrant Visuals mode. Identifiers must resolve to identifiers in valid Cubemap JSON schemas under the "cubemaps" directory. Biomes without this component will have default cubemap settings.

> [!Note]
> Added in 1.21.130 to apply a custom cubemap (defined in the resource pack's `cubemaps/` directory) for Vibrant Visuals skybox lighting on a client biome.

> [!Note]
> This item requires a format version of at least 1.21.130.


## Client Biome Cubemap Identifier Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| cubemap_identifier | *not set* | Object | Identifier of cubemap definition to use | 