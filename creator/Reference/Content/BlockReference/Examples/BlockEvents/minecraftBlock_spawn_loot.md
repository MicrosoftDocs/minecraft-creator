---
author: v-josjones
ms.author: v-josjones
title: spawn_loot
ms.prod: gaming
---

# spawn_loot

`spawn_loot` is an Event Response that will spawn the set loot from the block.

## Extra Parameters

`spawn_loot` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|table|*not set* | String| File path, relative to the Behavior Pack's path, to the loot table file. |

## Example

```json
"spawn_loot":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
