---
author: v-josjones
ms.author: v-josjones
title: minecraft:entity_collision
ms.prod: gaming
---

# minecraft:entity_collision

`minecraft:entity_collision` is a component controlled by a `boolean` that disables the collision of the block with entities.

> [!IMPORTANT]
> `minecraft:entity_collision` can **only** be set to `false`.

## Extra Parameters

`minecraft:entity_collision` can use the following parameters to adjust the bounds for collision.

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|origin| [-8.0, 0.0, -8.0]| Array| Minimal position Bounds of the collision box |
|size| [16.0, 16.0, 16.0]| Array| Size of each side of the box of the component |

## Example

```json
"minecraft:entity_collision":{
    "origin": [-8.0, 0.0, -8.0],
    "size": [16.0,16.0,16.0],
}
```
