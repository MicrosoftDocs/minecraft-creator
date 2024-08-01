---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: loot Command
description: Description and usage of the loot command
---
# `/loot` Command
Drops the given loot table into the specified inventory or into the world.

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Spawn loot into hand
`/loot spawn <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Spawn `loot` from a `position` using a `loot table` and a `hand` to spawn into.

### Spawn loot from position, kill entity with tool
`/loot spawn <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Spawn `loot` from a `position` using the `loot table` from killing an `entity` using a `tool`.

### Give loot to player, looting with tool
`/loot give <players: target> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Give `loot` to `player` using a `loot table` while `looting` using a `tool`.

### Give loot to player, killing entity using tool
`/loot give <players: target> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Give `loot` to `player` using the `loot table` from `killing` an `entity` using a `tool`.

### Insert loot from position, looting with tool
`/loot insert <position: x y z> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Insert `loot` from a `position` using the `loot table` from `looting` using a `tool`.

### Insert loot from position, killing entity with tool
`/loot insert <position: x y z> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Insert `loot` from a `position` using a `loot table` from `killing` an `entity` using a `tool`.

### Replace loot, slot, count, looting with tool
`/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Replace `loot` for a `player` in a `slot` with a `count` while `looting` from a `loot table` using a `tool`.

### Replace loot, slot, looting with tool
`/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Replace `loot` for a `player` in a `slot` while `looting` using a `tool`.

### Replace loot, slot, count, killing entity with tool
`/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Replace `loot` for a `player` in a `slot` with a `count` from `killing` an `entity` using a `tool`.

### Replace loot, slot, killing entity with tool
`/loot replace entity <entity: target> <slotType: EntityEquipmentSlot> <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Replace `loot` for a `player` in a `slot` from `killing` an `entity` using a `tool`.

### Replace loot, slot, count, looting with a tool
`/loot replace block <position: x y z> slot.container <slotId: int> <count: int> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Replace `loot` with a specified `int` amount of loot from a `block` at a `position` into a `slotId`.

### Replace loot, slot, looting with `tool` 
`/loot replace block <position: x y z> slot.container <slotId: int> loot <loot_table: string> [<tool>|mainhand|offhand: Tool]`

Replace `loot` from a `block` at a `position` into a `slot` from looting with a tool.

### Replace loot slot, count, killing `entity` with a tool
`/loot replace block <position: x y z> slot.container <slotId: int> <count: int> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Replace `loot` from a `block` at a `position` into a `slotID` in a specified amount, from killing an `entity`  with a tool.

### Replace loot from block, killing `entity` with tool
`/loot replace block <position: x y z> slot.container <slotId: int> kill <entity: target> [<tool>|mainhand|offhand: Tool]`

Replace `loot` from a `block` at a `position` from `killing` an `entity` using a `tool`.

## Arguments
- `<tool>|mainhand|offhand`: Tool
Specifies the hand holding the tool
- `count`: int
An `integer` that defines the number of slots to fill.
- `entity`: target
Specifies the `entity` that will be the source of the loot
- `loot_table`: string
Path to the loot table
- `players`: target
Specifies the `player` or `players` to give loot to.
- `position: x y z`: position
A `vector` made up of x y z coordinates with `float` numbers.
- `slotId`: int
An `integer` to specify the slot.
- `slotType`: [EntityEquipmentSlot](../enums/EntityEquipmentSlot.md)
Entity equipment slot

## Enums
### `Tool`
An `enum` of `mainhand` or `offhand`. Items available only in Minecraft Education Edition require the Education Edition toggle to be active. Those items are marked [Education Edition] in the description. 

