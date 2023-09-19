---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:grows_crop
description: "A reference document detailing the 'grows_crop' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:grows_crop

`minecraft:grows_crop` allows increased crop growth when the entity walks over crops.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| chance| 0| Decimal| Value between 0-1. Chance of success per tick. |
| charges| 10| Integer| Number of charges |

## Example

```json
"minecraft:grows_crop":{
    "chance": 0,
    "charges": 10
}
```

## Vanilla entities examples

### bee

```json
"minecraft:grows_crop": {
                    "charges": 10,
                    "chance": 0.03
                }
```

## Vanilla entities using `minecraft:grows_crop`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
