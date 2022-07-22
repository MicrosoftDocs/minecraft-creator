---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.pet_sleep_with_owner
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.pet_sleep_with_owner

`minecraft:behavior.pet_sleep_with_owner` allows an entity to sleep on a bed shared with its sleeping owner.

> [!NOTE]
> `minecraft:behavior.pet_sleep_with_owner` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|search_height| 1| Integer| Height in blocks from the owner the pet can be to sleep with owner. |
|search_radius| 10| Integer| The radius that the mob will search for an owner to curl up with. |
|search_range| 10| Integer| The range that the mob will search for an owner to curl up with. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |

## Example

```json
"minecraft:behavior.pet_sleep_with_owner":{
    "priority": 2,
    "search_range": 8,
    "cooldown_time":10,
    "speed_multiplier":3,
}
```

## Vanilla entities examples

### cat

```json
"minecraft:behavior.pet_sleep_with_owner": {
          "priority": 2,
          "speed_multiplier": 1.2,
          "search_radius": 10,
          "search_height": 10,
          "goal_radius": 1.0
        },

```

## Vanilla entities using `minecraft:behavior.pet_sleep_with_owner`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
