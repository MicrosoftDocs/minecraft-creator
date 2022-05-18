---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:barter
ms.prod: gaming
---

# Entity Documentation - minecraft:barter

`minecraft:barter` enables the component to drop an item as a barter exchange.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|barter_table|*not set* | String| Loot table that's used to drop a random item. |
|cooldown_after_being_attacked| 0| Integer|  Duration, in seconds, for which mob won't barter items if it was hurt |

## Example

```json
"minecraft:barter":{
    "barter_table": "loot_tables/entities/custom_villager_barter.json",
    "cooldown_after_being_attacked": 5
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:behavior.barter": {
    "priority": 3
}
```

## Vanilla entities using `minecraft:barter`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
