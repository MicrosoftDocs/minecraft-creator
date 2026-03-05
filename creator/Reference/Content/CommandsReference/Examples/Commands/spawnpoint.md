---
author: mammerla
ms.author: mikeam
title: "spawnpoint Command"
description: "Description and usage of the /spawnpoint command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/spawnpoint` Command

Sets the spawn point for a player.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/spawnpoint [player: target] [spawnPos: x y z]`

## Usage

`/spawnpoint [player: target] [spawnPos: x y z]`

Sets the `spawn position` for a `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| spawnPos | [Position (x y z)](../CommandTypes/type_position_float.md) | Optional | A `vector` [x y z] of `floats` that defines the player's new spawn point. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| spawnPos | [Position (x y z)](../CommandTypes/type_position_float.md) | A `vector` [x y z] of `floats` that defines the player's new spawn point. |
