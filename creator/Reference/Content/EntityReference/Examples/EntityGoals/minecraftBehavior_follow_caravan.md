---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.follow_caravan
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.follow_caravan

`minecraft:behavior.follow_caravan` allows an entity to be lead with a `Lead` item. Leading the entity actually signals up to ten nearby entities that have been set in the `entity_types` variable to follow each other, forming a caravan.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|entity_count| 1| Integer| Number of entities that can be in the caravan |
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob can follow in a caravan|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |

## Example

```json
"minecraft:behavior.follow_caravan":{
    "priority": 2,
    "entity_count": 7,
    "speed_multiplier": 0.75,
    "entity_types":{
        "filters":{ "test" :  "is_family", "subject" : "other", "value" :  "wolf"}}
}
```

## Vanilla entities examples

### llama

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/llama.json" range="398-405":::

## Vanilla entities using `minecraft:behavior.follow_caravan`

- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
