---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:repairable
ms.prod: gaming
---

# Item Documentation - minecraft:repairable

`minecraft:repairable` sets the repairable item component with how much damage can this item repair and what items can repair it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|on_repaired|*not set* |String|Event that is called when this item has been repaired.|
|repair_items|*not set* |List|List of repair item entries.|

## Example

```json
"minecraft:repairable":{
    "on_repaired": "minecraft:celebrate",
    "repair_items": ["anvil"]
}
```
