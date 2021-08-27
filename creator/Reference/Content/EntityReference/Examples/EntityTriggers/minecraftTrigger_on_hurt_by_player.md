---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_hurt_by_player
ms.prod: gaming
---

# Entity Documentation - minecraft:on_hurt_by_player

`minecraft:on_hurt_by_player` adds a trigger to call when this entity takes damage by a player.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_hurt_by_player":{
    "event": "minecraft:ow",
    "filters": "has_target",
    "target": "self",
}
```

## Vanilla entities examples

### blaze

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/blaze.json" range="152-155":::

## Vanilla entities using `minecraft:on_hurt_by_player`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
