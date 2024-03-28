---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: particle Command
description: Description and usage of the particle command
---
# `/particle` Command
Creates a particle emitter

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
### Particle
`/particle <effect: string> [position: x y z]`

Create a `particle` emitter with a required `effect` and optional `position`.

## Arguments
- `effect`: string
A `string` that specifies the particle to create.
- `position: x y z`: position
A `vector` with `[x y z]` coordinates that specifies where to make the particle.
Default: the position of the executor.
