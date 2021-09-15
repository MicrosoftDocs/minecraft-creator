---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_hurt
ms.prod: gaming
---

# Entity Documentation - minecraft:on_hurt

`minecraft:on_hurt` adds a trigger to call when this entity takes damage.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_hurt":{
    "event": "minecraft:you_hit_me",
    "filters": {"test": "has_damage", "value": "contact"},
    "target": "self",
}
```

## Vanilla entities examples

### blaze

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/blaze.json" range="148-151":::

## Vanilla entities using `minecraft:on_hurt`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
