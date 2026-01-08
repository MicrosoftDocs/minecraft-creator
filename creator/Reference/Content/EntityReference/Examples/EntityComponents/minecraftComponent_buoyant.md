---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:buoyant"
description: "Describes the minecraft:buoyant entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:buoyant

Enables an entity to float on the specified liquid blocks.


## Buoyant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| apply_gravity | true | Boolean true/false | Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids. |  | 
| base_buoyancy | 1 | Decimal number | Base buoyancy used to calculate how much will a mob float. |  | 
| big_wave_probability | 0.03 | Decimal number | Probability for a big wave hitting the entity. Only used if `simulate_waves` is true. |  | 
| big_wave_speed | 10 | Decimal number | Multiplier for the speed to make a big wave. Triggered depending on 'big_wave_probability'. |  | 
| drag_down_on_buoyancy_removed | 0 | Decimal number | How much an actor will be dragged down when the Buoyancy Component is removed. |  | 
| liquid_blocks | *not set* | Array of strings | List of blocks this entity can float on. Must be a liquid block. | Xp Orb: `["minecraft:flowing_water","minecraft:water"]` | 
| simulate_waves | true | Boolean true/false | Should the movement simulate waves going through. |  | 

## Samples

#### [Xp Orb](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/xp_orb.json)


```json
"minecraft:buoyant": {
  "apply_gravity": false,
  "liquid_blocks": [
    "minecraft:flowing_water",
    "minecraft:water"
  ]
}
```
