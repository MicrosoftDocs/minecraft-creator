---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:equippable
ms.prod: gaming
---

# Entity Documentation - minecraft:equippable

`minecraft:equippable` defines an entity's behavior for having items equipped to it.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| slots| *not set*| List| List of slots and the item that can be equipped.|

### slots

`slots` is a list defined by six parameters. Each item has the following properties:

| Name| Default Value| Type| Description |
|:-----------|:-----------|:-----------|:-----------|
| accepted_items| *not set*| List| The list of items that can go in this slot. |
| interact_text| *not set*| String| Text to be displayed when the entity can be equipped with this item when playing with Touch-screen controls. |
| item| *not set*| String| Identifier of the item that can be equipped for this slot. |
| on_equip| *not set*| JSON Object | Event to trigger when this entity is equipped with this item. |
| on_unequip| *not set*| JSON Object | Event to trigger when this item is removed from this entity. |
| slot| 0| Integer| The slot number of this slot. |

## Example

```json
"minecraft:equippable":{
    "slots": [
        {        
            "slot": 0,
            "item": "saddle",
            "accepted_items": [ "saddle" ],
            "on_equip": {
                "event": "minecraft:horse_saddled"
            },
            "on_unequip": {
                "event": "minecraft:horse_unsaddled"
            }
        }
    ]
}
```

## Vanilla entities examples

### horse

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/horse.json" range="287-311":::

## Vanilla entities using `minecraft:equippable`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)