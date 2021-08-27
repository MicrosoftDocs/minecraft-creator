---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.receive_love
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.receive_love

`minecraft:behavior.receive_love` allows an entity to mate with another similar entity when approached to breed.

> [!NOTE]
> This behavior can only be used by the `villager` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

## Example

```json
"minecraft:behavior.receive_love":{
    "priority": 2,
    "speed_multiplier": 1.0,
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1241-1243":::

## Vanilla entities using `minecraft:behavior.receive_love`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
