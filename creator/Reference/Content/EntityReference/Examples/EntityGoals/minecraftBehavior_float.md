---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.float"
description: "Describes the minecraft:behavior.float ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.float

Allows the mob to stay afloat while swimming. Passengers will be kicked out the moment the mob's head goes underwater, which may not happen for tall mobs.


## Float Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance_per_tick_to_float | 0.8 | Decimal number | The chance per tick to cause an upward impulse. | Camel: `1` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `7`, Bee: `19`, Cave Spider: `1` | 
| sink_with_passengers | false | Boolean true/false | If true, the mob will keep sinking as long as it has passengers. |  | 
| time_under_water_to_dismount_passengers | 0 | Decimal number | Time in seconds that a floating vehicles head can be underwater before it causes its passengers to dismount. | Camel: `2` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.float": {
  "priority": 7
}
```

#### [Armadillo](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/armadillo.json)


```json
"minecraft:behavior.float": {
  "priority": 0
}
```

#### [Bee](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bee.json)


```json
"minecraft:behavior.float": {
  "priority": 19
}
```

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.float": {
  "priority": 0,
  "chance_per_tick_to_float": 1,
  "time_under_water_to_dismount_passengers": 2
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.float": {
  "priority": 1
}
```

#### [Pig](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pig.json)


```json
"minecraft:behavior.float": {
  "priority": 2
}
```
