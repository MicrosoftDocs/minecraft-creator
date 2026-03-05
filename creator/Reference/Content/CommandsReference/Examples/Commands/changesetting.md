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

`/changesetting <setting: boolsettingname> <value: Boolean>`

`/changesetting <setting: boolsettingname> <value: Boolean>`

`/changesetting <setting: boolsettingname> <value: Boolean>`

## Usage

### Allow-cheats

`/changesetting <setting: boolsettingname> <value: Boolean>`

Allows cheats using `Boolean` .

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| setting | boolsettingname | Required |  |
| value | [Boolean](../CommandTypes/type_boolean.md) | Required | Boolean value |

### Difficulty (difficulty value)

`/changesetting <setting: boolsettingname> <value: Boolean>`

Changes difficulty using difficulty value from the [Difficulty enum](../enums/Difficulty.md).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| setting | boolsettingname | Required |  |
| value | [Boolean](../CommandTypes/type_boolean.md) | Required | Boolean value |

### Difficulty (integer value)

`/changesetting <setting: boolsettingname> <value: Boolean>`

Changes difficulty using difficulty `integer` from the [Difficulty enum](../enums/Difficulty.md).

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| setting | boolsettingname | Required |  |
| value | [Boolean](../CommandTypes/type_boolean.md) | Required | Boolean value |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| setting | boolsettingname |  |
| value | [Boolean](../CommandTypes/type_boolean.md) | Boolean value |
