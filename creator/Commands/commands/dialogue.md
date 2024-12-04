---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: dialogue Command
description: Description and usage of the dialogue command
---
# `/dialogue` Command
Opens NPC dialogue for a player. See the page on the [Dialogue documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/npcdialogue#dialogue-command) for more information.

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
### Dialogue with NPC and player, optional sceneName
`/dialogue open <npc: target> <player: target> [sceneName: string]`

Open a specific scene with an `npc` and `player` using an optional `sceneName`.

### Dialogue with NPC and sceneName, optional player
`/dialogue change <npc: target> <sceneName: string> [players: target]`

Change the dialogue `npc` and `sceneName`, with an optional `player`.

## Arguments
- `npc`: target
Required. The target for the NPC menu. Must be a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) for an entity with type NPC.
- `player`: target
Target to display menu. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `players`: target
- `sceneName`: string
A `string` that specifies the scene file to run from the behavior pack.
