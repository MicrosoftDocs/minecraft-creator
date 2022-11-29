---
author: mammerla
ms.author: mikeam
title: Block Documentation - Block JSON File Structure
ms.prod: gaming
---

# Block Documentation - Block JSON File Structure

A block's behavior pack JSON file must be set up in a certain way with specific elements. This helps the system determine how to parse and initialize this block.

## Code Example of a custom block's behavior JSON file

```json
{
{
  "format_version": "1.19.40",
  "minecraft:block": {
    "description": {
      "identifier": "custom:example_block"
    },
    "components": {
      "minecraft:loot": "loot_tables/example_block_loot.json",
      "minecraft:friction": 0.6,
      "minecraft:map_color": "#00ff00"
    }
  }
}
```

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|format_version|*not set* | String| Specifies the version of the game this block was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.|
|minecraft:block|*not set*| JSON Object| Block definition, which includes the `"description"` and `"components"` sections.|
|description|*not set*|JSON Object|List of characteristics of a block that are applicable to all permutations of the block. The description MUST contain an identifier; the other fields are optional. View the other fields in [Block Description](BlockDescription.md).|
|components|*not set*|JSON Object|List of all components that are used in this block. View the list of components in [Block Components List](\BlockComponents\BlockComponentsList.md). Block trigger components can also be specified in the components section, but they require the Holiday Creator Features experimental toggle to be ON in order for them to work. But you can view the list of block trigger components in [Block Trigger List](BlockTriggers\BlockTriggerList.md).|

Another section that may be found inside the `"minecraft:block"` object is the "permutations" section. This section can hold different versions of your block, by allowing you to specify which components you want the block to have under certain conditions. Permutations currently require the Holiday Creator Features experimental toggle in settings to be ON, but check out how to write them and use them in [Block Properties and Permutations](BlockPropertiesAndPermutations.md).

The last section that may be found inside the `"minecraft:block"` object is the "events" section. Block events provide one way to trigger the change of permutation, as well as trigger other game events. They must be used in conjunction with one or more block trigger component(s). Events currently require the Holiday Creator Features experimental toggle in settings to be ON, but check out how to write them and use them in [Block Event List](\BlockEvents\BlockEventList.md).
