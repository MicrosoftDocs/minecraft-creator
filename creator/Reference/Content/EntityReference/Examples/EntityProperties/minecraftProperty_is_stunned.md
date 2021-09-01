---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_stunned
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_stunned

`minecraft:is_stunned` sets that this entity is currently stunned.

> [!IMPORTANT]
> `minecraft:is_stunned` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_stunned":{
}
```

### With Functionality

```json
// Set up a custom Component Group to store the stunned effect
"stubbed_toe": {
    "minecraft:is_stunned": {
    },
    "minecraft:timer": {
        "looping": false,
        "time": 3,
        "time_down_event": {
            "event": "minecraft:angry"
        }
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group, as shown above, and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### ravager

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/ravager.json" range="186-187":::

## Vanilla entities using `minecraft:is_stunned`

- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
