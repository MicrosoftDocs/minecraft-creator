---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: playanimation Command
description: Description and usage of the playanimation command
---
# `/playanimation` Command
Makes one or more entities play a one-off animation.

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
### Play animation
`/playanimation <entity: target> <animation: string> [next_state: string] [blend_out_time: float] [stop_expression: string] [controller: string]`

Play an animation with an entity and animation chosen, and optional next state, blend out time, stop expression, and controller.

## Arguments
- `animation`: string
Required. A `string` that is a single word or quoted `string`  that refers to an animation name or an animation JSON file in a resource pack.
- `blend_out_time`: float

- `controller`: string
Optional. A `string` that is an animation controller name or a new file defined in a resource pack.
- `entity`: target
Required. A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the entity.
- `next_state`: string

- `stop_expression`: string

