---
author: mammerla
ms.author: mikeam
title: "Items Documentation - minecraft:durability_sensor"
description: "Describes the minecraft:durability_sensor item component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Items Documentation - minecraft:durability_sensor

Enables an item to emit effects when it receives damage. Because of this, the item also needs a `minecraft:durability` component.


## Durability Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| durability | *not set* | Integer number | The effects are emitted when the item durability value is less than or equal to this value. |  | 
| durability_thresholds | *not set* | Array of objects | The list of both durability thresholds and effects emitted when each threshold is met. When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered. |  | 
| particle_type | *not set* | String | Particle effect to emit when the threshold is met. |  | 
| sound_event | *not set* | String | Sound effect to emit when the threshold is met. |  | 