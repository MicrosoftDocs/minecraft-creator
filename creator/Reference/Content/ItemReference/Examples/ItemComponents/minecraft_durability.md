---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:durability
description: "A reference document detailing the 'durability' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:durability

`minecraft:durability` sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_chance|*not set* |JSON Object| Damage chance is the percentage chance of this item losing durability. Default is set at 100. Defined as an int range with min and max value.|
|max_durability|*not set* |Integer | Max durability is the amount of damage that this item can take before breaking. This is a required parameter with a minimum value of 0.|

## Example

```json
"minecraft:durability":{
    "damage_chance": {
        "min": 10,
        "max": 50
},
    "max_durability": 36
}
```
