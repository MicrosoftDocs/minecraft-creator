---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:home
description: "A reference document detailing the 'home' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:home

`minecraft:home` saves a home point of interest for when the entity is spawned.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| home_block_list| *not set*| List| Optional block list that the home position will be associated with. If any of the blocks no longer exist at that position, the home restriction is removed. Example syntax: minecraft:sand.  Not supported: minecraft:sand:1 |
| restriction_radius| -1| Integer| The radius that the entity will be restricted to in relation to its home |

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
