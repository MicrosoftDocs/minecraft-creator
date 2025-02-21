---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:is_dyeable"
description: "Describes the minecraft:is_dyeable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:is_dyeable

Allows dyes to be used on this entity to change its color.


## Is Dyeable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interact_text | *not set* | String | The text that will display when interacting with this entity with a dye when playing with Touch-screen controls. | Cat: `"action.interact.dye"` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:is_dyeable": {
  "interact_text": "action.interact.dye"
}
```
