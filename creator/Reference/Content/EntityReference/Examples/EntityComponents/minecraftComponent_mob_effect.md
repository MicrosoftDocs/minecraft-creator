---
author: JDHeaden
ms.author: v-jillheaden
title: Entity Documentation - minecraft:mob_effect
ms.prod: gaming
---

# Entity Documentation - minecraft:mob_effect

`minecraft:mob_effect` applies a mob effect to entities that get within range.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| cooldown_time| 0| Integer| Time in seconds to wait between each application of the effect. |
| [entity_filter](../FilterList.md)| *not set*| Minecraft Filter | The set of entities that are valid to apply the mob effect to.  |
| effect_range| 0.2| Decimal| How close a hostile entity must be to have the mob effect applied. |
| effect_time| 10| Integer| How long the applied mob effect lasts in seconds. |
| mob_effect| *not set*| String| The mob effect that is applied to entities that enter this entities effect range. |

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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pufferfish.json" range="91-101":::

## Vanilla entities using `minecraft:mob_effect`

- [pufferfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/pufferfish.md)