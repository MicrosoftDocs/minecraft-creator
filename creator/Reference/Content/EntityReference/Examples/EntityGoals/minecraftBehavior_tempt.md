---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.tempt
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.tempt

`minecraft:behavior.tempt` allows an entity to be tempted by a set item.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| can_get_scared| false| Boolean| If true, the mob can stop being tempted if the player moves too fast while close to this mob. |
| can_tempt_vertically| false| Boolean| If true, vertical distance to the player will be considered when tempting. |
| can_tempt_while_ridden| false| Boolean| If true, the mob can be tempted even if it has a passenger riding it. |
| items| | List| List of items this mob is tempted by |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
| sound_interval| [0.0, 0.0]| Range [a, b] |Range of random ticks to wait between tempt sounds. |
| speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal. |
| tempt_sound| | String | Sound to play while the mob is being tempted. |
| within_radius| 0.0| Decimal| Distance in blocks this mob can get tempted by a player holding an item they like. |

## Example

```json
"minecraft:behavior.tempt":{
    "priority": 2,
    "can_get_scared":true,
    "can_tempt_vertically": false,
    "can_tempt_while_ridden": true,
    "speed_multiplier": 1.3,
    "within_radius": 5.0,
    "items":["carrot"]
}
```

## Vanilla entities examples

### strider

```json
"minecraft:behavior.tempt": {
        "priority": 5,
        "speed_multiplier": 1.2,
        "items": [
          "warped_fungus",
          "warped_fungus_on_a_stick"
        ],
        "can_tempt_while_ridden": true,
        "tempt_sound": "tempt",
        "sound_interval": {
          "range_min": 2.0,
          "range_max": 5.0
        }
      },

```

## Vanilla entities using `minecraft:behavior.tempt`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
