---
author: mammerla
ms.author: mikeam
title: "playsound Command"
description: "Description and usage of the /playsound command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/playsound` Command

Plays a sound.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/playsound <sound: id> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]`

## Usage

`/playsound <sound: id> [player: target] [position: x y z] [volume: float] [pitch: float] [minimumVolume: float]`

Play a `sound` with optional `player`, `position`, `volume`, `pitch`, and `minimum volume`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| sound | [id](../CommandTypes/type_id.md) | Required | Required. A `string` that defines the sound. Should be defined in `sound.definitions.josn`. |
| player | [target](../CommandTypes/type_selection.md) | Optional | Optional. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| position | [x y z](../CommandTypes/type_position_float.md) | Optional | Optional. `Vector` [x y z] of the position sounds originate from. |
| volume | [float](../CommandTypes/type_val.md) | Optional | Optional. A `float` that specifies the volume. Between 0.0 and 1.0. Below 1.0 diminishes the sound. 0 is inaudible. Default: `1.0`. |
| pitch | [float](../CommandTypes/type_val.md) | Optional | Optional. A `float` that specifies the pitch. Must bet between 0.0 and 256. Default: `1.0`. |
| minimumVolume | [float](../CommandTypes/type_val.md) | Optional | A `float` that specifies the volume. Between 0.0 and 1.0. Default: `0.0`. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| minimumVolume | [float](../CommandTypes/type_val.md) | A `float` that specifies the volume. Between 0.0 and 1.0. Default: `0.0`. |
| pitch | [float](../CommandTypes/type_val.md) | Optional. A `float` that specifies the pitch. Must bet between 0.0 and 256. Default: `1.0`. |
| player | [target](../CommandTypes/type_selection.md) | Optional. A player name `string` or [`target selector`](https://learn.microsoft.com/minecraft/creator/documents/commandsintroduction#target-selectors) to identify the player. |
| position | [x y z](../CommandTypes/type_position_float.md) | Optional. `Vector` [x y z] of the position sounds originate from. |
| sound | [id](../CommandTypes/type_id.md) | Required. A `string` that defines the sound. Should be defined in `sound.definitions.josn`. |
| volume | [float](../CommandTypes/type_val.md) | Optional. A `float` that specifies the volume. Between 0.0 and 1.0. Below 1.0 diminishes the sound. 0 is inaudible. Default: `1.0`. |
