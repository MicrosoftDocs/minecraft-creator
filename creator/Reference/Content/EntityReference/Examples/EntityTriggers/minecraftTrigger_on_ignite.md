---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:on_ignite
ms.prod: gaming
---

# Entity Documentation - minecraft:on_ignite

`minecraft:on_ignite` adds a trigger to call when this entity is set on fire.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_ignite": {
  "event": "minecraft:on_fire",
  "filters": {
    "test": "has_damage",
    "value": "fire"
  },
  "target": "self"
}
```

## Vanilla entities examples

No entities currently use `minecraft:on_ignite`

## Vanilla entities using `minecraft:on_ignite`

No entities currently use `minecraft:on_ignite`
