---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: scoreboard Command
description: Description and usage of the scoreboard command
---
# `/scoreboard` Command
Tracks and displays scores for various objectives. See more information about its use in the [Scoreboards Objectives Commands documentation](/creator/documents/scoreboardintroduction#scoreboard-objectives-commands) page.

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
### Add objective
`/scoreboard objectives add <objective: ScoreboardObjectives> dummy [displayName: string]`

Add an objective for the game to track. This example adds `dummy` for the game to track and `displayName` for the players.

### Remove objectives
`/scoreboard objectives remove <objective: ScoreboardObjectives>`

Remove objectives.

### List objectives
`/scoreboard objectives list`

List objectives.

### Set display
`/scoreboard objectives setdisplay <displaySlot: ScoreboardDisplaySlotSortable> [objective: ScoreboardObjectives] [sortOrder: ScoreboardSortOrder]`

`Set display` to add scoreboard to the game in a way that players can view.

### Set display below name
`/scoreboard objectives setdisplay belowname [objective: ScoreboardObjectives]`

Use `setdisplay` `belowname` `[objective]` to display objective information below player names.  

### List players
`/scoreboard players list [playername: targets]`

List players on scoreboard.

### Reset player objective
`/scoreboard players reset <player: targets> [objective: ScoreboardObjectives]`

`Reset` one `player`'s chosen `objective`.

### Test score
`/scoreboard players test <player: targets> <objective: ScoreboardObjectives> <min: wildcard int> [max: wildcard int]`

`Test` whether a `player`'s `score` is within a specified range.

### Give random score
`/scoreboard players random <player: targets> <objective: ScoreboardObjectives> <min: int> <max: int>`

Give a player a random score within a range.

### Change score, count
`/scoreboard players <action: ScoreboardPlayersNumAction> <player: targets> <objective: ScoreboardObjectives> <count: int>`

Change a `player`'s `score` using a math `operation` by a `count`.

### Change score, math operation
`/scoreboard players operation <targetName: targets> <targetObjective: ScoreboardObjectives> <operation: operator> <selector: targets> <objective: ScoreboardObjectives>`

Change a `player`'s `score` using a math `operation` on another player's score.

## Arguments
- `action`: ScoreboardPlayersNumAction
Scoreboard players num action
- `count`: int
An `integer` to set the score to.
- `displayName`: string
A `string` for the display name.
Default: `<objective>`.
- `displaySlot`: ScoreboardDisplaySlotSortable
Scoreboard display slot sortable
- `max`: wildcard int
Max wildcard int
- `max`: int
Max int
- `min`: wildcard int
Min wildcard int
- `min`: int
Min int
- `objective`: [ScoreboardObjectives](../enums/ScoreboardObjectives.md)
Objective for the game to track
- `operation`: operator
A command operator of the `operation` to be applied. Must be `=`, `+=`, `-=`, `*=`, `/=`, `*/`, `<>`, `<`, or. `>`.
- `player`: targets
A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player.
- `playername`: targets
A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers.
- `selector`: targets
A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the source score havers to use as source inputs.
- `sortOrder`: ScoreboardSortOrder
An `enum` of `ascending` or `descending`.
- `targetName`: targets
A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers.
- `targetObjective`: [ScoreboardObjectives](../enums/ScoreboardObjectives.md)


## Enums
### `ScoreboardDisplaySlotSortable`
Enum of Scoreboard Display Slots, Sortable

#### Values
- `list`
List
- `sidebar`
Sidebar

### `ScoreboardPlayersNumAction`
Enum of Scoreboard Players Num Actions

#### Values
- `set`
Set
- `add`
Add
- `remove`
Remove

### `ScoreboardSortOrder`
Enum of Scoreboard Sort Order

#### Values
- `ascending`
Ascending - small to large
- `descending`
Descending - large to small
