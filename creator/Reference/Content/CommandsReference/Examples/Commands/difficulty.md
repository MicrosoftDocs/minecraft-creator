---
author: mammerla
ms.author: mikeam
title: "difficulty Command"
description: "Description and usage of the /difficulty command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/difficulty` Command

Sets the difficulty level (Peaceful, Easy, Normal, Hard) using difficulty enum or integer.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/difficulty <difficulty: difficulty>`

`/difficulty <difficulty: difficulty>`

## Usage

### Difficulty using difficulty enum: p, peaceful, e, easy, n, normal, h, hard

`/difficulty <difficulty: difficulty>`

Set the difficulty using the `Difficulty` `enum`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| difficulty | [Difficulty](../CommandTypes/type_difficulty.md) | Required | Set the difficulty using the Difficult enum: `p` or `peaceful`, `e` or `easy`, `n` or `normal`, `h` or `hard`. |

### Difficulty using integer: 0 (Peaceful), 1 (Easy), 2 (Normal), 3 (Hard).

`/difficulty <difficulty: difficulty>`

Set the difficulty using an integer.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| difficulty | [Difficulty](../CommandTypes/type_difficulty.md) | Required | Set the difficulty using the Difficult enum: `p` or `peaceful`, `e` or `easy`, `n` or `normal`, `h` or `hard`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| difficulty | [Difficulty](../CommandTypes/type_difficulty.md) | Set the difficulty using the Difficult enum: `p` or `peaceful`, `e` or `easy`, `n` or `normal`, `h` or `hard`. |
