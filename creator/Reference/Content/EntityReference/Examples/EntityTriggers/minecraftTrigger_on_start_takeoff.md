---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_start_takeoff
ms.prod: gaming
---

# Entity Documentation - minecraft:on_start_takeoff

`minecraft:on_start_takeoff` adds a trigger to call when this entity starts flying.

>[!IMPORTANT]
> `minecraft:on_start_takeoff` can only be used by the `ender_dragon` entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_start_takeoff":{
    "event": "minecraft:prepare_for_takeoff",
    "filters": "is_daytime",
    "target": "self",
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="90-93":::

## Vanilla entities using `minecraft:on_start_takeoff`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
