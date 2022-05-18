---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:buoyant
ms.prod: gaming
---

# Entity Documentation - minecraft:buoyant

`minecraft:buoyant` allows an entity to float on the specified liquid blocks.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|apply_gravity| true| Boolean|  Applies gravity each tick. Causes more of a wave simulation, but will cause more gravity to be applied outside liquids. |
|base_buoyancy| 1.0| Decimal| Base buoyancy used to calculate how much will a mob float. |
|big_wave_probability| 0.03| Decimal| Probability for a big wave hitting the entity. Only used if `simulate_waves` is true. |
|big_wave_speed| 10.0| Decimal|  Multiplier for the speed to make a big wave. Triggered depending on `big_wave_probability`. |
|drag_down_on_buoyancy_removed| 0.0| Decimal| How much an actor will be dragged down when the Buoyancy Component is removed. |
|liquid_blocks|*not set* | List| List of blocks this entity can float on. **Must be a liquid block.** |
|simulate_waves| true| Boolean| Should the movement simulate waves going through. |

## Example

```json
"minecraft:buoyant":{
    "apply_gravity": true,
    "base_buoyancy": 1.0,
    "simulate_waves": true,
    "big_wave_probability": 0.03,
    "big_wave_speed": 10.0,
    "drag_down_on_buoyancy_removed": 0.0,
    "liquid_blocks": [
        "minecraft:water",
        "minecraft:flowing_water"
    ]
}
```

## Vanilla entities examples

### boat

```json
"minecraft:buoyant": {
    "base_buoyancy": 1.0,
    "apply_gravity": true,
    "simulate_waves": true,
    "big_wave_probability": 0.03,
    "big_wave_speed": 10.0,
    "liquid_blocks": [
        "minecraft:water",
        "minecraft:flowing_water"
    ]
}
```

## Vanilla entities using `minecraft:buoyant`

- [boat](../../../../Source/VanillaBehaviorPack_Snippets/entities/boat.md)
- [xp_orb](../../../../Source/VanillaBehaviorPack_Snippets/entities/xp_orb.md)
