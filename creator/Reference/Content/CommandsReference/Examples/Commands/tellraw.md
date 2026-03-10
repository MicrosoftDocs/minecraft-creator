---
author: mammerla
ms.author: mikeam
title: "tellraw Command"
description: "Description and usage of the /tellraw command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/tellraw` Command

Sends a JSON message to players.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | No |

## Syntax Overview

`/tellraw <target: target> <raw json message: json>`

## Usage

`/tellraw <target: target> <raw json message: json>`

`Tell` a target `player` a JSON `message`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| target | [target](../CommandTypes/type_selection.md) | Required | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell. |
| raw json message | [json](../CommandTypes/type_json_object.md) | Required | `JSON` that specifies the message to send. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| raw json message | [json](../CommandTypes/type_json_object.md) | `JSON` that specifies the message to send. |
| target | [target](../CommandTypes/type_selection.md) | A `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player to tell. |
