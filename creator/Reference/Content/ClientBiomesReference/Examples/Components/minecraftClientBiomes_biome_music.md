---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:biome_music"
description: "Describes the minecraft:biome_music client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:biome_music

Affects how music plays within the biome.


## Minecraft Biome Music Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| music_definition | *not set* | Object | Music to be played when inside this biome. If left off or not found the default music will be determined by the dimension. Empty string will result in no music. |  | 
| volume_multiplier | *not set* | Decimal number | Multiplier temporarily and gradually applied to music volume when within this biome. Must be a value between 0 and 1, inclusive. |  | 