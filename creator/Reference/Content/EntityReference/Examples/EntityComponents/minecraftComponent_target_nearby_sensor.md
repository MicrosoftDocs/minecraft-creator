---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:target_nearby_sensor"
description: "Describes the minecraft:target_nearby_sensor entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:target_nearby_sensor

Defines the entity's range within which it can see or sense other entities to target them.


## Target Nearby Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| inside_range | 1 | Decimal number | Maximum distance in blocks that another entity will be considered in the 'inside' range | Blaze: `2`, Drowned: `3` | 
| must_see | false | Boolean true/false | Whether the other entity needs to be visible to trigger 'inside' events | Blaze: `true` | 
| on_inside_range | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when an entity gets in the inside range. Can specify 'event' for the name of the event and 'target' for the target of the event | Blaze: `{"event":"switch_to_melee","target":"self"}`, Drowned: `{"event":"minecraft:switch_to_melee","target":"self"}` | 
| on_outside_range | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when an entity gets in the outside range. Can specify 'event' for the name of the event and 'target' for the target of the event | Blaze: `{"event":"switch_to_ranged","target":"self"}`, Drowned: `{"event":"minecraft:switch_to_ranged","target":"self"}` | 
| on_vision_lost_inside_range | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to call when an entity exits visual range. Can specify 'event' for the name of the event and 'target' for the target of the event |  | 
| outside_range | 5 | Decimal number | Maximum distance in blocks that another entity will be considered in the 'outside' range | Blaze: `3`, Drowned: `5` | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:target_nearby_sensor": {
  "inside_range": 2,
  "outside_range": 3,
  "must_see": true,
  "on_inside_range": {
    "event": "switch_to_melee",
    "target": "self"
  },
  "on_outside_range": {
    "event": "switch_to_ranged",
    "target": "self"
  }
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:target_nearby_sensor": {
  "inside_range": 3,
  "outside_range": 5,
  "on_inside_range": {
    "event": "minecraft:switch_to_melee",
    "target": "self"
  },
  "on_outside_range": {
    "event": "minecraft:switch_to_ranged",
    "target": "self"
  }
}
```
