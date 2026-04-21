---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.follow_target_leader"
description: "Describes the minecraft:behavior.follow_target_leader ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.follow_target_leader

Allows mob to move towards its target leader.


## Follow Target Leader Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| always_look_for_leader | false | Boolean true/false | If true, the mob will always search for a valid leader to follow if none is found or current leader is not valid anymore | 
| follow_distance | 0 | Decimal number | Defines the distance in blocks the mob will stay from its target while following. | 
| leader_filters | *not set* | Minecraft filter | The filters to use when determining if a mob is a suitable leader or not. | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_cooldown | 20 | Integer number | Number of ticks that must pass before a new search is initiated after a target is not found, lost, or becomes invalid. | 
| within_radius | 0 | Decimal number | Defines the maximum distance in blocks a mob can get from its target leader before giving up trying to follow it. | 