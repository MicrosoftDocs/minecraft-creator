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
| angry_sound | *not set* | String | The sound event to play when the mob is angry | Hoglin: `"angry"` | 
| broadcast_anger | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry | Dolphin: `true` | 
| broadcast_anger_on_attack | false | Boolean true/false | If set, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |  | 
| broadcast_anger_on_being_attacked | false | Boolean true/false | If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked |  | 
| broadcast_anger_when_dying | true | Boolean true/false | If false, when this mob is killed it does not spread its anger to other entities of the same entity definition within the broadcastRange |  | 
| broadcast_filters | *not set* | Minecraft filter | Conditions that make this entry in the list valid | Bee: `{"test":"is_family","operator":"!=","value":"pacified"}`, Panda: `{"test":"is_family","operator":"==","value":"panda_aggressive"}`, Wandering Trader: `{"test":"is_leashed_to","subject":"other","value":true}` | 
| broadcast_range | 20 | Integer number | Distance in blocks within which other entities of the same entity type will become angry | Dolphin: `16`, Panda: `41`, Polar Bear: `20` | 
| broadcast_targets | *not set* | Array of strings | A list of entity families to broadcast anger to | Wandering Trader: `["llama","trader_llama"]` | 
| broadcastAnger | *not set* | String |  | Bee: `true` | 
| broadcastRange | *not set* | Decimal number |  | Bee: `20`, Wandering Trader: `10` | 
| calm_event | *not set* | String from a list of choices | Event to fire when this entity is calmed down | Bee: `{"event":"calmed_down","target":"self"}`, Cave Spider: `{"event":"minecraft:on_calm","target":"self"}`, Dolphin: `{"event":"on_calm","target":"self"}` | 
| duration | 25 | Integer number | The amount of time in seconds that the entity will be angry. | Bee: `25`, Cave Spider: `10`, Llama: `4`, `-1` | 
| duration_delta | 0 | Integer number | Variance in seconds added to the duration [-delta, delta]. | Cave Spider: `3` | 
| filters | *not set* | Minecraft filter | Filter out mob types that it should not attack while angry (other Piglins) |  | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again. | Hoglin: `{"range_min":2,"range_max":5}` | 

## Samples

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:angry": {
  "duration": 25,
  "broadcastAnger": true,
  "broadcastRange": 20,
  "broadcast_anger_when_dying": false,
  "broadcast_filters": {
    "test": "is_family",
    "operator": "!=",
    "value": "pacified"
  },
  "calm_event": {
    "event": "calmed_down",
    "target": "self"
  }
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:angry": {
  "duration": 10,
  "duration_delta": 3,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:angry": {
  "duration": 25,
  "broadcast_anger": true,
  "broadcast_range": 16,
  "calm_event": {
    "event": "on_calm",
    "target": "self"
  }
}
```

#### [Enderman](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/enderman.json)


```json
"minecraft:angry": {
  "duration": 25,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:angry": {
  "duration": 10,
  "broadcast_anger": true,
  "broadcast_range": 16,
  "calm_event": {
    "event": "become_calm_event",
    "target": "self"
  },
  "angry_sound": "angry",
  "sound_interval": {
    "range_min": 2,
    "range_max": 5
  }
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)

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

#### [Panda](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/panda.json)

At /minecraft:entity/component_groups/minecraft:panda_angry/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 500,
  "broadcast_anger": true,
  "broadcast_range": 41,
  "broadcast_filters": {
    "test": "is_family",
    "operator": "==",
    "value": "panda_aggressive"
  },
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/minecraft:baby_scared/minecraft:angry/: 

```json
"minecraft:angry": {
  "duration": 1,
  "broadcast_anger": true,
  "broadcast_range": 41,
  "broadcast_filters": {
    "test": "is_family",
    "operator": "==",
    "value": "panda_aggressive"
  },
  "calm_event": {
    "event": "minecraft:baby_on_calm",
    "target": "self"
  }
}
```

#### [Polar Bear](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/polar_bear.json)

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

#### [Silverfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/silverfish.json)


```json
"minecraft:angry": {
  "duration": -1,
  "broadcast_anger": true,
  "broadcast_range": 20,
  "broadcast_anger_when_dying": false,
  "calm_event": {
    "event": "minecraft:on_calm",
    "target": "self"
  }
}
```
