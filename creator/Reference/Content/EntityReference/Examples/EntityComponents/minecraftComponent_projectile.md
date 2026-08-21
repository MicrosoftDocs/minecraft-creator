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


## Entity Projectile Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| anchor | origin | [Anchor](#anchor-choices) choices | Reference point on the shooter used to position the projectile at spawn: `0` = origin (feet), `1` = eye height, `2` = middle of the bounding box. | 
| angle_offset | 0 | Decimal number | Additional upwards pitch (in degrees) applied to the shooter's aim direction at launch. Negative values aim downward. | 
| catch_fire | false | Boolean true/false | Determines whether the entity hit will be set on fire. | 
| crit_particle_on_hurt | false | Boolean true/false | If `true`, critical-hit particles are spawned on the projectile when it is struck. | 
| destroy_on_hurt | false | Boolean true/false | If `true`, the projectile is removed from the world when struck. | 
| gravity | 0.05000000074505806 | Decimal number | Downward acceleration (blocks per tick squared) applied each tick while in flight. Higher values make the projectile fall faster. | 
| hit_ground_sound |  | String | Identifier of the sound to play when the projectile hits a block. Defaults to `hit_sound` when empty. | 
| hit_nearest_passenger | false | Boolean true/false | If `true`, when the projectile hits a vehicle with at least one passenger, the on-hit behavior is applied to the passenger closest to the impact point instead of the vehicle itself. | 
| hit_sound |  | String | Identifier of the sound to play when the projectile hits an entity. Also used for block hits when `hit_ground_sound` is not specified. | 
| hit_water | false | Boolean true/false | If `true`, the projectile treats water as a hit surface and stops on contact. | 
| homing | false | Boolean true/false | If `true`, the projectile steers towards an active target while in flight. | 
| ignored_entities | [] | Array of strings | Array of entity identifiers that the projectile will pass through without registering a hit. | 
| inertia | 0.9900000095367432 | Decimal number | Fraction of the projectile's velocity preserved each tick while traveling through air. Values below `1.0` cause it to slow down over time. | 
| is_dangerous | false | Boolean true/false | If `true`, the projectile is flagged as dangerous, affecting AI reactions and certain client-side behaviors. | 
| isolated_physics | true | Boolean true/false | If true, this projectile is not affected by outside forces such as friction and drag. | 
| lightning | false | Boolean true/false | If `true`, the projectile can channel a lightning bolt when it hits an entity during a thunderstorm. | 
| liquid_inertia | 0.6000000238418579 | Decimal number | Fraction of the projectile's velocity preserved each tick while traveling through a fluid. | 
| multiple_targets | false | Boolean true/false | If `true`, the projectile can hit more than one entity over the course of its flight; if `false`, it stops at the first entity it hits. | 
| offset | [0, 0, 0] | Array of numbers | Offset, relative to the `anchor`, at which the projectile is spawned when fired by the shooter. | 
| offset (Offset) | *not set* | [Offset (Offset)](#offset-offset) item |  | 
| on_fire_time | 5 | Decimal number | Duration in seconds for which an entity set on fire by this projectile remains burning. Applied both by the legacy top-level `catch_fire` flag and by the `catch_fire` on-hit subcomponent. | 
| on_hit | *not set* | [Hit](#entity-onhitcommandsstorage) item | Map of on-hit subcomponents that drive what happens when the projectile impacts a block, fluid, or entity. Each key is a subcomponent name and its value is that subcomponent's configuration. | 
| owner_launch_immunity_ticks | 5 | Integer number | Number of ticks immediately after launch during which the projectile cannot hit its own shooter. | 
| particle | iconcrack | [Particle](#particle-type-choices) choices | Particle effect emitted at the impact location when the projectile hits something. | 
| potion_effect | -1 | Integer number | Default potion aux value associated with the projectile. | 
| power | 1.2999999523162842 | Decimal number | Initial speed (in blocks per tick) at which the projectile is launched. | 
| reflect_immunity | 0 | Decimal number | Duration in seconds after launch during which the projectile cannot be reflected by being struck. | 
| reflect_on_hurt | false | Boolean true/false | If true, this projectile will be reflected back when hit by another projectile or by taking damage. | 
| shoot_sound |  | String | Identifier of the sound to play when the projectile is fired. | 
| shoot_target | true | Boolean true/false | If `true`, the projectile is aimed at the shooter's current target (when one exists) rather than straight ahead. | 
| should_bounce | no | [Should Bounce](#should-bounce-choices) choices | Controls whether the projectile bounces off entities on impact. | 
| splash_range | 4 | Decimal number | Splash radius (in blocks) used when applying potion effects via the splash/lingering potion code path. | 
| stop_on_hurt | false | Boolean true/false | If `true`, the projectile has its velocity zeroed out when struck. | 
| uncertainty_base | 0 | Decimal number | Base inaccuracy added to the launch direction. The total inaccuracy is `uncertainty_base - difficultyLevel * uncertainty_multiplier`. | 
| uncertainty_multiplier | 0 | Decimal number | Per-difficulty-level reduction in inaccuracy. See `uncertainty_base` for the full formula. | 

### catch_fire

Determines whether the entity hit will be set on fire. Note: the presence of this field in the component definition causes targets to catch fire regardless of the value set. To prevent fire, remove this field entirely from the component.

### isolated_physics

If true, this projectile is not affected by outside forces such as friction and drag. This item requires a format version of at least 1.26.20. Available under the Custom Projectiles experimental toggle starting in format version 1.26.20.

### multiple_targets

If `true`, the projectile can hit more than one entity over the course of its flight; if `false`, it stops at the first entity it hits. Projectiles launched with the Piercing enchantment have this value set to `true`.

### potion_effect

Default potion aux value associated with the projectile. Normally set programmatically by potion items; rarely useful at authoring time. A value matching the water potion is required for the `douse_fire` on-hit subcomponent to extinguish fires.

### reflect_on_hurt

If true, this projectile will be reflected back when hit by another projectile or by taking damage. From 1.26.0, every projectile reflects projectiles that have `reflect_on_hurt: true` on hit, in addition to the existing damage-based reflection.

### should_bounce

Controls whether the projectile bounces off entities on impact. `no` disables bouncing, `if_invulnerable` bounces only off invulnerable entities, and `if_no_damage_dealt` bounces whenever no damage is dealt to the target.


### Anchor choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| eye_height | Eye height | |
| middle | Middle | |
| origin | Origin | |

### Offset (Offset)

#### Offset Properties

**JSON path:** `offset`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Entity OnHitCommandsStorage

#### Entity OnHitCommandsStorage Properties

**JSON path:** `on_hit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| arrow_effect | *not set* | [Arrow Effect](#entity-arroweffectsubcomponentdefinition) item | Variant of `mob_effect` that derives the effects from the arrow's tipped-potion data and splits durations across the standard eight-arrow stack. | 
| catch_fire | *not set* | [Catch Fire](#entity-catchfiresubcomponentdefinition) item | Causes the projectile to embed itself in the block it hits. | 
| definition_event | *not set* | [Definition Event](#entity-actordefinitioneventsubcomponentdefinition) item | Fires an entity event on the shooter, the projectile, the entity hit, and/or all entities in a splash radius. | 
| douse_fire | *not set* | Object | When the projectile is a water-effect potion, extinguishes fires and campfires at and around the hit block. | 
| freeze_on_hit | *not set* | [Freeze On Hit](#entity-freezeonhitsubcomponentdefinition) item | Freezes nearby water blocks to ice in a configurable volume around the impact (Education Edition chemistry feature). | 
| grant_xp | *not set* | [Grant Xp](#entity-grantxpsubcomponentdefinition) item | Drops experience orbs at the impact location. | 
| hurt_owner | *not set* | [Hurt Owner](#entity-hurtownersubcomponentdefinition) item | Damages the projectile's owner when the projectile lands. | 
| ignite | *not set* | Object | Triggers the entity's `on_ignite` definition when the projectile hits. | 
| impact_damage | *not set* | [Impact Damage](#entity-impactdamagesubcomponentdefinition) item | Deals damage to the entity that was hit and optionally applies knockback, fire, channeling, and critical-hit scaling. | 
| mob_effect | *not set* | [Mob Effect](#entity-mobeffectsubcomponentdefinition) item | Applies one or more mob effects to the entity hit. Effects are described with an `effects` array of effect objects. | 
| particle_on_hit | *not set* | [Particle On Hit](#entity-particleonhitsubcomponentdefinition) item | Emits a particle effect at the impact location, optionally only for entity hits or only for non-entity hits. | 
| remove_on_hit | *not set* | Object | Removes the projectile from the world when it hits a block, entity, or (if `hit_water` is set) water. | 
| spawn_aoe_cloud | *not set* | [Spawn Aoe Cloud](#entity-spawnaoecloudsubcomponentdefinition) item | Spawns an area effect cloud at the impact point that applies potion effects to entities inside it over time | 
| spawn_chance | *not set* | [Spawn Chance](#entity-spawnchancesubcomponentdefinition) item | Conditionally spawns one or two groups of entities at the impact location and optionally fires events on each spawned entity. | 
| stick_in_ground | *not set* | [Stick In Ground](#entity-stickingroundsubcomponentdefinition) item | Causes the projectile to embed itself in the block it hits. | 
| teleport_owner | *not set* | Object | Teleports the projectile's owner to the impact location. | 
| thrown_potion_effect | *not set* | [Thrown Potion Effect](#entity-thrownpotioneffectsubcomponentdefinition) item | Applies the splash-potion effects of a thrown potion to nearby entities at the impact point. | 
| wind_burst_on_hit | *not set* | Object | Releases an outward wind burst at the impact point that pushes nearby entities away. | 

#### Entity ArrowEffectSubcomponentDefinition
Variant of `mob_effect` that derives the effects from the arrow's tipped-potion data and splits durations across the standard eight-arrow stack.


##### Entity ArrowEffectSubcomponentDefinition Properties

**JSON path:** `on_hit > arrow_effect`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| apply_effect_to_blocking_targets | true | Boolean true/false | If `true`, effects are still applied to targets that blocked the projectile. | 

#### Entity CatchFireSubcomponentDefinition
Causes the projectile to embed itself in the block it hits.


##### Entity CatchFireSubcomponentDefinition Properties

**JSON path:** `on_hit > catch_fire`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| fire_affected_by_griefing | false | Boolean true/false | If `true`, the block-ignition behavior is suppressed when the shooter is a mob and the `mobGriefing` game rule is off. | 
| on_fire_time | 0 | Decimal number | Duration in seconds for which entity remains on fire | 

#### Entity ActorDefinitionEventSubcomponentDefinition
Fires an entity event on the shooter, the projectile, the entity hit, and/or all entities in a splash radius.


##### Entity ActorDefinitionEventSubcomponentDefinition Properties

**JSON path:** `on_hit > definition_event`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| affect_projectile | false | Boolean true/false | If `true`, the event is fired on the projectile entity itself. | 
| affect_shooter | false | Boolean true/false | If `true`, the event is fired on the projectile's shooter. | 
| affect_splash_area | false | Boolean true/false | If `true`, the event is fired on every entity within `splash_area` blocks of the impact. | 
| affect_target | false | Boolean true/false | If `true`, the event is fired on the entity hit by the projectile. | 
| event_trigger | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Event Trigger](#entity-actordefinitiontrigger) item | Event trigger (with optional filters) to fire on the selected target(s). | 
| splash_area | 0 | Decimal number | Radius (in blocks) used by `affect_splash_area`. | 

##### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


###### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_hit > definition_event > event_trigger`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

###### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


###### Filters

###### Filters Properties

**JSON path:** `on_hit > definition_event > event_trigger > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

#### Entity FreezeOnHitSubcomponentDefinition
Freezes nearby water blocks to ice in a configurable volume around the impact (Education Edition chemistry feature).


##### Entity FreezeOnHitSubcomponentDefinition Properties

**JSON path:** `on_hit > freeze_on_hit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| shape | cube | [Shape](#shape-choices) choices | Shape of the freezing volume. Allowed values: `cube`, `sphere`. | 
| size | 0 | Decimal number | Half-extent of the freezing volume (in blocks). | 
| snap_to_block | false | Boolean true/false | If `true`, the freezing volume is centered on the hit block's center instead of the precise impact point. | 

### Shape choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| cube | Cube | |
| sphere | Sphere | |

#### Entity GrantXPSubcomponentDefinition
Drops experience orbs at the impact location.


##### Entity GrantXPSubcomponentDefinition Properties

**JSON path:** `on_hit > grant_xp`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| maxXP | 0 | Integer number | Maximum amount of experience to drop. | 
| minXP | 0 | Integer number | Minimum amount of experience to drop. | 

#### Entity HurtOwnerSubcomponentDefinition
Damages the projectile's owner when the projectile lands.


##### Entity HurtOwnerSubcomponentDefinition Properties

**JSON path:** `on_hit > hurt_owner`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| ignite | false | Boolean true/false | If `true`, the damage sets the owner on fire. | 
| knockback | false | Boolean true/false | If `true`, the damage applies knockback to the owner. | 
| owner_damage | 0 | Decimal number | Amount of damage to deal to the owner. | 

#### Entity ImpactDamageSubcomponentDefinition
Deals damage to the entity that was hit and optionally applies knockback, fire, channeling, and critical-hit scaling.


##### Entity ImpactDamageSubcomponentDefinition Properties

**JSON path:** `on_hit > impact_damage`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| apply_knockback_to_blocking_targets | false | Boolean true/false | If `true`, knockback is still applied to targets that successfully blocked the hit. | 
| catch_fire | false | Boolean true/false | If `true`, the entity hit is set on fire (uses the projectile's `on_fire_time`). | 
| ceil_pre_critical_damage | false | Boolean true/false | If `true`, rounds the projectile's damage up to the next integer before the critical-hit multiplier is applied. | 
| channeling | false | Boolean true/false | If `true`, the projectile can call down a lightning bolt on the entity hit during a thunderstorm. | 
| damage | {"max":0,"min":0} | [Damage](#legacy-floatrange) item | Range of damage to apply on impact. A random value in `[min, max]` is rolled per hit and the velocity-scaled `power_multiplier` term is added to it to define the projectile's base damage. | 
| destroy_on_hit | false | Boolean true/false | If `true`, the projectile is removed when it deals damage to an entity. | 
| destroy_on_hit_requires_damage | true | Boolean true/false | If `true`, `destroy_on_hit` only triggers when at least one point of damage is actually dealt (targets that fully absorb damage will not destroy the projectile). | 
| difficulty_randomization | none | [Difficulty Randomization](#difficulty-randomization-choices) choices | Controls how world difficulty contributes to the rolled damage. | 
| filter |  | String | Entity family or type that the projectile is restricted to damaging. Entities outside the filter are not damaged. | 
| knockback | false | Boolean true/false | If `true`, the entity hit is knocked back away from the projectile. | 
| max_critical_damage | 2147483647 | Integer number | If specified, sets the maximum damage after critical damage has been applied. Enchantments have already been applied at this point, so this clamps the final damage value of critical hits. | 
| min_critical_damage | 0 | Integer number | If specified, sets the minimum damage after critical damage has been applied. Enchantments have already been applied at this point, so this clamps the final damage value of critical hits. | 
| power_multiplier | 0 | Decimal number | Multiplied by the projectile's velocity and added to the rolled `damage` to define the projectile's base damage, so it can be used on its own to scale damage by the projectile's velocity. | 
| set_last_hurt_requires_damage | true | Boolean true/false | If `true`, the projectile only registers as the last hurt-by source on the target when at least one point of damage is actually dealt. | 

##### difficulty_randomization

Controls how world difficulty contributes to the rolled damage. `none` ignores difficulty, `additive` adds a difficulty-driven term on top of the base damage, and `multiplicative` folds the difficulty term into `power_multiplier` before scaling by velocity.


##### Legacy FloatRange

###### Legacy FloatRange Properties

**JSON path:** `on_hit > impact_damage > damage`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

### Difficulty Randomization choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| additive | Additive | |
| multiplicative | Multiplicative | |
| none | None | |

#### Entity MobEffectSubcomponentDefinition
Applies one or more mob effects to the entity hit. Effects are described with an `effects` array of effect objects.


##### Entity MobEffectSubcomponentDefinition Properties

**JSON path:** `on_hit > mob_effect`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effects | [] | Array of [Effects](#entity-mobeffectinstance) items | Array of effect objects. Each element may specify `effect` (name), `amplifier`, and per-difficulty durations `durationeasy`, `durationnormal`, `durationhard`. | 

##### Entity MobEffectInstance

###### Entity MobEffectInstance Properties

**JSON path:** `on_hit > mob_effect > effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| amplifier | 1 | Integer number |  | 
| durationeasy | *not set* | Integer number |  | 
| durationeasy (as String) | *not set* | String |  | 
| durationhard | *not set* | Integer number |  | 
| durationhard (as String) | *not set* | String |  | 
| durationnormal | *not set* | Integer number |  | 
| durationnormal (as String) | *not set* | String |  | 
| effect |  | String |  | 

#### Entity ParticleOnHitSubcomponentDefinition
Emits a particle effect at the impact location, optionally only for entity hits or only for non-entity hits.


##### Entity ParticleOnHitSubcomponentDefinition Properties

**JSON path:** `on_hit > particle_on_hit`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| num_particles | 1 | Integer number | Number of particles to spawn per hit. | 
| on_entity_hit | false | Boolean true/false | If `true`, particles are spawned when the projectile hits an entity. | 
| on_other_hit | false | Boolean true/false | If `true`, particles are spawned when the projectile hits something that is not an entity. | 
| particle_item_name (Particle Item Name) | *not set* | [Particle Item Name](#particle-item-name) item | Map from item identifier to a filter group, used to select an item icon for `iconcrack`-style particles based on context (e.g. the projectile's owner). | 
| particle_item_name (Alternate 1) | *not set* | Object |  | 
| particle_type | none | [Particle Type](#particle-type-choices) choices | Particle type to spawn at the impact point. | 

##### Particle Item Name

###### Particle Item Name Properties

**JSON path:** `on_hit > particle_on_hit > particle_item_name`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Particle Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| balloongas | Balloongas | |
| bleach | Bleach | |
| blockforcefield | Blockforcefield | |
| blueflame | Blueflame | |
| breezewindexplosion | Breezewindexplosion | |
| bubble | Bubble | |
| bubblecolumndown | Bubblecolumndown | |
| bubblecolumnup | Bubblecolumnup | |
| bubblemanual | Bubblemanual | |
| campfiresmoke | Campfiresmoke | |
| campfiresmoketall | Campfiresmoketall | |
| candleflame | Candleflame | |
| carrotboost | Carrotboost | |
| coloredflame | Coloredflame | |
| conduit | Conduit | |
| creakingcrumble | Creakingcrumble | |
| crit | Crit | |
| dragonbreath | Dragonbreath | |
| dragonbreathfire | Dragonbreathfire | |
| dragonbreathtrail | Dragonbreathtrail | |
| dragondestroyblock | Dragondestroyblock | |
| driphoney | Driphoney | |
| driplava | Driplava | |
| dripwater | Dripwater | |
| dustplume | Dustplume | |
| electricspark | Electricspark | |
| enchantingtable | Enchantingtable | |
| endrod | Endrod | |
| evaporation | Evaporation | |
| explode | Explode | |
| eyeblossomclose | Eyeblossomclose | |
| eyeblossomopen | Eyeblossomopen | |
| fallingborderdust | Fallingborderdust | |
| fallingdust | Fallingdust | |
| fireworks | Fireworks | |
| fireworksoverlay | Fireworksoverlay | |
| fireworksstarter | Fireworksstarter | |
| flame | Flame | |
| food | Food | |
| greenflame | Greenflame | |
| heart | Heart | |
| hugeexplosion | Hugeexplosion | |
| iconcrack | Iconcrack | |
| ink | Ink | |
| largeexplode | Largeexplode | |
| largesmoke | Largesmoke | |
| lava | Lava | |
| mobappearance | Mobappearance | |
| mobflame | Mobflame | |
| mobspell | Mobspell | |
| mobspellambient | Mobspellambient | |
| mobspellinstantaneous | Mobspellinstantaneous | |
| myceliumdust | Myceliumdust | |
| none | None | |
| note | Note | |
| obsidiantear | Obsidiantear | |
| orangepoplarleaves | Orangepoplarleaves | |
| paleoakleaves | Paleoakleaves | |
| pausemobgrowth | Pausemobgrowth | |
| portal | Portal | |
| portalreverse | Portalreverse | |
| rainsplash | Rainsplash | |
| reddust | Reddust | |
| redpoplarleaves | Redpoplarleaves | |
| resetmobgrowth | Resetmobgrowth | |
| risingborderdust | Risingborderdust | |
| sculksoul | Sculksoul | |
| shriek | Shriek | |
| shulkerbullet | Shulkerbullet | |
| slime | Slime | |
| smoke | Smoke | |
| sneeze | Sneeze | |
| snowballpoof | Snowballpoof | |
| snowflake | Snowflake | |
| sonicexplosion | Sonicexplosion | |
| soul | Soul | |
| sparkler | Sparkler | |
| spit | Spit | |
| stalactitedriplava | Stalactitedriplava | |
| stalactitedripwater | Stalactitedripwater | |
| sulfurcube | Sulfurcube | |
| terrain | Terrain | |
| totem | Totem | |
| townaura | Townaura | |
| trackingemitter | Trackingemitter | |
| vaultconnection | Vaultconnection | |
| villagerangry | Villagerangry | |
| villagerhappy | Villagerhappy | |
| watersplash | Watersplash | |
| watersplashmanual | Watersplashmanual | |
| waterwake | Waterwake | |
| wax | Wax | |
| whitesmoke | Whitesmoke | |
| windexplosion | Windexplosion | |
| witchspell | Witchspell | |
| wolfarmorcrack | Wolfarmorcrack | |
| yellowpoplarleaves | Yellowpoplarleaves | |

#### Entity SpawnAoECloudSubcomponentDefinition
Spawns an area effect cloud at the impact point that applies potion effects to entities inside it over time.


##### Entity SpawnAoECloudSubcomponentDefinition Properties

**JSON path:** `on_hit > spawn_aoe_cloud`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| affect_owner | true | Boolean true/false | If `true`, the projectile's owner can be affected by the cloud. | 
| duration | 0 | Integer number | How long, in seconds, the cloud persists before disappearing. | 
| duration (as String) | *not set* | String |  | 
| particle | mobspellambient | [Particle](#particle-type-choices) choices | Particle effect emitted by the cloud. | 
| potion | -1 | Integer number | Aux value of the potion whose effects the cloud applies. When `-1`, the potion is taken from the projectile entity itself. | 
| radius | 0 | Decimal number | Initial radius (in blocks) of the cloud. | 
| radius_on_use | -1 | Decimal number | Amount the radius shrinks (or grows) each time the cloud applies its effects. `-1` keeps the radius unchanged. | 
| reapplication_delay | 0 | Integer number | Number of ticks the cloud waits before re-applying its effects to the same entity. | 

#### Entity SpawnChanceSubcomponentDefinition
Conditionally spawns one or two groups of entities at the impact location and optionally fires events on each spawned entity.


##### Entity SpawnChanceSubcomponentDefinition Properties

**JSON path:** `on_hit > spawn_chance`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| first_spawn_chance | 0 | Decimal number | Percent chance (0-1.0) that the first group spawns. Value must be <= 1. | 
| first_spawn_count | 0 | Integer number | Number of entities spawned when the first roll succeeds. | 
| on_spawn | [] | Array of [Spawn](#entity-actordefinitiontrigger) items | Array of entity event triggers to fire on each spawned entity. | 
| second_spawn_chance | 0 | Decimal number | Percent chance (0-1.0) that the second group spawns (rolled independently of the first). Value must be <= 1. | 
| second_spawn_count | 0 | Integer number | Number of entities spawned when the second roll succeeds. | 
| spawn_baby | false | Boolean true/false | If `true`, spawned entities start as babies (where applicable). | 
| spawn_definition |  | String | Identifier of the entity definition to spawn. | 

#### Entity StickInGroundSubcomponentDefinition
Causes the projectile to embed itself in the block it hits.


##### Entity StickInGroundSubcomponentDefinition Properties

**JSON path:** `on_hit > stick_in_ground`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| shake_time | 0 | Decimal number | Duration in seconds for which the projectile visually shakes after sticking. | 

#### Entity ThrownPotionEffectSubcomponentDefinition
Applies the splash-potion effects of a thrown potion to nearby entities at the impact point.


##### Entity ThrownPotionEffectSubcomponentDefinition Properties

**JSON path:** `on_hit > thrown_potion_effect`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effect | -1 | Integer number | Aux value of the potion to apply. | 

### Should Bounce choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| if_invulnerable | If invulnerable | |
| if_no_damage_dealt | If no damage dealt | |
| no | No | |