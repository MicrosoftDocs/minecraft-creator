---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.offer_flower"
description: "Describes the minecraft:behavior.offer_flower ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.offer_flower

Allows the mob to offer a flower to another mob with the minecraft:take_flower behavior.

> [!Note]
> Requires a flower item to be held by the entity.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Offer Flower Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| chance_to_start | 0 | Decimal number | Percent chance that the mob will start this goal from 0.0 to 1.0 (where 1.0 = 100%). |  | 
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. | Iron Golem: `{"test":"is_daytime"}` | 
| max_head_rotation_y | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 
| max_offer_flower_duration | 20 | Decimal number | The max amount of time (in seconds) that the mob will offer the flower for before exiting the Goal. |  | 
| max_rotation_x | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Iron Golem: `5` | 
| search_area | [6, 2, 6] | x, y, z coordinate array | The dimensions of the AABB used to search for a potential mob to offer flower to. |  | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


```json
"minecraft:behavior.offer_flower": {
  "priority": 5,
  "filters": {
    "test": "is_daytime"
  }
}
```
