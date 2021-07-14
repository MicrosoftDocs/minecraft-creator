---
author: v-josjones
ms.author: v-josjones
title: minecraft:durability
ms.prod: gaming
---

# minecraft:durability

`minecraft:durability` sets how much damage the item can take before breaking.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_chance|*not set* |Decimal |Chance of Damage |
|max_durability|*not set* |Integer |The amount of damage that this item can take before breaking.|

## Example

```json
"minecraft:durability":{
    "damage_chance": 0.015, //15%
    "max_durability": 36
}
```
