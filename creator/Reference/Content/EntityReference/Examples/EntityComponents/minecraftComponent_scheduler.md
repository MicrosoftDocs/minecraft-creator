---
author: v-jeffreykim
ms.author: v-jeffreykim
title: minecraft:scheduler
ms.prod: gaming
---

# minecraft:scheduler

`minecraft:scheduler` fires off scheduled mob events at time of day events.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| scheduled_events| *not set*| List| The list of triggers that fire when the conditions match the given filter criteria. If any filter criteria overlap the first defined event will be picked. |

## Example

```json
"minecraft:scheduler":{
    "scheduled_events": [
        {
            "filters": [{"test": "has_damage", "value": false},
            {"test":"is_daytime", "value": false}],
            "event": "minecraft:sleepy_time"
        }
    ]
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="660-694":::

## Vanilla entities using `minecraft:scheduler`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)