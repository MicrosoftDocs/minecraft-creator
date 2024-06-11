---
author: iconicNurdle
ms.author: mikeam
title: Default Minecraft Block States and Traits
description: A listing of default Minecraft block states and traits
ms.service: minecraft-bedrock-edition
---

# Block States

| Block State Name| Type| Valid Values| Description |
|:-----------|:-----------|:-----------|:-----------|
| active| Boolean | True, False| Determines whether the block is active or not |
| age| Integer| 0 - 15| Represents the age of the block |
| age_bit| Boolean| True, False| Determines if saplings should grow |
| allow_underwater_bit| Boolean|  True, False| Determines if a TNT block works underwater |
| attached_bit| Boolean| True, False| Determines if a tripwire is attached to another tripwire |
| attachment| String|standing, hanging, side, multiple| Determines the type of attachment used by a bell or grindstone block |
| bamboo_leaf_size| String| no_leaves, small_leaves, large_leaves| Determines the size of bamboo leaves |
| bamboo_stalk_thickness| String|thin, thick| Determines the thickness of a bamboo stalk |
| big_dripleaf_tilt| String| none, unstable, partial_tilt, full_tilt| Determines the tilt state of big dripleaf block |
| bite_counter| Integer |0 - 6| Tracks how many bites of cake have been taken |
| books_stored| Integer |0 - 6| Determines how many books are stored in the chiseled bookshelf |
| brewing_stand_slot_a_bit| Boolean| True, False| Determines if a bottle is shown in slot a of the brewing stand |
| brewing_stand_slot_b_bit| Boolean| True, False| Determines if a bottle is shown in slot b of the brewing stand |
| brewing_stand_slot_c_bit| Boolean| True, False| Determines if a bottle is shown in slot c of the brewing stand |
| button_pressed_bit| Boolean| True, False| Determines if a button is in the pressed state or not |
| candles| Integer|  0 - 3| Describes how many extra candles are in the same block space |
| cauldron_liquid| String|water, lava| Determines the type of liquid in a cauldron |
| chemistry_table_type| String| compound_creator, material_reducer, element_constructor, lab_table| Determines the type of the work benches that are behind the edu features toggle |
| chisel_type| String| default, chiseled, lines, smooth| Determines the pattern of quartz and purpur blocks |
| cluster_count| Integer| 0 - 3| Describes how many sea pickles are in a cluster |
| color| String| white, orange, magenta, light_blue, yellow, lime, pink, gray, silver, cyan, purple, blue, brown, green, red, black| Determines the color of a block like wool |
| color_bit| Boolean| True, False| Sets if a torch is a colored torch block |
| conditional_bit| Boolean| True, False| Determines if a command block is conditional or not |
| coral_color| String| blue, pink, purple, red, yellow, blue dead, pink dead, red dead, yellow dead| Determines the color of a coral block |
| coral_direction| Integer| 0 - 3| Describes the rotation of coral fans |
| coral_hang_type_bit| Boolean| True, False| Describes the type of hanging for coral fans |
| covered_bit| Boolean|True, False| Describes if a top snow block is covering another block |
| cracked_state| String| no_cracks, cracked, max_cracked| Determines the cracked state of turtle eggs |
| crafting| Boolean| True, False| Describes if the block has just crafted|
| damage| String| undamaged, slightly_damaged, very_damaged, broken| Determines the state of damage of an Anvil |
| dead_bit| Boolean| True, False| Determines if coral, coral fans, or sea pickles are dead |
| direction| Integer| 0 - 3| Determines the North, South, East, and West direction of some blocks. 0 = South, 1 = West, 2 = North 3 = East |
| dirt_type| String| normal, coarse| Determines the dirt type of a block |
| disarmed_bit| Boolean| True, False| Determines if a tripwire is disarmed or not. |
| door_hinge_bit| Boolean|True, False| Determines if door's hinge is mirrored or not |
| double_plant_type| String| sunflower, syringa, grass, fern, rose, paeonia| Determines the type of a double plant block |
| drag_down| Boolean| True, False| Describes if bubble columns drag entities down or pushes them up |
| dripstone_thickness| String| tip, frustum, base, middle, merge| Determines the type of a pointed dripstone block |
| end_portal_eye_bit| Boolean| True, False| Determines if an end portal block has an Eye in it |
| explode_bit| Boolean| True, False| Determines if a TNT block should start its explode sequence |
| facing_direction| Integer| 0 - 5| Determines the Up, Down, North, South, East, and West direction of some blocks. 0 = Down, 1 = Up, 2 = North, 3 = South, 4 = West, 5 = East |
| fill_level| Integer| 0 - 6| Determines fill level of a cauldron block |
| flower_type| String| poppy, orchid, allium, houstonia, tulip_red, tulip_orange, tulip_white, tulip_pink, oxeye, cornflower, lily_of_the_valley| Determines the type of a flower block |
| ground_sign_direction| Integer| 0 - 15| Describes the rotation of signs and standing banners |
| growth| Integer| 0 - 7| Determines the growth level of crops |
| hanging| Boolean| True, False| Describes if a lantern block is hanging or not |
| head_piece_bit| Boolean| True, False| Determines if a block is the pillow side of a bed |
| height| Integer| 0 - 7| Determines the height of a top snow block |
| huge_mushroom_bits| Integer| 0 - 15| Determines which huge mushroom block to be displayed |
| in_wall_bit| Boolean| True, False| Determines if a fence block is connected to a wall block |
| infiniburn_bit| Boolean| True, False| Determines if a block should burn infinitely |
| item_frame_map_bit| Boolean| True, False| Describes if an item frame block has a map in it |
| item_frame_photo_bit| Boolean| True, False| Describes if an item frame block has a photo in it |
| liquid_depth| Integer| 0 - 15| Determines the level of liquid blocks |
| lit| Boolean| True, False| Determines if a block is lit or not |
| moisturized_amount| Integer| 0 - 7| Determines the moisture level of crops |
| monster_egg_stone_type| String| stone, cobblestone, stone_brick, mossy_stone_brick, cracked_stone_brick, chiseled_stone_brick| Determines the stone type of a monster egg block |
| new_leaf_type| String| acacia, dark_oak| Determines the leaf type of some blocks |
| new_log_type| String| acacia, dark_oak| Determines the wood type of some blocks |
| no_drop_bit| Boolean| True, False| Determines if a skull block should drop loot |
| occupied_bit| Boolean| True, False| Determines if a bed block is occupied |
| old_leaf_type| String| oak, spruce, birch, jungle| Determines the leaf type of some blocks |
| old_log_type| String| oak, spruce, birch, jungle| Determines the wood type of some blocks |
| ominous| Boolean| True, False| Determines if the block is the ominous version|
| open_bit| Boolean| True, False| Determines if a door, gate, or trapdoor is open |
| orientation| Integer| 0-11| A 12-variant orientation|
| output_lit_bit| Boolean| True, False| Determines if a Comparator's output is lit |
| output_subtract_bit| Boolean| True, False| Determines if a Comparator is set to subtract output |
| persistent_bit| Boolean| True, False| Determines if a leaf block is persistent |
| portal_axis| String| unknown, x, z| Determines the orientation of portal blocks |
| powered_bit| Boolean| True, False| Shows when an observer or tripwire sends a redstone signal |
| rail_data_bit| Boolean| True, False| Shows if a rail has a redstone signal |
| rail_direction| Integer| 0 - 8| Determines the orientation of a placed rail block |
| redstone_signal| Integer| 0 - 15| Determines the signal strength of a redstone signal |
| repeater_delay| Integer| 0 - 3| Determines the amount of delay of a repeater |
| sand_stone_type| String| default, hieroglyphs, cut, smooth| Determines the pattern of a sandstone block |
| sand_type| String| normal, red| Determines the sand type of a block |
| sapling_type| String| evergreen, birch, jungle, acacia, roofed_oak| Determines the type of the sapling block |
| sea_grass_type| String| default, double_top, double_bot| Determines the type of a seagrass block |
| sponge_type| String| dry, wet| Determines the type of a sponge block |
| stability| Integer| 0 - 5| Determines the stability of a scaffolding block |
| stability_check| Boolean| True, False| Describes if a scaffolding block has been checked for stability |
| stone_brick_type| String| default, mossy, cracked, chiseled, smooth| Determines the type of a stone brick block |
| stone_slab_type| String| smooth_stone, sandstone, wood, cobblestone, brick, stone_brick, quartz, nether_brick| Determines the type of some stone slab blocks |
| stone_slab_type_2| String| red_sandstone, purpur, prismarine_rough, prismarine_dark, prismarine_brick, mossy_cobblestone, smooth_sandstone, red_nether_brick| Determines the type of some stone slab blocks |
| stone_slab_type_3| String| end_stone_brick, smooth_red_sandstone, polished_andesite, andesite, diorite, polished_diorite, granite, polished_granite| Determines the type of some stone slab blocks |
| stone_slab_type_4| String| mossy_stone_brick, smooth_quartz, stone, cut_sandstone, cut_red_sandstone| Determines the type of some stone slab blocks |
| stone_type| String| stone, granite, granite_smooth, diorite, diorite_smooth, andesite, andesite_smooth| Determines the stone type of a block |
| stripped_bit| Boolean| True, False| Describes if a wood log has been stripped of bark |
| structure_block_type| String| data, save, load, corner, invalid, export| Determines the state of a structure block |
| structure_void_type| String| void, air| Determines which void mode to draw for structure blocks |
| suspended_bit| Boolean| True, False| Indicates if a tripwire block is suspended |
| tall_grass_type| String| default, tall, fern, snow| Determines the type of a tall grass block |
| toggle_bit| Boolean| True, False| Determines if a hopper block is active or not |
| top_slot_bit| Boolean| True, False| Shows if a slab is the top half of the block or not |
| torch_facing_direction| String| unknown, west, east, north, south, top| Determines the block that a torch is attached to in relation to its position |
| trial_spawner_state| Integer| 0-5| Determines the block state for the trial spawner |
| triggered_bit| Boolean| True, False| Determines if a dispenser is triggered |
| turtle_egg_count| String| one_egg, two_egg, three_egg, four_egg| Determines the amount of turtle eggs in an egg block |
| update_bit| Boolean| True, False| Determines if a leaf block or flower block should be updated |
| upper_block_bit| Boolean| True, False| Determines if a block is the upper half of an object like a door or a tall plant |
| upside_down_bit| Boolean| True, False| Determines if a stair block or trapdoor block is upside down |
| vine_direction_bits| Integer| 0 - 15| Determines the facing direction for vines, works like the facing_direction block state |
| wall_block_type| String| cobblestone, mossy_cobblestone, granite, diorite, andesite, sandstone, brick, stone_brick, mossy_stone_brick, nether_brick, end_brick, prismarine, red_sandstone, red_nether_brick| Determines the type of a stone used in a wall block |
| wall_connection_type_east| String| none, short, tall| Determines what kind of connection a wall has to the east |
| wall_connection_type_north| String| none, short, tall| Determines what kind of connection a wall has to the north |
| wall_connection_type_south| String| none, short, tall| Determines what kind of connection a wall has to the south |
| wall_connection_type_west| String| none, short, tall| Determines what kind of connection a wall has to the west |
| wall_post_bit| Boolean| True, False| Determines if a wall should contain a post |
| weirdo_direction| Integer | 0 - 3| Describes the rotation of stairs |
| wood_type| String| oak, spruce, birch, jungle, acacia, dark_oak| Determines the wood type of a block |

