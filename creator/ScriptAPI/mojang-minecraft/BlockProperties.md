---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockProperties Class
description: Contents of the mojang-minecraft.BlockProperties class.
---
# BlockProperties Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Constants

### **active**
`static read-only active = "active";`

Type: *string*

### **age**
`static read-only age = "age";`

Integer property that represents the age of the block. Valid values are between 0 and 15 inclusive.

Type: *string*

### **ageBit**
`static read-only ageBit = "age_bit";`

Boolean property that determines if saplings should grow.

Type: *string*

### **allowUnderwaterBit**
`static read-only allowUnderwaterBit = "allow_underwater_bit";`

Boolean property that determines if an explosion propagates underwater.

Type: *string*

### **attachedBit**
`static read-only attachedBit = "attached_bit";`

Boolean property that determines if a tripwire is attached to another tripwire.

Type: *string*

### **attachment**
`static read-only attachment = "attachment";`

String property that represents the type of attachment used by a bell or grindstone block. Valid values are 'standing', 'hanging', 'side' and 'multiple'.

Type: *string*

### **bambooLeafSize**
`static read-only bambooLeafSize = "bamboo_leaf_size";`

String property that determines the thickness of a bamboo stalk. Valid values are 'thin' and 'thick'.

Type: *string*

### **bambooStalkThickness**
`static read-only bambooStalkThickness = "bamboo_stalk_thickness";`

String property that determines the size of bamboo leaves. Valid values are 'no_leaves', 'small_leaves', and 'large_leaves'.

Type: *string*

### **bigDripleafHead**
`static read-only bigDripleafHead = "big_dripleaf_head";`

Type: *string*

### **bigDripleafTilt**
`static read-only bigDripleafTilt = "big_dripleaf_tilt";`

String property that represents the tilt state of big dripleaf block. Valid values are 'none', 'unstable', 'partial_tilt' and 'full_tilt'.

Type: *string*

### **biteCounter**
`static read-only biteCounter = "bite_counter";`

Integer property that tracks how many bites of cake have been taken. Valid values are between 0 and 6 inclusive.

Type: *string*

### **blockLightLevel**
`static read-only blockLightLevel = "block_light_level";`

Type: *string*

### **bloom**
`static read-only bloom = "bloom";`

Type: *string*

### **brewingStandSlotABit**
`static read-only brewingStandSlotABit = "brewing_stand_slot_a_bit";`

Boolean property that determines if a bottle is shown in the first slot of the brewing stand.

Type: *string*

### **brewingStandSlotBBit**
`static read-only brewingStandSlotBBit = "brewing_stand_slot_b_bit";`

Boolean property that determines if a bottle is shown in the second slot of the brewing stand.

Type: *string*

### **brewingStandSlotCBit**
`static read-only brewingStandSlotCBit = "brewing_stand_slot_c_bit";`

Boolean property that determines if a bottle is shown in the third slot of the brewing stand.

Type: *string*

### **buttonPressedBit**
`static read-only buttonPressedBit = "button_pressed_bit";`

Boolean property that determines if a button is in a pressed state or not.

Type: *string*

### **candles**
`static read-only candles = "candles";`

Integer property that describes how many extra candles are in the same block space. Valid values are between 0 and 3 inclusive.

Type: *string*

### **canSummon**
`static read-only canSummon = "can_summon";`

Type: *string*

### **cauldronLiquid**
`static read-only cauldronLiquid = "cauldron_liquid";`

String property that represents the type of liquid in a cauldron. Valid values are 'water', 'powder_snow', and 'lava'.

Type: *string*

### **chemistryTableType**
`static read-only chemistryTableType = "chemistry_table_type";`

String property that represents the type of work benches that are within Minecraft Education experiences. Valid values are 'compound_creator', 'material_reducer', 'element_constructor' and 'lab_table'.

Type: *string*

### **chiselType**
`static read-only chiselType = "chisel_type";`

String property determines the pattern of quartz and purpur blocks. Valid values are 'default', 'chiseled', 'lines', 'smooth'.

Type: *string*

### **clusterCount**
`static read-only clusterCount = "cluster_count";`

Integer property that describes how many sea pickles are in a cluster. Valid values are between 0 and 3 inclusive.

Type: *string*

### **color**
`static read-only color = "color";`

String property that represents the color of a block, like wool. Valid values are 'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'silver', 'cyan', 'purple', 'blue', 'brown', 'green', 'red' and 'black'.

Type: *string*

### **colorBit**
`static read-only colorBit = "color_bit";`

Boolean property that determines if a torch has a particular color.

Type: *string*

