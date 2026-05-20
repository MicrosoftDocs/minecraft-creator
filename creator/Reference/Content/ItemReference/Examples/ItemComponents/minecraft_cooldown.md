---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:cooldown"
description: "Describes the minecraft:cooldown item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:cooldown

Adds a cooldown to an item, preventing it from being used again for a specified duration. Items sharing the same category will enter cooldown together when any one of them is used.


## Item Cooldown Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| category | *not set* | String | A string identifier that groups items together. When an item with a cooldown is used, all items sharing the same category also enter cooldown. | 
| duration | *not set* | Decimal number | The duration of time in seconds that items with the matching category will spend cooling down before becoming usable again. | 
| type | use | [Type](#type-choices) choices | The type of action that triggers the cooldown. Use 'use' for items consumed on use, or 'attack' for weapons. Default is 'use'. | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| attack | Attack | |
| use | Use | |

## Samples


```json
"minecraft:cooldown": {
  "category": "attack",
  "duration": 0.2
}
```
