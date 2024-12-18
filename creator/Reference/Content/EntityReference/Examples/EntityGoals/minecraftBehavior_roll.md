---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.roll
description: "A reference document detailing the 'behavior.roll' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.roll

`minecraft:behavior.roll` compels an entity to roll forward.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
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
