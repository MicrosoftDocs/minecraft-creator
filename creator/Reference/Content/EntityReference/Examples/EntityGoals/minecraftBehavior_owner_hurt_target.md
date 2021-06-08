---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.owner_hurt_target
ms.prod: gaming
---

# minecraft:behavior.owner_hurt_target

`minecraft:behavior.owner_hurt_target` allows an entity to react when the owner hits a target.

>[!IMPORTANT]
> `minecraft:behavior.owner_hurt_target` requires a player to be set as the owner via taming or console command in order to work properly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|[entity_types](../Definitions/NestedTables/entity_types.md)|*not set* | JSON Object| List of entity types that this mob can target if they hurt their owner|
|hurt_owner| false| Boolean|  If true, the mob will hurt its owner and other mobs with the same owner as itself |

## Example

```json
"minecraft:behavior.owner_hurt_target":{
    "priority": 2,
    "entity_types": {
            "filters":{
              "test": "is_family", "subject": "other", "value": "player"
            },
            "max_dist":32
          }
}
```

## Vanilla entities examples

### wolf

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wolf.json" range="217-219":::

## Vanilla entities using `minecraft:behavior.owner_hurt_target`

- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
