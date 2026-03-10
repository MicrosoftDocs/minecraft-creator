---
author: mammerla
ms.author: mikeam
title: "weather Command"
description: "Description and usage of the /weather command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/weather` Command

Sets the weather in the environment. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#weather).

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Sub-commands

- [**type**](#type) — An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes).
- [**query**](#query)

## type

An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes).

`/weather <type: weathertype> [duration: int]`

`Set` a weather `type` for an optional `duration`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| type | weathertype | Required | An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes). |
| duration | [int](../CommandTypes/type_int.md) | Optional | An optional `integer` that will a random number between 300 and 900 seconds if not specified. |

## query

`/weather <query: weatherquery>`

`Query` the current `weather`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| query | weatherquery | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| duration | [int](../CommandTypes/type_int.md) | An optional `integer` that will a random number between 300 and 900 seconds if not specified. |
| query | weatherquery |  |
| type | weathertype | An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes). |
