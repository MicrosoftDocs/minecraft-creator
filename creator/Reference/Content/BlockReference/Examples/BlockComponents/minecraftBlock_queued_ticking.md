---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:queued_ticking"
description: "Describes the minecraft:queued_ticking block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:queued_ticking

> [!IMPORTANT]
> This type is now deprecated, and no longer in use in the latest versions of Minecraft.

Triggers the specified event, either once, or at a regular interval equal to a number of ticks randomly chosen from the interval_range provided.


## Queued Ticking Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| interval_range | *not set* | Array of strings | A range of values, specified in ticks, that will be used to decide the interval between times this event triggers. Each interval will be chosen randomly from the range, so the times between this event triggering will differ given an interval_range of two different values. If the values in the interval_range are the same, the event will always be triggered after that number of ticks. |  | 
| looping | true | Boolean true/false | Does the event loop? If false, the event will only be triggered once, after a delay equal to a number of ticks randomly chosen from the interval_range. If true, the event will loop, and each interval between events will be equal to a number of ticks randomly chosen from the interval_range. |  | 
| on_tick | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event that will be triggered once or on an interval. |  | 