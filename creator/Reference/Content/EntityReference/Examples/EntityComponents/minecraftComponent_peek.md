---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:peek"
description: "Describes the minecraft:peek entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:peek

Defines the entity's 'peek' behavior, defining the events that should be called during it.


## Peek Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_close | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when the entity is done peeking. | Shulker: `{"event":"minecraft:on_close"}` | 
| on_open | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when the entity starts peeking. | Shulker: `{"event":"minecraft:on_open"}` | 
| on_target_open | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when the entity's target entity starts peeking. | Shulker: `{"event":"minecraft:on_open"}` | 

## Samples

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)


```json
"minecraft:peek": {
  "on_open": {
    "event": "minecraft:on_open"
  },
  "on_close": {
    "event": "minecraft:on_close"
  },
  "on_target_open": {
    "event": "minecraft:on_open"
  }
}
```
