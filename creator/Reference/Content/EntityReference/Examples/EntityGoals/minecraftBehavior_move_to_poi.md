---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.move_to_poi"
description: "Describes the minecraft:behavior.move_to_poi ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.move_to_poi

Allows the mob to move to a POI if able to.


## Move To Poi Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| poi_type | *not set* | String | Tells the goal what POI type it should be looking for |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this AI Goal |  | 