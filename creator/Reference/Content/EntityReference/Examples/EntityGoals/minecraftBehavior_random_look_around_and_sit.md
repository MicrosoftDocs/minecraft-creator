---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.random_look_around_and_sit"
description: "Describes the minecraft:behavior.random_look_around_and_sit ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.random_look_around_and_sit

Allows the mob to randomly sit and look around for a duration. Note: Must have a sitting animation set up to use this.


## Random Look Around And Sit Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| continue_if_leashed | false | Boolean true/false | If the goal should continue to be used as long as the mob is leashed. | Camel: `true` | 
| continue_sitting_on_reload | false | Boolean true/false | The mob will stay sitting on reload. | Camel: `true` | 
| max_angle_of_view_horizontal | 30 | Decimal number | The rightmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. | Camel: `30` | 
| max_look_count | 2 | Integer number | The max amount of unique looks a mob will have while looking around. | Camel: `5` | 
| max_look_time | 40 | Integer number | The max amount of time (in ticks) a mob will stay looking at a direction while looking around. | Camel: `100` | 
| min_angle_of_view_horizontal | -30 | Decimal number | The leftmost angle a mob can look at on the horizontal plane with respect to its initial facing direction. | Camel: `-30` | 
| min_look_count | 1 | Integer number | The min amount of unique looks a mob will have while looking around. | Camel: `2` | 
| min_look_time | 20 | Integer number | The min amount of time (in ticks) a mob will stay looking at a direction while looking around. | Camel: `80` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Camel: `4`, Camel Husk: `5`, Fox: `12` | 
| probability | 0.02 | Decimal number | The probability of randomly looking around/sitting. | Camel: `0.001` | 
| random_look_around_cooldown | 0 | Integer number | The cooldown in seconds before the goal can be used again. | Camel: `5` | 

## Samples

#### [Camel](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel.json)


```json
"minecraft:behavior.random_look_around_and_sit": {
  "priority": 4,
  "continue_if_leashed": true,
  "continue_sitting_on_reload": true,
  "min_look_count": 2,
  "max_look_count": 5,
  "min_look_time": 80,
  "max_look_time": 100,
  "min_angle_of_view_horizontal": -30,
  "max_angle_of_view_horizontal": 30,
  "random_look_around_cooldown": 5,
  "probability": 0.001
}
```

#### [Camel Husk](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/camel_husk.json)


```json
"minecraft:behavior.random_look_around_and_sit": {
  "priority": 5,
  "continue_if_leashed": true,
  "continue_sitting_on_reload": true,
  "min_look_count": 2,
  "max_look_count": 5,
  "min_look_time": 80,
  "max_look_time": 100,
  "min_angle_of_view_horizontal": -30,
  "max_angle_of_view_horizontal": 30,
  "random_look_around_cooldown": 5,
  "probability": 0.001
}
```

#### [Fox](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fox.json)


```json
"minecraft:behavior.random_look_around_and_sit": {
  "priority": 12,
  "min_look_count": 2,
  "max_look_count": 5,
  "min_look_time": 80,
  "max_look_time": 100,
  "probability": 0.001
}
```
