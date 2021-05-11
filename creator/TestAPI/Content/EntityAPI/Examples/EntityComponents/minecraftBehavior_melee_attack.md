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
>- [minecraft:behavior.nearest_attackable_target Component](minecraftBehavior_nearest_attackable_target.md)
>- minecraft:behavior.hurt_by_target

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|[melee_fov](../Definitions/melee_fov.md)     |90.0       |Decimal   |The allowable FOV the actor will use to determine if it can make a valid melee attack|
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

### Zombie

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/zombie.json" range="401-403":::

### Cave Spider

:::code language="json" source="../../../../Source/VanilliaBehaviorPack/entities/cave_spider.json" range="98-103":::

### Vanilla mobs using `melee_attack`

- [bee](../../../../Source/VanilliaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanilliaBehaviorPack_Snippets/entities/blaze.md)
- [cave spider](../../../../Source/VanilliaBehaviorPack_Snippets/entities/cave_spider.md)
- [creeper](../../../../Source/VanilliaBehaviorPack_Snippets/entities/creeper.md)
- [dolphin](../../../../Source/VanilliaBehaviorPack_Snippets/entities/dolphin.md)
- [drowned](../../../../Source/VanilliaBehaviorPack_Snippets/entities/drowned.md)
- [enderman](../../../../Source/VanilliaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanilliaBehaviorPack_Snippets/entities/endermite.md)
- [fox](../../../../Source/VanilliaBehaviorPack_Snippets/entities/fox.md)
- [hoglin](../../../../Source/VanilliaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanilliaBehaviorPack_Snippets/entities/husk.md)
- [iron golem](../../../../Source/VanilliaBehaviorPack_Snippets/entities/iron_golem.md)
- [panda](../../../../Source/VanilliaBehaviorPack_Snippets/entities/panda.md)
- [piglin brute](../../../../Source/VanilliaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanilliaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanilliaBehaviorPack_Snippets/entities/pillager.md)
- [silverfish](../../../../Source/VanilliaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton](../../../../Source/VanilliaBehaviorPack_Snippets/entities/skeleton.md)
- [spider](../../../../Source/VanilliaBehaviorPack_Snippets/entities/spider.md)
- [stray](../../../../Source/VanilliaBehaviorPack_Snippets/entities/stray.md)
- [vindicator](../../../../Source/VanilliaBehaviorPack_Snippets/entities/vindicator.md)
- [wither skeleton](../../../../Source/VanilliaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wolf](../../../../Source/VanilliaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](../../../../Source/VanilliaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie pigman](../../../../Source/VanilliaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie villager](../../../../Source/VanilliaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanilliaBehaviorPack_Snippets/entities/zombie.md)
