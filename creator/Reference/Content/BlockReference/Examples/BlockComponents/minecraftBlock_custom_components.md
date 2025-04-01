---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:custom_components"
description: "Describes the minecraft:custom_components block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:custom_components

Sets an ordered list of custom component names which are bound in script to be executed upon a block event.


## Custom Components Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| 0 | *not set* | String |  | Luckyblock: `"mike_luck:luckyblock_actions"` | 

## Samples

#### [Luckyblock](https://github.com/microsoft/minecraft-samples/tree/main/lucky_block/version_1/behavior_packs/mike_luck/blocks/luckyblock.json)


```json
"minecraft:custom_components": [
  "mike_luck:luckyblock_actions"
]
```
