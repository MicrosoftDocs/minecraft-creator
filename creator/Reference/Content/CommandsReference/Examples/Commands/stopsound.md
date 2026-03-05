---
author: mammerla
ms.author: mikeam
title: "stopsound Command"
description: "Description and usage of the /stopsound command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/stopsound` Command

Stops a sound.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/stopsound <player: target> [sound: id]`

## Usage

`/stopsound <player: target> [sound: id]`

Stop a sound for a `player` with an optional `sound` `string` .

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sound | [Identifier](../CommandTypes/type_id.md) | Optional | A `string` from the sound `enum` of the sound to stop. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| player | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| sound | [Identifier](../CommandTypes/type_id.md) | A `string` from the sound `enum` of the sound to stop. |
