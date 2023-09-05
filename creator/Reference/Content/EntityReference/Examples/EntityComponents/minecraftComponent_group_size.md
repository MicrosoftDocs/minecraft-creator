---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:group_size
description: "A reference document detailing the 'group_size' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:group_size

`minecraft:group_size` keeps track of entity group size in the given radius.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| filters| *not set*| Minecraft Filter| The list of conditions that must be satisfied for other entities to be counted towards group size. |
| radius| 16| Decimal| Radius from center of entity. |

## Example

```json
"minecraft:group_size":{
    "filters": {"test": "has_ranged_weapon"} ,
    "radius": 16,
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:group_size": {
          "radius": 32,
          "filters": {
            "all_of": [
              {
                "test": "has_component",
                "operator": "!=",
                "value": "minecraft:is_baby"
              },
              {
                "test": "is_family",
                "value": "piglin"
              }
            ]
          }
        }
```

## Vanilla entities using `minecraft:group_size`

- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
