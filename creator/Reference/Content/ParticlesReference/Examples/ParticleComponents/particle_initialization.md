---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_initialization"
description: "Describes the minecraft:particle_initialization particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_initialization

Runs Molang expressions when each individual particle spawns to initialize per-particle variables. Unlike emitter_initialization which runs once per emitter, this executes for every particle—enabling randomized properties, unique trajectories, or per-particle state that persists through the particle's lifetime.


## Client Particles Particle Initialization Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| per_render_expression | 0 | Keyed set of strings |  | 
| per_render_expression (as Named set of objects) | *not set* | Key/item pairs of [Per Render Expression (Item Molang Expression)](#item-molang-expression) items |  | 
| per_render_expression (as Decimal number) | *not set* | Decimal number |  | 
| per_update_expression | 0 | Keyed set of strings |  | 
| per_update_expression (as Named set of objects) | *not set* | Key/item pairs of [Per Update Expression (Item Molang Expression)](#item-molang-expression) items |  | 
| per_update_expression (as Decimal number) | *not set* | Decimal number |  | 

### Item Molang Expression

#### Item Molang Expression Properties

**JSON path:** `per_render_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 