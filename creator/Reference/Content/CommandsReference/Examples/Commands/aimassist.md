---
author: mammerla
ms.author: mikeam
title: "aimassist Command"
description: "Description and usage of the /aimassist command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/aimassist` Command

Enable Aim Assist.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: aimassisttargetmode] [preset id: id]`

`/aimassist <players: target> clear`

## Usage

### With x angle, y angle, max distance, target mode, preset id

`/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: aimassisttargetmode] [preset id: id]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |
| x angle | [Value](../CommandTypes/type_val.md) | Optional |  |
| y angle | [Value](../CommandTypes/type_val.md) | Optional |  |
| max distance | [Value](../CommandTypes/type_val.md) | Optional |  |
| target mode | aimassisttargetmode | Optional |  |
| preset id | [Identifier](../CommandTypes/type_id.md) | Optional |  |

### Basic usage

`/aimassist <players: target> clear`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [Entity Selector](../CommandTypes/type_selection.md) | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| max distance | [Value](../CommandTypes/type_val.md) |  |
| players | [Entity Selector](../CommandTypes/type_selection.md) |  |
| preset id | [Identifier](../CommandTypes/type_id.md) |  |
| target mode | aimassisttargetmode |  |
| x angle | [Value](../CommandTypes/type_val.md) |  |
| y angle | [Value](../CommandTypes/type_val.md) |  |
