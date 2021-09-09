---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:spell_effects
ms.prod: gaming
---

# Entity Documentation - minecraft:spell_effects

`minecraft:spell_effects` allows an entity to define effects to add and remove to the entity when adding this attribute. Unlike components like `addrider`, this component will be reapplied if the player logs out and logs back into the world.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|add_effects|*not set* | List|  List of effects to add to this entity after adding this component |
|remove_effects|*not set* | String|  List of identifiers of effects to be removed from this entity after adding this component |

### add_effects

`add_effects` is a list variable that can use the following parameters:

| effect| *not set*| String|  Effect to add to this entity. Includes 'duration' in seconds, 'amplifier' level, 'ambient' if the effect should be partially transparent, and 'visible' if the effect should be visible |

## Example

```json
"minecraft:spell_effects":{
    "add_effects":[
    {
        "effect": "instant_health",
        "duration": 25
    }
    ],
    "remove_effects": ["poison", "instant_health"]
}
```

## Vanilla entities examples

### zombie_villager_v2

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zombie_villager_v2.json" range="86-98":::

## Vanilla entities using `minecraft:spell_effects`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
