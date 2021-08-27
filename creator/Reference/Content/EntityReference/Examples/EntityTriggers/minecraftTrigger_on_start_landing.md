---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_start_landing
ms.prod: gaming
---

# Entity Documentation - minecraft:on_start_landing

`minecraft:on_start_landing` adds a trigger to call when this entity lands.

>[!IMPORTANT]
> `minecraft:on_start_landing` can only be used by the `ender_dragon` entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_start_landing":{
    "event": "minecraft:prepare_for_landing",
    "filters": "is_daytime",
    "target": "self",
}
```

## Vanilla entities examples

### ender_dragon

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ender_dragon.json" range="86-89":::

## Vanilla entities using `minecraft:on_start_landing`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
