---
author: mammerla
ms.author: mikeam
title: "clearspawnpoint Command"
description: "Description and usage of the /clearspawnpoint command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/clearspawnpoint` Command

Removes the spawn point for a player.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/clearspawnpoint [player: target]`

## Usage

`/clearspawnpoint [player: target]`

Clear the spawn point of a given player.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [target](../CommandTypes/type_selection.md) | Optional | The player whose checkpoint should be cleared. When using this command in a command block, a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) or player name must be specified. When using this command in chat, if no target is specified, then default target is the player using the command. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| player | [target](../CommandTypes/type_selection.md) | The player whose checkpoint should be cleared. When using this command in a command block, a [target selector](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) or player name must be specified. When using this command in chat, if no target is specified, then default target is the player using the command. |
