---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:attack_cooldown"
description: "Describes the minecraft:attack_cooldown entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:attack_cooldown

Adds a cooldown to an entity. The intention of this cooldown is to be used to prevent the entity from attempting to acquire new attack targets.


## Attack Cooldown Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_cooldown_complete_event | *not set* | String from a list of choices | Event to be run when the cooldown is complete. |  | 
| attack_cooldown_time | *not set* | Range of floats | Amount of time in seconds for the cooldown. Can be specified as a number or a pair of numbers (min and max). |  | 

## Samples