### **composterFillLevel**
`static read-only composterFillLevel = "composter_fill_level";`

Type: *string*

### **conditionalBit**
`static read-only conditionalBit = "conditional_bit";`

Boolean property that determines if a command block is conditional or not.

Type: *string*

### **coralColor**
`static read-only coralColor = "coral_color";`

String property that represents the color of a coral block. Valid values are 'blue', 'pink', 'purple', 'red', 'yellow', 'blue dead', 'pink dead', 'red dead', and 'yellow dead'.

Type: *string*

### **coralDirection**
`static read-only coralDirection = "coral_direction";`

Integer property that describes the rotation of coral fans. Valid values are between 0 and 3 inclusive.

Type: *string*

### **coralFanDirection**
`static read-only coralFanDirection = "coral_fan_direction";`

Type: *string*

### **coralHangTypeBit**
`static read-only coralHangTypeBit = "coral_hang_type_bit";`

Boolean property that represents the type of hanging for coral fan.

Type: *string*

### **coveredBit**
`static read-only coveredBit = "covered_bit";`

Boolean property that describes if a top snow block is covering another block.

Type: *string*

### **crackedState**
`static read-only crackedState = "cracked_state";`

String property that determines the cracked state of turtle eggs. Valid values are 'no_cracks', 'cracked', and 'max_cracked'.

Type: *string*

### **damage**
`static read-only damage = "damage";`

String property that determines the damage state of an anvil. Valid values are 'undamaged', 'slightly_damaged', 'very_damaged', and 'broken'

Type: *string*

### **deadBit**
`static read-only deadBit = "dead_bit";`

Boolean property that determines if coral, coral fans, or sea pickles are dead.

Type: *string*

### **deprecated**
`static read-only deprecated = "deprecated";`

Type: *string*

### **direction**
`static read-only direction = "direction";`

Integer property determines the north, south, east, or west direction of a block. Valid values include are south = 0, west = 1, north = 2, east = 3.

Type: *string*

### **dirtType**
`static read-only dirtType = "dirt_type";`

String property that determines the dirt type of a block. Valid values are 'normal' and 'coarse'.

Type: *string*

### **disarmedBit**
`static read-only disarmedBit = "disarmed_bit";`

Boolean property that determines if a tripwire is disarmed or not.

Type: *string*

### **doorHingeBit**
`static read-only doorHingeBit = "door_hinge_bit";`

Boolean property that determines if a door's hinge is mirrored or not.

Type: *string*

### **doublePlantType**
`static read-only doublePlantType = "double_plant_type";`

String property that represents the type of a double plant block. Valid values are 'sunflower', 'syringa', 'grass', 'fern', 'rose', and 'paeonia'.

Type: *string*

### **dragDown**
`static read-only dragDown = "drag_down";`

Boolean property that describes if bubble columns drag entities down or push them up.

Type: *string*

### **dripstoneThickness**
`static read-only dripstoneThickness = "dripstone_thickness";`

String property that represents the type of a pointed dripstone block. Valid values are 'tip', 'frustum', 'base', 'middle' and 'merge'.

Type: *string*

### **endPortalEyeBit**
`static read-only endPortalEyeBit = "end_portal_eye_bit";`

Boolean property that determines if an end portal block has an Eye of Ender in it.

Type: *string*

### **explodeBit**
`static read-only explodeBit = "explode_bit";`

Boolean property that determines if a TNT block should start its explode sequence.

Type: *string*

### **extinguished**
`static read-only extinguished = "extinguished";`

Type: *string*

### **facingDirection**
`static read-only facingDirection = "facing_direction";`

Integer property that determines the facing direction of some types of blocks. Valid values include down = 0, up = 1, north = 2, south = 3, west = 4, east = 5.

Type: *string*

### **fillLevel**
`static read-only fillLevel = "fill_level";`

Integer property that determines the fill level of a cauldron block. Valid values are between 0 and 6 inclusive.

Type: *string*

### **flowerType**
`static read-only flowerType = "flower_type";`

String property that represents the type of flow. Valid values are 'poppy', 'orchid', 'allium', 'houstonia', 'tulip_red', 'tulip_orange', 'tulip_white', 'tulip_pink', 'oxeye', 'cornflower' and 'lily_of_the_valley'.

Type: *string*

### **groundSignDirection**
`static read-only groundSignDirection = "ground_sign_direction";`

Integer property that represents the rotation of signs and standing banners. Valid values are between 0 and 15 inclusive.

Type: *string*

### **growingPlantAge**
`static read-only growingPlantAge = "growing_plant_age";`

Type: *string*

### **growth**
`static read-only growth = "growth";`

