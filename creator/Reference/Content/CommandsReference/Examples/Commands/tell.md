---
author: mammerla
ms.author: mikeam
title: "tell Command"
description: "Description and usage of the /tell command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/tell` Command

Sends a private message to one or more players.

**Aliases:** `/w`, `/msg`

| | |
|:---|:---|
| **Permission Level** | Any |
| **Requires Cheats** | No |

## Syntax Overview

`/tell <target: target> <message: message_root>`

## Usage

`/tell <target: target> <message: message_root>`

`Tell` a target `player` a `message`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [Entity Selector](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell. |
| message | [Message](../CommandTypes/type_message_root.md) | Required | A `string` of the message. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| message | [Message](../CommandTypes/type_message_root.md) | A `string` of the message. |
| target | [Entity Selector](../CommandTypes/type_selection.md) | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell. |
