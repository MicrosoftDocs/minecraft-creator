---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:environment_sensor
ms.prod: gaming
---

# Entity Documentation - minecraft:environment_sensor

`minecraft:environment_sensor` creates a trigger based on environment conditions.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| triggers| *not set*| List| The list of triggers that fire when the environment conditions match the given filter criteria. |

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| event| *not set* | string |The event to run when the conditions for this trigger are met.|
| filters|*not set* |List / Filter| The list of conditions for this trigger to execute.|
| target| self|string|The target of the event. |

## Example

```json
"minecraft:environment_sensor":{
    "triggers":[
       {
          "filters":{
             "all_of":[
                {
                   "test":"is_daytime",
                   "value":true
                },
                {
                   "test":"has_target",
                   "operator":"==",
                   "value":false
                }
             ]
          },
          "event":"minecraft:fox_configure_docile_day"
       }
    ]
 }
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="116-137":::

## Vanilla entities using `minecraft:environment_sensor`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
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
