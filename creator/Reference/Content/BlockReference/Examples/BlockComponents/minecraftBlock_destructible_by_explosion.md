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
| explosion_resistance | 0 | Decimal number | Sets the explosion resistance for the block. | Block Black Concrete Double Slab: `1.8`, Block Black Wool Double Slab: `0.8` | 

### explosion_resistance

Sets the explosion resistance for the block. Greater values result in greater resistance to explosions. The scale will be different for different explosion power levels. A value of 0 means it will easily explode; larger numbers increase level of resistance.


## Samples

#### Example


```json
"minecraft:destructible_by_explosion": true
```

#### Block Fabricator


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 15
}
```

#### Block Gray Ore


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 96
}
```

#### Block Palm Leave


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.3
}
```

#### Block White Sand


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.1
}
```

#### Block Leaf Pile


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 0.5
}
```

#### Block Orange Ore


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 30
}
```

#### Apple Block


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 2.9
}
```

#### [Block Black Concrete Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_concrete_double_slab.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 1.8
}
```

#### [Block Black Wool Double Slab](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/black_wool_double_slab.block.json)


```json
"minecraft:destructible_by_explosion": {
  "explosion_resistance": 0.8
}
```
