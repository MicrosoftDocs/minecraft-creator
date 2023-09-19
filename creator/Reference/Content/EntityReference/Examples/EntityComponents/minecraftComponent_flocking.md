---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:flocking
description: "A reference document detailing the 'flocking' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:flocking

`minecraft:flocking` compels entities to flock in groups towards or away from the water.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| block_distance| 0| Decimal| The distance in blocks that the entity will look at and move from. |
| block_weight| 0| Decimal| The weight of the push back away from blocks. |
| breach_influence| 0| Decimal| The amount of push back given to a flocking entity that breaches out of the water. |
| cohesion_threshold| 1| Decimal| The threshold in which to start applying cohesion. |
| cohesion_weight| 1| Decimal| The weight applied for the cohesion steering of the flock. |
| goal_weight| 0| Decimal| The weight on which to apply on the goal output. |
| high_flock_limit| 0| Integer| Determines the maximum amount of entities that can be allowed in the flock. |
| in_water| False| Boolean| Tells the Flocking Component if the entity exists in water. |
| influence_radius| 0| Decimal| The area around the entity that allows others to be added to the flock. |
| inner_cohesion_threshold| 0| Decimal| The distance in which the flocking entity will stop applying cohesion. |
| loner_chance| 0| Decimal| The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points. |
| low_flock_limit| 0| Integer| Determines the low bound amount of entities that can be allowed in the flock. |
| match_variants| False| Boolean| Tells the flocking entities that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flocking entities. |
| max_height| 0| Decimal| The max height allowable in the air or water. |
| min_height| 0| Decimal| The min height allowable in the air or water. |
| separation_threshold| 2| Decimal| The distance that is determined to be too close to another flock and to start applying separation. |
| separation_weight| 1| Decimal| The weight applied to the separation of the flock. |
| use_center_of_mass| False| Boolean| Tells the flocking entities that they will follow flocks based on the center of mass. |

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
    "inner_cohesion_threshold": 0,
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

```json
"minecraft:flocking": {
        "in_water": true,
        "match_variants": false,
        "use_center_of_mass": true,
        "low_flock_limit": 4,
        "high_flock_limit": 8,
        "goal_weight": 2.0,
        "loner_chance": 0.1,
        "influence_radius": 3.0,
        "breach_influence": 7.0,
        "separation_weight": 1.75,
        "separation_threshold": 0.95,
        "cohesion_weight": 2.0,
        "cohesion_threshold": 1.95,
        "inner_cohesion_threshold": 1.25,
        "min_height": 1.5,
        "max_height": 6.0,
        "block_distance": 2.0,
        "block_weight": 0.85
      }
```

## Vanilla entities using `minecraft:flocking`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)