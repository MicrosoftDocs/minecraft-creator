---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_friendly_anger
ms.prod: gaming
---

# Entity Documentation - minecraft:on_friendly_anger

`minecraft:on_friendly_anger` adds a trigger that will run when a nearby entity of the same type as this entity enters an `Angry` state.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_friendly_anger":{
    "event": "minecraft:angry_when_splashed",
    "filters": "in_water_or_rain",
    "target": "self"
}
```

## Vanilla entities examples

### polar_bear

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/polar_bear.json" range="74-77":::

## Vanilla entities using `minecraft:on_friendly_anger`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
