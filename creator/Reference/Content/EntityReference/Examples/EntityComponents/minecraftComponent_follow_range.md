---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:follow_range
description: "A reference document detailing the 'follow_range' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:follow_range

`minecraft:follow_range` defines the range, in blocks, that a mob will pursue a target.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|value| *not set* | Integer| The radius of the area of blocks the entity will attempt to stay within around a target. |
|max| *not set*| Integer| Maximum distance the mob will go from a target. |

## Example

```json
"minecraft:follow_range": {
        "value": 48,
        "max": 48
      }
```

## Vanilla entities examples

### allay

```json
"minecraft:follow_range": {
        "value": 1024
      }
```

## Vanilla entities using `minecraft:follow_range`

- [allay](../../../../Source/VanillaBehaviorPack_Snippets/entities/allay.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [fish](../../../../Source/VanillaBehaviorPack_Snippets/entities/fish.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [trader_llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/trader_llama.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [warden](../../../../Source/VanillaBehaviorPack_Snippets/entities/warden.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
