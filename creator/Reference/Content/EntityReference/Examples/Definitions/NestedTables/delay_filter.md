---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:delay_filter
description: "A reference document detailing the 'delay_filter' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:delay_filter

Allows players to set specific time delays before entities will spawn.

## Parameters

|Name |Default Value|Type |Description |
|:-----------|:-----------|:-----------|:-----------|
| max| 0 |Integer | The maximum delay that an entity spawns. |
| min| 0 |Integer | The minimum delay that an entity spawns. |
|identifier| "" | String| Required. The identifier of the entity that will spawn.|
|spawn_chance| 100 | Integer| The percent chance that this entity will spawn.|
