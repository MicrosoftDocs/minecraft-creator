---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_effect_component"
description: "Describes the minecraft:particle_effect_component particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_effect_component

## Contents

- [Emitter Initialization](#emitter-initialization)
- [Client Particles Emitter Lifetime Expression](#client-particles-emitter-lifetime-expression)
- [Client Particles Emitter Lifetime Looping](#client-particles-emitter-lifetime-looping)
- [Client Particles Emitter Lifetime Once](#client-particles-emitter-lifetime-once)
- [Client Particles Emitter Rate Instant](#client-particles-emitter-rate-instant)
- [Client Particles Emitter Rate Manual](#client-particles-emitter-rate-manual)
- [Client Particles Emitter Rate Steady](#client-particles-emitter-rate-steady)
- [Client Particles Emitter Shape Box](#client-particles-emitter-shape-box)
- [Client Particles Emitter Shape Custom](#client-particles-emitter-shape-custom)
- [Client Particles Emitter Shape Disc](#client-particles-emitter-shape-disc)
- [Client Particles Emitter Shape Entity Aabb](#client-particles-emitter-shape-entity-aabb)
- [Client Particles Emitter Shape Sphere](#client-particles-emitter-shape-sphere)
- [Client Particles Particle Appearance Billboard](#client-particles-particle-appearance-billboard)
- [Client Particles Particle Appearance Tinting](#client-particles-particle-appearance-tinting)
- [Client Particles Particle Initial Spin](#client-particles-particle-initial-spin)
- [Client Particles Particle Initialization](#client-particles-particle-initialization)
- [Client Particles Particle Lifetime Expression](#client-particles-particle-lifetime-expression)
- [Client Particles Particle Motion Collision](#client-particles-particle-motion-collision)
- [Client Particles Particle Motion Dynamic](#client-particles-particle-motion-dynamic)
- [Client Particles Particle Motion Parametric](#client-particles-particle-motion-parametric)

Container for all particle effect components that define behavior and appearance. Components control every aspect of particle effects: emitter shape and rate, particle lifetime and motion, visual appearance and colors, collision responses, and event triggers. Combine components to build complex effects from reusable, modular pieces.


## Client Particles Particle Effect Component Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| minecraft:emitter_initialization | *not set* | [Emitter Initialization](#emitter-initialization) item |  | 
| minecraft:emitter_lifetime_events | *not set* | Object |  | 
| minecraft:emitter_lifetime_expression | *not set* | [Emitter Lifetime Expression](#client-particles-emitter-lifetime-expression) item |  | 
| minecraft:emitter_lifetime_looping | *not set* | [Emitter Lifetime Looping](#client-particles-emitter-lifetime-looping) item |  | 
| minecraft:emitter_lifetime_once | *not set* | [Emitter Lifetime Once](#client-particles-emitter-lifetime-once) item |  | 
| minecraft:emitter_local_space | *not set* | Object |  | 
| minecraft:emitter_rate_instant | *not set* | [Emitter Rate Instant](#client-particles-emitter-rate-instant) item |  | 
| minecraft:emitter_rate_manual | *not set* | [Emitter Rate Manual](#client-particles-emitter-rate-manual) item |  | 
| minecraft:emitter_rate_steady | *not set* | [Emitter Rate Steady](#client-particles-emitter-rate-steady) item |  | 
| minecraft:emitter_shape_box | *not set* | [Emitter Shape Box](#client-particles-emitter-shape-box) item |  | 
| minecraft:emitter_shape_custom | *not set* | [Emitter Shape Custom](#client-particles-emitter-shape-custom) item |  | 
| minecraft:emitter_shape_disc | *not set* | [Emitter Shape Disc](#client-particles-emitter-shape-disc) item |  | 
| minecraft:emitter_shape_entity_aabb | *not set* | [Emitter Shape Entity Aabb](#client-particles-emitter-shape-entity-aabb) item |  | 
| minecraft:emitter_shape_point | *not set* | [Emitter Shape Point](#client-particles-emitter-shape-point) item |  | 
| minecraft:emitter_shape_sphere | *not set* | [Emitter Shape Sphere](#client-particles-emitter-shape-sphere) item |  | 
| minecraft:particle_appearance_billboard | *not set* | [Particle Appearance Billboard](#client-particles-particle-appearance-billboard) item |  | 
| minecraft:particle_appearance_lighting | *not set* | Object |  | 
| minecraft:particle_appearance_tinting | *not set* | [Particle Appearance Tinting](#client-particles-particle-appearance-tinting) item |  | 
| minecraft:particle_expire_if_in_blocks | *not set* | Array of strings | List of block identifiers. Particles will expire when they are in any of these blocks. | 
| minecraft:particle_expire_if_not_in_blocks | *not set* | Array of strings | List of block identifiers. Particles will expire when they are NOT in any of these blocks. | 
| minecraft:particle_initial_speed | *not set* | Molang | The initial speed of particles. Can be a number, Molang expression, or array of [x, y, z] speeds. | 
| minecraft:particle_initial_speed (as Molang array) | *not set* | Molang array |  | 
| minecraft:particle_initial_spin | *not set* | [Particle Initial Spin](#client-particles-particle-initial-spin) item |  | 
| minecraft:particle_initialization | *not set* | [Particle Initialization](#client-particles-particle-initialization) item |  | 
| minecraft:particle_kill_plane | *not set* | Molang array | A plane (A, B, C, D coefficients) that kills particles when they cross it. | 
| minecraft:particle_lifetime_events | *not set* | Object |  | 
| minecraft:particle_lifetime_expression | *not set* | [Particle Lifetime Expression](#client-particles-particle-lifetime-expression) item |  | 
| minecraft:particle_motion_collision | *not set* | [Particle Motion Collision](#client-particles-particle-motion-collision) item |  | 
| minecraft:particle_motion_dynamic | *not set* | [Particle Motion Dynamic](#client-particles-particle-motion-dynamic) item |  | 
| minecraft:particle_motion_parametric | *not set* | [Particle Motion Parametric](#client-particles-particle-motion-parametric) item |  | 

### minecraft:particle_kill_plane

A plane (A, B, C, D coefficients) that kills particles when they cross it. Defined as an array of 4 numbers [A, B, C, D] where Ax + By + Cz + D = 0. Value must have at least 4 items. Value must have at most 4 items.


### Emitter Initialization
Defines Molang expressions that run when the emitter is created and on each update. Useful for initializing and updating emitter variables.


#### Emitter Initialization Properties

**JSON path:** `minecraft:emitter_initialization`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| creation_expression | 0 | Molang | Molang expression run once when the emitter is created. Use this to initialize variables. | 
| creation_expression (as Named set of objects) | *not set* | Key/item pairs of [Creation Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| creation_expression (as Decimal number) | *not set* | Decimal number |  | 
| per_update_expression | 0 | Molang | Molang expression run each frame while the emitter is active. Use this to update variables based on time or other conditions. | 
| per_update_expression (as Named set of objects) | *not set* | Key/item pairs of [Per Update Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| per_update_expression (as Decimal number) | *not set* | Decimal number |  | 

#### Legacy Molang Expression

##### Legacy Molang Expression Properties

**JSON path:** `minecraft:emitter_initialization > creation_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expression | *not set* | String |  | 
| version | *not set* | Integer number |  | 

### Client Particles Emitter Lifetime Expression
Controls when the emitter activates and expires using Molang expressions. The activation expression starts particle emission when it evaluates to non-zero, and the expiration expression stops it. This enables dynamic effects tied to entity state—like flames that only appear when an entity is on fire, or magic particles that pulse with the caster's mana.


#### Client Particles Emitter Lifetime Expression Properties

**JSON path:** `minecraft:emitter_lifetime_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| activation_expression | 1 | Molang | When the expression is non-zero, the emitter is activated. Can be a number or Molang expression. | 
| activation_expression (as Named set of objects) | *not set* | Key/item pairs of [Activation Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| activation_expression (as Decimal number) | *not set* | Decimal number |  | 
| expiration_expression | 0 | Molang | When the expression is non-zero, the emitter expires. Can be a number or Molang expression. | 
| expiration_expression (as Named set of objects) | *not set* | Key/item pairs of [Expiration Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| expiration_expression (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Lifetime Looping
Creates repeating particle effects that cycle between active and dormant phases. The emitter runs for the active_time duration, pauses for sleep_time, then repeats indefinitely. Perfect for ambient effects like bubbling cauldrons, flickering torches, pulsing enchantment glows, or creature breathing animations.


#### Client Particles Emitter Lifetime Looping Properties

**JSON path:** `minecraft:emitter_lifetime_looping`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. | 
| active_time (as Named set of objects) | *not set* | Key/item pairs of [Active Time (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| active_time (as Decimal number) | *not set* | Decimal number |  | 
| sleep_time | 0 | Molang | The time in seconds that the emitter sleeps between active periods. Can be a number or Molang expression. | 
| sleep_time (as Named set of objects) | *not set* | Key/item pairs of [Sleep Time (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| sleep_time (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Lifetime Once
Creates a single-burst particle effect that runs once and stops. The emitter activates for the specified active_time duration, emits particles, then terminates. Ideal for impact effects like explosions, block breaking, critical hits, potion splashes, and other momentary visual feedback.


#### Client Particles Emitter Lifetime Once Properties

**JSON path:** `minecraft:emitter_lifetime_once`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. | 
| active_time (as Named set of objects) | *not set* | Key/item pairs of [Active Time (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| active_time (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Rate Instant
Spawns all particles in a single instant burst when the emitter activates. Unlike steady emission that spawns particles over time, this creates an immediate cloud of particles—perfect for explosions, block destruction debris, potion splash impacts, ender teleportation effects, and any effect that needs an instantaneous particle release.


#### Client Particles Emitter Rate Instant Properties

**JSON path:** `minecraft:emitter_rate_instant`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| num_particles | *not set* | Molang | The number of particles to emit. Can be a number or Molang expression. | 
| num_particles (as Named set of objects) | *not set* | Key/item pairs of [Num Particles (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| num_particles (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Rate Manual
Allows manual control over particle emission through events rather than automatic spawning. Particles are only created when explicitly triggered via Molang or particle events, up to the max_particles limit. Useful for effects that should only spawn under specific conditions, like damage indicators, pickup sparkles, or script-controlled visual feedback.


#### Client Particles Emitter Rate Manual Properties

**JSON path:** `minecraft:emitter_rate_manual`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. | 
| max_particles (as Named set of objects) | *not set* | Key/item pairs of [Max Particles (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| max_particles (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Rate Steady
Continuously spawns particles at a consistent rate over time. The spawn_rate controls how many particles appear per second, while max_particles limits the total active count. This is the most common emission mode, used for ongoing effects like torch flames, mob auras, weather effects, potion bubbles, and ambient environmental particles.


#### Client Particles Emitter Rate Steady Properties

**JSON path:** `minecraft:emitter_rate_steady`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. | 
| max_particles (as Named set of objects) | *not set* | Key/item pairs of [Max Particles (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| max_particles (as Decimal number) | *not set* | Decimal number |  | 
| spawn_rate | *not set* | Molang | The number of particles to spawn per second. Can be a number or Molang expression. | 
| spawn_rate (as Named set of objects) | *not set* | Key/item pairs of [Spawn Rate (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| spawn_rate (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Shape Box
Emits particles from random positions within a rectangular box volume. Define the box using half_dimensions (distance from center to each edge) and offset from the emitter. Particles can emit outward from spawn points, inward toward center, or in custom directions. Ideal for area effects like smoke filling a room, rain in a region, or magic barriers.


#### Client Particles Emitter Shape Box Properties

**JSON path:** `minecraft:emitter_shape_box`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| half_dimensions | *not set* | Molang array | The half dimensions of the box, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| half_dimensions (as Named set of objects) | *not set* | Key/item pairs of [Half Dimensions (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| half_dimensions (as Decimal number) | *not set* | Decimal number |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (as Named set of objects) | *not set* | Key/item pairs of [Offset (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| surface_only | false | Boolean true/false |  | 

### Client Particles Emitter Shape Custom
Emits particles from positions calculated by custom Molang expressions. Unlike preset shapes, this gives complete control over spawn locations using math expressions that can create rings, spirals, waves, or any procedural pattern. Use the offset expressions to define X, Y, Z coordinates relative to the emitter for complex artistic effects.


#### Client Particles Emitter Shape Custom Properties

**JSON path:** `minecraft:emitter_shape_custom`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | [0, 0, 0] | Molang array | The direction of particle emission, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| direction (as Named set of objects) | *not set* | Key/item pairs of [Direction (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| direction (as Decimal number) | *not set* | Decimal number |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (as Named set of objects) | *not set* | Key/item pairs of [Offset (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Emitter Shape Disc
Emits particles from random positions on a flat circular disc. Configure the radius and plane normal to control disc size and orientation. Surface_only restricts spawns to the disc edge for ring effects. Perfect for ground-based effects like summoning circles, shockwaves, splash impacts, and aura rings around entities.


#### Client Particles Emitter Shape Disc Properties

**JSON path:** `minecraft:emitter_shape_disc`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (as Named set of objects) | *not set* | Key/item pairs of [Offset (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| plane_normal | [0, 1, 0] | String | The normal vector of the disc plane. Can be 'x', 'y', 'z', or an array of [x, y, z] values. | 
| plane_normal (as Molang array) | *not set* | Molang array |  | 
| radius | 1 | Molang | The radius of the disc. Can be a number or Molang expression. | 
| radius (as Named set of objects) | *not set* | Key/item pairs of [Radius (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| radius (as Decimal number) | *not set* | Decimal number |  | 
| surface_only | false | Boolean true/false |  | 

### Client Particles Emitter Shape Entity Aabb
Emits particles from random positions within the attached entity's axis-aligned bounding box. The emission volume automatically scales with entity size, making it perfect for body-covering effects like burning, freezing, poison clouds, healing auras, or damage feedback that should wrap around creatures of any size.


#### Client Particles Emitter Shape Entity Aabb Properties

**JSON path:** `minecraft:emitter_shape_entity_aabb`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| surface_only | false | Boolean true/false |  | 

### Client Particles Emitter Shape Point

Same structure as [Client Particles Emitter Shape Custom](#client-particles-emitter-shape-custom).


### Client Particles Emitter Shape Sphere
Emits particles from random positions within a spherical volume. Configure the radius to set sphere size and surface_only to restrict spawns to the outer shell. Direction can be inward, outward, or custom. Ideal for explosions, magical orbs, bubble columns, mob spawn effects, and any effect needing uniform 3D distribution.


#### Client Particles Emitter Shape Sphere Properties

**JSON path:** `minecraft:emitter_shape_sphere`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. | 
| direction (as Molang array) | *not set* | Molang array |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| offset (as Named set of objects) | *not set* | Key/item pairs of [Offset (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| offset (as Decimal number) | *not set* | Decimal number |  | 
| radius | 1 | Molang | The radius of the sphere. Can be a number or Molang expression. | 
| radius (as Named set of objects) | *not set* | Key/item pairs of [Radius (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| radius (as Decimal number) | *not set* | Decimal number |  | 
| surface_only | false | Boolean true/false |  | 

### Client Particles Particle Appearance Billboard
Controls how particle sprites render and orient toward the camera. The facing_camera_mode determines billboard behavior: 'lookat_xyz' always faces the camera (classic sprites), 'rotate_y' only rotates vertically (tall flames), and direction modes align with particle velocity (arrows, sparks). Size controls particle dimensions using Molang for dynamic scaling.


#### Client Particles Particle Appearance Billboard Properties

**JSON path:** `minecraft:particle_appearance_billboard`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | Object |  | 
| facing_camera_mode | *not set* | [Facing Camera Mode](#facing-camera-mode-choices) choices | The facing mode of the billboard. Controls how the particle faces the camera. | 
| size | *not set* | Molang array | The size of the particle billboard, as [width, height] using Molang expressions or numbers. Value must have at least 2 items. Value must have at most 2 items. | 
| size (as Named set of objects) | *not set* | Key/item pairs of [Size (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| size (as Decimal number) | *not set* | Decimal number |  | 
| uv | *not set* | Object |  | 

### Facing Camera Mode choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| lookat_xyz | Look At XYZ | |
| lookat_y | Look At Y | |
| lookat_direction | Look At Direction | |
| rotate_xyz | Rotate XYZ | |
| rotate_y | Rotate Y | |
| direction_x | Direction X | |
| direction_y | Direction Y | |
| direction_z | Direction Z | |
| emitter_transform_xy | Emitter Transform XY | |
| emitter_transform_xz | Emitter Transform XZ | |
| emitter_transform_yz | Emitter Transform YZ | |

### Client Particles Particle Appearance Tinting
Applies color tinting to particle textures, from simple solid colors to complex gradients. Use hex colors for static tints, RGBA arrays with Molang for dynamic colors, or gradient objects to blend between colors over particle lifetime. Essential for flames fading orange-to-gray, magical auras shifting colors, or any effect needing color variation.


#### Client Particles Particle Appearance Tinting Properties

**JSON path:** `minecraft:particle_appearance_tinting`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| color | *not set* | Molang array | The color of the particle, can be a hex color string (like '#RRGGBB'), an array of [r, g, b, a] values (numbers or Molang), or an object with gradient and interpolant. | 
| color (as String) | *not set* | String | A hex color string like '#dfe5ed' or '#RRGGBBAA'. | 
| color (Color) | *not set* | [Color (Color)](#color-color) item |  | 

#### color

The color of the particle, can be a hex color string (like '#RRGGBB'), an array of [r, g, b, a] values (numbers or Molang), or an object with gradient and interpolant. Value must have at least 3 items. Value must have at most 4 items.


#### Color (Color)

##### Color Properties

**JSON path:** `minecraft:particle_appearance_tinting > color`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| gradient | *not set* | String | Color gradient - can be an array of color arrays (each being [r, g, b, a] molang/numbers), or an object mapping time points to hex color strings or color arrays. | 
| gradient (as Keyed set of strings) | *not set* | Keyed set of strings | Object mapping time points to hex color strings. | 
| gradient (as Object) | *not set* | Object | Object mapping time points to color arrays with Molang/numbers. | 
| interpolant | *not set* | Molang | A Molang expression that determines which gradient color to use. | 

### Client Particles Particle Initial Spin
Sets the starting rotation angle and spin velocity for each particle. Initial rotation provides random orientation variety, while spin_rate creates continuous rotation during the particle's lifetime. Use for debris that tumbles, leaves spinning as they fall, sparks that twist, or any particle needing rotational motion.


#### Client Particles Particle Initial Spin Properties

**JSON path:** `minecraft:particle_initial_spin`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| rotation | 0 | Keyed set of strings |  | 
| rotation (as Named set of objects) | *not set* | Key/item pairs of [Rotation (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation (as Decimal number) | *not set* | Decimal number |  | 
| rotation_rate | 0 | Keyed set of strings |  | 
| rotation_rate (as Named set of objects) | *not set* | Key/item pairs of [Rotation Rate (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation_rate (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Particle Initialization
Runs Molang expressions when each individual particle spawns to initialize per-particle variables. Unlike emitter_initialization which runs once per emitter, this executes for every particle—enabling randomized properties, unique trajectories, or per-particle state that persists through the particle's lifetime.


#### Client Particles Particle Initialization Properties

**JSON path:** `minecraft:particle_initialization`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| per_render_expression | 0 | Keyed set of strings |  | 
| per_render_expression (as Named set of objects) | *not set* | Key/item pairs of [Per Render Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| per_render_expression (as Decimal number) | *not set* | Decimal number |  | 
| per_update_expression | 0 | Keyed set of strings |  | 
| per_update_expression (as Named set of objects) | *not set* | Key/item pairs of [Per Update Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| per_update_expression (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Particle Lifetime Expression
Controls individual particle lifetimes using Molang expressions. The max_lifetime sets the absolute duration limit, while expiration_expression can terminate particles early when conditions are met (like leaving a certain area). Enables dynamic particle populations that respond to game state beyond simple time-based expiration.


#### Client Particles Particle Lifetime Expression Properties

**JSON path:** `minecraft:particle_lifetime_expression`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| expiration_expression | 0 | Molang | When the expression is non-zero, the particle expires. Can be a number or Molang expression. | 
| expiration_expression (as Named set of objects) | *not set* | Key/item pairs of [Expiration Expression (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| expiration_expression (as Decimal number) | *not set* | Decimal number |  | 
| max_lifetime | *not set* | Molang | The maximum lifetime of the particle in seconds. Can be a number or Molang expression. | 
| max_lifetime (as Named set of objects) | *not set* | Key/item pairs of [Max Lifetime (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| max_lifetime (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Particle Motion Collision
Enables particle collision with world geometry. Configure collision radius, bounce coefficient (how much velocity is retained), friction to slow sliding, and whether to expire on impact. Essential for physical particles like rain hitting ground, debris bouncing off surfaces, or arrows embedding in blocks.


#### Client Particles Particle Motion Collision Properties

**JSON path:** `minecraft:particle_motion_collision`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| coefficient_of_restitution | 0 | Decimal number |  | 
| collision_drag | 0 | Decimal number |  | 
| collision_radius | *not set* | Decimal number |  | 
| enabled | 1 | Keyed set of strings |  | 
| enabled (as Named set of objects) | *not set* | Key/item pairs of [Enabled (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| enabled (as Decimal number) | *not set* | Decimal number |  | 
| events (Collision Event) | *not set* | Array of [Events](#events) items |  | 
| events (Events) | *not set* | [Events (Events)](#events-events) item |  | 
| expire_on_contact | false | Boolean true/false |  | 

#### Events

##### Collision Event Properties

**JSON path:** `minecraft:particle_motion_collision > events`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event | *not set* | String |  | 
| min_speed | *not set* | Decimal number |  | 

#### Events (Events)

Same structure as [Events](#events).


### Client Particles Particle Motion Dynamic
Applies physics simulation to particle movement including gravity, acceleration, and air resistance. Linear acceleration adds constant force (gravity pulls down, wind pushes sideways), while drag slows particles over time. Rotation acceleration and drag control spinning. Creates natural-feeling motion for smoke rising, debris falling, or leaves drifting.


#### Client Particles Particle Motion Dynamic Properties

**JSON path:** `minecraft:particle_motion_dynamic`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| linear_acceleration | [0, 0, 0] | Molang array | The linear acceleration of particles, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. | 
| linear_acceleration (as Named set of objects) | *not set* | Key/item pairs of [Linear Acceleration (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| linear_acceleration (as Decimal number) | *not set* | Decimal number |  | 
| linear_drag_coefficient | 0 | Molang | The drag coefficient applied to particle motion. Can be a number or Molang expression. | 
| linear_drag_coefficient (as Named set of objects) | *not set* | Key/item pairs of [Linear Drag Coefficient (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| linear_drag_coefficient (as Decimal number) | *not set* | Decimal number |  | 
| rotation_acceleration | 0 | Molang | The rotation acceleration. Can be a number or Molang expression. | 
| rotation_acceleration (as Named set of objects) | *not set* | Key/item pairs of [Rotation Acceleration (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation_acceleration (as Decimal number) | *not set* | Decimal number |  | 
| rotation_drag_coefficient | 0 | Molang | The rotation drag coefficient. Can be a number or Molang expression. | 
| rotation_drag_coefficient (as Named set of objects) | *not set* | Key/item pairs of [Rotation Drag Coefficient (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation_drag_coefficient (as Decimal number) | *not set* | Decimal number |  | 

### Client Particles Particle Motion Parametric
Controls particle position and rotation using Molang expressions evaluated each frame, overriding physics simulation. Position is relative to emitter origin, allowing mathematical motion patterns like orbits, waves, spirals, or any path describable through equations. Ideal for magical effects, precise choreographed motion, or synchronized particle formations.


#### Client Particles Particle Motion Parametric Properties

**JSON path:** `minecraft:particle_motion_parametric`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| direction | *not set* | Molang array | Direction of particle motion, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. | 
| direction (as Named set of objects) | *not set* | Key/item pairs of [Direction (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| direction (as Decimal number) | *not set* | Decimal number |  | 
| relative_position | *not set* | Molang array | Position offset relative to the particle emitter, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. | 
| relative_position (as Named set of objects) | *not set* | Key/item pairs of [Relative Position (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| relative_position (as Decimal number) | *not set* | Decimal number |  | 
| rotation | *not set* | Keyed set of strings |  | 
| rotation (as Named set of objects) | *not set* | Key/item pairs of [Rotation (Legacy Molang Expression)](#legacy-molang-expression) items |  | 
| rotation (as Decimal number) | *not set* | Decimal number |  | 