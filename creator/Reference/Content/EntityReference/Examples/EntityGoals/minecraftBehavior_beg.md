---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.beg"
description: "Describes the minecraft:behavior.beg ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.beg

Allows this mob to look at and follow the player that holds food they like.


## Beg Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| items | *not set* | Array of strings | List of items that this mob likes | Wolf: `["bone","porkchop","cooked_porkchop","chicken","cooked_chicken","beef","cooked_beef","rotten_flesh","muttonraw","muttoncooked","rabbit","cooked_rabbit"]` | 
| look_distance | 8 | Decimal number | Distance in blocks the mob will beg from | Wolf: `8` | 
| look_time | *not set* | Range of integers | The range of time in seconds this mob will stare at the player holding a food they like, begging for it | Wolf: `[2,4]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Wolf: `9` | 

## Samples

#### [Wolf](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wolf.json)


```json
"minecraft:behavior.beg": {
  "priority": 9,
  "look_distance": 8,
  "look_time": [
    2,
    4
  ],
  "items": [
    "bone",
    "porkchop",
    "cooked_porkchop",
    "chicken",
    "cooked_chicken",
    "beef",
    "cooked_beef",
    "rotten_flesh",
    "muttonraw",
    "muttoncooked",
    "rabbit",
    "cooked_rabbit"
  ]
}
```
