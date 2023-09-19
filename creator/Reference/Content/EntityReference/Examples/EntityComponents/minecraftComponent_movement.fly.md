---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:movement.fly
description: "A reference document detailing the 'movement.fly' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:movement.fly

`minecraft:movement.fly` compels the entity to fly.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| start_speed| 0.1| Decimal|Initial speed of the entity when it starts gliding. |
| speed_when_turning| 0.2| Decimal|Speed that the entity adjusts to when it has to turn quickly. |

## Example

```json
"minecraft:movement.fly":{
    "max_turn": 30.0
}
```

## Vanilla entities examples

### parrot

```json
"minecraft:movement.fly": {
      }
```

## Vanilla entities using `minecraft:movement.fly`

- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
