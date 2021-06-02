---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.move_to_poi
ms.prod: gaming
---

# minecraft:behavior.move_to_poi

`minecraft:behavior.move_to_poi` allows an entity to move to a point of interest that has been set.

> [!CAUTION]
> `minecraft:behavior.move_to_poi` is not currently used by any entities within Minecraft:Bedrock Edition.

## Parameters

|Name |Default Value  |Type  |Description  |
|:---------:|:---------:|:---------:|:---------:|
|poi_type| | String| Tells the goal what POI type it should be looking for |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

## Example

```json
"minecraft:behavior.move_to_poi":{
    "priority": 2,
}
```

## Vanilla entities examples

No entities currently use `minecraft:behavior.move_to_poi`

## Vanilla entities using `minecraft:behavior.move_to_poi`

No entities currently use `minecraft:behavior.move_to_poi`
