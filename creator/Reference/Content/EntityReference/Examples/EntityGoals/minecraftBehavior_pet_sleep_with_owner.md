---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.pet_sleep_with_owner
ms.prod: gaming
---

# minecraft:behavior.pet_sleep_with_owner

`minecraft:behavior.pet_sleep_with_owner` allows an entity to sleep on a bed shared with its owner.

> [!NOTE]
> `minecraft:behavior.pet_sleep_with_owner` requires a `player` to be tagged as the entity's owner, via taming or console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|goal_radius| 0.5| Decimal| Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot |
|search_height| 1| Integer| Height in blocks from the owner the pet can be to sleep with owner. |
|search_range| 0| Integer| The range that the mob will search for a treasure chest within a ruin or shipwreck to move towards. |
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cat.json" range="183-189":::

## Vanilla entities using `minecraft:behavior.pet_sleep_with_owner`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
