---
author: mammerla
ms.author: mikeam
title: Block Documentation - set_block_property
ms.prod: gaming
description: "A reference document detailing the 'set_block_property' block event response"
---

# Block Documentation - set_block_property

`set_block_property` is an Event Response that will set the block property.

## Extra Parameters

`set_block_property` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|property|*not set* | Molang| Block property to set on the block. |

## Example

```json
"set_block_property": {
  "property name here": "Molang expression here"
}
```
