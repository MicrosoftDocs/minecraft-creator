---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:projectile"
description: "Describes the minecraft:projectile entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:projectile

Turns the entity into a projectile: a thrown or shot entity that flies along a ballistic arc and reacts when it impacts a block, a fluid, or another entity.


## Projectile Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| anchor | 0 | Integer number | Reference point on the shooter used to position the projectile at spawn: `0` = origin (feet), `1` = eye height, `2` = middle of the bounding box. | 
| angle_offset | 0 | Decimal number | Additional upwards pitch (in degrees) applied to the shooter's aim direction at launch. Negative values aim downward. | 
| catch_fire | false | Boolean true/false | Determines whether the entity hit will be set on fire. | 
| crit_particle_on_hurt | false | Boolean true/false | If `true`, critical-hit particles are spawned on the projectile when it is struck. | 
| destroy_on_hurt | false | Boolean true/false | If `true`, the projectile is removed from the world when struck. | 
| gravity | 0.05 | Decimal number | Downward acceleration (blocks per tick squared) applied each tick while in flight. Higher values make the projectile fall faster. | 
| hit_ground_sound | *not set* | String | Identifier of the sound to play when the projectile hits a block. Defaults to `hit_sound` when empty. | 
| hit_nearest_passenger | false | Boolean true/false | If `true`, when the projectile hits a vehicle with at least one passenger, the on-hit behavior is applied to the passenger closest to the impact point instead of the vehicle itself. | 
| hit_sound | *not set* | String | Identifier of the sound to play when the projectile hits an entity. Also used for block hits when `hit_ground_sound` is not specified. | 
| homing | false | Boolean true/false | If `true`, the projectile steers towards an active target while in flight. | 
| ignored_entities | *not set* | Array of strings | Array of entity identifiers that the projectile will pass through without registering a hit. | 
| inertia | 0.99 | Decimal number | Fraction of the projectile's velocity preserved each tick while traveling through air. Values below `1.0` cause it to slow down over time. | 
| is_dangerous | false | Boolean true/false | If `true`, the projectile is flagged as dangerous, affecting AI reactions and certain client-side behaviors. | 
| isolated_physics | true | Boolean true/false | If true, this projectile is not affected by outside forces such as friction and drag. | 
| lightning | false | Boolean true/false | If `true`, the projectile can channel a lightning bolt when it hits an entity during a thunderstorm. | 
| liquid_inertia | 0.6 | Decimal number | Fraction of the projectile's velocity preserved each tick while traveling through a fluid. | 
| multiple_targets | true | Boolean true/false | If `true`, the projectile can hit more than one entity over the course of its flight; if `false`, it stops at the first entity it hits. | 
| offset | Vec3(0,0,0) | x, y, z coordinate array | Offset, relative to the `anchor`, at which the projectile is spawned when fired by the shooter. | 
| on_fire_time | 5 | Decimal number | Duration in seconds for which an entity set on fire by this projectile remains burning. Applied both by the legacy top-level `catch_fire` flag and by the `catch_fire` on-hit subcomponent. | 
| on_hit | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Map of on-hit subcomponents that drive what happens when the projectile impacts a block, fluid, or entity. Each key is a subcomponent name and its value is that subcomponent's configuration. | 
| owner_launch_immunity_ticks | 5 | Integer number | Number of ticks immediately after launch during which the projectile cannot hit its own shooter. | 
| particle | iconcrack | String | Particle effect emitted at the impact location when the projectile hits something. | 
| potion_effect | -1 | Integer number | Default potion aux value associated with the projectile. | 
| power | 1.3 | Decimal number | Initial speed (in blocks per tick) at which the projectile is launched. | 
| reflect_immunity | 0 | Decimal number | Duration in seconds after launch during which the projectile cannot be reflected by being struck. | 
| reflect_on_hurt | false | Boolean true/false | If true, this projectile will be reflected back when hit by another projectile or by taking damage. | 
| shoot_sound | *not set* | String | Identifier of the sound to play when the projectile is fired. | 
| shoot_target | true | Boolean true/false | If `true`, the projectile is aimed at the shooter's current target (when one exists) rather than straight ahead. | 
| should_bounce | false | Boolean true/false | If `true`, the projectile bounces off surfaces and entities on impact instead of stopping. | 
| splash_range | 4 | Decimal number | Splash radius (in blocks) used when applying potion effects via the splash/lingering potion code path. | 
| stop_on_hurt | false | Boolean true/false | If `true`, the projectile has its velocity zeroed out when struck. | 
| uncertainty_base | 0 | Decimal number | Base inaccuracy added to the launch direction. The total inaccuracy is `uncertainty_base - difficultyLevel * uncertainty_multiplier`. | 
| uncertainty_multiplier | 0 | Decimal number | Per-difficulty-level reduction in inaccuracy. See `uncertainty_base` for the full formula. | 

### catch_fire

Determines whether the entity hit will be set on fire. Note: the presence of this field in the component definition causes targets to catch fire regardless of the value set. To prevent fire, remove this field entirely from the component.

### isolated_physics

If true, this projectile is not affected by outside forces such as friction and drag. This item requires a format version of at least 1.26.20. Available under the Custom Projectiles experimental toggle starting in format version 1.26.20.

### potion_effect

Default potion aux value associated with the projectile. Normally set programmatically by potion items; rarely useful at authoring time. A value matching the water potion is required for the `douse_fire` on-hit subcomponent to extinguish fires.

### reflect_on_hurt

If true, this projectile will be reflected back when hit by another projectile or by taking damage. From 1.26.0, every projectile reflects projectiles that have `reflect_on_hurt: true` on hit, in addition to the existing damage-based reflection.
