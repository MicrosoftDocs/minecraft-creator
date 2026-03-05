---
author: mammerla
ms.author: mikeam
title: "particle Command"
description: "Description and usage of the /particle command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/particle` Command

Creates a particle emitter.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/particle <effect: id> [position: x y z]`

## Usage

`/particle <effect: id> [position: x y z]`

Create a `particle` emitter with a required `effect` and optional `position`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| effect | [Identifier](../CommandTypes/type_id.md) | Required | A `string` that specifies the particle to create. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | Optional | A `vector` with `[x y z]` coordinates that specifies where to make the particle. Default: the position of the executor. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| effect | [Identifier](../CommandTypes/type_id.md) | A `string` that specifies the particle to create. |
| position | [Position (x y z)](../CommandTypes/type_position_float.md) | A `vector` with `[x y z]` coordinates that specifies where to make the particle. Default: the position of the executor. |
