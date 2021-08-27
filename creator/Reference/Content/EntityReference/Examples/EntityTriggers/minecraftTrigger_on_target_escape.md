---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_target_escape
ms.prod: gaming
---

# Entity Documentation - minecraft:on_target_escape

`minecraft:on_target_escape` adds a trigger to call when this entity loses the target it currently has.

>[!IMPORTANT]
> `minecraft:on_target_escape` requires a target in order to work properly.
>
>- [minecraft:behavior.nearest_attackable_target](../EntityGoals/minecraftBehavior_nearest_attackable_target.md)
>- [minecraft:behavior.hurt_by_target](../EntityGoals/minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_target_escape":{
    "event": "minecraft:lost_them",
    "filters": "has_target",
    "target": "self",
}
```

## Vanilla entities examples

### magma_cube

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/magma_cube.json" range="121-124":::

## Vanilla entities using `minecraft:on_target_escape`

- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
