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


## Minecraft Durability Sensor Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| durability | *not set* | Integer number | The effects are emitted when the item durability value is less than or equal to this value. |  | 
| durability_thresholds | *not set* | [Durability Thresholds](#durability-thresholds-item-type) item | The list of both durability thresholds and effects emitted when each threshold is met. When multiple thresholds are met, only the threshold with the lowest durability after applying the damage is considered. Value must have at least 1 items. |  | 
| particle_type | *not set* | String | Particle effect to emit when the threshold is met. |  | 
| sound_event | *not set* | String | Sound effect to emit when the threshold is met. |  | 

## Durability Thresholds item type
Defines both the durability threshold, and the effects emitted when that threshold is met.


#### Minecraft Durability Sensor Durability Threshold Item Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| durability | *not set* | Integer number | The effects are emitted when the item durability value is less than or equal to this value. |  | 
| particle_type | *not set* | String | Particle effect to emit when the threshold is met. |  | 
| sound_event | *not set* | String | Sound effect to emit when the threshold is met. |  | 