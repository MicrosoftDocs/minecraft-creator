---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.emerge"
description: "Describes the minecraft:behavior.emerge ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.emerge

Allows this entity to emerge from the ground.


## Emerge Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Integer number | Time in seconds the mob has to wait before using the goal again |  | 
| duration | 5 | Decimal number | Goal duration in seconds | Warden: `7` | 
| on_done | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Trigger to be executed when the goal execution is about to end | Warden: `{"event":"minecraft:emerged","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:behavior.emerge": {
  "duration": 7,
  "on_done": {
    "event": "minecraft:emerged",
    "target": "self"
  }
}
```
