---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.run_around_like_crazy
ms.prod: gaming
---

# minecraft:behavior.run_around_like_crazy

`minecraft:behavior.run_around_like_crazy` allows an entity to run around without a set goal.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

## Example

```json
"minecraft:behavior.run_around_like_crazy":{
    "priority": 1,
    "speed_multiplier": 1.5,
}
```

## Vanilla entities examples

### llama

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/llama.json" range="392-395":::

## Vanilla entities using `minecraft:behavior.run_around_like_crazy`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
