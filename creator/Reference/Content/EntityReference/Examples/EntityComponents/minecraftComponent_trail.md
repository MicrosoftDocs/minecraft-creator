---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:trail
ms.prod: gaming
---

# Entity Documentation - minecraft:trail

`minecraft:trail` causes an entity to leave a trail of blocks as it moves about the world.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| block_type| "air"| String| The type of block you wish to be spawned by the entity as it move about the world. Solid blocks may not be spawned at an offset of (0,0,0). |
| [spawn_filter](../FilterList.md)| *not set*| Minecraft Filter| One or more conditions that must be met in order to cause the chosen block type to spawn. |
| spawn_offset| [0, 0, 0]| Vector [a, b, c]| The distance from the entities current position to spawn the block. Capped at up to 16 blocks away. The X value is left/right(-/+), the Z value is backward/forward(-/+), the Y value is below/above(-/+). |

## Example

```json
"minecraft:trail": {
    "block_type": "air",
    "spawn_filter": {"test":"is_daytime", "value": true},
    "spawn_offset": [0, 0, 0]
}
```

## Vanilla entities examples

### snow_golem

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/snow_golem.json" range="120-123":::

## Vanilla entities using `minecraft:trail`

- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)