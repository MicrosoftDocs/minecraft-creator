---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: weather Command
description: Description and usage of the weather command
---
# `/weather` Command
Sets the weather in the environment. See more in the [Popular Commands documentation](https://learn.microsoft.com/minecraft/creator/documents/commandspopularcommands#weather).

<table>
  <tr>
    <th>Permission Level</th>
    <td>Game Directors</td>
  </tr>
  <tr>
    <th>Requires Cheats?</th>
    <td>Yes</td>
  </tr>
</table>

## Usage
### Set weather
`/weather <type: WeatherType> [duration: int]`

`Set` a weather `type` for an optional `duration`.

### Query weather
`/weather query`

`Query` the current `weather`.

## Arguments
- `duration`: int
An optional `integer` that will a random number between 300 and 900 seconds if not specified.
- `type`: WeatherType
An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes).

## Enums
### `WeatherType`
An `enum` of `clear`, `rain` (will cause snow in cold biomes), or `thunder` (will cause blizzard in cold biomes).

#### Values
- `clear`
Clear - no precipitation
- `rain`
Rain - Precipitation, or snow in cold biomes
- `thunder`
Thunder - Lightning and sky noises, blizzard in cold biomes