Integer property that determines the growth level of crops. Valid values are between 0 and 7 inclusive.

Type: *string*

### **hanging**
`static read-only hanging = "hanging";`

Boolean property that represents if a lantern block is hanging or not.

Type: *string*

### **headPieceBit**
`static read-only headPieceBit = "head_piece_bit";`

Boolean property that determines if a block is the pillow side of a bed.

Type: *string*

### **height**
`static read-only height = "height";`

Integer property that determines the height of a top snow block. Valid values are between 0 and 7 inclusive.

Type: *string*

### **honeyLevel**
`static read-only honeyLevel = "honey_level";`

Type: *string*

### **hugeMushroomBits**
`static read-only hugeMushroomBits = "huge_mushroom_bits";`

Integer property that determines which huge mushroom block should be displayed. Valid values are between 0 and 15 inclusive.

Type: *string*

### **infiniburnBit**
`static read-only infiniburnBit = "infiniburn_bit";`

Boolean property that determines if a block should burn infinitely.

Type: *string*

### **inWallBit**
`static read-only inWallBit = "in_wall_bit";`

Boolean property that determines if a fence block is connected to a wall block.

Type: *string*

### **itemFrameMapBit**
`static read-only itemFrameMapBit = "item_frame_map_bit";`

Boolean property that describes if an item frame block has a map in it.

Type: *string*

### **itemFramePhotoBit**
`static read-only itemFramePhotoBit = "item_frame_photo_bit";`

Type: *string*

### **kelpAge**
`static read-only kelpAge = "kelp_age";`

Type: *string*

### **leverDirection**
`static read-only leverDirection = "lever_direction";`

Type: *string*

### **liquidDepth**
`static read-only liquidDepth = "liquid_depth";`

Integer property that represents the level of liquid blocks. Valid values are between 0 and 15 inclusive.

Type: *string*

### **lit**
`static read-only lit = "lit";`

Boolean property that determines if a block is lit or not.

Type: *string*

### **moisturizedAmount**
`static read-only moisturizedAmount = "moisturized_amount";`

Integer property that represents the moisture level of crop. Valid values are between 0 and 7 inclusive.

Type: *string*

### **monsterEggStoneType**
`static read-only monsterEggStoneType = "monster_egg_stone_type";`

String property that represents the stone type of an Infested Stone block. Valid values are 'stone', 'cobblestone', 'stone_brick', 'mossy_stone_brick', 'cracked_stone_brick' and 'chiseled_stone_brick'.

Type: *string*

### **multiFaceDirectionBits**
`static read-only multiFaceDirectionBits = "multi_face_direction_bits";`

Type: *string*

### **newLeafType**
`static read-only newLeafType = "new_leaf_type";`

String property that represents the leaf type of some block types. Valid values are 'acacia' and 'dark_oak'.

Type: *string*

### **newLogType**
`static read-only newLogType = "new_log_type";`

String property that represents the wood type of certain types of blocks. Valid values are 'acacia' and 'dark_oak'.

Type: *string*

### **noDropBit**
`static read-only noDropBit = "no_drop_bit";`

Boolean property that determines if a skull block should drop loot.

Type: *string*

### **occupiedBit**
`static read-only occupiedBit = "occupied_bit";`

Boolean property that determines if a bed block is occupied.

Type: *string*

### **oldLeafType**
`static read-only oldLeafType = "old_leaf_type";`

String property that represents the leaf type of some block types. Valid values are 'oak', 'spruce', 'birch', and 'jungle'.

Type: *string*

### **oldLogType**
`static read-only oldLogType = "old_log_type";`

String property that determines the wood type of certain types of blocks. Valid values are 'oak', 'spruce', 'birch' and 'jungle'.

Type: *string*

### **openBit**
`static read-only openBit = "open_bit";`

Boolean property that determines if a door, gate, or trapdoor is open.

Type: *string*

### **outputLitBit**
`static read-only outputLitBit = "output_lit_bit";`

Boolean property that determines if a comparator's output is lit.

Type: *string*

### **outputSubtractBit**
`static read-only outputSubtractBit = "output_subtract_bit";`

Boolean property that determines if a comparator is set to subtract output.

Type: *string*

### **persistentBit**
`static read-only persistentBit = "persistent_bit";`

Boolean property that determines if a leaf block is persistent.

Type: *string*

### **pillarAxis**
`static read-only pillarAxis = "pillar_axis";`

Type: *string*

### **portalAxis**
`static read-only portalAxis = "portal_axis";`

String property that determines the orientation of portal blocks. Valid values include 'unknown', 'x', and 'z'.

Type: *string*

