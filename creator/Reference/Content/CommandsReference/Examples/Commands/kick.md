---
author: mammerla
ms.author: mikeam
title: "kick Command"
description: "Description and usage of the /kick command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/kick` Command

Kicks a player from the server.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | No |

## Syntax Overview

`/kick <name: target> <reason: message_root>`

## Usage

`/kick <name: target> <reason: message_root>`

Kick a player with `name` and `reason`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| name | [Entity Selector](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| reason | [Message](../CommandTypes/type_message_root.md) | Required | A `message` in plain text that explains why player was kicked. Default: `Kicked by an operator`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| name | [Entity Selector](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| reason | [Message](../CommandTypes/type_message_root.md) | A `message` in plain text that explains why player was kicked. Default: `Kicked by an operator`. |
