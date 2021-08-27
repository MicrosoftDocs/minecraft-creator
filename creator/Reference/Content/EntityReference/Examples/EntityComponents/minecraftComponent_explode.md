---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:explode
ms.prod: gaming
---

# Entity Documentation - minecraft:explode

`minecraft:explode` defines how the entity explodes.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| breaks_blocks| True| Boolean| If true, the explosion will destroy blocks in the explosion radius. |
| causes_fire| False| Boolean| If true, blocks in the explosion radius will be set on fire. |
| destroy_affected_by_griefing| False| Boolean| If true, whether the explosion breaks blocks is affected by the mob griefing game rule. |
| fire_affected_by_griefing| False| Boolean| If true, whether the explosion causes fire is affected by the mob griefing game rule. |
| fuse_length| [0.0, 0.0]| Range [a, b]| The range for the random amount of time the fuse will be lit before exploding, a negative value means the explosion will be immediate. |
| fuse_lit| False| Boolean| If true, the fuse is already lit when this component is added to the entity. |
| max_resistance| 3.40282e+38| Decimal| A blocks explosion resistance will be capped at this value when an explosion occurs. |
| power| 3| Decimal| The radius of the explosion in blocks and the amount of damage the explosion deals. |

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

### tnt

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/tnt.json" range="34-39":::

## Vanilla entities using `minecraft:explode`

- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/fireball.md)
- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
- [tnt](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt.md)
- [wither_skull_dangerous](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull_dangerous.md)
- [wither_skull](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull.md)