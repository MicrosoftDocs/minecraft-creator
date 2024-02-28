---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:on_friendly_anger
description: "A reference document detailing the 'on_friendly_anger' entity trigger"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:on_friendly_anger

`minecraft:on_friendly_anger` adds a trigger that will run when a nearby entity of the same type as this entity enters an `Angry` state.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|event|*not set* | String|  The event to run when the conditions for this trigger are met. |
|[filters](../FilterList.md)|*not set* | Minecraft Filter| The list of conditions for this trigger to execute. |
|target| self| String| The target of the event. |

## Example

```json
"minecraft:on_friendly_anger":{
    "event": "minecraft:angry_when_splashed",
    "filters": "in_water_or_rain",
    "target": "self"
}
```

## Vanilla entities examples

### polar_bear

```json
"minecraft:on_friendly_anger": {
    "event": "minecraft:on_anger",
    "target": "self"
}
```

## Vanilla entities using `minecraft:on_friendly_anger`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [trader_llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/trader_llama.md)
