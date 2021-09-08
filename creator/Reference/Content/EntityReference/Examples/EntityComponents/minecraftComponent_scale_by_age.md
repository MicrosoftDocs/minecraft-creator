---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:scale_by_age
ms.prod: gaming
---

# Entity Documentation - minecraft:scale_by_age

`minecraft:scale_by_age` defines the entity's size interpolation based on the entity's age.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| end_scale| 1| Decimal| Ending scale of the entity when it's fully grown. |
| start_scale| 1| Decimal| Initial scale of the newborn entity. |

## Example

```json
"minecraft:scale_by_age":{
    "end_scale": 1.0,
    "start_scale": 1.0
}
```

## Vanilla entities examples

### horse

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/horse.json" range="15-18":::

## Vanilla entities using `minecraft:scale_by_age`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)