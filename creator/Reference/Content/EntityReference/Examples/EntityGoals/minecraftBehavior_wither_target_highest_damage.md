---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.wither_target_highest_damage
ms.prod: gaming
---

# minecraft:behavior.wither_target_highest_damage

`minecraft:behavior.wither_target_highest_damage` allows an entity to focus its attacks on whichever hostile mob has dealt the most damage to it.

> [!NOTE]
> This behavior can only be used by the `wither` entity type.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md) | |JSON Object |List of entity types the wither takes into account to find who dealt the most damage to it (Please see entity_types' definition page)|

## Example

```json
"minecraft:behavior.wither_target_highest_damage":{
    "priority": 3,
}
```

## Vanilla entities examples

### wither

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither.json" range="74-76":::

## Vanilla entities using `minecraft:behavior.wither_target_highest_damage`

- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
