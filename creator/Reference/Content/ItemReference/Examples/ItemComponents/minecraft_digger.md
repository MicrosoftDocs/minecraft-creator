---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:digger"
description: "Describes the minecraft:digger item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:digger

Configures an item as a digging tool, allowing it to break specific blocks faster than normal. Define which blocks are affected and the speed multiplier for each.


## Item Components Digger Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| destroy_speeds | [] | [Destroy Speeds](#item-components-blockinfo) item | An array of objects that define which blocks this item can dig and at what speed. Each entry specifies a block (by ID or tag query) and a speed multiplier. | 
| use_efficiency | false | Boolean true/false | When true, the Efficiency enchantment will increase the dig speed of this item. Default is false. | 

### Item Components BlockInfo
Has block and digging speed configuration.


#### Item Components BlockInfo Properties

**JSON path:** `destroy_speeds`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| block (Block) | *not set* | [Block](#block) item | Block to be dug. | 
| block (as String) | *not set* | String |  | 
| block (Alternate 2) | *not set* | Object |  | 
| speed | *not set* | Integer number | Digging speed for the correlating block(s). | 

#### Block

##### Block Properties

**JSON path:** `destroy_speeds > block`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

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
