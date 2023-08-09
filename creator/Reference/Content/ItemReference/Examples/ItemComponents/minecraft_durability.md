---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:durability
ms.prod: gaming
description: "A reference document detailing the 'durability' item component"
---

# Item Documentation - minecraft:durability

`minecraft:durability` sets how much damage the item can take before breaking, and allows the item to be combined at an anvil, grindstone, or crafting table.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage_chance|*not set* |Integer Range | Damage chance is the percentage chance of this item losing durability. Default is set at 100 to 100. |
|max_durability|*not set* |Integer | Max durability is the amount of damage that this item can take before breaking. The minimum value for this parameter is 0.|

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
