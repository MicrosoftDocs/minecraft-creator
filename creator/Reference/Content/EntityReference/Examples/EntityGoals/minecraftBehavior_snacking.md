---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.snacking
description: "A reference document detailing the 'behavior.snacking' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.snacking

`minecraft:behavior.snacking` compels an entity to stop and interact with select food items that are nearby.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|items|*not set* | List| Items that we are interested in snacking on. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|snacking_cooldown| 7.5| Decimal| The cooldown time in seconds before the mob is able to snack again. |
|snacking_cooldown_min| 0.5| Decimal| The minimum time in seconds before the mob is able to snack again. |
|snacking_stop_chance| 0.0017| Decimal| This is the chance that the mob will stop snacking, from 0 to 1. |

## Example

```json
"minecraft:behavior.snacking":{
    "priority": 5,
    "snacking_cooldown": 25.0,
    "snacking_cooldown_min": 15.0,
    "snacking_stop_chance": 0.001,
    "items":["cake"]
}
```

## Vanilla entities examples

### panda

```json
"minecraft:behavior.snacking": {
    "priority": 3,
    "snacking_cooldown": 17.5,
    "snacking_cooldown_min": 10,
    "snacking_stop_chance": 0.0011,
    "items": [
        "bamboo",
        "cake"
        ]
}
```

## Vanilla entities using `minecraft:behavior.snacking`

- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
