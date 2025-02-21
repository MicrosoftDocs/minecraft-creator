---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:giveable"
description: "Describes the minecraft:giveable entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:giveable

Defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.


## Giveable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0 | Decimal number | An optional cool down in seconds to prevent spamming interactions. |  | 
| items | *not set* | Array of strings | The list of items that can be given to the entity to place in their inventory. |  | 
| on_give | *not set* | String | Event to fire when the correct item is given. |  | 
| triggers | *not set* | [Triggers](#triggers-item-type) item |  | Panda: `{"cooldown":3,"items":["bamboo","cake"],"on_give":{"event":"minecraft:on_calm","target":"self"}}` | 

## Triggers item type

#### Triggers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | *not set* | Decimal number |  | Panda: `3` | 
| items | *not set* | String |  | Panda: `["bamboo","cake"]` | 
| on_give | *not set* | String |  | Panda: `{"event":"minecraft:on_calm","target":"self"}` | 

## Samples

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)


```json
"minecraft:giveable": {
  "triggers": {
    "cooldown": 3,
    "items": [
      "bamboo",
      "cake"
    ],
    "on_give": {
      "event": "minecraft:on_calm",
      "target": "self"
    }
  }
}
```
