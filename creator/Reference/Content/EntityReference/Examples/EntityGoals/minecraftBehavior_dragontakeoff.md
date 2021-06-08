---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.dragontakeoff
ms.prod: gaming
---

# minecraft:behavior.dragontakeoff

`minecraft:behavior.dragontakeoff` allows an entity to leave perch mode and go back to flying around.

> [!NOTE]
> This behavior can only be used by `ender_dragon` entity type.

## Example

```json
"minecraft:behavior.dragontakeoff":{
    "priority": 1,
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="24-26":::

## Vanilla entities using `minecraft:behavior.dragontakeoff`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
