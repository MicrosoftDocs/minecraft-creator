---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:shareables
ms.prod: gaming
---

# Entity Documentation - minecraft:shareables

`minecraft:shareables` defines a list of items the mob wants to share or pick up.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| all_items| False| Boolean| A bucket for all other items in the game. Note this category is always least priority items. |
| all_items_max_amount| -1| Integer| Maximum number of this item the mob will hold. |
| all_items_surplus_amount| -1| Integer| Number of this item considered extra that the entity wants to share. |
| all_items_want_amount| -1| Integer| Number of this item this entity wants to share. |
| items| *not set*| List| List of items that the entity wants to share.|

### items

`items` is a list defined by eleven parameters. Each item has the following properties:

| Name| Default Value| Type| Description|
|:----------|:----------|:----------|:----------|
| admire| False| Boolean| Mob will admire the item after picking up by looking at it. For this to happen the mob needs to have an [Admire](minecraftComponent_admire_item.md) component and an [Admire](../EntityGoals/minecraftBehavior_admire_item.md) goal.|
| barter| False| Boolean| Mob will barter for the item after picking it up. For this to work the mob needs to have a [Barter](minecraftComponent_barter.md) component and a [Barter](../EntityGoals/minecraftBehavior_barter.md) goal.|
| consume_item|False|Boolean|Determines whether the mob will consume the item or not.|
| craft_into|*not set*|String| Defines the item this entity wants to craft with the item defined by "item". Should be an item name.|
|item |*not set* | String| The name of the item. Aux value can be specified, for instance `minecraft:skull:1`.|
| max_amount| *not set*| Integer| Maximum number of this item the mob will hold.|
| pickup_limit| *not set*| Integer| Maximum number of this item the mob will pick up during a single goal tick.|
| pickup_only | false | Boolean | Determines whether the mob can only pickup the item and not drop it. |
| priority| *not set*| Integer| Prioritizes which items the entity prefers. 0 is the highest priority.|
| stored_in_inventory| *not set*| Boolean| Determines whether the mob will try to put the item in its inventory if it has the inventory component and if it can't be equipped.|
| surplus_amount| *not set*| Integer| Number of this item considered extra that the entity wants to share.|
| want_amount| *not set*| Integer| Number of this item this entity wants to have.|

## Example

In this example, an entity wants to be able to make `bread` from `wheat`. Since bread requires 3 total wheat, the entity will want a total of 3 and will consider 4 or more as surplus.

```json
"minecraft:shareables":{
    "all_items": true,
    "all_items_max_amount": 1,
    "all_items_surplus_amount": 4,
    "all_items_want_amount": 3,
    "items": [
        {
            "item": "minecraft:wheat",
            "admire": false,
            "barter": false,
            "consume_item": false,
            "craft_into": "minecraft:bread",
            "priority": 0,
            "max_amount": 3,
            "pickup_limit": -1, //no limit
            "pickup_only": true,
            "store_in_inventory": true,
            "surplus_amount": 4,
            "want_amount": 3
        }
    ]
}
```

## Vanilla entities examples

### wither_skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither_skeleton.json" range="59-410":::

## Vanilla entities using `minecraft:shareables`

- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
