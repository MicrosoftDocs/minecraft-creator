---
author: v-josjones
ms.author: v-josjones
title: minecraft:behavior.melee_attack
ms.prod: gaming
---

# minecraft:behavior.melee_attack Component

This component allows entities to make close combat melee attacks.

> [!IMPORTANT]
> In order for the entity to be able to attack its target, the entity will also need another component that sets its target, such as:
>
>- [minecraft:behavior.nearest_attackable_target](Examples/EntityComponents/minecraftBehavior_nearest_attackable_target.md)
>- minecraft:behavior.hurt_by_target

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|[melee_fov](Examples/Definitions/melee_fov.md)     |90.0       |Decimal   |The allowable FOV the actor will use to determine if it can make a valid melee attack|
|speed_multiplier     |1.0         |Decimal         |Movement speed multiplier of the mob when using this AI Goal|
|track_target     |false         |Boolean         |If true, this mob will chase after the target as long as it's a valid target|
|attack_types     |         |String         |Defines the entity types this mob will attack|
|random_stop_interval    |0         |Integer        |Defines the probability the mob will stop fighting. A value of 0 disables randomly stopping, while a value of 1 defines a 50% chance|
|reach_multiplier   |2.0         |Decimal         |Multiplier for how far outside its box the mob can reach its target (this can be used to simulate a mob with longer arms by making this bigger)|
|attack_once     |false         |Boolean       |If true, this mob will attack only one time.|
|require_complete_path    |false         |Boolean         |If true, this goal will only trigger if the mob can reach its target.|

## Example

```json
"minecraft:behavior.melee_attack": { 
        "priority": 3, 
        "melee_fov": 90, 
        "speed_multiplier": 1, 
        "track_target":false, 
        "attack_types": "minecraft:sheep",
        "reach_multiplier": 2, 
        "attack_once": false 
      }
```

## Vanilla mob examples

:::code language="json" source="Source/VanilliaBehaviorPack/entities/zombie.json" range="401-404":::

:::code language="json" source="Source/VanilliaBehaviorPack/entities/cave_spider.json" range="98-103":::

### Vanilla mobs using `melee_attack`

- [bee](Source/VanilliaBehaviorPack/entities/bee.json)
- [blaze](Source/VanilliaBehaviorPack/entities/blaze.json)
- [cave spider](Source/VanilliaBehaviorPack/entities/cave_spider.json)
- [creeper](Source/VanilliaBehaviorPack/entities/creeper.json)
- [dolphin](Source/VanilliaBehaviorPack/entities/dolphin.json)
- [drowned](Source/VanilliaBehaviorPack/entities/drowned.json)
- [enderman](Source/VanilliaBehaviorPack/entities/enderman.json)
- [endermite](Source/VanilliaBehaviorPack/entities/endermite.json)
- [fox](Source/VanilliaBehaviorPack/entities/fox.json)
- [hoglin](Source/VanilliaBehaviorPack/entities/hoglin.json)
- [husk](Source/VanilliaBehaviorPack/entities/husk.json)
- [iron golem](Source/VanilliaBehaviorPack/entities/iron_golem.json)
- [panda](Source/VanilliaBehaviorPack/entities/panda.json)
- [piglin brute](Source/VanilliaBehaviorPack/entities/piglin_brute.json)
- [piglin](Source/VanilliaBehaviorPack/entities/piglin.json)
- [pillager](Source/VanilliaBehaviorPack/entities/pillager.json)
- [silverfish](Source/VanilliaBehaviorPack/entities/silverfish.json)
- [skeleton](Source/VanilliaBehaviorPack/entities/skeleton.json)
- [spider](Source/VanilliaBehaviorPack/entities/spider.json)
- [stray](Source/VanilliaBehaviorPack/entities/stray.json)
- [vindicator](Source/VanilliaBehaviorPack/entities/vindicator.json)
- [wither skeleton](Source/VanilliaBehaviorPack/entities/wither_skeleton.json)
- [wolf](Source/VanilliaBehaviorPack/entities/wolf.json)
- [zoglin](Source/VanilliaBehaviorPack/entities/zoglin.json)
- [zombie pigman](Source/VanilliaBehaviorPack/entities/zombie_pigman.json)
- [zombie villager](Source/VanilliaBehaviorPack/entities/zombie_villager.json)
- [zombie](Source/VanilliaBehaviorPack/entities/zombie.json)