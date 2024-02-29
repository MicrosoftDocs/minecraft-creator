---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:barter
description: "A reference document detailing the 'barter' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:barter

`minecraft:barter` compels the entity to drop an item as a barter exchange.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|barter_table|*not set* | String| Loot table used to drop a random item |
|cooldown_after_being_attacked| 0| Integer|  Duration, in seconds, when the entity won't barter items if it was hurt |

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
"minecraft:barter": {
    "barter_table": "loot_tables/entities/piglin_barter.json",
    "cooldown_after_being_attacked": 20
},
```

## Vanilla entities using `minecraft:barter`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
