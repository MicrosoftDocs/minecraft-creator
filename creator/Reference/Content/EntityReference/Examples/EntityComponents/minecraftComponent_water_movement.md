---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:water_movement
ms.prod: gaming
---

# Entity Documentation - minecraft:water_movement

`minecraft:water_movement` defines the speed with which an entity can move through water.

## Parameters

|Name |Default Value  |Type  |Description  |
|:-----------|:-----------|:-----------|:-----------|
| drag_factor| 0.8| Decimal| Drag factor to determine movement speed when in water. |

## Example

```json
"minecraft:water_movement":{
    "drag_factor": 0.8
}
```

## Vanilla entities examples

### panda

```json
"minecraft:water_movement": {
        "drag_factor": 0.98
      }
```

## Vanilla entities using `minecraft:water_movement`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
