---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:entity_fall_on"
description: "Describes the minecraft:entity_fall_on block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:entity_fall_on

Configures what distance an entity must fall onto this block to cause the `onEntityFallOn` block custom component event to be sent to script. Custom components subscribed to the `onEntityFallOn` event on a block without the `minecraft:entity_fall_on` component use the default fall distance of 1 block.


## Entity Fall On Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minimum_fall_distance | 1 | Decimal number | The minimum distance in blocks that an entity needs to fall before events are raised. | Fall Distance Of 2 Blocks: `2` | 

## Samples

#### [Fall Distance Of 2 Blocks](Fall Distance of 2 Blocks)


```json
"minecraft:entity_fall_on": {
  "minimum_fall_distance": 2
}
```
