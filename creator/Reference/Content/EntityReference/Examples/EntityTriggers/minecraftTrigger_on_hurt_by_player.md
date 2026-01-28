---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:on_hurt_by_player"
description: "Describes the minecraft:on_hurt_by_player entity trigger"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:on_hurt_by_player

Adds a trigger to call when this entity is attacked by the player.


## On Hurt By Player Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to run when the conditions for this trigger are met. | Blaze: `"minecraft:on_hurt_event"` | 
| filters | *not set* | Minecraft filter | The list of conditions for this trigger to execute. |  | 
| target | self | String | The target of the event. | Blaze: `"self"` | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:on_hurt_by_player": {
  "event": "minecraft:on_hurt_event",
  "target": "self"
}
```
