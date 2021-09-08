---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_death
ms.prod: gaming
---

# Entity Documentation - minecraft:on_death

`minecraft:on_death` adds a trigger to call on this entity's death.

>[!IMPORTANT]
> `minecraft:on_death` can only be used by the `ender_dragon` entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_death":{
    "event": "minecraft:custom_death_event",
    "filters": "is_daytime",
    "target": "self",
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="94-97":::

## Vanilla entities using `minecraft:on_death`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
