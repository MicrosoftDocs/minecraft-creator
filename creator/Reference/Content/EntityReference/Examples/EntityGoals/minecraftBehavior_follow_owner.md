---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.follow_owner
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.follow_owner

`minecraft:behavior.follow_owner` allows an entity to follow a player marked as an owner.

> [!IMPORTANT]
> `minecraft:behavior.follow_owner` requires the entity to be marked as an owner either via *taming* or setting a console command.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|speed_multiplier| 1.0| Decimal| Movement speed multiplier of the mob when using this AI Goal |
|start_distance| 10.0| Decimal| The distance in blocks that the owner can be away from this mob before it starts following it |
|stop_distance| 2.0| Decimal| The distance in blocks this mob will stop from its owner while following it |

## Example

```json
"minecraft:behavior.follow_owner":{
    "priority": 2,
    "speed_multiplier": 1.0,
    "start_distance": 5.0,
    "stop_distance": 2.5
}
```

## Vanilla entities examples

### cat

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cat.json" range="170-175":::

## Vanilla entities using `minecraft:behavior.follow_owner`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
