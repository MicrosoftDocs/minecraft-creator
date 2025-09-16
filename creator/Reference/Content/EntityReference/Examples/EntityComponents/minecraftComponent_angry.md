---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:angry"
description: "Describes the minecraft:angry entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:angry

Defines an entity's 'angry' state using a timer.


## Angry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angry_sound | *not set* | String | The sound event to play when the mob is angry |  | 
| broadcast_anger | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry | Biceson: `true` | 
| broadcast_anger_on_attack | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |  | 
| broadcast_anger_on_being_attacked | false | Boolean true/false | If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked |  | 
| broadcast_anger_when_dying | true | Boolean true/false | If false, when this mob is killed it does not spread its anger to other entities of the same entity definition within the broadcastRange |  | 
| broadcast_filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid |  | 
| broadcast_range | 20 | Integer number | Distance in blocks within which other entities of the same entity type will become angry | Biceson: `41`, `20` | 
| broadcast_targets | *not set* | Array of strings | A list of entity families to broadcast anger to |  | 
| calm_event | *not set* | Minecraft Event Reference | Event to fire when this entity is calmed down | Biceson: `{"event":"minecraft:baby_on_calm","target":"self"}`, `{"event":"minecraft:on_calm","target":"self"}` | 
| duration | 25 | Integer number | The amount of time in seconds that the entity will be angry. | Biceson: `1`, `500`, Frost Moose: `4`, `-1`, `10` | 
| duration_delta | 0 | Integer number | Variance in seconds added to the duration [-delta, delta]. |  | 
| filters | *not set* | Minecraft filter | Filter out mob types that it should not attack while angry (other Piglins) |  | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again. |  | 

## Samples

#### [Biceson](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/biceson.behavior.json)

At /minecraft:entity/component_groups/minecraft:baby_scared/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 1,
  "broadcast_anger": true,
  "broadcast_range": 41,
  "calm_event": {
    "event": "minecraft:baby_on_calm",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/minecraft:adult_hostile/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 500,
  "broadcast_anger": false,
  "broadcast_range": 20,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

#### [Frost Moose](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/frost_moose.behavior.json)

At /minecraft:entity/component_groups/minecraft:llama_angry/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 4,
  "broadcast_anger": false,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/minecraft:llama_angry_wolf/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": -1,
  "broadcast_anger": false,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/minecraft:llama_defend_trader/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 10,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```
