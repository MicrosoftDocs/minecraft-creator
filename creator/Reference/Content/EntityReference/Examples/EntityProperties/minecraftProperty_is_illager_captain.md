---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_illager_captain
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_illager_captain

`minecraft:is_illager_captain` sets that the entity is an illager captain.

> [!IMPORTANT]
> `minecraft:is_illager_captain` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_illager_captain":{
}
```

### With Functionality

```json
"minecraft:custom_illager_squad_captain": {
    "minecraft:is_illager_captain": {
    },
    "minecraft:variant": {
        "value": 3
    },
    "minecraft:equipment": {
        "table": "loot_tables/entities/custom_illager_captain_equipment.json"
        }
}
```

## Vanilla entities examples

### pillager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pillager.json" range="98-99":::

## Vanilla entities using `minecraft:is_illager_captain`

- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
