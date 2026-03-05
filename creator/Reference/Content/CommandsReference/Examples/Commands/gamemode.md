---
author: mammerla
ms.author: mikeam
title: "gamemode Command"
description: "Description and usage of the /gamemode command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/gamemode` Command

Sets a player's game mode. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#gamemode).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/gamemode <gameMode: gamemode> [player: target]`

`/gamemode <gameMode: gamemode> [player: target]`

## Usage

### Set game mode with enum

`/gamemode <gameMode: gamemode> [player: target]`

Set a player's game mode using the gamemode `enum`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| gameMode | [Game Mode](../CommandTypes/type_gamemode.md) | Required | Game mode enum |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |

### Set game mode with integer

`/gamemode <gameMode: gamemode> [player: target]`

Set a player's game mode using an `integer`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| gameMode | [Game Mode](../CommandTypes/type_gamemode.md) | Required | Game mode enum |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| gameMode | [Game Mode](../CommandTypes/type_gamemode.md) | Game mode enum |
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
