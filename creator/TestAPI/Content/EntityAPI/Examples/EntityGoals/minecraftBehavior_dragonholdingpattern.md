---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragonholdingpattern
ms.prod: gaming
---

# minecraft:behavior.dragonholdingpattern

`minecraft:behavior.dragonholdingpattern` allows an entity to fly around in a circle around the center podium located in The End.

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity types.

## Example

```json
"minecraft:behavior.dragonholdingpattern":{
    "priority": 3,
}
```

## Vanilla entities examples

### elder_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/elder_dragon.json" range="33-35":::

## Vanilla entities using `minecraft:behavior.dragonholdingpattern`

- [elder_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_dragon.md)
