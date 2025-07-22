---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_look_around"
description: "Describes the minecraft:behavior.random_look_around ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_look_around

Allows the mob to randomly look around.


## Random Look Around Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| look_distance | *not set* | Decimal number |  | Witch: `8` | 
| look_time | *not set* | Range of integers | The range of time in seconds the mob will stay looking in a random direction before looking elsewhere |  | 
| max_angle_of_view_horizontal | 30 | Integer number | The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. |  | 
| min_angle_of_view_horizontal | -30 | Integer number | The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `8`, Blaze: `5`, Cave Spider: `7` | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 8
}
```

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 5
}
```

#### [Cave Spider](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cave_spider.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 7
}
```

#### [Copper Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/copper_golem.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 6
}
```

#### [Cow](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cow.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 9
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 15
}
```

#### [Goat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/goat.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 11
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 12
}
```

#### [Pillager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pillager.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 10
}
```

#### [Snow Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snow_golem.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 4
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:behavior.random_look_around": {
  "priority": 5,
  "look_distance": 8
}
```
