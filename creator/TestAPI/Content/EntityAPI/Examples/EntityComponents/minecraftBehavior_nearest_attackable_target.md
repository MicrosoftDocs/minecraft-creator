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

- [bee](Source/VanilliaBehaviorPack_Snippets/entities/bee.json)
- [blaze](Source/VanilliaBehaviorPack_Snippets/entities/blaze.json)
- [cat](Source/VanilliaBehaviorPack_Snippets/entities/cat.json)
- [cave spider](Source/VanilliaBehaviorPack_Snippets/entities/cave_spider.json)
- [creeper](Source/VanilliaBehaviorPack_Snippets/entities/creeper.json)
- [drowned](Source/VanilliaBehaviorPack_Snippets/entities/drowned.json)
- [elder guardian](Source/VanilliaBehaviorPack_Snippets/entities/elder_guardian.json)
- [enderman](Source/VanilliaBehaviorPack_Snippets/entities/enderman.json)
- [endermite](Source/VanilliaBehaviorPack_Snippets/entities/endermite.json)
- [evocation illager](Source/VanilliaBehaviorPack_Snippets/entities/evocation_illager.json)
- [ghast](Source/VanilliaBehaviorPack_Snippets/entities/ghast.json)
- [guardian](Source/VanilliaBehaviorPack_Snippets/entities/guardian.json)
- [hoglin](Source/VanilliaBehaviorPack_Snippets/entities/hoglin.json)
- [husk](Source/VanilliaBehaviorPack/entities/husk.json)
- [iron golem](Source/VanilliaBehaviorPack/entities/iron_golem.json)
- [llama](Source/VanilliaBehaviorPack_Snippets/entities/llama.json)
- [magma cube](Source/VanilliaBehaviorPack_Snippets/entities/magma_cube.json)
- [ocelot](Source/VanilliaBehaviorPack_Snippets/entities/ocelot.json)
- [phantom](Source/VanilliaBehaviorPack_Snippets/entities/phantom.json)
- [piglin brute](Source/VanilliaBehaviorPack_Snippets/entities/piglin_brute.json)
- [piglin](Source/VanilliaBehaviorPack_Snippets/entities/piglin.json)
- [pillager](Source/VanilliaBehaviorPack_Snippets/entities/pillager.json)
- [polar bear](Source/VanilliaBehaviorPack_Snippets/entities/polar_bear.json)
- [ravager](Source/VanilliaBehaviorPack_Snippets/entities/ravager.json)
- [shulker](Source/VanilliaBehaviorPack_Snippets/entities/shulker.json)
- [silverfish](Source/VanilliaBehaviorPack_Snippets/entities/silverfish.json)
- [skeleton](Source/VanilliaBehaviorPack_Snippets/entities/skeleton.json)
- [slime](Source/VanilliaBehaviorPack_Snippets/entities/slime.json)
- [snow golem](Source/VanilliaBehaviorPack_Snippets/entities/snow_golem.json)
- [spider](Source/VanilliaBehaviorPack_Snippets/entities/spider.json)
- [stray](Source/VanilliaBehaviorPack_Snippets/entities/stray.json)
- [vex](Source/VanilliaBehaviorPack_Snippets/entities/vex.json)
- [vindicator](Source/VanilliaBehaviorPack_Snippets/entities/vindicator.json)
- [witch](Source/VanilliaBehaviorPack_Snippets/entities/witch.json)
- [wither skeleton](Source/VanilliaBehaviorPack_Snippets/entities/wither_skeleton.json)
- [wither](Source/VanilliaBehaviorPack_Snippets/entities/wither.json)
- [wolf](Source/VanilliaBehaviorPack_Snippets/entities/wolf.json)
- [zoglin](Source/VanilliaBehaviorPack_Snippets/entities/zoglin.json)
- [zombie pigman](Source/VanilliaBehaviorPack_Snippets/entities/zombie_pigman.json)
- [zombie villager](Source/VanilliaBehaviorPack_Snippets/entities/zombie_villager.json)
- [zombie](Source/VanilliaBehaviorPack_Snippets/entities/zombie.json)