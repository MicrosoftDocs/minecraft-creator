---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:barter"
description: "Describes the minecraft:barter entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:barter

Enables the component to drop an item as a barter exchange.


## Barter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| barter_table | *not set* | String from a list of choices | Loot table that's used to drop a random item. | Piglin: `"loot_tables/entities/piglin_barter.json"` | 
| cooldown_after_being_attacked | 0 | Range of integers | Duration, in seconds, for which mob won't barter items if it was hurt. | Piglin: `20` | 

## Samples

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:barter": {
  "barter_table": "loot_tables/entities/piglin_barter.json",
  "cooldown_after_being_attacked": 20
}
```
