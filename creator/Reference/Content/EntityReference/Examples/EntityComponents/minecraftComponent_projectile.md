---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:projectile"
description: "Describes the minecraft:projectile entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:projectile

Allows the entity to be a thrown entity.


## Projectile Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| anchor | *not set* | Decimal number |  | Dragon Fireball: `2`, Llama Spit: `1` | 
| angle_offset | 0 | Decimal number | Determines the angle at which the projectile is thrown | Lingering Potion: `-20` | 
| catch_fire | false | Boolean true/false | If true, the entity hit will be set on fire | Fireball: `true` | 
| crit_particle_on_hurt | false | Boolean true/false | If true, the projectile will produce additional particles when a critical hit happens | Shulker Bullet: `true` | 
| destroy_on_hurt | false | Boolean true/false | If true, this entity will be destroyed when hit |  | 
| destroyOnHurt | *not set* | String |  | Shulker Bullet: `true` | 
| filter | *not set* | String | Entity Definitions defined here can't be hurt by the projectile |  | 
| fire_affected_by_griefing | false | Boolean true/false | If true, whether the projectile causes fire is affected by the mob griefing game rule |  | 
| gravity | 0.05 | Decimal number | The gravity applied to this entity when thrown. The higher the value, the faster the entity falls | Egg: `0.03`, Lingering Potion: `0.05`, Llama Spit: `0.06` | 
| hit_ground_sound | *not set* | String |  | Thrown Trident: `"item.trident.hit_ground"` | 
| hit_nearest_passenger | false | Boolean true/false | If true, when hitting a vehicle, and there's at least one passenger in the vehicle, the damage will be dealt to the passenger closest to the projectile impact point. If there are no passengers, this setting does nothing. |  | 
| hit_sound | *not set* | String | The sound that plays when the projectile hits something | Dragon Fireball: `"explode"`, Lingering Potion: `"glass"`, Shulker Bullet: `"bullet.hit"` | 
| homing | false | Boolean true/false | If true, the projectile homes in to the nearest entity | Shulker Bullet: `true` | 
| ignored_entities | *not set* | Array of strings | [EXPERIMENTAL] An array of strings defining the types of entities that this entity does not collide with. | Breeze Wind Charge Projectile: `["ender_crystal","wind_charge_projectile","breeze_wind_charge_projectile"]` | 
| inertia | 0.99 | Decimal number | The fraction of the projectile's speed maintained every frame while traveling in air | Breeze Wind Charge Projectile: `1` | 
| is_dangerous | false | Boolean true/false | If true, the projectile will be treated as dangerous to the players | Wither Skull Dangerous: `true` | 
| knockback | true | Boolean true/false | If true, the projectile will knock back the entity it hits |  | 
| lightning | false | Boolean true/false | If true, the entity hit will be struck by lightning |  | 
| liquid_inertia | 0.6 | Decimal number | The fraction of the projectile's speed maintained every frame while traveling in water | Breeze Wind Charge Projectile: `1`, Thrown Trident: `0.99` | 
| multiple_targets | true | Boolean true/false | If true, the projectile can hit multiple entities per flight |  | 
| offset | [0, 0, 0] | x, y, z coordinate array | The offset from the entity's anchor where the projectile will spawn | Dragon Fireball: `[0,0.5,0]`, Fireball: `[0,-1.5,0]`, Llama Spit: `[0,-0.1,0]` | 
| on_fire_time | 5 | Decimal number | Time in seconds that the entity hit will be on fire for |  | 
| on_hit | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) |  | Breeze Wind Charge Projectile: `{"impact_damage":{"damage":1,"knockback":true},"wind_burst_on_hit":{}}`, Wind Charge Projectile: `{"impact_damage":{"damage":1,"max_critical_damage":1,"knockback":true},"wind_burst_on_hit":{}}`, Dragon Fireball: `{"spawn_aoe_cloud":{"radius":6,"radius_on_use":0,"potion":23,"particle":"dragonbreath","duration":120,"color":[220,0,239],"affect_owner":false,"reapplication_delay":20},"remove_on_hit":{}}` | 
| particle | iconcrack | String | Particle to use upon collision |  | 
| potion_effect | -1 | Integer number | Defines the effect the arrow will apply to the entity it hits |  | 
| power | 1.3 | Decimal number | Determines the velocity of the projectile | Breeze Wind Charge Projectile: `0.7`, Wind Charge Projectile: `1.5`, Dragon Fireball: `1.3` | 
| reflect_immunity | 0 | Decimal number | During the specified time, in seconds, the projectile cannot be reflected by hitting it | Wind Charge Projectile: `0.5` | 
| reflect_on_hurt | false | Boolean true/false | If true, this entity will be reflected back when hit | Breeze Wind Charge Projectile: `true` | 
| semi_random_diff_damage | false | Boolean true/false | If true, damage will be randomized based on damage and speed | Dragon Fireball: `true` | 
| shoot_sound | *not set* | String | The sound that plays when the projectile is shot | Wither Skull Dangerous: `"bow"` | 
| shoot_target | true | Boolean true/false | If true, the projectile will be shot towards the target of the entity firing it |  | 
| should_bounce | false | Boolean true/false | If true, the projectile will bounce upon hit | Thrown Trident: `true` | 
| splash_potion | false | Boolean true/false | If true, the projectile will be treated like a splash potion |  | 
| splash_range | 4 | Decimal number | Radius in blocks of the 'splash' effect |  | 
| stop_on_hurt | *not set* | String |  | Thrown Trident: `true` | 
| uncertainty_base | 0 | Decimal number | The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier | Breeze Wind Charge Projectile: `5`, Wind Charge Projectile: `1`, Dragon Fireball: `10` | 
| uncertainty_multiplier | 0 | Decimal number | Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier | Breeze Wind Charge Projectile: `4`, Wither Skull Dangerous: `1` | 

