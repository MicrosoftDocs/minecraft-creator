---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:movable"
description: "Describes the minecraft:movable block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:movable

Defines whether the block can be pushed or pulled by a piston. Use movement_type to declare the block as push_pull, push, popped, or immovable; use sticky to opt into same-block grouping similar to slime blocks.

> [!Note]
> This item requires a format version of at least 1.21.100.


## Movable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| movement_type | push_pull | [Movement Type](#movement-type-choices) choices | How the block reacts to being pushed by another block like a piston. | Block Red Shrub: `"popped"` | 
| sticky | none | [Sticky](#sticky-choices) choices | How the block should handle adjacent blocks around it when being pushed by another block like a piston. |  | 

### movement_type

How the block reacts to being pushed by another block like a piston. The options are: "push_pull" - The default value for this field. The block will be pushed and pulled by a piston. "push" - The block will only be pulled by a piston and will ignore a sticky piston. "popped" - The block is destroyed when moved by a piston. "immovable" - The block is unaffected by a piston.

### sticky

How the block should handle adjacent blocks around it when being pushed by another block like a piston. The options are: "same" - Adjacent blocks to this block will be moved when moved. This excludes other blocks with the "same" property. This will only work with the movement_type: "push_pull". "none" - The default and will not move adjacent blocks.


### Movement Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| immovable | Immovable | |
| popped | Popped | |
| push | Push | |
| push_pull | Push pull | |

### Sticky choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| none | None | |
| same | Same | |

## Samples

#### [Block Red Shrub](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/blocks/red_shrub.block.json)


```json
"minecraft:movable": {
  "movement_type": "popped"
}
```
