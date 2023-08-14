---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:insomnia
ms.prod: gaming
description: "A reference document detailing the 'insomnia' entity component"
---

# Entity Documentation - minecraft:insomnia

`minecraft:insomnia` adds a timer since last rested to see if phantoms should spawn.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| days_until_insomnia| 3.0| Decimal| Number of days the entity has to stay up until the insomnia effect begins. |

## Example

```json
"minecraft:insomnia":{
    "days_until_insomnia": 3.0
}
```

## Vanilla entities examples

### player

```json
"minecraft:insomnia": {
        "days_until_insomnia": 3
      },
```

## Vanilla entities using `minecraft:insomnia`

- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)