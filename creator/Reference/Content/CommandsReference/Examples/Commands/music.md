---
author: mammerla
ms.author: mikeam
title: "music Command"
description: "Description and usage of the /music command"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# `/music` Command

Allows you to control playing music tracks.

| | |
|:---|:---|
| **Permission Level** | Game Directors |
| **Requires Cheats** | Yes |

## Syntax Overview

`/music queue <trackName: id> [volume: float] [fadeSeconds: float] [repeatMode: musicrepeatmode]`

`/music play <trackName: id> [volume: float] [fadeSeconds: float] [repeatMode: musicrepeatmode]`

`/music stop [fadeSeconds: float]`

`/music volume <volume: float>`

### Queue track

`/music queue <trackName: id> [volume: float] [fadeSeconds: float] [repeatMode: musicrepeatmode]`

Queue a `track name` with an optional `volume`, `fade seconds`, and `repeat mode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| trackName | [Identifier](../CommandTypes/type_id.md) | Required | Required. A `string` to specify the track to play. Must be a single word such as `record.cat`. |
| volume | [Value](../CommandTypes/type_val.md) | Optional | A `float` number to specify the volume of the music track. |
| fadeSeconds | [Value](../CommandTypes/type_val.md) | Optional | A `float` number that specifies the duration the track fades in or out. |
| repeatMode | musicrepeatmode | Optional | Optional. An `enum` that specifies how the music is played. Must be `play_once` (default) or `loop`. |

### Play track

`/music play <trackName: id> [volume: float] [fadeSeconds: float] [repeatMode: musicrepeatmode]`

Play a `track name` with an optional `volume`, `fade seconds`, and `repeat mode`.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| trackName | [Identifier](../CommandTypes/type_id.md) | Required | Required. A `string` to specify the track to play. Must be a single word such as `record.cat`. |
| volume | [Value](../CommandTypes/type_val.md) | Optional | A `float` number to specify the volume of the music track. |
| fadeSeconds | [Value](../CommandTypes/type_val.md) | Optional | A `float` number that specifies the duration the track fades in or out. |
| repeatMode | musicrepeatmode | Optional | Optional. An `enum` that specifies how the music is played. Must be `play_once` (default) or `loop`. |

### Stop music

`/music stop [fadeSeconds: float]`

Stop the music with optional `fade seconds` value.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| fadeSeconds | [Value](../CommandTypes/type_val.md) | Optional | A `float` number that specifies the duration the track fades in or out. |

### Adjust volume

`/music volume <volume: float>`

Adjust the volume with required `volume` value.

| Argument | Type | Required | Description |
|:---------|:-----|:---------|:------------|
| volume | [Value](../CommandTypes/type_val.md) | Required | A `float` number to specify the volume of the music track. |

## Arguments Reference

| Argument | Type | Description |
|:---------|:-----|:------------|
| fadeSeconds | [Value](../CommandTypes/type_val.md) | A `float` number that specifies the duration the track fades in or out. |
| repeatMode | musicrepeatmode | Optional. An `enum` that specifies how the music is played. Must be `play_once` (default) or `loop`. |
| trackName | [Identifier](../CommandTypes/type_id.md) | Required. A `string` to specify the track to play. Must be a single word such as `record.cat`. |
| volume | [Value](../CommandTypes/type_val.md) | A `float` number to specify the volume of the music track. |
