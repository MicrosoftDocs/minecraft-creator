---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:movement.amphibious
description: "A reference document detailing the 'movement.amphibious' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:movement.amphibious

`minecraft:movement.amphibious` compels an entity to swim in water and walk on land.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| max_turn| 30.0| Decimal| The maximum number in degrees the entity can turn per tick. |

## Example

```json
"minecraft:movement.amphibious":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### turtle

```json
"minecraft:movement.amphibious": {
        "max_turn": 5.0
      }
```

## Vanilla entities using `minecraft:movement.amphibious`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
