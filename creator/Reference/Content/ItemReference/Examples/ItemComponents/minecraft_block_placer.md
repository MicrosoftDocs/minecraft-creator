---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:block_placer"
description: "Describes the minecraft:block_placer item component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:block_placer

Sets the item as a placer item component for blocks. Items with this component will place a block when used.

> [!Note]
> This component can also be used instead of the minecraft:icon component to render the block this item will place as the icon.

> [!Note]
> This item requires a format version of at least 1.21.50.


## Item Block Placer Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| aligned_placement | false | Boolean true/false | When true, block placement through this item is aligned while the interaction button is held down. | 
| block | *not set* | Object | Defines the block that will be placed. | 
| replace_block_item | false | Boolean true/false | If true, the item will be registered as the item for this block. | 
| use_on (Use On) | [] | Array of [Use On](#use-on) items | List of block descriptors of the blocks that this item can be used on. If left empty, all blocks will be allowed. Value must have at most 256 items. | 
| use_on (as String) | *not set* | String |  | 
| use_on (as Object) | *not set* | Object |  | 

### aligned_placement

When true, block placement through this item is aligned while the interaction button is held down. Supported from `format_version` 1.26.0 onward. This item requires a format version of at least 1.26.10.

### replace_block_item

If true, the item will be registered as the item for this block. This item will be returned by default when the block is broken/picked. Note: the identifier for this item must match the block's identifier for this field to be valid. Defaults to false.


### Use On

#### Use On Properties

**JSON path:** `use_on`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| name |  | String |  | 
| states | {} | Integer number |  | 
| states (as String) | *not set* | String |  | 
| states (as Boolean true/false) | *not set* | Boolean true/false |  | 
| tags |  | String |  | 

## Samples


```json
"minecraft:block_placer": {
  "block": "seeds",
  "use_on": [
    "dirt",
    "grass"
  ],
  "replace_block_item": true
}
```
