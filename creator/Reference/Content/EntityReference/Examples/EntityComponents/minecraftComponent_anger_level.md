---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:anger_level
ms.prod: gaming
---

# Entity Documentation - minecraft:anger_level

`minecraft:anger_level` allows this entity to track anger towards a set of nuisances.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| anger_decrement_interval| 1.00| Decimal| Anger level will decay over time. Defines how often anger towards all nuisances will be decreased by one |
| angry_boost| 20| Positive Integer| Anger boost applied to angry threshold when mob gets angry |
| angry_threshold| 80| Positive Integer| Threshold that define when the mob is considered angry at a nuisance |
| default_annoyingness| 0| String| The default amount of annoyingness for any given nuisance. Specifies how much to raise anger level on each provocation |
| max_anger| 100 | Positive Integer| The maximum anger level that can be reached. Applies to any nuisance |
| nuisance_filter| | Minecraft Filter| Filter that is applied to determine if a mob can be a nuisance |
| on_increase_sounds|[condition, sound] |Array| Sounds to play when the entity is getting provoked. Evaluated in order. First matching condition wins|
| remove_targets_below_angry_threshold| true| Boolean| Defines if the mob should remove target if it falls below 'angry' threshold |

## Vanilla entities example

### warden

```json
      "minecraft:anger_level": {
        "max_anger": 150,
        "angry_threshold": 80,
        "remove_targets_below_angry_threshold": true,
        "angry_boost": 20,
        "anger_decrement_interval": 1.0,
        "default_annoyingness": 35,
        "default_projectile_annoyingness":  10,
        "on_increase_sounds": [
          { "sound": "listening_angry", "condition" : "query.anger_level(this) >= 40" },
          { "sound": "listening", "condition" : "query.anger_level(this) >= 0" }
        ],
        "nuisance_filter": {
          "all_of": [
            { "test": "is_family", "subject": "other", "operator": "not", "value": "warden" },
            { "test": "is_family", "subject": "other", "operator": "not", "value": "inanimate" }
          ]
        }
      },
```

## Vanilla entities using `minecraft:angry`

- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
