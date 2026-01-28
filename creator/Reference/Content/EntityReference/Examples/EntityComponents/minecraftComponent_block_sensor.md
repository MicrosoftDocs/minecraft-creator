---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:block_sensor"
description: "Describes the minecraft:block_sensor entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:block_sensor

Fires off a specified event when a block in the block list is broken within the sensor range.


## Block Sensor Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| on_break | *not set* | Array of [Break](#break) items | List of blocks to watch for being broken to fire off a specified event. If a block is in multiple lists, multiple events will fire. |  | 
| sensor_radius | 16 | Decimal number | The maximum radial distance in which a specified block can be detected. The biggest radius is 32.0. |  | 
| sources | *not set* | Minecraft filter | List of sources that break the block to listen for. If none are specified, all block breaks will be detected. |  | 

## Break

#### Block Break Entry Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_list | *not set* | Array of strings | List of blocks that trigger the on_block_broken event. |  | 
| on_block_broken | *not set* | String | Event to call when a block in block_list is broken. |  | 

## Samples
