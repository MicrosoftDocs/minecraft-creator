---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:boostable
ms.prod: gaming
---

# Entity Documentation - minecraft:boostable

`minecraft:boostable` defines the conditions and behavior of a rideable entity's boost.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|boost_items|*not set* | List| List of items that can be used to boost while riding this entity.|
|duration| 3.0| Decimal| Time in seconds for the boost. |
|speed_multiplier| 1.0| Decimal| Factor by which the entity's normal speed increases. E.g. 2.0 means go twice as fast. |

### boost_items

`boost_items` is a list defined by two parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|damage| 1| Integer|  This is the damage that the item will take each time it is used. |
|item|*not set* | String|  Name of the item that can be used to boost. |
|replace_item|*not set* | String|  The item used to boost will become this item once it is used up. |

## Example

```json
"minecraft:boostable":{
    "duration": 5.0,
    "speed_multiplier": 1.25,
    "boost_items": [
        {
            "item": "carrotOnAStick",
            "damage": 3,
            "replace_item": "fishing_rod"
        }
    ]
}
```

## Vanilla entities examples

### pig

```json
"minecraft:boostable": {
    "speed_multiplier": 2.0,
    "duration": 3.0,
    "boost_items": [
        {
            "item": "carrotOnAStick",
            "damage": 2,
            "replace_item": "fishing_rod"
        }
    ]
}
```

## Vanilla entities using `minecraft:boostable`

- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
