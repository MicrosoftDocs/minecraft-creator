---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_wake_with_owner
ms.prod: gaming
---

# Entity Documentation - minecraft:on_wake_with_owner

`minecraft:on_wake_with_owner` adds a trigger to call when this pet's owner awakes after sleeping with the pet.

> [!NOTE]
> `minecraft:on_wake_with_owner` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_wake_with_owner":{
    "event": "minecraft:stretch",
    "filters": "is_daytime",
    "target": "self",
}
```

## Vanilla entities examples

### cat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cat.json" range="190-193":::

## Vanilla entities using `minecraft:on_wake_with_owner`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
