---
author: mammerla
ms.author: mikeam
title: "xp Command"
description: "Description and usage of the /xp command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/xp` Command

Adds or removes player experience.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/xp <amount: int> [player: target]`

`/xp <amount: int> [player: target]`

## Usage

### Add XP

`/xp <amount: int> [player: target]`

`Add` a given positive `integer` amount of `xp` to the target `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| amount | [Integer](../CommandTypes/type_int.md) | Required | An `integer` of the experience to add to the player. May only be negative to remove xp. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player who should receive or lose xp. |

### Remove XP

`/xp <amount: int> [player: target]`

`Remove` a given negative `integer` amount of `xp` from the target `player`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| amount | [Integer](../CommandTypes/type_int.md) | Required | An `integer` of the experience to add to the player. May only be negative to remove xp. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | Optional | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player who should receive or lose xp. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amount | [Integer](../CommandTypes/type_int.md) | An `integer` of the experience to add to the player. May only be negative to remove xp. |
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player who should receive or lose xp. |
