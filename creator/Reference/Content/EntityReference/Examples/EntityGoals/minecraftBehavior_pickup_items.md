---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.pickup_items
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.pickup_items

`minecraft:behavior.pickup_items` allows an entity to pick up selected items off the ground.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|can_pickup_any_item| false| Boolean| If true, the mob can pickup any item. |
|can_pickup_to_hand_or_equipment| true| Boolean| If true, the mob can pickup items to its hand or armor slots. |
|cooldown_after_being_attacked | 20.0 | Decimal | Amount of time an offended entity needs before being willing to pick up items. |
|excluded_items|*not set* | List| List of items this mob will not pick up. |
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|max_dist| 0.0| Decimal|  Maximum distance this mob will look for items to pick up. |
|pickup_based_on_chance| false|Boolean|  If true, depending on the difficulty, there is a random chance that the mob may not be able to pickup items. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|speed_multiplier| 1.0| Decimal|  Movement speed multiplier of the mob when using this AI Goal. |
|track_target| false| Boolean|  If true, this mob will chase after the target as long as it's a valid target. |

## Example

```json
"minecraft:behavior.pickup_items":{
    "priority": 2,
    "can_pickup_any_item":true,
    "can_pickup_to_hand_or_equipment": true,
    "excluded_items":["iron_sword"],
    "goal_radius": 0.5,
    "max_dist": 0.0,
    "speed_multiplayer": 1.0,
    "track_target": true
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:behavior.pickup_items": {
        "priority": 6,
        "max_dist": 10,
        "goal_radius": 2,
        "speed_multiplier": 0.8,
        "pickup_based_on_chance": false,
        "can_pickup_any_item": false,
        "cooldown_after_being_attacked": 20.0
      },

```

## Vanilla entities using `minecraft:behavior.pickup_items`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wither skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [zombie pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
