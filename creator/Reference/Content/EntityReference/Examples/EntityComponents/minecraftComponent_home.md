---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:home
description: "A reference document detailing the 'home' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:home

`minecraft:home` saves a home position for when the entity is spawned.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| home_block_list | *not set* | List | Optional list of blocks that can be considered a valid home. If no such block longer exists at that position, the home restriction is removed. Example syntax: minecraft:sand. Not supported: minecraft:sand:1. |
| restriction_radius | 0 | Integer | Optional radius that the entity will be restricted to in relation to its home. |
| restriction_type | *not set* | String | Defines how the the entity will be restricted to its home position. The possible values are: "none" which poses no restriction, "random_movement" which restricts randomized movement to be around the home position, and "all_movement", which restricts any kind of movement to be around the home position. However, entities that somehow got too far away from their home will always be able to move closer to it, if prompted to do so. |


## Example

```json
"minecraft:home":{
    "home_block_list": [],
    "restriction_radius":  -1
}
```

## Vanilla entities examples

### elder_guardian

```json
"minecraft:home": {
    "restriction_radius": 16
}
```

## Vanilla entities using `minecraft:home`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
