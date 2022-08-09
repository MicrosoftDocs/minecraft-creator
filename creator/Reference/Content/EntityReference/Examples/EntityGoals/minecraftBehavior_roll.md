---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.roll
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.roll

`minecraft:behavior.roll` allows an entity roll forward.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|probability| 1.0| Decimal| The probability that the mob will use the goal. |

## Example

```json
"minecraft:behavior.roll":{
    "priority": 7,
    "probability": 0.6
}
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.roll": {
  "priority": 12,
  "probability": 0.0016
}

```

## Vanilla entities using `minecraft:behavior.roll`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
