---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:mark_variant"
description: "Describes the minecraft:mark_variant entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:mark_variant

Mark Variant is typically used as an additional per-type way (besides `variant`) to express a different visual form of the same mob.


## Mark Variant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | 0 | Integer number | The Id of the mark_variant. By convention, 0 is the Id of the base entity. | Trader Llama: `1` | 

## Samples

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:mark_variant": {
  "value": 0
}
```

#### [Trader Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/trader_llama.json)


```json
"minecraft:mark_variant": {
  "value": 1
}
```
