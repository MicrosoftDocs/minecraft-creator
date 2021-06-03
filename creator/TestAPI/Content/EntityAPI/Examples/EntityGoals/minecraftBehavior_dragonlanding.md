---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragonlanding
ms.prod: gaming
---

# minecraft:behavior.dragonlanding

`minecraft:behavior.dragonlanding` allows an entity to stop flying and transition into perching mode

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity types.

## Example

```json
"minecraft:behavior.dragonlanding":{
    "priority": 0,
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="13-15":::

## Vanilla entities using `minecraft:behavior.dragonlanding`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
