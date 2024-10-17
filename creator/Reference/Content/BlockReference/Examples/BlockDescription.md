---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - Block Description
description: "A reference document detailing the block description section contained in the block behavior pack JSON file"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block Description

The block `"description"` lives inside the `"minecraft:block"` section of a custom block's behavior pack JSON file, and contains a list of block characteristics that are applicable to all permutations of the block. The description MUST contain an identifier to identify the block by; the other fields are optional.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|identifier|*not set* | String| The identifier for this block. The name must include a namespace and must not use the Minecraft namespace unless overriding a Vanilla block.|
|states|*not set*|JSON Object|Map of key/value pairs that maps the state name (key) to an array of all possible values for that state (value). Learn how to use block states in [Block States and Permutations](BlockStatesAndPermutations.md).|
|menu_category|*not set*|JSON Object|Specifies the menu category and group for the block, which determine where this block is placed in the inventory and crafting table container screens. If this field is omitted, the block will not appear in the inventory or crafting table container screens.|

## menu_category Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|category|*not set*|String|Determines which category this block will be placed under in the inventory and crafting table container screens. Options are "construction", "nature", "equipment", "items", and "none". If omitted or "none" is specified, the block will not appear in the inventory or crafting table container screens.|
|group|*not set*|Localization String|Specifies the language file key that maps to which expandable/collapsible group this block will be a part of within a category. If this field is omitted, or there is no group whose name matches the loc string, this block will be placed standalone in the given category.|
|is hidden in commands|false|Boolean|Determines whether or not this block can be used with commands. Commands can use blocks by default, but you may use this to disable that functionality.|

## Example

```json
{
 "format_version": "1.21.40",
 "minecraft:block": {
  "description": {
   "identifier": "design:lavenderstone"
  },
  "components": {
   "minecraft:loot": "loot_tables/chests/simple_dungeon.json",
   "minecraft:destructible_by_mining": {
    "seconds_to_destroy": 4
   },
   "minecraft:friction": 0.4,
   "minecraft:map_color": "#00ff00",
   "minecraft:flammable": {
    "catch_chance_modifier": 50,
    "destroy_chance_modifier": 0
   },
   "minecraft:light_emission": 15
  }
 }
}
```
