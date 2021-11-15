---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:ageable
ms.prod: gaming
---

# Entity Documentation - minecraft:ageable

`minecraft:ageable` adds a timer for the entity to run a "grow up" event. It can be accelerated by giving the entity certain items.

When this component is added, it marks the entity as being a baby. This means queries such as `query.is_baby` will return 1. Removing the component prematurely will *not* revert this; the entity will continue to be marked as a baby. However, when the timer elapses and the event runs, the entity will be marked as no longer being a baby.

You can add or remove the [`minecraft:is_baby`](../EntityProperties/minecraftProperty_is_baby.md) component to set the entity's baby flag in a more controlled way. However, if the entity gets marked as a baby while it has the `minecraft:ageable` component and the timer has elapsed, it will instantly run the event and mark the entity as not a baby again.

Additionally, if the entity has this component and the timer has elapsed, the event will run every time the entity is reloaded. For these reasons, it is recommended that the `grow_up` event removes the component itself.

If the component is replaced, the timer resets to the new `duration`.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|drop_items|*not set* | List|*(optional)*  List of items will be spawned at the entity. You can increase the count by specifying the same item multiple times. |
|duration| 1200.0| Decimal| This is amount of time in seconds the timer should last. The progress of the timer is preserved when the entity is unloaded. If set to `-1`, the timer will never advance, and items will have no effect when used.|
|feed_items|*not set* | List| List of items that can be fed to the entity. Includes 'item' for the item name and 'growth' to define how much time it grows up by |
|grow_up|*not set* | String|  Event to run when this entity grows up. |
|transform_to_item|*not set* | String| *(optional)*  defines an item that will be given to the player to replace the item that was consumed. In creative mode, the item is not consumed, so this item will not be received.|

### feed_items

This optional field can either be a single item, or a list of them. These define which items can be used on the entity, with a "Feed" prompt, to advance the timer, consuming the item.

An item can either be specified as a string identifier, or as an object with the following properties:
- `item`: The string identifier.
- `growth`: An optional decimal number. This defines the proportion of `duration` that the timer will be advanced by when using this item. If unspecified, defaults to `0.1`, so 10%. If negative, the timer will advance backwards, and can even cause the timer to take longer than it originally did.

> [!NOTE]
> When referencing vanilla items, the `minecraft` namespace is optional. You can also include a legacy damage value in the item name following a colon, such as `dye:4` instead of `lapis_lazuli`.


### grow_up

This is the event that runs when the timer elapses. with two fields:
- `target`: Which entity to run the event on. In this context, it can either be `self` for this entity, or `target` for this entity's target. Defaults to `self`.
- `event`: The entity event to run. These can be found in the `events` section of the entity's behavior file.


## Example

```json
"minecraft:ageable": {
    "duration": 5000,
    "feed_items": [
        {
            "item": "dragon_breath",
            "growth": 0.25
        },
        {
            "item": "honey_bottle",
            "growth": 0.05
        }
    ],
    "transform_to_item": "glass_bottle",
    "drop_items": ["diamond"],
    "grow_up": {
        "target": "self",
        "event": "finished_aging"
    }
}
```

## Vanilla entities examples

### pig

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/pig.json" range="17-24":::

### mule

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/mule.json" range="19-55":::

## Vanilla entities using `minecraft:ageable`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bat](../../../../Source/VanillaBehaviorPack_Snippets/entities/bat.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [chicken](../../../../Source/VanillaBehaviorPack_Snippets/entities/chicken.md)
- [cow](../../../../Source/VanillaBehaviorPack_Snippets/entities/cow.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [donkey](../../../../Source/VanillaBehaviorPack_Snippets/entities/donkey.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/horse.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [mooshroom](../../../../Source/VanillaBehaviorPack_Snippets/entities/mooshroom.md)
- [mule](../../../../Source/VanillaBehaviorPack_Snippets/entities/mule.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [rabbit](../../../../Source/VanillaBehaviorPack_Snippets/entities/rabbit.md)
- [sheep](../../../../Source/VanillaBehaviorPack_Snippets/entities/sheep.md)
- [skeleton_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton_horse.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [turtle](../../../../Source/VanillaBehaviorPack_Snippets/entities/turtle.md)
- [villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager_v2.md)
- [villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/villager.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zombie_horse](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_horse.md)
