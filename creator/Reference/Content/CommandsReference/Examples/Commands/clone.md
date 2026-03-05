---
author: mammerla
ms.author: mikeam
title: "clone Command"
description: "Description and usage of the /clone command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/clone` Command

Clones a set of blocks from one region to another.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: maskmode] [cloneMode: clonemode]`

`/clone <begin: x y z> <end: x y z> <destination: x y z> <maskMode: maskmode> <cloneMode: clonemode> <tileName: Block> [blockStates: block_state_array]`

## Usage

### Clone with optional `maskMode`, `cloneMode`

`/clone <begin: x y z> <end: x y z> <destination: x y z> [maskMode: maskmode] [cloneMode: clonemode]`

Clone a set of blocks from one location to a destination with an optional `maskMode` and `cloneMode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| begin | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| end | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| destination | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. The lower northwest corner of the region being cloned. |
| maskMode | maskmode | Optional | An `enum` that filters the blocks being cloned. If type `masked`, copy non-air blocks. |
| cloneMode | clonemode | Optional | An `enum` that is one of type `force`, `move`, or `normal`. Default: `normal`. |

### Clone with optional `maskMode`, `cloneMode`, `tileName`, `blockStates`

`/clone <begin: x y z> <end: x y z> <destination: x y z> <maskMode: maskmode> <cloneMode: clonemode> <tileName: Block> [blockStates: block_state_array]`

Clone a set of blocks from one location to a destination with an optional `maskMode` and `cloneMode`, as well as optional `tileName` or `blockStates` data  to specify the blocks to clone.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| begin | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| end | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| destination | [Block Position](../CommandTypes/type_position.md) | Required | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. The lower northwest corner of the region being cloned. |
| maskMode | maskmode | Required | An `enum` that filters the blocks being cloned. If type `masked`, copy non-air blocks. |
| cloneMode | clonemode | Required | An `enum` that is one of type `force`, `move`, or `normal`. Default: `normal`. |
| tileName | [Block ID](../CommandTypes/type_block.md) | Required | An `enum` that must be the `block name` of the blocks that are to be cloned. |
| blockStates | block_state_array | Optional | An `array` of block states. Specifies the block states to use for the cloned blocks. |

## Examples

### Clone a region from (0,64,0)-(10,70,10) to (20,64,0)

```
/clone 0 64 0 10 70 10 20 64 0
```

### Clone a structure near you to an offset, replacing all blocks

```
/clone ~-5 ~ ~-5 ~5 ~10 ~5 ~10 ~ ~ replace
```

### Clone only non-air blocks to a new location

```
/clone ~-5 ~ ~-5 ~5 ~10 ~5 ~10 ~ ~ masked
```

### Move a region (clone then clear original)

```
/clone 0 64 0 10 70 10 20 64 0 replace move
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| begin | [Block Position](../CommandTypes/type_position.md) | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| blockStates | block_state_array | An `array` of block states. Specifies the block states to use for the cloned blocks. |
| cloneMode | clonemode | An `enum` that is one of type `force`, `move`, or `normal`. Default: `normal`. |
| destination | [Block Position](../CommandTypes/type_position.md) | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. The lower northwest corner of the region being cloned. |
| end | [Block Position](../CommandTypes/type_position.md) | A `vector` that specifies the location in `x`, `y`, and `z` coordinates of `float` type. |
| maskMode | maskmode | An `enum` that filters the blocks being cloned. If type `masked`, copy non-air blocks. |
| tileName | [Block ID](../CommandTypes/type_block.md) | An `enum` that must be the `block name` of the blocks that are to be cloned. |
