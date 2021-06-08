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
>- [minecraft:behavior.hurt_by_target](minecraftBehavior_hurt_by_target.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
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

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/zombie.json" range="401-403":::

### Cave Spider

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/cave_spider.json" range="98-103":::

### Vanilla mobs using `melee_attack`

- [bee](../../../../source/vanillabehaviorpack_snippets/entities/bee.md)
- [blaze](../../../../source/vanillabehaviorpack_snippets/entities/blaze.md)
- [cave spider](../../../../source/vanillabehaviorpack_snippets/entities/cave_spider.md)
- [creeper](../../../../source/vanillabehaviorpack_snippets/entities/creeper.md)
- [dolphin](../../../../source/vanillabehaviorpack_snippets/entities/dolphin.md)
- [drowned](../../../../source/vanillabehaviorpack_snippets/entities/drowned.md)
- [enderman](../../../../source/vanillabehaviorpack_snippets/entities/enderman.md)
- [endermite](../../../../source/vanillabehaviorpack_snippets/entities/endermite.md)
- [fox](../../../../source/vanillabehaviorpack_snippets/entities/fox.md)
- [hoglin](../../../../source/vanillabehaviorpack_snippets/entities/hoglin.md)
- [husk](../../../../source/vanillabehaviorpack_snippets/entities/husk.md)
- [iron_golem](../../../../source/vanillabehaviorpack_snippets/entities/iron_golem.md)
- [panda](../../../../source/vanillabehaviorpack_snippets/entities/panda.md)
- [piglin_brute](../../../../source/vanillabehaviorpack_snippets/entities/piglin_brute.md)
- [piglin](../../../../source/vanillabehaviorpack_snippets/entities/piglin.md)
- [pillager](../../../../source/vanillabehaviorpack_snippets/entities/pillager.md)
- [silverfish](../../../../source/vanillabehaviorpack_snippets/entities/silverfish.md)
- [skeleton](../../../../source/vanillabehaviorpack_snippets/entities/skeleton.md)
- [spider](../../../../source/vanillabehaviorpack_snippets/entities/spider.md)
- [stray](../../../../source/vanillabehaviorpack_snippets/entities/stray.md)
- [vindicator](../../../../source/vanillabehaviorpack_snippets/entities/vindicator.md)
- [wither skeleton](../../../../source/vanillabehaviorpack_snippets/entities/wither_skeleton.md)
- [wolf](../../../../source/vanillabehaviorpack_snippets/entities/wolf.md)
- [zoglin](../../../../source/vanillabehaviorpack_snippets/entities/zoglin.md)
- [zombie pigman](../../../../source/vanillabehaviorpack_snippets/entities/zombie_pigman.md)
- [zombie_villager](../../../../source/vanillabehaviorpack_snippets/entities/zombie_villager.md)
- [zombie](../../../../source/vanillabehaviorpack_snippets/entities/zombie.md)
