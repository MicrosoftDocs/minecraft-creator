---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.beg
description: "A reference document detailing the 'behavior.beg' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.beg

`minecraft:behavior.beg` compels an entity to react by tilting its head when a player is holding select items nearby.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|items|*not set* |List |List of items that this mob likes |
|look_distance|8.0 |Decimal |Distance in blocks the mob will beg from. |
|look_time |[2, 4]|Range ["range_min", "range_max"] |The range of time in seconds this mob will stare at the player holding a food they like, begging for it. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.beg":{
    "priority": 1,
    "items": ["bone","egg"],
    "look_distance": 4,
    "look_time": {
        "range_min":0,
        "range_max":4
    }
}
```

## Vanilla entities examples

### wolf

```json
"minecraft:behavior.beg": {
        "priority": 9,
        "look_distance": 8,
        "look_time": [ 2, 4 ],
        "items": [ "bone", "porkchop", "cooked_porkchop", "chicken", "cooked_chicken", 
                   "beef", "cooked_beef", "rotten_flesh", "muttonraw", "muttoncooked", "rabbit", "cooked_rabbit" ]
      }
```

## Vanilla entities using `minecraft:behavior.beg`

- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
