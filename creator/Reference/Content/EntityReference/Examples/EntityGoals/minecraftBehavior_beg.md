---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.beg
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.beg

`minecraft:behavior.beg` allows an entity to react by tilting its head when a player is holding select items nearby.

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|items|*not set* |List |List of items that this mob likes |
|look_distance|8.0 |Decimal |Distance in blocks the mob will beg from. |
|look_time |[2, 4]|Range ["range_min", "range_max"] |The range of time in seconds this mob will stare at the player holding a food they like, begging for it. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wolf.json" range="406-412":::

## Vanilla entities using `minecraft:behavior.beg`

- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
