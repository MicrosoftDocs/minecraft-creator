---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:on_start_takeoff
description: "A reference document detailing the 'on_start_takeoff' entity trigger"
ms.service: minecraft-bedrock-edition
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

```json
"minecraft:on_start_takeoff": {
    "event": "minecraft:start_fly",
    "target": "self"
}
```

## Vanilla entities using `minecraft:on_start_takeoff`

- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
