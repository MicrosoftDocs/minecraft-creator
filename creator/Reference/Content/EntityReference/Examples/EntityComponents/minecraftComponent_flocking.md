---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:flocking"
description: "Describes the minecraft:flocking entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:flocking

Allows entities to flock in groups in water or not.


## Flocking Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_distance | 0 | Decimal number | The amount of blocks away the entity will look at to push away from. | Dolphin: `1`, Fish: `2` | 
| block_weight | 0 | Decimal number | The weight of the push back away from blocks. | Fish: `0.85`, Salmon: `0.75` | 
| breach_influence | 0 | Decimal number | The amount of push back given to a flocker that breaches out of the water. | Fish: `7` | 
| cohesion_threshold | 1 | Decimal number | The threshold in which to start applying cohesion. | Dolphin: `6.5`, Fish: `1.95`, Salmon: `1.5` | 
| cohesion_weight | 1 | Decimal number | The weight applied for the cohesion steering of the flock. | Dolphin: `1.85`, Fish: `2`, Salmon: `2.25` | 
| goal_weight | 0 | Decimal number | The weight on which to apply on the goal output. | Dolphin: `2` | 
| high_flock_limit | 0 | Integer number | Determines the high bound amount of entities that can be allowed in the flock. | Dolphin: `8` | 
| in_water | false | Boolean true/false | Tells the Flocking Component if the entity exists in water. | Fish: `true` | 
| influence_radius | 0 | Decimal number | The area around the entity that allows others to be added to the flock. | Dolphin: `6`, Fish: `3` | 
| innner_cohesion_threshold | 0 | Decimal number | The distance in which the flocker will stop applying cohesion. | Dolphin: `3.5`, Fish: `1.25`, Salmon: `1.5` | 
| loner_chance | 0 | Decimal number | The percentage chance between 0-1 that a fish will spawn and not want to join flocks. Invalid values will be capped at the end points. | Dolphin: `0.1` | 
| low_flock_limit | 0 | Integer number | Determines the low bound amount of entities that can be allowed in the flock. | Dolphin: `4` | 
| match_variants | false | Boolean true/false | Tells the flockers that they can only match similar entities that also match the variant, mark variants, and color data of the other potential flockers. | Tropicalfish: `true` | 
| max_height | 0 | Decimal number | The max height allowable in the air or water. | Dolphin: `4`, Fish: `6` | 
| min_height | 0 | Decimal number | The min height allowable in the air or water. | Dolphin: `4`, Fish: `1.5` | 
| separation_threshold | 2 | Decimal number | The distance that is determined to be to close to another flocking and to start applying separation. | Dolphin: `3`, Fish: `0.95`, Salmon: `0.15` | 
| separation_weight | 1 | Decimal number | The weight applied to the separation of the flock. | Dolphin: `1.75`, Salmon: `0.65` | 
| use_center_of_mass | false | Boolean true/false | Tells the flockers that they will follow flocks based on the center of mass. | Fish: `true` | 

## Samples

#### [Dolphin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dolphin.json)


```json
"minecraft:flocking": {
  "in_water": false,
  "match_variants": false,
  "use_center_of_mass": false,
  "low_flock_limit": 4,
  "high_flock_limit": 8,
  "goal_weight": 2,
  "loner_chance": 0.1,
  "influence_radius": 6,
  "breach_influence": 0,
  "separation_weight": 1.75,
  "separation_threshold": 3,
  "cohesion_weight": 1.85,
  "cohesion_threshold": 6.5,
  "innner_cohesion_threshold": 3.5,
  "min_height": 4,
  "max_height": 4,
  "block_distance": 1,
  "block_weight": 0
}
```

#### [Fish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fish.json)


```json
"minecraft:flocking": {
  "in_water": true,
  "match_variants": false,
  "use_center_of_mass": true,
  "low_flock_limit": 4,
  "high_flock_limit": 8,
  "goal_weight": 2,
  "loner_chance": 0.1,
  "influence_radius": 3,
  "breach_influence": 7,
  "separation_weight": 1.75,
  "separation_threshold": 0.95,
  "cohesion_weight": 2,
  "cohesion_threshold": 1.95,
  "innner_cohesion_threshold": 1.25,
  "min_height": 1.5,
  "max_height": 6,
  "block_distance": 2,
  "block_weight": 0.85
}
```

#### [Salmon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/salmon.json)


```json
"minecraft:flocking": {
  "in_water": true,
  "match_variants": false,
  "use_center_of_mass": false,
  "low_flock_limit": 4,
  "high_flock_limit": 8,
  "goal_weight": 2,
  "loner_chance": 0.1,
  "influence_radius": 3,
  "breach_influence": 7,
  "separation_weight": 0.65,
  "separation_threshold": 0.15,
  "cohesion_weight": 2.25,
  "cohesion_threshold": 1.5,
  "innner_cohesion_threshold": 1.5,
  "min_height": 4,
  "max_height": 4,
  "block_distance": 1,
  "block_weight": 0.75
}
```

#### [Tropicalfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tropicalfish.json)


```json
"minecraft:flocking": {
  "in_water": true,
  "match_variants": true,
  "use_center_of_mass": false,
  "low_flock_limit": 4,
  "high_flock_limit": 8,
  "goal_weight": 2,
  "loner_chance": 0.1,
  "influence_radius": 3,
  "breach_influence": 7,
  "separation_weight": 0.65,
  "separation_threshold": 0.15,
  "cohesion_weight": 2.75,
  "cohesion_threshold": 1.5,
  "innner_cohesion_threshold": 1.5,
  "min_height": 1.5,
  "max_height": 6,
  "block_distance": 2,
  "block_weight": 0.85
}
```