### **poweredBit**
`static read-only poweredBit = "powered_bit";`

Boolean property that is true when an observer or tripwire sends a redstone signal.

Type: *string*

### **prismarineBlockType**
`static read-only prismarineBlockType = "prismarine_block_type";`

Type: *string*

### **propaguleStage**
`static read-only propaguleStage = "propagule_stage";`

Type: *string*

### **railDataBit**
`static read-only railDataBit = "rail_data_bit";`

Boolean property that returns true if a rail has a redstone signal.

Type: *string*

### **railDirection**
`static read-only railDirection = "rail_direction";`

Integer property determines the orientation of a placed rail block. Valid values are between 0 and 8 inclusive.

Type: *string*

### **redstoneSignal**
`static read-only redstoneSignal = "redstone_signal";`

Integer property that determines the signal strength of a redstone signal. Valid values are between 0 and 15 inclusive.

Type: *string*

### **repeaterDelay**
`static read-only repeaterDelay = "repeater_delay";`

Integer property that represents the amount of delay of a repeater. Valid values are between 0 and 3 inclusive.

Type: *string*

### **respawnAnchorCharge**
`static read-only respawnAnchorCharge = "respawn_anchor_charge";`

Type: *string*

### **rotation**
`static read-only rotation = "rotation";`

Type: *string*

### **sandStoneType**
`static read-only sandStoneType = "sand_stone_type";`

String property that represents the pattern of a sandstone block. Valid values are 'default', 'heiroglyphs', 'cut', and 'smooth'.

Type: *string*

### **sandType**
`static read-only sandType = "sand_type";`

String property that represents the sand type of a block. Valid values are 'normal' and 'red'.

Type: *string*

### **saplingType**
`static read-only saplingType = "sapling_type";`

String property that determines the type of the sapling block. Valid values are 'evergreen', 'birch', 'jungle', 'acacia', and 'roofed_oak'.

Type: *string*

### **seaGrassType**
`static read-only seaGrassType = "sea_grass_type";`

String property that determines the type of a sea grass block. Valid values are 'default', 'double_top' and 'double_bot'.

Type: *string*

### **spongeType**
`static read-only spongeType = "sponge_type";`

String property that represents the type of a sponge block. Valid values are 'dry' and 'wet'.

Type: *string*

### **stability**
`static read-only stability = "stability";`

Integer property that determines the stability of a scaffolding block. Valid values are between 0 and 5 inclusive.

Type: *string*

### **stabilityCheck**
`static read-only stabilityCheck = "stability_check";`

Boolean property that describes if a scaffolding block has been checked for stability.

Type: *string*

### **stoneBrickType**
`static read-only stoneBrickType = "stone_brick_type";`

String property that determines the type of a stone brick block. Valid values are 'default', 'mossy', 'cracked', 'chiseled' and 'smooth'.

Type: *string*

### **stoneSlabType**
`static read-only stoneSlabType = "stone_slab_type";`

String property that represents the type of certain types of stone slab blocks. Valid values are 'smooth_stone', 'sandstone', 'wood', 'cobblestone', 'brick', 'stone_brick', 'quartz' and 'nether_brick'.

Type: *string*

### **stoneSlabType2**
`static read-only stoneSlabType2 = "stone_slab_type_2";`

String property that represents the type of certain types of stone slab blocks. Valid values are 'red_sandstone', 'purpur', 'prismarine_rough', 'prismarine_dark', 'prismarine_brick', 'mossy_cobblestone', 'smooth_sandstone' and 'red_nether_brick'.

Type: *string*

### **stoneSlabType3**
`static read-only stoneSlabType3 = "stone_slab_type_3";`

String property that represents the type of certain types of stone slab blocks. Valid values are 'end_stone_brick', 'smooth_red_sandstone', 'polished_andesite', 'andesite', 'diorite', 'polished_diorite', 'granite', and 'polished_granite'.

Type: *string*

### **stoneSlabType4**
`static read-only stoneSlabType4 = "stone_slab_type_4";`

String property that represents the type of certain types of stone slab blocks. Valid values are 'mossy_stone_brick', 'smooth_quartz', 'stone', 'cut_sandstone', and 'cut_red_sandstone'.

Type: *string*

### **stoneType**
`static read-only stoneType = "stone_type";`

String property that determines the type of a stone block. Valid values are 'stone', 'granite', 'granite_smooth', 'diorite', 'diorite_smooth', 'andesite', and 'andesite_smooth'.

Type: *string*

### **strippedBit**
`static read-only strippedBit = "stripped_bit";`

Boolean property that represents if a wood log has been stripped of bark.

