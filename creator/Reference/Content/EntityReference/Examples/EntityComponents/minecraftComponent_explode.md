---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:explode
description: "A reference document detailing the 'explode' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:explode

`minecraft:explode` defines how the entity explodes.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| allow_underwater | True | Boolean | If true, the explosion will affect blocks and entities under water. |
| breaks_blocks | True | Boolean | If true, the explosion will destroy blocks in the explosion radius. |
| causes_fire | False | Boolean | If true, blocks in the explosion radius will be set on fire. |
| damage_scaling | 1.0 | Decimal| A scale factor applied to the explosion's damage to entities. A value of 0.0 prevents the explosion from dealing any damage. Negative values cause the explosion to heal entities instead. |
| fire_affected_by_griefing | False | Boolean | If true, whether the explosion causes fire is affected by the mob griefing game rule. |
| fuse_length | [0.0, 0.0] | Range [a, b] | The range for the random amount of time the fuse will be lit before exploding; a negative value means the explosion will be immediate. |
| fuse_lit | False| Boolean | If true, the fuse is already lit when this component is added to the entity. |
| knockback_scaling| 1.0 | Decimal| A scale factor applied to the knockback force caused by the explosion. |
| max_resistance| 3.40282e+38 | Decimal | A blocks explosion resistance will be capped at this value when an explosion occurs. |
| negates_fall_damage | False | Boolean | Defines whether the explosion should apply fall damage negation to Players above the point of collision. |
| particle_effect | explosion | String | The name of the particle effect to use. The accepted strings are 'explosion', 'wind_burst', or 'breeze_wind_burst'.|
| power | 3.0 | Decimal | The radius of the explosion in blocks and the amount of damage the explosion deals. |
| sound_effect | explode | String | The name of the sound effect played when the explosion triggers. |
| toggles_blocks | False | Boolean | If true, the explosion will toggle blocks in the explosion radius. |

> [!TIP]
> `max_resistance` is set to a default value of 3.40282e+38. An alternative to using this number is the string "infinite" to achieve the same result.

## Example

```json
"minecraft:explode":{
    "breaks_blocks": true,
    "causes_fire": false,
    "destroy_affected_by_griefing": false,
    "fire_affected_by_griefing": false,
    "fuse_length": [0.0, 0.0],
    "fuse_lit": false,
    "max_resistance": 3.40282e+38,
    "power": 3
}
```

## Vanilla entities examples

### creeper

```json
"minecraft:explode": {
          "fuse_length": 1.5,
          "fuse_lit": true,
          "power": 3,
          "causes_fire": false,
          "destroy_affected_by_griefing": true
        }
```

## Vanilla entities using `minecraft:explode`

- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/fireball.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
- [tnt](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt.md)
- [wither_skull_dangerous](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull_dangerous.md)
- [wither_skull](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull.md)
