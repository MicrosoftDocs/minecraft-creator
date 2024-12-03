---
author: mammerla
ms.author: mikeam
title: Client Biomes Documentation - ambient sounds
description: "A reference document detailing the 'ambient sounds' client biome component"
ms.service: minecraft-bedrock-edition
ms.date: 12/03/2024 #Required; mm/dd/yyyy format.
---

# Client Biomes Documentation - ambient_sounds

Sets the ambient sounds for the biome. These sounds must be in the 'individual_named_sounds' in a 'sounds.json' file.

## Attributes

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|addition| String| Optional| Named sound that occasionally plays at the listener position|
|loop| String| Optional| Named sound that loops while the listener position is inside the biome|
|mood| String| Optional| Named sound that rarely plays at a nearby air block position when the light level is low. Biomes without an ambient mood sound will use the 'ambient.cave' sound.|
