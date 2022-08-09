---
author: mammerla
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.drop_item_for
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.drop_item_for

`minecraft:behavior.drop_item_for` allows the entity to move toward a target, and drop an item near the target. This goal requires a `minecraft:navigation` to execute.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| cooldown| 0.2| Decimal| Total time that the goal is on cooldown before it can be used again. |
| drop_item_chance| 1.0| Decimal| The percent chance the entity will drop an item when using this goal. |
| entity_types| | Minecraft Filter| The list of conditions another entity must meet to be a valid target to drop an item for. |
| goal_radius| 0.50| Decimal| Distance in blocks within the entity considers it has reached it's target position.  |
| loot_table| | String| The loot table that contains the possible loot the entity can drop with this goal. |
| max_head_look_at_height| 10.0| Decimal| The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target. |
| minimum_teleport_distance| 2.0| Decimal| If the target position is farther away than this distance on any tick, the entity will teleport to the target position. |
| offering_distance| 1.0| Decimal| The preferred distance the entity tries to be from the target it is dropping an item for. |
| on_drop_attempt| | Trigger| The event to trigger when the entity attempts to drop an item. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| search_count| 0| Integer| The number of blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
| search_height| 1| Integer| The Height in blocks the entity will search within to find a valid target position. |
| search_range| 0| Integer| The distance in blocks the entity will search within to find a valid target position. |
| seconds_before_pickup| 0.0| Decimal| The numbers of seconds that will pass before the dropped entity can be picked up from the ground. |
| speed_multiplier| 1.00| Decimal| Movement speed multiplier of the entity when using this Goal. |
| target_range| [1, 1, 1]| Vector [a, b, c]| The range in blocks within which the entity searches to find a target to drop an item for. |
| teleport_offset| [0, 1, 0]| Vector [a, b, c]| When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate. |
| time_of_day_range| [0, 1]| Range [a, b]| The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0. |

## Example

```json
"minecraft:behavior.drop_item_for": {
    "priority": 1,
    "cooldown": 0.2,
    "drop_item_chance": 1.0,
    "offering_distance": 1.0,
    "minimum_teleport_distance": 2.0,
    "max_head_look_at_height": 10.0,
    "target_range": [ 1.0, 1.0, 1.0 ],
    "teleport_offset": [ 0.0, 1.0, 0.0],
    "time_of_day_range": [ 0, 1 ],
    "seconds_before_pickup": 0.0,
    "search_range": 5,
    "search_height": 2,
    "search_count": 0,
    "speed_multiplier": 1.0,
    "goal_radius": 1.0,
    "entity_types": [
        {
            "filters": { "test": "is_family", "subject": "other", "value": "player" },
            "max_dist": 6
        }
    ],
    "loot_table": "loot_tables/entities/cat_gift.json",
    "on_drop_attempt": {
        "event": "minecraft:cat_gifted_owner",
        "target": "self"
    }
}
```

## Vanilla entities examples

### cat

```json
"minecraft:behavior.drop_item_for": {
    "priority": 1,
    "seconds_before_pickup": 0.0,
    "cooldown": 0.25,
    "drop_item_chance": 0.7,
    "offering_distance": 5.0,
    "minimum_teleport_distance": 2.0,
    "max_head_look_at_height": 10.0,
    "target_range": [ 5.0, 5.0, 5.0 ],
    "teleport_offset": [ 0.0, 1.0, 0.0],
    "time_of_day_range": [ 0.74999, 0.80 ],
    "speed_multiplier": 1.0,
    "search_range": 5,
    "search_height": 2,
    "search_count": 0,
    "goal_radius": 1.0,
    "entity_types": [
        {
            "filters": { "test": "is_family", "subject": "other", "value": "player" },
            "max_dist": 6
        }
    ],
    "loot_table": "loot_tables/entities/cat_gift.json",
    "on_drop_attempt": {
    "event": "minecraft:cat_gifted_owner",
    "target": "self"
    }
}
```

## Vanilla entities using `drop_item_for`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
