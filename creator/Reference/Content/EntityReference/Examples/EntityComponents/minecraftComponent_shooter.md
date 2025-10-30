---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:shooter"
description: "Describes the minecraft:shooter entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:shooter

Defines the entity's ranged attack behavior. The "minecraft:behavior.ranged_attack" goal uses this component to determine which projectiles to shoot.

> [!Note]
> Ammunition used by minecraft:shooter must have the minecraft:projectile component in order to function properly.


## Shooter Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| aux_val | -1 | Integer number | ID of the Potion effect for the default projectile to be applied on hit. | Bogged: `26`, Parched: `35`, Witch: `23` | 
| def | *not set* | String | Actor definition to use as the default projectile for the ranged attack. The actor definition must have the projectile component to be able to be shot as a projectile. | Blaze: `"minecraft:small_fireball"`, Bogged: `"minecraft:arrow"`, Drowned: `"minecraft:thrown_trident"` | 
| magic | false | Boolean true/false | Sets whether the projectiles being used are flagged as magic. If set, the ranged attack goal will not be used at the same time as other magic goals, such as minecraft:behavior.drink_potion | Witch: `true` | 
| power | 0 | Decimal number | Velocity in which the projectiles will be shot at. A power of 0 will be overwritten by the default projectile throw power. | Witch: `0.75`, Axe Turret: `10`, Bow Turret: `7` | 
| projectiles | *not set* | Array of strings | List of projectiles that can be used by the shooter. Projectiles are evaluated in the order of the list; After a projectile is chosen, the rest of the list is ignored. | Witch: `[{"def":"minecraft:splash_potion","aux_val":21,"filters":{"all_of":[{"test":"is_raider","subject":"other","value":true},{"test":"actor_health","subject":"other","value":4,"operator":"<="}]},"lose_target":true},{"def":"minecraft:splash_potion","aux_val":28,"filters":{"all_of":[{"test":"is_raider","subject":"other","value":true}]},"lose_target":true},{"def":"minecraft:splash_potion","aux_val":17,"filters":{"all_of":[{"test":"target_distance","subject":"self","value":8,"operator":">="},{"none_of":[{"test":"has_mob_effect","subject":"other","value":"slowness"}]}]}},{"def":"minecraft:splash_potion","aux_val":25,"filters":{"all_of":[{"test":"actor_health","subject":"other","value":8,"operator":">="},{"none_of":[{"test":"has_mob_effect","subject":"other","value":"poison"}]}]}},{"def":"minecraft:splash_potion","aux_val":34,"filters":{"all_of":[{"test":"target_distance","subject":"self","value":3,"operator":"<="},{"none_of":[{"test":"has_mob_effect","subject":"other","value":"weakness"}]}]},"chance":0.25}]` | 
| sound | *not set* | String | Sound that is played when the shooter shoots a projectile. | Bogged: `"bow"`, Drowned: `"item.trident.throw"`, Witch: `"throw"` | 

## Samples

#### [Blaze](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/blaze.json)


```json
"minecraft:shooter": {
  "def": "minecraft:small_fireball"
}
```

#### [Bogged](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/bogged.json)


```json
"minecraft:shooter": {
  "def": "minecraft:arrow",
  "sound": "bow",
  "aux_val": 26
}
```

#### [Drowned](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/drowned.json)


```json
"minecraft:shooter": {
  "def": "minecraft:thrown_trident",
  "sound": "item.trident.throw"
}
```

#### [Ender Dragon](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ender_dragon.json)


```json
"minecraft:shooter": {
  "def": "minecraft:dragon_fireball"
}
```

#### [Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ghast.json)


```json
"minecraft:shooter": {
  "def": "minecraft:fireball"
}
```

#### [Llama](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/llama.json)


```json
"minecraft:shooter": {
  "def": "minecraft:llama_spit"
}
```

#### [Parched](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parched.json)


```json
"minecraft:shooter": {
  "def": "minecraft:arrow",
  "sound": "bow",
  "aux_val": 35
}
```

#### [Piglin](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/piglin.json)


```json
"minecraft:shooter": {
  "def": "minecraft:arrow"
}
```

#### [Shulker](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/shulker.json)


```json
"minecraft:shooter": {
  "def": "minecraft:shulker_bullet"
}
```

#### [Snow Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/snow_golem.json)


```json
"minecraft:shooter": {
  "def": "minecraft:snowball"
}
```

#### [Witch](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/witch.json)


```json
"minecraft:shooter": {
  "power": 0.75,
  "def": "minecraft:splash_potion",
  "aux_val": 23,
  "sound": "throw",
  "projectiles": [
    {
      "def": "minecraft:splash_potion",
      "aux_val": 21,
      "filters": {
        "all_of": [
          {
            "test": "is_raider",
            "subject": "other",
            "value": true
          },
          {
            "test": "actor_health",
            "subject": "other",
            "value": 4,
            "operator": "<="
          }
        ]
      },
      "lose_target": true
    },
    {
      "def": "minecraft:splash_potion",
      "aux_val": 28,
      "filters": {
        "all_of": [
          {
            "test": "is_raider",
            "subject": "other",
            "value": true
          }
        ]
      },
      "lose_target": true
    },
    {
      "def": "minecraft:splash_potion",
      "aux_val": 17,
      "filters": {
        "all_of": [
          {
            "test": "target_distance",
            "subject": "self",
            "value": 8,
            "operator": ">="
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "other",
                "value": "slowness"
              }
            ]
          }
        ]
      }
    },
    {
      "def": "minecraft:splash_potion",
      "aux_val": 25,
      "filters": {
        "all_of": [
          {
            "test": "actor_health",
            "subject": "other",
            "value": 8,
            "operator": ">="
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "other",
                "value": "poison"
              }
            ]
          }
        ]
      }
    },
    {
      "def": "minecraft:splash_potion",
      "aux_val": 34,
      "filters": {
        "all_of": [
          {
            "test": "target_distance",
            "subject": "self",
            "value": 3,
            "operator": "<="
          },
          {
            "none_of": [
              {
                "test": "has_mob_effect",
                "subject": "other",
                "value": "weakness"
              }
            ]
          }
        ]
      },
      "chance": 0.25
    }
  ],
  "magic": true
}
```

#### [Axe Turret](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/entities/axe_turret.behavior.json)


```json
"minecraft:shooter": {
  "def": "minecraft:shulker_bullet",
  "power": 10
}
```
