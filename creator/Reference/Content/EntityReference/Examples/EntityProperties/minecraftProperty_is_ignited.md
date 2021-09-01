---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_ignited
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_ignited

`minecraft:is_ignited` sets that the entity is currently on fire.

> [!IMPORTANT]
> `minecraft:is_ignited` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_ignited":{
}
```

### With Functionality

```json
// Set up ability to trigger an event when damaged by fire
"minecraft:damage_sensor": {
    "triggers": {
        "on_damage": {
            "filters": { "test": "is_family", "subject": "other", "value": "fire"
            },
        "event": "minecraft:im_on_fire"
        },
    "deals_damage": false
    }
}

// Set up custom event to tag that it is now ignited
"minecraft:im_on_fire":{
    "minecraft:is_ignited":{
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### tnt_minecart

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/tnt_minecart.json" range="23-24":::

## Vanilla entities using `minecraft:is_ignited`

- [tnt_minecart](../../../../Source/VanillaBehaviorPack_Snippets/entities/tnt_minecart.md)
