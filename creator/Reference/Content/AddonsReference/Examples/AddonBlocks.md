---
author: docsbryce
ms.author: v-bbortree
title: Addons Documentation - Blocks
ms.prod: gaming
---

# Addon - Blocks

Listed below are the available blocks for use in Minecraft: Bedrock Edition.

> [!NOTE]
> To learn more about how blocks function in Minecraft: Bedrock Edition, please take a look at the [Block JSON Documentation](../../BlockReference/index.yml)

## BlockStates

| Block State Name| Type| Valid Values| Description |
|:-----------|:-----------|:-----------|:-----------|
| active| Boolean | True, False| Determines whether the block is active or not |
| age| Integer| 0 - 15| Represents the age of the block |
| age_bit| Boolean| True, False| Determines if saplings should grow |
| allow_underwater_bit| Boolean|  True, False| Determines if a TNT block works underwater |
| attached_bit| Boolean| True, False| Determines if a tripwire is attached to another tripwire |
|  attachment| String|standing, hanging, side, multiple| Determines the type of attachment used by a bell or grindstone block |
| bamboo_leaf_size| String| no_leaves, small_leaves, large_leaves| Determines the size of bamboo leaves |
| bamboo_stalk_thickness| String|thin, thick| Determines the thickness of a bamboo stalk |
| big_dripleaf_tilt| String| none, unstable, partial_tilt, full_tilt| Determines the tilt state of big dripleaf block |
| bite_counter| Integer |0 - 6| Tracks how many bites of cake have been taken |
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
| open_bit| Boolean| True, False| Determines if a door, gate, or trapdoor is open |
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
| triggered_bit| Boolean| True, False| Determines if a dispenser is triggered |
| turtle_egg_count| String| one_egg, two_egg, three_egg, four_egg| Determines the amount of turtle eggs in an egg block |
| update_bit| Boolean| True, False| Determines if a leaf block or flower block should be updated |
| upper_block_bit| Boolean| True, False| Determines if a block is the upper half of an object like a door or a tall plant |
| upside_down_bit| Boolean| True, False| Determines if a stair block or trapdoor block is upsidedown |
| vine_direction_bits| Integer| 0 - 15| Determines the facing direction for vines, works like the facing_direction blockstate |
| wall_block_type| String| cobblestone, mossy_cobblestone, granite, diorite, andesite, sandstone, brick, stone_brick, mossy_stone_brick, nether_brick, end_brick, prismarine, red_sandstone, red_nether_brick| Determines the type of a stone used in a wall block |
| wall_connection_type_east| String| none, short, tall| Determines what kind of connection a wall has to the east |
| wall_connection_type_north| String| none, short, tall| Determines what kind of connection a wall has to the north |
| wall_connection_type_south| String| none, short, tall| Determines what kind of connection a wall has to the south |
| wall_connection_type_west| String| none, short, tall| Determines what kind of connection a wall has to the west |
| wall_post_bit| Boolean| True, False| Determines if a wall should contain a post |
| weirdo_direction| Integer | 0 - 3| Describes the rotation of stairs |
| wood_type| String| oak, spruce, birch, jungle, acacia, dark_oak| Determines the wood type of a block |

## List of Blocks

