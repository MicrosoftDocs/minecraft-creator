---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.avoid_mob_type
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.avoid_mob_type

`minecraft:behavior.avoid_mob_type` allows the entity to run away from other entities that meet the criteria specified.

## Parameters

| Name| Default Value | Type | Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| avoid_mob_sound| | String| The sound event to play when the mob is avoiding another mob. |
| avoid_target_xz| 16 | Integer| The next target position the entity chooses to avoid another entity will be chosen within this XZ Distance. |
| avoid_target_y| 7 | Integer | The next target position the entity chooses to avoid another entity will be chosen within this Y Distance. |
| entity_types| | Minecraft Filter| The list of conditions another entity must meet to be a valid target to avoid. |
| ignore_visibilty| false | Boolean | Whether or not to ignore direct line of sight while this entity is running away from other specified entities. |
| max_dist| 3.0 | Decimal | Maximum distance to look for an avoid target for the entity. |
| max_flee| 10.0 | Decimal | How many blocks away from its avoid target the entity must be for it to stop fleeing from the avoid target. |
| on_escape_event| | Trigger | Event that is triggered when escaping from a mob. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| probability_per_strength| 1.0 | Decimal | Percent chance this entity will stop avoiding another entity based on that entity's strength, where 1.0 = 100%. |
| remove_target| false | Boolean | Determine if we should remove target when fleeing or not. |
| sound_interval| [3.0, 8.0] | Range [a, b] | The range of time in seconds to randomly wait before playing the sound again. |
| sprint_distance| 7.0 | Decimal | How many blocks within range of its avoid target the entity must be for it to begin sprinting away from the avoid target. |
| sprint_speed_multiplier| 1.0 | Decimal | Multiplier for sprint speed. 1.0 means keep the regular speed, while higher numbers make the sprint speed faster. |
| walk_speed_multiplier| 1.0 | Decimal | Multiplier for walking speed. 1.0 means keep the regular speed, while higher numbers make the walking speed faster. |

## Example

```json
 "minecraft:behavior.avoid_mob_type": {
        "priority": 6,
        "entity_types": [
        {
            "filters": {
            "test": "is_family",
            "subject": "other",
            "value": "player"
            },
            "max_dist": 10,
            "walk_speed_multiplier": 0.8,
            "sprint_speed_multiplier": 1.33
        }
    ]
}
```

## Vanilla entities examples

### piglin

```json
 "minecraft:behavior.avoid_mob_type": {
        "priority": 4,
        "remove_target": true,
        "entity_types": [
          {
            "filters": {
              "any_of": [
                {
                  "test": "is_family",
                  "subject": "other",
                  "value": "zombie_pigman"
                }
              ]
            },
            "max_dist": 6
          },
          {
            "filters": {
              "any_of": [
                {
                  "test": "is_family",
                  "subject": "other",
                  "value": "zoglin"
                }
              ]
            },
            "max_dist": 6,
            "sprint_speed_multiplier": 1.2,
            "check_if_outnumbered": true
          }
        ],
        "on_escape_event": {
          "event": "become_calm_event",
          "target": "self"
        },
        "avoid_mob_sound": "retreat",
        "sound_interval": {
          "range_min": 2.0,
          "range_max": 5.0
        }
      }
```

## Vanilla entities using `avoid_mob_type`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [salmon](../../../../Source/VanillaBehaviorPack_Snippets/entities/salmon.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [tropicalfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/tropicalfish.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
