---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.charge_held_item
description: "A reference document detailing the 'behavior.charge_held_item' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.charge_held_item

`minecraft:behavior.charge_held_item` compels an entity to charge and use their held item.

## Parameters

| Name| Default Value| Type| Description |
|:-----------:|:-----------:|:-----------:|:-----------:|
| items| *not set*| Array| The list of items that can be used to charge the held item. This list is required and must have at least one item in it. |
| priority|*not set*|Integer| The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
        "minecraft:arrow"
    ]
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:behavior.charge_held_item": {
    "priority": 3,
    "items": [
    "minecraft:arrow"
    ]
}
```

## Vanilla entities using `charge_held_item`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
