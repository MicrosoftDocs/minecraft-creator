---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Biome Documentation - minecraft:surface_builder"
description: "Describes the minecraft:surface_builder biome"
ms.service: minecraft-bedrock-edition
ms.date: 08/13/2025 
---

# Biome Documentation - minecraft:surface_builder

Controls the materials used for terrain generation.


## Minecraft Surface Builder Biome Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| builder | *not set* | Object | Controls the block types used for terrain generation. |  | 


### Minecraft surface builder objects

| Type | Description |
|:----------|:-------------|
|[minecraft:overworld](../Components/minecraftBiomes_overworld.md)|Controls the blocks used for the default Minecraft Overworld terrain generation.|
|[minecraft:frozen_ocean](../Components/minecraftBiomes_frozen_ocean.md)|Similar to overworld_surface. Adds icebergs.|
|[minecraft:mesa](../Components/minecraftBiomes_mesa.md)|Similar to overworld_surface. Adds colored strata and optional pillars.|
|[minecraft:swamp](../Components/minecraftBiomes_swamp.md)|Used to add decoration to the surface of swamp biomes such as water lilies.|
|[minecraft:capped](../Components/minecraftBiomes_capped.md)|Generates surface on blocks with non-solid blocks above or below. |
|[minecraft:the_end](../Components/minecraftBiomes_the_end.md)|Use default Minecraft End terrain generation.|