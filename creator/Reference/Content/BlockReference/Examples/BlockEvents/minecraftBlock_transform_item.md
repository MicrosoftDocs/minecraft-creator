---
author: mammerla
ms.author: mikeam
title: Block Documentation - transform_item
ms.prod: gaming
description: "A reference document detailing the 'transform_item' block event response"
---

# Block Documentation - transform_item

`transform_item` is an Event Response that will transform an item into another item.

## Extra Parameters

`transform_item` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|transform|*not set* | String|  Name of the item it should transform into |

## Example

```json
"transform_item":{
    "transform" : "iron_sword"
}
```
