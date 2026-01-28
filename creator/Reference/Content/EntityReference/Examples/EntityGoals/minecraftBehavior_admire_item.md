---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.admire_item"
description: "Describes the minecraft:behavior.admire_item ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.admire_item

Enables the mob to admire items that have been configured as admirable.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Admire Item (minecraft:admire_item)](../EntityComponents/minecraftComponent_admire_item.md)
> 

## Admire Item Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| admire_item_sound | *not set* | String | The sound event to play when admiring the item |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| sound_interval | 0 | Integer number | The range of time in seconds to randomly wait before playing the sound again. Can be a number, an array [min, max], or an object with range_min and range_max. |  | 
| sound_interval (Alternate 1) | *not set* | Array of [Sound Interval](#sound-interval) items |  |  | 
| sound_interval (Alternate 2) | *not set* | [Sound Interval](#sound-interval) item |  |  | 

## Sound Interval

#### Sound Interval Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| 0 | *not set* | Integer number |  |  | 
| 1 | *not set* | Integer number |  |  | 

## Samples
