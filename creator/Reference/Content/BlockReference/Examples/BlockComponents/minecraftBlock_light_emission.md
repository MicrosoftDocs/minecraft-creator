---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:light_emission"
description: "Describes the minecraft:light_emission block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:light_emission

The amount of light this block will emit in a range of 0-15. Higher value means more light will be emitted. Reference values: torch (14), glowstone (15), redstone torch (7), soul torch (10). Monsters cannot spawn on blocks with light level 8 or higher.

## Alternate Simple Representations

This item can also be represented as a `Integer number`.


## Samples

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:light_emission": 7
```

#### [Block Gray Ore](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/gray_ore.block.json)


```json
"minecraft:light_emission": 15
```
