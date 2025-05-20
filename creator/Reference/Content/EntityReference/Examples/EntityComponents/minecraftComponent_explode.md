---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:explode"
description: "Describes the minecraft:explode entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:explode

Defines how the entity explodes.


## Explode Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| add | *not set* | [Add](#add-item-type) item |  | Fireball: `{"component_groups":["minecraft:exploding"]}` | 
| allow_underwater | false | Boolean true/false | If true, the explosion will affect blocks and entities under water. This item requires a format version of at least undefined. | Breeze Wind Charge Projectile: `true` | 
| breaks_blocks | true | Boolean true/false | If true, the explosion will destroy blocks in the explosion radius. |  | 
| causes_fire | false | Boolean true/false | If true, blocks in the explosion radius will be set on fire. | Fireball: `true` | 
| damage_scaling | 1 | Decimal number | A scale factor applied to the explosion's damage to entities. A value of 0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead. |  | 
| destroy_affected_by_griefing | false | Boolean true/false | If true, whether the explosion breaks blocks is affected by the mob griefing game rule. | Creeper: `true` | 
| fire_affected_by_griefing | false | Boolean true/false | If true, whether the explosion causes fire is affected by the mob griefing game rule. | Fireball: `true` | 
| fuse_length | *not set* | Range of integers | The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate. | Creeper: `1.5`, Tnt Minecart: `4` | 
| fuse_lit | false | Boolean true/false | If true, the fuse is already lit when this component is added to the entity. | Creeper: `true` | 
| knockback_scaling | 1 | Decimal number | A scale factor applied to the knockback force caused by the explosion. This item requires a format version of at least undefined. | Breeze Wind Charge Projectile: `0.6`, Wind Charge Projectile: `1.22` | 
| max_resistance | 3.40282e+38 | Decimal number | A blocks explosion resistance will be capped at this value when an explosion occurs. | Wither Skull Dangerous: `4` | 
| negates_fall_damage | false | Boolean true/false | Defines whether the explosion should apply fall damage negation to Players above the point of collision. This item requires a format version of at least undefined. | Wind Charge Projectile: `true` | 
| particle_effect | explosion | String | The name of the particle effect to use. The accepted strings are 'explosion', 'wind_burst', or 'breeze_wind_burst'. This item requires a format version of at least undefined. | Breeze Wind Charge Projectile: `"breeze_wind_burst"`, Wind Charge Projectile: `"wind_burst"` | 
| power | 3 | Decimal number | The radius of the explosion in blocks and the amount of damage the explosion deals. | Breeze Wind Charge Projectile: `3`, Creeper: `6`, Fireball: `1` | 
| sound_effect | explode | String | The name of the sound effect played when the explosion triggers. This item requires a format version of at least undefined. | Breeze Wind Charge Projectile: `"breeze_wind_charge.burst"`, Wind Charge Projectile: `"wind_charge.burst"`, Campghost: `"scary"` | 
| toggles_blocks | false | Boolean true/false | If true, the explosion will toggle blocks in the explosion radius. This item requires a format version of at least undefined. | Breeze Wind Charge Projectile: `true` | 

## Add item type

#### Add Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| component_groups | *not set* | String |  | Fireball: `["minecraft:exploding"]` | 

## Samples

#### [Breeze Wind Charge Projectile](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze_wind_charge_projectile.json)


```json
"minecraft:explode": {
  "power": 3,
  "particle_effect": "breeze_wind_burst",
  "sound_effect": "breeze_wind_charge.burst",
  "knockback_scaling": 0.6,
  "negates_fall_damage": false,
  "causes_fire": false,
  "breaks_blocks": false,
  "allow_underwater": true,
  "toggles_blocks": true,
  "damage_scaling": 0,
  "max_resistance": 0
}
```

#### [Creeper](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/creeper.json)

At /minecraft:entity/component_groups/minecraft:exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 1.5,
  "fuse_lit": true,
  "power": 3,
  "causes_fire": false,
  "destroy_affected_by_griefing": true
}
```

At /minecraft:entity/component_groups/minecraft:charged_exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 1.5,
  "fuse_lit": true,
  "power": 6,
  "causes_fire": false,
  "destroy_affected_by_griefing": true
}
```

#### [Ender Crystal](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_crystal.json)


```json
"minecraft:explode": {
  "fuse_length": 0,
  "fuse_lit": true,
  "power": 6,
  "causes_fire": false,
  "destroy_affected_by_griefing": true
}
```

#### [Fireball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fireball.json)

At /minecraft:entity/component_groups/minecraft:exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 0,
  "fuse_lit": true,
  "power": 1,
  "causes_fire": true,
  "fire_affected_by_griefing": true,
  "destroy_affected_by_griefing": true
}
```

At /minecraft:entity/events/minecraft:explode/: 

```json
"minecraft:explode": {
  "add": {
    "component_groups": [
      "minecraft:exploding"
    ]
  }
}
```

#### [Tnt Minecart](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/tnt_minecart.json)

At /minecraft:entity/component_groups/minecraft:primed_tnt/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 4,
  "fuse_lit": true,
  "power": 3,
  "causes_fire": false
}
```

At /minecraft:entity/component_groups/minecraft:instant_explode_tnt/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 0,
  "fuse_lit": true,
  "power": 3,
  "causes_fire": false
}
```

#### [Wind Charge Projectile](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wind_charge_projectile.json)


```json
"minecraft:explode": {
  "power": 1.2,
  "particle_effect": "wind_burst",
  "sound_effect": "wind_charge.burst",
  "knockback_scaling": 1.22,
  "negates_fall_damage": true,
  "causes_fire": false,
  "breaks_blocks": false,
  "allow_underwater": true,
  "toggles_blocks": true,
  "damage_scaling": 0,
  "max_resistance": 0
}
```

#### [Wither Skull Dangerous](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither_skull_dangerous.json)

At /minecraft:entity/component_groups/minecraft:exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 0,
  "fuse_lit": true,
  "power": 1,
  "causes_fire": false,
  "max_resistance": 4,
  "destroy_affected_by_griefing": true
}
```

#### [Wither Skull](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wither_skull.json)

At /minecraft:entity/component_groups/minecraft:exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 0,
  "fuse_lit": true,
  "power": 1,
  "causes_fire": false,
  "destroy_affected_by_griefing": true
}
```

#### [Campghost](https://github.com/microsoft/minecraft-samples/tree/main/creator_camp/behavior_packs/creator_camp/entities/campghost.json)

At /minecraft:entity/component_groups/minecraft:exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 1.5,
  "fuse_lit": true,
  "power": 3,
  "causes_fire": false,
  "destroy_affected_by_griefing": true,
  "sound_effect": "scary"
}
```

At /minecraft:entity/component_groups/minecraft:charged_exploding/minecraft:explode/: 

```json
"minecraft:explode": {
  "fuse_length": 1.5,
  "fuse_lit": true,
  "power": 6,
  "causes_fire": false,
  "destroy_affected_by_griefing": true,
  "sound_effect": "scary"
}
```
