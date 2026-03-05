---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:directionsettings_proxy"
description: "Describes the minecraft:directionsettings_proxy particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:directionsettings_proxy

Controls the initial direction and velocity of emitted particles. Direction settings determine whether particles spray outward from the emitter, inward toward its center, or follow a custom vector defined by Molang expressions. This affects effects like explosions (outward), implosions (inward), or directional streams like breath attacks and water flows.


## Client Particles DirectionSettings Proxy Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| custom_direction | *not set* | Keyed set of strings |  | 
| custom_direction (Custom Direction) | *not set* | Key/item pairs of [Custom Direction (Custom Direction)](#custom-direction-custom-direction) items |  | 
| custom_direction (as Decimal number) | *not set* | Decimal number |  | 
| min_speed_threshold | 0 | Decimal number |  | 
| mode | *not set* | [Mode](#mode-choices) choices |  | 

### Custom Direction (Custom Direction)

#### Custom Direction Properties

**JSON path:** `custom_direction`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| custom | Custom | |
| derive_from_velocity | Derive from velocity | |