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

- [bee](../../../../source/vanillabehaviorpack_snippets/entities/bee)
- [blaze](../../../../source/vanillabehaviorpack_snippets/entities/blaze)
- [cave spider](../../../../source/vanillabehaviorpack_snippets/entities/cave_spider)
- [creeper](../../../../source/vanillabehaviorpack_snippets/entities/creeper)
- [dolphin](../../../../source/vanillabehaviorpack_snippets/entities/dolphin)
- [drowned](../../../../source/vanillabehaviorpack_snippets/entities/drowned)
- [enderman](../../../../source/vanillabehaviorpack_snippets/entities/enderman)
- [endermite](../../../../source/vanillabehaviorpack_snippets/entities/endermite)
- [fox](../../../../source/vanillabehaviorpack_snippets/entities/fox)
- [hoglin](../../../../source/vanillabehaviorpack_snippets/entities/hoglin)
- [husk](../../../../source/vanillabehaviorpack_snippets/entities/husk)
- [iron golem](../../../../source/vanillabehaviorpack_snippets/entities/iron_golem)
- [panda](../../../../source/vanillabehaviorpack_snippets/entities/panda)
- [piglin brute](../../../../source/vanillabehaviorpack_snippets/entities/piglin_brute)
- [piglin](../../../../source/vanillabehaviorpack_snippets/entities/piglin)
- [pillager](../../../../source/vanillabehaviorpack_snippets/entities/pillager)
- [silverfish](../../../../source/vanillabehaviorpack_snippets/entities/silverfish)
- [skeleton](../../../../source/vanillabehaviorpack_snippets/entities/skeleton)
- [spider](../../../../source/vanillabehaviorpack_snippets/entities/spider)
- [stray](../../../../source/vanillabehaviorpack_snippets/entities/stray)
- [vindicator](../../../../source/vanillabehaviorpack_snippets/entities/vindicator)
- [wither skeleton](../../../../source/vanillabehaviorpack_snippets/entities/wither_skeleton)
- [wolf](../../../../source/vanillabehaviorpack_snippets/entities/wolf)
- [zoglin](../../../../source/vanillabehaviorpack_snippets/entities/zoglin)
- [zombie pigman](../../../../source/vanillabehaviorpack_snippets/entities/zombie_pigman)
- [zombie villager](../../../../source/vanillabehaviorpack_snippets/entities/zombie_villager)
- [zombie](../../../../source/vanillabehaviorpack_snippets/entities/zombie)
