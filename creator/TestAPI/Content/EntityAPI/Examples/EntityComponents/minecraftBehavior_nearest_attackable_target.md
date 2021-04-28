---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.nearest_attackable_target
ms.prod: gaming
---

# minecraft:behavior.nearest_attackable_target Component

Allows the mob to check for and pursue the nearest valid target.

> [!NOTE]
> This behavior is a requirement for the following behaviors:
>
>- [minecraft:behavior.melee_attack](Examples/EntityComponents/minecraftBehavior_melee_attack.md)

## Parameters

:::code language="html" source="../../../../Source/entity.md" range="9765-9884":::

## Example

```json
"minecraft:behavior.nearest_attackable_target":{
        "priority": 2,
        "must_see":true,
        "reselect_targets": true,
        "within_radius": 25.0,
        "entity_types":[
          {
            "filters":{
              "test": "is_family", "subject": "other", "value": "player"
            },
            "max_dist":32
          }
        ]
      }
```

## Vanilla mob examples

### Zombie

:::code language="json" source="Source/VanilliaBehaviorPack/entities/zombie.json" range="435-472":::

### Vanilla mobs using `nearest_attackable_target`

- [bee](Source/VanilliaBehaviorPack/entities/bee.json)
- [blaze](Source/VanilliaBehaviorPack/entities/blaze.json)
- [cat](Source/VanilliaBehaviorPack/entities/cat.json)
- [cave spider](Source/VanilliaBehaviorPack/entities/cave_spider.json)
- [creeper](Source/VanilliaBehaviorPack/entities/creeper.json)
- [drowned](Source/VanilliaBehaviorPack/entities/drowned.json)
- [elder guardian](Source/VanilliaBehaviorPack/entities/elder_guardian.json)
- [enderman](Source/VanilliaBehaviorPack/entities/enderman.json)
- [endermite](Source/VanilliaBehaviorPack/entities/endermite.json)
- [evocation illager](Source/VanilliaBehaviorPack/entities/evocation_illager.json)
- [ghast](Source/VanilliaBehaviorPack/entities/ghast.json)
- [guardian](Source/VanilliaBehaviorPack/entities/guardian.json)
- [hoglin](Source/VanilliaBehaviorPack/entities/hoglin.json)
- [husk](Source/VanilliaBehaviorPack/entities/husk.json)
- [iron golem](Source/VanilliaBehaviorPack/entities/iron_golem.json)
- [llama](Source/VanilliaBehaviorPack/entities/llama.json)
- [magma cube](Source/VanilliaBehaviorPack/entities/magma_cube.json)
- [ocelot](Source/VanilliaBehaviorPack/entities/ocelot.json)
- [phantom](Source/VanilliaBehaviorPack/entities/phantom.json)
- [piglin brute](Source/VanilliaBehaviorPack/entities/piglin_brute.json)
- [piglin](Source/VanilliaBehaviorPack/entities/piglin.json)
- [pillager](Source/VanilliaBehaviorPack/entities/pillager.json)
- [polar bear](Source/VanilliaBehaviorPack/entities/polar_bear.json)
- [ravager](Source/VanilliaBehaviorPack/entities/ravager.json)
- [shulker](Source/VanilliaBehaviorPack/entities/shulker.json)
- [silverfish](Source/VanilliaBehaviorPack/entities/silverfish.json)
- [skeleton](Source/VanilliaBehaviorPack/entities/skeleton.json)
- [slime](Source/VanilliaBehaviorPack/entities/slime.json)
- [snow golem](Source/VanilliaBehaviorPack/entities/snow_golem.json)
- [spider](Source/VanilliaBehaviorPack/entities/spider.json)
- [stray](Source/VanilliaBehaviorPack/entities/stray.json)
- [vex](Source/VanilliaBehaviorPack/entities/vex.json)
- [vindicator](Source/VanilliaBehaviorPack/entities/vindicator.json)
- [witch](Source/VanilliaBehaviorPack/entities/witch.json)
- [wither skeleton](Source/VanilliaBehaviorPack/entities/wither_skeleton.json)
- [wither](Source/VanilliaBehaviorPack/entities/wither.json)
- [wolf](Source/VanilliaBehaviorPack/entities/wolf.json)
- [zoglin](Source/VanilliaBehaviorPack/entities/zoglin.json)
- [zombie pigman](Source/VanilliaBehaviorPack/entities/zombie_pigman.json)
- [zombie villager](Source/VanilliaBehaviorPack/entities/zombie_villager.json)
- [zombie](Source/VanilliaBehaviorPack/entities/zombie.json)