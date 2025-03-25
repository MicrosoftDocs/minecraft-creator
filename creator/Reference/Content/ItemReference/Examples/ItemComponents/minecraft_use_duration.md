---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:use_duration"
description: "Describes the minecraft:use_duration item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:use_duration

This component determines how long the item takes to use when used in combination with components like "shooter", "throwable", or "food".

## Alternate Simple Representations

This item can also be represented as a `Decimal number`.


## Use Duration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| value | *not set* | Decimal number | How long the item takes to use in seconds. |  | 

## Samples

#### [AppleEnchanted](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/appleEnchanted.json)


```json
"minecraft:use_duration": 32
```

#### [Camera](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/camera.json)


```json
"minecraft:use_duration": 100000
```

#### [Dried Kelp](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/dried_kelp.json)


```json
"minecraft:use_duration": 16
```

#### [Honey Bottle](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/honey_bottle.json)


```json
"minecraft:use_duration": 40
```
