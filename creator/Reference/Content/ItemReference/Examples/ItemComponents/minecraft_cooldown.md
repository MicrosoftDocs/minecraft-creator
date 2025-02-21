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


## Cooldown Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| category | *not set* | String | The type of cool down for this item. All items with a cool down component with the same category are put on cool down when one is used. | Wind Charge: `"wind_charge"` | 
| duration | *not set* | Decimal number | The duration of time (in seconds) items with a matching category will spend cooling down before becoming usable again. | Wind Charge: `0.5` | 

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
