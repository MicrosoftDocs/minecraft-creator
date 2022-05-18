---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:break_blocks
ms.prod: gaming
---

# Entity Documentation - minecraft:break_blocks

`minecraft:break_blocks` specifies the blocks that the entity can break as it moves around.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|breakable_blocks|*not set* | List|  A list of the blocks that can be broken as this entity moves around |

## Example

```json
"minecraft:break_blocks":{
    "breakable_blocks": [
        "grass",
        "dirt"
    ]
}
```

## Vanilla entities examples

### ravager

```json
"minecraft:break_blocks": {
    "breakable_blocks": [
        "bamboo",
        "bamboo_sapling",
        "beetroot",
        "brown_mushroom",
        "carrots",
        "carved_pumpkin",
        "chorus_flower",
        "chorus_plant",
        "deadbush",
        "double_plant",
        "leaves",
        "leaves2",
        "lit_pumpkin",
        "melon_block",
        "melon_stem",
        "potatoes",
        "pumpkin",
        "pumpkin_stem",
        "red_flower",
        "red_mushroom",
        "crimson_fungus",
        "warped_fungus",
        "reeds",
        "sapling",
        "snow_layer",
        "sweet_berry_bush",
        "tallgrass",
        "turtle_egg",
        "vine",
        "waterlily",
        "wheat",
        "yellow_flower"
    ]
}
```

## Vanilla entities using `minecraft:break_blocks`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
