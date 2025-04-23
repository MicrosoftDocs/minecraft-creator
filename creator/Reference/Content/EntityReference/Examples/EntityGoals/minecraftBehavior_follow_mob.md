---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_mob"
description: "Describes the minecraft:behavior.follow_mob ai behavior component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_mob

Allows the mob to follow other mobs.


## Follow Mob Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | If non-empty, provides criteria for filtering which nearby Mobs can be followed. If empty default criteria will be used, which will exclude Players, Squid variants, Fish variants, Tadpoles, Dolphins, and mobs of the same type as the owner of the Goal. | Happy Ghast: `{"all_of":[{"test":"is_underwater","subject":"other","value":false},{"test":"is_baby","subject":"other","value":false},{"any_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_family","subject":"other","value":"armadillo"},{"test":"is_family","subject":"other","value":"bee"},{"test":"is_family","subject":"other","value":"camel"},{"test":"is_family","subject":"other","value":"cat"},{"test":"is_family","subject":"other","value":"chicken"},{"test":"is_family","subject":"other","value":"cow"},{"test":"is_family","subject":"other","value":"donkey"},{"test":"is_family","subject":"other","value":"fox"},{"test":"is_family","subject":"other","value":"goat"},{"test":"is_family","subject":"other","value":"horse"},{"test":"is_family","subject":"other","value":"skeleton_horse"},{"test":"is_family","subject":"other","value":"llama"},{"test":"is_family","subject":"other","value":"mule"},{"test":"is_family","subject":"other","value":"ocelot"},{"test":"is_family","subject":"other","value":"panda"},{"test":"is_family","subject":"other","value":"parrot"},{"test":"is_family","subject":"other","value":"pig"},{"test":"is_family","subject":"other","value":"polar_bear"},{"test":"is_family","subject":"other","value":"rabbit"},{"test":"is_family","subject":"other","value":"sheep"},{"test":"is_family","subject":"other","value":"sniffer"},{"test":"is_family","subject":"other","value":"strider"},{"test":"is_family","subject":"other","value":"villager"},{"test":"is_family","subject":"other","value":"villager_v2"},{"test":"is_family","subject":"other","value":"wolf "}]}]}` | 
| preferred_actor_type | *not set* | String | The type of actor to prefer following. If left unspecified, a random actor among those in range will be chosen. | Happy Ghast: `"player"` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Happy Ghast: `6`, Parrot: `4` | 
| search_range | 0 | Integer number | The distance in blocks it will look for a mob to follow | Happy Ghast: `16`, Parrot: `20` | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal | Happy Ghast: `1.1`, Parrot: `1` | 
| stop_distance | 2 | Decimal number | The distance in blocks this mob stops from the mob it is following | Happy Ghast: `5`, Parrot: `3` | 
| use_home_position_restriction | true | Boolean true/false | If true, the mob will respect the 'minecraft:home' component's 'restriction_radius' field when choosing a target to follow. If false, it will choose target position without considering home restrictions. | Happy Ghast: `true` | 

## Samples

#### [Happy Ghast](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/happy_ghast.json)


```json
"minecraft:behavior.follow_mob": {
  "priority": 6,
  "search_range": 16,
  "stop_distance": 5,
  "speed_multiplier": 1.1,
  "use_home_position_restriction": true,
  "preferred_actor_type": "player",
  "filters": {
    "all_of": [
      {
        "test": "is_underwater",
        "subject": "other",
        "value": false
      },
      {
        "test": "is_baby",
        "subject": "other",
        "value": false
      },
      {
        "any_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "armadillo"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "bee"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "camel"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "cat"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "chicken"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "cow"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "donkey"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "fox"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "goat"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "horse"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "skeleton_horse"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "llama"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "mule"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "ocelot"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "panda"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "parrot"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "pig"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "polar_bear"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "rabbit"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "sheep"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "sniffer"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "strider"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "villager"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "villager_v2"
          },
          {
            "test": "is_family",
            "subject": "other",
            "value": "wolf "
          }
        ]
      }
    ]
  }
}
```

#### [Parrot](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/parrot.json)


```json
"minecraft:behavior.follow_mob": {
  "priority": 4,
  "speed_multiplier": 1,
  "stop_distance": 3,
  "search_range": 20
}
```
