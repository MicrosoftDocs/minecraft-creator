---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - Intrinsic Block States List
description: "A reference document listing all currently available intrinsic block states"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Intrinsic Block States

Here is a list of all Intrinsic Block States within Minecraft: Bedrock Edition. You can use these states with `/setblock` or `/fill` commands.

## Intrinsic Block State List

|State |Type |Valid Values |Associated Blocks |Description  |
|:----------|:----------|:----------|:----------|:----------|
|active |Boolean |True, False |sculk shrieker |Determines whether the block is active or not|
|age |Integer |0 - 15 |fire, cactus, reeds, nether wart block, chorus flower, frosted ice, soul fire |Represents the age of the block|
|age_bit |Boolean | true, false |sapling, bamboo sapling |Determines if saplings should grow|
|allow_underwater_bit |Boolean | true, false | Determines if TNT works underwater
|attached_bit |Boolean | true, false |trip wire block, trip wire hook |Determines if a tripwire is attached to another tripwire|
|attachment |String |standing, hanging, side, multiple |bell, grindstone |Determines the type of attachment used by a bell or grindstone block|
|bamboo_leaf_size |String |no_leaves, small_leaves, large_leaves |bamboo |Determines the size of bamboo leaves|
|bamboo_stalk_thickness |String |thin, thick |bamboo |Determines the thickness of a bamboo stalk|
|big_dripleaf_tilt |String |none, unstable, partial_tilt, full_tilt |big dripleaf |Determines the tilt state of big dripleaf block|
|bite_counter |Integer |0 - 6 |cake |Tracks how many bites of cake have been taken|
|block_face | String | down, up, north, south, east, west | *TBD* | Which block face the player placed the block on.|
|block_light_level |Integer |0 - 15 |light block |Determines the light level for a block that emits light |
|brewing_stand_slot_a_bit |Boolean |True, False |brewing stand |Determines if a bottle is shown in slot a of the brewing stand|
|brewing_stand_slot_b_bit |Boolean |True, False |brewing stand |Determines if a bottle is shown in slot b of the brewing stand|
|brewing_stand_slot_c_bit |Boolean |True, False |brewing stand |Determines if a bottle is shown in slot c of the brewing stand|
|button_pressed_bit |Boolean |True, False |acacia button, birch button, crimson button, dark oak button, jungle button, mangrove button, polished blackstone button, spruce button, stone button, warped button, wood button |Determines if a button is in the pressed state or not|
|candles |Integer |0 - 3 |black candle, blue candle, brown candle, candle, cyan candle, gray candle, green candle, light blue candle, light gray candle, lime candle, magenta candle, orange candle, pink candle, purple candle, red candle, white candle, yellow candle |The number of extra candles in the same block space|
|cardinal_direction | String | north, south, east, west | *TBD* | Defines the cardinal placement direction of a block. |
|cauldron_liquid |String |water, lava |cauldron, lava cauldron | Determines the type of liquid in a cauldron|
|chemistry_table_type |String |compound_creator, material_reducer, element_constructor, lab_table |chemistry table |Determines the type of the work benches that are behind the edu features toggle|
|chisel_type |String |default, chiseled, lines, smooth |purpur block, quartz block |Determines the chisel pattern on quartz and purpur blocks|
|cluster_count |Integer |0 - 3 |sea pickle |The number of sea pickles in a cluster|
|color |String |white, orange, magenta, light_blue, yellow, lime, pink, gray, silver, cyan, purple, blue, brown, green, red, black  |cloth, concrete, concrete powder block, hard stained glass, shulker box, stained glass, stained glass pane, stained hardened clay, wool carpet |Determines the color of a block, if that block can be different colors|
|color_bit |Boolean |True, False |blue colored torch |Sets if a torch is a colored torch block|
|composter_fill_level|Integer | 0 - 8 | composter |Sets level of material in a composter|
|conditional_bit |Boolean |True, False |chain command block, repeating command block |Determines if a command block is conditional or not|
|coral_color |String |blue, pink, purple, red, yellow, blue dead, pink dead, red dead, yellow dead |coral fan, coral fan dead, coral, coral block |Determines the color of a coral block|
|coral_direction |Integer |0 - 3 |coral fan hang, coral fan hang 2, coral fan hang 3 |Describes the rotation of coral fans|
|coral_fan_direction| Integer |0, 1 |coral fan, coral fan dead| Determines direction fan-shaped coral is facing|
|coral_hang_type_bit |Boolean |True, False |coral fan hang, coral fan hang 2, coral fan hang 3 |Describes the type of hanging for coral fans|
|covered_bit |Boolean |True, False |top snow |Describes if a top snow block is covering another block|
|cracked_state |String |no_cracks, cracked, max_cracked |turtle egg |Determines the cracked state of turtle eggs|
|damage |String |undamaged, slightly_damaged, very_damaged, broken |anvil |Determines the state of damage of an Anvil|
|deprecated|*none* |*none* |*not used*|Denotes deprecated blocks, this block state is will be removed|
|dead_bit |Boolean |True, False |coral fan hang, coral fan hang 2, coral fan hang 3 |Determines if coral, coral fans, or sea pickles are dead|
|direction |Integer |0 - 3 |acacia door, acacia fence gate, acacia trapdoor, anvil, bed, bell, birch door, birch fence gate, birch trapdoor, campfire, carved pumpkin, chalkboard, chemistry table, cocoa, crimson door, crimson fence gate, crimson trapdoor, dark oak door, dark oak fence gate, dark oak trapdoor, end portal frame, fence gate, iron door, iron trapdoor, jungle door, jungle fence gate, jungle trapdoor, lectern, loom, mangrove door, mangrove fence gate, mangrove trapdoor, powered comparator, powered repeater, pumpkin, soul campfire, spruce door, spruce fence gate, spruce trapdoor, trapdoor, trip wire hook, unpowered comparator, unpowered repeater, warped door, warped fence gate, warped trapdoor, wooden door |Determines the North, South, East, and West direction of some blocks. 0 = South, 1 = West, 2 = North 3 = East|
|dirt_type |String |normal, coarse |dirt |Determines the dirt type of a block|
|disarmed_bit |Boolean |True, False |trip wire block |Determines if a tripwire is disarmed or not.|
|door_hinge_bit |Boolean |True, False |acacia door, birch door, crimson door, dark oak door, iron door, jungle door, mangrove door, spruce door, warped door, wooden door |Determines if a door's hinge is mirrored or not|
|double_plant_type |String |sunflower, syringa, grass, fern, rose, peony |double plant |Determines the type of a double plant block|
|drag_down |Boolean |True, False |bubble column |Describes if bubble columns drag entities down or pushes them up|
|dripstone_thickness |String |tip, frustum, base, middle, merge |pointed dripstone |Determines the type of a pointed dripstone block|
|end_portal_eye_bit |Boolean |True, False |end portal frame |Determines if an end portal block has an Eye of Ender in it|
|explode_bit |Boolean |True, False |Determines if a TNT block should start its explode sequence |
|extinguished |Boolean |True, False |magma, netherrack | Determines that block with infiniburn is not on ignited|
|facing_direction | String | down, up, north, south, east, west |acacia button, birch button, crimson button, dark oak button, jungle button, mangrove button, polished blackstone button, spruce button, stone button, warped button, wood button | Defines all placement directions of a block.|
|fill_level |Integer |0 - 6 |cauldron, lava cauldron |Determines fill level of a cauldron block|
|flower_type |String |poppy, orchid, allium, houstonia, tulip_red, tulip_orange, tulip_white, tulip_pink, oxeye, cornflower, lily_of_the_valley |red flower |Determines the type of a flower block|
|growth |Integer |0 - 7 |pumpkin stem, beetroot, carrot, crop, potato, sweet berry bush |Determines the growth level of crops|
|hanging_bit |Boolean |True, False |lantern, soul lantern |Describes if a lantern block is hanging or not|
|head_piece_bit |Boolean |True, False |bed |Determines if a block is the pillow side of a bed|
|height |Integer |0 - 7 |top snow |Determines the height of a top snow block|
|honey_level|Integer |0 - 5 |Beehive |Determines level of honey in a beehive|
|huge_mushroom_bits |Integer |0 - 15 |brown mushroom block, red mushroom block, huge mushroom block |Determines which huge mushroom block to be displayed|
|infiniburn_bit |Boolean |True, False |bedrock |Determines if a block should burn infinitely|
|in_wall_bit |Boolean |True, False |birch fence gate, crimson fence gate, dark oak fence gate, fence gate, jungle fence gate, mangrove fence gate, spruce fence gate, warped fence gate |Determines if a fence block is connected to a wall block|
|item_frame_map_bit |Boolean |True, False |glow item frame, item frame |Describes if an item frame block has a map in it|
|item_frame_photo_bit |Boolean |True, False |glow item frame, item frame |Describes if an item frame block has a photo in it|
|kelp_age |Integer |0 - 24 |kelp | Determines age of kelp |
|lever_direction |String |down_east_west, east, west, south, north, up_north_south, up_east_west, down_north_south |lever | Determines direction lever is facing and up or down orientation |
|liquid_depth |Integer |0 - 15 |lava, water, flowing lava, flowing water |Determines the level of liquid blocks|
|lit |Boolean |True, False  |candle, candle cake, black candle, black candle cake, blue candle, blue candle cake, brown candle, brown candle cake, cyan candle, cyan candle cake, gray candle, gray candle cake, green candle, green candle cake, light blue candle, light blue candle cake, light gray candle, light gray candle cake, lime candle, lime candle cake, magenta candle, magenta candle cake, orange candle, orange candle cake, pink candle, pink candle cake, purple candle, purple candle cake, red candle, red candle cake, white candle, white candle cake, yellow candle, yellow candle cake |Determines if a block is lit or not|
|moisturized_amount |Integer |0 - 7 |farm|Determines the moisture level of crops|
|monster_egg_stone_type |String |stone, cobblestone, stone_brick, mossy_stone_brick, cracked_stone_brick, chiseled_stone_brick |monster stone egg, monster egg |Determines the stone type of a monster egg block|
|multi_face_direction_bits|Integer |0 - 63 |glow lichen, sculk vein | 6 different 1-bit states used to determine direction|
|new_leaf_type |String |acacia, dark_oak |new leaf |Determines the leaf type of some blocks|
|new_log_type |String |acacia, dark_oak |new log |Determines the wood type of some blocks|
|occupied_bit |Boolean |True, False |bed |Determines if a bed block is occupied|
|old_leaf_type |String |oak, spruce, birch, jungle |old leaf, leaves |Determines the leaf type of some blocks|
|old_log_type |String |oak, spruce, birch, jungle |log |Determines the wood type of some blocks|
|ominous| Boolean| True, False| Determines if the block is the ominous version|
|open_bit |Boolean |True, False |acacia door, acacia fence gate, barrel, birch door, birch fence gate, crimson door, crimson fence gate, dark oak door, dark oak fence gate, fence gate, iron door, jungle door, jungle fence gate, mangrove door, mangrove fence gate, spruce door, spruce fence gate, warped door, warped fence gate, wooden door, lever |Determines if a door, gate, or trapdoor is open|
|output_lit_bit |Boolean |True, False |powered comparator, unpowered comparator |Determines if a Comparator's output is lit|
|output_subtract_bit |Boolean |True, False |powered comparator, unpowered comparator |Determines if a Comparator is set to subtract output|
|persistent_bit |Boolean |True, False |azalea leaves, azalea leaves flowered, leaves, mangrove leaves, new leaf, old leaf |Determines if a leaf block is persistent|
|pillar_axis|String |x, y, z |basalt, bone_block, chain, crimson stem, mangrove log, mangrove wood, muddy mangrove roots, stripped crimson hyphae, stripped crimson stem, stripped mangrove wood, stripped warped hyphae, stripped warped stem, polished basalt, warped hyphae, warped stem |Determines orientation of blocks with pillar characteristics |
|portal_axis |String |unknown, x, z |portal |Determines the orientation of portal blocks|
|powered_bit |Boolean |True, False |lectern, observer, sculk sensor, trip wire block, trip wire hook |Shows when an observer or tripwire sends a redstone signal|
|prismarine_block_type |String |default, dark ,bricks |prismarine | Determines whether placed prismarine blocks are default, dark, or bricks |
|rail_data_bit |Boolean |True, False |activator rail, detector rail block, powered rail block |Shows if a rail has a redstone signal|
|rail_direction |Integer |0 - 8 |activator rail, detector rail block, powered rail block, rail|Determines the orientation of a placed rail block|
|redstone_signal |Integer |0 - 15 |crimson pressure plate, daylight detector, daylight detector inverted, heavy weighted pressure plate, light weighted pressure plate, mangrove pressure plate, polished blackstone pressure plate, pressure plate acacia, pressure plate birch, pressure plate dark oak, pressure plate jungle, pressure plate spruce, redstone dust, stone pressure plate, warped pressure plate, wood pressure plate |Determines the signal strength of a redstone signal|
|repeater_delay |Integer |0 - 3 |powered repeater, unpowered repeater |Determines the amount of delay of a repeater|
|respawn_anchor_charge |Integer |0 - 4 |respawn anchor | Determines level of charge (number of respawns remaining) for a respawn anchor |
|rotation|Integer |0 - 15 |jigsaw |Sets rotation for jigsaw block|
|sandstone_type |String |default, hieroglyphs, cut, smooth |sandstone, red sandstone |Determines the pattern of a sandstone block|
|sand_type |String |normal, red |sand |Determines the sand type of a block|
|sapling_type |String |evergreen, birch, jungle, acacia, roofed_oak |bamboo sapling, sapling |Determines the type of the sapling block|
|sculk_sensor_phase | String | inactive, active, cooldown | *TBD* |Determines the current phase of a sculk sensor block. |
|sea_grass_type |String |default, double_top, double_bot |sea grass |Determines the type of a seagrass block|
|sponge_type |String |dry, wet |sponge |Determines the type of a sponge block|
|stability |Integer |0 - 7 |scaffolding |Determines the stability of a scaffolding block|
|stability_check |Boolean |True, False |scaffolding |Describes if a scaffolding block has been checked for stability|
|stone_brick_type |String |default, mossy, cracked, chiseled, smooth |stone brick |Determines the type of a stone brick block|
|stone_slab_type |String |smooth_stone, sandstone, wood, cobblestone, brick, stone_brick, quartz, nether_brick |double stone slab, stone slab |Determines the type of some stone slab blocks|
|stone_slab_type_2 |String |red_sandstone, purpur, prismarine_rough, prismarine_dark, prismarine_brick, mossy_cobblestone, smooth_sandstone, red_nether_brick |double stone slab 2, stone slab 2 |Determines the type of some stone slab blocks|
|stone_slab_type_3 |String |end_stone_brick, smooth_red_sandstone, polished_andesite, andesite, diorite, polished_diorite, granite, polished_granite |double stone slab 3, stone slab 3 |Determines the type of some stone slab blocks|
|stone_slab_type_4 |String |mossy_stone_brick, smooth_quartz, stone, cut_sandstone, cut_red_sandstone |double stone slab 4, stone slab 4 |Determines the type of some stone slab blocks|
|stone_type |String |stone, granite, granite_smooth, diorite, diorite_smooth, andesite, andesite_smooth |stone, granite, smooth granite, diorite, smooth diorite, andesite, smooth andesite |Determines the stone type of a block|
|stripped_bit |Boolean |True, False |mangrove wood, wood |Describes if a wood log has been stripped of bark|
|structure_block_type |String |data, save, load, corner, invalid, export |structure block |Determines the state of a structure block|
|structure_void_type |String |void, air |structure void |Determines which void mode to draw for structure blocks|
|suspended_bit |Boolean |True, False |trip wire block |Indicates if a tripwire block is suspended|
|tall_grass_type |String |default, tall, fern, snow |tall grass |Determines the type of a tall grass block|
|toggle_bit |Boolean |True, False |bell, hopper |Determines if a hopper or bell block is active or not|
|top_slot_bit |Boolean |True, False |blackstone double slab, blackstone slab, cobbled deepslate double slab, cobbled deepslate slab, crimson double slab, crimson slab, cut copper slab, deepslate brick double slab, deepslate brick slab, deepslate tile double slab, deepslate tile slab, double cut copper slab, double stone slab, double stone slab 2, double stone slab 3, double stone slab 4, double wooden slab, exposed cut copper slab, exposed double cut copper slab, mangrove double slab, mangrove slab, mud brick double slab, mud brick slab, oxidized cut copper slab, oxidized double cut copper slab, polished blackstone brick double slab, polished blackstone brick slab, polished blackstone double slab, polished blackstone slab, polished deepslate double slab, polished deepslate slab, stone slab, stone slab 2, stone slab 3, stone slab 4, warped double slab, warped slab, waxed cut copper slab, waxed double cut copper slab, waxed exposed cut copper slab, waxed exposed double cut copper slab, waxed oxidized cut copper slab, waxed oxidized double cut copper slab, waxed weathered cut copper slab, waxed weathered double cut copper slab, weathered cut copper slab, weathered double cut copper slab, wooden slab |Shows if a slab is the top half of the block or not|
|torch_facing_direction |String |unknown, west, east, north, south, top |red colored torch, redstone torch, soul torch, torch, underwater torch, unlit redstone torch |Determines the block that a torch is attached to in relation to its position|
|triggered_bit |Boolean |True, False |dispenser, dropper |Determines if a dispenser is triggered|
|turtle_egg_count |String |one_egg, two_egg, three_egg, four_egg |turtle egg |Determines the amount of turtle eggs in an egg block|
|twisting_vines_age|Integer | 0 - 25 |twisting vines | Determines the age of twisting vines|
|update_bit |Boolean |True, False |azalea leaves, azalea leaves flowered, leaves, mangrove leaves, flower pot, new leaf, old leaf |Determines if a leaf block or flower block should be updated|
|upper_block_bit |Boolean |True, False |acacia door, birch door, crimson door, double plant, dark oak door, iron door, jungle door, mangrove door, small dripleaf, spruce door, warped door, wooden door |Determines if a block is the upper half of an object like a door or a tall plant|
|upside_down_bit |Boolean |True, False |acacia stairs, acacia trapdoor, andesite stairs, blackstone stairs, birch stairs, birch trapdoor, brick stairs, cobbled deepslate stairs, cobblestone stairs, crimson stairs, crimson trapdoor, cut copper stairs, dark oak stairs, dark oak trapdoor, dark prismarine stairs, deepslate brick stairs, deepslate tile stairs, diorite stairs, end brick stairs, exposed cut copper stairs, granite stairs, iron trapdoor, jungle stairs, jungle trapdoor, mangrove stairs, mangrove trapdoor, mossy cobblestone stairs, mossy stone brick stairs, mud brick stairs, nether brick stairs, normal stone stairs, oak stairs, oxidized cut copper stairs, polished andesite stairs, polished blackstone brick stairs, polished blackstone stairs, polished deepslate stairs, polished diorite stairs, polished granite stairs, prismarine bricks stairs, prismarine stairs, purpur stairs, quartz stairs, red sandstone stairs, sandstone stairs, smooth quartz stairs, smooth red sandstone stairs, smooth sandstone stairs, spruce stairs, spruce trapdoor, stone brick stairs, trapdoor, warped stairs, warped trapdoor, waxed cut copper stairs, waxed exposed cut copper stairs, waxed oxidized cut copper stairs, waxed weathered cut copper stairs, weathered cut copper stairs |Determines if a stair block or trapdoor block is upside down|
|vertical_half |String |bottom, top | *TBD* | Which vertical half of the space the block is placed in. |
|vine_direction_bits |Integer | 0 - 15 |vine |Determines the facing direction for vines, works like the facing_direction blockstate|
|wall_block_type |String |cobblestone, mossy_cobblestone, granite, diorite, andesite, sandstone, brick, stone_brick, mossy_stone_brick, nether_brick, end_brick, prismarine, red_sandstone, red_nether_brick |cobblestone, mossy cobblestone, granite, diorite, andesite, sandstone, brick, stone brick, mossy stone brick, nether brick, end brick, prismarine, red sandstone, red nether brick|Determines the type of a stone used in a wall block|
|wall_connection_type_east |String |none, short, tall |blackstone wall, border, cobbled deepslate wall, cobblestone wall, deepslate brick wall, deepslate tile wall, mud brick wall, polished blackstone brick wall, polished blackstone wall, polished deepslate wall |Determines what kind of connection a wall has to the east|
|wall_connection_type_north |String |none, short, tall |blackstone wall, border, cobbled deepslate wall, cobblestone wall, deepslate brick wall, deepslate tile wall, mud brick wall, polished blackstone brick wall, polished blackstone wall, polished deepslate wall |Determines what kind of connection a wall has to the north|
|wall_connection_type_south |String |none, short, tall |blackstone wall, border, cobbled deepslate wall, cobblestone wall, deepslate brick wall, deepslate tile wall, mud brick wall, polished blackstone brick wall, polished blackstone wall, polished deepslate wall |Determines what kind of connection a wall has to the south|
|wall_connection_type_west |String |none, short, tall |blackstone wall, border, cobbled deepslate wall, cobblestone wall, deepslate brick wall, deepslate tile wall, mud brick wall, polished blackstone brick wall, polished blackstone wall, polished deepslate wall |Determines what kind of connection a wall has to the west|
|wall_post_bit |Boolean |True, False |blackstone wall, border, cobbled deepslate wall, cobblestone wall, deepslate brick wall, deepslate tile wall, mud brick wall, polished blackstone brick wall, polished blackstone wall, polished deepslate wall |Determines if a wall should contain a post|
|weeping_vines_age|Integer | 0 - 15 |weeping vines | Determines the age of weeping vines|
|weirdo_direction |Integer | 0 - 3 |acacia stairs, acacia trapdoor, andesite stairs, blackstone stairs, birch stairs, birch trapdoor, brick stairs, cobbled deepslate stairs, cobblestone stairs, crimson stairs, crimson trapdoor, cut copper stairs, dark oak stairs, dark oak trapdoor, dark prismarine stairs, deepslate brick stairs, deepslate tile stairs, diorite stairs, end brick stairs, exposed cut copper stairs, granite stairs, iron trapdoor, jungle stairs, jungle trapdoor, mangrove stairs, mangrove trapdoor, mossy cobblestone stairs, mossy stone brick stairs, mud brick stairs, nether brick stairs, normal stone stairs, oak stairs, oxidized cut copper stairs, polished andesite stairs, polished blackstone brick stairs, polished blackstone stairs, polished deepslate stairs, polished diorite stairs, polished granite stairs, prismarine bricks stairs, prismarine stairs, purpur stairs, quartz stairs, red sandstone stairs, sandstone stairs, smooth quartz stairs, smooth red sandstone stairs, smooth sandstone stairs, spruce stairs, spruce trapdoor, stone brick stairs, trapdoor, warped stairs, warped trapdoor, waxed cut copper stairs, waxed exposed cut copper stairs, waxed oxidized cut copper stairs, waxed weathered cut copper stairs, weathered cut copper stairs |Describes the rotation of stairs|
|wood_type |String |oak, spruce, birch, jungle, acacia, dark_oak |fence, double wooden slab, planks, wood, wooden slab |Determines the wood type of a block|
