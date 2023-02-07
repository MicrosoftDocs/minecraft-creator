---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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
- `minecraft:acacia_boat`
Acacia Boat
- `minecraft:acacia_button`
Acacia Button
- `minecraft:acacia_chest_boat`
Acacia Chest Boat
- `minecraft:acacia_door`
Acacia Door
- `minecraft:acacia_fence_gate`
Acacia Fence Gate
- `minecraft:acacia_hanging_sign`
- `minecraft:acacia_pressure_plate`
Acacia Pressure Plate
- `minecraft:acacia_sign`
Acacia Sign
- `minecraft:acacia_stairs`
Acacia Stairs
- `minecraft:acacia_standing_sign`
Acacia Standing Sign
- `minecraft:acacia_trapdoor`
Acacia Trapdoor
- `minecraft:acacia_wall_sign`
Acacia Wall Sign
- `minecraft:activator_rail`
Activator Rail
- `minecraft:agent_spawn_egg`
Agent Spawn Egg
- `minecraft:air`
Air
- `minecraft:allay_spawn_egg`
Allay Spawn Egg
- `minecraft:allow`
[Education Edition] Allow
- `minecraft:amethyst_block`
Amethyst Block
- `minecraft:amethyst_cluster`
Amethyst Cluster
- `minecraft:amethyst_shard`
Amethyst Shard
- `minecraft:ancient_debris`
Ancient Debris
- `minecraft:andesite_stairs`
Andesite Stairs
- `minecraft:anvil`
Anvil
- `minecraft:apple`
Apple
- `minecraft:armor_stand`
Armor Stand
- `minecraft:arrow`
Arrow
- `minecraft:axolotl_bucket`
Axolotl Bucket
- `minecraft:axolotl_spawn_egg`
Axolotl Spawn Egg
- `minecraft:azalea`
Azalea
- `minecraft:azalea_leaves`
Azalea Leaves
- `minecraft:azalea_leaves_flowered`
Azalea Leaves Flowered
- `minecraft:baked_potato`
Baked Potato
- `minecraft:balloon`
Balloon
- `minecraft:bamboo`
Bamboo
- `minecraft:bamboo_block`
- `minecraft:bamboo_button`
- `minecraft:bamboo_chest_raft`
- `minecraft:bamboo_door`
- `minecraft:bamboo_double_slab`
- `minecraft:bamboo_fence`
- `minecraft:bamboo_fence_gate`
- `minecraft:bamboo_hanging_sign`
- `minecraft:bamboo_mosaic`
- `minecraft:bamboo_mosaic_double_slab`
- `minecraft:bamboo_mosaic_slab`
- `minecraft:bamboo_mosaic_stairs`
- `minecraft:bamboo_planks`
- `minecraft:bamboo_pressure_plate`
- `minecraft:bamboo_raft`
- `minecraft:bamboo_sapling`
Bamboo Sapling
- `minecraft:bamboo_sign`
- `minecraft:bamboo_slab`
- `minecraft:bamboo_stairs`
- `minecraft:bamboo_standing_sign`
- `minecraft:bamboo_trapdoor`
- `minecraft:bamboo_wall_sign`
- `minecraft:banner`
Banner
- `minecraft:banner_pattern`
Banner Pattern
- `minecraft:barrel`
Barrel
- `minecraft:barrier`
Barrier
- `minecraft:basalt`
Basalt
- `minecraft:bat_spawn_egg`
Bat Spawn Egg
- `minecraft:beacon`
Beacon
- `minecraft:bed`
Bed
- `minecraft:bedrock`
Bedrock
- `minecraft:bee_nest`
Bee Nest
- `minecraft:bee_spawn_egg`
Bee Spawn Egg
- `minecraft:beef`
Beef
- `minecraft:beehive`
Beehive
- `minecraft:beetroot`
Beetroot
- `minecraft:beetroot_seeds`
Beetroot Seeds
- `minecraft:beetroot_soup`
Beetroot Soup
- `minecraft:bell`
Bell
- `minecraft:big_dripleaf`
Big Dripleaf
- `minecraft:birch_boat`
Birch Boat
- `minecraft:birch_button`
Birch Button
- `minecraft:birch_chest_boat`
Birch Chest Boat
- `minecraft:birch_door`
Birch Door
- `minecraft:birch_fence_gate`
Birch Fence Gate
- `minecraft:birch_hanging_sign`
- `minecraft:birch_pressure_plate`
Birch Pressure Plate
- `minecraft:birch_sign`
Birch Sign
- `minecraft:birch_stairs`
Birch Stairs
- `minecraft:birch_standing_sign`
Birch Standing Sign
- `minecraft:birch_trapdoor`
Birch Trapdoor
- `minecraft:birch_wall_sign`
Birch Wall Sign
- `minecraft:black_candle`
Black Candle
- `minecraft:black_candle_cake`
Black Candle Cake
- `minecraft:black_dye`
Black Dye
- `minecraft:black_glazed_terracotta`
Black Glazed Terracotta
- `minecraft:blackstone`
Blackstone
- `minecraft:blackstone_double_slab`
Blackstone Double Slab
- `minecraft:blackstone_slab`
Blackstone Slab
- `minecraft:blackstone_stairs`
Blackstone Stairs
- `minecraft:blackstone_wall`
Blackstone Wall
- `minecraft:blast_furnace`
Blast Furnace
- `minecraft:blaze_powder`
Blaze Powder
- `minecraft:blaze_rod`
Blaze Rod
- `minecraft:blaze_spawn_egg`
Blaze Spawn Egg
- `minecraft:bleach`
Bleach
- `minecraft:blue_candle`
Blue Candle
- `minecraft:blue_candle_cake`
Blue Candle Cake
- `minecraft:blue_dye`
Blue Dye
- `minecraft:blue_glazed_terracotta`
Blue Glazed Terracotta
- `minecraft:blue_ice`
Blue Ice
- `minecraft:boat`
Boat
- `minecraft:bone`
Bone
- `minecraft:bone_block`
Bone Block
- `minecraft:bone_meal`
Bone Meal
- `minecraft:book`
Book
- `minecraft:bookshelf`
Bookshelf
- `minecraft:border_block`
Border Block
- `minecraft:bordure_indented_banner_pattern`
Bordure Indented Banner Pattern
- `minecraft:bow`
Bow
- `minecraft:bowl`
Bowl
- `minecraft:bread`
Bread
- `minecraft:brewing_stand`
Brewing Stand
- `minecraft:brick`
Brick
- `minecraft:brick_block`
Brick Block
- `minecraft:brick_stairs`
Brick Stairs
- `minecraft:brown_candle`
Brown Candle
- `minecraft:brown_candle_cake`
Brown Candle Cake
- `minecraft:brown_dye`
Brown Dye
- `minecraft:brown_glazed_terracotta`
Brown Glazed Terracotta
- `minecraft:brown_mushroom`
Brown Mushroom
- `minecraft:brown_mushroom_block`
Brown Mushroom Block
- `minecraft:bubble_column`
Bubble Column
- `minecraft:bucket`
Bucket
- `minecraft:budding_amethyst`
Budding Amethyst
- `minecraft:cactus`
Cactus
- `minecraft:cake`
Cake
- `minecraft:calcite`
Calcite
- `minecraft:camel_spawn_egg`
- `minecraft:camera`
Camera
- `minecraft:campfire`
Campfire
- `minecraft:candle`
Candle
- `minecraft:candle_cake`
Candle Cake
- `minecraft:carpet`
Carpet
- `minecraft:carrot`
Carrot
- `minecraft:carrot_on_a_stick`
Carrot on a Stick
- `minecraft:carrots`
Carrots
- `minecraft:cartography_table`
Cartography Table
- `minecraft:carved_pumpkin`
Carved Pumpkin
- `minecraft:cat_spawn_egg`
Cat Spawn Egg
- `minecraft:cauldron`
Cauldron
- `minecraft:cave_spider_spawn_egg`
Cave Spider Spawn Egg
- `minecraft:cave_vines`
[Education Edition] Cave Vines
- `minecraft:cave_vines_body_with_berries`
[Education Edition] Cave Vines Body with Berries
- `minecraft:cave_vines_head_with_berries`
Cave Vines Head with Berries
- `minecraft:chain`
Chain
- `minecraft:chain_command_block`
Chain Command Block
- `minecraft:chainmail_boots`
Chainmail Boots
- `minecraft:chainmail_chestplate`
Chainmail Chestplate
- `minecraft:chainmail_helmet`
Chainmail Helmet
- `minecraft:chainmail_leggings`
Chainmail Leggings
- `minecraft:charcoal`
Charcoal
- `minecraft:chemical_heat`
Chemical Heat
- `minecraft:chemistry_table`
Chemistry Table
- `minecraft:chest`
Chest
- `minecraft:chest_boat`
Chest Boat
- `minecraft:chest_minecart`
Chest Minecart
- `minecraft:chicken`
Chicken
- `minecraft:chicken_spawn_egg`
Chicken Spawn Egg
- `minecraft:chiseled_bookshelf`
- `minecraft:chiseled_deepslate`
Chiseled Deepslate
- `minecraft:chiseled_nether_bricks`
Chiseled Nether Bricks
- `minecraft:chiseled_polished_blackstone`
Chiseled Polished Blackstone
- `minecraft:chorus_flower`
Chorus Flower
- `minecraft:chorus_fruit`
Chorus Fruit
- `minecraft:chorus_plant`
Chorus Plant
- `minecraft:clay`
Clay
- `minecraft:clay_ball`
Clay Ball
- `minecraft:client_request_placeholder_block`
[Education Edition] Client Request Placeholder Block
- `minecraft:clock`
Clock
- `minecraft:coal`
Coal
- `minecraft:coal_block`
Coal Block
- `minecraft:coal_ore`
Coal Ore
- `minecraft:cobbled_deepslate`
Cobbled Deepslate
- `minecraft:cobbled_deepslate_double_slab`
Cobbled Deepslate Double Slab
- `minecraft:cobbled_deepslate_slab`
Cobbled Deepslate Slab
- `minecraft:cobbled_deepslate_stairs`
Cobbled Deepslate Stairs
- `minecraft:cobbled_deepslate_wall`
Cobbled Deepslate Wall
- `minecraft:cobblestone`
Cobblestone
- `minecraft:cobblestone_wall`
Cobblestone Wall
- `minecraft:cocoa`
Cocoa
- `minecraft:cocoa_beans`
Cocoa Beans
- `minecraft:cod`
Cod
- `minecraft:cod_bucket`
Cod Bucket
- `minecraft:cod_spawn_egg`
Cod Spawn Egg
- `minecraft:colored_torch_bp`
Colored Torch BP
- `minecraft:colored_torch_rg`
Colored Torch RG
- `minecraft:command_block`
Command Block
- `minecraft:command_block_minecart`
Command Block Minecart
- `minecraft:comparator`
Comparator
- `minecraft:compass`
Compass
- `minecraft:composter`
Composter
- `minecraft:compound`
[Education Edition] Compound
- `minecraft:concrete`
Concrete
- `minecraft:concrete_powder`
Concrete Powder
- `minecraft:conduit`
Conduit
- `minecraft:cooked_beef`
Cooked Beef
- `minecraft:cooked_chicken`
Cooked Chicken
- `minecraft:cooked_cod`
Cooked Cod
- `minecraft:cooked_mutton`
Cooked Mutton
- `minecraft:cooked_porkchop`
Cooked Porkchop
- `minecraft:cooked_rabbit`
Cooked Rabbit
- `minecraft:cooked_salmon`
Cooked Salmon
- `minecraft:cookie`
Cookie
- `minecraft:copper_block`
Copper Block
- `minecraft:copper_ingot`
Copper Ingot
- `minecraft:copper_ore`
Copper Ore
- `minecraft:coral`
Coral
- `minecraft:coral_block`
Coral Block
- `minecraft:coral_fan`
Coral Fan
- `minecraft:coral_fan_dead`
Coral Fan Dead
- `minecraft:coral_fan_hang`
Coral Fan Hang
- `minecraft:coral_fan_hang2`
Coral Fan Hang 2
- `minecraft:coral_fan_hang3`
Coral Fan Hang 3
- `minecraft:cow_spawn_egg`
Cow Spawn Egg
- `minecraft:cracked_deepslate_bricks`
Cracked Deepslate Bricks
- `minecraft:cracked_deepslate_tiles`
Cracked Deepslate Tiles
- `minecraft:cracked_nether_bricks`
Cracked Nether Bricks
- `minecraft:cracked_polished_blackstone_bricks`
Cracked Polished Blackstone Bricks
- `minecraft:crafting_table`
Crafting Table
- `minecraft:creeper_banner_pattern`
Creeper Banner Pattern
- `minecraft:creeper_spawn_egg`
Creeper Spawn Egg
- `minecraft:crimson_button`
Crimson Button
- `minecraft:crimson_door`
Crimson Door
- `minecraft:crimson_double_slab`
Crimson Double Slab
- `minecraft:crimson_fence`
Crimson Fence
- `minecraft:crimson_fence_gate`
Crimson Fence Gate
- `minecraft:crimson_fungus`
Crimson Fungus
- `minecraft:crimson_hanging_sign`
- `minecraft:crimson_hyphae`
Crimson Hyphae
- `minecraft:crimson_nylium`
Crimson Nylium
- `minecraft:crimson_planks`
Crimson Planks
- `minecraft:crimson_pressure_plate`
Crimson Pressure Plate
- `minecraft:crimson_roots`
Crimson Roots
- `minecraft:crimson_sign`
Crimson Sign
- `minecraft:crimson_slab`
Crimson Slab
- `minecraft:crimson_stairs`
Crimson Stairs
- `minecraft:crimson_standing_sign`
Crimson Standing Sign
- `minecraft:crimson_stem`
Crimson Stem
- `minecraft:crimson_trapdoor`
Crimson Trapdoor
- `minecraft:crimson_wall_sign`
Crimson Wall Sign
- `minecraft:crossbow`
Crossbow
- `minecraft:crying_obsidian`
Crying Obsidian
- `minecraft:cut_copper`
Cut Copper
- `minecraft:cut_copper_slab`
Cut Copper Slab
- `minecraft:cut_copper_stairs`
Cut Copper Stairs
- `minecraft:cyan_candle`
Cyan Candle
- `minecraft:cyan_candle_cake`
Cyan Candle Cake
- `minecraft:cyan_dye`
Cyan Dye
- `minecraft:cyan_glazed_terracotta`
Cyan Glazed Terracotta
- `minecraft:dark_oak_boat`
Dark Oak Boat
- `minecraft:dark_oak_button`
Dark Oak Button
- `minecraft:dark_oak_chest_boat`
Dark Oak Chest Boat
- `minecraft:dark_oak_door`
Dark Oak Door
- `minecraft:dark_oak_fence_gate`
Dark Oak Fence Gate
- `minecraft:dark_oak_hanging_sign`
- `minecraft:dark_oak_pressure_plate`
Dark Oak Pressure Plate
- `minecraft:dark_oak_sign`
Dark Oak Sign
- `minecraft:dark_oak_stairs`
Dark Oak Stairs
- `minecraft:dark_oak_trapdoor`
Dark Oak Trapdoor
- `minecraft:dark_prismarine_stairs`
Dark Prismarine Stairs
- `minecraft:darkoak_standing_sign`
Dark Oak Standing Sign
- `minecraft:darkoak_wall_sign`
Dark Oak Wall sign
- `minecraft:daylight_detector`
Daylight Detector
- `minecraft:daylight_detector_inverted`
Daylight Detector Inverted
- `minecraft:deadbush`
Deadbush
- `minecraft:debug_stick`
[Education Edition] Debug Stick
- `minecraft:deepslate`
Deepslate
- `minecraft:deepslate_brick_double_slab`
Deepslate Brick Double Slab
- `minecraft:deepslate_brick_slab`
Deepslate Brick Slab
- `minecraft:deepslate_brick_stairs`
Deepslate Brick Stairs
- `minecraft:deepslate_brick_wall`
Deepslate Brick Wall
- `minecraft:deepslate_bricks`
Deepslate Bricks
- `minecraft:deepslate_coal_ore`
Deepslate Coal Ore
- `minecraft:deepslate_copper_ore`
Deepslate Copper Ore
- `minecraft:deepslate_diamond_ore`
Deepslate Diamond Ore
- `minecraft:deepslate_emerald_ore`
Deepslate Emerald Ore
- `minecraft:deepslate_gold_ore`
Deepslate Gold Ore
- `minecraft:deepslate_iron_ore`
Deepslate Iron Ore
- `minecraft:deepslate_lapis_ore`
Deepslate Lapis Ore
- `minecraft:deepslate_redstone_ore`
Deepslate Redstone Ore
- `minecraft:deepslate_tile_double_slab`
Deepslate Tile Double Slab
- `minecraft:deepslate_tile_slab`
Deepslate Tile Slab
- `minecraft:deepslate_tile_stairs`
Deepslate Tile Stairs
- `minecraft:deepslate_tile_wall`
Deepslate Tile Wall
- `minecraft:deepslate_tiles`
Deepslate Tile
- `minecraft:deny`
[Education Edition] Deny
- `minecraft:detector_rail`
Detector Rail
- `minecraft:diamond`
Diamond
- `minecraft:diamond_axe`
Diamond Axe
- `minecraft:diamond_block`
Diamond Block
- `minecraft:diamond_boots`
Diamond Boots
- `minecraft:diamond_chestplate`
Diamond Chestplate
- `minecraft:diamond_helmet`
Diamond Helmet
- `minecraft:diamond_hoe`
Diamond Hoe
- `minecraft:diamond_horse_armor`
Diamond Horse Armor
- `minecraft:diamond_leggings`
Diamond Leggings
- `minecraft:diamond_ore`
Diamond Ore
- `minecraft:diamond_pickaxe`
Diamond Pickaxe
- `minecraft:diamond_shovel`
Diamond Shovel
- `minecraft:diamond_sword`
Diamond Sword
- `minecraft:diorite_stairs`
Diorite Stairs
- `minecraft:dirt`
Dirt
- `minecraft:dirt_with_roots`
Dirt with Roots
- `minecraft:disc_fragment_5`
Disc Fragment 5
- `minecraft:dispenser`
Dispenser
- `minecraft:dolphin_spawn_egg`
Dolphin Spawn Egg
- `minecraft:donkey_spawn_egg`
Donkey Spawn Egg
- `minecraft:double_cut_copper_slab`
Double Cut Copper Slab
- `minecraft:double_plant`
Double Plant
- `minecraft:double_stone_block_slab`
Double Stone Block Slab
- `minecraft:double_stone_block_slab2`
Double Stone Block Slab 2
- `minecraft:double_stone_block_slab3`
Double Stone Block Slab 3
- `minecraft:double_stone_block_slab4`
Double Stone Block Slab 4
- `minecraft:double_wooden_slab`
Double Wooden Slab
- `minecraft:dragon_breath`
Dragon Breath
- `minecraft:dragon_egg`
Dragon Egg
- `minecraft:dried_kelp`
Dried Kelp
- `minecraft:dried_kelp_block`
Dried Kelp Block
- `minecraft:dripstone_block`
Dripstone Block
- `minecraft:dropper`
Dropper
- `minecraft:drowned_spawn_egg`
Drowned Spawn Egg
- `minecraft:dye`
Dye
- `minecraft:echo_shard`
Echo Shard
- `minecraft:egg`
Egg
- `minecraft:elder_guardian_spawn_egg`
Elder Guardian Spawn Egg
- `minecraft:element_0`
[Education Edition] Unknown (?)
- `minecraft:element_1`
[Education Edition] Hydrogen (H)
- `minecraft:element_10`
[Education Edition] Neon (Ne)
- `minecraft:element_100`
Fermium (Fm)
- `minecraft:element_101`
[Education Edition] Mendelevium (Md)
- `minecraft:element_102`
[Education Edition] Nobelium (No)
- `minecraft:element_103`
[Education Edition] Lawrencium (Lr)
- `minecraft:element_104`
[Education Edition] Rutherfordium (Rf)
- `minecraft:element_105`
[Education Edition] Dubnium (Db)
- `minecraft:element_106`
[Education Edition] Seaborgium (Sg)
- `minecraft:element_107`
[Education Edition] Bohrium (Bh)
- `minecraft:element_108`
[Education Edition] Hassium (Hs)
- `minecraft:element_109`
[Education Edition] Meitnerium (Mt)
- `minecraft:element_11`
[Education Edition] Sodium (Na)
- `minecraft:element_110`
[Education Edition] Darmstadtium (Ds)
- `minecraft:element_111`
[Education Edition] Roentgenium (Rg)
- `minecraft:element_112`
[Education Edition] Copernicium (Cn)
- `minecraft:element_113`
[Education Edition] Nihonium (Nh)
- `minecraft:element_114`
[Education Edition] Flerovium (Fl)
- `minecraft:element_115`
[Education Edition] Moscovium (Mc)
- `minecraft:element_116`
[Education Edition] Livermorium (Lv)
- `minecraft:element_117`
[Education Edition] Tennessine (Ts)
- `minecraft:element_118`
[Education Edition] Oganesson (Og)
- `minecraft:element_12`
[Education Edition] Magnesium (Mg)
- `minecraft:element_13`
[Education Edition] Aluminum (Al)
- `minecraft:element_14`
[Education Edition] Silicon (Si)
- `minecraft:element_15`
Phosphorus (P)
- `minecraft:element_16`
[Education Edition] Sulfur (S)
- `minecraft:element_17`
[Education Edition] Chlorine (Cl)
- `minecraft:element_18`
[Education Edition] Argon (Ar)
- `minecraft:element_19`
[Education Edition] Potassium (K)
- `minecraft:element_2`
[Education Edition] Helium (He)
- `minecraft:element_20`
[Education Edition] Calcium (Ca)
- `minecraft:element_21`
[Education Edition] Scandium (Sc)
- `minecraft:element_22`
[Education Edition] Titanium (Ti)
- `minecraft:element_23`
[Education Edition] Vanadium (V)
- `minecraft:element_24`
[Education Edition] Chromium (Cr)
- `minecraft:element_25`
[Education Edition] Manganese (Mn)
- `minecraft:element_26`
[Education Edition] Iron (Fe)
- `minecraft:element_27`
[Education Edition] Cobalt (Co)
- `minecraft:element_28`
[Education Edition] Nickel (Ni)
- `minecraft:element_29`
[Education Edition] Copper (Cu)
- `minecraft:element_3`
[Education Edition] Lithium (Li)
- `minecraft:element_30`
[Education Edition] Zinc (Zn)
- `minecraft:element_31`
[Education Edition] Gallium (Ga)
- `minecraft:element_32`
[Education Edition] Germanium (Ge)
- `minecraft:element_33`
[Education Edition] Arsenic (As)
- `minecraft:element_34`
[Education Edition] Selenium (Se)
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
- `minecraft:element_4`
[Education Edition] Beryllium (Be)
- `minecraft:element_40`
[Education Edition] Zirconium (Zr)
- `minecraft:element_41`
[Education Edition] Niobium (Nb)
- `minecraft:element_42`
[Education Edition] Molybdenum (Mo)
- `minecraft:element_43`
[Education Edition] Technetium (Tc)
- `minecraft:element_44`
[Education Edition] Ruthenium (Ru)
- `minecraft:element_45`
[Education Edition] Rhodium (Rh)
- `minecraft:element_46`
[Education Edition] Palladium (Pd)
- `minecraft:element_47`
[Education Edition] Silver (Ag)
- `minecraft:element_48`
[Education Edition] Cadmium (Cd)
- `minecraft:element_49`
[Education Edition] Indium (In)
- `minecraft:element_5`
[Education Edition] Boron (B)
- `minecraft:element_50`
[Education Edition] Tin (Sn)
- `minecraft:element_51`
[Education Edition] Antimony (Sb)
- `minecraft:element_52`
[Education Edition] Tellurium (Te)
- `minecraft:element_53`
[Education Edition] Iodine (I)
- `minecraft:element_54`
[Education Edition] Xenon (Xe)
- `minecraft:element_55`
[Education Edition] Cesium (Cs)
- `minecraft:element_56`
[Education Edition] Barium (Ba)
- `minecraft:element_57`
[Education Edition] Lanthanum (La)
- `minecraft:element_58`
[Education Edition] Cerium (Ce)
- `minecraft:element_59`
[Education Edition] Praseodymium (Pr)
- `minecraft:element_6`
[Education Edition] Carbon (C)
- `minecraft:element_60`
[Education Edition]Neodymium (Nd)
- `minecraft:element_61`
[Education Edition] Promethium (Pm)
- `minecraft:element_62`
[Education Edition] Samarium (Sm)
- `minecraft:element_63`
[Education Edition] Europium (Eu)
- `minecraft:element_64`
[Education Edition] Gadolinium (Gd)
- `minecraft:element_65`
[Education Edition] Terbium (Tb)
- `minecraft:element_66`
[Education Edition] Dysprosium (Dy)
- `minecraft:element_67`
[Education Edition] Holmium (Ho)
- `minecraft:element_68`
[Education Edition] Erbium (Er)
- `minecraft:element_69`
[Education Edition] Thulium (Tm)
- `minecraft:element_7`
[Education Edition] Nitrogen (N)
- `minecraft:element_70`
[Education Edition] Ytterbium (Yb)
- `minecraft:element_71`
[Education Edition] Lutetium (Lu)
- `minecraft:element_72`
[Education Edition] Hafnium (Hf)
- `minecraft:element_73`
[Education Edition] Tantalum (Ta)
- `minecraft:element_74`
[Education Edition] Tungsten (W)
- `minecraft:element_75`
[Education Edition] Rhenium (Re)
- `minecraft:element_76`
[Education Edition] Osmium (Os)
- `minecraft:element_77`
[Education Edition] Iridium (Ir)
- `minecraft:element_78`
[Education Edition] Platinum (Pt)
- `minecraft:element_79`
[Education Edition] Gold (Au)
- `minecraft:element_8`
[Education Edition] Oxygen (O)
- `minecraft:element_80`
[Education Edition] Mercury (Hg)
- `minecraft:element_81`
[Education Edition]Thallium (Ti)
- `minecraft:element_82`
[Education Edition] Lead (Pb)
- `minecraft:element_83`
[Education Edition] Bismuth (Bi)
- `minecraft:element_84`
[Education Edition] Polonium (Po)
- `minecraft:element_85`
[Education Edition] Astatine (At)
- `minecraft:element_86`
[Education Edition] Radon (Rn)
- `minecraft:element_87`
[Education Edition] Francium (Fr)
- `minecraft:element_88`
[Education Edition] Radium (Ra)
- `minecraft:element_89`
[Education Edition] Actinium (Ac)
- `minecraft:element_9`
[Education Edition] Fluorine (F)
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
- `minecraft:element_96`
[Education Edition] Curium (Cm)
- `minecraft:element_97`
[Education Edition] Berkelium (Bk)
- `minecraft:element_98`
[Education Edition] Californium (Cf)
- `minecraft:element_99`
[Education Edition] Einsteinium (Es)
- `minecraft:elytra`
Elytra
- `minecraft:emerald`
Emerald
- `minecraft:emerald_block`
Emerald Block
- `minecraft:emerald_ore`
Emerald Ore
- `minecraft:empty_map`
Empty Map
- `minecraft:enchanted_book`
Enchanted Book
- `minecraft:enchanted_golden_apple`
Enchanted Golden Apple
- `minecraft:enchanting_table`
Enchanting Table
- `minecraft:end_brick_stairs`
End Brick Stairs
- `minecraft:end_bricks`
End Bricks
- `minecraft:end_crystal`
End Crystal
- `minecraft:end_gateway`
End Gateway
- `minecraft:end_portal`
End Portal
- `minecraft:end_portal_frame`
[Education Edition] End Portal Frame
- `minecraft:end_rod`
End Rod
- `minecraft:end_stone`
End Stone
- `minecraft:ender_chest`
Ender Chest
- `minecraft:ender_dragon_spawn_egg`
- `minecraft:ender_eye`
Eye of Ender
- `minecraft:ender_pearl`
Ender Pearl
- `minecraft:enderman_spawn_egg`
Enderman Spawn Egg
- `minecraft:endermite_spawn_egg`
Endermite Spawn Egg
- `minecraft:evoker_spawn_egg`
Evoker Spawn Egg
- `minecraft:experience_bottle`
Experience Bottle
- `minecraft:exposed_copper`
Exposed Copper
- `minecraft:exposed_cut_copper`
Exposed Cut Copper
- `minecraft:exposed_cut_copper_slab`
Exposed Cut Copper Slab
- `minecraft:exposed_cut_copper_stairs`
Exposed Cut Copper Stairs
- `minecraft:exposed_double_cut_copper_slab`
Exposed Double Cut Copper Slab
- `minecraft:farmland`
[Education Edition] Farmland
- `minecraft:feather`
Feather
- `minecraft:fence`
Fence
- `minecraft:fence_gate`
Fence Gate
- `minecraft:fermented_spider_eye`
Fermented Spider Eye
- `minecraft:field_masoned_banner_pattern`
Field Masoned Banner Pattern
- `minecraft:filled_map`
Filled Map
- `minecraft:fire`
Fire
- `minecraft:fire_charge`
Fire Charge
- `minecraft:firework_rocket`
Firework Rocket
- `minecraft:firework_star`
Firework Star
- `minecraft:fishing_rod`
Fishing Rod
- `minecraft:fletching_table`
Fletching Table
- `minecraft:flint`
Flint
- `minecraft:flint_and_steel`
Flint and Steel
- `minecraft:flower_banner_pattern`
Flower Banner Pattern
- `minecraft:flower_pot`
Flower Pot
- `minecraft:flowering_azalea`
Flowering Azalea
- `minecraft:flowing_lava`
Flowing Lava
- `minecraft:flowing_water`
Flowing Water
- `minecraft:fox_spawn_egg`
Fox Spawn Egg
- `minecraft:frame`
Frame
- `minecraft:frog_spawn`
Frog Spawn
- `minecraft:frog_spawn_egg`
Frog Spawn Egg
- `minecraft:frosted_ice`
[Education Edition] Frosted Ice
- `minecraft:furnace`
Furnace
- `minecraft:ghast_spawn_egg`
Ghast Spawn Egg
- `minecraft:ghast_tear`
Ghast Tear
- `minecraft:gilded_blackstone`
Gilded Blackstone
- `minecraft:glass`
Glass
- `minecraft:glass_bottle`
Glass Bottle
- `minecraft:glass_pane`
Glass Pane
- `minecraft:glistering_melon_slice`
Glistering Melon Slice
- `minecraft:globe_banner_pattern`
Globe Banner Pattern
- `minecraft:glow_berries`
Glow Berries
- `minecraft:glow_frame`
Glow Frame
- `minecraft:glow_ink_sac`
Glow Ink Sac
- `minecraft:glow_lichen`
Glow Lichen
- `minecraft:glow_squid_spawn_egg`
Glow Squid Spawn Egg
- `minecraft:glow_stick`
Glow Stick
- `minecraft:glowingobsidian`
Glowing Obsidian
- `minecraft:glowstone`
Glowstone
- `minecraft:glowstone_dust`
Glowstone Dust
- `minecraft:goat_horn`
Goat Horn
- `minecraft:goat_spawn_egg`
Goat Spawn Egg
- `minecraft:gold_block`
Gold Block
- `minecraft:gold_ingot`
Gold Ingot
- `minecraft:gold_nugget`
Gold Nugget
- `minecraft:gold_ore`
Gold Ore
- `minecraft:golden_apple`
Golden Apple
- `minecraft:golden_axe`
Golden Axe
- `minecraft:golden_boots`
Golden Boots
- `minecraft:golden_carrot`
Golden Carrot
- `minecraft:golden_chestplate`
Golden Chestplate
- `minecraft:golden_helmet`
Golden Helmet
- `minecraft:golden_hoe`
Golden Hoe
- `minecraft:golden_horse_armor`
Golden Horse Armor
- `minecraft:golden_leggings`
Golden Leggings
- `minecraft:golden_pickaxe`
Golden Pickaxe
- `minecraft:golden_rail`
Golden Rail
- `minecraft:golden_shovel`
Golden Shovel
- `minecraft:golden_sword`
Golden Sword
- `minecraft:granite_stairs`
Granite Stairs
- `minecraft:grass`
Grass
- `minecraft:grass_path`
Grass Path
- `minecraft:gravel`
Gravel
- `minecraft:gray_candle`
Gray Candle
- `minecraft:gray_candle_cake`
Gray Candle Cake
- `minecraft:gray_dye`
Gray Dye
- `minecraft:gray_glazed_terracotta`
Gray Glazed Terracotta
- `minecraft:green_candle`
Green Candle
- `minecraft:green_candle_cake`
Green Candle Cake
- `minecraft:green_dye`
Green Dye
- `minecraft:green_glazed_terracotta`
Green Glazed Terracotta
- `minecraft:grindstone`
Grindstone
- `minecraft:guardian_spawn_egg`
Guardian Spawn Egg
- `minecraft:gunpowder`
Gunpowder
- `minecraft:hanging_roots`
Hanging Roots
- `minecraft:hard_glass`
Hard Glass
- `minecraft:hard_glass_pane`
[Education Edition] Hard Glass Pane
- `minecraft:hard_stained_glass`
Hard Stained Glass
- `minecraft:hard_stained_glass_pane`
[Education Edition] Hard Stained Glass Pane
- `minecraft:hardened_clay`
Hardened Clay
- `minecraft:hay_block`
Hay Block
- `minecraft:heart_of_the_sea`
Heart of the Sea
- `minecraft:heavy_weighted_pressure_plate`
Heavy Weighted Pressure Plate
- `minecraft:hoglin_spawn_egg`
Hoglin Spawn Egg
- `minecraft:honey_block`
Honey Block
- `minecraft:honey_bottle`
Honey Bottle
- `minecraft:honeycomb`
Honeycomb
- `minecraft:honeycomb_block`
Honeycomb Block
- `minecraft:hopper`
Hopper
- `minecraft:hopper_minecart`
Hopper Minecart
- `minecraft:horse_spawn_egg`
Horse Spawn Egg
- `minecraft:husk_spawn_egg`
Husk Spawn Egg
- `minecraft:ice`
Ice
- `minecraft:ice_bomb`
[Education Edition] Ice Bomb
- `minecraft:infested_deepslate`
Infested Deepslate
- `minecraft:info_update`
[Education Edition] Info Update
- `minecraft:info_update2`
[Education Edition] Info Update 2
- `minecraft:ink_sac`
Ink Sac
- `minecraft:invisible_bedrock`
Invisible Bedrock
- `minecraft:iron_axe`
Iron Axe
- `minecraft:iron_bars`
Iron Bars
- `minecraft:iron_block`
Iron Block
- `minecraft:iron_boots`
Iron Boots
- `minecraft:iron_chestplate`
Iron Chestplate
- `minecraft:iron_door`
Iron Door
- `minecraft:iron_golem_spawn_egg`
- `minecraft:iron_helmet`
Iron Helmet
- `minecraft:iron_hoe`
Iron Hoe
- `minecraft:iron_horse_armor`
Iron Horse Armor
- `minecraft:iron_ingot`
Iron Ingot
- `minecraft:iron_leggings`
Iron Leggings
- `minecraft:iron_nugget`
Iron Nugget
- `minecraft:iron_ore`
Iron Ore
- `minecraft:iron_pickaxe`
Iron Pickaxe
- `minecraft:iron_shovel`
Iron Shovel
- `minecraft:iron_sword`
Iron Sword
- `minecraft:iron_trapdoor`
Iron Trapdoor
- `minecraft:item.acacia_door`
Acacia Door
- `minecraft:item.bed`
Bed
- `minecraft:item.beetroot`
Beetroot
- `minecraft:item.birch_door`
Birch Door
- `minecraft:item.brewing_stand`
Brewing Stand
- `minecraft:item.cake`
Cake
- `minecraft:item.camera`
Camera
- `minecraft:item.campfire`
Campfire
- `minecraft:item.cauldron`
Cauldron
- `minecraft:item.chain`
Chain
- `minecraft:item.crimson_door`
Crimson Door
- `minecraft:item.dark_oak_door`
Item Dark Oak Door
- `minecraft:item.flower_pot`
Flower Pot
- `minecraft:item.frame`
Frame
- `minecraft:item.glow_frame`
Glow Frame
- `minecraft:item.hopper`
Hopper
- `minecraft:item.iron_door`
Item Iron Door
- `minecraft:item.jungle_door`
Jungle Door
- `minecraft:item.kelp`
Kelp
- `minecraft:item.mangrove_door`
Mangrove Door
- `minecraft:item.nether_sprouts`
Nether Sprouts
- `minecraft:item.nether_wart`
Nether Wart
- `minecraft:item.reeds`
Reeds
- `minecraft:item.skull`
Skull
- `minecraft:item.soul_campfire`
Soul Campfire
- `minecraft:item.spruce_door`
Spruce Door
- `minecraft:item.warped_door`
Warped Door
- `minecraft:item.wheat`
Wheat
- `minecraft:item.wooden_door`
Wooden Door
- `minecraft:jigsaw`
Jigsaw
- `minecraft:jukebox`
Jukebox
- `minecraft:jungle_boat`
Jungle Boat
- `minecraft:jungle_button`
Jungle Button
- `minecraft:jungle_chest_boat`
Jungle Chest Boat
- `minecraft:jungle_door`
Jungle Door
- `minecraft:jungle_fence_gate`
Jungle Fence Gate
- `minecraft:jungle_hanging_sign`
- `minecraft:jungle_pressure_plate`
Jungle Pressure Plate
- `minecraft:jungle_sign`
Jungle Sign
- `minecraft:jungle_stairs`
Jungle Stairs
- `minecraft:jungle_standing_sign`
Jungle Standing Sign
- `minecraft:jungle_trapdoor`
Jungle Trapdoor
- `minecraft:jungle_wall_sign`
Jungle Wall Sign
- `minecraft:kelp`
Kelp
- `minecraft:ladder`
Ladder
- `minecraft:lantern`
Lantern
- `minecraft:lapis_block`
Lapis Block
- `minecraft:lapis_lazuli`
Lapis Lazuli
- `minecraft:lapis_ore`
Lapis Ore
- `minecraft:large_amethyst_bud`
Large Amethyst Bud
- `minecraft:lava`
Lava
- `minecraft:lava_bucket`
Lava Bucket
- `minecraft:lava_cauldron`
Lava Cauldron
- `minecraft:lead`
Lead
- `minecraft:leather`
Leather
- `minecraft:leather_boots`
Leather Boots
- `minecraft:leather_chestplate`
Leather Chestplate
- `minecraft:leather_helmet`
Leather Helmet
- `minecraft:leather_horse_armor`
Leather Horse Armor
- `minecraft:leather_leggings`
Leather Leggings
- `minecraft:leaves`
Leaves
- `minecraft:leaves2`
Leaves 2
- `minecraft:lectern`
Lectern
- `minecraft:lever`
Lever
- `minecraft:light_block`
Light Block
- `minecraft:light_blue_candle`
Light Blue Candle
- `minecraft:light_blue_candle_cake`
Light Blue Candle Cake
- `minecraft:light_blue_dye`
Light Blue Dye
- `minecraft:light_blue_glazed_terracotta`
Light Blue Glazed Terracotta
- `minecraft:light_gray_candle`
Light Gray Candle
- `minecraft:light_gray_candle_cake`
Light Gray Candle Cake
- `minecraft:light_gray_dye`
Light Gray Dye
- `minecraft:light_weighted_pressure_plate`
Light Weighted Pressure Plate
- `minecraft:lightning_rod`
Lightning Rod
- `minecraft:lime_candle`
Lime Candle
- `minecraft:lime_candle_cake`
Lime Candle Cake
- `minecraft:lime_dye`
Lime Dye
- `minecraft:lime_glazed_terracotta`
Lime Glazed Terracotta
- `minecraft:lingering_potion`
Lingering Potion
- `minecraft:lit_blast_furnace`
Lit Blast Furnace
- `minecraft:lit_deepslate_redstone_ore`
Lit Deepslate Redstone Ore
- `minecraft:lit_furnace`
Lit Furnace
- `minecraft:lit_pumpkin`
Lit Pumpkin
- `minecraft:lit_redstone_lamp`
Lit Redstone Lamp
- `minecraft:lit_redstone_ore`
Lit Redstone Ore
- `minecraft:lit_smoker`
Lit Smoker
- `minecraft:llama_spawn_egg`
Llama Spawn Egg
- `minecraft:lodestone`
Lodestone
- `minecraft:lodestone_compass`
Lodestone Compass
- `minecraft:log`
Log
- `minecraft:log2`
Log 2
- `minecraft:loom`
Loom
- `minecraft:magenta_candle`
Magenta Candle
- `minecraft:magenta_candle_cake`
Magenta Candle Cake
- `minecraft:magenta_dye`
Magenta Dye
- `minecraft:magenta_glazed_terracotta`
Magenta Glazed Terracotta
- `minecraft:magma`
Magma
- `minecraft:magma_cream`
Magma Cream
- `minecraft:magma_cube_spawn_egg`
Magma Cube Spawn Egg
- `minecraft:mangrove_boat`
Mangrove Boat
- `minecraft:mangrove_button`
Mangrove Button
- `minecraft:mangrove_chest_boat`
Mangrove Chest Boat
- `minecraft:mangrove_door`
Mangrove Door
- `minecraft:mangrove_double_slab`
Mangrove Double Slab
- `minecraft:mangrove_fence`
Mangrove Fence
- `minecraft:mangrove_fence_gate`
Mangrove Fence Gate
- `minecraft:mangrove_hanging_sign`
- `minecraft:mangrove_leaves`
Mangrove Leaves
- `minecraft:mangrove_log`
Mangrove Log
- `minecraft:mangrove_planks`
Mangrove Planks
- `minecraft:mangrove_pressure_plate`
Mangrove Pressure Plate
- `minecraft:mangrove_propagule`
Mangrove Propagule
- `minecraft:mangrove_roots`
Mangrove Roots
- `minecraft:mangrove_sign`
Mangrove Sign
- `minecraft:mangrove_slab`
Mangrove Slab
- `minecraft:mangrove_stairs`
Mangrove Stairs
- `minecraft:mangrove_standing_sign`
Mangrove Standing Sign
- `minecraft:mangrove_trapdoor`
Mangrove Trapdoor
- `minecraft:mangrove_wall_sign`
Mangrove Wall Sign
- `minecraft:mangrove_wood`
Mangrove Wood
- `minecraft:medicine`
[Education Edition] Medicine
- `minecraft:medium_amethyst_bud`
Medium Amethyst Bud
- `minecraft:melon_block`
Melon Block
- `minecraft:melon_seeds`
Melon Seeds
- `minecraft:melon_slice`
Melon Slice
- `minecraft:melon_stem`
Melon Stem
- `minecraft:milk_bucket`
Milk Bucket
- `minecraft:minecart`
Minecart
- `minecraft:mob_spawner`
Mob Spawner
- `minecraft:mojang_banner_pattern`
Mojang Banner Pattern
- `minecraft:monster_egg`
Monster Egg
- `minecraft:mooshroom_spawn_egg`
Mooshroom Spawn Egg
- `minecraft:moss_block`
Moss Block
- `minecraft:moss_carpet`
Moss Carpet
- `minecraft:mossy_cobblestone`
Mossy Cobblestone
- `minecraft:mossy_cobblestone_stairs`
Mossy Cobblestone Stairs
- `minecraft:mossy_stone_brick_stairs`
Mossy Stone Brick Stairs
- `minecraft:moving_block`
Moving Block
- `minecraft:mud`
Mud
- `minecraft:mud_brick_double_slab`
Mud Brick Double Slab
- `minecraft:mud_brick_slab`
Mud Brick Slab
- `minecraft:mud_brick_stairs`
Mud Brick Stairs
- `minecraft:mud_brick_wall`
Mud Brick Wall
- `minecraft:mud_bricks`
Mud Bricks
- `minecraft:muddy_mangrove_roots`
Muddy Mangrove Roots
- `minecraft:mule_spawn_egg`
Mule Spawn Egg
- `minecraft:mushroom_stew`
Mushroom Stew
- `minecraft:music_disc_11`
Music Disc 11
- `minecraft:music_disc_13`
Music Disc 13
- `minecraft:music_disc_5`
Music Disc 5
- `minecraft:music_disc_blocks`
Music Disc Blocks
- `minecraft:music_disc_cat`
Music Disc Cat
- `minecraft:music_disc_chirp`
Music Disc Chirp
- `minecraft:music_disc_far`
Music Disc Far
- `minecraft:music_disc_mall`
Music Disc Mall
- `minecraft:music_disc_mellohi`
Music Disc Mellohi
- `minecraft:music_disc_otherside`
Music Disc Otherside
- `minecraft:music_disc_pigstep`
Music Disc Pigstep
- `minecraft:music_disc_stal`
Music Disc Stal
- `minecraft:music_disc_strad`
Music Disc Strad
- `minecraft:music_disc_wait`
Music Disc Wait
- `minecraft:music_disc_ward`
Music Disc Ward
- `minecraft:mutton`
Mutton
- `minecraft:mycelium`
Mycelium
- `minecraft:name_tag`
Name Tag
- `minecraft:nautilus_shell`
Nautilus Shell
- `minecraft:nether_brick`
Nether Brick
- `minecraft:nether_brick_fence`
Nether Brick Fence
- `minecraft:nether_brick_stairs`
Nether Brick Stairs
- `minecraft:nether_gold_ore`
Nether Gold Ore
- `minecraft:nether_sprouts`
Nether Sprouts
- `minecraft:nether_star`
Nether Star
- `minecraft:nether_wart`
Nether Wart
- `minecraft:nether_wart_block`
Nether Wart Block
- `minecraft:netherbrick`
Netherbrick
- `minecraft:netherite_axe`
Netherite Axe
- `minecraft:netherite_block`
Netherite Block
- `minecraft:netherite_boots`
Netherite Boots
- `minecraft:netherite_chestplate`
Netherite Chestplate
- `minecraft:netherite_helmet`
Netherite Helmet
- `minecraft:netherite_hoe`
Netherite Hoe
- `minecraft:netherite_ingot`
Netherite Ingot
- `minecraft:netherite_leggings`
Netherite Leggings
- `minecraft:netherite_pickaxe`
Netherite Pickaxe
- `minecraft:netherite_scrap`
Netherite Scrap
- `minecraft:netherite_shovel`
Netherite Shovel
- `minecraft:netherite_sword`
Netherite Sword
- `minecraft:netherrack`
Netherrack
- `minecraft:netherreactor`
[Education Edition] Nether Reactor
- `minecraft:normal_stone_stairs`
Normal Stone Stairs
- `minecraft:noteblock`
Noteblock
- `minecraft:npc_spawn_egg`
NPC Spawn Egg
- `minecraft:oak_boat`
Oak Boat
- `minecraft:oak_chest_boat`
Oak Chest Boat
- `minecraft:oak_hanging_sign`
- `minecraft:oak_sign`
Oak Sign
- `minecraft:oak_stairs`
Oak Stairs
- `minecraft:observer`
Observer
- `minecraft:obsidian`
Obsidian
- `minecraft:ocelot_spawn_egg`
Ocelot Spawn Egg
- `minecraft:ochre_froglight`
Ochre Froglight
- `minecraft:orange_candle`
Orange Candle
- `minecraft:orange_candle_cake`
Orange Candle Cake
- `minecraft:orange_dye`
Orange Dye
- `minecraft:orange_glazed_terracotta`
Orange Glazed Terracotta
- `minecraft:oxidized_copper`
Oxidized Copper
- `minecraft:oxidized_cut_copper`
Oxidized Cut Copper
- `minecraft:oxidized_cut_copper_slab`
Oxidized Cut Copper Slab
- `minecraft:oxidized_cut_copper_stairs`
Oxidized Cut Copper Stairs
- `minecraft:oxidized_double_cut_copper_slab`
Oxidized Double Cut Copper Slab
- `minecraft:packed_ice`
Packed Ice
- `minecraft:packed_mud`
Packed Mud
- `minecraft:painting`
Painting
- `minecraft:panda_spawn_egg`
Panda Spawn Egg
- `minecraft:paper`
Paper
- `minecraft:parrot_spawn_egg`
Parrot Spawn Egg
- `minecraft:pearlescent_froglight`
Pearlescent Froglight
- `minecraft:phantom_membrane`
Phantom Membrane
- `minecraft:phantom_spawn_egg`
Phantom Spawn Egg
- `minecraft:pig_spawn_egg`
Pig Spawn Egg
- `minecraft:piglin_banner_pattern`
Piglin Banner Pattern
- `minecraft:piglin_brute_spawn_egg`
Piglin Brute Spawn Egg
- `minecraft:piglin_spawn_egg`
Piglin Spawn Egg
- `minecraft:pillager_spawn_egg`
Pillager Spawn Egg
- `minecraft:pink_candle`
Pink Candle
- `minecraft:pink_candle_cake`
Pink Candle Cake
- `minecraft:pink_dye`
Pink Dye
- `minecraft:pink_glazed_terracotta`
Pink Glazed Terracotta
- `minecraft:piston`
Piston
- `minecraft:piston_arm_collision`
Piston Arm Collision
- `minecraft:planks`
Planks
- `minecraft:podzol`
Podzol
- `minecraft:pointed_dripstone`
Pointed Dripstone
- `minecraft:poisonous_potato`
Poisonous Potato
- `minecraft:polar_bear_spawn_egg`
Polar Bear Spawn Egg
- `minecraft:polished_andesite_stairs`
Polished Andesite Stairs
- `minecraft:polished_basalt`
Polished Basalt
- `minecraft:polished_blackstone`
Polished Blackstone
- `minecraft:polished_blackstone_brick_double_slab`
Polished Blackstone Brick Double Slab
- `minecraft:polished_blackstone_brick_slab`
Polished Blackstone Brick Slab
- `minecraft:polished_blackstone_brick_stairs`
Polished Blackstone Brick Stairs
- `minecraft:polished_blackstone_brick_wall`
Polished Blackstone Brick Wall
- `minecraft:polished_blackstone_bricks`
Polished Blackstone Stairs
- `minecraft:polished_blackstone_button`
Polished Blackstone Button
- `minecraft:polished_blackstone_double_slab`
Polished Blackstone Double Slab
- `minecraft:polished_blackstone_pressure_plate`
Polished Blackstone Pressure Plate
- `minecraft:polished_blackstone_slab`
Polished Blackstone Slab
- `minecraft:polished_blackstone_stairs`
Polished Blackstone Stairs
- `minecraft:polished_blackstone_wall`
Polished Blackstone Wall
- `minecraft:polished_deepslate`
Polished Deepslate
- `minecraft:polished_deepslate_double_slab`
Polished Deepslate Double Slab
- `minecraft:polished_deepslate_slab`
Polished Deepslate Slab
- `minecraft:polished_deepslate_stairs`
Polished Deepslate Stairs
- `minecraft:polished_deepslate_wall`
Polished Deepslate Wall
- `minecraft:polished_diorite_stairs`
Polished Diorite Stairs
- `minecraft:polished_granite_stairs`
Polished Granite Stairs
- `minecraft:popped_chorus_fruit`
Popped Chorus Fruit
- `minecraft:porkchop`
Porkchop
- `minecraft:portal`
Portal
- `minecraft:potato`
Potato
- `minecraft:potatoes`
Potatoes
- `minecraft:potion`
Potion
- `minecraft:powder_snow`
Powder Snow
- `minecraft:powder_snow_bucket`
Powder Snow Bucket
- `minecraft:powered_comparator`
Powered Comparator
- `minecraft:powered_repeater`
Powered Repeater
- `minecraft:prismarine`
Prismarine
- `minecraft:prismarine_bricks_stairs`
Prismarine Bricks Stairs
- `minecraft:prismarine_crystals`
Prismarine Crystals
- `minecraft:prismarine_shard`
Prismarine Shard
- `minecraft:prismarine_stairs`
Prismarine Stairs
- `minecraft:pufferfish`
Pufferfish
- `minecraft:pufferfish_bucket`
Pufferfish Bucket
- `minecraft:pufferfish_spawn_egg`
Pufferfish Spawn Egg
- `minecraft:pumpkin`
Pumpkin
- `minecraft:pumpkin_pie`
Pumpkin Pie
- `minecraft:pumpkin_seeds`
Pumpkin Seeds
- `minecraft:pumpkin_stem`
Pumpkin Stem
- `minecraft:purple_candle`
Purple Candle
- `minecraft:purple_candle_cake`
Purple Candle Cake
- `minecraft:purple_dye`
Purple Dye
- `minecraft:purple_glazed_terracotta`
Purple Glazed Terracotta
- `minecraft:purpur_block`
Purpur Block
- `minecraft:purpur_stairs`
Purpur Stairs
- `minecraft:quartz`
Quartz
- `minecraft:quartz_block`
Quartz Block
- `minecraft:quartz_bricks`
Quartz Bricks
- `minecraft:quartz_ore`
Quartz Ore
- `minecraft:quartz_stairs`
Quartz Stairs
- `minecraft:rabbit`
Rabbit
- `minecraft:rabbit_foot`
Rabbit Foot
- `minecraft:rabbit_hide`
Rabbit Hide
- `minecraft:rabbit_spawn_egg`
Rabbit Spawn Egg
- `minecraft:rabbit_stew`
Rabbit Stew
- `minecraft:rail`
Rail
- `minecraft:rapid_fertilizer`
Rapid Fertilizer
- `minecraft:ravager_spawn_egg`
Ravager Spawn Egg
- `minecraft:raw_copper`
Raw Copper
- `minecraft:raw_copper_block`
Raw Copper Block
- `minecraft:raw_gold`
Raw Gold
- `minecraft:raw_gold_block`
Raw Gold Block
- `minecraft:raw_iron`
Raw Iron
- `minecraft:raw_iron_block`
Raw Iron Block
- `minecraft:recovery_compass`
Recovery Compass
- `minecraft:red_candle`
Red Candle
- `minecraft:red_candle_cake`
Red Candle Cake
- `minecraft:red_dye`
Red Dye
- `minecraft:red_flower`
Red Flower
- `minecraft:red_glazed_terracotta`
Red Glazed Terracotta
- `minecraft:red_mushroom`
Red Mushroom
- `minecraft:red_mushroom_block`
Red Mushroom Block
- `minecraft:red_nether_brick`
Red Nether Brick
- `minecraft:red_nether_brick_stairs`
Red Nether Brick Stairs
- `minecraft:red_sandstone`
Red Sandstone
- `minecraft:red_sandstone_stairs`
Red Sandstone Stairs
- `minecraft:redstone`
Redstone
- `minecraft:redstone_block`
Redstone Block
- `minecraft:redstone_lamp`
Redstone Lamp
- `minecraft:redstone_ore`
Redstone Ore
- `minecraft:redstone_torch`
Redstone Torch
- `minecraft:redstone_wire`
Redstone Wire
- `minecraft:reinforced_deepslate`
Reinforced Deepslate
- `minecraft:repeater`
Repeater
- `minecraft:repeating_command_block`
Repeating Command Block
- `minecraft:reserved6`
Reserved 6
- `minecraft:respawn_anchor`
Respawn Anchor
- `minecraft:rotten_flesh`
Rotten Flesh
- `minecraft:saddle`
Saddle
- `minecraft:salmon`
Salmon
- `minecraft:salmon_bucket`
Salmon Bucket
- `minecraft:salmon_spawn_egg`
Salmon Spawn Egg
- `minecraft:sand`
Sand
- `minecraft:sandstone`
Sandstone
- `minecraft:sandstone_stairs`
Sandstone Stairs
- `minecraft:sapling`
Sapling
- `minecraft:scaffolding`
Scaffolding
- `minecraft:sculk`
Sculk
- `minecraft:sculk_catalyst`
Sculk Catalyst
- `minecraft:sculk_sensor`
Sculk Sensor
- `minecraft:sculk_shrieker`
Sculk Shrieker
- `minecraft:sculk_vein`
Sculk Vein
- `minecraft:scute`
Scute
- `minecraft:sea_lantern`
Sea Lantern
- `minecraft:sea_pickle`
Sea Pickle
- `minecraft:seagrass`
Seagrass
- `minecraft:shears`
Shears
- `minecraft:sheep_spawn_egg`
Sheep Spawn Egg
- `minecraft:shield`
Shield
- `minecraft:shroomlight`
Shroomlight
- `minecraft:shulker_box`
Shulker Box
- `minecraft:shulker_shell`
Shulker Shell
- `minecraft:shulker_spawn_egg`
Shulker Spawn Egg
- `minecraft:silver_glazed_terracotta`
Silver Glazed Terracotta
- `minecraft:silverfish_spawn_egg`
Silverfish Spawn Egg
- `minecraft:skeleton_horse_spawn_egg`
Skeleton Horse Spawn Egg
- `minecraft:skeleton_spawn_egg`
Skeleton Spawn Egg
- `minecraft:skull`
Skull
- `minecraft:skull_banner_pattern`
Skull Banner Pattern
- `minecraft:slime`
Slime
- `minecraft:slime_ball`
Slime Ball
- `minecraft:slime_spawn_egg`
Slime Spawn Egg
- `minecraft:small_amethyst_bud`
Small Amethyst Bud
- `minecraft:small_dripleaf_block`
Small Dripleaf block
- `minecraft:smithing_table`
Smithing Table
- `minecraft:smoker`
Smoker
- `minecraft:smooth_basalt`
Smooth Basalt
- `minecraft:smooth_quartz_stairs`
Smooth Quarts Stairs
- `minecraft:smooth_red_sandstone_stairs`
Smooth Red Sandstone Stairs
- `minecraft:smooth_sandstone_stairs`
Smooth Sandstone Stairs
- `minecraft:smooth_stone`
Smooth Stone
- `minecraft:snow`
Snow
- `minecraft:snow_golem_spawn_egg`
- `minecraft:snow_layer`
Snow Layer
- `minecraft:snowball`
Snowball
- `minecraft:soul_campfire`
Soul Campfire
- `minecraft:soul_fire`
Soul Fire
- `minecraft:soul_lantern`
Soul Lantern
- `minecraft:soul_sand`
Soul Sand
- `minecraft:soul_soil`
Soul Soil
- `minecraft:soul_torch`
Soul Torch
- `minecraft:sparkler`
Sparkler
- `minecraft:spawn_egg`
Spawn Egg
- `minecraft:spider_eye`
Spider Eye
- `minecraft:spider_spawn_egg`
Spider Spawn Egg
- `minecraft:splash_potion`
Splash Potion
- `minecraft:sponge`
Sponge
- `minecraft:spore_blossom`
Spore Blossom
- `minecraft:spruce_boat`
Spruce Boat
- `minecraft:spruce_button`
Spruce Button
- `minecraft:spruce_chest_boat`
Spruce Chest Boat
- `minecraft:spruce_door`
Spruce Door
- `minecraft:spruce_fence_gate`
Spruce Fence Gate
- `minecraft:spruce_hanging_sign`
- `minecraft:spruce_pressure_plate`
Spruce Pressure Plate
- `minecraft:spruce_sign`
Spruce Sign
- `minecraft:spruce_stairs`
Spruce Stairs
- `minecraft:spruce_standing_sign`
Spruce Standing Sign
- `minecraft:spruce_trapdoor`
Spruce Trapdoor
- `minecraft:spruce_wall_sign`
Spruce Wall Sign
- `minecraft:spyglass`
Spyglass
- `minecraft:squid_spawn_egg`
Squid Spawn Egg
- `minecraft:stained_glass`
Stained Glass
- `minecraft:stained_glass_pane`
Stained Glass Pane
- `minecraft:stained_hardened_clay`
Stained Hardened Clay
- `minecraft:standing_banner`
Standing Banner
- `minecraft:standing_sign`
Standing Sign
- `minecraft:stick`
Stick
- `minecraft:sticky_piston`
Sticky Piston
- `minecraft:sticky_piston_arm_collision`
Sticky Piston Arm Collision
- `minecraft:stone`
Stone
- `minecraft:stone_axe`
Stone Axe
- `minecraft:stone_block_slab`
Stone Block Slab
- `minecraft:stone_block_slab2`
Stone Block Slab 2
- `minecraft:stone_block_slab3`
Stone Block Slab 3
- `minecraft:stone_block_slab4`
Stone Block Slab 4
- `minecraft:stone_brick_stairs`
Stone Brick Stairs
- `minecraft:stone_button`
Stone Button
- `minecraft:stone_hoe`
Stone Hoe
- `minecraft:stone_pickaxe`
Stone Pickaxe
- `minecraft:stone_pressure_plate`
Stone Pressure Plate
- `minecraft:stone_shovel`
Stone Shovel
- `minecraft:stone_stairs`
Stone Stairs
- `minecraft:stone_sword`
Stone Sword
- `minecraft:stonebrick`
Stonebrick
- `minecraft:stonecutter`
Stonecutter
- `minecraft:stonecutter_block`
Stonecutter Block
- `minecraft:stray_spawn_egg`
Stray Spawn Egg
- `minecraft:strider_spawn_egg`
Strider Spawn Egg
- `minecraft:string`
String
- `minecraft:stripped_acacia_log`
Stripped Acacia Log
- `minecraft:stripped_bamboo_block`
- `minecraft:stripped_birch_log`
Stripped Birch Log
- `minecraft:stripped_crimson_hyphae`
Stripped Crimson Hyphae
- `minecraft:stripped_crimson_stem`
Stripped Crimson Stem
- `minecraft:stripped_dark_oak_log`
Stripped Dark Oak Log
- `minecraft:stripped_jungle_log`
Stripped Jungle Log
- `minecraft:stripped_mangrove_log`
Stripped Mangrove Log
- `minecraft:stripped_mangrove_wood`
Stripped Mangrove Wood
- `minecraft:stripped_oak_log`
Stripped Oak Log
- `minecraft:stripped_spruce_log`
Stripped Spruce Log
- `minecraft:stripped_warped_hyphae`
Stripped Warped Hyphae
- `minecraft:stripped_warped_stem`
Stripped Warped Stem
- `minecraft:structure_block`
Structure Block
- `minecraft:structure_void`
Structure Void
- `minecraft:sugar`
Sugar
- `minecraft:sugar_cane`
Sugar Cane
- `minecraft:suspicious_stew`
Suspicious Stew
- `minecraft:sweet_berries`
Sweet Berries
- `minecraft:sweet_berry_bush`
Sweet Berry Bush
- `minecraft:tadpole_bucket`
Tadpole Bucket
- `minecraft:tadpole_spawn_egg`
Tadpole Spawn Egg
- `minecraft:tallgrass`
Tallgrass
- `minecraft:target`
Target
- `minecraft:tinted_glass`
Tinted Glass
- `minecraft:tnt`
TNT
- `minecraft:tnt_minecart`
TNT Minecart
- `minecraft:torch`
Torch
- `minecraft:totem_of_undying`
Totem of Undying
- `minecraft:trader_llama_spawn_egg`
Trader Llama Spawn Egg
- `minecraft:trapdoor`
Trapdoor
- `minecraft:trapped_chest`
Trapped Chest
- `minecraft:trident`
Trident
- `minecraft:trip_wire`
Trip Wire
- `minecraft:tripwire_hook`
Tripwire Hook
- `minecraft:tropical_fish`
Tropical Fish
- `minecraft:tropical_fish_bucket`
Tropical Fish Bucket
- `minecraft:tropical_fish_spawn_egg`
Tropical Fish Spawn Egg
- `minecraft:tuff`
Tuff
- `minecraft:turtle_egg`
Turtle Egg
- `minecraft:turtle_helmet`
Turtle Helmet
- `minecraft:turtle_spawn_egg`
Turtle Spawn Egg
- `minecraft:twisting_vines`
Twisting Vines
- `minecraft:underwater_torch`
Underwater Torch
- `minecraft:undyed_shulker_box`
Undyed Shulker Box
- `minecraft:unknown`
[Education Edition] Unknown
- `minecraft:unlit_redstone_torch`
Unlit Redstone Torch
- `minecraft:unpowered_comparator`
Unpowered Comparator
- `minecraft:unpowered_repeater`
Unpowered Repeater
- `minecraft:verdant_froglight`
Verdant Froglight
- `minecraft:vex_spawn_egg`
Vex Spawn Egg
- `minecraft:villager_spawn_egg`
Villager Spawn Egg
- `minecraft:vindicator_spawn_egg`
Vindicator Spawn Egg
- `minecraft:vine`
Vine
- `minecraft:wall_banner`
Wall Banner
- `minecraft:wall_sign`
Wall Sign
- `minecraft:wandering_trader_spawn_egg`
Wandering Trader Spawn Egg
- `minecraft:warden_spawn_egg`
Warden Spawn Egg
- `minecraft:warped_button`
Warped Button
- `minecraft:warped_door`
Warped Door
- `minecraft:warped_double_slab`
Warped Double Slab
- `minecraft:warped_fence`
Warped Fence
- `minecraft:warped_fence_gate`
Warped Fence Gate
- `minecraft:warped_fungus`
Warped Fungus
- `minecraft:warped_fungus_on_a_stick`
Warped Fungus on a Stick
- `minecraft:warped_hanging_sign`
- `minecraft:warped_hyphae`
Warped Hyphae
- `minecraft:warped_nylium`
Warped Nylium
- `minecraft:warped_planks`
Warped Planks
- `minecraft:warped_pressure_plate`
Warped Pressure Plate
- `minecraft:warped_roots`
Warped Roots
- `minecraft:warped_sign`
Warped Sign
- `minecraft:warped_slab`
Warped Slab
- `minecraft:warped_stairs`
Warped Stairs
- `minecraft:warped_standing_sign`
Warped Standing Sign
- `minecraft:warped_stem`
Warped Stem
- `minecraft:warped_trapdoor`
Warped Trapdoor
- `minecraft:warped_wall_sign`
Warped Wall Sign
- `minecraft:warped_wart_block`
Warped Wart Block
- `minecraft:water`
Water
- `minecraft:water_bucket`
Water Bucket
- `minecraft:waterlily`
Waterlily
- `minecraft:waxed_copper`
Waxed Copper
- `minecraft:waxed_cut_copper`
Waxed Cut Copper
- `minecraft:waxed_cut_copper_slab`
Waxed Cut Copper Slab
- `minecraft:waxed_cut_copper_stairs`
Waxed Cut Copper Stairs
- `minecraft:waxed_double_cut_copper_slab`
Waxed Double Cut Copper Slab
- `minecraft:waxed_exposed_copper`
Waxed Exposed Copper
- `minecraft:waxed_exposed_cut_copper`
Waxed Exposed Cut Copper
- `minecraft:waxed_exposed_cut_copper_slab`
Waxed Exposed Cut Copper Slab
- `minecraft:waxed_exposed_cut_copper_stairs`
Waxed Exposed Cut Copper Stairs
- `minecraft:waxed_exposed_double_cut_copper_slab`
Waxed Exposed Double Cut Copper Slab
- `minecraft:waxed_oxidized_copper`
Waxed Oxidized Copper
- `minecraft:waxed_oxidized_cut_copper`
Waxed Oxidized Cut Copper
- `minecraft:waxed_oxidized_cut_copper_slab`
Waxed Oxidized Cut Copper Slab
- `minecraft:waxed_oxidized_cut_copper_stairs`
Waxed Oxidized Cut Copper Stairs
- `minecraft:waxed_oxidized_double_cut_copper_slab`
Waxed Oxidized Double Cut Copper Slab
- `minecraft:waxed_weathered_copper`
Waxed Weathered Copper
- `minecraft:waxed_weathered_cut_copper`
Waxed Weathered Cut Copper
- `minecraft:waxed_weathered_cut_copper_slab`
Waxed Weathered Cut Copper Slab
- `minecraft:waxed_weathered_cut_copper_stairs`
Waxed Weathered Cut Copper Stairs
- `minecraft:waxed_weathered_double_cut_copper_slab`
Waxed Weathered Double Cut Copper Slab
- `minecraft:weathered_copper`
Weathered Copper
- `minecraft:weathered_cut_copper`
Weathered Cut Copper
- `minecraft:weathered_cut_copper_slab`
Weathered Cut Copper Slab
- `minecraft:weathered_cut_copper_stairs`
Weathered Cut Copper Stairs
- `minecraft:weathered_double_cut_copper_slab`
Weathered Double Cut Copper Slab
- `minecraft:web`
Web
- `minecraft:weeping_vines`
Weeping Vines
- `minecraft:wheat`
Wheat
- `minecraft:wheat_seeds`
Wheat Seeds
- `minecraft:white_candle`
White Candle
- `minecraft:white_candle_cake`
White Candle Cake
- `minecraft:white_dye`
White Dye
- `minecraft:white_glazed_terracotta`
White Glazed Terracotta
- `minecraft:witch_spawn_egg`
Witch Spawn Egg
- `minecraft:wither_rose`
Wither Rose
- `minecraft:wither_skeleton_spawn_egg`
Wither Skeleton Spawn Egg
- `minecraft:wither_spawn_egg`
- `minecraft:wolf_spawn_egg`
Wolf Spawn Egg
- `minecraft:wood`
Wood
- `minecraft:wooden_axe`
Wooden Axe
- `minecraft:wooden_button`
Wooden Button
- `minecraft:wooden_door`
Wooden Door
- `minecraft:wooden_hoe`
Wooden Hoe
- `minecraft:wooden_pickaxe`
Wooden Pickaxe
- `minecraft:wooden_pressure_plate`
Wooden Pressure Plate
- `minecraft:wooden_shovel`
Wooden Shovel
- `minecraft:wooden_slab`
Wooden Slab
- `minecraft:wooden_sword`
Wooden Sword
- `minecraft:wool`
Wool
- `minecraft:writable_book`
Writable Book
- `minecraft:written_book`
Written Book
- `minecraft:yellow_candle`
Yellow Candle
- `minecraft:yellow_candle_cake`
Yellow Candle Cake
- `minecraft:yellow_dye`
Yellow Dye
- `minecraft:yellow_flower`
Yellow Flower
- `minecraft:yellow_glazed_terracotta`
Yellow Glazed Terracotta
- `minecraft:zoglin_spawn_egg`
Zoglin Spawn Egg
- `minecraft:zombie_horse_spawn_egg`
Zombie Horse Spawn Egg
- `minecraft:zombie_pigman_spawn_egg`
Zombie Pigman Spawn Egg
- `minecraft:zombie_spawn_egg`
Zombie Spawn Egg
- `minecraft:zombie_villager_spawn_egg`
Zombie Villager Spawn Egg
- `offhand`
Offhand
