---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:lava_movement"
description: "Describes the minecraft:lava_movement entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:lava_movement

Allows a custom movement speed across lava blocks.


## Lava Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Decimal number | The speed the mob moves over a lava block. | Strider: `0.32` | 

## Samples

#### [Strider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/strider.json)


```json
"minecraft:lava_movement": {
  "value": 0.32
}
```
