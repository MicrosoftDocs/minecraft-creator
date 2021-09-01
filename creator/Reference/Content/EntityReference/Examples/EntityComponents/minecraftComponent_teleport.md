---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:teleport
ms.prod: gaming
---

# Entity Documentation - minecraft:teleport

`minecraft:teleport` defines an entity's teleporting behavior.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| dark_teleport_chance| 0.01| Decimal| Modifies the chance that the entity will teleport if the entity is in darkness |
| light_teleport_chance| 0.01| Decimal| Modifies the chance that the entity will teleport if the entity is in daylight |
| max_random_teleport_time| 20| Decimal| Maximum amount of time in seconds between random teleports |
| min_random_teleport_time| 0| Decimal| Minimum amount of time in seconds between random teleports |
| random_teleport_cube| [32, 16, 32]| Vector [a, b, c]| Entity will teleport to a random position within the area defined by this cube |
| random_teleports| True| Boolean| If true, the entity will teleport randomly |
| target_distance| 16| Decimal| Maximum distance the entity will teleport when chasing a target |
| target_teleport_chance| 1| Decimal| The chance that the entity will teleport between 0.0 and 1.0. 1.0 means 100% |

## Example

```json
"minecraft:teleport":{
    "dark_teleport_chance": 0.01,
    "light_teleport_chance": 0.01,
    "max_random_teleport_time": 20,
    "min_random_teleport_time": 0,
    "random_teleport_cube": [32, 16, 32],
    "random_teleports": true,
    "target_distance": 16,
    "target_teleport_chance": 1
}
```

## Vanilla entities examples

### enderman

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/enderman.json" range="85-92":::

## Vanilla entities using `minecraft:teleport`

- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)