## Samples

#### [Breeze Wind Charge Projectile](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/breeze_wind_charge_projectile.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 1,
      "knockback": true
    },
    "wind_burst_on_hit": {}
  },
  "power": 0.7,
  "gravity": 0,
  "inertia": 1,
  "liquid_inertia": 1,
  "uncertainty_base": 5,
  "uncertainty_multiplier": 4,
  "reflect_on_hurt": true,
  "ignored_entities": [
    "ender_crystal",
    "wind_charge_projectile",
    "breeze_wind_charge_projectile"
  ]
}
```

#### [Wind Charge Projectile](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/wind_charge_projectile.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 1,
      "max_critical_damage": 1,
      "knockback": true
    },
    "wind_burst_on_hit": {}
  },
  "power": 1.5,
  "gravity": 0,
  "inertia": 1,
  "liquid_inertia": 1,
  "uncertainty_base": 1,
  "uncertainty_multiplier": 0,
  "reflect_on_hurt": true,
  "multiple_targets": false,
  "reflect_immunity": 0.5,
  "ignored_entities": [
    "ender_crystal",
    "wind_charge_projectile",
    "breeze_wind_charge_projectile"
  ]
}
```

#### [Dragon Fireball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/dragon_fireball.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "spawn_aoe_cloud": {
      "radius": 6,
      "radius_on_use": 0,
      "potion": 23,
      "particle": "dragonbreath",
      "duration": 120,
      "color": [
        220,
        0,
        239
      ],
      "affect_owner": false,
      "reapplication_delay": 20
    },
    "remove_on_hit": {}
  },
  "power": 1.3,
  "gravity": 0,
  "inertia": 1,
  "anchor": 2,
  "offset": [
    0,
    0.5,
    0
  ],
  "semi_random_diff_damage": true,
  "uncertainty_base": 10,
  "reflect_on_hurt": true,
  "hit_sound": "explode"
}
```

#### [Egg](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/egg.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 0,
      "knockback": true,
      "destroy_on_hit": true
    },
    "spawn_chance": {
      "first_spawn_chance": 8,
      "second_spawn_chance": 32,
      "first_spawn_count": 1,
      "second_spawn_count": 4,
      "spawn_definition": "minecraft:chicken",
      "spawn_baby": true,
      "on_spawn": [
        {
          "filters": {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:climate_variant",
            "value": "warm"
          },
          "event": "minecraft:hatch_warm"
        },
        {
          "filters": {
            "test": "enum_property",
            "subject": "other",
            "domain": "minecraft:climate_variant",
            "value": "cold"
          },
          "event": "minecraft:hatch_cold"
        }
      ]
    },
    "remove_on_hit": {},
    "particle_on_hit": {
      "particle_type": "iconcrack",
      "num_particles": 6,
      "on_entity_hit": true,
      "on_other_hit": true,
      "particle_item_name": {
        "brown_egg": {
          "test": "enum_property",
          "domain": "minecraft:climate_variant",
          "value": "warm"
        },
        "blue_egg": {
          "test": "enum_property",
          "domain": "minecraft:climate_variant",
          "value": "cold"
        }
      }
    }
  },
  "power": 1.5,
  "gravity": 0.03,
  "angle_offset": 0
}
```

