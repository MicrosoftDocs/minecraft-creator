---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.enderman_take_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.enderman_take_block

`minecraft:behavior.enderman_take_block` allows the entity to pick up a nearby block and carry the block in its hands.

> [!NOTE]
> This behavior can only be used by the `enderman` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.enderman_take_block":{
    "priority": 9,
}
```

## Vanilla entities examples

### enderman

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/enderman.json" range="164-166":::

## Vanilla entities using `minecraft:behavior.enderman_take_block`

- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
