---
author: v-josjones
ms.author: v-josjones
title: Item Documentation - minecraft:on_use
ms.prod: gaming
---

# Item Documentation - minecraft:on_use

`minecraft:on_use` Allows you to receive an event when the item is used.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|on_use|*not set*|String |Event trigger for when the item is used.|

## Example

```json
"minecraft:on_use":{
    "on_use": "minecraft:entity_transformed"
}
```
