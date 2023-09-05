---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:preferred_path
description: "A reference document detailing the 'preferred_path' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:preferred_path

`minecraft:preferred_path` specifies costing information for entities that prefer to walk on preferred paths.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| default_block_cost| 0| Decimal| Cost for non-preferred blocks |
| jump_cost| 0| Integer| Added cost for jumping up a node |
| max_fall_blocks| 3| Integer| Distance entity can fall without taking damage |
| preferred_path_blocks| *not set*| List| A list of blocks with their associated cost |

## Example

```json
"minecraft:preferred_path":{
    "default_block_cost": 2.0,
    "jump_cost": 0,
    "max_fall_blocks": 3,
    "preferred_path_blocks": []
}
```

## Vanilla entities examples

### iron golem

```json
"minecraft:preferred_path": {
        "max_fall_blocks": 1,
        "jump_cost": 5,
        "default_block_cost": 1.5,
        "preferred_path_blocks": [
          {
            "cost": 0,
            "blocks": [
              "grass_path"
            ]
          },
          {
            "cost": 1,
            "blocks": [
              "cobblestone",
              "stone",
              "stonebrick",
              "sandstone",
              "mossy_cobblestone",
              "stone_slab",
              "stone_slab2",
              "stone_slab3",
              "stone_slab4",
              "double_stone_slab",
              "double_stone_slab2",
              "double_stone_slab3",
              "double_stone_slab4",
              "wooden_slab",
              "double_wooden_slab",
              "planks",
              "brick_block",
              "nether_brick",
              "red_nether_brick",
              "end_bricks",
              "red_sandstone",
              "stained_glass",
              "glass",
              "glowstone",
              "prismarine",
              "emerald_block",
              "diamond_block",
              "lapis_block",
              "gold_block",
              "redstone_block",
              "purple_glazed_terracotta",
              "white_glazed_terracotta",
              "orange_glazed_terracotta",
              "magenta_glazed_terracotta",
              "light_blue_glazed_terracotta",
              "yellow_glazed_terracotta",
              "lime_glazed_terracotta",
              "pink_glazed_terracotta",
              "gray_glazed_terracotta",
              "silver_glazed_terracotta",
              "cyan_glazed_terracotta",
              "blue_glazed_terracotta",
              "brown_glazed_terracotta",
              "green_glazed_terracotta",
              "red_glazed_terracotta",
              "black_glazed_terracotta"
            ]
          },
          {
            "cost": 50,
            "blocks": [
              "bed",
              "lectern",
              "composter",
              "grindstone",
              "blast_furnace",
              "smoker",
              "fletching_table",
              "cartography_table",
              "brewing_stand",
              "smithing_table",
              "cauldron",
              "barrel",
              "loom",
              "stonecutter"
            ]
          }
        ]
      }
```

## Vanilla entities using `minecraft:preferred_path`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
