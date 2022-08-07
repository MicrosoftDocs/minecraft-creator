---
author: mammerla
ms.author: v-jillheaden
title: Entity Documentation - minecraft:behavior.nearest_attackable_target
ms.prod: gaming
---

# Entity Documentation - minecraft:behavior.nearest_attackable_target

Allows an entity to attack the closest target within a given subset of specific target types.

> [!NOTE]
> This behavior is a requirement for the following behaviors:
>
>- [minecraft:behavior.melee_attack](minecraftBehavior_melee_attack.md)

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|attack_interval |0 |Integer |Time range (in seconds) between searching for an attack target, range is in (0, "attack_interval"]. Only used if "attack_interval" is greater than 0, otherwise "scan_interval" is used. |
|attack_interval_min |0 |Integer |Alias for "attack_interval"; provides the same functionality as "attack_interval". |
|attack_owner |false |Boolean |If true, this entity can attack its owner. |
|entity_types | *not set* |JSON Object |Filters which types of targets are valid for this entity. See [entity_types' definition page](../Definitions/NestedTables/entity_types.md).|
|must_reach |false |Boolean |If true, this entity requires a path to the target.|
|must_see |false |Boolean |Determines if target-validity requires this entity to be in range only, or both in range and in sight. |
|must_see_forget_duration |3.0 |Decimal |Time (in seconds) the target must not be seen by this entity to become invalid. Used only if "must_see" is true.|
|persist_time |0.0 |Decimal |Time (in seconds) this entity can continue attacking the target after the target is no longer valid. |
|priority|*not set*|Integer|The higher the priority, the sooner this behavior will be executed as a goal.|
|reevaluate_description| false| Boolean| If true, the mob will stop being targeted if it stops meeting any conditions. |
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

```json
"minecraft:behavior.nearest_attackable_target": {
        "priority": 2,
        "must_see": true,
        "reselect_targets": true,
        "within_radius": 25.0,
        "must_see_forget_duration": 17.0,
        "entity_types": [
          {
            "filters": {
              "any_of": [
                { "test": "is_family", "subject": "other", "value": "player" },
                { "test": "is_family", "subject": "other", "value": "snowgolem" },
                { "test": "is_family", "subject": "other", "value": "irongolem" }
              ]
            },
            "max_dist": 35
          },
          {
            "filters": {
              "any_of": [
                { "test": "is_family", "subject": "other", "value": "villager" },
                { "test": "is_family", "subject": "other", "value": "wandering_trader" }
              ]
            },
            "max_dist": 35,
            "must_see": false
          },
          {
            "filters": {
              "all_of": [
                { "test": "is_family", "subject": "other", "value": "baby_turtle" },
                { "test": "in_water", "subject": "other", "operator": "!=", "value": true }
              ]
            },
            "max_dist": 35
          }
        ]
      },
```

### Vanilla mobs using `nearest_attackable_target`

- [axolotl](../../../../Source/VanillaBehaviorPack_Snippets/entities/axolotl.md)
- [bee](../../../../Source/VanillaBehaviorPack_Snippets/entities/bee.md)
- [blaze](../../../../Source/VanillaBehaviorPack_Snippets/entities/blaze.md)
- [cat](../../../../Source/VanillaBehaviorPack_Snippets/entities/cat.md)
- [cave spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/cave_spider.md)
- [creeper](../../../../Source/VanillaBehaviorPack_Snippets/entities/creeper.md)
- [drowned](../../../../Source/VanillaBehaviorPack_Snippets/entities/drowned.md)
- [elder_guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/elder_guardian.md)
- [enderman](../../../../Source/VanillaBehaviorPack_Snippets/entities/enderman.md)
- [endermite](../../../../Source/VanillaBehaviorPack_Snippets/entities/endermite.md)
- [evocation_illager](../../../../Source/VanillaBehaviorPack_Snippets/entities/evocation_illager.md)
- [ghast](../../../../Source/VanillaBehaviorPack_Snippets/entities/ghast.md)
- [goat](../../../../Source/VanillaBehaviorPack_Snippets/entities/goat.md)
- [guardian](../../../../Source/VanillaBehaviorPack_Snippets/entities/guardian.md)
- [hoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/hoglin.md)
- [husk](../../../../Source/VanillaBehaviorPack_Snippets/entities/husk.md)
- [iron_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/iron_golem.md)
- [llama](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama.md)
- [magma_cube](../../../../Source/VanillaBehaviorPack_Snippets/entities/magma_cube.md)
- [ocelot](../../../../Source/VanillaBehaviorPack_Snippets/entities/ocelot.md)
- [phantom](../../../../Source/VanillaBehaviorPack_Snippets/entities/phantom.md)
- [piglin_brute](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin_brute.md)
- [piglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/piglin.md)
- [pillager](../../../../Source/VanillaBehaviorPack_Snippets/entities/pillager.md)
- [polar_bear](../../../../Source/VanillaBehaviorPack_Snippets/entities/polar_bear.md)
- [ravager](../../../../Source/VanillaBehaviorPack_Snippets/entities/ravager.md)
- [shulker](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker.md)
- [silverfish](../../../../Source/VanillaBehaviorPack_Snippets/entities/silverfish.md)
- [skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/skeleton.md)
- [slime](../../../../Source/VanillaBehaviorPack_Snippets/entities/slime.md)
- [snow_golem](../../../../Source/VanillaBehaviorPack_Snippets/entities/snow_golem.md)
- [spider](../../../../Source/VanillaBehaviorPack_Snippets/entities/spider.md)
- [stray](../../../../Source/VanillaBehaviorPack_Snippets/entities/stray.md)
- [vex](../../../../Source/VanillaBehaviorPack_Snippets/entities/vex.md)
- [vindicator](../../../../Source/VanillaBehaviorPack_Snippets/entities/vindicator.md)
- [witch](../../../../Source/VanillaBehaviorPack_Snippets/entities/witch.md)
- [wither skeleton](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skeleton.md)
- [wither](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither.md)
- [wolf](../../../../Source/VanillaBehaviorPack_Snippets/entities/wolf.md)
- [zoglin](../../../../Source/VanillaBehaviorPack_Snippets/entities/zoglin.md)
- [zombie pigman](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_pigman.md)
- [zombie_villager](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie_villager.md)
- [zombie](../../../../Source/VanillaBehaviorPack_Snippets/entities/zombie.md)
