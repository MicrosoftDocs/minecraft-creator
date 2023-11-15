---
author: mammerla
ms.author: mikeam
title: Block Documentation - set_block_state
description: "A reference document detailing the 'set_block_state' block event response"
ms.service: minecraft-bedrock-edition
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
  "state name here": "Molang expression here"
}
```
