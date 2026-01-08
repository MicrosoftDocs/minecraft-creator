---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:movement"
description: "Describes the minecraft:movement entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:movement

Defines the base movement speed of an entity. Typical values: creeper (0.2), cow (0.25), zombie baby (0.35).


## Movement Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | Maximum movement speed this entity can have. |  | 
| value | *not set* | Decimal number | The base movement speed value. Higher values result in faster movement. Can be a single number or a range object with range_min and range_max properties. | Robot: `0.25`, Nardolphle: `0.1`, Eliza: `0.3` | 
| value (Alternate 1) | *not set* | [Value](#value) item |  |  | 

## Value

#### Value Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range_max | *not set* | Decimal number | Maximum movement speed |  | 
| range_min | *not set* | Decimal number | Minimum movement speed |  | 

## Samples

#### [Robot](https://github.com/microsoft/minecraft-samples/tree/main/add_entity_robot/full/robot_example_full_behavior/entities/robot.json)


```json
"minecraft:movement": {
  "value": 0.25
}
```

#### [Nardolphle](https://github.com/microsoft/minecraft-samples/tree/main/addon_starter/2_entities/behavior_packs/aop_mobs/entities/nardolphle.behavior.json)


```json
"minecraft:movement": {
  "value": 0.1
}
```

#### [Eliza](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/custom_cat_eliza/behavior_packs/mike_eliz/entities/eliza.json)


```json
"minecraft:movement": {
  "value": 0.3
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:movement": {
  "value": 0,
  "max": 0
}
```

#### [Gray Zombie Leader](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/gray_zombie_leader.behavior.json)


```json
"minecraft:movement": {
  "value": 0.23
}
```

#### [Beachager](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features/chill_oasis_assets/behavior_packs/chill_oasis_assets/entities/beachager.behavior.json)


```json
"minecraft:movement": {
  "value": 0.5
}
```

#### [Campghost](https://github.com/microsoft/minecraft-samples/tree/main/creator_camp/behavior_packs/creator_camp/entities/campghost.json)


```json
"minecraft:movement": {
  "value": 0.2
}
```
