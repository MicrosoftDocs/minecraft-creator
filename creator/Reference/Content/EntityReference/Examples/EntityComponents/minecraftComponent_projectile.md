---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - minecraft:projectile
ms.prod: gaming
---

# Entity Documentation - minecraft:projectile

`minecraft:projectile` allows the entity to be a thrown entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| anchor| 0 | Integer| Allows you to choose an anchor point for where the projectile is fired from. 0 = Original point, 1 = EyeHeight, and 2 = Middle or body height. |
| angle_offset| 0.0| Decimal| Alters the angle at which a projectile is vertically shot. Many splash potions in the game use this to offset their angles by -20 degrees. |
| catch_fire| False| Boolean| If true, the entity hit will be set on fire. |
| crit_particle_on_hurt| False| Boolean| If true, when a projectile deals damage, whether or not to spawn in the critical damage particles.|
| destroy_on_hurt| False| Boolean| When this projectile deals damage, whether or not to immediately destroy this projectile. |
| filter| *not set*| String| Entity Definitions defined here can't be hurt by the projectile. |
| fire_affected_by_griefing| False| Boolean| If true, whether the projectile causes fire is affected by the mob griefing game rule. |
| gravity| 0.05| Decimal| The gravity applied to this entity when thrown. When this actor is not on the ground, subtracts this amount from the actors change in vertical position every tick. The higher the value, the faster the entity falls.  |
| hit_sound| *not set*| String| The sound that plays when the projectile hits something. |
| hit_ground_sound| *not set*| String| The sound that plays when the projectile hits the ground. |
| homing| False| Boolean| If true, the projectile homes in to the nearest entity. |
| inertia| 0.99| Decimal| The fraction of the projectile's speed maintained every frame while traveling in air. |
| is_dangerous| False| Boolean| If true, the projectile will be treated as dangerous to the players. |
| knockback| True| Boolean| If true, the projectile will knock back the entity it hits. |
| lightning| False| Boolean| If true, the entity hit will be struck by lightning. |
| liquid_inertia| 0.6| Decimal| The fraction of the projectile's speed maintained every frame while traveling in water. |
| multiple_targets| True| Boolean| If true, the projectile can hit multiple entities per flight. |
| offset| [0, 0, 0]| Vector [a, b, c]| The offset from the entity's anchor where the projectile will spawn. |
| on_fire_time| 0.0 | Decimal| Time in seconds that the entity hit will be on fire for. |
|on_hit|*not set*| JSON Object| Defines the behaviors that may execute on a projectile's hit, including impact damage, impact effect, and stuck in ground. See more on these parameters below. |
| particle| ironcrack| String| Particle to use upon collision. |
| power| 1.3 | Decimal| Determines the velocity of the projectile. |
| reflect_on_hurt| False| Boolean| If true, this entity will be reflected back when hit. |
| shoot_sound| *not set*| String| The sound that plays when the projectile is shot. |
| shoot_target| True| Boolean| If true, the projectile will be shot towards the target of the entity firing it. |
| should_bounce| False| Boolean| If true, the projectile will bounce upon hit. |
| splash_potion| False| Boolean| If true, the projectile will be treated like a splash potion. |
| splash_range| 4| Decimal| Radius in blocks of the 'splash' effect. |
| stop_on_hurt| False| Boolean| Determines if the projectile stops when the target is hurt. |
| uncertainty_base| 0| Decimal| The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier.|
| uncertainty_multiplier| 0| Decimal| Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier. |

## on_hit parameters


