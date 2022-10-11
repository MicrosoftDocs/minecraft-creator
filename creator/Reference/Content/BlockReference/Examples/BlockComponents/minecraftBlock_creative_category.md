---
author: mammerla
ms.author: v-bbortree
title: Block Documentation - minecraft:creative_category
ms.prod: gaming
---

# Block Documentation - minecraft:creative_category

`minecraft:creative_category` specifies the menu category and group for the block, which determine where this block is placed in the inventory and crafting table container screens. If this component is omitted, the block will not appear in the inventory or crafting table container screens.

>[!IMPORTANT]
> `minecraft:creative_category` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md).

## Default Parameter

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category |all |String |Determines which category this block will be placed under in the inventory and crafting table container screens. Options are "construction", "nature", "equipment", "items", and "none". If omitted or "none" is specified, the block will not appear in the inventory or crafting table container screens.|
|group |*not set* |String |Specifies the language file key that maps to which expandable/collapsible group this block will be a part of within a category. If the string given can not be resolved as a loc string, then we will check if there is an existing group whose name matches the raw string. If this field is omitted, or there is no group whose name matches the loc string or the raw string, this block will be placed standalone in the given category.|

### categories

Listed below are the available creative categories that can be used by blocks:

- all **(used by default)**
- commands
- construction
- equipment
- items
- nature
- none

### groups

Listed below are the available creative groups that blocks can be assigned to:

- itemGroup.name.anvil
- itemGroup.name.arrow
- itemGroup.name.axe
- itemGroup.name.banner
- itemGroup.name.banner_pattern
- itemGroup.name.bed
- itemGroup.name.boat
- itemGroup.name.boots
- itemGroup.name.buttons
- itemGroup.name.chalkboard
- itemGroup.name.chest
- itemGroup.name.chestplate
- itemGroup.name.concrete
- itemGroup.name.concretePowder
- itemGroup.name.cookedFood
- itemGroup.name.copper
- itemGroup.name.coral
- itemGroup.name.coral_decorations
- itemGroup.name.crop
- itemGroup.name.door
- itemGroup.name.dye
- itemGroup.name.enchantedBook
- itemGroup.name.fence
- itemGroup.name.fenceGate
- itemGroup.name.firework
- itemGroup.name.fireworkStars
- itemGroup.name.flower
- itemGroup.name.glass
- itemGroup.name.glassPane
- itemGroup.name.glazedTerracotta
- itemGroup.name.grass
- itemGroup.name.helmet
- itemGroup.name.hoe
- itemGroup.name.horseArmor
- itemGroup.name.leaves
- itemGroup.name.leggings
- itemGroup.name.lingeringPotion
- itemGroup.name.log
- itemGroup.name.minecart
- itemGroup.name.miscFood
- itemGroup.name.mobEgg
- itemGroup.name.monsterStoneEgg
- itemGroup.name.mushroom
- itemGroup.name.netherWartBlock
- itemGroup.name.ore
- itemGroup.name.permission
- itemGroup.name.pickaxe
- itemGroup.name.planks
- itemGroup.name.potion
- itemGroup.name.pressurePlate
- itemGroup.name.rail
- itemGroup.name.rawFood
- itemGroup.name.record
- itemGroup.name.sandstone
- itemGroup.name.sapling
- itemGroup.name.seed
- itemGroup.name.shovel
- itemGroup.name.shulkerBox
- itemGroup.name.sign
- itemGroup.name.skull
- itemGroup.name.slab
- itemGroup.name.splashPotion
- itemGroup.name.stainedClay
- itemGroup.name.stairs
- itemGroup.name.stone
- itemGroup.name.stoneBrick
- itemGroup.name.sword
- itemGroup.name.trapdoor
- itemGroup.name.walls
- itemGroup.name.wood
- itemGroup.name.wool
- itemGroup.name.woolCarpet

## Example

```json
"minecraft:creative_category": {
    "category": "construction",
    "group": "itemGroup.name.wool"
}
```
