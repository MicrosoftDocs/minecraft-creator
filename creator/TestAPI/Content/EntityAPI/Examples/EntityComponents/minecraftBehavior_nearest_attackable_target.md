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

|Name |Default Value  |Type  |Description  |
|---------|---------|---------|---------|
|attack_interval |0 |Integer |Time range (in seconds) between searching for an attack target, range is in (0, "attack_interval"]. Only used if "attack_interval" is greater than 0, otherwise "scan_interval" is used. |
|attack_interval_min |0 |Integer |Alias for "attack_interval"; provides the same functionality as "attack_interval". |
|attack_owner |false |Boolean |If true, this entity can attack its owner |
|[entity_types](Examples/Definitions/entity_types.md) | |JSON Object |Filters which types of targets are valid for this entity (Please see entity_types' definition page)|
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

:::code language="markdown" source="../Definitions/entity_types.md" range="14-21":::

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