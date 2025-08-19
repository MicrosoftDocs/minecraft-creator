---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:raid_trigger"
description: "Describes the minecraft:raid_trigger entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:raid_trigger

Attempts to trigger a raid at the entity's location.


## Raid Trigger Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:raid_trigger | *not set* | [Raid Trigger](#raid-trigger-item-type) item |  | Player: `{"triggered_event":{"event":"minecraft:remove_raid_trigger","target":"self"}}` | 
| triggered_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to run when a raid is triggered on the village. |  | 

## Raid Trigger item type

## Samples

#### [Player](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/player.json)


```json
"minecraft:raid_trigger": {
  "minecraft:raid_trigger": {
    "triggered_event": {
      "event": "minecraft:remove_raid_trigger",
      "target": "self"
    }
  }
}
```
