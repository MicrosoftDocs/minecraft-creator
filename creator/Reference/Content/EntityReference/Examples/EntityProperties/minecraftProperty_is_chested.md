---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:is_chested
ms.prod: gaming
---

# Entity Documentation -  minecraft:is_chested

`minecraft:is_chested` sets that the entity is currently carrying a chest.

> [!IMPORTANT]
> `minecraft:is_chested` is a Boolean that is used to set the value for use in query functions like Molang and Filters. In order for the entity to have the desired affect, it will need to be paired with extra functionality.
>
> The examples below will showcase both the property and how it works to create the desired effect on the entity.

## Example

### Plane

```json
"minecraft:is_chested":{
}
```

### With Functionality

```json
//Set up minecraft:interaction to set up the ability to hand an entity a chest
"minecraft:interact": {
    "interactions": [
        {
        "on_interact": {
            "filters": {
                "all_of": [
                    { "test" :  "is_family", "subject" : "other", "value" :  "player"},
                    { "test" :  "has_equipment", "domain": "hand","subject" : "other", "value" :  "chest"}
                  ]
                },
            "event": "minecraft:you_now_have_a_chest",
            "target": "self"
        },
        "use_item": true,
        "interact_text": "action.interact.attachchest"
        }
    ]
}

// Set up custom event to tag that it now has a chest
"minecraft:you_now_have_a_chest": {
    "minecraft:is_chested":{
    }
}
```

> [!NOTE]
> If the Entity will have the ability to toggle between the two states, you can define the property in a Component Group and use the `add` and `remove` capabilities to act as a toggle based on Events.

## Vanilla entities examples

### llama

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/llama.json" range="255-257":::

## Vanilla entities using `minecraft:is_chested`

- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
