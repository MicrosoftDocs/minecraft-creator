---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:mob_effect
description: "A reference document detailing the 'mob_effect' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:mob_effect

`minecraft:mob_effect` applies a mob effect to entities that get within range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| cooldown_time| 0| Integer| Time in seconds to wait between each application of the effect. |
| [entity_filter](../FilterList.md)| *not set*| Minecraft Filter | The set of entities that are valid to apply the mob effect to.  |
| effect_range| 0.2| Decimal| How close a hostile entity must be to have the mob effect applied. |
| effect_time| 10| Integer| How long in seconds the applied mob effect lasts. |
| mob_effect| *not set*| String| The mob effect that is applied to entities that enter this entity's effect range. |

## Example

```json
"minecraft:mob_effect":{
    "entity_filter": { "test": "has_damage", "subject": "self", "operator": "not", "value": "poison" },
    "effect_range": 0.2,
    "effect_time": 10,
    "mob_effect": "poison"
}
```

## Vanilla entities examples

### pufferfish

```json
"minecraft:mob_effect": {
          "effect_range": 0.2,
          "mob_effect": "poison",
          "effect_time": 10,
          "entity_filter": {
            "any_of": [
              { "test": "is_family", "subject": "other", "value": "player" },
              { "test": "is_family", "subject": "other", "value": "monster" }
            ] 
          }
        }
```

## Vanilla entities using `minecraft:mob_effect`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)
