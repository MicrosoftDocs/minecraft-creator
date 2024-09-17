---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: summon Command
description: Description and usage of the summon command
---
# `/summon` Command
Summons an entity.

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
### Summon entity with nametag
`/summon <entityType: EntityType> [spawnPos: x y z] [yRot: rotation] [xRot: rotation] [spawnEvent: EntityEvents] [nameTag: string]`

Summon an `entity` with a `nametag` into an optional `spawn position`.

### `/summon <entityType: EntityType> <nameTag: string> [spawnPos: x y z]`


### `/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtPosition: x y z> [spawnEvent: EntityEvents] [nameTag: string]`

### `/summon <entityType: EntityType> [spawnPos: x y z] facing <lookAtEntity: target> [spawnEvent: EntityEvents] [nameTag: string]`

## Arguments
- `entityType`: [EntityType](../enums/EntityType.md)
An `enum` of the entity to be summoned.
- `lookAtEntity`: target
- `lookAtPosition: x y z`: position
- `nameTag`: string
A `string` of the entity name tag.
- `spawnEvent`: [EntityEvents](../enums/EntityEvents.md)
A `string` of the in-game event for the entity.
- `spawnPos: x y z`: position
A `vector` of `float` numbers for the position of the summoned entity.
- `xRot`: rotation
The `float` degrees `x` to rotate a player when teleporting.
- `yRot`: rotation
The `float` degrees `y` to rotate a player when teleporting.
