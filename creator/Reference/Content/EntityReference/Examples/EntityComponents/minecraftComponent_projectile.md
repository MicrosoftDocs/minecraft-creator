---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:projectile"
description: "Describes the minecraft:projectile entity component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:projectile

Allows the entity to be a thrown entity.


## Projectile Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| angle_offset | 0 | Decimal number | Determines the angle at which the projectile is thrown |  | 
| catch_fire | false | Boolean true/false | If true, the entity hit will be set on fire |  | 
| crit_particle_on_hurt | false | Boolean true/false | If true, the projectile will produce additional particles when a critical hit happens |  | 
| destroy_on_hurt | false | Boolean true/false | If true, this entity will be destroyed when hit |  | 
| filter | *not set* | String | Entity Definitions defined here can't be hurt by the projectile |  | 
| fire_affected_by_griefing | false | Boolean true/false | If true, whether the projectile causes fire is affected by the mob griefing game rule |  | 
| gravity | 0.05 | Decimal number | The gravity applied to this entity when thrown. The higher the value, the faster the entity falls |  | 
| hit_nearest_passenger | false | Boolean true/false | If true, when hitting a vehicle, and there's at least one passenger in the vehicle, the damage will be dealt to the passenger closest to the projectile impact point. If there are no passengers, this setting does nothing. |  | 
| hit_sound | *not set* | String | The sound that plays when the projectile hits something |  | 
| homing | false | Boolean true/false | If true, the projectile homes in to the nearest entity |  | 
| ignored_entities | *not set* | Array of strings | [EXPERIMENTAL] An array of strings defining the types of entities that this entity does not collide with. |  | 
| inertia | 0.99 | Decimal number | The fraction of the projectile's speed maintained every frame while traveling in air |  | 
| is_dangerous | false | Boolean true/false | If true, the projectile will be treated as dangerous to the players |  | 
| knockback | true | Boolean true/false | If true, the projectile will knock back the entity it hits |  | 
| lightning | false | Boolean true/false | If true, the entity hit will be struck by lightning |  | 
| liquid_inertia | 0.6 | Decimal number | The fraction of the projectile's speed maintained every frame while traveling in water |  | 
| multiple_targets | true | Boolean true/false | If true, the projectile can hit multiple entities per flight |  | 
| offset | [0, 0, 0] | x, y, z coordinate array | The offset from the entity's anchor where the projectile will spawn |  | 
| on_fire_time | 5 | Decimal number | Time in seconds that the entity hit will be on fire for |  | 
| particle | iconcrack | String | Particle to use upon collision |  | 
| potion_effect | -1 | Integer number | Defines the effect the arrow will apply to the entity it hits |  | 
| power | 1.3 | Decimal number | Determines the velocity of the projectile |  | 
| reflect_immunity | 0 | Decimal number | During the specified time, in seconds, the projectile cannot be reflected by hitting it |  | 
| reflect_on_hurt | false | Boolean true/false | If true, this entity will be reflected back when hit |  | 
| semi_random_diff_damage | false | Boolean true/false | If true, damage will be randomized based on damage and speed |  | 
| shoot_sound | *not set* | String | The sound that plays when the projectile is shot |  | 
| shoot_target | true | Boolean true/false | If true, the projectile will be shot towards the target of the entity firing it |  | 
| should_bounce | false | Boolean true/false | If true, the projectile will bounce upon hit |  | 
| splash_potion | false | Boolean true/false | If true, the projectile will be treated like a splash potion |  | 
| splash_range | 4 | Decimal number | Radius in blocks of the 'splash' effect |  | 
| uncertainty_base | 0 | Decimal number | The base accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |  | 
| uncertainty_multiplier | 0 | Decimal number | Determines how much difficulty affects accuracy. Accuracy is determined by the formula uncertaintyBase - difficultyLevel * uncertaintyMultiplier |  | 