---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:spawn_entity
ms.prod: gaming
---

# Entity Documentation - minecraft:spawn_entity

`minecraft:spawn_entity` adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| entities | *not set*|List of entities | A list of entities to spawn in |

## Entities

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| filters| *not set*| Minecraft Filter| If present, the specified entity will only spawn if the filter evaluates to true. |
| max_wait_time| 600| Integer| Maximum amount of time to randomly wait in seconds before another entity is spawned. |
| min_wait_time| 300| Integer| Minimum amount of time to randomly wait in seconds before another entity is spawned. |
| num_to_spawn| 1| Integer| The number of entities of this type to spawn each time that this triggers. |
| should_leash| false| Boolean| If true, this the spawned entity will be leashed to the parent. |
| single_use| false| Boolean| If true, this component will only ever spawn the specified entity once. |
| spawn_entity| *not set*| String| Identifier of the entity to spawn, leave empty to spawn the item defined by "spawn_item" instead. |
| spawn_event| minecraft:entity_born| String| Event to call when the entity is spawned. |
| spawn_item| egg| String| Item identifier of the item to spawn. |
| spawn_method| born| String| Method to use to spawn the entity. |
| spawn_sound| plop| String| Identifier of the sound effect to play when the entity is spawned. |

## Example

```json
"minecraft:spawn_entity":{
    "entities": [{
        "filters": [
            {"test":"is_daytime", "value": false}
        ] ,
        "max_wait_time": 600,
        "min_wait_time": 300,
        "num_to_spawn": 1,
        "should_leash": false,
        "single_use": false,
        "spawn_entity": ,
        "spawn_event": "minecraft:entity_born",
        "spawn_item": "egg",
        "spawn_method": "born",
        "spawn_sound": "plop",
        }
    ]
}
```

## Vanilla entities examples

### chicken

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/chicken.json" range="74-84":::

## Vanilla entities using `minecraft:spawn_entity`

- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [wandering_trader](../../../../Source/VanillaBehaviorPack_Snippets/entities/wandering_trader.md)
