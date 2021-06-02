---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.rise_to_liquid_level
ms.prod: gaming
---

# minecraft:behavior.rise_to_liquid_level

`minecraft:behavior.rise_to_liquid_level` allows an entity to rise to the top of lava if they are located or have spawned under lava.

> [!NOTE]
> `minecraft:behavior.rise_to_liquid_level` does not require any parameters in order to work properly.

## Example

```json
"minecraft:behavior.rise_to_liquid_level":{
    "priority": 0,
}
```

## Vanilla entities examples

### strider

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/strider.json" range="268-273":::

## Vanilla entities using `minecraft:behavior.rise_to_liquid_level`

- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
