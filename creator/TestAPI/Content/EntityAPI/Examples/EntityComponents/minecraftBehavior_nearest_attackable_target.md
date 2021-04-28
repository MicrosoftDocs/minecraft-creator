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
>- [minecraft:behavior.melee_attack](creator/TestAPI/Content/EntityAPI/Examples/EntityComponents/minecraftBehavior_melee_attack.md)

## Parameters

:::code language="markdown" source="../../../../Source/entity.md" range="9765-9884":::

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

:::code language="json" source="../../Source/VanilliaBehaviorPack/entities/zombie.json" range="435-472":::

### Vanilla mobs using `nearest_attackable_target`

- [bee](creator\TestAPI\Source\VanilliaBehaviorPack\entities\bee.json)
- [blaze](creator\TestAPI\Source\VanilliaBehaviorPack\entities\blaze.json)
- [cat](creator\TestAPI\Source\VanilliaBehaviorPack\entities\cat.json)
- [cave spider](creator\TestAPI\Source\VanilliaBehaviorPack\entities\cave_spider.json)
- [creeper](creator\TestAPI\Source\VanilliaBehaviorPack\entities\creeper.json)
- [drowned](creator\TestAPI\Source\VanilliaBehaviorPack\entities\drowned.json)
- [elder guardian](creator\TestAPI\Source\VanilliaBehaviorPack\entities\elder_guardian.json)
- [enderman](creator\TestAPI\Source\VanilliaBehaviorPack\entities\enderman.json)
- [endermite](creator\TestAPI\Source\VanilliaBehaviorPack\entities\endermite.json)
- [evocation illager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\evocation_illager.json)
- [ghast](creator\TestAPI\Source\VanilliaBehaviorPack\entities\ghast.json)
- [guardian](creator\TestAPI\Source\VanilliaBehaviorPack\entities\guardian.json)
- [hoglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\hoglin.json)
- [husk](creator\TestAPI\Source\VanilliaBehaviorPack\entities\husk.json)
- [iron golem](creator\TestAPI\Source\VanilliaBehaviorPack\entities\iron_golem.json)
- [llama](creator\TestAPI\Source\VanilliaBehaviorPack\entities\llama.json)
- [magma cube](creator\TestAPI\Source\VanilliaBehaviorPack\entities\magma_cube.json)
- [ocelot](creator\TestAPI\Source\VanilliaBehaviorPack\entities\ocelot.json)
- [phantom](creator\TestAPI\Source\VanilliaBehaviorPack\entities\phantom.json)
- [piglin brute](creator\TestAPI\Source\VanilliaBehaviorPack\entities\piglin_brute.json)
- [piglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\piglin.json)
- [pillager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\pillager.json)
- [polar bear](creator\TestAPI\Source\VanilliaBehaviorPack\entities\polar_bear.json)
- [ravager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\ravager.json)
- [shulker](creator\TestAPI\Source\VanilliaBehaviorPack\entities\shulker.json)
- [silverfish](creator\TestAPI\Source\VanilliaBehaviorPack\entities\silverfish.json)
- [skeleton](creator\TestAPI\Source\VanilliaBehaviorPack\entities\skeleton.json)
- [slime](creator\TestAPI\Source\VanilliaBehaviorPack\entities\slime.json)
- [snow golem](creator\TestAPI\Source\VanilliaBehaviorPack\entities\snow_golem.json)
- [spider](creator\TestAPI\Source\VanilliaBehaviorPack\entities\spider.json)
- [stray](creator\TestAPI\Source\VanilliaBehaviorPack\entities\stray.json)
- [vex](creator\TestAPI\Source\VanilliaBehaviorPack\entities\vex.json)
- [vindicator](creator\TestAPI\Source\VanilliaBehaviorPack\entities\vindicator.json)
- [witch](creator\TestAPI\Source\VanilliaBehaviorPack\entities\witch.json)
- [wither skeleton](creator\TestAPI\Source\VanilliaBehaviorPack\entities\wither_skeleton.json)
- [wither](creator\TestAPI\Source\VanilliaBehaviorPack\entities\wither.json)
- [wolf](creator\TestAPI\Source\VanilliaBehaviorPack\entities\wolf.json)
- [zoglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zoglin.json)
- [zombie pigman](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie_pigman.json)
- [zombie villager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie_villager.json)
- [zombie](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie.json)