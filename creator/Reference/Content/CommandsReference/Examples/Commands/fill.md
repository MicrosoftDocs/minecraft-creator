---
author: mammerla
ms.author: mikeam
title: "fill Command"
description: "Description and usage of the /fill command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/fill` Command

Fills all or parts of a region with a specific block.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block_state_array> [oldBlockHandling: fillmode]`

`/fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: fillmode]`

`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block_state_array> <oldBlockHandling: fillmode> [replaceTileName: Block] [replaceBlockStates: block_state_array]`

`/fill <from: x y z> <to: x y z> <tileName: Block> <oldBlockHandling: fillmode> [replaceTileName: Block] [replaceBlockStates: block_state_array]`

### Fill with block state, optional fill mode

`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block_state_array> [oldBlockHandling: fillmode]`

Fill a region `from` one position `to` another of a particular `block state` with an optional fill mode.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| from | [Block Position](../CommandTypes/type_position.md) | Required | A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| to | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | An `enum` of the block `id` of the block to fill the region with. |
| blockStates | block_state_array | Required | An array of block states. |
| oldBlockHandling | fillmode | Optional |  |

### Fill, filter on block states, optional replace with tile name or block state

`/fill <from: x y z> <to: x y z> <tileName: Block> [oldBlockHandling: fillmode]`

Fill a region `from` one position `to` another of a particular `block name`, filtering on particular `block states`, and replacing with blocks using an optional `replacement tile name` and optional `replacement block states`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| from | [Block Position](../CommandTypes/type_position.md) | Required | A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| to | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | An `enum` of the block `id` of the block to fill the region with. |
| oldBlockHandling | fillmode | Optional |  |

### Fill, filtering on block states, with replacement blocks and states

`/fill <from: x y z> <to: x y z> <tileName: Block> <blockStates: block_state_array> <oldBlockHandling: fillmode> [replaceTileName: Block] [replaceBlockStates: block_state_array]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| from | [Block Position](../CommandTypes/type_position.md) | Required | A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| to | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | An `enum` of the block `id` of the block to fill the region with. |
| blockStates | block_state_array | Required | An array of block states. |
| oldBlockHandling | fillmode | Required |  |
| replaceTileName | [Block ID](../CommandTypes/type_block.md) | Optional | An `enum` of the type of the block `id` to replace in the fill region. |
| replaceBlockStates | block_state_array | Optional | An `array` of block states to replace. |

### Fill with replacement blocks and states

`/fill <from: x y z> <to: x y z> <tileName: Block> <oldBlockHandling: fillmode> [replaceTileName: Block] [replaceBlockStates: block_state_array]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| from | [Block Position](../CommandTypes/type_position.md) | Required | A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| to | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | An `enum` of the block `id` of the block to fill the region with. |
| oldBlockHandling | fillmode | Required |  |
| replaceTileName | [Block ID](../CommandTypes/type_block.md) | Optional | An `enum` of the type of the block `id` to replace in the fill region. |
| replaceBlockStates | block_state_array | Optional | An `array` of block states to replace. |

## Examples

### Fill a 11x4x11 area around you with stone

```
/fill ~-5 ~ ~-5 ~5 ~3 ~5 stone
```

### Destroy the layer below you in a 11x1x11 area

```
/fill ~-5 ~-1 ~-5 ~5 ~-1 ~5 air 0 destroy
```

### Replace all dirt with grass blocks in a region

```
/fill 0 64 0 10 64 10 grass_block 0 replace dirt
```

### Create a hollow glass box around you

```
/fill ~-3 ~ ~-3 ~3 ~4 ~3 glass 0 hollow
```

### Remove all water in a 21x21x21 area

```
/fill ~-10 ~-10 ~-10 ~10 ~10 ~10 air 0 replace water
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| blockStates | block_state_array | An array of block states. |
| from | [Block Position](../CommandTypes/type_position.md) | A vector that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| oldBlockHandling | fillmode |  |
| replaceBlockStates | block_state_array | An `array` of block states to replace. |
| replaceTileName | [Block ID](../CommandTypes/type_block.md) | An `enum` of the type of the block `id` to replace in the fill region. |
| tileName | [Block ID](../CommandTypes/type_block.md) | An `enum` of the block `id` of the block to fill the region with. |
| to | [Block Position](../CommandTypes/type_position.md) | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
