---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:cooldown"
description: "Describes the minecraft:cooldown item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:cooldown

The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again.


## Item Components Cooldown Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| category | *not set* | String | All items with the same "category" are put on cooldown when one is used. | Wind Charge: `"wind_charge"` | 
| duration | *not set* | Decimal number | How long the item is on cooldown before being able to be used again. | Wind Charge: `0.5` | 

## Samples


```json
"minecraft:cooldown": {
  "category": "attack",
  "duration": 0.2
}
```

#### [Wind Charge](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/items/wind_charge.json)


```json
"minecraft:cooldown": {
  "category": "wind_charge",
  "duration": 0.5
}
```
