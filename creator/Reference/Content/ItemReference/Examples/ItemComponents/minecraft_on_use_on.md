---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:on_use_on
ms.prod: gaming
---

# Item Documentation - minecraft:on_use_on

`minecraft:on_use_on` Allows you to receive an event when the item is used on a block in the world

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|on_use_on|*not set*|String |Event trigger for when the item is used.|

## Example

```json
"minecraft:on_use_on":{
    "on_use_on": "minecraft:entity_primed"
}
```
