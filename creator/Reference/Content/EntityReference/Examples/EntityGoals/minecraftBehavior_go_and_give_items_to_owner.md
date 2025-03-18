---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.go_and_give_items_to_owner"
description: "Describes the minecraft:behavior.go_and_give_items_to_owner ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.go_and_give_items_to_owner

The entity will attempt to toss the items from its inventory to its owner.


## Go And Give Items To Owner Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_item_throw | *not set* | Array of strings | Event(s) to run when this mob throws items. | Allay: `[{"event":"pickup_item_delay","target":"self"}]` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Allay: `4` | 
| reach_mob_distance | 3 | Decimal number | Sets the desired distance to be reached before giving items to owner. |  | 
| run_speed | 1 | Decimal number | Sets the entity's speed when running toward the owner. | Allay: `8` | 
| throw_force | 0.2 | Decimal number | Sets the throw force. |  | 
| throw_sound | item_thrown | String | Sound to play when this mob throws an item. | Allay: `"item_thrown"` | 
| vertical_throw_mul | 1.5 | Decimal number | Sets the vertical throw multiplier that is applied on top of the throw force in the vertical direction. |  | 

## Samples

#### [Allay](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/allay.json)


```json
"minecraft:behavior.go_and_give_items_to_owner": {
  "priority": 4,
  "run_speed": 8,
  "throw_sound": "item_thrown",
  "on_item_throw": [
    {
      "event": "pickup_item_delay",
      "target": "self"
    }
  ]
}
```
