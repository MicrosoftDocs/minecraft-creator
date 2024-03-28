---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - minecraft:bribeable
description: "A reference document detailing the 'bribeable' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:bribeable

`minecraft:bribeable` compels an entity to establish a way to get into the `bribed` state.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|bribe_cooldown| 2.0| Decimal| Time in seconds before the entity can be bribed again. |
|bribe_items|*not set* | List|  The list of items that can be used to bribe the entity. |

## Example

```json
"minecraft:bribeable":{
    "bribe_cooldown": 2.0,
    "bribe_items": "stick"
}
```

## Vanilla entities examples

### dolphin

```json
"minecraft:bribeable": {
    "bribe_items": [ "fish", "salmon" ]
}
```

## Vanilla entities using `minecraft:bribeable`

- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
