---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:display_name"
description: "Describes the minecraft:display_name block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:display_name

Specifies the language file key that maps to what text will be displayed when you hover over the block in your inventory and hotbar. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this component is omitted, the name of the block will be used as the display name.

## Alternate Simple Representations

This item can also be represented as a `String`.


## Samples

#### [Luckyblock](https://github.com/microsoft/minecraft-samples/tree/main/lucky_block/version_1/behavior_packs/mike_luck/blocks/luckyblock.json)


```json
"minecraft:display_name": "Lucky Block"
```
