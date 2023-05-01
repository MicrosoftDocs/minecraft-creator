---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.offer_flower
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.offer_flower

`minecraft:behavior.offer_flower` compels an entity to offer a flower to another entity.

>[!IMPORTANT]
> `minecraft:behavior.offer_flower` requires a flower item to be held by the entity.
> This behavior can only be used by the `villager` entity types.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.offer_flower":{
    "priority": 4
}
```

## Vanilla entities examples

### iron_golem

```json
"minecraft:behavior.offer_flower": {
        "priority": 5
      }
```

## Vanilla entities using `minecraft:behavior.offer_flower`

- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
