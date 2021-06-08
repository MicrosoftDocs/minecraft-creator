---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragonholdingpattern
ms.prod: gaming
---

# minecraft:behavior.dragonholdingpattern

`minecraft:behavior.dragonholdingpattern` allows an entity to fly around in a circle around the center podium located in `The End`.

> [!NOTE]
> This behavior can only be used by the `ender_dragon` entity type.

## Example

```json
"minecraft:behavior.dragonholdingpattern":{
    "priority": 3,
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="33-35":::

## Vanilla entities using `minecraft:behavior.dragonholdingpattern`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
