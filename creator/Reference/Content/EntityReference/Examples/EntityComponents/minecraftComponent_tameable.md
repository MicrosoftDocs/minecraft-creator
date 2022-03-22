---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:tameable
ms.prod: gaming
---
# Entity Documentation - minecraft:tameable

`minecraft:tameable` defines the rules for a mob to be tamed by the player.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| probability| 1| Decimal| The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% |
| tame_event| *not set*| JSON Object | Event to run when this entity becomes tamed |
| tame_items| *not set*| List| The list of items that can be used to tame this entity |

## Example

```json
"minecraft:tameable": {
    "probability": 0.33,
    "tame_items": "bone",
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
    }
}
```

## Vanilla entities examples

### wolf

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wolf.json" range="112-119":::

## Vanilla entities using `minecraft:tameable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
