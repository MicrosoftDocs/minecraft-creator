---
author: mammerla
ms.author: mikeam
title: Block Documentation - set_block_state
ms.prod: gaming
description: "A reference document detailing the 'set_block_state' block event response"
---

# Block Documentation - set_block_state

`set_block_state` is an Event Response that will set the block state.

## Extra Parameters

`set_block_state` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
||*not set* | Molang| Block state to set on the block. |

## Example

```json
"set_block_state": {
  "property name here": "Molang expression here"
}
```
