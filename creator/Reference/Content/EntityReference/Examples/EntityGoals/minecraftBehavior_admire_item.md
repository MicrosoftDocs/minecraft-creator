---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.admire_item"
description: "Describes the minecraft:behavior.admire_item ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.admire_item

Enables the mob to admire items that have been configured as admirable.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Admire Item (minecraft:admire_item)](../EntityComponents/minecraftComponent_admire_item.md)
> 

## Admire Item Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| admire_item_sound | *not set* | String | The sound event to play when admiring the item | Piglin: `"admire"` | 
| on_admire_item_start | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Piglin: `{"event":"admire_item_started_event","target":"self"}` | 
| on_admire_item_stop | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Piglin: `{"event":"admire_item_stopped_event","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Piglin: `2` | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again. | Piglin: `{"range_min":8,"range_max":8}` | 

## Samples

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.admire_item": {
  "priority": 2,
  "admire_item_sound": "admire",
  "sound_interval": {
    "range_min": 8,
    "range_max": 8
  },
  "on_admire_item_start": {
    "event": "admire_item_started_event",
    "target": "self"
  },
  "on_admire_item_stop": {
    "event": "admire_item_stopped_event",
    "target": "self"
  }
}
```
