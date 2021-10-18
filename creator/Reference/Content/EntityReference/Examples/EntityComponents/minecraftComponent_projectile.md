---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Entity Documentation - minecraft:projectile
ms.prod: gaming
---

# Entity Documentation - minecraft:projectile

`minecraft:projectile` allows the entity to be a thrown entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| angle_offset| 0| Decimal| Determines the angle at which the projectile is thrown |
| catch_fire| False| Boolean| If true, the entity hit will be set on fire |
| crit_particle_on_hurt| False| Boolean| If true, the projectile will produce additional particles when a critical hit happens |
| destroy_on_hurt| False| Boolean| If true, this entity will be destroyed when hit |
| filter| *not set*| String| Entity Definitions defined here can't be hurt by the projectile |
| fire_affected_by_griefing| False| Boolean| If true, whether the projectile causes fire is affected by the mob griefing game rule |
| gravity| 0.05| Decimal| The gravity applied to this entity when thrown. The higher the value, the faster the entity falls |
| hit_sound| *not set*| String| The sound that plays when the projectile hits something |
| homing| False| Boolean| If true, the projectile homes in to the nearest entity |
| inertia| 0.99| Decimal| The fraction of the projectile's speed maintained every frame while traveling in air |
| is_dangerous| False| Boolean| If true, the projectile will be treated as dangerous to the players |
| knockback| True| Boolean| If true, the projectile will knock back the entity it hits |
| lightning| False| Boolean| If true, the entity hit will be struck by lightning |
| liquid_inertia| 0.6| Decimal| The fraction of the projectile's speed maintained every frame while traveling in water |
| multiple_targets| True| Boolean| If true, the projectile can hit multiple entities per flight |
| offset| [0, 0, 0]| Vector [a, b, c]| The offset from the entity's anchor where the projectile will spawn |
| on_fire_time| 5| Decimal| Time in seconds that the entity hit will be on fire for |
| particle| iconcrack| String| Particle to use upon collision |
| potion_effect| -1| Integer| Defines the effect the arrow will apply to the entity it hits |
| power| 1.3| Decimal| Determines the velocity of the projectile |
| reflect_on_hurt| False| Boolean| If true, this entity will be reflected back when hit |
| semi_random_diff_damage| False| Boolean| If true, damage will be randomized based on damage and speed |
| shoot_sound| *not set*| String| The sound that plays when the projectile is shot |
| shoot_target| True| Boolean| If true, the projectile will be shot towards the target of the entity firing it |
| should_bounce| False| Boolean| If true, the projectile will bounce upon hit |
| splash_potion| False| Boolean| If true, the projectile will be treated like a splash potion |
| splash_range| 4| Decimal| Radius in blocks of the 'splash' effect |
| uncertainty_base| 0| Decimal| The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |
| uncertainty_multiplier| 0| Decimal| Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |

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