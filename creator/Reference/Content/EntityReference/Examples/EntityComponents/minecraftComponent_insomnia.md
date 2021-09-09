---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:insomnia
ms.prod: gaming
---

# Entity Documentation - minecraft:insomnia

`minecraft:insomnia` adds a timer since last rested to see if phantoms should spawn.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| days_until_insomnia| 3.0| Decimal| Number of days the mob has to stay up until the insomnia effect begins. |

## Example

```json
"minecraft:insomnia":{
    "days_until_insomnia": 3.0
}
```

## Vanilla entities examples

### player

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/player.json" range="112-114":::

## Vanilla entities using `minecraft:insomnia`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)