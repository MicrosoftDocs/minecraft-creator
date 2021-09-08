---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_saddled
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_saddled

`minecraft:is_saddled` sets that the entity is currently saddled.

> [!IMPORTANT]
> `minecraft:is_saddled` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_saddled":{
}
```

### With Functionality

```json
// Set up interaction to allow entity to be given a saddle
"minecraft:equippable": {
    "slots": [
        {
        "slot": 0,
        "item": "saddle",
        "accepted_items": ["saddle"],
        "on_equip": {
            "event": "minecraft:i_have_a_saddle"
            },
        "on_unequip": {
            "event": "minecraft:bye_bye_saddle"
            }
        }
    ]
}

//Set up the custom event to tag that it is currently saddled
"minecraft:i_have_a_saddle":{
    "minecraft:is_saddled":{
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### donkey

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/donkey.json" range="262-263":::

## Vanilla entities using `minecraft:is_saddled`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
