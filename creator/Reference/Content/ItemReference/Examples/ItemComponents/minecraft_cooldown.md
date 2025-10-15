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
| category | *not set* | String | All items sharing the same "category" are put on cooldown when an action of the specified "type" is performed. | Wind Charge: `"wind_charge"` | 
| duration | *not set* | Decimal number | Duration of the cooldown, in seconds, before the item can perform an action of the specified "type" again. | Wind Charge: `0.5` | 
| type | *not set* | String | The type of action the cooldown applies to. Options are mutually exclusive, so cooldown for one type of action does not affect the others. Values: "use" (when using an item), "attack" (when attack with an item). Default value: use. |  | 

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