## Block Traits

List of all Block Traits and the Block States they include.

| Block Trait| Type | Valid Values | Description |
|:----------|:---------|:----------|:--------|
| "minecraft:placement_direction"| JSON Object|  |Adds the "minecraft:cardinal_direction" and/or "minecraft:facing_direction" states and setter function to the block. The values of these states are set when the block is placed. `enabled_states` array specifies which states to enable. Must specify at least one.|
| minecraft:cardinal_direction| String| north, south, east, west| Defines the cardinal placement direction of a block. |
| minecraft:facing_direction| String| down, up, north, south, east, west | Defines all placement directions of a block. |
| y_rotation_offset| Decimal |0.0 - 360.0 | The y rotation offset to apply to the block. Must be [0.0, 90.0, 180.0, 270.0]. Default is 0, meaning if the player is facing north, the "minecraft:cardinal_direction" and/or minecraft:facing_direction state will be north. |
| "minecraft:placement_position"| PlacementPosition| | Adds the "minecraft:block_face" and/or "minecraft:vertical_half" BlockStates. The value of these state(s) are set when the block is placed. `enabled_states` array specifies which states to enable. Must specify at least one.|
| minecraft:block_face| String| down, up, north, south, east, west| Which block face the player placed the block on. |
| minecraft:vertical_half| String| bottom, top| Which vertical half of the space the block is placed in. |

### Block trait example

```json
{
  "format_version": "1.20.0",
  "minecraft:block": {
    "description": {
      "identifier": "test:placement_direction_trait_block",
      "traits" : {
        "minecraft:placement_direction": {
            "enabled_states": ["minecraft:cardinal_direction"], // 4 permutations
            "y_rotation_offset": 0.0 // 0.0-360.0
          }
      }
    },
    "permutations": [
       {
          "condition": "query.block_state('minecraft:cardinal_direction') == 1", // west
          "components": {
              // ... 
          }
        }
    ]
  }
}
```
