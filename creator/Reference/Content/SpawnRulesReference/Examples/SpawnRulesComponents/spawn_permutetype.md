---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - minecraft:spawn_permutetype"
description: "Describes the minecraft:spawn_permutetype spawn rule component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation - minecraft:spawn_permutetype

Weighted spawn permutation that selects which entity variant to spawn. Each permutation has an entity identifier and weight—the game randomly chooses between permutations based on relative weights when the spawn rule activates. Creates natural mob variety in spawn distributions.


## Spawn PermuteType Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| entity_type |  | Object | Permutation to spawn when selected |  | 
| min_guaranteed | 0 | Integer number | The minimum number of this permutation to spawn |  | 
| weight | *not set* | Integer number | The ratio of all of the entities that are in the permutation |  | 