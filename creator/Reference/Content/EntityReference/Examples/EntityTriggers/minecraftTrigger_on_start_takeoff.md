---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_start_takeoff"
description: "Describes the minecraft:on_start_takeoff entity trigger"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_start_takeoff

Only usable by the Ender Dragon. Adds a trigger to call when this entity starts flying.


## On Start Takeoff Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | String | The event to run when the conditions for this trigger are met. | Ender Dragon: `"minecraft:start_fly"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Ender Dragon: `"self"` | 

## Samples

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:on_start_takeoff": {
  "event": "minecraft:start_fly",
  "target": "self"
}
```
