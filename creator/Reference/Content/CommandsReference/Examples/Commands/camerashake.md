---
author: mammerla
ms.author: mikeam
title: "camerashake Command"
description: "Description and usage of the /camerashake command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/camerashake` Command

Applies shaking to the players' camera with specified intensity and duration. Parameters: 'stop' or 'add' the effect, specify player (target), intensity (float, min 0.0 to max 4.0), seconds(float, min 0.01), and shakeType (positional or rotational). Must have `Allow Camera Shake` option turned on in user settings.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: camerashaketype]`

`/camerashake stop [player: target]`

## Usage

### Add

`/camerashake add <player: target> [intensity: float] [seconds: float] [shakeType: camerashaketype]`

Adds shaking to a player's camera with optional `intensity`,  `seconds`, and `shakeType`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| intensity | [Value](../CommandTypes/type_val.md) | Optional | Optional. Default `0.5`. A `float` that specifies the camera shake intensity with values from [0, 4]. |
| seconds | [Value](../CommandTypes/type_val.md) | Optional | Optional. A `float` that specifies how long the camera will shake. Default: `1.0`. |
| shakeType | camerashaketype | Optional | Optional. Either `positional` or `rotational` camera shake type. Default: `positional`. |

### Stop

`/camerashake stop [player: target]`

Stops the player camera's shaking.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| intensity | [Value](../CommandTypes/type_val.md) | Optional. Default `0.5`. A `float` that specifies the camera shake intensity with values from [0, 4]. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| seconds | [Value](../CommandTypes/type_val.md) | Optional. A `float` that specifies how long the camera will shake. Default: `1.0`. |
| shakeType | camerashaketype | Optional. Either `positional` or `rotational` camera shake type. Default: `positional`. |
