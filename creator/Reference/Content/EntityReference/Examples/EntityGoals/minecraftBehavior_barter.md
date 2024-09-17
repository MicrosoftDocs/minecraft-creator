---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:behavior.barter
description: "A reference document detailing the 'behavior.barter' entity goal"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:behavior.barter

`minecraft:behavior.barter` compels an entity to drop an item in return after a player offers a trade by dropping a specific item near the entity.

> [!IMPORTANT]
> `minecraft:behavior.barter` requires the following in order to work properly;
>
> - `minecraft:barter` component.
> - `barter_table` loot table.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|

## Example

```json
"minecraft:behavior.barter":{
    "priority": 1
}
```

## Vanilla entities examples

### piglin

```json
"minecraft:barter": {
          "barter_table": "loot_tables/entities/piglin_barter.json",
          "cooldown_after_being_attacked": 20
        }
```

## Vanilla entities using `minecraft:behavior.barter`

- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
