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
| apply_gravity | true | Boolean true/false | Applies gravity each tick. Causes "movement_type" to be more impactful, but also gravity to be applied more intensely outside liquids. |  | 
| base_buoyancy | 1 | Decimal number | Base buoyancy used to calculate how much will a entity float. |  | 
| big_wave_probability | 0.03 | Decimal number | Probability for a big wave hitting the entity. Only used if "movement_type" is "waves". |  | 
| big_wave_speed | 10 | Decimal number | Multiplier for the speed to make a big wave. Triggered depending on "big_wave_probability". |  | 
| can_auto_step_from_liquid | false | Boolean true/false | Whether the entity can move out of a liquid block to a neighboring solid block if pushed against it. |  | 
| drag_down_on_buoyancy_removed | 0 | Decimal number | How much an entity will be dragged down when the component is removed. |  | 
| liquid_blocks | *not set* | Array of strings | List of blocks this entity can float on. Must be a liquid block. | Xp Orb: `["minecraft:flowing_water","minecraft:water"]` | 
| movement_type | waves | String | Type of vertical movement applied to the entity:<br>"waves", simulates wave movement based on the entity speed.<br>"bobbing", simulates waves going through.<br>"none", simulates waves going through. |  | 

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
