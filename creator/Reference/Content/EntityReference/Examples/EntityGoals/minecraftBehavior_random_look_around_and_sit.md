---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.random_look_around_and_sit
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.random_look_around_and_sit

`minecraft:behavior.random_look_around_and_sit` allows an entity to sit in place and look around in different directions.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|max_look_count| 2| Integer|  The max amount of unique looks a mob will have while looking around. |
|max_look_time| 40| Integer|  The max amount of time (in ticks) a mob will stay looking at a direction while looking around. |
|min_look_count| 1| Integer| The min amount of unique looks a mob will have while looking around. |
|min_look_time| 20| Integer|  The min amount of time (in ticks) a mob will stay looking at a direction while looking around. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| probability| 0.02| Decimal| The probability of randomly looking around/sitting. |

## Example

```json
"minecraft:behavior.random_look_around_and_sit":{
    "priority": 2,
    "max_look_count": 4,
    "min_look_count": 1,
    "max_look_time": 60,
    "min_look_time": 5,
    "probability": 0.35
}
```

## Vanilla entities examples

### fox

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fox.json" range="610-617":::

## Vanilla entities using `minecraft:behavior.random_look_around_and_sit`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
