---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:crafting_table"
description: "Describes the minecraft:crafting_table block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:crafting_table

Makes your block into a custom crafting table which enables the crafting table UI and the ability to craft recipes. This component supports only "recipe_shaped" and "recipe_shapeless" typed recipes and not others like "recipe_furnace" or "recipe_brewing_mix". If there are two recipes for one item, the recipe book will pick the first that was parsed. If two input recipes are the same, crafting may assert and the resulting item may vary.


## Crafting Table Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| crafting_tags | *not set* | Array of strings | Defines the tags recipes should define to be crafted on this table. Limited to 64 tags. Each tag is limited to 64 characters. | Block Fabricator: `["graywave_fabricator"]` | 
| table_name | *not set* | Localizable String | Specifies the language file key that maps to what text will be displayed in the UI of this table. If the string given can not be resolved as a loc string, the raw string given will be displayed. If this field is omitted, the name displayed will default to the name specified in the "display_name" component. If this block has no "display_name" component, the name displayed will default to the name of the block. | Block Fabricator: `"Fabricator"` | 

## Samples

#### [Example](Example)


```json
"minecraft:crafting_table": {
  "crafting_tags": [
    "crafting_table",
    "custom_crafting_tag"
  ],
  "table_name": "My Crafting Table"
}
```

#### [Block Fabricator](https://github.com/microsoft/minecraft-samples/tree/main/casual_creator/gray_wave/behavior_packs/mikeamm_gwve/blocks/fabricator.block.json)


```json
"minecraft:crafting_table": {
  "crafting_tags": [
    "graywave_fabricator"
  ],
  "table_name": "Fabricator"
}
```
