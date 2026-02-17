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
| cause | *not set* | String from a list of choices | The type of damage that is applied to entities that enter the damage range. A list of available damage sources can be found at [Entity Damage Sources located in the Vanilla Listings Documentation](../../VanillaListingsReference/AddonEntityDamageSources.md). | Magma Cube: `"entity_attack"` | 
| damage_cooldown | 0 | Decimal number | Attack cooldown (in seconds) for how often this entity can attack a target. | Magma Cube: `0.5` | 
| damage_per_tick | 2 | Integer number | How much damage per tick is applied to entities that enter the damage range. | Magma Cube: `6`, `4`, `3` | 
| damage_range | 0.2 | Integer number | How close a hostile entity must be to have the damage applied. | Magma Cube: `0.15` | 
| entity_filter | *not set* | Minecraft filter | The set of entities that are valid to apply the damage to when within range. | Magma Cube: `{"any_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_family","value":"irongolem"}]}`, Slime: `{"any_of":[{"subject":"other","test":"is_family","value":"player"},{"subject":"other","test":"is_family","value":"irongolem"},{"subject":"other","test":"is_family","value":"snowgolem"}]}` | 
| play_attack_sound | true | Boolean true/false | If the entity should play their attack sound when attacking a target. |  | 

## Samples

#### [Magma Cube](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/magma_cube.json)

At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 6,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 4,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_small/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 3,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      }
    ]
  }
}
```

#### [Slime](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/slime.json)

At /minecraft:entity/component_groups/minecraft:slime_large/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 4,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "snowgolem"
      }
    ]
  }
}
```

At /minecraft:entity/component_groups/minecraft:slime_medium/minecraft:area_attack/: 

```json
"minecraft:area_attack": {
  "cause": "entity_attack",
  "damage_cooldown": 0.5,
  "damage_per_tick": 2,
  "damage_range": 0.15,
  "entity_filter": {
    "any_of": [
      {
        "subject": "other",
        "test": "is_family",
        "value": "player"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "irongolem"
      },
      {
        "subject": "other",
        "test": "is_family",
        "value": "snowgolem"
      }
    ]
  }
}
```
