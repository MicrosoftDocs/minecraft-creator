---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:environment_sensor
ms.prod: gaming
---

# minecraft:environment_sensor

`minecraft:environment_sensor` creates a trigger based on environment conditions.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| triggers| *not set*| List| The list of triggers that fire when the environment conditions match the given filter criteria. |

## Example

```json
"minecraft:environment_sensor":{
    "triggers": [],
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="116-137":::

## Vanilla entities using `minecraft:environment_sensor`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)