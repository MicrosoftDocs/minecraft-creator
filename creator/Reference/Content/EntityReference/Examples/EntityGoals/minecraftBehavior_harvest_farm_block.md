---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:behavior.harvest_farm_block
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.harvest_farm_block

`minecraft:behavior.harvest_farm_block` allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires `minecraft:inventory` and `minecraft:navigation` to execute. This goal will not execute if the entity does not have an item in its inventory.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| goal_radius| 1.50| Decimal| Distance in blocks within the entity considers it has reached it's target position.  |
| max_seconds_before_search| 1.0| Decimal| The maximum amount of time in seconds that the goal can take before searching for the first harvest block. The time is chosen between 0 and this number. |
| search_cooldown_max_seconds| 8.0| Decimal| The maximum amount of time in seconds that the goal can take before searching again, after failing to find a a harvest block already. The time is chosen between 0 and this number. |
| search_count| 0| Integer| The number of randomly selected blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |
| search_height| 1| Integer| The Height in blocks the entity will search within to find a valid target position. |
| search_range| 16| Integer| The distance in blocks the entity will search within to find a valid target position. |
| seconds_until_new_task| 0.5| Decimal| The amount of time in seconds that the goal will cooldown after a successful reap/sow, before it can start again. |
| speed_multiplier| 0.50| Decimal| Movement speed multiplier of the entity when using this Goal. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.harvest_farm_block": {
    "goal_radius": 8,
    "max_seconds_before_search": 1.0,
    "search_cooldown_max_seconds": 8.0,
    "search_count": 0,
    "search_height": 1,
    "search_range": 16,
    "seconds_until_new_task": 0.5,
    "speed_multiplier": 0.5
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:behavior.harvest_farm_block": {
    "priority": 8,
    "max_seconds_before_search": 1.0,
    "search_cooldown_max_seconds": 8.0,
    "seconds_until_new_task": 0.5,
    "speed_multiplier": 0.5
}
```

## Vanilla entities using `harvest_farm_block`

- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
