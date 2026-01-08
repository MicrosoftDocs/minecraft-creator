---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:area_attack"
description: "Describes the minecraft:area_attack entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:area_attack

A component that does damage to entities that get within range.


## Area Attack Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cause | *not set* | String from a list of choices | The type of damage that is applied to entities that enter the damage range. A list of available damage sources can be found at [Entity Damage Sources located in the Vanilla Listings Documentation](../../VanillaListingsReference/AddonEntityDamageSources.md). | Magma Cube: `"entity_attack"`, Pufferfish: `"contact"` | 
| damage_cooldown | 0 | Decimal number | Attack cooldown (in seconds) for how often this entity can attack a target. | Magma Cube: `0.5` | 
| damage_per_tick | 2 | Integer number | How much damage per tick is applied to entities that enter the damage range. | Magma Cube: `6`, `4`, `3` | 
| damage_range | 0.2 | Integer number | How close a hostile entity must be to have the damage applied. | Magma Cube: `0.15`, Pufferfish: `0.2` | 
| entity_filter | *not set* | Minecraft filter | The set of entities that are valid to apply the damage to when within range. | Magma Cube: `{"any_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_family","subject":"other","value":"irongolem"}]}`, Pufferfish: `{"any_of":[{"all_of":[{"test":"is_family","subject":"other","value":"mob"},{"any_of":[{"test":"is_family","subject":"other","value":"axolotl"},{"test":"is_family","subject":"other","operator":"not","value":"aquatic"}]}]},{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"has_ability","subject":"other","operator":"not","value":"instabuild"}]}]}`, Slime: `{"any_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"is_family","subject":"other","value":"irongolem"},{"test":"is_family","subject":"other","value":"snowgolem"}]}` | 
| play_attack_sound | true | Boolean true/false | If the entity should play their attack sound when attacking a target. |  | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)

At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "damage_range": 0.15,
  "damage_per_tick": 6,
  "damage_cooldown": 0.5,
  "cause": "entity_attack",
  "entity_filter": {
    "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "damage_range": 0.15,
  "damage_per_tick": 4,
  "damage_cooldown": 0.5,
  "cause": "entity_attack",
  "entity_filter": {
    "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_small/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "damage_range": 0.15,
  "damage_per_tick": 3,
  "damage_cooldown": 0.5,
  "cause": "entity_attack",
  "entity_filter": {
    "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      }
    ]
  }
}
```

#### [Pufferfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pufferfish.json)


```json
"minecraft:area_attack": {
  "damage_range": 0.2,
  "damage_per_tick": 2,
  "damage_cooldown": 0.5,
  "cause": "contact",
  "entity_filter": {
    "any_of": [
      {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "mob"
          },
          {
            "any_of": [
              {
                "test": "is_family",
                "subject": "other",
                "value": "axolotl"
              },
              {
                "test": "is_family",
                "subject": "other",
                "operator": "not",
                "value": "aquatic"
              }
            ]
          }
        ]
      },
      {
        "all_of": [
          {
            "test": "is_family",
            "subject": "other",
            "value": "player"
          },
          {
            "test": "has_ability",
            "subject": "other",
            "operator": "not",
            "value": "instabuild"
          }
        ]
      }
    ]
  }
}
```

#### [Slime](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/slime.json)

At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "damage_range": 0.15,
  "damage_per_tick": 4,
  "damage_cooldown": 0.5,
  "cause": "entity_attack",
  "entity_filter": {
    "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "snowgolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "damage_range": 0.15,
  "damage_per_tick": 2,
  "damage_cooldown": 0.5,
  "cause": "entity_attack",
  "entity_filter": {
    "any_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "irongolem"
      },
      {
        "test": "is_family",
        "subject": "other",
        "value": "snowgolem"
      }
    ]
  }
}
```
