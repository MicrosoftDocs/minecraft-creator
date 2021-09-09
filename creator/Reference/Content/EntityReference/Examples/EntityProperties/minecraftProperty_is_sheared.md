---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_sheared
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_sheared

`minecraft:is_sheared` sets that this entity is currently sheared.

> [!IMPORTANT]
> `minecraft:is_sheared` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plain

```json
"minecraft:is_sheared":{
}
```

### With Functionality

```json
//Set up interaction. This handles the actual action of interacting with shears.
"minecraft:interact": {
    "interactions": [
        {
            "cooldown": 1.0,
            "use_item": false,
            "hurt_item": 1,
            "spawn_items": { "table": "loot_tables/entities/custom_shear.json" },
            "play_sounds": "shear",
            "interact_text": "action.interact.shear",
            "on_interact": {
              "event": "minecraft:on_sheared",
              "target": "self"
            }
        }
    ]
}
// Set up custom event to tag that it has been sheared
"minecraft:on_sheared":{
    "minecraft:is_sheared":{
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### sheep

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/sheep.json" range="87-88":::

## Vanilla entities using `minecraft:is_sheared`

- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
