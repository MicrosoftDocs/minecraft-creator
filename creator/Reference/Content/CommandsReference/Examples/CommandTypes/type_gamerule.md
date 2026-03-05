---
author: mammerla
ms.author: mikeam
title: "Game Rule - Command Argument Type"
description: "Reference for the Game Rule command argument type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Game Rule

A world setting that can be changed.

**Format:** `gamerule_name`

## Examples

### Boolean Rules

| Example | Description |
|:--------|:------------|
| `doDaylightCycle` | Whether time passes |
| `doWeatherCycle` | Whether weather changes |
| `doMobSpawning` | Whether mobs spawn naturally |
| `keepInventory` | Keep items on death |
| `mobGriefing` | Whether mobs can change blocks |
| `doFireTick` | Whether fire spreads |
| `commandBlockOutput` | Show command block output |
| `showCoordinates` | Show coordinates on screen |

### Integer Rules

| Example | Description |
|:--------|:------------|
| `randomTickSpeed` | Speed of random block updates (default 1) |
| `spawnRadius` | Radius around spawn for respawning |
