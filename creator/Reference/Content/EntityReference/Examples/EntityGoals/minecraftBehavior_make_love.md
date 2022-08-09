---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.make_love
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.make_love

`minecraft:behavior.make_love` allows an entity to interact with other similar entities to produce an offspring.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.make_love":{
    "priority": 8,
}
```

## Vanilla entities examples

### villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/villager_v2.json" range="1238-1240":::

## Vanilla entities using `minecraft:behavior.make_love`

- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
