---
author: mammerla
ms.author: mikeam
title: "changesetting Command"
description: "Description and usage of the /changesetting command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/changesetting` Command

Changes a setting on the dedicated server while it's running.

| | |
|:---|:---|
| **Permission Level** | Owner |
| **Requires Cheats** | Yes |

## Syntax Overview

`/changesetting allowcheats <value: Boolean>`

`/changesetting difficulty <value: difficulty>`

`/changesetting difficulty <value: int>`

## Usage

### Allow cheats

`/changesetting allowcheats <value: Boolean>`

Enables or disables cheats on the server.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| value | [Boolean](../CommandTypes/type_boolean.md) | Required | The value to set. |

### Difficulty (enum)

`/changesetting difficulty <value: difficulty>`

Changes the server difficulty using a difficulty name.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| value | difficulty | Required | The difficulty value to set. |

### Difficulty (integer)

`/changesetting difficulty <value: int>`

Changes the server difficulty using an integer value (0=Peaceful, 1=Easy, 2=Normal, 3=Hard).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| value | [int](../CommandTypes/type_int.md) | Required | The difficulty value as an integer (0=Peaceful, 1=Easy, 2=Normal, 3=Hard). |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| value | [Boolean](../CommandTypes/type_boolean.md) | The value to set. |
| value | difficulty | The difficulty value to set. |
| value | [int](../CommandTypes/type_int.md) | The difficulty value as an integer (0=Peaceful, 1=Easy, 2=Normal, 3=Hard). |
