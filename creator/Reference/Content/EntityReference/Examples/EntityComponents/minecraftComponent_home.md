---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:home
ms.prod: gaming
---

# Entity Documentation - minecraft:home

`minecraft:home` saves a home point of interest for when the the entity is spawned.

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

### bee

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/bee.json" range="433-439":::

## Vanilla entities using `minecraft:home`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)