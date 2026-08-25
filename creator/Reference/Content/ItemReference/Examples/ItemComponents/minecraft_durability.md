---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:durability"
description: "Describes the minecraft:durability item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:durability

Sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.

> [!Note]
> This item requires a format version of at least 1.20.0.


## Item Durability Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| damage_chance | {"max":100,"min":100} | [Damage Chance](#block-intrange) item | Specifies the percentage chance of this item losing durability. | 
| max_durability | *not set* | Integer number | Max durability is the amount of damage that this item can take before breaking. This is a required parameter and has a minimum of 0. | 

### damage_chance

Specifies the percentage chance of this item losing durability. Default is set to 100. Defined as an int range with min and max value.  Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected.


### Block IntRange

#### Block IntRange Properties

**JSON path:** `damage_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Integer number |  | 
| min | 0 | Integer number |  | 

## Samples


```json
"minecraft:durability": {
  "damage_chance": {
    "min": 10,
    "max": 50
  },
  "max_durability": 36
}
```
