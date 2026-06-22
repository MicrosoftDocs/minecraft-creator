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

> [!Note]
> In 1.26.10 the `simulate_waves` boolean was replaced with the `movement_type` string field (`waves` / `bobbing` / `none`). `big_wave_probability` and `big_wave_speed` only apply when `movement_type` is `waves`.


## Buoyant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| apply_gravity | true | Boolean true/false | Applies gravity each tick. Causes "movement_type" to be more impactful, but also gravity to be applied more intensely outside liquids. |  | 
| base_buoyancy | 1 | Decimal number | Base buoyancy used to calculate how much will a entity float. |  | 
| big_wave_probability | 0.03 | Decimal number | Probability for a big wave hitting the entity. Only used if "movement_type" is "waves". |  | 
| big_wave_speed | 10 | Decimal number | Multiplier for the speed to make a big wave. Triggered depending on "big_wave_probability". |  | 
| can_auto_step_from_liquid | false | Boolean true/false | Whether the entity can step out of a liquid block onto a neighboring solid block when pushed against it. This item requires a format version of at least 1.26.10. |  | 
| drag_down_on_buoyancy_removed | 0 | Decimal number | How much an entity will be dragged down when the component is removed. |  | 
| liquid_blocks | *not set* | Array of strings | List of blocks this entity can float on. Must be a liquid block. | Xp Orb: `["minecraft:flowing_water","minecraft:water"]` | 
| movement_type | waves | String | Type of vertical movement applied to the entity. |  | 

### movement_type

Type of vertical movement applied to the entity. `waves` simulates wave movement based on the entity's speed (default). `bobbing` moves the entity up and down at a constant pace. `none` disables wave movement. Replaces the previous `simulate_waves` boolean. This item requires a format version of at least 1.26.10.


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
