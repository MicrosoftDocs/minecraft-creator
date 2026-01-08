---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:mob_effect"
description: "Describes the minecraft:mob_effect entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:mob_effect

A component that applies a mob effect to entities that get within range.


## Mob Effect Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| ambient | false | Boolean true/false | If the effect is considered an ambient effect (like the ones applied by Beacons or Conduits). |  | 
| cooldown_time | 0 | Integer number | Time in seconds to wait between each application of the effect. |  | 
| effect_range | 0.2 | Decimal number | How close a hostile entity must be to have the mob effect applied. |  | 
| effect_time | 10 | Integer number | How long the applied mob effect lasts in seconds. Can also be set to "infinite" |  | 
| entity_filter | *not set* | Minecraft filter | The set of entities that are valid to apply the mob effect to. |  | 
| mob_effect | *not set* | String | The mob effect that is applied to entities that enter this entities effect range. |  | 

## Samples
