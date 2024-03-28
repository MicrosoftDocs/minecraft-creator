---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:on_start_landing
description: "A reference document detailing the 'on_start_landing' entity trigger"
ms.service: minecraft-bedrock-edition
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

```json
"minecraft:on_start_landing": {
    "event": "minecraft:start_land",
    "target": "self"
}
```

## Vanilla entities using `minecraft:on_start_landing`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
