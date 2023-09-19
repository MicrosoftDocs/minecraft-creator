---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:tameable
description: "A reference document detailing the 'tameable' entity component"
ms.service: minecraft-bedrock-edition
---
# Entity Documentation - minecraft:tameable

`minecraft:tameable` defines the rules for an entity to be tamed by the player.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| probability| 1| Decimal| The chance of taming the entity with each item use between 0.0 and 1.0, where 1.0 is 100% |
| tame_event| *not set*| JSON Object | Event to initiate when the entity becomes tamed |
| tame_items| *not set*| List| The list of items that can be used to tame the entity |

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

## Vanilla entities using `minecraft:tameable`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
