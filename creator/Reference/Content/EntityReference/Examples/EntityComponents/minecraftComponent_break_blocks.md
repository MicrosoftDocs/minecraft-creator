---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:break_blocks"
description: "Describes the minecraft:break_blocks entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:break_blocks

Specifies the blocks that the entity can break as it moves around.


## Break Blocks Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| breakable_blocks | *not set* | Array of strings | A list of the blocks that can be broken as this entity moves around. | Ravager: `["bamboo","bamboo_sapling","beetroot","brown_mushroom","carrots","carved_pumpkin","chorus_flower","chorus_plant","deadbush","double_plant","leaves","leaves2","lit_pumpkin","melon_block","melon_stem","potatoes","pumpkin","pumpkin_stem","red_flower","red_mushroom","crimson_fungus","warped_fungus","reeds","sapling","snow_layer","sweet_berry_bush","tallgrass","turtle_egg","vine","waterlily","wheat","dandelion","azalea","flowering_azalea","azalea_leaves","azalea_leaves_flowered","cave_vines","cave_vines_body_with_berries","cave_vines_head_with_berries","small_dripleaf_block","big_dripleaf","spore_blossom","hanging_roots","mangrove_leaves","pale_hanging_moss","cherry_leaves","pale_oak_leaves","firefly_bush","bush"]` | 

## Samples

#### [Ravager](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/ravager.json)


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
    "dandelion",
    "azalea",
    "flowering_azalea",
    "azalea_leaves",
    "azalea_leaves_flowered",
    "cave_vines",
    "cave_vines_body_with_berries",
    "cave_vines_head_with_berries",
    "small_dripleaf_block",
    "big_dripleaf",
    "spore_blossom",
    "hanging_roots",
    "mangrove_leaves",
    "pale_hanging_moss",
    "cherry_leaves",
    "pale_oak_leaves",
    "firefly_bush",
    "bush"
  ]
}
```
