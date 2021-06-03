---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.enderman_take_block
ms.prod: gaming
---

# minecraft:behavior.enderman_take_block

`minecraft:behavior.enderman_take_block` allows the entity to pick up a nearby block and carry the block in it's hands.

> [!NOTE]
> This behavior can only be used by `enderman` entity types.

## Example

```json
"minecraft:behavior.enderman_take_block":{
    "priority": 9,
}
```

## Vanilla entities examples

### enderman

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/enderman.json" range="162-164":::

## Vanilla entities using `minecraft:behavior.enderman_take_block`

- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
