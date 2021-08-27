---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:flocking
ms.prod: gaming
---

# Entity Documentation - minecraft:flocking

`minecraft:flocking` allows entities to flock in groups in water or not.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| block_distance| 0| Decimal| The distance in blocks that the entity will look at and move from. |
| block_weight| 0| Decimal| The weight of the push back away from blocks. |
| breach_influence| 0| Decimal| The amount of push back given to a flocker that breaches out of the water. |
| cohesion_threshold| 1| Decimal| The threshold in which to start applying cohesion. |
| cohesion_weight| 1| Decimal| The weight applied for the cohesion steering of the flock. |
| goal_weight| 0| Decimal| The weight on which to apply on the goal output. |
| high_flock_limit| 0| Integer| Determines the high bound amount of entities that can be allowed in the flock. |
| in_water| False| Boolean| Tells the Flocking Component if the entity exists in water. |
| influence_radius| 0| Decimal| The area around the entity that allows others to be added to the flock. |
| innner_cohesion_threshold| 0| Decimal| The distance in which the flocker will stop applying cohesion. |
| loner_chance| 0| Decimal| The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points. |
| low_flock_limit| 0| Integer| Determines the low bound amount of entities that can be allowed in the flock. |
| match_variants| False| Boolean| Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers. |
| max_height| 0| Decimal| The max height allowable in the air or water. |
| min_height| 0| Decimal| The min height allowable in the air or water. |
| separation_threshold| 2| Decimal| The distance that is determined to be to close to another flocking and to start applying separation. |
| separation_weight| 1| Decimal| The weight applied to the separation of the flock. |
| use_center_of_mass| False| Boolean| Tells the flockers that they will follow flocks based on the center of mass. |

## Example

```json
"minecraft:flocking":{
    "block_distance": 0,
    "block_weight": 0,
    "breach_influence": 0,
    "cohesion_threshold": 1,
    "cohesion_weight": 0,
    "goal_weight": 0,
    "high_flock_limit": 0,
    "in_water": false,
    "influence_radius": 0,
    "innner_cohesion_threshold": 0,
    "loner_chance": 0,
    "low_flock_limit": 0,
    "match_variants": false,
    "max_height": 0,
    "min_height": 0,
    "separation_threshold": 2,
    "separation_weight": 2,
    "use_center_of_mass": false
}
```

## Vanilla entities examples

### fish

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/fish.json" range="112-131":::

## Vanilla entities using `minecraft:flocking`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)