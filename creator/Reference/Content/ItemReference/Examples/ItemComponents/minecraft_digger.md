---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:digger"
description: "Describes the minecraft:digger item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:digger

Allows a creator to determine how quickly an item can dig specific blocks.


## Minecraft Digger Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| destroy_speeds | *not set* | [Destroy Speeds](#destroy-speeds-item-type) item | A list of blocks to dig with correlating speeds of digging. |  | 
| use_efficiency | *not set* | Boolean true/false | Determines whether this item should be impacted if the efficiency enchantment is applied to it. |  | 

## Destroy Speeds item type

#### BlockInfo Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block | *not set* | [Block](#block-item-type) item | Block to be dug. |  | 
| block (Alternate 1) | *not set* | String |  |  | 
| block (Alternate 2) | *not set* | Object |  |  | 
| speed | *not set* | Integer number | Digging speed for the correlating block(s). |  | 

## Block item type

#### Block Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| name | *not set* | String |  |  | 
| states | *not set* | Integer number |  |  | 
| states (Alternate 1) | *not set* | String |  |  | 
| states (Alternate 2) | *not set* | Boolean true/false |  |  | 
| tags | *not set* | String |  |  | 

## Samples


```json
"minecraft:digger": {
  "minecraft:digger": {
    "use_efficiency": true,
    "destroy_speeds": [
      {
        "speed": 6,
        "block": {
          "tags": "query.any_tag( 'wood' )"
        }
      },
      {
        "block": "minecraft:coal_ore",
        "speed": 2
      }
    ]
  }
}
```
