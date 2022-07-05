---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:movement.glide
ms.prod: gaming
---

# Entity Documentation - minecraft:movement.glide

`minecraft:movement.glide` is the move control for a flying mob that has a gliding movement.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the mob can turn per tick. |

## Example

```json
"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}
```

## Vanilla entities examples

### phantom

"minecraft:movement.glide": {
    "start_speed": 0.1,
    "speed_when_turning": 0.2
}

## Vanilla entities using `minecraft:movement.glide`


- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)