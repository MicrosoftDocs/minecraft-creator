---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:destructible_by_explosion"
description: "Describes the minecraft:destructible_by_explosion block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:destructible_by_explosion

Describes the destructible by explosion properties for this block. If set to true, the block will have the default explosion resistance. If set to false, this block is indestructible by explosion. If the component is omitted, the block will have the default explosion resistance.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Destructible By Explosion Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| explosion_resistance | 0 | Decimal number | Sets the explosion resistance for the block. Greater values result in greater resistance to explosions. The scale will be different for different explosion power levels. A negative value or 0 means it will easily explode; larger numbers increase level of resistance. |  | 

## Samples

#### [Example](Example)


```json
"minecraft:destructible_by_explosion": true
```
