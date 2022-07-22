---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:behavior.barter
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.barter

`minecraft:behavior.barter` allows an entity to drop an item in return after a player offers a trade by dropping a specific item near the entity.

> [!IMPORTANT]
> `minecraft:behavior.barter` requires the following in order to work properly;
>
> - `minecraft:barter` component.
> - `barter_table` loot table.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.barter":{
    "priority": 1
}
```

## Vanilla entities examples

### piglin

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/piglin.json" range="499-501":::

## Vanilla entities using `minecraft:behavior.barter`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
