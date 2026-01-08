---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:heartbeat"
description: "Describes the minecraft:heartbeat entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:heartbeat

Defines the entity's heartbeat.


## Heartbeat Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval | 1.00 | String | A Molang expression defining the inter-beat interval in seconds. A value of zero or less means no heartbeat. | Warden: `"2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"` | 
| sound_event | heartbeat | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Level sound event to be played as the heartbeat sound. |  | 

## Samples

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:heartbeat": {
  "interval": "2.0 - math.clamp(query.anger_level / 80 * 1.5, 0, 1.5)"
}
```
