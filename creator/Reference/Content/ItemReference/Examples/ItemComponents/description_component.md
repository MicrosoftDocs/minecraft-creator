---
author: JimSeaman42
ms.author: mikeam
title: Item Documentation - description
description: "A reference document detailing the 'description' item component"
ms.service: minecraft-bedrock-edition
---

# Item Documentation - description

`description` is a list of characters representing an item. The description MUST contain an identifier; other fields are optional.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* |String | The identifier for this item; must include a namespace. The 'Minecraft' namespace must not be used, unless overriding a Vanilla item.|
|menu_category |*not set*  | JSON object| The creative group name and category for this item.|

## menu_category

 The `menu_category` parameter details the creative group name and category for an item, and has three parameters of its own:

## menu_category Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category |items |String |The creative category that this item belongs to. Options include "construction", "nature", "equipment", "items", and "none"|
|group |-- |ItemGroup |The creative group that this item belongs to. Group name is limited to 256 characters. |
|is_hidden_in_commands |-- |Boolean |Determines whether or not this item can be used with commands. Commands can use items by default. |

### ItemGroup Value Types
- itemGroup.name.anvil
- itemGroup.name.arrow
- itemGroup.name.axe
- itemGroup.name.banner
- itemGroup.name.banner_pattern
- itemGroup.name.beacon
- itemGroup.name.bed
- itemGroup.name.bell
- itemGroup.name.boat
- itemGroup.name.boots
- itemGroup.name.brick
- itemGroup.name.buttons
- itemGroup.name.cactus
- itemGroup.name.camera
- itemGroup.name.candles
- itemGroup.name.chemistrytable
- itemGroup.name.chest
- itemGroup.name.chestboat
- itemGroup.name.chestplate
- itemGroup.name.chiseledBookshelf
- itemGroup.name.clay
- itemGroup.name.climbing
- itemGroup.name.cobblestone
- itemGroup.name.composter
- itemGroup.name.compounds
- itemGroup.name.concrete
- itemGroup.name.concretePowder
- itemGroup.name.constructionMisc
- itemGroup.name.cookedFood
- itemGroup.name.copper
- itemGroup.name.coral
- itemGroup.name.coral_decorations
- itemGroup.name.craftingTables
- itemGroup.name.crop
- itemGroup.name.door
- itemGroup.name.dirt
- itemGroup.name.dye
- itemGroup.name.eggBlocks
- itemGroup.name.element
- itemGroup.name.enchantedBook
- itemGroup.name.enchantingTable
- itemGroup.name.endPortalFrame
- itemGroup.name.endRod
- itemGroup.name.fence
- itemGroup.name.fenceGate
- itemGroup.name.fireworkStars
- itemGroup.name.firework
- itemGroup.name.flower
- itemGroup.name.furnaces
- itemGroup.name.goatHorn
- itemGroup.name.glassPane
- itemGroup.name.glass
- itemGroup.name.glazedTerracotta
- itemGroup.name.glowstone
- itemGroup.name.grass
- itemGroup.name.gravel
- itemGroup.name.greenery
- itemGroup.name.grindStone
- itemGroup.name.hanging_sign
- itemGroup.name.helmet
- itemGroup.name.hoe
- itemGroup.name.horseArmor
- itemGroup.name.ice
- itemGroup.name.ironFence
- itemGroup.name.leaves
- itemGroup.name.lectern
- itemGroup.name.leggings
- itemGroup.name.lights
- itemGroup.name.lingeringPotion
- itemGroup.name.log
- itemGroup.name.minecart
- itemGroup.name.miscFood
- itemGroup.name.mobEgg
- itemGroup.name.monsterStoneEgg
- itemGroup.name.mushroom
- itemGroup.name.musicBlocks
- itemGroup.name.natureBuildingBlocks
- itemGroup.name.natureMisc
- itemGroup.name.ore
- itemGroup.name.oreBlocks
- itemGroup.name.permission
- itemGroup.name.pickaxe
- itemGroup.name.pistons
- itemGroup.name.potion
- itemGroup.name.potterySherds
- itemGroup.name.planks
- itemGroup.name.pressurePlate
- itemGroup.name.products
- itemGroup.name.pumpkins
- itemGroup.name.purpur
- itemGroup.name.rail
- itemGroup.name.rawFood
- itemGroup.name.record
- itemGroup.name.redstone
- itemGroup.name.redstoneContainers
- itemGroup.name.redstoneProducers
- itemGroup.name.sand
- itemGroup.name.sandstone
- itemGroup.name.sapling
- itemGroup.name.sculk
- itemGroup.name.seed
- itemGroup.name.shovel
- itemGroup.name.shulkerBox
- itemGroup.name.sign
- itemGroup.name.skull
- itemGroup.name.slab
- itemGroup.name.smithing_templates
- itemGroup.name.splashPotion
- itemGroup.name.stairs
- itemGroup.name.stainedClay
- itemGroup.name.stone
- itemGroup.name.stoneBrick
- itemGroup.name.sword
- itemGroup.name.tnt
- itemGroup.name.torch
- itemGroup.name.trapdoor
- itemGroup.name.walls
- itemGroup.name.wood
- itemGroup.name.wool
- itemGroup.name.woolCarpet

### Example

```json
{  
  "format_version": "1.20.20",  
  "minecraft:item": {  
    "description": {  
      "identifier": "minecraft:blaze_rod",  
      "menu_category": {  
        "group": "itemGroup.name.blaze",  
        "category": "equipment", 
        "is_hidden_in_commands": true 
      }  
    },  
    "components": {  
      "minecraft:fuel": {  
        "duration": 120.0  
      },  
      "minecraft:max_stack_size": 64,  
      "minecraft:icon": {  
        "texture": "blaze_rod"  
      },  
      "minecraft:hand_equipped": true,  
      "minecraft:display_name": {  
        "value": "Blaze Rod"  
      }  
    }
  }
}
```
