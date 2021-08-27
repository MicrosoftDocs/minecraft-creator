---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:grows_crop
ms.prod: gaming
---

# Entity Documentation - minecraft:grows_crop

`minecraft:grows_crop` could increase crop growth when entity walks over crop.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| chance| 0| Decimal| Value between 0-1. Chance of success per tick. |
| charges| 10| Integer| Number of charges |

## Example

```json
"minecraft:grows_crop":{
    "chance": 0,
    "charges": 10
}
```

## Vanilla entities examples

### bee

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/bee.json" range="216-219":::

## Vanilla entities using `minecraft:grows_crop`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)