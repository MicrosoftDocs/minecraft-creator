---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.charge_held_item"
description: "Describes the minecraft:behavior.charge_held_item ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.charge_held_item

Allows an entity to charge and use their held item.


## Charge Held Item Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| items | NA | Array of strings | The list of items that can be used to charge the held item. This list is required and must have at least one item in it. | Piglin: `["minecraft:arrow"]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Piglin: `3` | 

## Samples

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:behavior.charge_held_item": {
  "priority": 3,
  "items": [
    "minecraft:arrow"
  ]
}
```