|Name |Default Value  |Type  |Description|
:----------|:----------|:----------|:----------
|catch_fire| false | Boolean| Determines if the struck object is set on fire.|
|definition_event| *not set* | event | The event that is triggered on a hit. See the [table below for all definition event parameters](#definition_event-parameters).|
|douse_fire| false|Boolean| If the target is on fire, then douse hte fire.|
|freeze_on_hit|*not set*|JSON Object| An area of entities that is frozen to block on hits. Has shape of either sphere or cube, snap_to_block boolean ,and size decimal properties.|
|grant_xp|*not set*|JSON Object|Grants XP on hit. Has minXP for minimum XP granted, maxXp for maximum, or simply flat xp properties.|
|hurt_owner|*not set* |JSON Object| Determines if the owner of the entity is hurt on hit. Contains decimal owner_damage, knockback boolean, and ignite boolean.|
|ignite|false|Boolean| Determines if a fire may be started on a flammable target.|
|impact_damage| *not set* | JSON Object| Defines the damage that an entity may receive on being hit by this projectile. See the [table below](#impact_damage-parameters) for all impact_damage parameters.|
|mob_effect| *not set*|JSON Object|The target receives a mob effect. See [the table below for all mob_effect parameters](#mob_effect-parameters).|
|on_fire_time|0.0|float| The amount of time a target will remain on fire.|
|particle_on_hit|*not set*|JSON Object|The particles that spawn on hit. See [the table below for all particle_on_hit parameters](#particle_on_hit-parameters).|
| potion_effect| -1| Integer| Defines the effect the arrow will apply to the entity it hits. |
|remove_on_hit|*not set*|JSON Object|Removes the projectile.|
|spawn_aoe_cloud|false|Boolean|Potion spawns an area of effect cloud. See [the table below for all spawn_aoe_cloud parameters](#spawn_aoe_cloud-parameters).|
|spawn_chance|*not set*|JSON Ojbect|Contains information on the chance of spawning an entity on hit. See parameters below.|
|stick_in_ground|*not set*| Object| Decides if the object sticks in ground and contains `shake_time` integer parameter to determine how long it will shake.|
|teleport_owner | false | Boolean | Determines if the owner is transported on hit.|
|thrown_potion_effect|"thrown_potion_effect" : {} |JSON Object| Creates a splash area for effects caused by a thrown potion.|


## impact_damage parameters

Name |Default Value  |Type  |Description  |
:----------|:----------|:----------|:----------|
|catch_fire| false | Boolean| Determines if the struck object is set on fire.|
|channeling | True | Boolean | Whether lightning can be channeled through hte weapon.|
|damage|1|Decimal|The damage dealt on impact.|
|destroy_on_hit|false|Boolean|Projectile is removed on hit.|
|destroy_on_hit_requires_damage | true | Boolean| If true, then the hit must cause damage to destroy the projectile.|
|filter | *not set* | String | The identifier of an entity that can be hit.|
| knockback| True| Boolean| If true, the projectile will knock back the entity it hits. |
|max_critical_damage| *not set* | Integer | Maximum critical damage.|
|min_critical_damage| 0 | Integer | Minimum critical damage.|
|power_multiplier| 2.0 | Decimal | How much the base damage is multiplied.|
|semi_random_diff_damage| false| Boolean| If true, damage will be randomized based on damage and speed |
|set_last_hurt_requires_damage | false | Boolean| If true, then the hit must cause damage to update the last hurt property.|


## definition_event parameters


|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|affect_projectile|false|Boolean|The projectile that will be affected by this event.|
|affect_shooter|false|Boolean|The shooter that will be affected by this event.|
|affect_splash_area|false|Boolean|All entities in the splash area will be affected by this event.|
|splash_area|0.0|Decimal|The splash area that will be affected.|
|affect_target|false|Boolean|The target will be affected by this event.|
|event_trigger| *not set* | JSON Object | The event triggered. Also has an option `filters` parameter to limit affected targets.|

## spawn_aoe_cloud parameters
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|affect_owner| true|Boolean| Determines if the projectile shooter is affected.|
|color| *not set*|Vector [a, b, c]| Particle color defined by three rgb values.|
|duration|0|Integer| How long the particle emits.|
|particle|0|Integer| The particle emitter.|
|potion|-1|Integer|The id of the potion.|
|radius|0|Decimal|Defines the affected area.|
|radius_on_use|-1|Decimal|Defines the affected area when potion is used.|
|reapplication_delay|0|Integer|Delay before the potion can affect the area again.|

## spawn_chance parameters
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|first_spawn_count|0|Integer|The amount of new entities spawned.|
|first_spawn_percent_chance|0|Decimal|The chance that a spawn occurs when a projectile hits the entity.|
|second_spawn_chance|32|Decimal|The chance that a second spawn occurs when a projectile hits the entity.|
|second_spawn_count|0|Integer| The amount of new entities spawned in teh second spawn.|
|spawn_definition|*not set*|String|The entity that will spawn.|
|spawn_baby|False|Boolean|Determines if a baby spawns.|


## particle_on_hit parameters
|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|particle_type|*not set*|String|The id of the particle to spawn on hit.|
|on_other_hit|false|Boolean|If true, spawns particles on any other hit.|
|on_entity_hit|false|Boolean|If true, spawns particles on an entity hit.|
|num_particles|6|Decimal|The number of particles to spawn.|

## mob_effect parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|amplifier|1|Integer|The multiplier of the amplification of this effect.|
|ambient|false|Boolean|If true, a mob will spawn that is not hostile, like the bat entity in Minecraft. |
|duration|1|Integer|The effect's duration.|
|durationeasy|0|Integer|The effect's duration on easy mode.|
|durationhard|800|Integer|The effect's duration on hard mode.|
|durationnormal|200|Integer|The effect's duration on normal mode.|
|effect|*not set*|String|The identifier of the mob entity to affect.|
|visible|false|Boolean|Does the entity's look change.|

## Example

```json
"minecraft:projectile":{
    "angle_offset": 0,
    "catch_fire": false,
    "crit_particle_on_hurt": false,
    "destroy_on_hurt": false,
    "filter": ,
    "fire_affected_by_griefing": false,
    "gravity": 0.05,
    "hit_sound": ,
    "homing": false,
    "inertia": 0.99,
    "is_dangerous": false,
    "knockback": true,
    "lightning": false,
    "liquid_inertia": 0.6,
    "multiple_targets": true,
    "offset": [0, 0.5, 0],
    "on_fire_time": 5,
    "particle": "ironcrack",
    "potion_effect": -1,
    "power": 1.3,
    "reflect_on_hurt": false,
    "semi_random_diff_damage": false,
    "shoot_sound": ,
    "shoot_target": true,
    "should_bounce": false,
    "splash_potion": false,
    "splash_range": 4,
    "uncertainty_base": 0,
    "uncertainty_multiplier": 0
}
```

## Vanilla entities examples

### arrow

:::code language="json" source="../../../../Source/VanillaBehaviorPack/entities/arrow.json" range="12-34":::

## Vanilla entities using `minecraft:projectile`

- [arrow](../../../../Source/VanillaBehaviorPack_Snippets/entities/arrow.md)
- [dragon_fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/dragon_fireball.md)
- [egg](../../../../Source/VanillaBehaviorPack_Snippets/entities/egg.md)
- [ender_pearl](../../../../Source/VanillaBehaviorPack_Snippets/entities/ender_pearl.md)
- [fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/fireball.md)
- [fishing_hook](../../../../Source/VanillaBehaviorPack_Snippets/entities/fishing_hook.md)
- [lingering_potion](../../../../Source/VanillaBehaviorPack_Snippets/entities/lingering_potion.md)
- [llama_spit](../../../../Source/VanillaBehaviorPack_Snippets/entities/llama_spit.md)
- [shulker_bullet](../../../../Source/VanillaBehaviorPack_Snippets/entities/shulker_bullet.md)
- [small_fireball](../../../../Source/VanillaBehaviorPack_Snippets/entities/small_fireball.md)
- [snowball](../../../../Source/VanillaBehaviorPack_Snippets/entities/snowball.md)
- [splash_potion](../../../../Source/VanillaBehaviorPack_Snippets/entities/splash_potion.md)
- [thrown_trident](../../../../Source/VanillaBehaviorPack_Snippets/entities/thrown_trident.md)
- [wither_skull_dangerous](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull_dangerous.md)
- [wither_skull](../../../../Source/VanillaBehaviorPack_Snippets/entities/wither_skull.md)
- [xp_bottle](../../../../Source/VanillaBehaviorPack_Snippets/entities/xp_bottle.md)