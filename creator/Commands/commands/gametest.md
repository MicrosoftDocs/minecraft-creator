---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: gametest Command
description: Description and usage of the gametest command
---
# `/gametest` Command
[Requires the Beta APIs experiment].  Configures various parameters for managing built-in or custom gametest framework tests.

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
### Run block test
`/gametest runthis`

Internal command variant that is used to run the command associated with a command block.

### Run gametest
`/gametest run <testName: GameTestName> [rotationSteps: int]`

Runs a particular gametest with a particular number of rotation steps.

### Run gametest with custom stop
`/gametest run <testName: GameTestName> <stopOnFailure: Boolean> <repeatCount: int> [rotationSteps: int]`

Runs a gametest with additional controls on stop behavior, repeat count, and rotation steps.

### Run gametest with a tag
`/gametest runset [tag: GameTestTag] [rotationSteps: int]`

Runs a set of gametests with a particular tag.

### Run gametest until failure
`/gametest runsetuntilfail [tag: GameTestTag] [rotationSteps: int]`

Runs a set of gametests until a failure is detected, using a particular tag.

### Clear all tests
`/gametest clearall`

Clears out existing gametests and potentially any side effects.

### Show gametest origin
`/gametest pos`

Shows the relative position of the origin of a gametest in the world.

### Creates a new gametest
`/gametest create <testName: string> [width: int] [height: int] [depth: int]`

Creates a new gametest with the specified name, width, height, and depth.

### Run nearby tests
`/gametest runthese`

Runs nearby tests.

### Stop all tests
`/gametest stopall`

Stops all currently-running gametests.

## Arguments
- `depth`: int
- `height`: int
- `repeatCount`: int
- `rotationSteps`: int
- `stopOnFailure`: [Boolean](../enums/Boolean.md)
- `tag`: GameTestTag
- `testName`: GameTestName
- `testName`: string
- `width`: int
