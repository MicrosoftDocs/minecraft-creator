---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: teleport Command
description: Description and usage of the teleport command
---
# `/teleport` Command
Teleports entities  to specific locations. Can also be written as `/tp`.

<table>
  <tr>
    <th>Aliases</th>
    <td>/tp</td>
  </tr>
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
### Teleport self
`/teleport <destination: x y z> [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination with optional `check for blocks`.

### Teleport self, x y rotation
`/teleport <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination with optional `y rotation`, `x rotation`, and `check for blocks`.

### Teleport self, facing position
`/teleport <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`Teleport` yourself to a `vector` destination facing a `vector` position with an optional `check for blocks`.

### Teleport self, facing entity
`/teleport <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]`

`Teleport` yourself  to a `vector` destination facing an `entity` with an optional `check for blocks`.

### Teleport player, x y rotation
`/teleport <victim: target> <destination: x y z> [yRot: rotation] [xRot: rotation] [checkForBlocks: Boolean]`

`Teleport` a target `player`  to a `vector` destination with optional `y rotation`, `x rotation`, and `check for blocks`.

### Teleport player
`/teleport <victim: target> <destination: x y z> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination with optional `check for blocks`.

### Teleport player, facing position
`/teleport <victim: target> <destination: x y z> facing <lookAtPosition: x y z> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination facing a `vector` position with an optional `check for blocks`.

### Teleport player, facing entity
`/teleport <victim: target> <destination: x y z> facing <lookAtEntity: target> [checkForBlocks: Boolean]`

`Teleport` player to a `vector` destination facing a `entity` with an optional `check for blocks`.

### Teleport player to entity destination
`/teleport <destination: target>`

`Teleport` a target `player` to an entity's destination with an optional `check for blocks`.

### Teleport player
`/teleport <victim: target> <destination: target> [checkForBlocks: Boolean]`

`Teleport` a target `player` to a `vector` destination with an optional `check for blocks`.

## Arguments
- `checkForBlocks`: [Boolean](../enums/Boolean.md)
A `Boolean` value to prevent teleporting the player if the location they would end up in is occupied by blocks if `true`.
Default: `false`.
- `destination: x y z`: position
The `vector` [x y z] position to teleport entities to.
- `destination`: target
 A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which `entity` to teleport target entities to.
- `lookAtEntity`: target
 A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which `entity` teleported entities should face.
- `lookAtPosition: x y z`: position
A `vector` [x y z] of where teleported entities should face.
- `victim`: target
A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify which player is teleported.
- `xRot`: rotation
The `float` degrees `x` to rotate a player when teleporting.
- `yRot`: rotation
The `float` degrees `y` to rotate a player when teleporting.