#### [Fireball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fireball.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 6,
      "knockback": false,
      "semi_random_diff_damage": false
    },
    "definition_event": {
      "affect_projectile": true,
      "event_trigger": {
        "event": "minecraft:explode",
        "target": "self"
      }
    }
  },
  "power": 1.6,
  "gravity": 0,
  "inertia": 1,
  "liquid_inertia": 1,
  "uncertainty_base": 0,
  "uncertainty_multiplier": 0,
  "anchor": 2,
  "offset": [
    0,
    -1.5,
    0
  ],
  "reflect_on_hurt": true,
  "catch_fire": true
}
```

#### [Fishing Hook](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/fishing_hook.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "stick_in_ground": {}
  }
}
```

#### [Lingering Potion](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/lingering_potion.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "douse_fire": {},
    "spawn_aoe_cloud": {
      "radius": 3,
      "radius_on_use": -0.5,
      "duration": 30,
      "reapplication_delay": 40
    },
    "remove_on_hit": {}
  },
  "power": 0.5,
  "gravity": 0.05,
  "angle_offset": -20,
  "hit_sound": "glass"
}
```

#### [Llama Spit](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama_spit.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 1,
      "knockback": false
    },
    "remove_on_hit": {}
  },
  "power": 1.5,
  "gravity": 0.06,
  "inertia": 1,
  "uncertainty_base": 10,
  "uncertainty_multiplier": 4,
  "anchor": 1,
  "offset": [
    0,
    -0.1,
    0
  ],
  "reflect_on_hurt": true
}
```

#### [Shulker Bullet](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker_bullet.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 4,
      "knockback": true,
      "should_bounce": true
    },
    "mob_effect": {
      "effect": "levitation",
      "durationeasy": 200,
      "durationnormal": 200,
      "durationhard": 200,
      "amplifier": 0
    },
    "remove_on_hit": {},
    "particle_on_hit": {
      "particle_type": "largeexplode",
      "on_other_hit": true
    }
  },
  "hit_sound": "bullet.hit",
  "destroyOnHurt": true,
  "crit_particle_on_hurt": true,
  "power": 1.6,
  "gravity": 0.05,
  "uncertainty_base": 16,
  "uncertainty_multiplier": 4,
  "anchor": 1,
  "offset": [
    0,
    -0.1,
    0
  ],
  "homing": true
}
```

#### [Small Fireball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/small_fireball.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "damage": 5,
      "knockback": true,
      "catch_fire": true,
      "semi_random_diff_damage": false
    },
    "catch_fire": {
      "fire_affected_by_griefing": true
    },
    "remove_on_hit": {}
  },
  "power": 1.3,
  "gravity": 0,
  "inertia": 1,
  "liquid_inertia": 1,
  "anchor": 2,
  "offset": [
    0,
    0.5,
    0
  ],
  "semi_random_diff_damage": true,
  "uncertainty_base": 10,
  "reflect_on_hurt": true
}
```

#### [Snowball](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snowball.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "impact_damage": {
      "filter": "blaze",
      "damage": 3,
      "knockback": true
    },
    "remove_on_hit": {},
    "particle_on_hit": {
      "particle_type": "snowballpoof",
      "num_particles": 6,
      "on_entity_hit": true,
      "on_other_hit": true
    }
  },
  "anchor": 1,
  "power": 1.5,
  "gravity": 0.03,
  "angle_offset": 0,
  "offset": [
    0,
    -0.1,
    0
  ]
}
```

#### [Splash Potion](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/splash_potion.json)


```json
"minecraft:projectile": {
  "on_hit": {
    "douse_fire": {},
    "thrown_potion_effect": {},
    "remove_on_hit": {}
  },
  "power": 0.5,
  "gravity": 0.05,
  "angle_offset": -20,
  "hit_sound": "glass"
}
```
