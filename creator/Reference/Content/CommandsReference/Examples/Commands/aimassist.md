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

## Sub-commands

- [**set**](#set)
- [**clear**](#clear)

## set

`/aimassist <players: target> set [x angle: float] [y angle: float] [max distance: float] [target mode: aimassisttargetmode] [preset id: id]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [target](../CommandTypes/type_selection.md) | Required |  |
| x angle | [float](../CommandTypes/type_val.md) | Optional |  |
| y angle | [float](../CommandTypes/type_val.md) | Optional |  |
| max distance | [float](../CommandTypes/type_val.md) | Optional |  |
| target mode | aimassisttargetmode | Optional |  |
| preset id | [id](../CommandTypes/type_id.md) | Optional |  |

## clear

`/aimassist <players: target> clear`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| players | [target](../CommandTypes/type_selection.md) | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| max distance | [float](../CommandTypes/type_val.md) |  |
| players | [target](../CommandTypes/type_selection.md) |  |
| preset id | [id](../CommandTypes/type_id.md) |  |
| target mode | aimassisttargetmode |  |
| x angle | [float](../CommandTypes/type_val.md) |  |
| y angle | [float](../CommandTypes/type_val.md) |  |
