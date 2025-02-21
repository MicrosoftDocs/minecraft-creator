---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:dash"
description: "Describes the minecraft:dash entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:dash

Ability for a rideable entity to dash.


## Dash Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 1 | Decimal number | The dash cooldown in seconds. Default value is 1.000000. | Camel: `2.75` | 
| horizontal_momentum | 1 | Decimal number | Horizontal momentum of the dash. | Camel: `20` | 
| vertical_momentum | 1 | Decimal number | Vertical momentum of the dash. | Camel: `0.6` | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:dash": {
  "cooldown_time": 2.75,
  "horizontal_momentum": 20,
  "vertical_momentum": 0.6
}
```
