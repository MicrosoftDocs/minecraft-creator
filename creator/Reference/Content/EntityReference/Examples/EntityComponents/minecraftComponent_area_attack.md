---
author: mammerla
ms.author: v-josjones
title: Entity Documentation - minecraft:area_attack
ms.prod: gaming
---

# Entity Documentation - minecraft:area_attack

`minecraft:area_attack` is a component that does damage to entities that get within range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cause |*not set* | String| The type of damage that is applied to entities that enter the damage range. |
|[entity_filter](../FilterList.md) |*not set*  |Minecraft Filter|The set of entities that are valid to apply the damage to when within range.    |
|damage_per_tick| 2| Integer|  How much damage per tick is applied to entities that enter the damage range. |
|damage_range| 0.2| Decimal| How close a hostile entity must be to have the damage applied. |

### cause

> [!IMPORTANT]
> A list of available damage sources can be found at [Entity Damage Source](../../../AddonsReference/Examples/AddonEntities.md#entity-damage-source) located in the Addons Documentation.

## Example

```json
"minecraft:area_attack":{
    "damage_range": 0.2,
    "damage_per_tick": 2,
    "cause": "contact",
    "entity_filter": {
         "test": "is_family", "subject": "other", "value": "monster"
    }
}
```

## Vanilla entities examples

### pufferfish

```json
"minecraft:area_attack" : {
    "damage_range": 0.2,
    "damage_per_tick": 2,
    "cause": "contact",
    "entity_filter": {
        "any_of": [
            { "test": "is_family", "subject": "other", "value": "player" },
            { "test": "is_family", "subject": "other", "value": "monster" }
        ]    
    }
}
```


## Vanilla entities using `minecraft:area_attack`

- [area_effect_cloud](../../../../Source/VanillaBehaviorPack_Snippets/entities/area_effect_cloud.md)
- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
