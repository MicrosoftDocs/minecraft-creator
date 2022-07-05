---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:dweller
ms.prod: gaming
---

# Entity Documentation - minecraft:dweller

`minecraft:dweller` allows a mob to join and migrate between villages and other dwellings.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| dwelling_type| *not_set*| String| The type of dwelling the mob wishes to join. Current Types: village |
|dweller_role|*not set* | String |  The role of which the mob plays in the dwelling. Current Roles: inhabitant, defender, hostile, passive. |
|update_interval_base|*not set* | Decimal| How often the mob checks on their dwelling status in ticks. Positive values only. |
|update_interval_variant|*not set* | Decimal|  The variant value in ticks that will be added to the update_interval_base. |
|can_find_poi| *not set*| Boolean|  Whether or not the mob can find and add POI's to the dwelling. |
|first_founding_reward| *not set*| Integer|  How much reputation should the players be rewarded on first founding? |
|can_migrate| *not set*| Boolean| Can this mob migrate between dwellings? Or does it only have its initial dwelling? |
|dwelling_bounds_tolerance| *not set*| Float | A padding distance for checking if the mob is within the dwelling. |
|preferred_profession| *not set*| String| Allows the user to define a starting profession for this particular Dweller, instead of letting them choose organically. (They still need to gain experience from trading before this takes effect.) |



## Example

```json
"minecraft:dweller": {
    "dwelling_type": "village",
    "dweller_role": "inhabitant",
    "preferred_profession": "toolsmith",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

## Vanilla entities examples

### villager_v2

```json
"minecraft:dweller": {
    "dwelling_type": "  ",
    "dweller_role": "inhabitant",
    "preferred_profession": "farmer",
    "update_interval_base": 60,
    "update_interval_variant": 40,
    "can_find_poi": true,
    "can_migrate": true,
    "first_founding_reward": 5
}
```

## Vanilla entities using `minecraft:dweller`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
