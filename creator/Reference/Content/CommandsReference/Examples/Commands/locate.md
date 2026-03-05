---
author: mammerla
ms.author: mikeam
title: "locate Command"
description: "Description and usage of the /locate command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/locate` Command

Finds the nearest specified biome or structure if it exists in the current dimension. Prints an error if it does not. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#locate).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/locate <subcommand: locatesubcommandstructure> <structure: structurefeature> [useNewChunksOnly: Boolean]`

`/locate <subcommand: locatesubcommandstructure> <biome: biome>`

## Usage

### With subcommand, structure, useNewChunksOnly

`/locate <subcommand: locatesubcommandstructure> <structure: structurefeature> [useNewChunksOnly: Boolean]`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| subcommand | locatesubcommandstructure | Required |  |
| structure | structurefeature | Required |  |
| useNewChunksOnly | [Boolean](../CommandTypes/type_boolean.md) | Optional | A `Boolean` to specify whether to use new chunks only. Default: `false`. |

### With subcommand, biome

`/locate <subcommand: locatesubcommandstructure> <biome: biome>`

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| subcommand | locatesubcommandstructure | Required |  |
| biome | [Biome](../CommandTypes/type_biome.md) | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| biome | [Biome](../CommandTypes/type_biome.md) |  |
| structure | structurefeature |  |
| subcommand | locatesubcommandstructure |  |
| useNewChunksOnly | [Boolean](../CommandTypes/type_boolean.md) | A `Boolean` to specify whether to use new chunks only. Default: `false`. |
