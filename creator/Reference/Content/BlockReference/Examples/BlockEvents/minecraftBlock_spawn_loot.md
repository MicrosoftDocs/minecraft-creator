---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - spawn_loot
ms.prod: gaming
---

# Block Documentation - spawn_loot

`spawn_loot` is an Event Response that will spawn the set loot from the block.

## Extra Parameters

`spawn_loot` can use the following parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|table|*not set* | String| File path, relative to the Behavior Pack's path, to the loot table file. |

## Example

```json
"spawn_loot":{
    "table": "path_to/customblock.json"
}
```
