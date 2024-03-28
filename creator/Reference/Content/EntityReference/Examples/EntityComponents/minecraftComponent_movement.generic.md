---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:movement.generic
description: "A reference document detailing the 'movement.generic' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:movement.generic

`minecraft:movement.generic` allows an entity to fly, swim, climb, etc.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the entity can turn per tick. |

## Example

```json
"minecraft:movement.generic":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### drowned

```json
"minecraft:movement.generic": {
      }
```

## Vanilla entities using `minecraft:movement.generic`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
