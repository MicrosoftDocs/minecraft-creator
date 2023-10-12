---
title: Item Documentation - Item Categorization
description: A reference document detailing how to categorize a custom item
author: burymaddie
ms.author:
ms.date: 10/2/2023
ms.topic: article
keywords:
---

# Item Categorization

The `menu_category` object located in the `description` of an item JSON file defines how the item appears in the creative inventory and recipe book, as well as whether or not the item can be accessed in commands.

## Parameters
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| category| "items" | String | Defines under which tab in the creative menu or recipe book an item is found. Must be one of the categories in the table below. Use `none` to hide the item completely.|
| group| *not set* | String| Defines where within the tab in the creative menu or recipe book this item is found.|
| is_hidden_in_commands| false | Boolean | If set to true, the item will be unable to be used in commands.

### Item Categories
The following categories can be used with the `category` parameter.
|Categories |
|:----------|
|construction|
|equipment|
|items|
|nature|
|none|

### Vanilla Item Groups
The following groups can be used with the `group` parameter. A custom group can also be specified. When a custom group is used or a group is used outside its vanilla category, items will not become part of an expandable list but will be sorted next to other items of the same group.
|Group | Vanilla Category |
|:----------|:----------|
|itemGroup.name.anvil|Items|
|itemGroup.name.arrow|Equipment|
|itemGroup.name.axe|Equipment|
|itemGroup.name.banner|Items|
|itemGroup.name.banner_pattern|Items|
|itemGroup.name.bed|Items|
|itemGroup.name.boat|Items|
|itemGroup.name.boots|Equipment|
|itemGroup.name.buttons|Items|
|itemGroup.name.candles|Items|
|itemGroup.name.chest|Items|
|itemGroup.name.chestboat|Items|
|itemGroup.name.chestplate|Equipment|
|itemGroup.name.concrete|Construction|
|itemGroup.name.concretePowder|Construction|
|itemGroup.name.cookedFood|Equipment|
|itemGroup.name.copper|Construction|
|itemGroup.name.coral|Nature|
|itemGroup.name.coral_decorations|Nature|
|itemGroup.name.crop|Nature|
|itemGroup.name.door|Construction|
|itemGroup.name.dye|Nature|
|itemGroup.name.enchantedBook|Items|
|itemGroup.name.fence|Construction|
|itemGroup.name.fenceGate|Construction|
|itemGroup.name.firework|Items|
|itemGroup.name.fireworkStars|Items|
|itemGroup.name.flower|Nature|
|itemGroup.name.glass|Construction|
|itemGroup.name.glassPane|Construction|
|itemGroup.name.glazedTerracotta|Construction|
|itemGroup.name.goatHorn|Equipment|
|itemGroup.name.grass|Nature|
|itemGroup.name.hanging_sign|Items|
|itemGroup.name.helmet|Equipment|
|itemGroup.name.hoe|Equipment|
|itemGroup.name.horseArmor|Equipment|
|itemGroup.name.leaves|Nature|
|itemGroup.name.leggings|Equipment|
|itemGroup.name.lingeringPotion|Equipment|
|itemGroup.name.log|Nature|
|itemGroup.name.minecart|Items|
|itemGroup.name.miscFood|Equipment|
|itemGroup.name.mobEgg|Nature|
|itemGroup.name.monsterStoneEgg|Nature|
|itemGroup.name.mushroom|Nature|
|itemGroup.name.ore|Nature|
|itemGroup.name.pickaxe|Equipment|
|itemGroup.name.planks|Construction|
|itemGroup.name.potion|Equipment|
|itemGroup.name.potterySherds|Items|
|itemGroup.name.pressurePlate|Items|
|itemGroup.name.rail|Items|
|itemGroup.name.rawFood|Nature|
|itemGroup.name.record|Items|
|itemGroup.name.sandstone|Construction|
|itemGroup.name.sapling|Nature|
|itemGroup.name.sculk|Nature|
|itemGroup.name.seed|Nature|
|itemGroup.name.shovel|Equipment|
|itemGroup.name.shulkerBox|Items|
|itemGroup.name.sign|Items|
|itemGroup.name.skull|Items|
|itemGroup.name.slab|Construction|
|itemGroup.name.smithing_templates|Items|
|itemGroup.name.splashPotion|Equipment|
|itemGroup.name.stainedClay|Construction|
|itemGroup.name.stairs|Construction|
|itemGroup.name.stone|Nature|
|itemGroup.name.stoneBrick|Construction|
|itemGroup.name.sword|Equipment|
|itemGroup.name.trapdoor|Construction|
|itemGroup.name.walls|Construction|
|itemGroup.name.wood|Nature|
|itemGroup.name.wool|Construction|
|itemGroup.name.woolCarpet|Construction|

## Example

```json
{
  "format_version": "1.20.20",
  "minecraft:item": {
    "description": {
      "identifier": "minecraft:cooked_chicken",
      "menu_category": {
        "category": "equipment",
        "group": "itemGroup.name.cookedFood"
      }
    },

    "components": {
      "minecraft:use_duration": 32,
      "minecraft:food": {
        "nutrition": 6,
        "saturation_modifier": "normal"
      }
    }
  }
}
```
