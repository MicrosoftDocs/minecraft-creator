---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:preferred_path"
description: "Describes the minecraft:preferred_path entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:preferred_path

Specifies costing information for mobs that prefer to walk on preferred paths.


## Preferred Path Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| default_block_cost | 0 | Decimal number | Cost for non-preferred blocks | Iron Golem: `1.5` | 
| jump_cost | 0 | Integer number | Added cost for jumping up a node | Iron Golem: `5` | 
| max_fall_blocks | 3 | Integer number | Distance mob can fall without taking damage | Iron Golem: `1`, Warden: `20` | 
| preferred_path_blocks | *not set* | Array of [Preferred Path Blocks](#preferred-path-blocks) items | A list of block types with their associated pathfinding costs. Each entry specifies blocks and their cost value. | Iron Golem: `[{"cost":0,"blocks":["grass_path"]},{"cost":1,"blocks":["cobblestone","stone","granite","polished_granite","diorite","polished_diorite","andesite","polished_andesite","stone_bricks","mossy_stone_bricks","cracked_stone_bricks","chiseled_stone_bricks","sandstone","cut_sandstone","chiseled_sandstone","smooth_sandstone","mossy_cobblestone","smooth_stone_slab","sandstone_slab","cobblestone_slab","brick_slab","stone_brick_slab","quartz_slab","nether_brick_slab","red_sandstone_slab","purpur_slab","prismarine_slab","dark_prismarine_slab","prismarine_brick_slab","mossy_cobblestone_slab","smooth_sandstone_slab","red_nether_brick_slab","end_stone_brick_slab","smooth_red_sandstone_slab","polished_andesite_slab","andesite_slab","diorite_slab","polished_diorite_slab","granite_slab","polished_granite_slab","mossy_stone_brick_slab","smooth_quartz_slab","normal_stone_slab","cut_sandstone_slab","cut_red_sandstone_slab","smooth_stone_double_slab","sandstone_double_slab","cobblestone_double_slab","brick_double_slab","stone_brick_double_slab","quartz_double_slab","nether_brick_double_slab","red_sandstone_double_slab","purpur_double_slab","prismarine_double_slab","dark_prismarine_double_slab","prismarine_brick_double_slab","mossy_cobblestone_double_slab","smooth_sandstone_double_slab","red_nether_brick_double_slab","end_stone_brick_double_slab","smooth_red_sandstone_double_slab","polished_andesite_double_slab","andesite_double_slab","diorite_double_slab","polished_diorite_double_slab","granite_double_slab","polished_granite_double_slab","mossy_stone_brick_double_slab","smooth_quartz_double_slab","normal_stone_double_slab","cut_sandstone_double_slab","cut_red_sandstone_double_slab","oak_slab","spruce_slab","birch_slab","jungle_slab","acacia_slab","dark_oak_slab","oak_double_slab","spruce_double_slab","birch_double_slab","jungle_double_slab","acacia_double_slab","dark_oak_double_slab","oak_planks","spruce_planks","birch_planks","jungle_planks","acacia_planks","dark_oak_planks","brick_block","nether_brick","red_nether_brick","end_bricks","red_sandstone","cut_red_sandstone","chiseled_red_sandstone","smooth_red_sandstone","white_stained_glass","orange_stained_glass","magenta_stained_glass","light_blue_stained_glass","yellow_stained_glass","lime_stained_glass","pink_stained_glass","gray_stained_glass","light_gray_stained_glass","cyan_stained_glass","purple_stained_glass","blue_stained_glass","brown_stained_glass","green_stained_glass","red_stained_glass","black_stained_glass","glass","glowstone","prismarine","emerald_block","diamond_block","lapis_block","gold_block","redstone_block","purple_glazed_terracotta","white_glazed_terracotta","orange_glazed_terracotta","magenta_glazed_terracotta","light_blue_glazed_terracotta","yellow_glazed_terracotta","lime_glazed_terracotta","pink_glazed_terracotta","gray_glazed_terracotta","silver_glazed_terracotta","cyan_glazed_terracotta","blue_glazed_terracotta","brown_glazed_terracotta","green_glazed_terracotta","red_glazed_terracotta","black_glazed_terracotta"]},{"cost":50,"blocks":["bed","lectern","composter","grindstone","blast_furnace","smoker","fletching_table","cartography_table","brewing_stand","smithing_table","cauldron","barrel","loom","stonecutter"]}]` | 

## Preferred Path Blocks

#### Preferred Path Blocks Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| blocks | *not set* | Array of strings | Array of block identifiers that share this cost value. |  | 
| cost | *not set* | Integer number | The cost value for these blocks during pathfinding. Lower costs make paths more preferred. |  | 

## Samples

#### [Iron Golem](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/iron_golem.json)


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
        "granite",
        "polished_granite",
        "diorite",
        "polished_diorite",
        "andesite",
        "polished_andesite",
        "stone_bricks",
        "mossy_stone_bricks",
        "cracked_stone_bricks",
        "chiseled_stone_bricks",
        "sandstone",
        "cut_sandstone",
        "chiseled_sandstone",
        "smooth_sandstone",
        "mossy_cobblestone",
        "smooth_stone_slab",
        "sandstone_slab",
        "cobblestone_slab",
        "brick_slab",
        "stone_brick_slab",
        "quartz_slab",
        "nether_brick_slab",
        "red_sandstone_slab",
        "purpur_slab",
        "prismarine_slab",
        "dark_prismarine_slab",
        "prismarine_brick_slab",
        "mossy_cobblestone_slab",
        "smooth_sandstone_slab",
        "red_nether_brick_slab",
        "end_stone_brick_slab",
        "smooth_red_sandstone_slab",
        "polished_andesite_slab",
        "andesite_slab",
        "diorite_slab",
        "polished_diorite_slab",
        "granite_slab",
        "polished_granite_slab",
        "mossy_stone_brick_slab",
        "smooth_quartz_slab",
        "normal_stone_slab",
        "cut_sandstone_slab",
        "cut_red_sandstone_slab",
        "smooth_stone_double_slab",
        "sandstone_double_slab",
        "cobblestone_double_slab",
        "brick_double_slab",
        "stone_brick_double_slab",
        "quartz_double_slab",
        "nether_brick_double_slab",
        "red_sandstone_double_slab",
        "purpur_double_slab",
        "prismarine_double_slab",
        "dark_prismarine_double_slab",
        "prismarine_brick_double_slab",
        "mossy_cobblestone_double_slab",
        "smooth_sandstone_double_slab",
        "red_nether_brick_double_slab",
        "end_stone_brick_double_slab",
        "smooth_red_sandstone_double_slab",
        "polished_andesite_double_slab",
        "andesite_double_slab",
        "diorite_double_slab",
        "polished_diorite_double_slab",
        "granite_double_slab",
        "polished_granite_double_slab",
        "mossy_stone_brick_double_slab",
        "smooth_quartz_double_slab",
        "normal_stone_double_slab",
        "cut_sandstone_double_slab",
        "cut_red_sandstone_double_slab",
        "oak_slab",
        "spruce_slab",
        "birch_slab",
        "jungle_slab",
        "acacia_slab",
        "dark_oak_slab",
        "oak_double_slab",
        "spruce_double_slab",
        "birch_double_slab",
        "jungle_double_slab",
        "acacia_double_slab",
        "dark_oak_double_slab",
        "oak_planks",
        "spruce_planks",
        "birch_planks",
        "jungle_planks",
        "acacia_planks",
        "dark_oak_planks",
        "brick_block",
        "nether_brick",
        "red_nether_brick",
        "end_bricks",
        "red_sandstone",
        "cut_red_sandstone",
        "chiseled_red_sandstone",
        "smooth_red_sandstone",
        "white_stained_glass",
        "orange_stained_glass",
        "magenta_stained_glass",
        "light_blue_stained_glass",
        "yellow_stained_glass",
        "lime_stained_glass",
        "pink_stained_glass",
        "gray_stained_glass",
        "light_gray_stained_glass",
        "cyan_stained_glass",
        "purple_stained_glass",
        "blue_stained_glass",
        "brown_stained_glass",
        "green_stained_glass",
        "red_stained_glass",
        "black_stained_glass",
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

#### [Warden](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/warden.json)


```json
"minecraft:preferred_path": {
  "max_fall_blocks": 20
}
```
