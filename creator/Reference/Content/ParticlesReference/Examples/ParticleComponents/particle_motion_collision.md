---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_motion_collision"
description: "Describes the minecraft:particle_motion_collision particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_motion_collision

Enables particle collision with world geometry. Configure collision radius, bounce coefficient (how much velocity is retained), friction to slow sliding, and whether to expire on impact. Essential for physical particles like rain hitting ground, debris bouncing off surfaces, or arrows embedding in blocks.


## Client Particles Particle Motion Collision Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| coefficient_of_restitution | 0 | Decimal number |  | 
| collision_drag | 0 | Decimal number |  | 
| collision_radius | *not set* | Decimal number |  | 
| enabled | 1 | Keyed set of strings |  | 
| enabled (Enabled) | *not set* | Key/item pairs of [Enabled (Enabled)](#enabled-enabled) items |  | 
| enabled (as Decimal number) | *not set* | Decimal number |  | 
| events (Collision Event) | *not set* | Array of [Events](#events) items |  | 
| events (Events) | *not set* | [Events (Events)](#events-events) item |  | 
| expire_on_contact | false | Boolean true/false |  | 

### Enabled (Enabled)

#### Enabled Properties

**JSON path:** `enabled`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Events

#### Collision Event Properties

**JSON path:** `events`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event | *not set* | String |  | 
| min_speed | *not set* | Decimal number |  | 

### Events (Events)

#### Events Properties

**JSON path:** `events`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event | *not set* | Object |  | 
| min_speed | 2 | Decimal number |  | 