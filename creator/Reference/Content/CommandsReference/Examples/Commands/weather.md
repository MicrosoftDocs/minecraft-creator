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

## Syntax Overview

`/weather <type: weathertype> [duration: int]`

`/weather <query: weatherquery>`

## Usage

### Set weather

`/weather <type: weathertype> [duration: int]`

`Set` a weather `type` for an optional `duration`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| type | weathertype | Required | An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes). |
| duration | [Integer](../CommandTypes/type_int.md) | Optional | An optional `integer` that will a random number between 300 and 900 seconds if not specified. |

### Query weather

`/weather <query: weatherquery>`

`Query` the current `weather`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| query | weatherquery | Required |  |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| duration | [Integer](../CommandTypes/type_int.md) | An optional `integer` that will a random number between 300 and 900 seconds if not specified. |
| query | weatherquery |  |
| type | weathertype | An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes). |
