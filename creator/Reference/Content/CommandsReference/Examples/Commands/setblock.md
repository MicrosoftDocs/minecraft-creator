---
author: mammerla
ms.author: mikeam
title: "setblock Command"
description: "Description and usage of the /setblock command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/setblock` Command

Changes a block to another block.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/setblock <position: x y z> <tileName: Block> <blockStates: block_state_array> [oldBlockHandling: setblockmode]`

`/setblock <position: x y z> <tileName: Block> [oldBlockHandling: setblockmode]`

## Usage

### Set block, block states

`/setblock <position: x y z> <tileName: Block> <blockStates: block_state_array> [oldBlockHandling: setblockmode]`

Set a `block` in a `position` using `tile name` with optional `block states` and `old block handling` fill methods.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that defines the position of the block to change. |
| tileName | [Block](../CommandTypes/type_block.md) | Required | An block name from the `enum` that specifies the new block. |
| blockStates | block_state_array | Required | The block states from the `enum` to use for the block to be set. |
| oldBlockHandling | setblockmode | Optional | An `enum` of type `destroy`, `hollow`, `keep`, `outline`, or `replace`. Default: `replace`. |

### With position, tileName, oldBlockHandling

`/setblock <position: x y z> <tileName: Block> [oldBlockHandling: setblockmode]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| position | [x y z](../CommandTypes/type_position.md) | Required | A `vector` [x y z] that defines the position of the block to change. |
| tileName | [Block](../CommandTypes/type_block.md) | Required | An block name from the `enum` that specifies the new block. |
| oldBlockHandling | setblockmode | Optional | An `enum` of type `destroy`, `hollow`, `keep`, `outline`, or `replace`. Default: `replace`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| blockStates | block_state_array | The block states from the `enum` to use for the block to be set. |
| oldBlockHandling | setblockmode | An `enum` of type `destroy`, `hollow`, `keep`, `outline`, or `replace`. Default: `replace`. |
| position | [x y z](../CommandTypes/type_position.md) | A `vector` [x y z] that defines the position of the block to change. |
| tileName | [Block](../CommandTypes/type_block.md) | An block name from the `enum` that specifies the new block. |