| Name |
|:-----------|
| minecraft:acacia_button |
| minecraft:acacia_door |
| minecraft:acacia_fence_gate |
| minecraft:acacia_pressure_plate |
| minecraft:acacia_stairs |
| minecraft:acacia_standing_sign |
| minecraft:acacia_trapdoor |
| minecraft:acacia_wall_sign |
| minecraft:activator_rail |
| minecraft:air |
| minecraft:allow |
| minecraft:amethyst_block |
| minecraft:amethyst_cluster |
| minecraft:ancient_debris |
| minecraft:andesite_stairs |
| minecraft:anvil |
| minecraft:azalea |
| minecraft:azalea_leaves |
| minecraft:azalea_leaves_flowered |
| minecraft:bamboo |
| minecraft:bamboo_sapling |
| minecraft:barrel |
| minecraft:barrier |
| minecraft:basalt |
| minecraft:beacon |
| minecraft:bed |
| minecraft:bedrock |
| minecraft:bee_nest |
| minecraft:beehive |
| minecraft:beetroot |
| minecraft:bell |
| minecraft:big_dripleaf |
| minecraft:birch_button |
| minecraft:birch_door |
| minecraft:birch_fence_gate |
| minecraft:birch_pressure_plate |
| minecraft:birch_stairs |
| minecraft:birch_standing_sign |
| minecraft:birch_trapdoor |
| minecraft:birch_wall_sign |
| minecraft:black_candle |
| minecraft:black_candle_cake |
| minecraft:black_glazed_terracotta |
| minecraft:blackstone |
| minecraft:blackstone_double_slab |
| minecraft:blackstone_slab |
| minecraft:blackstone_stairs |
| minecraft:blackstone_wall |
| minecraft:blast_furnace |
| minecraft:blue_candle |
| minecraft:blue_candle_cake |
| minecraft:blue_glazed_terracotta |
| minecraft:blue_ice |
| minecraft:bone_block |
| minecraft:bookshelf |
| minecraft:border_block |
| minecraft:brewing_stand |
| minecraft:brick_block |
| minecraft:brick_stairs |
| minecraft:brown_candle |
| minecraft:brown_candle_cake |
| minecraft:brown_glazed_terracotta |
| minecraft:brown_mushroom |
| minecraft:brown_mushroom_block |
| minecraft:bubble_column |
| minecraft:budding_amethyst |
| minecraft:cactus |
| minecraft:cake |
| minecraft:calcite |
| minecraft:camera |
| minecraft:campfire |
| minecraft:candle |
| minecraft:candle_cake |
| minecraft:carpet |
| minecraft:carrots |
| minecraft:cartography_table |
| minecraft:carved_pumpkin |
| minecraft:cauldron |
| minecraft:cave_vines |
| minecraft:cave_vines_body_with_berries |
| minecraft:cave_vines_head_with_berries |
| minecraft:chain |
| minecraft:chain_command_block |
| minecraft:chemical_heat |
| minecraft:chemistry_table |
| minecraft:chest |
| minecraft:chiseled_deepslate |
| minecraft:chiseled_nether_bricks |
| minecraft:chiseled_polished_blackstone |
| minecraft:chorus_flower |
| minecraft:chorus_plant |
| minecraft:clay |
| minecraft:client_request_placeholder_block |
| minecraft:coal_block |
| minecraft:coal_ore |
| minecraft:cobbled_deepslate |
| minecraft:cobbled_deepslate_double_slab |
| minecraft:cobbled_deepslate_slab |
| minecraft:cobbled_deepslate_stairs |
| minecraft:cobbled_deepslate_wall |
| minecraft:cobblestone |
| minecraft:cobblestone_wall |
| minecraft:cocoa |
| minecraft:colored_torch_bp |
| minecraft:colored_torch_rg |
| minecraft:command_block |
| minecraft:composter |
| minecraft:concrete |
| minecraft:concrete_powder |
| minecraft:conduit |
| minecraft:copper_block |
| minecraft:copper_ore |
| minecraft:coral |
| minecraft:coral_block |
| minecraft:coral_fan |
| minecraft:coral_fan_dead |
| minecraft:coral_fan_hang |
| minecraft:coral_fan_hang2 |
| minecraft:coral_fan_hang3 |
| minecraft:cracked_deepslate_bricks |
| minecraft:cracked_deepslate_tiles |
| minecraft:cracked_nether_bricks |
| minecraft:cracked_polished_blackstone_bricks |
| minecraft:crafting_table |
| minecraft:crimson_button |
| minecraft:crimson_door |
| minecraft:crimson_double_slab |
| minecraft:crimson_fence |
| minecraft:crimson_fence_gate |
| minecraft:crimson_fungus |
| minecraft:crimson_hyphae |
| minecraft:crimson_nylium |
| minecraft:crimson_planks |
| minecraft:crimson_pressure_plate |
| minecraft:crimson_roots |
| minecraft:crimson_slab |
| minecraft:crimson_stairs |
| minecraft:crimson_standing_sign |
| minecraft:crimson_stem |
| minecraft:crimson_trapdoor |
| minecraft:crimson_wall_sign |
| minecraft:crying_obsidian |
| minecraft:cut_copper |
| minecraft:cut_copper_slab |
| minecraft:cut_copper_stairs |
| minecraft:cyan_candle |
| minecraft:cyan_candle_cake |
| minecraft:cyan_glazed_terracotta |
| minecraft:dark_oak_button |
| minecraft:dark_oak_door |
| minecraft:dark_oak_fence_gate |
| minecraft:dark_oak_pressure_plate |
| minecraft:dark_oak_stairs |
| minecraft:dark_oak_trapdoor |
| minecraft:dark_prismarine_stairs |
| minecraft:darkoak_standing_sign |
| minecraft:darkoak_wall_sign |
| minecraft:daylight_detector |
| minecraft:daylight_detector_inverted |
| minecraft:deadbush |
| minecraft:deepslate |
| minecraft:deepslate_brick_double_slab |
| minecraft:deepslate_brick_slab |
| minecraft:deepslate_brick_stairs |
| minecraft:deepslate_brick_wall |
| minecraft:deepslate_bricks |
| minecraft:deepslate_coal_ore |
| minecraft:deepslate_copper_ore |
| minecraft:deepslate_diamond_ore |
| minecraft:deepslate_emerald_ore |
| minecraft:deepslate_gold_ore |
| minecraft:deepslate_iron_ore |
| minecraft:deepslate_lapis_ore |
| minecraft:deepslate_redstone_ore |
| minecraft:deepslate_tile_double_slab |
| minecraft:deepslate_tile_slab |
| minecraft:deepslate_tile_stairs |
| minecraft:deepslate_tile_wall |
| minecraft:deepslate_tiles |
| minecraft:deny |
| minecraft:detector_rail |
| minecraft:diamond_block |
| minecraft:diamond_ore |
| minecraft:diorite_stairs |
| minecraft:dirt |
| minecraft:dirt_with_roots |
| minecraft:dispenser |
| minecraft:double_cut_copper_slab |
| minecraft:double_plant |
| minecraft:double_block_slab |
| minecraft:double_block_slab2 |
| minecraft:double_block_slab3 |
| minecraft:double_block_slab4 |
| minecraft:double_wooden_slab |
| minecraft:dragon_egg |
| minecraft:dried_kelp_block |
| minecraft:dripstone_block |
| minecraft:dropper |
| minecraft:element_0 |
| minecraft:element_1 |
| minecraft:element_10 |
| minecraft:element_100 |
| minecraft:element_101 |
| minecraft:element_102 |
| minecraft:element_103 |
| minecraft:element_104 |
| minecraft:element_105 |
| minecraft:element_106 |
| minecraft:element_107 |
| minecraft:element_108 |
| minecraft:element_109 |
| minecraft:element_11 |
| minecraft:element_110 |
| minecraft:element_111 |
| minecraft:element_112 |
| minecraft:element_113 |
| minecraft:element_114 |
| minecraft:element_115 |
| minecraft:element_116 |
| minecraft:element_117 |
| minecraft:element_118 |
| minecraft:element_12 |
| minecraft:element_13 |
| minecraft:element_14 |
| minecraft:element_15 |
| minecraft:element_16 |
| minecraft:element_17 |
| minecraft:element_18 |
| minecraft:element_19 |
| minecraft:element_2 |
| minecraft:element_20 |
| minecraft:element_21 |
| minecraft:element_22 |
| minecraft:element_23 |
| minecraft:element_24 |
| minecraft:element_25 |
| minecraft:element_26 |
| minecraft:element_27 |
| minecraft:element_28 |
| minecraft:element_29 |
| minecraft:element_3 |
| minecraft:element_30 |
| minecraft:element_31 |
| minecraft:element_32 |
| minecraft:element_33 |
| minecraft:element_34 |
| minecraft:element_35 |
| minecraft:element_36 |
| minecraft:element_37 |
| minecraft:element_38 |
| minecraft:element_39 |
| minecraft:element_4 |
| minecraft:element_40 |
| minecraft:element_41 |
| minecraft:element_42 |
| minecraft:element_43 |
| minecraft:element_44 |
| minecraft:element_45 |
| minecraft:element_46 |
| minecraft:element_47 |
| minecraft:element_48 |
| minecraft:element_49 |
| minecraft:element_5 |
| minecraft:element_50 |
| minecraft:element_51 |
| minecraft:element_52 |
| minecraft:element_53 |
| minecraft:element_54 |
| minecraft:element_55 |
| minecraft:element_56 |
| minecraft:element_57 |
| minecraft:element_58 |
| minecraft:element_59 |
| minecraft:element_6 |
| minecraft:element_60 |
| minecraft:element_61 |
| minecraft:element_62 |
| minecraft:element_63 |
| minecraft:element_64 |
| minecraft:element_65 |
| minecraft:element_66 |
| minecraft:element_67 |
| minecraft:element_68 |
| minecraft:element_69 |
| minecraft:element_7 |
| minecraft:element_70 |
| minecraft:element_71 |
| minecraft:element_72 |
| minecraft:element_73 |
| minecraft:element_74 |
| minecraft:element_75 |
| minecraft:element_76 |
| minecraft:element_77 |
| minecraft:element_78 |
| minecraft:element_79 |
| minecraft:element_8 |
| minecraft:element_80 |
| minecraft:element_81 |
| minecraft:element_82 |
| minecraft:element_83 |
| minecraft:element_84 |
| minecraft:element_85 |
| minecraft:element_86 |
| minecraft:element_87 |
| minecraft:element_88 |
| minecraft:element_89 |
| minecraft:element_9 |
| minecraft:element_90 |
| minecraft:element_91 |
| minecraft:element_92 |
| minecraft:element_93 |
| minecraft:element_94 |
| minecraft:element_95 |
| minecraft:element_96 |
| minecraft:element_97 |
| minecraft:element_98 |
| minecraft:element_99 |
| minecraft:emerald_block |
| minecraft:emerald_ore |
| minecraft:enchanting_table |
| minecraft:end_brick_stairs |
| minecraft:end_bricks |
| minecraft:end_gateway |
| minecraft:end_portal |
| minecraft:end_portal_frame |
| minecraft:end_rod |
| minecraft:end_stone |
| minecraft:ender_chest |
| minecraft:exposed_copper |
| minecraft:exposed_cut_copper |
| minecraft:exposed_cut_copper_slab |
| minecraft:exposed_cut_copper_stairs |
| minecraft:exposed_double_cut_copper_slab |
| minecraft:farmland |
| minecraft:fence |
| minecraft:fence_gate |
| minecraft:fire |
| minecraft:fletching_table |
| minecraft:flower_pot |
| minecraft:flowering_azalea |
| minecraft:flowing_lava |
| minecraft:flowing_water |
| minecraft:frame |
| minecraft:frog_spawn |
| minecraft:frosted_ice |
| minecraft:furnace |
| minecraft:gilded_blackstone |
| minecraft:glass |
| minecraft:glass_pane |
| minecraft:glow_frame |
| minecraft:glow_lichen |
| minecraft:glowingobsidian |
| minecraft:glowstone |
| minecraft:gold_block |
| minecraft:gold_ore |
| minecraft:golden_rail |
| minecraft:granite_stairs |
| minecraft:grass |
| minecraft:grass_path |
| minecraft:gravel |
| minecraft:gray_candle |
| minecraft:gray_candle_cake |
| minecraft:gray_glazed_terracotta |
| minecraft:green_candle |
| minecraft:green_candle_cake |
| minecraft:green_glazed_terracotta |
| minecraft:grindstone |
| minecraft:hanging_roots |
| minecraft:hard_glass |
| minecraft:hard_glass_pane |
| minecraft:hard_stained_glass |
| minecraft:hard_stained_glass_pane |
| minecraft:hardened_clay |
| minecraft:hay_block |
| minecraft:heavy_weighted_pressure_plate |
| minecraft:honey_block |
| minecraft:honeycomb_block |
| minecraft:hopper |
| minecraft:ice |
| minecraft:infested_deepslate |
| minecraft:info_update |
| minecraft:info_update2 |
| minecraft:invisible_bedrock |
| minecraft:iron_bars |
| minecraft:iron_block |
| minecraft:iron_door |
| minecraft:iron_ore |
| minecraft:iron_trapdoor |
| minecraft:jigsaw |
| minecraft:jukebox |
| minecraft:jungle_button |
| minecraft:jungle_door |
| minecraft:jungle_fence_gate |
| minecraft:jungle_pressure_plate |
| minecraft:jungle_stairs |
| minecraft:jungle_standing_sign |
| minecraft:jungle_trapdoor |
| minecraft:jungle_wall_sign |
| minecraft:kelp |
| minecraft:ladder |
| minecraft:lantern |
| minecraft:lapis_block |
| minecraft:lapis_ore |
| minecraft:large_amethyst_bud |
| minecraft:lava |
| minecraft:lava_cauldron |
| minecraft:leaves |
| minecraft:leaves2 |
| minecraft:lectern |
| minecraft:lever |
| minecraft:light_block |
| minecraft:light_blue_candle |
| minecraft:light_blue_candle_cake |
| minecraft:light_blue_glazed_terracotta |
| minecraft:light_gray_candle |
| minecraft:light_gray_candle_cake |
| minecraft:light_weighted_pressure_plate |
| minecraft:lightning_rod |
| minecraft:lime_candle |
| minecraft:lime_candle_cake |
| minecraft:lime_glazed_terracotta |
| minecraft:lit_blast_furnace |
| minecraft:lit_deepslate_redstone_ore |
| minecraft:lit_furnace |
| minecraft:lit_pumpkin |
| minecraft:lit_redstone_lamp |
| minecraft:lit_redstone_ore |
| minecraft:lit_smoker |
| minecraft:lodestone |
| minecraft:log |
| minecraft:log2 |
| minecraft:loom |
| minecraft:magenta_candle |
| minecraft:magenta_candle_cake |
| minecraft:magenta_glazed_terracotta |
| minecraft:magma |
| minecraft:mangrove_button |
| minecraft:mangrove_door |
| minecraft:mangrove_double_slab |
| minecraft:mangrove_fence |
| minecraft:mangrove_fence_gate |
| minecraft:mangrove_leaves |
| minecraft:mangrove_log |
| minecraft:mangrove_planks |
| minecraft:mangrove_pressure_plate |
| minecraft:mangrove_propagule |
| minecraft:mangrove_propagule_hanging |
| minecraft:mangrove_roots |
| minecraft:mangrove_slab |
| minecraft:mangrove_stairs |
| minecraft:mangrove_standing_sign |
| minecraft:mangrove_trapdoor |
| minecraft:mangrove_wall_sign |
| minecraft:mangrove_wood |
| minecraft:medium_amethyst_bud |
| minecraft:melon_block |
| minecraft:melon_stem |
| minecraft:mob_spawner |
| minecraft:monster_egg |
| minecraft:moss_block |
| minecraft:moss_carpet |
| minecraft:mossy_cobblestone |
| minecraft:mossy_cobblestone_stairs |
| minecraft:mossy_stone_brick_stairs |
| minecraft:moving_block |
| minecraft:mud |
| minecraft:mud_brick_double_slab |
| minecraft:mud_brick_slab |
| minecraft:mud_brick_stairs |
| minecraft:mud_brick_wall |
| minecraft:mud_bricks |
| minecraft:muddy_mangrove_roots |
| minecraft:mycelium |
| minecraft:nether_brick |
| minecraft:nether_brick_fence |
| minecraft:nether_brick_stairs |
| minecraft:nether_gold_ore |
| minecraft:nether_sprouts |
| minecraft:nether_wart |
| minecraft:nether_wart_block |
| minecraft:netherite_block |
| minecraft:netherrack |
| minecraft:netherreactor |
| minecraft:normal_stone_stairs |
| minecraft:noteblock |
| minecraft:oak_stairs |
| minecraft:observer |
| minecraft:obsidian |
| minecraft:ochre_froglight |
| minecraft:orange_candle |
| minecraft:orange_candle_cake |
| minecraft:orange_glazed_terracotta |
| minecraft:oxidized_copper |
| minecraft:oxidized_cut_copper |
| minecraft:oxidized_cut_copper_slab |
| minecraft:oxidized_cut_copper_stairs |
| minecraft:oxidized_double_cut_copper_slab |
| minecraft:packed_ice |
| minecraft:packed_mud |
| minecraft:pearlescent_froglight |
| minecraft:pink_candle |
| minecraft:pink_candle_cake |
| minecraft:pink_glazed_terracotta |
| minecraft:piston |
| minecraft:piston_arm_collision |
| minecraft:planks |
| minecraft:podzol |
| minecraft:pointed_dripstone |
| minecraft:polished_andesite_stairs |
| minecraft:polished_basalt |
| minecraft:polished_blackstone |
| minecraft:polished_blackstone_brick_double_slab |
| minecraft:polished_blackstone_brick_slab |
| minecraft:polished_blackstone_brick_stairs |
| minecraft:polished_blackstone_brick_wall |
| minecraft:polished_blackstone_bricks |
| minecraft:polished_blackstone_button |
| minecraft:polished_blackstone_double_slab |
| minecraft:polished_blackstone_pressure_plate |
| minecraft:polished_blackstone_slab |
| minecraft:polished_blackstone_stairs |
| minecraft:polished_blackstone_wall |
| minecraft:polished_deepslate |
| minecraft:polished_deepslate_double_slab |
| minecraft:polished_deepslate_slab |
| minecraft:polished_deepslate_stairs |
| minecraft:polished_deepslate_wall |
| minecraft:polished_diorite_stairs |
| minecraft:polished_granite_stairs |
| minecraft:portal |
| minecraft:potatoes |
| minecraft:powder_snow |
| minecraft:powered_comparator |
| minecraft:powered_repeater |
| minecraft:prismarine |
| minecraft:prismarine_bricks_stairs |
| minecraft:prismarine_stairs |
| minecraft:pumpkin |
| minecraft:pumpkin_stem |
| minecraft:purple_candle |
| minecraft:purple_candle_cake |
| minecraft:purple_glazed_terracotta |
| minecraft:purpur_block |
| minecraft:purpur_stairs |
| minecraft:quartz_block |
| minecraft:quartz_bricks |
| minecraft:quartz_ore |
| minecraft:quartz_stairs |
| minecraft:rail |
| minecraft:raw_copper_block |
| minecraft:raw_gold_block |
| minecraft:raw_iron_block |
| minecraft:red_candle |
| minecraft:red_candle_cake |
| minecraft:red_flower |
| minecraft:red_glazed_terracotta |
| minecraft:red_mushroom |
| minecraft:red_mushroom_block |
| minecraft:red_nether_brick |
| minecraft:red_nether_brick_stairs |
| minecraft:red_sandstone |
| minecraft:red_sandstone_stairs |
| minecraft:redstone_block |
| minecraft:redstone_lamp |
| minecraft:redstone_ore |
| minecraft:redstone_torch |
| minecraft:redstone_wire |
| minecraft:reeds |
| minecraft:reinforced_deepslate |
| minecraft:repeating_command_block |
| minecraft:reserved6 |
| minecraft:respawn_anchor |
| minecraft:sand |
| minecraft:sandstone |
| minecraft:sandstone_stairs |
| minecraft:sapling |
| minecraft:scaffolding |
| minecraft:sculk |
| minecraft:sculk_catalyst |
| minecraft:sculk_sensor |
| minecraft:sculk_shrieker |
| minecraft:sculk_vein |
| minecraft:sea_lantern |
| minecraft:sea_pickle |
| minecraft:seagrass |
| minecraft:shroomlight |
| minecraft:shulker_box |
| minecraft:silver_glazed_terracotta |
| minecraft:skull |
| minecraft:slime |
| minecraft:small_amethyst_bud |
| minecraft:small_dripleaf_block |
| minecraft:smithing_table |
| minecraft:smoker |
| minecraft:smooth_basalt |
| minecraft:smooth_quartz_stairs |
| minecraft:smooth_red_sandstone_stairs |
| minecraft:smooth_sandstone_stairs |
| minecraft:smooth_stone |
| minecraft:snow |
| minecraft:snow_layer |
| minecraft:soul_campfire |
| minecraft:soul_fire |
| minecraft:soul_lantern |
| minecraft:soul_sand |
| minecraft:soul_soil |
| minecraft:soul_torch |
| minecraft:sponge |
| minecraft:spore_blossom |
| minecraft:spruce_button |
| minecraft:spruce_door |
| minecraft:spruce_fence_gate |
| minecraft:spruce_pressure_plate |
| minecraft:spruce_stairs |
| minecraft:spruce_standing_sign |
| minecraft:spruce_trapdoor |
| minecraft:spruce_wall_sign |
| minecraft:stained_glass |
| minecraft:stained_glass_pane |
| minecraft:stained_hardened_clay |
| minecraft:standing_banner |
| minecraft:standing_sign |
| minecraft:sticky_piston |
| minecraft:sticky_piston_arm_collision |
| minecraft:stone |
| minecraft:stone_block_slab |
| minecraft:stone_block_slab2 |
| minecraft:stone_block_slab3 |
| minecraft:stone_block_slab4 |
| minecraft:stone_brick_stairs |
| minecraft:stone_button |
| minecraft:stone_pressure_plate |
| minecraft:stone_stairs |
| minecraft:stonebrick |
| minecraft:stonecutter |
| minecraft:stonecutter_block |
| minecraft:stripped_acacia_log |
| minecraft:stripped_birch_log |
| minecraft:stripped_crimson_hyphae |
| minecraft:stripped_crimson_stem |
| minecraft:stripped_dark_oak_log |
| minecraft:stripped_jungle_log |
| minecraft:stripped_mangrove_log |
| minecraft:stripped_mangrove_wood |
| minecraft:stripped_oak_log |
| minecraft:stripped_spruce_log |
| minecraft:stripped_warped_hyphae |
| minecraft:stripped_warped_stem |
| minecraft:structure_block |
| minecraft:structure_void |
| minecraft:sweet_berry_bush |
| minecraft:tallgrass |
| minecraft:target |
| minecraft:tinted_glass |
| minecraft:tnt |
| minecraft:torch |
| minecraft:trapdoor |
| minecraft:trapped_chest |
| minecraft:trip_wire |
| minecraft:tripwire_hook |
| minecraft:tuff |
| minecraft:turtle_egg |
| minecraft:twisting_vines |
| minecraft:underwater_torch |
| minecraft:undyed_shulker_box |
| minecraft:unknown |
| minecraft:unlit_redstone_torch |
| minecraft:unpowered_comparator |
| minecraft:unpowered_repeater |
| minecraft:verdant_froglight |
| minecraft:vine |
| minecraft:wall_banner |
| minecraft:wall_sign |
| minecraft:warped_button |
| minecraft:warped_door |
| minecraft:warped_double_slab |
| minecraft:warped_fence |
| minecraft:warped_fence_gate |
| minecraft:warped_fungus |
| minecraft:warped_hyphae |
| minecraft:warped_nylium |
| minecraft:warped_planks |
| minecraft:warped_pressure_plate |
| minecraft:warped_roots |
| minecraft:warped_slab |
| minecraft:warped_stairs |
| minecraft:warped_standing_sign |
| minecraft:warped_stem |
| minecraft:warped_trapdoor |
| minecraft:warped_wall_sign |
| minecraft:warped_wart_block |
| minecraft:water |
| minecraft:waterlily |
| minecraft:waxed_copper |
| minecraft:waxed_cut_copper |
| minecraft:waxed_cut_copper_slab |
| minecraft:waxed_cut_copper_stairs |
| minecraft:waxed_double_cut_copper_slab |
| minecraft:waxed_exposed_copper |
| minecraft:waxed_exposed_cut_copper |
| minecraft:waxed_exposed_cut_copper_slab |
| minecraft:waxed_exposed_cut_copper_stairs |
| minecraft:waxed_exposed_double_cut_copper_slab |
| minecraft:waxed_oxidized_copper |
| minecraft:waxed_oxidized_cut_copper |
| minecraft:waxed_oxidized_cut_copper_slab |
| minecraft:waxed_oxidized_cut_copper_stairs |
| minecraft:waxed_oxidized_double_cut_copper_slab |
| minecraft:waxed_weathered_copper |
| minecraft:waxed_weathered_cut_copper |
| minecraft:waxed_weathered_cut_copper_slab |
| minecraft:waxed_weathered_cut_copper_stairs |
| minecraft:waxed_weathered_double_cut_copper_slab |
| minecraft:weathered_copper |
| minecraft:weathered_cut_copper |
| minecraft:weathered_cut_copper_slab |
| minecraft:weathered_cut_copper_stairs |
| minecraft:weathered_double_cut_copper_slab |
| minecraft:web |
| minecraft:weeping_vines |
| minecraft:wheat |
| minecraft:white_candle |
| minecraft:white_candle_cake |
| minecraft:white_glazed_terracotta |
| minecraft:wither_rose |
| minecraft:wood |
| minecraft:wooden_button |
| minecraft:wooden_door |
| minecraft:wooden_pressure_plate |
| minecraft:wooden_slab |
| minecraft:wool |
| minecraft:yellow_candle |
| minecraft:yellow_candle_cake |
| minecraft:yellow_flower |
| minecraft:yellow_glazed_terracotta |
