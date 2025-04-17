---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_flower"
description: "Describes the minecraft:behavior.take_flower ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_flower

Allows the mob to accept flowers from another mob with the minecraft:offer_flower behavior.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Take Flower Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Villager V2: `{"all_of":[{"test":"is_daytime","value":true}]}` | 
| max_head_rotation_y | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 
| max_rotation_x | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| max_wait_time | 20 | Decimal number | The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower. |  | 
| min_distance_to_target | 2 | Decimal number | Minimum distance (in blocks) for the entity to be considered having reached its target. |  | 
| min_wait_time | 4 | Decimal number | The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Villager V2: `9`, Villager: `7` | 
| search_area | [6, 2, 6] | x, y, z coordinate array | The dimensions of the AABB used to search for a potential mob to take a flower from. |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. |  | 

## Samples

#### [Villager V2](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager_v2.json)


```json
"minecraft:behavior.take_flower": {
  "priority": 9,
  "filters": {
    "all_of": [
      {
        "test": "is_daytime",
        "value": true
      }
    ]
  }
}
```

#### [Villager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/villager.json)


```json
"minecraft:behavior.take_flower": {
  "priority": 7,
  "filters": {
    "all_of": [
      {
        "test": "is_daytime",
        "value": true
      }
    ]
  }
}
```

#### [Beachager](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/entities/beachager.behavior.json)


```json
"minecraft:behavior.take_flower": {
  "priority": 9
}
```
