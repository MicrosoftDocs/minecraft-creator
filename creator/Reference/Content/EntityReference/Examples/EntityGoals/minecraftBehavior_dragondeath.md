---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragondeath
ms.prod: gaming
---

# minecraft:behavior.dragondeath

`minecraft:behavior.dragondeath` controls the entity's death state and animation.

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity type.

## Example

```json
"minecraft:behavior.dragondeath":{
    "priority": 1,
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="42-44":::

## Vanilla entities using `minecraft:behavior.dragondeath`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
