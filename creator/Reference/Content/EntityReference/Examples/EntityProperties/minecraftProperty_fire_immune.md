---
author: v-josjones
ms.author: v-josjones
title: Entity Documentation - minecraft:fire_immune
ms.prod: gaming
---

# Entity Documentation -  minecraft:fire_immune

`minecraft:fire_immune` prevents an entity from taking fire damage. Its effects are exactly the same as the `fire_resistance` status effect.
This property provides fire immunity to the following scenarios:

- Immunity to standing in fire, lava, and campfires.
- Immunity to blaze fireballs.
- The entity will **not** catch fire, show the visual fire overlay, or glow orange.

>[!NOTE]
> [Currently, standing inside of a lava cauldron still deals damage to and ignites entities with this component.](https://bugs.mojang.com/browse/MCPE-65962)


## Example

```json
"minecraft:fire_immune": {}
```

## Vanilla entities examples

### magma_cube

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/magma_cube.json" range="97-98":::

## Vanilla entities using `minecraft:fire_immune`

- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [npc](../../../../Source/VanillaBehaviorPack_Snippets/entities/npc.md)
- [strider](../../../../Source/VanillaBehaviorPack_Snippets/entities/strider.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [wither_skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie_pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
