---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:permute_type
description: "A reference document detailing the 'permute_type' entity filter"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - Permute Type

Allows players to specify the permutations of an entity that will spawn.

## Parameters

|Name|Default Value |Type |Description |
|:-----------|:-----------|:-----------|:-----------|
|weight| *not set* |Integer | The percentage of 100 of a type of entity that should spawn. If there are multiple weights, they must add up to 100. |
|entity_type| *not set* |String | The type of entity to spawn. |
|guaranteed_count| *not set* | Integer|  Causes entities to spawn with a guaranteed_count before entities that do not have this spawn condition.|