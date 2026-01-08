---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:insomnia"
description: "Describes the minecraft:insomnia entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:insomnia

Adds a timer since last rested to see if phantoms should spawn.


## Insomnia Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| days_until_insomnia | 3 | Decimal number | Number of days the mob has to stay up until the insomnia effect begins. | Player: `3` | 

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:insomnia": {
  "days_until_insomnia": 3
}
```
