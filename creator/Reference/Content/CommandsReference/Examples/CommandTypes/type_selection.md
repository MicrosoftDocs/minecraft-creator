---
author: mammerla
ms.author: mikeam
title: "Entity Selector - Command Argument Type"
description: "Reference for the Entity Selector command argument type"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Selector

Targets one or more entities using selector syntax. Selectors start with @ followed by a letter indicating the type of selection.

**Format:** `@a, @e, @p, @r, @s, or @e[type=...]`

## Examples

### Values

| Example | Description |
|:--------|:------------|
| `@a` | All players in the world |
| `@e` | All entities (players, mobs, items, etc.) |
| `@p` | Nearest player to the command's execution point |
| `@r` | Random player |
| `@s` | The entity executing the command (self) |
| `@e[type=minecraft:pig]` | All pigs |
| `@a[r=10]` | All players within 10 blocks |
| `@e[name="Bob"]` | All entities named Bob |
| `@e[type=!minecraft:player]` | All non-player entities |

### Filters

| Example | Description |
|:--------|:------------|
| `type=minecraft:zombie` | Filter by entity type identifier |
| `name="MyPet"` | Filter by entity's custom name |
| `r=10` | Maximum distance (radius) from execution point |
| `rm=5` | Minimum distance from execution point |
| `x=0,y=64,z=0` | Center point for distance calculations |
| `dx=10,dy=5,dz=10` | Volume dimensions for area selection |
| `scores={score1=10,score2=5..10}` | Filter by scoreboard values |
| `tag=marked` | Filter by entity tag |
| `c=3` | Limit number of entities selected |
| `l=30,lm=10` | Filter by experience level (max/min) |
| `m=survival` | Filter by game mode |
| `rx=90,rxm=-90` | Filter by X rotation (pitch) max/min |
| `ry=180,rym=-180` | Filter by Y rotation (yaw) max/min |
| `family=monster` | Filter by entity family type |
| `hasitem={item=diamond,quantity=1..}` | Filter by inventory contents |
