---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragondeath
ms.prod: gaming
---

# minecraft:behavior.dragondeath

`minecraft:behavior.dragondeath` controls the entity's death state and animation.

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity types.

## Example

```json
"minecraft:behavior.dragondeath":{
    "priority": 1,
}
```

## Vanilla entities examples

### elder_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/elder_dragon.json" range="42-44":::

## Vanilla entities using `minecraft:behavior.dragondeath`

- [elder_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_dragon.md)
