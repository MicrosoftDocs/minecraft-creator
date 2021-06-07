---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:behavior.jump_to_block
ms.prod: gaming
---

# minecraft:behavior.jump_to_block

This component allows the mob to search around for a block to jump to and then jump to that block.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
| searchWidth | 8 | Integer | The maximum width in blocks that the mob will search. Range [2, 15]. |
| searchHeight | 10 | Integer | The maximum height in blocks that the mob will search. Range [2, 15]. |
| scaleFactor | 0.7 | Decimal | The scalefactor of the bounding box of the mob while it is jumping. |
| maxVelocity | 1.5 | Decimal | The maximum velocity with which the mob can jump. |
| minPathLength | 5 | Integer | The minimum length in blocks of the mob's path to a block in order to consider jumping to it. |
| minDistance | 2 | Integer | The minimum distance in blocks from the mob to a block in order to consider jumping to it. |
| coolDownTimeRange | [10.0, 20.0] | Decimal | The minimum and maximum cooldown time-range in seconds between each attempted jump.

## Example

```json
"minecraft:behavior.jumpToBlock":{
    "searchWidth": 9,
    "searchHeight": 5,
    "scaleFactor": 2.0,
    "maxVelocity": 10.0,
    "minPathLength": 4,
    "minDistance": 6,
    "coolDownTimeRange": [5, 10],
}
```

## Vanilla Mob examples

### Goat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/goat.json"

## Vanilla Mobs using `minecraft:behavior.jump_to_block`

- [goat](Source/VanilliaBehaviorPack_Snippets/entities/goat.json)
