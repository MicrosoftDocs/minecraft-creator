---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:mob_effect"
description: "Describes the minecraft:mob_effect entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:mob_effect

A component that applies a mob effect to entities that get within range.


## Mob Effect Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown_time | 0 | Integer number | Time in seconds to wait between each application of the effect. | Warden: `6` | 
| effect_range | 0.2 | Decimal number | How close a hostile entity must be to have the mob effect applied. | Pufferfish: `0.2`, Warden: `20` | 
| effect_time | 10 | Integer number | How long the applied mob effect lasts in seconds. Can also be set to "infinite" | Pufferfish: `10`, Warden: `13` | 
| entity_filter | *not set* | Minecraft filter | The set of entities that are valid to apply the mob effect to. | Pufferfish: `{"any_of":[{"all_of":[{"test":"is_family","subject":"other","value":"mob"},{"any_of":[{"test":"is_family","subject":"other","value":"axolotl"},{"all_of":[{"test":"is_family","subject":"other","operator":"not","value":"aquatic"},{"test":"is_family","subject":"other","operator":"not","value":"undead"}]}]}]},{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"test":"has_ability","subject":"other","operator":"not","value":"instabuild"}]}]}`, Warden: `{"all_of":[{"test":"is_family","subject":"other","value":"player"},{"operator":"not","test":"has_ability","subject":"other","value":"invulnerable"}]}` | 
| mob_effect | *not set* | String | The mob effect that is applied to entities that enter this entities effect range. | Pufferfish: `"poison"`, Warden: `"darkness"` | 

## Samples

#### [Pufferfish](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/pufferfish.json)


```json
"minecraft:mob_effect": {
  "effect_range": 0.2,
  "mob_effect": "poison",
  "effect_time": 10,
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
                "all_of": [
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "not",
                    "value": "aquatic"
                  },
                  {
                    "test": "is_family",
                    "subject": "other",
                    "operator": "not",
                    "value": "undead"
                  }
                ]
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

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:mob_effect": {
  "effect_range": 20,
  "effect_time": 13,
  "mob_effect": "darkness",
  "cooldown_time": 6,
  "entity_filter": {
    "all_of": [
      {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      {
        "operator": "not",
        "test": "has_ability",
        "subject": "other",
        "value": "invulnerable"
      }
    ]
  }
}
```
