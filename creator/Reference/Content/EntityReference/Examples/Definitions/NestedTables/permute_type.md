---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:permute_type
ms.prod: gaming
---

# Entity Documentation - Permute Type

This component allows the players to specify the permutations of a mob that will spawn.

## Parameters

|Name|Default Value |Type |Description |
|:-----------|:-----------|:-----------|:-----------|
|weight| *not set* |Integer | The percentage of 100 of a type of mob that should spawn. If there are multiple weights, they must add up to 100. |
|entity_type| *not set* |String | The type of mob to spawn. |
|guaranteed_count| *not set* | String|  Causes mobs to spawn with a guaranteed_count before mobs that do not have this spawn condition.|