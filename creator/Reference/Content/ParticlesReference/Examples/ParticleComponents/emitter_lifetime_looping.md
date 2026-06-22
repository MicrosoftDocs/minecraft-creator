---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_lifetime_looping"
description: "Describes the minecraft:emitter_lifetime_looping particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_lifetime_looping

Creates repeating particle effects that cycle between active and dormant phases. The emitter runs for the active_time duration, pauses for sleep_time, then repeats indefinitely. Perfect for ambient effects like bubbling cauldrons, flickering torches, pulsing enchantment glows, or creature breathing animations.


## Client Particles Emitter Lifetime Looping Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. | 
| active_time (as Named set of objects) | *not set* | Key/item pairs of [Active Time (Item Molang Expression)](#item-molang-expression) items |  | 
| active_time (as Decimal number) | *not set* | Decimal number |  | 
| sleep_time | 0 | Molang | The time in seconds that the emitter sleeps between active periods. Can be a number or Molang expression. | 
| sleep_time (as Named set of objects) | *not set* | Key/item pairs of [Sleep Time (Item Molang Expression)](#item-molang-expression) items |  | 
| sleep_time (as Decimal number) | *not set* | Decimal number |  | 

### Item Molang Expression

#### Item Molang Expression Properties

**JSON path:** `active_time`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 