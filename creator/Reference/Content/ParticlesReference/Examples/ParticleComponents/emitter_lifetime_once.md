---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_lifetime_once"
description: "Describes the minecraft:emitter_lifetime_once particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_lifetime_once

Creates a single-burst particle effect that runs once and stops. The emitter activates for the specified active_time duration, emits particles, then terminates. Ideal for impact effects like explosions, block breaking, critical hits, potion splashes, and other momentary visual feedback.


## Client Particles Emitter Lifetime Once Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. | 
| active_time (Active Time) | *not set* | Key/item pairs of [Active Time (Active Time)](#active-time-active-time) items |  | 
| active_time (as Decimal number) | *not set* | Decimal number |  | 

### Active Time (Active Time)

#### Active Time Properties

**JSON path:** `active_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 