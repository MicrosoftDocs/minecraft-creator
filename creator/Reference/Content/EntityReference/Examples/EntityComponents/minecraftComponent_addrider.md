---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:addrider
ms.prod: gaming
---

# Entity Documentation - minecraft:addrider

`minecraft:addrider` allows an entity to spawn an additional entity as a passenger.

Similarly to [`minecraft:spell_effects`](../EntityAttributes/minecraftAttribute_spell_effects.md), this component performs a one-time operation on the entity when added. Removing the component will not remove or dismount any passenger. Adding different versions of the component multiple times will add each passenger in turn. Once the component has been added, it will not provide any further functionality.

If the passenger entity cannot be added for any reason, no entity will be spawned. The failed passenger's ambient sound will play once.

Reasons a passenger entity cannot be spawned include:
* The [`minecraft:rideable`](../EntityComponents/minecraftComponent_rideable.md) component is missing.
* The `rideable` component specifies `family_types`, and the passenger has none of them in its [`minecraft:type_family`](../EntityProperties/minecraftProperty_type_family.md) component.
* The entity is already being ridden by its max number of passengers, as specified in the `rideable` component's `seat_count` property.

## Parameters

### `entity_type`

This is the string identifier of the passenger entity to be spawned.

### `spawn_event`

This is the optional string entity event that will be run on the passenger when spawning it. These can be found in the `events` section of the entity's behavior file.

If unspecified, the default `minecraft:entity_spawned` event will be run.

>[!NOTE]
> You can also specify the event in `entity_type`, after the identifier in between angle brackets, like `minecraft:sheep<spawn_adult>`. This event is ignored if `spawn_event` is included. Specifying an event in this manner is not recommended.


## Example

```json
"minecraft:addrider": {
    "entity_type": "minecraft:cat",
    "spawn_event": "minecraft:spawn_midnight_cat"
}
```

## Vanilla entities examples

### `spider`

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/spider.json" range="14-16":::

## Vanilla entities using `minecraft:addrider`

- [`cave_spider`](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [`ravager`](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [`spider`](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [`strider`](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
