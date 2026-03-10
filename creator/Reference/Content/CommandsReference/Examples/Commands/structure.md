---
author: mammerla
ms.author: mikeam
title: "structure Command"
description: "Description and usage of the /structure command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/structure` Command

Saves or loads a structure in the world. See examples of this command in use in the [Structure Blocks documentation](https://learn.microsoft.com/minecraft/creator/documents/structureblockstutorial#creating-structures-using-the-structure-command).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/structure save <name: id> <from: x y z> <to: x y z> [includeEntities: Boolean] [includeBlocks: Boolean]`

`/structure delete <name: id>`

`/structure load <name: id> <to: x y z> [rotation: rotation] [mirror: mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: id]`

`/structure load <name: id> <to: x y z> [rotation: rotation] [mirror: mirror] [animationMode: structureanimationmode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: id]`

## Usage

### Save structure, optional save mode

`/structure save <name: id> <from: x y z> <to: x y z> [includeEntities: Boolean] [includeBlocks: Boolean]`

`Save` a `structure` with required structure `name`, `from`, and `to`, and an optional `save mode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that specifies the name of the structure. May include a namespace. |
| from | [x y z](../CommandTypes/type_position.md) | Required | A `vector` used with `to` that specifies the opposing corners of a structure. |
| to | [x y z](../CommandTypes/type_position.md) | Required | A `vector` used with `from` that specifies the opposing corners of a structure. |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load entities inside the structure. Default: `true`. |
| includeBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load blocks inside the structure. Default: `true`. |

### Save structure, optional entities, blocks, save mode

`/structure delete <name: id>`

`Save` a `structure` with required structure `name`, `from`, and `to`, and optional `entities`, `blocks`, and `save mode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that specifies the name of the structure. May include a namespace. |

### Load structure, optional animation mode, animation seconds

`/structure load <name: id> <to: x y z> [rotation: rotation] [mirror: mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: id]`

`Load` a `structure` with required structure `name` and `to`, and optional `rotation`, `mirror`, `animation mode`, `animation seconds`, `entities`, `blocks`, `integrity`, and `seed`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that specifies the name of the structure. May include a namespace. |
| to | [x y z](../CommandTypes/type_position.md) | Required | A `vector` used with `from` that specifies the opposing corners of a structure. |
| rotation | rotation | Optional | An `enum` of the rotation when loading in a structure. Must be one of `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| mirror | mirror | Optional | An `enum` that specifies the axis to mirror when loading a structure. Either `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load entities inside the structure. Default: `true`. |
| includeBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load blocks inside the structure. Default: `true`. |
| waterlogged | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| integrity | [float](../CommandTypes/type_val.md) | Optional | A `float` that specifies the percentage likelihood a block will load. 100 loads all blocks, 0 loads none. Default: 100. |
| seed | [id](../CommandTypes/type_id.md) | Optional | A `string` that specifies the seed when loading in a block with variable integrity. |

### With name, to, rotation, mirror, animationMode, animationSeconds, includeEntities, includeBlocks, waterlogged, integrity, seed

`/structure load <name: id> <to: x y z> [rotation: rotation] [mirror: mirror] [animationMode: structureanimationmode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: id]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [id](../CommandTypes/type_id.md) | Required | A `string` that specifies the name of the structure. May include a namespace. |
| to | [x y z](../CommandTypes/type_position.md) | Required | A `vector` used with `from` that specifies the opposing corners of a structure. |
| rotation | rotation | Optional | An `enum` of the rotation when loading in a structure. Must be one of `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| mirror | mirror | Optional | An `enum` that specifies the axis to mirror when loading a structure. Either `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| animationMode | structureanimationmode | Optional | An `enum` of `block_by_block` to load blocks in one at a time or `layer_by_layer` to load them in in layers. Default: `none`. |
| animationSeconds | [float](../CommandTypes/type_val.md) | Optional | A `float` of the duration of the time to animate the structure loading in. Default: `0.0`. |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load entities inside the structure. Default: `true`. |
| includeBlocks | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` that specifies whether to save or load blocks inside the structure. Default: `true`. |
| waterlogged | [Boolean](../CommandTypes/type_boolean.md) | Optional |  |
| integrity | [float](../CommandTypes/type_val.md) | Optional | A `float` that specifies the percentage likelihood a block will load. 100 loads all blocks, 0 loads none. Default: 100. |
| seed | [id](../CommandTypes/type_id.md) | Optional | A `string` that specifies the seed when loading in a block with variable integrity. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| animationMode | structureanimationmode | An `enum` of `block_by_block` to load blocks in one at a time or `layer_by_layer` to load them in in layers. Default: `none`. |
| animationSeconds | [float](../CommandTypes/type_val.md) | A `float` of the duration of the time to animate the structure loading in. Default: `0.0`. |
| from | [x y z](../CommandTypes/type_position.md) | A `vector` used with `to` that specifies the opposing corners of a structure. |
| includeBlocks | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` that specifies whether to save or load blocks inside the structure. Default: `true`. |
| includeEntities | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` that specifies whether to save or load entities inside the structure. Default: `true`. |
| integrity | [float](../CommandTypes/type_val.md) | A `float` that specifies the percentage likelihood a block will load. 100 loads all blocks, 0 loads none. Default: 100. |
| mirror | mirror | An `enum` that specifies the axis to mirror when loading a structure. Either `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| name | [id](../CommandTypes/type_id.md) | A `string` that specifies the name of the structure. May include a namespace. |
| rotation | rotation | An `enum` of the rotation when loading in a structure. Must be one of `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`. Default: `none`. |
| seed | [id](../CommandTypes/type_id.md) | A `string` that specifies the seed when loading in a block with variable integrity. |
| to | [x y z](../CommandTypes/type_position.md) | A `vector` used with `from` that specifies the opposing corners of a structure. |
| waterlogged | [Boolean](../CommandTypes/type_boolean.md) |  |
