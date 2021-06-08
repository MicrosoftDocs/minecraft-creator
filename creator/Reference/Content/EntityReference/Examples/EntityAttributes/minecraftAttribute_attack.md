---
author: v-josjones
ms.author: v-josjones
title: minecraft:attack
ms.prod: gaming
---

# minecraft:attack

`minecraft:attack` allows an entity to define an entity's melee attack and any additional effects on it's attack.

>[!IMPORTANT]
> `minecraft:attack` is *required* for an entity to attack another entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| damage|*not set* | Range [a, b]| Range of the random amount of damage the melee attack deals. A negative value can heal the entity instead of hurting it |
|effect_duration| 0.0| Decimal|  Duration in seconds of the status ailment applied to the damaged entity |
|effect_name|*not set* | String|  Identifier of the status ailment to apply to an entity attacked by this entity's melee attack |

## Example

```json
"minecraft:attack":{
    "damage": 2,
    "effect_duration": 10.0,
    "effect_name": "poison"
}
```

## Vanilla entities examples

### zombie

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zombie.json" range="169-171":::

### wither_skeleton

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/wither_skeleton.json" range="34-38":::

## Vanilla entities using `minecraft:attack`

- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave_spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanillaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [ender_crystal](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_crystal.md)
- [ender_dragon](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_dragon.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [fox](../../../../Source/VanillaBehaviorPack_Snippets/entities/fox.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [panda](../../../../Source/VanillaBehaviorPack_Snippets/entities/panda.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [pig](../../../../Source/VanillaBehaviorPack_Snippets/entities/pig.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [player](../../../../Source/VanillaBehaviorPack_Snippets/entities/player.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [squid](../../../../Source/VanillaBehaviorPack_Snippets/entities/squid.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [wither skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager_v2](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager_v2.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)