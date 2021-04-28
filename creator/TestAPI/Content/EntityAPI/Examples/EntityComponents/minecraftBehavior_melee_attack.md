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

:::code language="json" source="~/TestAPI/Source/VanilliaBehaviorPack/entities/zombie.json" range="401-404":::

:::code language="json" source="~/TestAPI/Source/VanilliaBehaviorPack/entities/cave_spider.json" range="98-103":::

### Vanilla mobs using `melee_attack`

- [bee](~/TestAPI/Source/VanilliaBehaviorPack/entities/bee.json)
- [blaze](~/TestAPI/Source/VanilliaBehaviorPack/entities/blaze.json)
- [cave spider](~/TestAPI/Source/VanilliaBehaviorPack/entities/cave_spider.json)
- [creeper](~/TestAPI/Source/VanilliaBehaviorPack/entities/creeper.json)
- [dolphin](~/TestAPI/Source/VanilliaBehaviorPack/entities/dolphin.json)
- [drowned](~/TestAPI/Source/VanilliaBehaviorPack/entities/drowned.json)
- [enderman](~/TestAPI/Source/VanilliaBehaviorPack/entities/enderman.json)
- [endermite](~/TestAPI/Source/VanilliaBehaviorPack/entities/endermite.json)
- [fox](~/TestAPI/Source/VanilliaBehaviorPack/entities/fox.json)
- [hoglin](~/TestAPI/Source/VanilliaBehaviorPack/entities/hoglin.json)
- [husk](~/TestAPI/Source/VanilliaBehaviorPack/entities/husk.json)
- [iron golem](~/TestAPI/Source/VanilliaBehaviorPack/entities/iron_golem.json)
- [panda](~/TestAPI/Source/VanilliaBehaviorPack/entities/panda.json)
- [piglin brute](~/TestAPI/Source/VanilliaBehaviorPack/entities/piglin_brute.json)
- [piglin](~/TestAPI/Source/VanilliaBehaviorPack/entities/piglin.json)
- [pillager](~/TestAPI/Source/VanilliaBehaviorPack/entities/pillager.json)
- [silverfish](~/TestAPI/Source/VanilliaBehaviorPack/entities/silverfish.json)
- [skeleton](~/TestAPI/Source/VanilliaBehaviorPack/entities/skeleton.json)
- [spider](~/TestAPI/Source/VanilliaBehaviorPack/entities/spider.json)
- [stray](~/TestAPI/Source/VanilliaBehaviorPack/entities/stray.json)
- [vindicator](~/TestAPI/Source/VanilliaBehaviorPack/entities/vindicator.json)
- [wither skeleton](~/TestAPI/Source/VanilliaBehaviorPack/entities/wither_skeleton.json)
- [wolf](~/TestAPI/Source/VanilliaBehaviorPack/entities/wolf.json)
- [zoglin](~/TestAPI/Source/VanilliaBehaviorPack/entities/zoglin.json)
- [zombie pigman](~/TestAPI/Source/VanilliaBehaviorPack/entities/zombie_pigman.json)
- [zombie villager](~/TestAPI/Source/VanilliaBehaviorPack/entities/zombie_villager.json)
- [zombie](~/TestAPI/Source/VanilliaBehaviorPack/entities/zombie.json)