Type: *string*

### **structureBlockType**
`static read-only structureBlockType = "structure_block_type";`

String property that represents the state of a structure block. Valid values are 'data', 'save', 'load', 'corner', 'invalid' and 'export'.

Type: *string*

### **structureVoidType**
`static read-only structureVoidType = "structure_void_type";`

String property that determines which void mode to draw for structure blocks. Valid values are 'void' and 'air'.

Type: *string*

### **suspendedBit**
`static read-only suspendedBit = "suspended_bit";`

Boolean property that indicates if a tripwire block is suspended.

Type: *string*

### **tallGrassType**
`static read-only tallGrassType = "tall_grass_type";`

String property that represents the type of a tall grass block. Valid values are 'default', 'tall', 'fern', and 'snow'.

Type: *string*

### **toggleBit**
`static read-only toggleBit = "toggle_bit";`

Boolean property that determines if a hopper block is active or not.

Type: *string*

### **topSlotBit**
`static read-only topSlotBit = "top_slot_bit";`

Boolean property that determines if a slab is the top half of the block or not

Type: *string*

### **torchFacingDirection**
`static read-only torchFacingDirection = "torch_facing_direction";`

String property that determines the direction of a torch in relation to the block it is attached to. Valid values are 'unknown', 'west', 'east', 'north', 'south', 'top'.

Type: *string*

### **triggeredBit**
`static read-only triggeredBit = "triggered_bit";`

Boolean property that determines if a dispenser is triggered.

Type: *string*

### **turtleEggCount**
`static read-only turtleEggCount = "turtle_egg_count";`

String property that represents the amount of turtle eggs in an egg block. Valid values are 'one_egg', 'two_egg', 'three_egg' and 'four_egg'.

Type: *string*

### **twistingVinesAge**
`static read-only twistingVinesAge = "twisting_vines_age";`

Type: *string*

### **updateBit**
`static read-only updateBit = "update_bit";`

Boolean property that determines if a leaf block or flower block should be updated.

Type: *string*

### **upperBlockBit**
`static read-only upperBlockBit = "upper_block_bit";`

Boolean property that determines if a block is the upper half of an object like a door or a tall plant.

Type: *string*

### **upsideDownBit**
`static read-only upsideDownBit = "upside_down_bit";`

Boolean property that determines if a stair block or trapdoor block is upside-down.

Type: *string*

### **vineDirectionBits**
`static read-only vineDirectionBits = "vine_direction_bits";`

Integer property that represents the facing direction for vines. Valid values are between 0 and 15 inclusive.

Type: *string*

### **wallBlockType**
`static read-only wallBlockType = "wall_block_type";`

String property that represents the type of stone used in a wall block. Valid values are 'cobblestone', 'mossy_cobblestone', 'granite', 'diorite', 'andesite', 'sandstone', 'brick', 'stone_brick', 'mossy_stone_brick', 'nether_brick', 'end_brick', 'prismarine', 'red_sandstone' and 'red_nether_brick'.

Type: *string*

### **wallConnectionTypeEast**
`static read-only wallConnectionTypeEast = "wall_connection_type_east";`

String property that determines what kind of connection a wall has to the east. Valid values are 'none', 'short' and 'tall'.

Type: *string*

### **wallConnectionTypeNorth**
`static read-only wallConnectionTypeNorth = "wall_connection_type_north";`

String property that determines what kind of connection a wall has to the north. Valid values are 'none', 'short' and 'tall'.

Type: *string*

### **wallConnectionTypeSouth**
`static read-only wallConnectionTypeSouth = "wall_connection_type_south";`

String property that determines what kind of connection a wall has to the south. Valid values are 'none', 'short' and 'tall'.

Type: *string*

### **wallConnectionTypeWest**
`static read-only wallConnectionTypeWest = "wall_connection_type_west";`

String property that determines what kind of connection a wall has to the west. Valid values are 'none', 'short' and 'tall'.

Type: *string*

### **wallPostBit**
`static read-only wallPostBit = "wall_post_bit";`

Boolean property that determines if a wall should contain a post.

Type: *string*

### **weepingVinesAge**
`static read-only weepingVinesAge = "weeping_vines_age";`

Type: *string*

### **weirdoDirection**
`static read-only weirdoDirection = "weirdo_direction";`

Integer property that represents the rotation of stairs. Valid values are between 0 and 3 inclusive.

Type: *string*

### **woodType**
`static read-only woodType = "wood_type";`

String property that determines the wood type of a block. Valid values are 'oak', 'spruce', 'birch', 'jungle', 'acacia', and 'dark_oak'.

Type: *string*
