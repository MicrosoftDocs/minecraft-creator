---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:custom_hit_test
ms.prod: gaming
---

# Entity Documentation - minecraft:custom_hit_test

`minecraft:custom_hit_test` defines a list of hitboxes for melee and ranged hits against the entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|hitboxes |*not set* | Array| Comma-separated array of hitboxes. |

### hitboxes

`hitboxes` is an array defined by two parameters. Each item has the following properties:

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|height|*not set*|  Decimal| Height of the hitbox in blocks. A negative value will be assumed to be 0. |
|width|*not set*| Decimal| Width and Depth of the hitbox in blocks. A negative value will be assumed to be 0. |
|pivot|*not set*| Vector [a,b,c]| The offset from the entity's anchor where the hitbox will spawn |

## Example

```json
"minecraft:custom_hit_test":{
    "hitboxes": [
      {
        "width": 1.0,
        "height": 1.0,
        "pivot": [ 0, 0, 0 ]
      }
    ]
}
```

## Vanilla entities examples

### hoglin

```json
"minecraft:custom_hit_test": {
    "hitboxes": [
        {
            "width": 1.0,
            "height": 0.85,
            "pivot": [ 0, 0.5, 0 ]
        }
    ]
}
```

## Vanilla entities using `minecraft:custom_hit_test`

- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
