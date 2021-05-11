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
>- [minecraft:behavior.melee_attack](minecraftBehavior_melee_attack.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|attack_interval |0 |Integer |Time range (in seconds) between searching for an attack target, range is in (0, "attack_interval"]. Only used if "attack_interval" is greater than 0, otherwise "scan_interval" is used. |
|attack_interval_min |0 |Integer |Alias for "attack_interval"; provides the same functionality as "attack_interval". |
|attack_owner |false |Boolean |If true, this entity can attack its owner |
|[entity_types](../Definitions/entity_types.md) | |md Object |Filters which types of targets are valid for this entity (Please see entity_types' definition page)|
|must_reach |false |Boolean |If true, this entity requires a path to the target.|
|must_see |false |Boolean |Determines if target-validity requires this entity to be in range only, or both in range and in sight |
|must_see_forget_duration |3.0 |Decimal |Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true.|
|persist_time |0.0 |Decimal |Time (in seconds) this entity can continue attacking the target after the target is no longer valid. |
|reselect_targets |false |Boolean |Allows the attacking entity to update the nearest target, otherwise a target is only reselected after each "scan_interval" or "attack_interval". |
|scan_interval |10 |Integer |If "attack_interval" is 0 or isn't declared, then between attacks: scanning for a new target occurs every amount of ticks equal to "scan_interval", minimum value is 1. Values under 10 can affect performance. |
|set_persistent |false |Boolean |Allows the actor to be set to persist upon targeting a player. |
|target_invisible_multiplier |0.7 | Decimal |Multiplied with the target's armor coverage percentage to modify "max_dist" when detecting an invisible target.|
|target_search_height |-1.0 |Decimal |Maximum vertical target-search distance, if it's greater than the target type's "max_dist". A negative value defaults to "entity_types" greatest "max_dist". |
|target_sneak_visibility_multiplier |0.8 |Decimal |Multiplied with the target type's "max_dist" when trying to detect a sneaking target. |
|within_radius |0.0 |Decimal |Maximum distance this entity can be from the target when following it, otherwise the target becomes invalid. This value is only used if the entity doesn't declare "minecraft:follow_range".|

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

:::code language="json" source="~/TestAPI/Source/VanilliaBehaviorPack/entities/zombie.json" range="435-472":::

### Vanilla mobs using `nearest_attackable_target`

- [bee](Source/VanilliaBehaviorPack_Snippets/entities/bee.md)
- [blaze](Source/VanilliaBehaviorPack_Snippets/entities/blaze.md)
- [cat](Source/VanilliaBehaviorPack_Snippets/entities/cat.md)
- [cave spider](Source/VanilliaBehaviorPack_Snippets/entities/cave_spider.md)
- [creeper](Source/VanilliaBehaviorPack_Snippets/entities/creeper.md)
- [drowned](Source/VanilliaBehaviorPack_Snippets/entities/drowned.md)
- [elder guardian](Source/VanilliaBehaviorPack_Snippets/entities/elder_guardian.md)
- [enderman](Source/VanilliaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](Source/VanilliaBehaviorPack_Snippets/entities/endermite.md)
- [evocation illager](Source/VanilliaBehaviorPack_Snippets/entities/evocation_illager.md)
- [ghast](Source/VanilliaBehaviorPack_Snippets/entities/ghast.md)
- [guardian](Source/VanilliaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](Source/VanilliaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](Source/VanilliaBehaviorPack/entities/husk.md)
- [iron golem](Source/VanilliaBehaviorPack/entities/iron_golem.md)
- [llama](Source/VanilliaBehaviorPack_Snippets/entities/llama.md)
- [magma cube](Source/VanilliaBehaviorPack_Snippets/entities/magma_cube.md)
- [ocelot](Source/VanilliaBehaviorPack_Snippets/entities/ocelot.md)
- [phantom](Source/VanilliaBehaviorPack_Snippets/entities/phantom.md)
- [piglin brute](Source/VanilliaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](Source/VanilliaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](Source/VanilliaBehaviorPack_Snippets/entities/pillager.md)
- [polar bear](Source/VanilliaBehaviorPack_Snippets/entities/polar_bear.md)
- [ravager](Source/VanilliaBehaviorPack_Snippets/entities/ravager.md)
- [shulker](Source/VanilliaBehaviorPack_Snippets/entities/shulker.md)
- [silverfish](Source/VanilliaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton](Source/VanilliaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](Source/VanilliaBehaviorPack_Snippets/entities/slime.md)
- [snow golem](Source/VanilliaBehaviorPack_Snippets/entities/snow_golem.md)
- [spider](Source/VanilliaBehaviorPack_Snippets/entities/spider.md)
- [stray](Source/VanilliaBehaviorPack_Snippets/entities/stray.md)
- [vex](Source/VanilliaBehaviorPack_Snippets/entities/vex.md)
- [vindicator](Source/VanilliaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](Source/VanilliaBehaviorPack_Snippets/entities/witch.md)
- [wither skeleton](Source/VanilliaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](Source/VanilliaBehaviorPack_Snippets/entities/wither.md)
- [wolf](Source/VanilliaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](Source/VanilliaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie pigman](Source/VanilliaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie villager](Source/VanilliaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](Source/VanilliaBehaviorPack_Snippets/entities/zombie.md)