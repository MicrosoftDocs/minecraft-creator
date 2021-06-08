---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragonscanning
ms.prod: gaming
---

# minecraft:behavior.dragonscanning

`minecraft:behavior.dragonscanning` allows an entity to look around for a player to attack while in perch mode.

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity type.

## Example

```json
"minecraft:behavior.dragonscanning":{
    "priority": 3,
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="19-21":::

## Vanilla entities using `minecraft:behavior.dragonscanning`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
