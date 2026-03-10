---
author: mammerla
ms.author: mikeam
title: "scoreboard Command"
description: "Description and usage of the /scoreboard command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/scoreboard` Command

Tracks and displays scores for various objectives. See more information about its use in the [Scoreboards Objectives Commands documentation](/creator/documents/scoreboardintroduction#scoreboard-objectives-commands) page.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/scoreboard <category: scoreboardobjectivescategory> add <objective: scoreboardobjectives> <criteria: scoreboardcriteria> [displayName: id]`

`/scoreboard <category: scoreboardobjectivescategory> remove <objective: scoreboardobjectives>`

`/scoreboard <category: scoreboardobjectivescategory> list`

`/scoreboard <category: scoreboardobjectivescategory> setdisplay <displaySlot: scoreboarddisplayslotsortable> [objective: scoreboardobjectives] [sortOrder: scoreboardsortorder]`

`/scoreboard <category: scoreboardobjectivescategory> setdisplay <displaySlot: scoreboarddisplayslotsortable> [objective: scoreboardobjectives]`

`/scoreboard <category: scoreboardobjectivescategory> list [playername: target]`

`/scoreboard <category: scoreboardobjectivescategory> reset <player: target> [objective: scoreboardobjectives]`

`/scoreboard <category: scoreboardobjectivescategory> test <player: target> <objective: scoreboardobjectives> <min: wildcardint> [max: wildcardint]`

`/scoreboard <category: scoreboardobjectivescategory> random <player: target> <objective: scoreboardobjectives> <min: wildcardint> <max: wildcardint>`

`/scoreboard <category: scoreboardobjectivescategory> playersnum <player: target> <objective: scoreboardobjectives> <count: int>`

`/scoreboard <category: scoreboardobjectivescategory> operation <targetName: target> <targetObjective: scoreboardobjectives> <operation: operator> <selector: target> <objective: scoreboardobjectives>`

## Usage

### Add objective

`/scoreboard <category: scoreboardobjectivescategory> add <objective: scoreboardobjectives> <criteria: scoreboardcriteria> [displayName: id]`

Add an objective for the game to track. This example adds `dummy` for the game to track and `displayName` for the players.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| objective | scoreboardobjectives | Required | Objective for the game to track |
| criteria | scoreboardcriteria | Required |  |
| displayName | [id](../CommandTypes/type_id.md) | Optional | A `string` for the display name. Default: `<objective>`. |

### Remove objectives

`/scoreboard <category: scoreboardobjectivescategory> remove <objective: scoreboardobjectives>`

Remove objectives.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| objective | scoreboardobjectives | Required | Objective for the game to track |

### List objectives

`/scoreboard <category: scoreboardobjectivescategory> list`

List objectives.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |

### Set display

`/scoreboard <category: scoreboardobjectivescategory> setdisplay <displaySlot: scoreboarddisplayslotsortable> [objective: scoreboardobjectives] [sortOrder: scoreboardsortorder]`

`Set display` to add scoreboard to the game in a way that players can view.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| displaySlot | scoreboarddisplayslotsortable | Required | Scoreboard display slot sortable |
| objective | scoreboardobjectives | Optional | Objective for the game to track |
| sortOrder | scoreboardsortorder | Optional | An `enum` of `ascending` or `descending`. |

### Set display below name

`/scoreboard <category: scoreboardobjectivescategory> setdisplay <displaySlot: scoreboarddisplayslotsortable> [objective: scoreboardobjectives]`

Use `setdisplay` `belowname` `[objective]` to display objective information below player names.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| displaySlot | scoreboarddisplayslotsortable | Required | Scoreboard display slot sortable |
| objective | scoreboardobjectives | Optional | Objective for the game to track |

### List players

`/scoreboard <category: scoreboardobjectivescategory> list [playername: target]`

List players on scoreboard.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| playername | [target](../CommandTypes/type_selection.md) | Optional | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers. |

### Reset player objective

`/scoreboard <category: scoreboardobjectivescategory> reset <player: target> [objective: scoreboardobjectives]`

`Reset` one `player`'s chosen `objective`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| objective | scoreboardobjectives | Optional | Objective for the game to track |

### Test score

`/scoreboard <category: scoreboardobjectivescategory> test <player: target> <objective: scoreboardobjectives> <min: wildcardint> [max: wildcardint]`

`Test` whether a `player`'s `score` is within a specified range.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| objective | scoreboardobjectives | Required | Objective for the game to track |
| min | wildcardint | Required | Min wildcard int |
| max | wildcardint | Optional | Max wildcard int |

### Give random score

`/scoreboard <category: scoreboardobjectivescategory> random <player: target> <objective: scoreboardobjectives> <min: wildcardint> <max: wildcardint>`

Give a player a random score within a range.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| objective | scoreboardobjectives | Required | Objective for the game to track |
| min | wildcardint | Required | Min wildcard int |
| max | wildcardint | Required | Max wildcard int |

### Change score, count

`/scoreboard <category: scoreboardobjectivescategory> playersnum <player: target> <objective: scoreboardobjectives> <count: int>`

Change a `player`'s `score` using a math `operation` by a `count`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| player | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| objective | scoreboardobjectives | Required | Objective for the game to track |
| count | [int](../CommandTypes/type_int.md) | Required | An `integer` to set the score to. |

### Change score, math operation

`/scoreboard <category: scoreboardobjectivescategory> operation <targetName: target> <targetObjective: scoreboardobjectives> <operation: operator> <selector: target> <objective: scoreboardobjectives>`

Change a `player`'s `score` using a math `operation` on another player's score.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| category | scoreboardobjectivescategory | Required |  |
| targetName | [target](../CommandTypes/type_selection.md) | Required | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers. |
| targetObjective | scoreboardobjectives | Required |  |
| operation | [operator](../CommandTypes/type_operator.md) | Required | A command operator of the `operation` to be applied. Must be `=`, `+=`, `-=`, `*=`, `/=`, `*/`, `<>`, `<`, or. `>`. |
| selector | [target](../CommandTypes/type_selection.md) | Required | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the source score havers to use as source inputs. |
| objective | scoreboardobjectives | Required | Objective for the game to track |

## Examples

### Create a new objective called 'points'

```
/scoreboard objectives add points dummy
```

### Show 'points' objective on the sidebar

```
/scoreboard objectives setdisplay sidebar points
```

### Set your own points score to 10

```
/scoreboard players set @s points 10
```

### Add 1 point to all players

```
/scoreboard players add @a points 1
```

### Reset all players' points scores

```
/scoreboard players reset @a points
```

### List all scores for yourself

```
/scoreboard players list @s
```

### Remove the 'points' objective entirely

```
/scoreboard objectives remove points
```

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| category | scoreboardobjectivescategory |  |
| count | [int](../CommandTypes/type_int.md) | An `integer` to set the score to. |
| criteria | scoreboardcriteria |  |
| displayName | [id](../CommandTypes/type_id.md) | A `string` for the display name. Default: `<objective>`. |
| displaySlot | scoreboarddisplayslotsortable | Scoreboard display slot sortable |
| max | wildcardint | Max wildcard int |
| min | wildcardint | Min wildcard int |
| objective | scoreboardobjectives | Objective for the game to track |
| operation | [operator](../CommandTypes/type_operator.md) | A command operator of the `operation` to be applied. Must be `=`, `+=`, `-=`, `*=`, `/=`, `*/`, `<>`, `<`, or. `>`. |
| player | [target](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| playername | [target](../CommandTypes/type_selection.md) | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers. |
| selector | [target](../CommandTypes/type_selection.md) | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the source score havers to use as source inputs. |
| sortOrder | scoreboardsortorder | An `enum` of `ascending` or `descending`. |
| targetName | [target](../CommandTypes/type_selection.md) | A [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors), player selector, UUID, unique ID, or `*` for all of the score havers. |
| targetObjective | scoreboardobjectives |  |
