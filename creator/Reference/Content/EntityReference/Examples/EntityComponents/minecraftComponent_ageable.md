---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:ageable
ms.prod: gaming
---

# Entity Documentation - minecraft:ageable

`minecraft:ageable` will add a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by `feed_items`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| drop_items |*not set* | List|  List of items that the entity drops when it grows up. |
| duration | 1200.0| Decimal |  Amount of time before the entity grows up, -1 for always a baby. |
| feed_items |*not set* | List | List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by |
| grow_up | *not set* | JSON Object  |  Event to run when this entity grows up. |

## Example

```json
"minecraft:ageable":{
    "drop_items": "fish",
    "duration": 1200.0,
    "feed_items": ["carrot", "wheat"],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

## Vanilla entities examples

### pig

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [ "carrot", "beetroot", "potato" ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

### mule

```json
"minecraft:ageable": {
    "duration": 1200,
    "feed_items": [
        {
            "item": "wheat",
            "growth": 0.016667
        },
        {
            "item": "sugar",
            "growth": 0.025
        },
        {
            "item": "hay_block",
            "growth": 0.15
        },
        {
            "item": "apple",
            "growth": 0.05
        },
        {
            "item": "golden_carrot",
            "growth": 0.05
        },
        {
            "item": "golden_apple",
            "growth": 0.2
        },
        {
            "item": "appleEnchanted",
            "growth": 0.2
        }
    ],
    "grow_up": {
        "event": "minecraft:ageable_grow_up",
        "target": "self"
    }
}
```

## Vanilla entities using `minecraft:ageable`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
