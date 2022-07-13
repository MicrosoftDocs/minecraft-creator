---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:spell_effects
ms.prod: gaming
---

# Entity Documentation - minecraft:spell_effects

`minecraft:spell_effects` allows an entity to add or remove status effects from itself.

Similarly to [`addrider`](../EntityComponents/minecraftComponent_addrider.md), this component performs a one-time operation on the entity when added. Removing the component will not change the entity's current effects. Adding different versions of the component multiple times will perform each one in turn. Once the component has been added, it will not provide any further functionality.

> [!NOTE]
> There is one exception to this behavior: if this component is present on a player, its effects will be re-applied every time the player enters the world. To avoid this, remove the component shortly after adding it, or add an empty component to replace it.

## Parameters

### `add_effects`

`add_effects` is a list variable that can use status effect objects to define which effects should be added to the entity when the component is applied. Each object contains the following properties:

* `effect`: The string identifier of the status effect to add. These are the same as used in the `/effect` command.
* `duration`: The amount of time in seconds the effect should last. This allows for fractional numbers. For example, instant effects should be set to 0.05 seconds (one tick).
* `amplifier`: The level of the effect, same as used in the `/effect` command (0 for level I, 1 for level II, etc). Defaults to 0.
* `ambient`: Boolean value that should cause the particles emitted by the entity to be partially transparent. This does not work properly, resulting in this property having no effect. Defaults to false.
* `visible`: Boolean value that determines whether the particles emitted by the entity should appear. Defaults to true.
* `display_on_screen_animation`: Boolean value. When set to true, applying this effect displays an animated graphic on-screen similar to the totem of undying effect. Obviously, this only works for players. Defaults to false.

### `remove_effects`
This can either be a single string identifier for a status effect, or a list of them. These define which effects should be removed from the entity, if present, when the component is applied.

## Example

```json
"minecraft:spell_effects": {
    "add_effects": [
        {
            "effect": "regeneration",
            "duration": 25,
            "amplifier": 2,
            "visible": false,
            "display_on_screen_animation": true
        },
        {
            "effect": "instant_health",
            "duration": 0.05
        }
    ],
    "remove_effects": ["poison", "wither"]
}
```

## Vanilla entities examples

### `zombie_villager_v2`

```json
"minecraft:spell_effects": {
    "add_effects": [
        {
            "effect": "strength",
            "duration": 100
        },
        {
            "effect": "heal",
            "duration": 100
        }
    ],
    "remove_effects": "weakness"    
}
```

## Vanilla entities using `minecraft:spell_effects`

- [`player`](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [`zombie_villager_v2`](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [`zombie_villager`](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
