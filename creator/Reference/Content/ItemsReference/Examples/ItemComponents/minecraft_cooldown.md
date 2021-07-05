---
author: v-josjones
ms.author: v-josjones
title: minecraft:cooldown
ms.prod: gaming
---

# minecraft:cooldown

`minecraft:cooldown` sets the item's "Cool down" time. After you use an item it becomes unusable for the duration specified by the 'cool down time' setting in this component.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category|*not set* |String | The type of cool down for this item.|
|duration |*not set*  | Decimal| The duration of time this item will spend cooling down before becoming usable again.|

## Example

```json
"minecraft:cooldown":{
    "block": "seeds",
    "use_on" : ["dirt",
                "grass"]
}
```
