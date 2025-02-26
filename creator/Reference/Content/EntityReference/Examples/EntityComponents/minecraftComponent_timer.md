---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:timer"
description: "Describes the minecraft:timer entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:timer

Adds a timer after which an event will fire.


## Timer Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| looping | true | Boolean true/false | If true, the timer will restart every time after it fires. | Armadillo: `true` | 
| random_time_choices | [ ] | Array of strings | This is a list of objects, representing one value in seconds that can be picked before firing the event and an optional weight. Incompatible with time. | Wandering Trader: `[{"weight":50,"value":2400},{"weight":50,"value":3600}]` | 
| randomInterval | true | Boolean true/false | If true, the amount of time on the timer will be random between the min and max values specified in time. | Bee: `true` | 
| time | *not set* | Range of integers | Amount of time in seconds for the timer. Can be specified as a number or a pair of numbers (min and max). Incompatible with random_time_choices. | Allay: `3`, Armadillo: `4`, Bee: `[20,50]`, `[10,60]`, `5`, `180`, `[5,20]` | 
| time_down_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event to fire when the time on the timer runs out. | Allay: `{"event":"pickup_item_delay_complete"}`, Armadillo: `{"event":"minecraft:unroll"}`, Bee: `{"event":"stop_panicking_after_fire","target":"self"}`, `{"event":"perish_event","target":"self"}`, `{"event":"calmed_down","target":"self"}`, `{"event":"find_flower_timeout"}`, `{"event":"find_hive_timeout","target":"self"}`, `{"event":"find_hive_event","target":"self"}` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:timer": {
  "looping": false,
  "time": 3,
  "time_down_event": {
    "event": "pickup_item_delay_complete"
  }
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:timer": {
  "looping": true,
  "time": 4,
  "randomInterval": false,
  "time_down_event": {
    "event": "minecraft:unroll"
  }
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)

At /minecraft:entity/component_groups/escape_fire/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": false,
  "time": [
    20,
    50
  ],
  "randomInterval": true,
  "time_down_event": {
    "event": "stop_panicking_after_fire",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/countdown_to_perish/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": false,
  "time": [
    10,
    60
  ],
  "randomInterval": true,
  "time_down_event": {
    "event": "perish_event",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/take_nearest_target/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": true,
  "time": 5,
  "time_down_event": {
    "event": "calmed_down",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/look_for_food/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": true,
  "time": 180,
  "time_down_event": {
    "event": "find_flower_timeout"
  }
}
```

At /minecraft:entity/component_groups/find_hive/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": false,
  "time": 180,
  "time_down_event": {
    "event": "find_hive_timeout",
    "target": "self"
  }
}
```

At /minecraft:entity/component_groups/hive_full/minecraft:timer/: 

```json
"minecraft:timer": {
  "looping": false,
  "time": [
    5,
    20
  ],
  "randomInterval": true,
  "time_down_event": {
    "event": "find_hive_event",
    "target": "self"
  }
}
```

#### [Boat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/boat.json)


```json
"minecraft:timer": {
  "looping": false,
  "time": 3,
  "time_down_event": {
    "event": "minecraft:sink",
    "target": "self"
  }
}
```

#### [Guardian](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/guardian.json)


```json
"minecraft:timer": {
  "time": [
    1,
    3
  ],
  "looping": false,
  "time_down_event": {
    "event": "minecraft:target_far_enough",
    "target": "self"
  }
}
```

#### [Hoglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/hoglin.json)


```json
"minecraft:timer": {
  "looping": false,
  "time": 15,
  "time_down_event": {
    "event": "become_zombie_event"
  }
}
```

#### [Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/husk.json)


```json
"minecraft:timer": {
  "looping": false,
  "time": 30,
  "time_down_event": {
    "event": "minecraft:convert_to_zombie"
  }
}
```
