---
author: JimSeaman42
ms.author: mikeam
title: Block Documentation - Block JSON File Structure
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block JSON File Structure

A block's behavior pack JSON file must be set up in a certain way with specific elements. This allows the system to determine how to parse and initialize this block.

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
|description|*not set*|JSON Object|List of block characteristics that are applicable to all permutations of the block. The description MUST contain an identifier; the other fields are optional. View the other fields in [Block Description](BlockDescription.md).|
|components|*not set*|JSON Object|List of all components used in this block. View the list of components in [Block Components List](\BlockComponents\BlockComponentsList.md). |

Another section that may be found inside the `"minecraft:block"` object is the "permutations" section. This section can hold different versions of a block, allowing you to specify which components you want the block to have under certain conditions.
