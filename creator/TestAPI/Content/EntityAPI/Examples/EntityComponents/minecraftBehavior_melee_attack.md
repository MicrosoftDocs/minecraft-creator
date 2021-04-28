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
>- [minecraft:behavior.nearest_attackable_target](creator/TestAPI/Content/EntityAPI/Examples/EntityComponents/minecraftBehavior_nearest_attackable_target.md)
>- minecraft:behavior.hurt_by_target

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|[melee_fov](creator/TestAPI/Examples/Definitions/melee_fov.md)     |90.0       |Decimal   |The allowable FOV the actor will use to determine if it can make a valid melee attack|
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

:::code language="json" source="../../Source/VanilliaBehaviorPack/entities/zombie.json" range="401-404":::

:::code language="json" source="../../Source/VanilliaBehaviorPack/entities/cave_spider.json" range="98-103":::

### Vanilla mobs using `melee_attack`

- [bee](creator\TestAPI\Source\VanilliaBehaviorPack\entities\bee.json)
- [blaze](creator\TestAPI\Source\VanilliaBehaviorPack\entities\blaze.json)
- [cave spider](creator\TestAPI\Source\VanilliaBehaviorPack\entities\cave_spider.json)
- [creeper](creator\TestAPI\Source\VanilliaBehaviorPack\entities\creeper.json)
- [dolphin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\dolphin.json)
- [drowned](creator\TestAPI\Source\VanilliaBehaviorPack\entities\drowned.json)
- [enderman](creator\TestAPI\Source\VanilliaBehaviorPack\entities\enderman.json)
- [endermite](creator\TestAPI\Source\VanilliaBehaviorPack\entities\endermite.json)
- [fox](creator\TestAPI\Source\VanilliaBehaviorPack\entities\fox.json)
- [hoglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\hoglin.json)
- [husk](creator\TestAPI\Source\VanilliaBehaviorPack\entities\husk.json)
- [iron golem](creator\TestAPI\Source\VanilliaBehaviorPack\entities\iron_golem.json)
- [panda](creator\TestAPI\Source\VanilliaBehaviorPack\entities\panda.json)
- [piglin brute](creator\TestAPI\Source\VanilliaBehaviorPack\entities\piglin_brute.json)
- [piglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\piglin.json)
- [pillager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\pillager.json)
- [silverfish](creator\TestAPI\Source\VanilliaBehaviorPack\entities\silverfish.json)
- [skeleton](creator\TestAPI\Source\VanilliaBehaviorPack\entities\skeleton.json)
- [spider](creator\TestAPI\Source\VanilliaBehaviorPack\entities\spider.json)
- [stray](creator\TestAPI\Source\VanilliaBehaviorPack\entities\stray.json)
- [vindicator](creator\TestAPI\Source\VanilliaBehaviorPack\entities\vindicator.json)
- [wither skeleton](creator\TestAPI\Source\VanilliaBehaviorPack\entities\wither_skeleton.json)
- [wolf](creator\TestAPI\Source\VanilliaBehaviorPack\entities\wolf.json)
- [zoglin](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zoglin.json)
- [zombie pigman](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie_pigman.json)
- [zombie villager](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie_villager.json)
- [zombie](creator\TestAPI\Source\VanilliaBehaviorPack\entities\zombie.json)