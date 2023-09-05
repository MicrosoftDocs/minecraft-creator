---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:area_attack
description: "A reference document detailing the 'area_attack' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:area_attack

`minecraft:area_attack` is a component that damages entities within a defined range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|cause |*not set* | String| The type of damage that is applied to entities in the damage range. |
|[entity_filter](../FilterList.md) |*not set*  |Minecraft Filter|The set of entities that are valid to apply damage to within range.    |
|damage_per_tick| 2| Integer|  How much damage per tick is applied to entities in the damage range. |
|damage_range| 0.2| Decimal| How close a hostile entity must be to have damage applied. |

### Cause

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
