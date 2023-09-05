---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - minecraft:repairable
description: "A reference document detailing the 'repairable' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - minecraft:repairable

`minecraft:repairable` defines the items that can be used to repair a defined item, and the amount of durability each item restores upon repair. Each entry needs to define a list of strings for 'items' that can be used for the repair and an optional 'repair_amount' for how much durability is repaired.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|repair_items|*not set* | Array| List of repair item entries. |

## Example

```json
"minecraft:repairable":{
    "on_repaired": "minecraft:celebrate",
    "repair_items": ["anvil"]
}
```
