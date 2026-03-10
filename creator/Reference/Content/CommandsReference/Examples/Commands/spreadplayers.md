---
author: mammerla
ms.author: mikeam
title: "spreadplayers Command"
description: "Description and usage of the /spreadplayers command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/spreadplayers` Command

Teleports entities to random locations.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/spreadplayers <x: rotation> <z: rotation> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: rotation]`

## Usage

`/spreadplayers <x: rotation> <z: rotation> <spreadDistance: float> <maxRange: float> <victim: target> [maxHeight: rotation]`

Spawn players at a particular `x` and `z` rotation with a defined `distance`, `max range`, and `players`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| x | [rotation](../CommandTypes/type_rval.md) | Required | The initial `x` position of the player. |
| z | [rotation](../CommandTypes/type_rval.md) | Required | The initial `z` position of the player. |
| spreadDistance | [float](../CommandTypes/type_val.md) | Required | The distance between players when they spawn. Default: `0.0`. |
| maxRange | [float](../CommandTypes/type_val.md) | Required | The furthest distance that players can spawn from each other. Default: `0.0`. |
| victim | [target](../CommandTypes/type_selection.md) | Required | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| maxHeight | [rotation](../CommandTypes/type_rval.md) | Optional | The maximum height that players can spawn. Default: `0.0`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| maxHeight | [rotation](../CommandTypes/type_rval.md) | The maximum height that players can spawn. Default: `0.0`. |
| maxRange | [float](../CommandTypes/type_val.md) | The furthest distance that players can spawn from each other. Default: `0.0`. |
| spreadDistance | [float](../CommandTypes/type_val.md) | The distance between players when they spawn. Default: `0.0`. |
| victim | [target](../CommandTypes/type_selection.md) | A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| x | [rotation](../CommandTypes/type_rval.md) | The initial `x` position of the player. |
| z | [rotation](../CommandTypes/type_rval.md) | The initial `z` position of the player. |
