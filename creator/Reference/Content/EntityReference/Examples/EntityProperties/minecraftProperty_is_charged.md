---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_charged
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_charged

`minecraft:is_charged` sets that the entity is charged.

> [!IMPORTANT]
> `minecraft:is_charged` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_charged":{
}
```

### With Functionality

```json
// Set up a behavior that will trigger the charge state.
"minecraft:target_nearby_sensor": {
    "inside_range": 2.5,
    "outside_range": 10.0,
    "must_see": true,
    "on_inside_range": {
        "event": "minecraft:power_up",
        "target": "self"
    }
}

// Set up custom event to tag that it is now charged
"minecraft:power_up":{
    "minecraft:is_charged":{
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### creeper

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/creeper.json" range="21-22":::

## Vanilla entities using `minecraft:is_charged`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
