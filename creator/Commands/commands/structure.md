---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: structure Command
description: Description and usage of the structure command
---
# `/structure` Command
Saves or loads a structure in the world. See examples of this command in use in the [Structure Blocks documentation](https://learn.microsoft.com/minecraft/creator/documents/structureblockstutorial#creating-structures-using-the-structure-command).

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Save structure, optional save mode
`/structure save <name: string> <from: x y z> <to: x y z> [saveMode: StructureSaveMode]`

`Save` a `structure` with required structure `name`, `from`, and `to`, and an optional `save mode`.

### Save structure, optional entities, blocks, save mode
`/structure save <name: string> <from: x y z> <to: x y z> [includeEntities: Boolean] [saveMode: StructureSaveMode] [includeBlocks: Boolean]`

`Save` a `structure` with required structure `name`, `from`, and `to`, and optional `entities`, `blocks`, and `save mode`.

### Delete structure
`/structure delete <name: string>`

`Delete` a `structure` by `name`.

### `/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]`

### `/structure load <name: string> <to: x y z> [rotation: Rotation] [mirror: Mirror] [animationMode: StructureAnimationMode] [animationSeconds: float] [includeEntities: Boolean] [includeBlocks: Boolean] [waterlogged: Boolean] [integrity: float] [seed: string]`

## Arguments
- `animationMode`: StructureAnimationMode
An `enum` of `block_by_block` to load blocks in one at a time or `layer_by_layer` to load them in in layers.
Default: `none`.
- `animationSeconds`: float
A `float` of the duration of the time to animate the structure loading in.
Default: `0.0`.
- `from: x y z`: position
A `vector` used with `to` that specifies the opposing corners of a structure.
- `includeBlocks`: [Boolean](../enums/Boolean.md)
A `Boolean` that specifies whether to save or load blocks inside the structure.
Default: `true`.
- `includeEntities`: [Boolean](../enums/Boolean.md)
A `Boolean` that specifies whether to save or load entities inside the structure.
Default: `true`.
- `integrity`: float
A `float` that specifies the percentage likelihood a block will load. 100 loads all blocks, 0 loads none.
Default: 100.
- `mirror`: Mirror
An `enum` that specifies the axis to mirror when loading a structure. Either `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`.
Default: `none`.
- `name`: string
A `string` that specifies the name of the structure. May include a namespace.
- `rotation`: Rotation
An `enum` of the rotation when loading in a structure. Must be one of `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`.
Default: `none`.
- `saveMode`: StructureSaveMode
An `enum` of of either `disk` to save structure to the world database which persists between game loads, or `memory` that temporarily saves the structure.
Default: `memory`.
- `seed`: string
A `string` that specifies the seed when loading in a block with variable integrity.
- `to: x y z`: position
A `vector` used with `from` that specifies the opposing corners of a structure.
- `waterlogged`: [Boolean](../enums/Boolean.md)

## Enums
### `Mirror`
An `enum` of `0` for none, `1` to mirror X, `2` to mirror Z, or `3` to mirror XZ.

#### Values
- `x`
x - choose '1' to mirror x
- `z`
z - choose '2' to mirror z
- `none`
none - choose '0' for none
- `xz`
xz - choose '3' to mirror xz

### `Rotation`
An `enum` of the rotation when loading in a structure. Must be one of `0_degrees`, `90_degrees`, `180_degrees`, or `270_degrees`.
Default: `0_degrees`.

#### Values
- `0_degrees`
No rotation
- `90_degrees`
Rotate 90 degrees
- `180_degrees`
Rotate 180 degrees
- `270_degrees`
Rotate 270 degrees

### `StructureAnimationMode`
Enum of Structure Animation Mode

#### Values
- `block_by_block`
Block by Block
- `layer_by_layer`
Layer by Layer

### `StructureSaveMode`
Enum of Structure Save Modes

#### Values
- `disk`
Disk
- `memory`
Memory
