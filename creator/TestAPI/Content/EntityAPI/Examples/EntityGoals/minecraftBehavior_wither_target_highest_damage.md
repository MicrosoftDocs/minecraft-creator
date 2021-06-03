---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.wither_random_attack_pos_goal
ms.prod: gaming
---

# minecraft:behavior.wither_random_attack_pos_goal

`minecraft:behavior.wither_random_attack_pos_goal` allows an entity to focus its attacks on whichever hostile mob has dealt the most damage to it.

> [!NOTE]
> This behavior can only be used by `wither` entity types.

## Parameters

|[entity_types](../Definitions/NestedTables/entity_types.md) | |JSON Object |List of entity types the wither takes into account to find who dealt the most damage to it (Please see entity_types' definition page)|

## Example

```json
"minecraft:behavior.wither_random_attack_pos_goal":{
    "priority": 3,
}
```

## Vanilla entities examples

### wither

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither.json" range="69-71":::

## Vanilla entities using `minecraft:behavior.wither_random_attack_pos_goal`

- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
