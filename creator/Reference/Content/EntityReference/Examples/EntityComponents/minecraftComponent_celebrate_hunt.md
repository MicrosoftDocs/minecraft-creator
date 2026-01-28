---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:celebrate_hunt"
description: "Describes the minecraft:celebrate_hunt entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:celebrate_hunt

Specifies hunt celebration behaviour.


## Celebrate Hunt Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| broadcast | true | Boolean true/false | If true, celebration will be broadcasted to other entities in the radius. |  | 
| celeberation_targets | *not set* | Minecraft filter | The list of conditions that target of hunt must satisfy to initiate celebration. |  | 
| celebrate_sound | *not set* | String | The sound event to play when the mob is celebrating |  | 
| duration | 4 | Integer number | Duration, in seconds, of celebration |  | 
| radius | 16 | Decimal number | If broadcast is enabled, specifies the radius in which it will notify other entities for celebration. |  | 
| sound_interval | 0 | Range of integers | The range of time in seconds to randomly wait before playing the sound again |  | 

## Samples
