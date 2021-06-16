---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:giveable
ms.prod: gaming
---

# minecraft:giveable

`minecraft:giveable` defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| cooldown| 0.0| Decimal| An optional cool down in seconds to prevent spamming interactions. |
| items| *not set*| List| The list of items that can be given to the entity to place in their inventory. |
| on_give| *not set*| String| Event to fire when the correct item is given. |

## Example

```json
"minecraft:giveable":{
    "cooldown": 0.0,
    "items": ,
    "on_give": ,
}
```

## Vanilla entities examples

### panda

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/panda.json" range="346-358":::

## Vanilla entities using `minecraft:giveable`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)