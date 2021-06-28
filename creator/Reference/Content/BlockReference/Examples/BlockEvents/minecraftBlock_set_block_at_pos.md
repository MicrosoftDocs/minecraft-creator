---
author: v-josjones
ms.author: v-josjones
title: set_block_at_pos
ms.prod: gaming
---

# set_block_at_pos

`set_block_at_pos` is an Event Response that will set the block type of another block that is relative.

## Extra Parameters

`set_block_at_pos` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|block_offset| [0.0, 0.0, 0.0]| Vector [a, b, c]| The offset from the block's center. |
|block_type|*not set* |String| The type of block to set. |

## Example

```json
"set_block_at_pos":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
