---
author: mammerla
ms.author: mikeam
title: "gamerule Command"
description: "Description and usage of the /gamerule command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/gamerule` Command

Sets or queries a game rule value. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#gamerule).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | No |

## Syntax Overview

`/gamerule`

`/gamerule <rule: boolgamerule> [value: Boolean]`

`/gamerule <rule: boolgamerule> [value: Boolean]`

## Usage

### Check game rule

`/gamerule`

Check the current game rule.

### Set game rule, Boolean

`/gamerule <rule: boolgamerule> [value: Boolean]`

Set a gamerule using a `Boolean`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| rule | boolgamerule | Required | Boolean game rule setting |
| value | [Boolean](../CommandTypes/type_boolean.md) | Optional | Boolean value |

### Set game rule, integer

`/gamerule <rule: boolgamerule> [value: Boolean]`

Set a gamerule using an `integer`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| rule | boolgamerule | Required | Boolean game rule setting |
| value | [Boolean](../CommandTypes/type_boolean.md) | Optional | Boolean value |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| rule | boolgamerule | Boolean game rule setting |
| value | [Boolean](../CommandTypes/type_boolean.md) | Boolean value |
