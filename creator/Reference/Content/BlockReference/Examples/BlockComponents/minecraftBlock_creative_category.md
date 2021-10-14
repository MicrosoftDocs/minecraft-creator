---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:creative_category
ms.prod: gaming
---

# Block Documentation - minecraft:creative_category

`minecraft:creative_category` is a `string` component that sets the destroy time property for the block.

>[!IMPORTANT]
> `minecraft:creative_category` requires the Holiday Creator Features experimental toggle to be set to `true` in order to function properly.
>
>Holiday Creator Features contains experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)

## Default Parameter

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category |all |String |Used to define the type of category the block will be organized under.|
|group |*not set* |String |Used to define the group that the block will be considered apart of.|

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
