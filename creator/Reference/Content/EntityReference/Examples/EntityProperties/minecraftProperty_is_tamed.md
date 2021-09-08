---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_tamed
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_tamed

`minecraft:is_tamed` sets that this entity is currently tamed.

> [!IMPORTANT]
> `minecraft:is_tamed` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

> [!TIP]
> `minecraft:is_tamed` is used in conjunction with [minecraft:tameable](../EntityComponents/minecraftComponent_tameable.md)

## Example

### Plain

```json
"minecraft:is_tamed":{
}
```

### With Functionality

```json
// Use minecraft:tameable to set up the ability for the entity to be tameable.
"minecraft:tameable": {
    "probability": 0.75,
    "tame_items": "chicken",
    "tame_event": {
        "event": "minecraft:on_tame",
        "target": "self"
        }
}
// Set up custom event to tag that it has been tamed
"minecraft:on_tame": {
    "minecraft:is_tamed": {
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### horse

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/horse.json" range="155-156":::

## Vanilla entities using `minecraft:is_tamed`

- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [parrot](../../../../Source/VanillaBehaviorPack_Snippets/entities/parrot.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
