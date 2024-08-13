---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.eat_carried_item
description: "A reference document detailing the 'behavior.eat_carried_item' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.eat_carried_item

`minecraft:behavior.eat_carried_item` compels an entity to eat any item in its inventory and gain the benefits of the item.

>[!IMPORTANT]
> `minecraft:behavior.eat_carried_item` requires food items to be in the entity's inventory in order to eat the food.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|delay_before_eating|*not set* | Decimal|  Time in seconds the mob should wait before eating the item. |
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.eat_carried_item":{
    "priority": 2,
    "delay_before_eating":3.25
}
```

## Vanilla entities examples

### fox

```json
"minecraft:behavior.eat_carried_item": {
        "priority": 12,
        "delay_before_eating": 28
      }
```

## Vanilla entities using `minecraft:behavior.eat_carried_item`

- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