#### Values
- `mainhand`
Mainhand
- `offhand`
Offhand
- `minecraft:waxed_exposed_copper_bulb`
- `minecraft:purpur_block`
Purpur Block
- `minecraft:cooked_cod`
Cooked Cod
- `minecraft:bow`
Bow
- `minecraft:brain_coral_fan`
- `minecraft:music_disc_ward`
Music Disc Ward
- `minecraft:enderman_spawn_egg`
Enderman Spawn Egg
- `minecraft:air`
Air
- `minecraft:trial_key`
- `minecraft:iron_sword`
Iron Sword
- `minecraft:red_sandstone_slab`
- `minecraft:lantern`
Lantern
- `minecraft:torchflower_seeds`
- `minecraft:smooth_stone`
Smooth Stone
- `minecraft:element_43`
[Education Edition] Technetium (Tc)
- `minecraft:beetroot`
Beetroot
- `minecraft:music_disc_strad`
Music Disc Strad
- `minecraft:bamboo_sign`
- `minecraft:apple`
Apple
- `minecraft:raw_gold_block`
Raw Gold Block
- `minecraft:vex_armor_trim_smithing_template`
- `minecraft:black_carpet`
- `minecraft:carrot`
Carrot
- `minecraft:strider_spawn_egg`
Strider Spawn Egg
- `minecraft:command_block`
Command Block
- `minecraft:potion`
Potion
- `minecraft:chicken`
Chicken
- `minecraft:ominous_trial_key`
- `minecraft:dead_fire_coral_fan`
- `minecraft:bookshelf`
Bookshelf
- `minecraft:golden_horse_armor`
Golden Horse Armor
- `minecraft:smooth_quartz_stairs`
Smooth Quarts Stairs
- `minecraft:potato`
Potato
- `minecraft:element_15`
Phosphorus (P)
- `minecraft:nether_star`
Nether Star
- `minecraft:enchanted_golden_apple`
Enchanted Golden Apple
- `minecraft:magenta_terracotta`
- `minecraft:sweet_berries`
Sweet Berries
- `minecraft:white_candle`
White Candle
- `minecraft:clay_ball`
Clay Ball
- `minecraft:element_68`
[Education Edition] Erbium (Er)
- `minecraft:wind_charge`
- `minecraft:diorite_wall`
- `minecraft:deepslate_tile_wall`
Deepslate Tile Wall
- `minecraft:golden_carrot`
Golden Carrot
- `minecraft:spruce_stairs`
Spruce Stairs
- `minecraft:poisonous_potato`
Poisonous Potato
- `minecraft:element_13`
[Education Edition] Aluminum (Al)
- `minecraft:breeze_rod`
- `minecraft:smooth_quartz_slab`
- `minecraft:hard_blue_stained_glass`
- `minecraft:angler_pottery_sherd`
- `minecraft:golden_apple`
Golden Apple
- `minecraft:skull_pottery_sherd`
- `minecraft:rabbit`
Rabbit
- `minecraft:sea_lantern`
Sea Lantern
- `minecraft:creeper_banner_pattern`
Creeper Banner Pattern
- `minecraft:ravager_spawn_egg`
Ravager Spawn Egg
- `minecraft:cooked_porkchop`
Cooked Porkchop
- `minecraft:mangrove_leaves`
Mangrove Leaves
- `minecraft:polished_blackstone_brick_slab`
Polished Blackstone Brick Slab
- `minecraft:mushroom_stew`
Mushroom Stew
- `minecraft:cherry_chest_boat`
- `minecraft:diamond_block`
Diamond Block
- `minecraft:element_7`
[Education Edition] Nitrogen (N)
- `minecraft:bread`
Bread
- `minecraft:stone_brick_stairs`
Stone Brick Stairs
- `minecraft:yellow_glazed_terracotta`
Yellow Glazed Terracotta
- `minecraft:blue_carpet`
- `minecraft:portal`
Portal
- `minecraft:gold_ingot`
Gold Ingot
- `minecraft:oak_chest_boat`
Oak Chest Boat
- `minecraft:brown_concrete_powder`
- `minecraft:iron_ingot`
Iron Ingot
- `minecraft:slime_spawn_egg`
Slime Spawn Egg
- `minecraft:pink_carpet`
- `minecraft:chipped_anvil`
- `minecraft:porkchop`
Porkchop
- `minecraft:cookie`
Cookie
- `minecraft:music_disc_chirp`
Music Disc Chirp
- `minecraft:prismarine_bricks_stairs`
Prismarine Bricks Stairs
- `minecraft:cooked_rabbit`
Cooked Rabbit
- `minecraft:glow_squid_spawn_egg`
Glow Squid Spawn Egg
- `minecraft:item.iron_door`
Item Iron Door
- `minecraft:cod`
Cod
- `minecraft:hard_brown_stained_glass`
- `minecraft:pillager_spawn_egg`
Pillager Spawn Egg
- `minecraft:iron_pickaxe`
Iron Pickaxe
- `minecraft:spruce_planks`
- `minecraft:element_27`
[Education Edition] Cobalt (Co)
- `minecraft:wild_armor_trim_smithing_template`
- `minecraft:beef`
Beef
- `minecraft:gray_stained_glass_pane`
- `minecraft:blaze_spawn_egg`
Blaze Spawn Egg
- `minecraft:deepslate_bricks`
Deepslate Bricks
- `minecraft:salmon`
Salmon
- `minecraft:wooden_slab`
Wooden Slab
- `minecraft:silver_glazed_terracotta`
Silver Glazed Terracotta
- `minecraft:cocoa_beans`
Cocoa Beans
- `minecraft:tropical_fish`
Tropical Fish
- `minecraft:trapped_chest`
Trapped Chest
- `minecraft:pufferfish`
Pufferfish
- `minecraft:ancient_debris`
Ancient Debris
- `minecraft:bucket`
Bucket
- `minecraft:sparkler`
Sparkler
- `minecraft:warped_door`
Warped Door
- `minecraft:cooked_salmon`
Cooked Salmon
- `minecraft:dried_kelp`
Dried Kelp
- `minecraft:beetroot_soup`
Beetroot Soup
- `minecraft:waxed_weathered_copper_door`
- `minecraft:wooden_pickaxe`
Wooden Pickaxe
- `minecraft:magenta_candle_cake`
Magenta Candle Cake
- `minecraft:item.campfire`
Campfire
- `minecraft:melon_slice`
Melon Slice
- `minecraft:element_1`
[Education Edition] Hydrogen (H)
- `minecraft:hay_block`
Hay Block
- `minecraft:nautilus_shell`
Nautilus Shell
- `minecraft:wooden_shovel`
Wooden Shovel
- `minecraft:music_disc_creator_music_box`
- `minecraft:stonecutter_block`
Stonecutter Block
- `minecraft:exposed_copper`
Exposed Copper
- `minecraft:cooked_beef`
Cooked Beef
- `minecraft:comparator`
Comparator
- `minecraft:element_62`
[Education Edition] Samarium (Sm)
- `minecraft:rotten_flesh`
Rotten Flesh
- `minecraft:dirt`
Dirt
- `minecraft:witch_spawn_egg`
Witch Spawn Egg
- `minecraft:campfire`
Campfire
- `minecraft:lingering_potion`
Lingering Potion
- `minecraft:rabbit_foot`
Rabbit Foot
- `minecraft:smoker`
Smoker
- `minecraft:mangrove_wood`
Mangrove Wood
- `minecraft:cooked_chicken`
Cooked Chicken
- `minecraft:light_blue_glazed_terracotta`
Light Blue Glazed Terracotta
- `minecraft:stone_sword`
Stone Sword
- `minecraft:spider_eye`
Spider Eye
- `minecraft:horse_spawn_egg`
Horse Spawn Egg
- `minecraft:baked_potato`
Baked Potato
- `minecraft:pink_tulip`
- `minecraft:polished_granite`
- `minecraft:chiseled_copper`
- `minecraft:obsidian`
Obsidian
- `minecraft:prize_pottery_sherd`
- `minecraft:pumpkin_pie`
Pumpkin Pie
- `minecraft:spruce_wood`
- `minecraft:rabbit_stew`
Rabbit Stew
- `minecraft:yellow_concrete`
- `minecraft:wheat_seeds`
Wheat Seeds
- `minecraft:hard_pink_stained_glass`
- `minecraft:white_tulip`
- `minecraft:command_block_minecart`
Command Block Minecart
- `minecraft:chest`
Chest
- `minecraft:pumpkin_seeds`
Pumpkin Seeds
- `minecraft:element_2`
[Education Edition] Helium (He)
- `minecraft:melon_seeds`
Melon Seeds
- `minecraft:raw_iron`
Raw Iron
- `minecraft:iron_axe`
Iron Axe
- `minecraft:nether_wart`
Nether Wart
- `minecraft:beetroot_seeds`
Beetroot Seeds
- `minecraft:powder_snow`
Powder Snow
- `minecraft:lime_carpet`
- `minecraft:iron_bars`
Iron Bars
- `minecraft:element_80`
[Education Edition] Mercury (Hg)
- `minecraft:polar_bear_spawn_egg`
Polar Bear Spawn Egg
- `minecraft:pitcher_pod`
- `minecraft:element_104`
[Education Edition] Rutherfordium (Rf)
- `minecraft:iron_shovel`
Iron Shovel
- `minecraft:zoglin_spawn_egg`
Zoglin Spawn Egg
- `minecraft:flint_and_steel`
Flint and Steel
- `minecraft:granite_stairs`
Granite Stairs
- `minecraft:mourner_pottery_sherd`
- `minecraft:stone_shovel`
Stone Shovel
- `minecraft:light_gray_stained_glass_pane`
- `minecraft:light_block_15`
- `minecraft:smooth_stone_slab`
- `minecraft:melon_block`
Melon Block
- `minecraft:arrow`
Arrow
- `minecraft:oxeye_daisy`
- `minecraft:coal`
Coal
- `minecraft:charcoal`
Charcoal
- `minecraft:stray_spawn_egg`
Stray Spawn Egg
- `minecraft:carrots`
Carrots
- `minecraft:hard_gray_stained_glass_pane`
- `minecraft:diamond`
Diamond
- `minecraft:oxidized_cut_copper_stairs`
Oxidized Cut Copper Stairs
- `minecraft:wooden_sword`
Wooden Sword
- `minecraft:netherite_boots`
Netherite Boots
- `minecraft:music_disc_mall`
Music Disc Mall
- `minecraft:zombie_pigman_spawn_egg`
Zombie Pigman Spawn Egg
- `minecraft:crimson_trapdoor`
Crimson Trapdoor
- `minecraft:raw_gold`
Raw Gold
- `minecraft:wooden_axe`
Wooden Axe
- `minecraft:farmland`
[Education Edition] Farmland
- `minecraft:salmon_bucket`
Salmon Bucket
- `minecraft:planks`
Planks
- `minecraft:stone_pickaxe`
Stone Pickaxe
- `minecraft:stone_axe`
Stone Axe
- `minecraft:stained_glass_pane`
Stained Glass Pane
- `minecraft:polished_diorite_slab`
- `minecraft:oxidized_copper_trapdoor`
- `minecraft:end_stone_brick_slab`
- `minecraft:smithing_table`
Smithing Table
- `minecraft:diamond_sword`
Diamond Sword
- `minecraft:exposed_copper_trapdoor`
- `minecraft:chainmail_helmet`
Chainmail Helmet
- `minecraft:diamond_shovel`
Diamond Shovel
- `minecraft:diamond_pickaxe`
Diamond Pickaxe
- `minecraft:diamond_axe`
Diamond Axe
- `minecraft:hard_glass`
Hard Glass
- `minecraft:spyglass`
Spyglass
- `minecraft:deepslate_brick_slab`
Deepslate Brick Slab
- `minecraft:mace`
- `minecraft:dark_prismarine_slab`
- `minecraft:flow_armor_trim_smithing_template`
- `minecraft:mangrove_boat`
Mangrove Boat
- `minecraft:raiser_armor_trim_smithing_template`
- `minecraft:stick`
Stick
- `minecraft:flowing_water`
Flowing Water
- `minecraft:bowl`
Bowl
- `minecraft:arms_up_pottery_sherd`
- `minecraft:mangrove_hanging_sign`
- `minecraft:azure_bluet`
- `minecraft:warped_wart_block`
Warped Wart Block
- `minecraft:vine`
Vine
- `minecraft:spruce_fence`
- `minecraft:petrified_oak_slab`
- `minecraft:golden_sword`
Golden Sword
- `minecraft:lit_deepslate_redstone_ore`
Lit Deepslate Redstone Ore
- `minecraft:golden_shovel`
Golden Shovel
- `minecraft:elytra`
Elytra
- `minecraft:green_wool`
- `minecraft:lit_redstone_lamp`
Lit Redstone Lamp
- `minecraft:golden_pickaxe`
Golden Pickaxe
- `minecraft:element_52`
[Education Edition] Tellurium (Te)
- `minecraft:golden_axe`
Golden Axe
- `minecraft:string`
String
- `minecraft:feather`
Feather
- `minecraft:gunpowder`
Gunpowder
- `minecraft:skull_banner_pattern`
Skull Banner Pattern
- `minecraft:birch_sapling`
- `minecraft:acacia_stairs`
Acacia Stairs
- `minecraft:wooden_hoe`
Wooden Hoe
- `minecraft:snow_golem_spawn_egg`
- `minecraft:stone_hoe`
Stone Hoe
- `minecraft:blue_orchid`
- `minecraft:brick_wall`
- `minecraft:panda_spawn_egg`
Panda Spawn Egg
- `minecraft:brown_terracotta`
- `minecraft:iron_hoe`
Iron Hoe
- `minecraft:diamond_hoe`
Diamond Hoe
- `minecraft:stripped_cherry_wood`
- `minecraft:element_86`
[Education Edition] Radon (Rn)
- `minecraft:cherry_sign`
- `minecraft:golden_hoe`
Golden Hoe
- `minecraft:magenta_dye`
Magenta Dye
- `minecraft:wheat`
Wheat
- `minecraft:silence_armor_trim_smithing_template`
- `minecraft:glow_frame`
Glow Frame
- `minecraft:leather_helmet`
Leather Helmet
- `minecraft:petrified_oak_double_slab`
- `minecraft:leather_chestplate`
Leather Chestplate
- `minecraft:leather_leggings`
Leather Leggings
- `minecraft:glistering_melon_slice`
Glistering Melon Slice
- `minecraft:lodestone`
Lodestone
- `minecraft:leather_boots`
Leather Boots
- `minecraft:end_gateway`
End Gateway
- `minecraft:chainmail_chestplate`
Chainmail Chestplate
- `minecraft:item.beetroot`
Beetroot
- `minecraft:dark_oak_double_slab`
- `minecraft:chainmail_leggings`
Chainmail Leggings
- `minecraft:chainmail_boots`
Chainmail Boots
- `minecraft:snowball`
Snowball
- `minecraft:iron_helmet`
Iron Helmet
- `minecraft:raw_copper_block`
Raw Copper Block
- `minecraft:barrel`
Barrel
- `minecraft:iron_chestplate`
Iron Chestplate
- `minecraft:iron_leggings`
Iron Leggings
- `minecraft:iron_boots`
Iron Boots
- `minecraft:burn_pottery_sherd`
- `minecraft:music_disc_pigstep`
Music Disc Pigstep
- `minecraft:hard_cyan_stained_glass_pane`
- `minecraft:ender_eye`
Eye of Ender
- `minecraft:diamond_helmet`
Diamond Helmet
- `minecraft:stone_pressure_plate`
Stone Pressure Plate
- `minecraft:diamond_chestplate`
Diamond Chestplate
- `minecraft:rose_bush`
- `minecraft:sand`
Sand
- `minecraft:cut_copper_slab`
Cut Copper Slab
- `minecraft:axolotl_spawn_egg`
Axolotl Spawn Egg
- `minecraft:diamond_leggings`
Diamond Leggings
- `minecraft:diamond_boots`
Diamond Boots
- `minecraft:element_51`
[Education Edition] Antimony (Sb)
- `minecraft:golden_helmet`
Golden Helmet
- `minecraft:green_stained_glass`
- `minecraft:golden_chestplate`
Golden Chestplate
- `minecraft:glowstone`
Glowstone
- `minecraft:golden_leggings`
Golden Leggings
- `minecraft:polished_deepslate_stairs`
Polished Deepslate Stairs
- `minecraft:golden_boots`
Golden Boots
- `minecraft:hard_cyan_stained_glass`
- `minecraft:shield`
Shield
- `minecraft:agent_spawn_egg`
Agent Spawn Egg
- `minecraft:carpet`
Carpet
- `minecraft:flint`
Flint
- `minecraft:cyan_carpet`
- `minecraft:heart_of_the_sea`
Heart of the Sea
- `minecraft:painting`
Painting
- `minecraft:oak_sign`
Oak Sign
- `minecraft:music_disc_wait`
Music Disc Wait
- `minecraft:wooden_door`
Wooden Door
- `minecraft:flow_banner_pattern`
- `minecraft:milk_bucket`
Milk Bucket
- `minecraft:red_dye`
Red Dye
- `minecraft:tadpole_bucket`
Tadpole Bucket
- `minecraft:bone`
Bone
- `minecraft:cherry_wall_sign`
- `minecraft:element_74`
[Education Edition] Tungsten (W)
- `minecraft:water_bucket`
Water Bucket
- `minecraft:mossy_stone_bricks`
- `minecraft:tube_coral_block`
- `minecraft:dead_brain_coral_wall_fan`
- `minecraft:shulker_spawn_egg`
Shulker Spawn Egg
- `minecraft:mangrove_fence_gate`
Mangrove Fence Gate
- `minecraft:magenta_glazed_terracotta`
Magenta Glazed Terracotta
- `minecraft:lava_bucket`
Lava Bucket
- `minecraft:vindicator_spawn_egg`
Vindicator Spawn Egg
- `minecraft:cod_bucket`
Cod Bucket
- `minecraft:crimson_pressure_plate`
Crimson Pressure Plate
- `minecraft:spruce_fence_gate`
Spruce Fence Gate
- `minecraft:exposed_cut_copper_slab`
Exposed Cut Copper Slab
- `minecraft:tropical_fish_bucket`
Tropical Fish Bucket
- `minecraft:pufferfish_bucket`
Pufferfish Bucket
- `minecraft:dead_brain_coral_block`
- `minecraft:music_disc_11`
Music Disc 11
- `minecraft:evoker_spawn_egg`
Evoker Spawn Egg
- `minecraft:item.nether_wart`
Nether Wart
- `minecraft:powder_snow_bucket`
Powder Snow Bucket
- `minecraft:parrot_spawn_egg`
Parrot Spawn Egg
- `minecraft:damaged_anvil`
- `minecraft:axolotl_bucket`
Axolotl Bucket
- `minecraft:light_block_9`
- `minecraft:wolf_spawn_egg`
Wolf Spawn Egg
- `minecraft:minecart`
Minecart
- `minecraft:cyan_concrete_powder`
- `minecraft:saddle`
Saddle
- `minecraft:iron_door`
Iron Door
- `minecraft:redstone`
Redstone
- `minecraft:heavy_core`
- `minecraft:sheep_spawn_egg`
Sheep Spawn Egg
- `minecraft:sniffer_egg`
- `minecraft:elder_guardian_spawn_egg`
Elder Guardian Spawn Egg
- `minecraft:fire_coral_fan`
- `minecraft:red_sandstone_wall`
- `minecraft:crossbow`
Crossbow
- `minecraft:dead_fire_coral_wall_fan`
- `minecraft:white_shulker_box`
- `minecraft:activator_rail`
Activator Rail
- `minecraft:oak_boat`
Oak Boat
- `minecraft:element_97`
[Education Edition] Berkelium (Bk)
- `minecraft:birch_boat`
Birch Boat
- `minecraft:hard_magenta_stained_glass_pane`
- `minecraft:polished_granite_stairs`
Polished Granite Stairs
- `minecraft:jungle_boat`
Jungle Boat
- `minecraft:lime_stained_glass_pane`
- `minecraft:chemistry_table`
Chemistry Table
- `minecraft:copper_bulb`
- `minecraft:silverfish_spawn_egg`
Silverfish Spawn Egg
- `minecraft:spruce_boat`
Spruce Boat
- `minecraft:light_blue_terracotta`
- `minecraft:decorated_pot`
- `minecraft:acacia_boat`
Acacia Boat
- `minecraft:dark_oak_boat`
Dark Oak Boat
- `minecraft:iron_ore`
Iron Ore
- `minecraft:snort_pottery_sherd`
- `minecraft:written_book`
Written Book
- `minecraft:gray_candle`
Gray Candle
- `minecraft:leather`
Leather
- `minecraft:kelp`
Kelp
- `minecraft:globe_banner_pattern`
Globe Banner Pattern
- `minecraft:hard_brown_stained_glass_pane`
- `minecraft:gold_nugget`
Gold Nugget
- `minecraft:brick`
Brick
- `minecraft:netherite_ingot`
Netherite Ingot
- `minecraft:netherite_upgrade_smithing_template`
- `minecraft:sugar_cane`
Sugar Cane
- `minecraft:hard_lime_stained_glass_pane`
- `minecraft:lit_pumpkin`
Lit Pumpkin
- `minecraft:granite`
- `minecraft:paper`
Paper
- `minecraft:magenta_shulker_box`
- `minecraft:element_23`
[Education Edition] Vanadium (V)
- `minecraft:heartbreak_pottery_sherd`
- `minecraft:yellow_terracotta`
- `minecraft:tadpole_spawn_egg`
Tadpole Spawn Egg
- `minecraft:coral`
Coral
- `minecraft:dead_tube_coral_fan`
- `minecraft:book`
Book
- `minecraft:gray_concrete_powder`
- `minecraft:trident`
Trident
- `minecraft:dead_horn_coral`
- `minecraft:slime_ball`
Slime Ball
- `minecraft:chest_minecart`
Chest Minecart
- `minecraft:cow_spawn_egg`
Cow Spawn Egg
- `minecraft:egg`
Egg
- `minecraft:coast_armor_trim_smithing_template`
- `minecraft:compass`
Compass
- `minecraft:netherite_sword`
Netherite Sword
- `minecraft:music_disc_stal`
Music Disc Stal
- `minecraft:fishing_rod`
Fishing Rod
- `minecraft:bogged_spawn_egg`
- `minecraft:clock`
Clock
- `minecraft:jungle_sapling`
- `minecraft:andesite_stairs`
Andesite Stairs
- `minecraft:reserved6`
Reserved 6
- `minecraft:ocelot_spawn_egg`
Ocelot Spawn Egg
- `minecraft:glowstone_dust`
Glowstone Dust
- `minecraft:black_dye`
Black Dye
- `minecraft:miner_pottery_sherd`
- `minecraft:green_dye`
Green Dye
- `minecraft:shulker_box`
Shulker Box
- `minecraft:red_candle_cake`
Red Candle Cake
- `minecraft:dandelion`
- `minecraft:deny`
[Education Edition] Deny
- `minecraft:deepslate_brick_wall`
Deepslate Brick Wall
- `minecraft:bee_spawn_egg`
Bee Spawn Egg
- `minecraft:cyan_shulker_box`
- `minecraft:mud_brick_slab`
Mud Brick Slab
- `minecraft:brown_dye`
Brown Dye
- `minecraft:polished_diorite`
- `minecraft:cut_red_sandstone_slab`
- `minecraft:frame`
Frame
- `minecraft:blue_dye`
Blue Dye
- `minecraft:item.cake`
Cake
- `minecraft:snout_armor_trim_smithing_template`
- `minecraft:purple_dye`
Purple Dye
- `minecraft:purpur_slab`
- `minecraft:music_disc_13`
Music Disc 13
- `minecraft:cyan_dye`
Cyan Dye
- `minecraft:orange_wool`
- `minecraft:andesite_double_slab`
- `minecraft:blaze_rod`
Blaze Rod
- `minecraft:oak_planks`
- `minecraft:sticky_piston_arm_collision`
Sticky Piston Arm Collision
- `minecraft:light_gray_dye`
Light Gray Dye
- `minecraft:gray_dye`
Gray Dye
- `minecraft:quartz_double_slab`
- `minecraft:element_41`
[Education Edition] Niobium (Nb)
- `minecraft:piglin_brute_spawn_egg`
Piglin Brute Spawn Egg
- `minecraft:rabbit_spawn_egg`
Rabbit Spawn Egg
- `minecraft:pink_dye`
Pink Dye
- `minecraft:lime_dye`
Lime Dye
- `minecraft:blast_furnace`
Blast Furnace
- `minecraft:light_block_0`
- `minecraft:yellow_dye`
Yellow Dye
- `minecraft:light_blue_dye`
Light Blue Dye
- `minecraft:turtle_egg`
Turtle Egg
- `minecraft:dirt_with_roots`
Dirt with Roots
- `minecraft:mangrove_door`
Mangrove Door
- `minecraft:birch_slab`
- `minecraft:stained_glass`
Stained Glass
- `minecraft:blue_stained_glass_pane`
- `minecraft:bed`
Bed
- `minecraft:waxed_copper_bulb`
- `minecraft:orange_dye`
Orange Dye
- `minecraft:birch_leaves`
- `minecraft:cyan_stained_glass`
- `minecraft:camel_spawn_egg`
- `minecraft:white_dye`
White Dye
- `minecraft:yellow_candle`
Yellow Candle
- `minecraft:dune_armor_trim_smithing_template`
- `minecraft:item.flower_pot`
Flower Pot
- `minecraft:waxed_exposed_chiseled_copper`
- `minecraft:bone_meal`
Bone Meal
- `minecraft:hard_white_stained_glass_pane`
- `minecraft:turtle_helmet`
Turtle Helmet
- `minecraft:ink_sac`
Ink Sac
- `minecraft:medium_amethyst_bud`
Medium Amethyst Bud
- `minecraft:lapis_lazuli`
Lapis Lazuli
- `minecraft:stripped_crimson_stem`
Stripped Crimson Stem
- `minecraft:camera`
Camera
- `minecraft:chorus_fruit`
Chorus Fruit
- `minecraft:waxed_copper_grate`
- `minecraft:suspicious_stew`
Suspicious Stew
- `minecraft:sugar`
Sugar
- `minecraft:oak_slab`
- `minecraft:purple_stained_glass`
- `minecraft:name_tag`
Name Tag
- `minecraft:creeper_spawn_egg`
Creeper Spawn Egg
- `minecraft:cake`
Cake
- `minecraft:netherite_chestplate`
Netherite Chestplate
- `minecraft:orange_concrete_powder`
- `minecraft:blue_candle`
Blue Candle
- `minecraft:repeater`
Repeater
- `minecraft:beacon`
Beacon
- `minecraft:drowned_spawn_egg`
Drowned Spawn Egg
- `minecraft:nether_brick_double_slab`
- `minecraft:polished_andesite_stairs`
Polished Andesite Stairs
- `minecraft:filled_map`
Filled Map
- `minecraft:shears`
Shears
- `minecraft:ender_pearl`
Ender Pearl
- `minecraft:smooth_stone_double_slab`
- `minecraft:hard_red_stained_glass`
- `minecraft:white_carpet`
- `minecraft:ghast_tear`
Ghast Tear
- `minecraft:element_44`
[Education Edition] Ruthenium (Ru)
- `minecraft:glass_bottle`
Glass Bottle
- `minecraft:cooked_mutton`
Cooked Mutton
- `minecraft:fermented_spider_eye`
Fermented Spider Eye
- `minecraft:blaze_powder`
Blaze Powder
- `minecraft:magma_cream`
Magma Cream
- `minecraft:light_gray_terracotta`
- `minecraft:jigsaw`
Jigsaw
- `minecraft:brewing_stand`
Brewing Stand
- `minecraft:cauldron`
Cauldron
- `minecraft:chicken_spawn_egg`
Chicken Spawn Egg
- `minecraft:pig_spawn_egg`
Pig Spawn Egg
- `minecraft:mooshroom_spawn_egg`
Mooshroom Spawn Egg
- `minecraft:brown_stained_glass_pane`
- `minecraft:andesite`
- `minecraft:bamboo_hanging_sign`
- `minecraft:rib_armor_trim_smithing_template`
- `minecraft:fence_gate`
Fence Gate
- `minecraft:skeleton_spawn_egg`
Skeleton Spawn Egg
- `minecraft:bleach`
Bleach
- `minecraft:spider_spawn_egg`
Spider Spawn Egg
- `minecraft:colored_torch_rg`
Colored Torch RG
- `minecraft:zombie_spawn_egg`
Zombie Spawn Egg
- `minecraft:hard_red_stained_glass_pane`
- `minecraft:villager_spawn_egg`
Villager Spawn Egg
- `minecraft:composter`
Composter
- `minecraft:squid_spawn_egg`
Squid Spawn Egg
- `minecraft:purple_carpet`
- `minecraft:bat_spawn_egg`
Bat Spawn Egg
- `minecraft:element_0`
[Education Edition] Unknown (?)
- `minecraft:ghast_spawn_egg`
Ghast Spawn Egg
- `minecraft:chiseled_nether_bricks`
Chiseled Nether Bricks
- `minecraft:chain`
Chain
- `minecraft:magma_cube_spawn_egg`
Magma Cube Spawn Egg
- `minecraft:mob_spawner`
Mob Spawner
- `minecraft:warped_sign`
Warped Sign
- `minecraft:warped_fungus_on_a_stick`
Warped Fungus on a Stick
- `minecraft:soul_campfire`
Soul Campfire
- `minecraft:cave_spider_spawn_egg`
Cave Spider Spawn Egg
- `minecraft:item.mangrove_door`
Mangrove Door
- `minecraft:endermite_spawn_egg`
Endermite Spawn Egg
- `minecraft:guardian_spawn_egg`
Guardian Spawn Egg
- `minecraft:red_nether_brick_slab`
- `minecraft:husk_spawn_egg`
Husk Spawn Egg
- `minecraft:lime_concrete_powder`
- `minecraft:piglin_spawn_egg`
Piglin Spawn Egg
- `minecraft:white_concrete`
- `minecraft:exposed_copper_door`
- `minecraft:weeping_vines`
Weeping Vines
- `minecraft:pink_candle_cake`
Pink Candle Cake
- `minecraft:wither_skeleton_spawn_egg`
Wither Skeleton Spawn Egg
- `minecraft:brewer_pottery_sherd`
- `minecraft:spruce_sign`
Spruce Sign
- `minecraft:donkey_spawn_egg`
Donkey Spawn Egg
- `minecraft:stripped_spruce_wood`
- `minecraft:double_plant`
Double Plant
- `minecraft:mule_spawn_egg`
Mule Spawn Egg
- `minecraft:spruce_slab`
- `minecraft:element_109`
[Education Edition] Meitnerium (Mt)
- `minecraft:skeleton_horse_spawn_egg`
Skeleton Horse Spawn Egg
- `minecraft:flowering_azalea`
Flowering Azalea
- `minecraft:netherite_pickaxe`
Netherite Pickaxe
- `minecraft:pink_terracotta`
- `minecraft:light_block_14`
- `minecraft:jukebox`
Jukebox
- `minecraft:zombie_horse_spawn_egg`
Zombie Horse Spawn Egg
- `minecraft:bamboo_door`
- `minecraft:bamboo_slab`
- `minecraft:npc_spawn_egg`
NPC Spawn Egg
- `minecraft:breeze_spawn_egg`
- `minecraft:end_stone`
End Stone
- `minecraft:llama_spawn_egg`
Llama Spawn Egg
- `minecraft:spruce_wall_sign`
Spruce Wall Sign
- `minecraft:vex_spawn_egg`
Vex Spawn Egg
- `minecraft:spruce_sapling`
- `minecraft:twisting_vines`
Twisting Vines
- `minecraft:warped_trapdoor`
Warped Trapdoor
- `minecraft:daylight_detector_inverted`
Daylight Detector Inverted
- `minecraft:warden_spawn_egg`
Warden Spawn Egg
- `minecraft:magenta_concrete`
- `minecraft:zombie_villager_spawn_egg`
Zombie Villager Spawn Egg
- `minecraft:diorite_double_slab`
- `minecraft:orange_tulip`
- `minecraft:weathered_cut_copper_stairs`
Weathered Cut Copper Stairs
- `minecraft:rapid_fertilizer`
Rapid Fertilizer
- `minecraft:clay`
Clay
- `minecraft:tropical_fish_spawn_egg`
Tropical Fish Spawn Egg
- `minecraft:cod_spawn_egg`
Cod Spawn Egg
- `minecraft:red_tulip`
- `minecraft:orange_concrete`
- `minecraft:standing_sign`
Standing Sign
- `minecraft:host_armor_trim_smithing_template`
- `minecraft:pufferfish_spawn_egg`
Pufferfish Spawn Egg
- `minecraft:red_mushroom_block`
Red Mushroom Block
- `minecraft:salmon_spawn_egg`
Salmon Spawn Egg
- `minecraft:normal_stone_double_slab`
- `minecraft:warped_slab`
Warped Slab
- `minecraft:dolphin_spawn_egg`
Dolphin Spawn Egg
- `minecraft:yellow_carpet`
- `minecraft:turtle_spawn_egg`
Turtle Spawn Egg
- `minecraft:double_cut_copper_slab`
Double Cut Copper Slab
- `minecraft:phantom_spawn_egg`
Phantom Spawn Egg
- `minecraft:item.acacia_door`
Acacia Door
- `minecraft:oxidized_cut_copper_slab`
Oxidized Cut Copper Slab
- `minecraft:cat_spawn_egg`
Cat Spawn Egg
- `minecraft:light_gray_wool`
- `minecraft:cherry_fence`
- `minecraft:purpur_double_slab`
- `minecraft:quartz`
Quartz
- `minecraft:fox_spawn_egg`
Fox Spawn Egg
- `minecraft:spruce_log`
- `minecraft:cobblestone_wall`
Cobblestone Wall
- `minecraft:carrot_on_a_stick`
Carrot on a Stick
- `minecraft:acacia_wood`
- `minecraft:wandering_trader_spawn_egg`
Wandering Trader Spawn Egg
- `minecraft:spruce_hanging_sign`
- `minecraft:hoglin_spawn_egg`
Hoglin Spawn Egg
- `minecraft:magenta_concrete_powder`
- `minecraft:warped_fence_gate`
Warped Fence Gate
- `minecraft:plenty_pottery_sherd`
- `minecraft:infested_cobblestone`
- `minecraft:waxed_weathered_copper_bulb`
- `minecraft:sniffer_spawn_egg`
- `minecraft:oxidized_cut_copper`
Oxidized Cut Copper
- `minecraft:goat_spawn_egg`
Goat Spawn Egg
- `minecraft:prismarine_slab`
- `minecraft:bolt_armor_trim_smithing_template`
- `minecraft:element_4`
[Education Edition] Beryllium (Be)
- `minecraft:iron_golem_spawn_egg`
- `minecraft:ender_dragon_spawn_egg`
- `minecraft:wither_spawn_egg`
- `minecraft:blue_stained_glass`
- `minecraft:glow_ink_sac`
Glow Ink Sac
- `minecraft:copper_ingot`
Copper Ingot
- `minecraft:orange_candle_cake`
Orange Candle Cake
- `minecraft:copper_block`
Copper Block
- `minecraft:cut_copper`
Cut Copper
- `minecraft:dark_oak_pressure_plate`
Dark Oak Pressure Plate
- `minecraft:seagrass`
Seagrass
- `minecraft:prismarine_shard`
Prismarine Shard
- `minecraft:cut_copper_stairs`
Cut Copper Stairs
- `minecraft:weathered_cut_copper_slab`
Weathered Cut Copper Slab
- `minecraft:double_stone_block_slab3`
Double Stone Block Slab 3
- `minecraft:mutton`
Mutton
- `minecraft:red_stained_glass`
- `minecraft:sculk_vein`
Sculk Vein
- `minecraft:waxed_cut_copper_slab`
Waxed Cut Copper Slab
- `minecraft:infested_mossy_stone_bricks`
- `minecraft:waxed_exposed_cut_copper_slab`
Waxed Exposed Cut Copper Slab
- `minecraft:jungle_trapdoor`
Jungle Trapdoor
- `minecraft:fire_charge`
Fire Charge
- `minecraft:waxed_weathered_cut_copper_slab`
Waxed Weathered Cut Copper Slab
- `minecraft:infested_cracked_stone_bricks`
- `minecraft:waxed_oxidized_cut_copper_slab`
Waxed Oxidized Cut Copper Slab
- `minecraft:raw_copper`
Raw Copper
- `minecraft:polished_andesite`
- `minecraft:experience_bottle`
Experience Bottle
- `minecraft:element_69`
[Education Edition] Thulium (Tm)
- `minecraft:writable_book`
Writable Book
- `minecraft:bamboo_fence_gate`
- `minecraft:deepslate_brick_double_slab`
Deepslate Brick Double Slab
- `minecraft:emerald`
Emerald
- `minecraft:dark_prismarine_double_slab`
- `minecraft:flower_pot`
Flower Pot
- `minecraft:empty_map`
Empty Map
- `minecraft:skull`
Skull
- `minecraft:exposed_chiseled_copper`
- `minecraft:end_stone_brick_wall`
- `minecraft:crimson_nylium`
Crimson Nylium
- `minecraft:firework_rocket`
Firework Rocket
- `minecraft:element_102`
[Education Edition] Nobelium (No)
- `minecraft:firework_star`
Firework Star
- `minecraft:colored_torch_bp`
Colored Torch BP
- `minecraft:enchanted_book`
Enchanted Book
- `minecraft:totem_of_undying`
Totem of Undying
- `minecraft:netherbrick`
Netherbrick
- `minecraft:dead_bubble_coral_wall_fan`
- `minecraft:tnt_minecart`
TNT Minecart
- `minecraft:polished_granite_slab`
- `minecraft:stripped_acacia_wood`
- `minecraft:hopper_minecart`
Hopper Minecart
- `minecraft:dragon_breath`
Dragon Breath
- `minecraft:cobblestone`
Cobblestone
- `minecraft:hopper`
Hopper
- `minecraft:rabbit_hide`
Rabbit Hide
- `minecraft:leather_horse_armor`
Leather Horse Armor
- `minecraft:weathered_copper_door`
- `minecraft:iron_horse_armor`
Iron Horse Armor
- `minecraft:diamond_horse_armor`
Diamond Horse Armor
- `minecraft:jungle_door`
Jungle Door
- `minecraft:music_disc_cat`
Music Disc Cat
- `minecraft:music_disc_blocks`
Music Disc Blocks
- `minecraft:music_disc_far`
Music Disc Far
- `minecraft:music_disc_mellohi`
Music Disc Mellohi
- `minecraft:acacia_sign`
Acacia Sign
- `minecraft:blue_terracotta`
- `minecraft:info_update2`
[Education Edition] Info Update 2
- `minecraft:prismarine_crystals`
Prismarine Crystals
- `minecraft:lead`
Lead
- `minecraft:element_32`
[Education Edition] Germanium (Ge)
- `minecraft:brush`
- `minecraft:armor_stand`
Armor Stand
- `minecraft:phantom_membrane`
Phantom Membrane
- `minecraft:spruce_door`
Spruce Door
- `minecraft:birch_hanging_sign`
- `minecraft:birch_door`
Birch Door
- `minecraft:granite_wall`
- `minecraft:element_42`
[Education Edition] Molybdenum (Mo)
- `minecraft:acacia_door`
Acacia Door
- `minecraft:turtle_scute`
- `minecraft:netherite_leggings`
Netherite Leggings
- `minecraft:dark_oak_door`
Dark Oak Door
- `minecraft:yellow_stained_glass_pane`
- `minecraft:popped_chorus_fruit`
Popped Chorus Fruit
- `minecraft:splash_potion`
Splash Potion
- `minecraft:shulker_shell`
Shulker Shell
- `minecraft:mossy_cobblestone_wall`
- `minecraft:light_blue_concrete`
- `minecraft:chiseled_quartz_block`
- `minecraft:redstone_block`
Redstone Block
- `minecraft:brain_coral`
- `minecraft:banner`
Banner
- `minecraft:bamboo_button`
- `minecraft:element_118`
[Education Edition] Oganesson (Og)
- `minecraft:shaper_armor_trim_smithing_template`
- `minecraft:mangrove_planks`
Mangrove Planks
- `minecraft:iron_nugget`
Iron Nugget
- `minecraft:birch_sign`
Birch Sign
- `minecraft:coral_fan_dead`
Coral Fan Dead
- `minecraft:balloon`
Balloon
- `minecraft:smooth_sandstone_double_slab`
- `minecraft:jungle_sign`
Jungle Sign
- `minecraft:oak_fence`
- `minecraft:dark_oak_sign`
Dark Oak Sign
- `minecraft:flower_banner_pattern`
Flower Banner Pattern
- `minecraft:magenta_carpet`
- `minecraft:frog_spawn_egg`
Frog Spawn Egg
- `minecraft:polished_diorite_stairs`
Polished Diorite Stairs
- `minecraft:mojang_banner_pattern`
Mojang Banner Pattern
- `minecraft:monster_egg`
Monster Egg
- `minecraft:cherry_button`
- `minecraft:field_masoned_banner_pattern`
Field Masoned Banner Pattern
- `minecraft:bordure_indented_banner_pattern`
Bordure Indented Banner Pattern
- `minecraft:purple_candle_cake`
Purple Candle Cake
- `minecraft:short_grass`
- `minecraft:orange_shulker_box`
- `minecraft:potatoes`
Potatoes
- `minecraft:piglin_banner_pattern`
Piglin Banner Pattern
- `minecraft:purple_wool`
- `minecraft:boat`
Boat
- `minecraft:guster_banner_pattern`
- `minecraft:honeycomb`
Honeycomb
- `minecraft:red_nether_brick`
Red Nether Brick
- `minecraft:honey_bottle`
Honey Bottle
- `minecraft:stripped_warped_hyphae`
Stripped Warped Hyphae
- `minecraft:mangrove_sign`
Mangrove Sign
- `minecraft:blue_candle_cake`
Blue Candle Cake
- `minecraft:element_22`
[Education Edition] Titanium (Ti)
- `minecraft:magma`
Magma
- `minecraft:ominous_bottle`
- `minecraft:compound`
[Education Edition] Compound
- `minecraft:stone_brick_slab`
- `minecraft:ice_bomb`
[Education Edition] Ice Bomb
- `minecraft:medicine`
[Education Edition] Medicine
- `minecraft:hard_light_blue_stained_glass_pane`
- `minecraft:glow_stick`
Glow Stick
- `minecraft:element_83`
[Education Edition] Bismuth (Bi)
- `minecraft:lodestone_compass`
Lodestone Compass
- `minecraft:quartz_ore`
Quartz Ore
- `minecraft:netherite_shovel`
Netherite Shovel
- `minecraft:chain_command_block`
Chain Command Block
- `minecraft:gray_wool`
- `minecraft:light_blue_stained_glass`
- `minecraft:loom`
Loom
- `minecraft:polished_deepslate_double_slab`
Polished Deepslate Double Slab
- `minecraft:eye_armor_trim_smithing_template`
- `minecraft:netherite_axe`
Netherite Axe
- `minecraft:mossy_cobblestone_double_slab`
- `minecraft:netherite_hoe`
Netherite Hoe
- `minecraft:black_candle_cake`
Black Candle Cake
- `minecraft:light_gray_candle`
Light Gray Candle
- `minecraft:mud`
Mud
- `minecraft:netherite_helmet`
Netherite Helmet
- `minecraft:netherite_scrap`
Netherite Scrap
- `minecraft:quartz_slab`
- `minecraft:crimson_sign`
Crimson Sign
- `minecraft:concrete`
Concrete
- `minecraft:sponge`
Sponge
- `minecraft:crimson_door`
Crimson Door
- `minecraft:acacia_leaves`
- `minecraft:horn_coral`
- `minecraft:cartography_table`
Cartography Table
- `minecraft:nether_sprouts`
Nether Sprouts
- `minecraft:blackstone_slab`
Blackstone Slab
- `minecraft:polished_blackstone_slab`
Polished Blackstone Slab
- `minecraft:cobbled_deepslate_slab`
Cobbled Deepslate Slab
- `minecraft:scrape_pottery_sherd`
- `minecraft:polished_deepslate_slab`
Polished Deepslate Slab
- `minecraft:deepslate_tile_slab`
Deepslate Tile Slab
- `minecraft:amethyst_shard`
Amethyst Shard
- `minecraft:music_disc_otherside`
Music Disc Otherside
- `minecraft:element_33`
[Education Edition] Arsenic (As)
- `minecraft:howl_pottery_sherd`
- `minecraft:birch_chest_boat`
Birch Chest Boat
- `minecraft:smooth_red_sandstone_stairs`
Smooth Red Sandstone Stairs
- `minecraft:goat_horn`
Goat Horn
- `minecraft:magenta_candle`
Magenta Candle
- `minecraft:frog_spawn`
Frog Spawn
- `minecraft:waxed_weathered_double_cut_copper_slab`
Waxed Weathered Double Cut Copper Slab
- `minecraft:allay_spawn_egg`
Allay Spawn Egg
- `minecraft:mangrove_slab`
Mangrove Slab
- `minecraft:mangrove_propagule`
Mangrove Propagule
- `minecraft:mangrove_roots`
Mangrove Roots
- `minecraft:muddy_mangrove_roots`
Muddy Mangrove Roots
- `minecraft:green_glazed_terracotta`
Green Glazed Terracotta
- `minecraft:music_disc_5`
Music Disc 5
- `minecraft:jungle_standing_sign`
Jungle Standing Sign
- `minecraft:disc_fragment_5`
Disc Fragment 5
- `minecraft:candle_cake`
Candle Cake
- `minecraft:pink_glazed_terracotta`
Pink Glazed Terracotta
- `minecraft:mossy_stone_brick_slab`
- `minecraft:blue_concrete`
- `minecraft:jungle_chest_boat`
Jungle Chest Boat
- `minecraft:spruce_chest_boat`
Spruce Chest Boat
- `minecraft:white_concrete_powder`
- `minecraft:spire_armor_trim_smithing_template`
- `minecraft:acacia_chest_boat`
Acacia Chest Boat
- `minecraft:dark_oak_chest_boat`
Dark Oak Chest Boat
- `minecraft:info_update`
[Education Edition] Info Update
- `minecraft:mangrove_chest_boat`
Mangrove Chest Boat
- `minecraft:sculk_shrieker`
Sculk Shrieker
- `minecraft:recovery_compass`
Recovery Compass
- `minecraft:tripwire_hook`
Tripwire Hook
- `minecraft:chest_boat`
Chest Boat
- `minecraft:light_block_1`
- `minecraft:echo_shard`
Echo Shard
- `minecraft:smooth_quartz`
- `minecraft:birch_trapdoor`
Birch Trapdoor
- `minecraft:trader_llama_spawn_egg`
Trader Llama Spawn Egg
- `minecraft:sculk`
Sculk
- `minecraft:cherry_boat`
- `minecraft:lit_furnace`
Lit Furnace
- `minecraft:cherry_door`
- `minecraft:cherry_sapling`
- `minecraft:cherry_hanging_sign`
- `minecraft:cherry_slab`
- `minecraft:bamboo_mosaic_slab`
- `minecraft:bamboo_raft`
- `minecraft:bamboo_chest_raft`
- `minecraft:element_89`
[Education Edition] Actinium (Ac)
- `minecraft:oak_hanging_sign`
- `minecraft:quartz_stairs`
Quartz Stairs
- `minecraft:explorer_pottery_sherd`
- `minecraft:jungle_hanging_sign`
- `minecraft:acacia_hanging_sign`
- `minecraft:dark_oak_hanging_sign`
- `minecraft:polished_tuff`
- `minecraft:crimson_hanging_sign`
- `minecraft:warped_hanging_sign`
- `minecraft:brown_candle`
Brown Candle
- `minecraft:waxed_oxidized_copper`
Waxed Oxidized Copper
- `minecraft:double_stone_block_slab`
Double Stone Block Slab
- `minecraft:archer_pottery_sherd`
- `minecraft:stone_brick_double_slab`
- `minecraft:blade_pottery_sherd`
- `minecraft:gray_candle_cake`
Gray Candle Cake
- `minecraft:light_block_5`
- `minecraft:danger_pottery_sherd`
- `minecraft:flow_pottery_sherd`
- `minecraft:friend_pottery_sherd`
- `minecraft:guster_pottery_sherd`
- `minecraft:pink_shulker_box`
- `minecraft:heart_pottery_sherd`
- `minecraft:sheaf_pottery_sherd`
- `minecraft:fire_coral_block`
- `minecraft:brick_double_slab`
- `minecraft:ladder`
Ladder
- `minecraft:unlit_redstone_torch`
Unlit Redstone Torch
- `minecraft:shelter_pottery_sherd`
- `minecraft:sentry_armor_trim_smithing_template`
- `minecraft:ward_armor_trim_smithing_template`
- `minecraft:red_stained_glass_pane`
- `minecraft:bamboo_block`
- `minecraft:tide_armor_trim_smithing_template`
- `minecraft:wayfinder_armor_trim_smithing_template`
- `minecraft:red_carpet`
- `minecraft:music_disc_relic`
- `minecraft:wool`
Wool
- `minecraft:red_nether_brick_wall`
- `minecraft:stone`
Stone
- `minecraft:diorite`
- `minecraft:light_block_10`
- `minecraft:green_stained_glass_pane`
- `minecraft:coarse_dirt`
- `minecraft:cobblestone_double_slab`
- `minecraft:element_11`
[Education Edition] Sodium (Na)
- `minecraft:dark_oak_planks`
- `minecraft:red_sand`
- `minecraft:cracked_deepslate_tiles`
Cracked Deepslate Tiles
- `minecraft:white_terracotta`
- `minecraft:cracked_polished_blackstone_bricks`
Cracked Polished Blackstone Bricks
- `minecraft:orange_terracotta`
- `minecraft:lime_terracotta`
- `minecraft:gray_terracotta`
- `minecraft:smooth_red_sandstone_double_slab`
- `minecraft:cyan_terracotta`
- `minecraft:purple_terracotta`
- `minecraft:green_terracotta`
- `minecraft:red_terracotta`
- `minecraft:black_terracotta`
- `minecraft:fletching_table`
Fletching Table
- `minecraft:brown_carpet`
- `minecraft:stained_hardened_clay`
Stained Hardened Clay
- `minecraft:armadillo_scute`
- `minecraft:armadillo_spawn_egg`
- `minecraft:wolf_armor`
- `minecraft:deepslate_coal_ore`
Deepslate Coal Ore
- `minecraft:tuff_slab`
- `minecraft:element_9`
[Education Edition] Fluorine (F)
- `minecraft:waxed_oxidized_cut_copper`
Waxed Oxidized Cut Copper
- `minecraft:polished_tuff_slab`
- `minecraft:light_blue_wool`
- `minecraft:oxidized_chiseled_copper`
- `minecraft:birch_planks`
- `minecraft:mossy_stone_brick_wall`
- `minecraft:tuff_brick_slab`
- `minecraft:element_3`
[Education Edition] Lithium (Li)
- `minecraft:copper_door`
- `minecraft:oxidized_copper_door`
- `minecraft:warped_nylium`
Warped Nylium
- `minecraft:waxed_copper_door`
- `minecraft:stone_block_slab4`
Stone Block Slab 4
- `minecraft:waterlily`
Waterlily
- `minecraft:waxed_exposed_copper_door`
- `minecraft:waxed_oxidized_copper_door`
- `minecraft:acacia_log`
- `minecraft:nether_brick_stairs`
Nether Brick Stairs
- `minecraft:white_wool`
- `minecraft:magenta_wool`
- `minecraft:yellow_wool`
- `minecraft:lime_wool`
- `minecraft:infested_chiseled_stone_bricks`
- `minecraft:pink_wool`
- `minecraft:stripped_warped_stem`
Stripped Warped Stem
- `minecraft:infested_stone_bricks`
- `minecraft:cyan_wool`
- `minecraft:element_18`
[Education Edition] Argon (Ar)
- `minecraft:blue_wool`
- `minecraft:cherry_double_slab`
- `minecraft:brown_stained_glass`
- `minecraft:element_29`
[Education Edition] Copper (Cu)
- `minecraft:brown_wool`
- `minecraft:red_wool`
- `minecraft:spruce_standing_sign`
Spruce Standing Sign
- `minecraft:sticky_piston`
Sticky Piston
- `minecraft:black_wool`
- `minecraft:brown_shulker_box`
- `minecraft:dark_prismarine_stairs`
Dark Prismarine Stairs
- `minecraft:deepslate_brick_stairs`
Deepslate Brick Stairs
- `minecraft:orange_carpet`
- `minecraft:bamboo_pressure_plate`
- `minecraft:light_blue_carpet`
- `minecraft:hard_black_stained_glass`
- `minecraft:gray_carpet`
- `minecraft:slime`
Slime
- `minecraft:pumpkin`
Pumpkin
- `minecraft:light_gray_carpet`
- `minecraft:green_carpet`
- `minecraft:oak_log`
- `minecraft:birch_log`
- `minecraft:jungle_log`
- `minecraft:log`
Log
- `minecraft:birch_fence`
- `minecraft:hard_orange_stained_glass_pane`
- `minecraft:structure_block`
Structure Block
- `minecraft:jungle_fence`
- `minecraft:cut_red_sandstone`
- `minecraft:acacia_fence`
- `minecraft:dark_oak_fence`
- `minecraft:element_53`
[Education Edition] Iodine (I)
- `minecraft:fence`
Fence
- `minecraft:waxed_oxidized_double_cut_copper_slab`
Waxed Oxidized Double Cut Copper Slab
- `minecraft:stone_bricks`
- `minecraft:cracked_stone_bricks`
- `minecraft:poppy`
- `minecraft:chiseled_stone_bricks`
- `minecraft:pink_concrete`
- `minecraft:stonebrick`
Stonebrick
- `minecraft:tall_grass`
- `minecraft:brain_coral_block`
- `minecraft:bubble_coral_block`
- `minecraft:horn_coral_block`
- `minecraft:dead_tube_coral_block`
- `minecraft:green_candle`
Green Candle
- `minecraft:dead_bubble_coral_block`
- `minecraft:dead_fire_coral_block`
- `minecraft:suspicious_sand`
- `minecraft:dead_horn_coral_block`
- `minecraft:lit_blast_furnace`
Lit Blast Furnace
- `minecraft:bamboo_stairs`
- `minecraft:coral_block`
Coral Block
- `minecraft:sandstone_slab`
- `minecraft:cobblestone_slab`
- `minecraft:brick_slab`
- `minecraft:dead_horn_coral_fan`
- `minecraft:nether_brick_slab`
- `minecraft:stone_block_slab`
Stone Block Slab
- `minecraft:leaves`
Leaves
- `minecraft:andesite_wall`
- `minecraft:prismarine_brick_slab`
- `minecraft:mossy_cobblestone_slab`
- `minecraft:element_8`
[Education Edition] Oxygen (O)
- `minecraft:smooth_sandstone_slab`
- `minecraft:stone_block_slab2`
Stone Block Slab 2
- `minecraft:leaves2`
Leaves 2
- `minecraft:smooth_red_sandstone_slab`
- `minecraft:lectern`
Lectern
- `minecraft:dead_brain_coral`
- `minecraft:polished_andesite_slab`
- `minecraft:hard_black_stained_glass_pane`
- `minecraft:andesite_slab`
- `minecraft:bubble_coral`
- `minecraft:diorite_slab`
- `minecraft:prismarine_bricks`
- `minecraft:granite_slab`
- `minecraft:spruce_leaves`
- `minecraft:birch_standing_sign`
Birch Standing Sign
- `minecraft:prismarine_wall`
- `minecraft:chiseled_polished_blackstone`
Chiseled Polished Blackstone
- `minecraft:stone_block_slab3`
Stone Block Slab 3
- `minecraft:normal_stone_slab`
- `minecraft:cut_sandstone_slab`
- `minecraft:element_16`
[Education Edition] Sulfur (S)
- `minecraft:cyan_stained_glass_pane`
- `minecraft:sandstone_double_slab`
- `minecraft:red_sandstone_double_slab`
- `minecraft:dark_oak_sapling`
- `minecraft:prismarine_double_slab`
- `minecraft:prismarine_brick_double_slab`
- `minecraft:element_6`
[Education Edition] Carbon (C)
- `minecraft:waxed_cut_copper_stairs`
Waxed Cut Copper Stairs
- `minecraft:red_nether_brick_double_slab`
- `minecraft:fern`
- `minecraft:normal_stone_stairs`
Normal Stone Stairs
- `minecraft:double_stone_block_slab2`
Double Stone Block Slab 2
- `minecraft:end_stone_brick_double_slab`
- `minecraft:polished_andesite_double_slab`
- `minecraft:border_block`
Border Block
- `minecraft:polished_diorite_double_slab`
- `minecraft:granite_double_slab`
- `minecraft:polished_granite_double_slab`
- `minecraft:element_10`
[Education Edition] Neon (Ne)
- `minecraft:mossy_stone_brick_double_slab`
- `minecraft:dead_fire_coral`
- `minecraft:purple_stained_glass_pane`
- `minecraft:smooth_quartz_double_slab`
- `minecraft:cut_sandstone_double_slab`
- `minecraft:dragon_egg`
Dragon Egg
- `minecraft:cut_red_sandstone_double_slab`
- `minecraft:waxed_oxidized_copper_grate`
- `minecraft:tnt`
TNT
- `minecraft:double_stone_block_slab4`
Double Stone Block Slab 4
- `minecraft:sweet_berry_bush`
Sweet Berry Bush
- `minecraft:tube_coral_fan`
- `minecraft:bubble_coral_fan`
- `minecraft:nether_brick_wall`
- `minecraft:horn_coral_fan`
- `minecraft:tinted_glass`
Tinted Glass
- `minecraft:large_amethyst_bud`
Large Amethyst Bud
- `minecraft:coral_fan`
Coral Fan
- `minecraft:dead_brain_coral_fan`
- `minecraft:dead_bubble_coral_fan`
- `minecraft:lily_of_the_valley`
- `minecraft:polished_blackstone_button`
Polished Blackstone Button
- `minecraft:sea_pickle`
Sea Pickle
- `minecraft:oak_sapling`
- `minecraft:acacia_sapling`
- `minecraft:sapling`
Sapling
- `minecraft:oak_leaves`
- `minecraft:jungle_leaves`
- `minecraft:dark_oak_leaves`
- `minecraft:azalea_leaves`
Azalea Leaves
- `minecraft:soul_fire`
Soul Fire
- `minecraft:azalea_leaves_flowered`
Azalea Leaves Flowered
- `minecraft:sandstone`
Sandstone
- `minecraft:chiseled_sandstone`
- `minecraft:cut_sandstone`
- `minecraft:smooth_sandstone`
- `minecraft:hard_light_gray_stained_glass_pane`
- `minecraft:spruce_button`
Spruce Button
- `minecraft:red_sandstone`
Red Sandstone
- `minecraft:chiseled_red_sandstone`
- `minecraft:smooth_red_sandstone`
- `minecraft:jungle_slab`
- `minecraft:acacia_slab`
- `minecraft:redstone_lamp`
Redstone Lamp
- `minecraft:dark_oak_slab`
- `minecraft:crimson_roots`
Crimson Roots
- `minecraft:warped_roots`
Warped Roots
- `minecraft:allium`
- `minecraft:cornflower`
- `minecraft:lime_concrete`
- `minecraft:large_fern`
- `minecraft:red_flower`
Red Flower
- `minecraft:hard_pink_stained_glass_pane`
- `minecraft:sunflower`
- `minecraft:exposed_cut_copper`
Exposed Cut Copper
- `minecraft:lilac`
- `minecraft:peony`
- `minecraft:daylight_detector`
Daylight Detector
- `minecraft:snow_layer`
Snow Layer
- `minecraft:red_nether_brick_stairs`
Red Nether Brick Stairs
- `minecraft:jungle_planks`
- `minecraft:gray_stained_glass`
- `minecraft:light_gray_shulker_box`
- `minecraft:light_blue_concrete_powder`
- `minecraft:acacia_planks`
- `minecraft:quartz_block`
Quartz Block
- `minecraft:quartz_pillar`
- `minecraft:deprecated_purpur_block_1`
- `minecraft:element_77`
[Education Edition] Iridium (Ir)
- `minecraft:purpur_pillar`
- `minecraft:deprecated_purpur_block_2`
- `minecraft:sandstone_wall`
- `minecraft:stone_brick_wall`
- `minecraft:tube_coral`
- `minecraft:fire_coral`
- `minecraft:diamond_ore`
Diamond Ore
- `minecraft:dead_tube_coral`
- `minecraft:small_amethyst_bud`
Small Amethyst Bud
- `minecraft:dead_bubble_coral`
- `minecraft:soul_soil`
Soul Soil
- `minecraft:acacia_pressure_plate`
Acacia Pressure Plate
- `minecraft:tallgrass`
Tallgrass
- `minecraft:element_103`
[Education Edition] Lawrencium (Lr)
- `minecraft:brown_mushroom_block`
Brown Mushroom Block
- `minecraft:dark_oak_log`
- `minecraft:log2`
Log 2
- `minecraft:warped_fungus`
Warped Fungus
- `minecraft:end_portal_frame`
[Education Edition] End Portal Frame
- `minecraft:anvil`
Anvil
- `minecraft:big_dripleaf`
Big Dripleaf
- `minecraft:deprecated_anvil`
- `minecraft:infested_stone`
- `minecraft:conduit`
Conduit
- `minecraft:prismarine`
Prismarine
- `minecraft:dark_prismarine`
- `minecraft:gray_concrete`
- `minecraft:light_gray_concrete`
- `minecraft:cyan_concrete`
- `minecraft:purple_concrete`
- `minecraft:element_56`
[Education Edition] Barium (Ba)
- `minecraft:brown_concrete`
- `minecraft:green_concrete`
- `minecraft:lime_candle`
Lime Candle
- `minecraft:red_concrete`
- `minecraft:jungle_wood`
- `minecraft:black_concrete`
- `minecraft:yellow_concrete_powder`
- `minecraft:pink_concrete_powder`
- `minecraft:spruce_trapdoor`
Spruce Trapdoor
- `minecraft:light_gray_concrete_powder`
- `minecraft:purple_concrete_powder`
- `minecraft:blue_concrete_powder`
- `minecraft:green_concrete_powder`
- `minecraft:red_concrete_powder`
- `minecraft:black_concrete_powder`
- `minecraft:concrete_powder`
Concrete Powder
- `minecraft:element_75`
[Education Edition] Rhenium (Re)
- `minecraft:white_stained_glass`
- `minecraft:orange_stained_glass`
- `minecraft:element_64`
[Education Edition] Gadolinium (Gd)
- `minecraft:magenta_stained_glass`
- `minecraft:stripped_jungle_wood`
- `minecraft:yellow_stained_glass`
- `minecraft:item.hopper`
Hopper
- `minecraft:wood`
Wood
- `minecraft:hard_magenta_stained_glass`
- `minecraft:mud_brick_double_slab`
Mud Brick Double Slab
- `minecraft:lime_stained_glass`
- `minecraft:crimson_double_slab`
Crimson Double Slab
- `minecraft:hard_purple_stained_glass`
- `minecraft:pink_stained_glass`
- `minecraft:light_gray_stained_glass`
- `minecraft:birch_button`
Birch Button
- `minecraft:deepslate_redstone_ore`
Deepslate Redstone Ore
- `minecraft:reinforced_deepslate`
Reinforced Deepslate
- `minecraft:black_stained_glass`
- `minecraft:white_stained_glass_pane`
- `minecraft:orange_stained_glass_pane`
- `minecraft:item.dark_oak_door`
Item Dark Oak Door
- `minecraft:magenta_stained_glass_pane`
- `minecraft:light_block`
Light Block
- `minecraft:end_crystal`
End Crystal
- `minecraft:light_blue_stained_glass_pane`
- `minecraft:hard_purple_stained_glass_pane`
- `minecraft:pink_stained_glass_pane`
- `minecraft:black_stained_glass_pane`
- `minecraft:undyed_shulker_box`
Undyed Shulker Box
- `minecraft:light_blue_shulker_box`
- `minecraft:hard_green_stained_glass_pane`
- `minecraft:yellow_shulker_box`
- `minecraft:lime_shulker_box`
- `minecraft:gray_shulker_box`
- `minecraft:deepslate_diamond_ore`
Deepslate Diamond Ore
- `minecraft:purple_shulker_box`
- `minecraft:blue_shulker_box`
- `minecraft:green_shulker_box`
- `minecraft:red_shulker_box`
- `minecraft:red_sandstone_stairs`
Red Sandstone Stairs
- `minecraft:black_shulker_box`
- `minecraft:carved_pumpkin`
Carved Pumpkin
- `minecraft:piston`
Piston
- `minecraft:torchflower_crop`
- `minecraft:bamboo`
Bamboo
- `minecraft:observer`
Observer
- `minecraft:scaffolding`
Scaffolding
- `minecraft:grindstone`
Grindstone
- `minecraft:bell`
Bell
- `minecraft:oak_wood`
- `minecraft:birch_wood`
- `minecraft:dark_oak_wood`
- `minecraft:stripped_oak_wood`
- `minecraft:stripped_birch_wood`
- `minecraft:stripped_dark_oak_wood`
- `minecraft:music_disc_creator`
- `minecraft:music_disc_precipice`
- `minecraft:hard_white_stained_glass`
- `minecraft:packed_ice`
Packed Ice
- `minecraft:hard_orange_stained_glass`
- `minecraft:cobbled_deepslate`
Cobbled Deepslate
- `minecraft:hard_light_blue_stained_glass`
- `minecraft:hard_yellow_stained_glass`
- `minecraft:hard_lime_stained_glass`
- `minecraft:hard_gray_stained_glass`
- `minecraft:hard_light_gray_stained_glass`
- `minecraft:red_candle`
Red Candle
- `minecraft:hard_green_stained_glass`
- `minecraft:element_84`
[Education Edition] Polonium (Po)
- `minecraft:hard_stained_glass`
Hard Stained Glass
- `minecraft:hard_yellow_stained_glass_pane`
- `minecraft:hard_blue_stained_glass_pane`
- `minecraft:hard_stained_glass_pane`
[Education Edition] Hard Stained Glass Pane
- `minecraft:light_block_2`
- `minecraft:light_block_3`
- `minecraft:light_block_4`
- `minecraft:light_block_6`
- `minecraft:moss_block`
Moss Block
- `minecraft:lightning_rod`
Lightning Rod
- `minecraft:light_block_7`
- `minecraft:deepslate_tile_double_slab`
Deepslate Tile Double Slab
- `minecraft:light_block_8`
- `minecraft:light_block_11`
- `minecraft:gold_block`
Gold Block
- `minecraft:light_block_12`
- `minecraft:light_block_13`
- `minecraft:crimson_slab`
Crimson Slab
- `minecraft:candle`
Candle
- `minecraft:orange_candle`
Orange Candle
- `minecraft:light_blue_candle`
Light Blue Candle
- `minecraft:fire`
Fire
- `minecraft:pink_candle`
Pink Candle
- `minecraft:cyan_candle`
Cyan Candle
- `minecraft:purple_candle`
Purple Candle
- `minecraft:polished_deepslate_wall`
Polished Deepslate Wall
- `minecraft:black_candle`
Black Candle
- `minecraft:element_5`
[Education Edition] Boron (B)
- `minecraft:element_12`
[Education Edition] Magnesium (Mg)
- `minecraft:element_14`
[Education Edition] Silicon (Si)
- `minecraft:client_request_placeholder_block`
[Education Edition] Client Request Placeholder Block
- `minecraft:element_17`
[Education Edition] Chlorine (Cl)
- `minecraft:element_19`
[Education Edition] Potassium (K)
- `minecraft:pearlescent_froglight`
Pearlescent Froglight
- `minecraft:element_20`
[Education Edition] Calcium (Ca)
- `minecraft:element_21`
[Education Edition] Scandium (Sc)
- `minecraft:element_24`
[Education Edition] Chromium (Cr)
- `minecraft:element_25`
[Education Edition] Manganese (Mn)
- `minecraft:element_26`
[Education Edition] Iron (Fe)
- `minecraft:element_28`
[Education Edition] Nickel (Ni)
- `minecraft:element_30`
[Education Edition] Zinc (Zn)
- `minecraft:element_31`
[Education Edition] Gallium (Ga)
- `minecraft:element_34`
[Education Edition] Selenium (Se)
- `minecraft:bamboo_double_slab`
- `minecraft:element_35`
Bromine (Br)
- `minecraft:element_36`
[Education Edition] Krypton (Kr)
- `minecraft:element_37`
[Education Edition] Rubidium (Rb)
- `minecraft:element_38`
[Education Edition] Strontium (Sr)
- `minecraft:element_39`
[Education Edition] Yttrium (Y)
- `minecraft:element_40`
[Education Edition] Zirconium (Zr)
- `minecraft:element_45`
[Education Edition] Rhodium (Rh)
- `minecraft:element_46`
[Education Edition] Palladium (Pd)
- `minecraft:element_47`
[Education Edition] Silver (Ag)
- `minecraft:element_48`
[Education Edition] Cadmium (Cd)
- `minecraft:soul_sand`
Soul Sand
- `minecraft:element_49`
[Education Edition] Indium (In)
- `minecraft:stripped_oak_log`
Stripped Oak Log
- `minecraft:element_50`
[Education Edition] Tin (Sn)
- `minecraft:element_54`
[Education Edition] Xenon (Xe)
- `minecraft:element_55`
[Education Edition] Cesium (Cs)
- `minecraft:crafting_table`
Crafting Table
- `minecraft:element_57`
[Education Edition] Lanthanum (La)
- `minecraft:element_58`
[Education Edition] Cerium (Ce)
- `minecraft:element_59`
[Education Edition] Praseodymium (Pr)
- `minecraft:element_60`
[Education Edition]Neodymium (Nd)
- `minecraft:element_61`
[Education Edition] Promethium (Pm)
- `minecraft:element_63`
[Education Edition] Europium (Eu)
- `minecraft:element_65`
[Education Edition] Terbium (Tb)
- `minecraft:element_66`
[Education Edition] Dysprosium (Dy)
- `minecraft:element_67`
[Education Edition] Holmium (Ho)
- `minecraft:element_70`
[Education Edition] Ytterbium (Yb)
- `minecraft:element_71`
[Education Edition] Lutetium (Lu)
- `minecraft:element_72`
[Education Edition] Hafnium (Hf)
- `minecraft:element_73`
[Education Edition] Tantalum (Ta)
- `minecraft:cobbled_deepslate_wall`
Cobbled Deepslate Wall
- `minecraft:element_76`
[Education Edition] Osmium (Os)
- `minecraft:element_78`
[Education Edition] Platinum (Pt)
- `minecraft:crafter`
- `minecraft:redstone_torch`
Redstone Torch
- `minecraft:element_79`
[Education Edition] Gold (Au)
- `minecraft:element_81`
[Education Edition]Thallium (Ti)
- `minecraft:element_82`
[Education Edition] Lead (Pb)
- `minecraft:tuff_bricks`
- `minecraft:element_85`
[Education Edition] Astatine (At)
- `minecraft:element_87`
[Education Edition] Francium (Fr)
- `minecraft:element_88`
[Education Edition] Radium (Ra)
- `minecraft:element_90`
[Education Edition] Thorium (Th)
- `minecraft:element_91`
[Education Edition] Protactinium (Pa)
- `minecraft:element_92`
[Education Edition] Uranium (U)
- `minecraft:element_93`
[Education Edition] Neptunium (Np)
- `minecraft:element_94`
[Education Edition] Plutonium (Pu)
- `minecraft:element_95`
[Education Edition] Americium (Am)
- `minecraft:waxed_exposed_cut_copper_stairs`
Waxed Exposed Cut Copper Stairs
- `minecraft:element_96`
[Education Edition] Curium (Cm)
- `minecraft:element_98`
[Education Edition] Californium (Cf)
- `minecraft:cactus`
Cactus
- `minecraft:element_99`
[Education Edition] Einsteinium (Es)
- `minecraft:polished_blackstone_bricks`
Polished Blackstone Stairs
- `minecraft:element_100`
Fermium (Fm)
- `minecraft:element_101`
[Education Edition] Mendelevium (Md)
- `minecraft:element_105`
[Education Edition] Dubnium (Db)
- `minecraft:element_106`
[Education Edition] Seaborgium (Sg)
- `minecraft:element_107`
[Education Edition] Bohrium (Bh)
- `minecraft:element_108`
[Education Edition] Hassium (Hs)
- `minecraft:element_110`
[Education Edition] Darmstadtium (Ds)
- `minecraft:element_111`
[Education Edition] Roentgenium (Rg)
- `minecraft:element_112`
[Education Edition] Copernicium (Cn)
- `minecraft:warped_button`
Warped Button
- `minecraft:element_113`
[Education Edition] Nihonium (Nh)
- `minecraft:birch_stairs`
Birch Stairs
- `minecraft:element_114`
[Education Edition] Flerovium (Fl)
- `minecraft:element_115`
[Education Edition] Moscovium (Mc)
- `minecraft:nether_wart_block`
Nether Wart Block
- `minecraft:element_116`
[Education Edition] Livermorium (Lv)
- `minecraft:element_117`
[Education Edition] Tennessine (Ts)
- `minecraft:netherite_block`
Netherite Block
- `minecraft:white_candle_cake`
White Candle Cake
- `minecraft:respawn_anchor`
Respawn Anchor
- `minecraft:crying_obsidian`
Crying Obsidian
- `minecraft:dye`
Dye
- `minecraft:banner_pattern`
Banner Pattern
- `minecraft:spawn_egg`
Spawn Egg
- `minecraft:glow_berries`
Glow Berries
- `minecraft:polished_basalt`
Polished Basalt
- `minecraft:nether_gold_ore`
Nether Gold Ore
- `minecraft:item.warped_door`
Warped Door
- `minecraft:mangrove_trapdoor`
Mangrove Trapdoor
- `minecraft:piston_arm_collision`
Piston Arm Collision
- `minecraft:waxed_oxidized_chiseled_copper`
- `minecraft:dark_oak_button`
Dark Oak Button
- `minecraft:deepslate_copper_ore`
Deepslate Copper Ore
- `minecraft:target`
Target
- `minecraft:blackstone_double_slab`
Blackstone Double Slab
- `minecraft:jungle_button`
Jungle Button
- `minecraft:cherry_pressure_plate`
- `minecraft:crimson_wall_sign`
Crimson Wall Sign
- `minecraft:cobbled_deepslate_stairs`
Cobbled Deepslate Stairs
- `minecraft:item.glow_frame`
Glow Frame
- `minecraft:hanging_roots`
Hanging Roots
- `minecraft:calcite`
Calcite
- `minecraft:stripped_dark_oak_log`
Stripped Dark Oak Log
- `minecraft:lime_glazed_terracotta`
Lime Glazed Terracotta
- `minecraft:trapdoor`
Trapdoor
- `minecraft:bamboo_planks`
- `minecraft:mossy_cobblestone`
Mossy Cobblestone
- `minecraft:deepslate`
Deepslate
- `minecraft:warped_standing_sign`
Warped Standing Sign
- `minecraft:polished_blackstone_brick_wall`
Polished Blackstone Brick Wall
- `minecraft:pitcher_crop`
- `minecraft:warped_pressure_plate`
Warped Pressure Plate
- `minecraft:oak_stairs`
Oak Stairs
- `minecraft:end_bricks`
End Bricks
- `minecraft:smooth_sandstone_stairs`
Smooth Sandstone Stairs
- `minecraft:packed_mud`
Packed Mud
- `minecraft:light_blue_candle_cake`
Light Blue Candle Cake
- `minecraft:moss_carpet`
Moss Carpet
- `minecraft:amethyst_block`
Amethyst Block
- `minecraft:chiseled_bookshelf`
- `minecraft:weathered_chiseled_copper`
- `minecraft:iron_trapdoor`
Iron Trapdoor
- `minecraft:waxed_weathered_chiseled_copper`
- `minecraft:noteblock`
Noteblock
- `minecraft:polished_tuff_double_slab`
- `minecraft:tuff`
Tuff
- `minecraft:mangrove_log`
Mangrove Log
- `minecraft:torchflower`
- `minecraft:copper_grate`
- `minecraft:powered_comparator`
Powered Comparator
- `minecraft:warped_wall_sign`
Warped Wall Sign
- `minecraft:mangrove_double_slab`
Mangrove Double Slab
- `minecraft:waxed_exposed_copper_grate`
- `minecraft:oxidized_double_cut_copper_slab`
Oxidized Double Cut Copper Slab
- `minecraft:stone_button`
Stone Button
- `minecraft:exposed_double_cut_copper_slab`
Exposed Double Cut Copper Slab
- `minecraft:blue_glazed_terracotta`
Blue Glazed Terracotta
- `minecraft:bamboo_fence`
- `minecraft:hardened_clay`
Hardened Clay
- `minecraft:stripped_jungle_log`
Stripped Jungle Log
- `minecraft:polished_blackstone_double_slab`
Polished Blackstone Double Slab
- `minecraft:hard_glass_pane`
[Education Edition] Hard Glass Pane
- `minecraft:tuff_brick_wall`
- `minecraft:polished_blackstone_brick_double_slab`
Polished Blackstone Brick Double Slab
- `minecraft:waxed_exposed_copper`
Waxed Exposed Copper
- `minecraft:waxed_weathered_copper`
Waxed Weathered Copper
- `minecraft:cyan_candle_cake`
Cyan Candle Cake
- `minecraft:polished_tuff_wall`
- `minecraft:waxed_oxidized_cut_copper_stairs`
Waxed Oxidized Cut Copper Stairs
- `minecraft:torch`
Torch
- `minecraft:mud_brick_wall`
Mud Brick Wall
- `minecraft:honey_block`
Honey Block
- `minecraft:dripstone_block`
Dripstone Block
- `minecraft:cherry_trapdoor`
- `minecraft:gold_ore`
Gold Ore
- `minecraft:stonecutter`
Stonecutter
- `minecraft:warped_planks`
Warped Planks
- `minecraft:golden_rail`
Golden Rail
- `minecraft:invisible_bedrock`
Invisible Bedrock
- `minecraft:oxidized_copper_bulb`
- `minecraft:orange_glazed_terracotta`
Orange Glazed Terracotta
- `minecraft:smooth_basalt`
Smooth Basalt
- `minecraft:emerald_block`
Emerald Block
- `minecraft:heavy_weighted_pressure_plate`
Heavy Weighted Pressure Plate
- `minecraft:underwater_torch`
Underwater Torch
- `minecraft:wall_banner`
Wall Banner
- `minecraft:spruce_double_slab`
- `minecraft:ochre_froglight`
Ochre Froglight
- `minecraft:cherry_stairs`
- `minecraft:tuff_wall`
- `minecraft:glowingobsidian`
Glowing Obsidian
- `minecraft:brown_mushroom`
Brown Mushroom
- `minecraft:brown_glazed_terracotta`
Brown Glazed Terracotta
- `minecraft:waxed_copper_trapdoor`
- `minecraft:moving_block`
Moving Block
- `minecraft:oxidized_copper`
Oxidized Copper
- `minecraft:copper_ore`
Copper Ore
- `minecraft:birch_pressure_plate`
Birch Pressure Plate
- `minecraft:cave_vines_body_with_berries`
[Education Edition] Cave Vines Body with Berries
- `minecraft:sandstone_stairs`
Sandstone Stairs
- `minecraft:polished_blackstone_brick_stairs`
Polished Blackstone Brick Stairs
- `minecraft:jungle_pressure_plate`
Jungle Pressure Plate
- `minecraft:green_candle_cake`
Green Candle Cake
- `minecraft:stripped_bamboo_block`
- `minecraft:sculk_catalyst`
Sculk Catalyst
- `minecraft:oak_double_slab`
- `minecraft:brown_candle_cake`
Brown Candle Cake
- `minecraft:purpur_stairs`
Purpur Stairs
- `minecraft:acacia_wall_sign`
Acacia Wall Sign
- `minecraft:light_weighted_pressure_plate`
Light Weighted Pressure Plate
- `minecraft:polished_blackstone`
Polished Blackstone
- `minecraft:mycelium`
Mycelium
- `minecraft:stone_stairs`
Stone Stairs
- `minecraft:warped_stairs`
Warped Stairs
- `minecraft:weathered_copper_grate`
- `minecraft:item.wooden_door`
Wooden Door
- `minecraft:wooden_button`
Wooden Button
- `minecraft:pitcher_plant`
- `minecraft:spruce_pressure_plate`
Spruce Pressure Plate
- `minecraft:birch_fence_gate`
Birch Fence Gate
- `minecraft:redstone_wire`
Redstone Wire
- `minecraft:waxed_exposed_cut_copper`
Waxed Exposed Cut Copper
- `minecraft:lava`
Lava
- `minecraft:item.crimson_door`
Crimson Door
- `minecraft:mangrove_pressure_plate`
Mangrove Pressure Plate
- `minecraft:rail`
Rail
- `minecraft:blackstone_wall`
Blackstone Wall
- `minecraft:mossy_cobblestone_stairs`
Mossy Cobblestone Stairs
- `minecraft:detector_rail`
Detector Rail
- `minecraft:brain_coral_wall_fan`
- `minecraft:red_glazed_terracotta`
Red Glazed Terracotta
- `minecraft:dark_oak_fence_gate`
Dark Oak Fence Gate
- `minecraft:bamboo_mosaic_double_slab`
- `minecraft:structure_void`
Structure Void
- `minecraft:acacia_button`
Acacia Button
- `minecraft:snow`
Snow
- `minecraft:mangrove_standing_sign`
Mangrove Standing Sign
- `minecraft:black_glazed_terracotta`
Black Glazed Terracotta
- `minecraft:lit_redstone_ore`
Lit Redstone Ore
- `minecraft:stripped_mangrove_wood`
Stripped Mangrove Wood
- `minecraft:bone_block`
Bone Block
- `minecraft:crimson_fungus`
Crimson Fungus
- `minecraft:item.frame`
Frame
- `minecraft:lapis_block`
Lapis Block
- `minecraft:coal_ore`
Coal Ore
- `minecraft:redstone_ore`
Redstone Ore
- `minecraft:nether_brick_fence`
Nether Brick Fence
- `minecraft:crimson_hyphae`
Crimson Hyphae
- `minecraft:polished_blackstone_stairs`
Polished Blackstone Stairs
- `minecraft:small_dripleaf_block`
Small Dripleaf block
- `minecraft:waxed_weathered_copper_grate`
- `minecraft:basalt`
Basalt
- `minecraft:ender_chest`
Ender Chest
- `minecraft:warped_double_slab`
Warped Double Slab
- `minecraft:jungle_wall_sign`
Jungle Wall Sign
- `minecraft:sculk_sensor`
Sculk Sensor
- `minecraft:diorite_stairs`
Diorite Stairs
- `minecraft:stripped_cherry_log`
- `minecraft:crimson_button`
Crimson Button
- `minecraft:honeycomb_block`
Honeycomb Block
- `minecraft:blackstone`
Blackstone
- `minecraft:chorus_flower`
Chorus Flower
- `minecraft:cracked_nether_bricks`
Cracked Nether Bricks
- `minecraft:powered_repeater`
Powered Repeater
- `minecraft:deepslate_tiles`
Deepslate Tile
- `minecraft:red_mushroom`
Red Mushroom
- `minecraft:gilded_blackstone`
Gilded Blackstone
- `minecraft:exposed_cut_copper_stairs`
Exposed Cut Copper Stairs
- `minecraft:mangrove_stairs`
Mangrove Stairs
- `minecraft:unknown`
[Education Edition] Unknown
- `minecraft:yellow_candle_cake`
Yellow Candle Cake
- `minecraft:dropper`
Dropper
- `minecraft:jungle_stairs`
Jungle Stairs
- `minecraft:pink_petals`
- `minecraft:infested_deepslate`
Infested Deepslate
- `minecraft:soul_torch`
Soul Torch
- `minecraft:podzol`
Podzol
- `minecraft:deepslate_tile_stairs`
Deepslate Tile Stairs
- `minecraft:crimson_fence_gate`
Crimson Fence Gate
- `minecraft:deadbush`
Deadbush
- `minecraft:item.wheat`
Wheat
- `minecraft:item.spruce_door`
Spruce Door
- `minecraft:barrier`
Barrier
- `minecraft:frosted_ice`
[Education Edition] Frosted Ice
- `minecraft:suspicious_gravel`
- `minecraft:brick_block`
Brick Block
- `minecraft:waxed_weathered_copper_trapdoor`
- `minecraft:stripped_birch_log`
Stripped Birch Log
- `minecraft:cave_vines`
[Education Edition] Cave Vines
- `minecraft:melon_stem`
Melon Stem
- `minecraft:crimson_planks`
Crimson Planks
- `minecraft:waxed_weathered_cut_copper`
Waxed Weathered Cut Copper
- `minecraft:horn_coral_wall_fan`
- `minecraft:waxed_oxidized_copper_trapdoor`
- `minecraft:brick_stairs`
Brick Stairs
- `minecraft:wall_sign`
Wall Sign
- `minecraft:shroomlight`
Shroomlight
- `minecraft:dark_oak_stairs`
Dark Oak Stairs
- `minecraft:birch_double_slab`
- `minecraft:glass_pane`
Glass Pane
- `minecraft:chiseled_deepslate`
Chiseled Deepslate
- `minecraft:bamboo_trapdoor`
- `minecraft:mangrove_wall_sign`
Mangrove Wall Sign
- `minecraft:item.skull`
Skull
- `minecraft:light_gray_candle_cake`
Light Gray Candle Cake
- `minecraft:cherry_leaves`
- `minecraft:darkoak_wall_sign`
Dark Oak Wall sign
- `minecraft:cyan_glazed_terracotta`
Cyan Glazed Terracotta
- `minecraft:chiseled_tuff_bricks`
- `minecraft:cracked_deepslate_bricks`
Cracked Deepslate Bricks
- `minecraft:fire_coral_wall_fan`
- `minecraft:flowing_lava`
Flowing Lava
- `minecraft:jungle_fence_gate`
Jungle Fence Gate
- `minecraft:exposed_copper_grate`
- `minecraft:coal_block`
Coal Block
- `minecraft:waxed_double_cut_copper_slab`
Waxed Double Cut Copper Slab
- `minecraft:item.kelp`
Kelp
- `minecraft:chorus_plant`
Chorus Plant
- `minecraft:water`
Water
- `minecraft:chemical_heat`
Chemical Heat
- `minecraft:mud_brick_stairs`
Mud Brick Stairs
- `minecraft:unpowered_repeater`
Unpowered Repeater
- `minecraft:white_glazed_terracotta`
White Glazed Terracotta
- `minecraft:acacia_trapdoor`
Acacia Trapdoor
- `minecraft:glow_lichen`
Glow Lichen
- `minecraft:acacia_double_slab`
- `minecraft:soul_lantern`
Soul Lantern
- `minecraft:bee_nest`
Bee Nest
- `minecraft:bubble_column`
Bubble Column
- `minecraft:calibrated_sculk_sensor`
- `minecraft:copper_trapdoor`
- `minecraft:stripped_acacia_log`
Stripped Acacia Log
- `minecraft:cobbled_deepslate_double_slab`
Cobbled Deepslate Double Slab
- `minecraft:warped_fence`
Warped Fence
- `minecraft:cherry_standing_sign`
- `minecraft:item.chain`
Chain
- `minecraft:waxed_exposed_copper_trapdoor`
- `minecraft:mossy_stone_brick_stairs`
Mossy Stone Brick Stairs
- `minecraft:waxed_copper`
Waxed Copper
- `minecraft:end_rod`
End Rod
- `minecraft:crimson_stem`
Crimson Stem
- `minecraft:tuff_brick_double_slab`
- `minecraft:warped_hyphae`
Warped Hyphae
- `minecraft:tuff_stairs`
- `minecraft:grass_block`
- `minecraft:item.reeds`
Reeds
- `minecraft:deepslate_gold_ore`
Deepslate Gold Ore
- `minecraft:item.camera`
Camera
- `minecraft:vault`
- `minecraft:beehive`
Beehive
- `minecraft:item.jungle_door`
Jungle Door
- `minecraft:glass`
Glass
- `minecraft:wither_rose`
Wither Rose
- `minecraft:waxed_weathered_cut_copper_stairs`
Waxed Weathered Cut Copper Stairs
- `minecraft:bamboo_mosaic_stairs`
- `minecraft:polished_blackstone_pressure_plate`
Polished Blackstone Pressure Plate
- `minecraft:acacia_standing_sign`
Acacia Standing Sign
- `minecraft:tuff_brick_stairs`
- `minecraft:exposed_copper_bulb`
- `minecraft:crimson_stairs`
Crimson Stairs
- `minecraft:stripped_spruce_log`
Stripped Spruce Log
- `minecraft:waxed_oxidized_copper_bulb`
- `minecraft:pumpkin_stem`
Pumpkin Stem
- `minecraft:deepslate_emerald_ore`
Deepslate Emerald Ore
- `minecraft:quartz_bricks`
Quartz Bricks
- `minecraft:unpowered_comparator`
Unpowered Comparator
- `minecraft:end_brick_stairs`
End Brick Stairs
- `minecraft:item.nether_sprouts`
Nether Sprouts
- `minecraft:verdant_froglight`
Verdant Froglight
- `minecraft:warped_stem`
Warped Stem
- `minecraft:stripped_crimson_hyphae`
Stripped Crimson Hyphae
- `minecraft:cocoa`
Cocoa
- `minecraft:lever`
Lever
- `minecraft:weathered_copper_trapdoor`
- `minecraft:mangrove_fence`
Mangrove Fence
- `minecraft:oxidized_copper_grate`
- `minecraft:ice`
Ice
- `minecraft:item.bed`
Bed
- `minecraft:web`
Web
- `minecraft:enchanting_table`
Enchanting Table
- `minecraft:polished_blackstone_wall`
Polished Blackstone Wall
- `minecraft:waxed_exposed_double_cut_copper_slab`
Waxed Exposed Double Cut Copper Slab
- `minecraft:bubble_coral_wall_fan`
- `minecraft:azalea`
Azalea
- `minecraft:mud_bricks`
Mud Bricks
- `minecraft:birch_wall_sign`
Birch Wall Sign
- `minecraft:bamboo_wall_sign`
- `minecraft:bamboo_sapling`
Bamboo Sapling
- `minecraft:standing_banner`
Standing Banner
- `minecraft:budding_amethyst`
Budding Amethyst
- `minecraft:jungle_double_slab`
- `minecraft:purple_glazed_terracotta`
Purple Glazed Terracotta
- `minecraft:weathered_cut_copper`
Weathered Cut Copper
- `minecraft:bedrock`
Bedrock
- `minecraft:dried_kelp_block`
Dried Kelp Block
- `minecraft:blackstone_stairs`
Blackstone Stairs
- `minecraft:blue_ice`
Blue Ice
- `minecraft:dead_horn_coral_wall_fan`
- `minecraft:weathered_double_cut_copper_slab`
Weathered Double Cut Copper Slab
- `minecraft:netherrack`
Netherrack
- `minecraft:mangrove_button`
Mangrove Button
- `minecraft:allow`
[Education Edition] Allow
- `minecraft:item.birch_door`
Birch Door
- `minecraft:cherry_wood`
- `minecraft:bamboo_standing_sign`
- `minecraft:dead_tube_coral_wall_fan`
- `minecraft:deepslate_lapis_ore`
Deepslate Lapis Ore
- `minecraft:cherry_log`
- `minecraft:prismarine_stairs`
Prismarine Stairs
- `minecraft:polished_tuff_stairs`
- `minecraft:nether_brick`
Nether Brick
- `minecraft:deepslate_iron_ore`
Deepslate Iron Ore
- `minecraft:waxed_cut_copper`
Waxed Cut Copper
- `minecraft:spore_blossom`
Spore Blossom
- `minecraft:crimson_standing_sign`
Crimson Standing Sign
- `minecraft:darkoak_standing_sign`
Dark Oak Standing Sign
- `minecraft:emerald_ore`
Emerald Ore
- `minecraft:pointed_dripstone`
Pointed Dripstone
- `minecraft:netherreactor`
[Education Edition] Nether Reactor
- `minecraft:trip_wire`
Trip Wire
- `minecraft:item.cauldron`
Cauldron
- `minecraft:cave_vines_head_with_berries`
Cave Vines Head with Berries
- `minecraft:dark_oak_trapdoor`
Dark Oak Trapdoor
- `minecraft:item.brewing_stand`
Brewing Stand
- `minecraft:weathered_copper_bulb`
- `minecraft:end_portal`
End Portal
- `minecraft:acacia_fence_gate`
Acacia Fence Gate
- `minecraft:lit_smoker`
Lit Smoker
- `minecraft:lapis_ore`
Lapis Ore
- `minecraft:repeating_command_block`
Repeating Command Block
- `minecraft:cherry_planks`
- `minecraft:polished_deepslate`
Polished Deepslate
- `minecraft:tuff_double_slab`
- `minecraft:furnace`
Furnace
- `minecraft:amethyst_cluster`
Amethyst Cluster
- `minecraft:waxed_chiseled_copper`
- `minecraft:crimson_fence`
Crimson Fence
- `minecraft:chiseled_tuff`
- `minecraft:dispenser`
Dispenser
- `minecraft:item.soul_campfire`
Soul Campfire
- `minecraft:wooden_pressure_plate`
Wooden Pressure Plate
- `minecraft:lime_candle_cake`
Lime Candle Cake
- `minecraft:trial_spawner`
- `minecraft:grass_path`
Grass Path
- `minecraft:weathered_copper`
Weathered Copper
- `minecraft:cherry_fence_gate`
- `minecraft:gray_glazed_terracotta`
Gray Glazed Terracotta
- `minecraft:bamboo_mosaic`
- `minecraft:raw_iron_block`
Raw Iron Block
- `minecraft:iron_block`
Iron Block
- `minecraft:stripped_mangrove_log`
Stripped Mangrove Log
- `minecraft:gravel`
Gravel
- `minecraft:tube_coral_wall_fan`
- `editor:map_marker_spawn_egg`
