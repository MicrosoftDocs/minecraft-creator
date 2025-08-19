---
author: mammerla
ms.author: mikeam
title: "Client Biome Documentation - minecraft:ambient_sounds"
description: "Describes the minecraft:ambient_sounds client biome"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Client Biome Documentation - minecraft:ambient_sounds

Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.


## Minecraft Ambient Sounds Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| addition | *not set* | Object | Named sound that occasionally plays at the listener position |  | 
| loop | *not set* | Object | Named sound that loops while the listener position is inside the biome |  | 
| mood | *not set* | Object | Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound. |  | 