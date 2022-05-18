---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:angry
ms.prod: gaming
---

# Entity Documentation - minecraft:angry

`minecraft:angry` defines the entity's 'angry' state using a timer.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| angry_sound|*not set* | String| The sound event to play when the mob is angry |
| broadcast_anger| false|Boolean|  If true, other entities of the same entity definition within the broadcastRange will also become angry |
|broadcast_anger_on_attack| false| Boolean|  If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob attacks |
|broadcast_anger_on_being_attacked| false| Boolean|  If true, other entities of the same entity definition within the broadcastRange will also become angry whenever this mob is attacked |
|[broadcast_filters](../FilterList.md)|*not set* | Minecraft Filter| Conditions that make this entry in the list valid |
|broadcast_range| 20| Integer|  Distance in blocks within which other entities of the same entity definition will become angry |
|broadcast_targets| |List | A list of entity families to broadcast anger to |
|duration| 25|  Integer| The amount of time in seconds that the entity will be angry |
|duration_delta| 0| Integer|  Variance in seconds added to the duration [-delta, delta] |
|[filters](../FilterList.md)| | Minecraft Filter|  Filter out mob types that it should not attack while angry (other Piglins) |
|sound_interval| 0| Range [a, b]| The range of time in seconds to randomly wait before playing the sound again |

## Example

```json
"minecraft:angry":{
    "angry_sound": "bark",
    "broadcast_anger": false,
    "broadcast_anger_on_attack": true,
    "broadcast_range": 10,
    "duration" : 100,
    "calm_event": {
        "event": "minecraft:on_calm",
        "target": "self"
    }
}
```

## Vanilla entities examples

### spider

```json
"minecraft:angry": {
    "duration": 10,
    "duration_delta": 3,
    "calm_event": {
        "event": "minecraft:become_calm",
        "target": "self"
    }
}
```

## Vanilla entities using `minecraft:angry`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [llama_spit](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama_spit.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
