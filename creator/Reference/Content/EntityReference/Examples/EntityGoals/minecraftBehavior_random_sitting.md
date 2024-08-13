---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.random_sitting
description: "A reference document detailing the 'behavior.random_sitting' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.random_sitting

`minecraft:behavior.random_sitting` compels an entity to stop and sit for a random duration of time.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cooldown_time| 0.0| Decimal| Time in seconds the entity has to wait before using the goal again. |
|min_sit_time| 10| Decimal| The minimum amount of time in seconds before the entity can stand back up. |
|start_chance| 0.1| Decimal| This is the chance that the entity will start this goal, from 0 to 1. |
|stop_chance| 0.3| Decimal|  This is the chance that the entity will stop this goal, from 0 to 1. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.random_sitting":{
    "priority": 5,
    "cooldown_time": 1.5,
    "min_sit_time": 25,
    "start_chance": 0.25,
    "stop_chance": 0.75
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.random_sitting": {
          "priority": 6,
          "start_chance": 0.02,
          "stop_chance": 0.2,
          "cooldown": 25,
          "min_sit_time": 15
        }
```

## Vanilla entities using `minecraft:behavior.random_sitting`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
