---
author: mammerla
ms.author: mikeam
title: "time Command"
description: "Description and usage of the /time command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/time` Command

Changes or queries the world's game time. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#time).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/time <mode: timemodeadd> <amount: int>`

`/time <mode: timemodeadd> <amount: int>`

`/time <mode: timemodeadd> <time: timespec>`

`/time <mode: timemodeadd> <time: timespec>`

## Usage

### Add time, integer

`/time <mode: timemodeadd> <amount: int>`

`Add` an `integer` `amount` of `time` in-game.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | timemodeadd | Required |  |
| amount | [int](../CommandTypes/type_int.md) | Required | An `integer` of the time to add or set. Default: `0`. |

### Set time, integer

`/time <mode: timemodeadd> <amount: int>`

`Set` an `integer` `amount` of `time` in-game.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | timemodeadd | Required |  |
| amount | [int](../CommandTypes/type_int.md) | Required | An `integer` of the time to add or set. Default: `0`. |

### Set time spec

`/time <mode: timemodeadd> <time: timespec>`

`Set` a `time spec` `time` in-game.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | timemodeadd | Required |  |
| time | timespec | Required |  |

### Query time

`/time <mode: timemodeadd> <time: timespec>`

`Query` a `time` in `time query`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| mode | timemodeadd | Required |  |
| time | timespec | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| amount | [int](../CommandTypes/type_int.md) | An `integer` of the time to add or set. Default: `0`. |
| mode | timemodeadd |  |
| time | timespec |  |
