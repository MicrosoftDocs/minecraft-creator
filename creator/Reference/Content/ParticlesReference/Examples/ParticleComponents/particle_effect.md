---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_effect"
description: "Describes the minecraft:particle_effect particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_effect

Defines a particle effect that can be spawned by entities, blocks, or scripts. Particle effects use a component-based system with emitters (controlling spawn rate and shape), appearance (billboard rendering and colors), and motion (physics and collision).


## Particle Effect Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| components | *not set* | [Components](#client-particles-particle-effect-component) item |  |  | 
| curves (Curves) | *not set* | [Curves](#curves) item |  |  | 
| description | *not set* | [Description](#client-particles-particle-effect-description) item | The description MUST contain an identifier and basic_render_parameters. |  | 
| events | *not set* | [Events](#client-particles-particle-event-node) item |  |  | 

## Client Particles Particle Effect Component
Container for all particle effect components that define behavior and appearance. Components control every aspect of particle effects: emitter shape and rate, particle lifetime and motion, visual appearance and colors, collision responses, and event triggers. Combine components to build complex effects from reusable, modular pieces.


#### Client Particles Particle Effect Component Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| minecraft:emitter_initialization | *not set* | [Emitter Initialization](#emitter-initialization) item |  |  | 
| minecraft:emitter_lifetime_events | *not set* | Object |  |  | 
| minecraft:emitter_lifetime_expression | *not set* | [Emitter Lifetime Expression](#client-particles-emitter-lifetime-expression) item |  |  | 
| minecraft:emitter_lifetime_looping | *not set* | [Emitter Lifetime Looping](#client-particles-emitter-lifetime-looping) item |  |  | 
| minecraft:emitter_lifetime_once | *not set* | [Emitter Lifetime Once](#client-particles-emitter-lifetime-once) item |  |  | 
| minecraft:emitter_local_space | *not set* | Object |  |  | 
| minecraft:emitter_rate_instant | *not set* | [Emitter Rate Instant](#client-particles-emitter-rate-instant) item |  |  | 
| minecraft:emitter_rate_manual | *not set* | [Emitter Rate Manual](#client-particles-emitter-rate-manual) item |  |  | 
| minecraft:emitter_rate_steady | *not set* | [Emitter Rate Steady](#client-particles-emitter-rate-steady) item |  |  | 
| minecraft:emitter_shape_box | *not set* | [Emitter Shape Box](#client-particles-emitter-shape-box) item |  |  | 
| minecraft:emitter_shape_custom | *not set* | [Emitter Shape Custom](#client-particles-emitter-shape-custom) item |  |  | 
| minecraft:emitter_shape_disc | *not set* | [Emitter Shape Disc](#client-particles-emitter-shape-disc) item |  |  | 
| minecraft:emitter_shape_entity_aabb | *not set* | [Emitter Shape Entity Aabb](#client-particles-emitter-shape-entity-aabb) item |  |  | 
| minecraft:emitter_shape_point | *not set* | [Emitter Shape Point](#client-particles-emitter-shape-point) item |  |  | 
| minecraft:emitter_shape_sphere | *not set* | [Emitter Shape Sphere](#client-particles-emitter-shape-sphere) item |  |  | 
| minecraft:particle_appearance_billboard | *not set* | [Particle Appearance Billboard](#client-particles-particle-appearance-billboard) item |  |  | 
| minecraft:particle_appearance_lighting | *not set* | Object |  |  | 
| minecraft:particle_appearance_tinting | *not set* | [Particle Appearance Tinting](#client-particles-particle-appearance-tinting) item |  |  | 
| minecraft:particle_expire_if_in_blocks | *not set* | Array of strings | List of block identifiers. Particles will expire when they are in any of these blocks. |  | 
| minecraft:particle_expire_if_not_in_blocks | *not set* | Array of strings | List of block identifiers. Particles will expire when they are NOT in any of these blocks. |  | 
| minecraft:particle_initial_speed | *not set* | Molang | The initial speed of particles. Can be a number, Molang expression, or array of [x, y, z] speeds. |  | 
| minecraft:particle_initial_speed (Alternate 1) | *not set* | Molang array |  |  | 
| minecraft:particle_initial_spin | *not set* | [Particle Initial Spin](#client-particles-particle-initial-spin) item |  |  | 
| minecraft:particle_initialization | *not set* | [Particle Initialization](#client-particles-particle-initialization) item |  |  | 
| minecraft:particle_kill_plane | *not set* | Molang array | A plane (A, B, C, D coefficients) that kills particles when they cross it. Defined as an array of 4 numbers [A, B, C, D] where Ax + By + Cz + D = 0. Value must have at least 4 items. Value must have at most 4 items. |  | 
| minecraft:particle_lifetime_events | *not set* | Object |  |  | 
| minecraft:particle_lifetime_expression | *not set* | [Particle Lifetime Expression](#client-particles-particle-lifetime-expression) item |  |  | 
| minecraft:particle_motion_collision | *not set* | [Particle Motion Collision](#client-particles-particle-motion-collision) item |  |  | 
| minecraft:particle_motion_dynamic | *not set* | [Particle Motion Dynamic](#client-particles-particle-motion-dynamic) item |  |  | 
| minecraft:particle_motion_parametric | *not set* | [Particle Motion Parametric](#client-particles-particle-motion-parametric) item |  |  | 

## Emitter Initialization
Defines Molang expressions that run when the emitter is created and on each update. Useful for initializing and updating emitter variables.


#### Emitter Initialization Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| creation_expression | 0 | Molang | Molang expression run once when the emitter is created. Use this to initialize variables. |  | 
| creation_expression (Alternate 1) | *not set* | Key/item pairs of [Creation Expression](#creation-expression) items |  |  | 
| creation_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| per_update_expression | 0 | Molang | Molang expression run each frame while the emitter is active. Use this to update variables based on time or other conditions. |  | 
| per_update_expression (Alternate 1) | *not set* | Key/item pairs of [Per Update Expression](#per-update-expression) items |  |  | 
| per_update_expression (Alternate 2) | *not set* | Decimal number |  |  | 

## Creation Expression

#### Creation Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Per Update Expression

#### Per Update Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Lifetime Expression
Controls when the emitter activates and expires using Molang expressions. The activation expression starts particle emission when it evaluates to non-zero, and the expiration expression stops it. This enables dynamic effects tied to entity state—like flames that only appear when an entity is on fire, or magic particles that pulse with the caster's mana.


#### Client Particles Emitter Lifetime Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| activation_expression | 1 | Molang | When the expression is non-zero, the emitter is activated. Can be a number or Molang expression. |  | 
| activation_expression (Alternate 1) | *not set* | Key/item pairs of [Activation Expression](#activation-expression) items |  |  | 
| activation_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| expiration_expression | 0 | Molang | When the expression is non-zero, the emitter expires. Can be a number or Molang expression. |  | 
| expiration_expression (Alternate 1) | *not set* | Key/item pairs of [Expiration Expression](#expiration-expression) items |  |  | 
| expiration_expression (Alternate 2) | *not set* | Decimal number |  |  | 

## Activation Expression

#### Activation Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Expiration Expression

#### Expiration Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Lifetime Looping
Creates repeating particle effects that cycle between active and dormant phases. The emitter runs for the active_time duration, pauses for sleep_time, then repeats indefinitely. Perfect for ambient effects like bubbling cauldrons, flickering torches, pulsing enchantment glows, or creature breathing animations.


#### Client Particles Emitter Lifetime Looping Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. |  | 
| active_time (Alternate 1) | *not set* | Key/item pairs of [Active Time](#active-time) items |  |  | 
| active_time (Alternate 2) | *not set* | Decimal number |  |  | 
| sleep_time | 0 | Molang | The time in seconds that the emitter sleeps between active periods. Can be a number or Molang expression. |  | 
| sleep_time (Alternate 1) | *not set* | Key/item pairs of [Sleep Time](#sleep-time) items |  |  | 
| sleep_time (Alternate 2) | *not set* | Decimal number |  |  | 

## Active Time

#### Active Time Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Sleep Time

#### Sleep Time Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Lifetime Once
Creates a single-burst particle effect that runs once and stops. The emitter activates for the specified active_time duration, emits particles, then terminates. Ideal for impact effects like explosions, block breaking, critical hits, potion splashes, and other momentary visual feedback.


#### Client Particles Emitter Lifetime Once Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| active_time | 0 | Molang | The time in seconds that the emitter is active. Can be a number or Molang expression. |  | 
| active_time (Alternate 1) | *not set* | Key/item pairs of [Active Time](#active-time) items |  |  | 
| active_time (Alternate 2) | *not set* | Decimal number |  |  | 

## Client Particles Emitter Rate Instant
Spawns all particles in a single instant burst when the emitter activates. Unlike steady emission that spawns particles over time, this creates an immediate cloud of particles—perfect for explosions, block destruction debris, potion splash impacts, ender teleportation effects, and any effect that needs an instantaneous particle release.


#### Client Particles Emitter Rate Instant Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| num_particles | *not set* | Molang | The number of particles to emit. Can be a number or Molang expression. |  | 
| num_particles (Alternate 1) | *not set* | Key/item pairs of [Num Particles](#num-particles) items |  |  | 
| num_particles (Alternate 2) | *not set* | Decimal number |  |  | 

## Num Particles

#### Num Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Rate Manual
Allows manual control over particle emission through events rather than automatic spawning. Particles are only created when explicitly triggered via Molang or particle events, up to the max_particles limit. Useful for effects that should only spawn under specific conditions, like damage indicators, pickup sparkles, or script-controlled visual feedback.


#### Client Particles Emitter Rate Manual Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. |  | 
| max_particles (Alternate 1) | *not set* | Key/item pairs of [Max Particles](#max-particles) items |  |  | 
| max_particles (Alternate 2) | *not set* | Decimal number |  |  | 

## Max Particles

#### Max Particles Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Rate Steady
Continuously spawns particles at a consistent rate over time. The spawn_rate controls how many particles appear per second, while max_particles limits the total active count. This is the most common emission mode, used for ongoing effects like torch flames, mob auras, weather effects, potion bubbles, and ambient environmental particles.


#### Client Particles Emitter Rate Steady Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max_particles | *not set* | Molang | The maximum number of particles that can exist at once. Can be a number or Molang expression. |  | 
| max_particles (Alternate 1) | *not set* | Key/item pairs of [Max Particles](#max-particles) items |  |  | 
| max_particles (Alternate 2) | *not set* | Decimal number |  |  | 
| spawn_rate | *not set* | Molang | The number of particles to spawn per second. Can be a number or Molang expression. |  | 
| spawn_rate (Alternate 1) | *not set* | Key/item pairs of [Spawn Rate](#spawn-rate) items |  |  | 
| spawn_rate (Alternate 2) | *not set* | Decimal number |  |  | 

## Spawn Rate

#### Spawn Rate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Shape Box
Emits particles from random positions within a rectangular box volume. Define the box using half_dimensions (distance from center to each edge) and offset from the emitter. Particles can emit outward from spawn points, inward toward center, or in custom directions. Ideal for area effects like smoke filling a room, rain in a region, or magic barriers.


#### Client Particles Emitter Shape Box Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| half_dimensions | *not set* | Molang array | The half dimensions of the box, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| half_dimensions (Alternate 1) | *not set* | Key/item pairs of [Half Dimensions](#half-dimensions) items |  |  | 
| half_dimensions (Alternate 2) | *not set* | Decimal number |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 
| surface_only | false | Boolean true/false |  |  | 

## Half Dimensions

#### Half Dimensions Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Offset

#### Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Shape Custom
Emits particles from positions calculated by custom Molang expressions. Unlike preset shapes, this gives complete control over spawn locations using math expressions that can create rings, spirals, waves, or any procedural pattern. Use the offset expressions to define X, Y, Z coordinates relative to the emitter for complex artistic effects.


#### Client Particles Emitter Shape Custom Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | [0, 0, 0] | Molang array | The direction of particle emission, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| direction (Alternate 1) | *not set* | Key/item pairs of [Direction](#direction) items |  |  | 
| direction (Alternate 2) | *not set* | Decimal number |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 

## Direction

#### Direction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Shape Disc
Emits particles from random positions on a flat circular disc. Configure the radius and plane normal to control disc size and orientation. Surface_only restricts spawns to the disc edge for ring effects. Perfect for ground-based effects like summoning circles, shockwaves, splash impacts, and aura rings around entities.


#### Client Particles Emitter Shape Disc Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 
| plane_normal | [0, 1, 0] | String | The normal vector of the disc plane. Can be 'x', 'y', 'z', or an array of [x, y, z] values. |  | 
| plane_normal (Alternate 1) | *not set* | Molang array |  |  | 
| radius | 1 | Molang | The radius of the disc. Can be a number or Molang expression. |  | 
| radius (Alternate 1) | *not set* | Key/item pairs of [Radius](#radius) items |  |  | 
| radius (Alternate 2) | *not set* | Decimal number |  |  | 
| surface_only | false | Boolean true/false |  |  | 

## Radius

#### Radius Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Emitter Shape Entity Aabb
Emits particles from random positions within the attached entity's axis-aligned bounding box. The emission volume automatically scales with entity size, making it perfect for body-covering effects like burning, freezing, poison clouds, healing auras, or damage feedback that should wrap around creatures of any size.


#### Client Particles Emitter Shape Entity Aabb Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| surface_only | false | Boolean true/false |  |  | 

## Client Particles Emitter Shape Point
Emits all particles from a single point in space, offset from the emitter origin. This is the simplest and most common emission shape—all particles spawn at the same location and spread outward based on their initial velocity. Used for torches, candles, sparks, magic projectile cores, and any effect with a focused emission source.


#### Client Particles Emitter Shape Point Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Molang array | The direction of particle emission, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| direction (Alternate 1) | *not set* | Key/item pairs of [Direction](#direction) items |  |  | 
| direction (Alternate 2) | *not set* | Decimal number |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 

## Client Particles Emitter Shape Sphere
Emits particles from random positions within a spherical volume. Configure the radius to set sphere size and surface_only to restrict spawns to the outer shell. Direction can be inward, outward, or custom. Ideal for explosions, magical orbs, bubble columns, mob spawn effects, and any effect needing uniform 3D distribution.


#### Client Particles Emitter Shape Sphere Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | String | The direction of particle emission. Can be a string ('inwards' or 'outwards'), or an array of [x, y, z] Molang expressions. |  | 
| direction (Alternate 1) | *not set* | Molang array |  |  | 
| offset | [0, 0, 0] | Molang array | The offset from the emitter position, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| offset (Alternate 1) | *not set* | Key/item pairs of [Offset](#offset) items |  |  | 
| offset (Alternate 2) | *not set* | Decimal number |  |  | 
| radius | 1 | Molang | The radius of the sphere. Can be a number or Molang expression. |  | 
| radius (Alternate 1) | *not set* | Key/item pairs of [Radius](#radius) items |  |  | 
| radius (Alternate 2) | *not set* | Decimal number |  |  | 
| surface_only | false | Boolean true/false |  |  | 

## Client Particles Particle Appearance Billboard
Controls how particle sprites render and orient toward the camera. The facing_camera_mode determines billboard behavior: 'lookat_xyz' always faces the camera (classic sprites), 'rotate_y' only rotates vertically (tall flames), and direction modes align with particle velocity (arrows, sparks). Size controls particle dimensions using Molang for dynamic scaling.


#### Client Particles Particle Appearance Billboard Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Object |  |  | 
| facing_camera_mode | *not set* | [Facing Camera Mode](#facing-camera-mode-choices) choices | The facing mode of the billboard. Controls how the particle faces the camera. |  | 
| size | *not set* | Molang array | The size of the particle billboard, as [width, height] using Molang expressions or numbers. Value must have at least 2 items. Value must have at most 2 items. |  | 
| size (Alternate 1) | *not set* | Key/item pairs of [Size](#size) items |  |  | 
| size (Alternate 2) | *not set* | Decimal number |  |  | 
| uv | *not set* | Object |  |  | 

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

## Size

#### Size Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Appearance Tinting
Applies color tinting to particle textures, from simple solid colors to complex gradients. Use hex colors for static tints, RGBA arrays with Molang for dynamic colors, or gradient objects to blend between colors over particle lifetime. Essential for flames fading orange-to-gray, magical auras shifting colors, or any effect needing color variation.


#### Client Particles Particle Appearance Tinting Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| color | *not set* | Molang array | The color of the particle, can be a hex color string (like '#RRGGBB'), an array of [r, g, b, a] values (numbers or Molang), or an object with gradient and interpolant. Value must have at least 3 items. Value must have at most 4 items. |  | 
| color (Alternate 1) | *not set* | String | A hex color string like '#dfe5ed' or '#RRGGBBAA'. |  | 
| color (Alternate 2) | *not set* | [Color](#color) item |  |  | 

## Color

#### Color Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| gradient | *not set* | String | Color gradient - can be an array of color arrays (each being [r, g, b, a] molang/numbers), or an object mapping time points to hex color strings or color arrays. |  | 
| gradient (Alternate 1) | *not set* | Keyed set of strings | Object mapping time points to hex color strings. |  | 
| gradient (Alternate 2) | *not set* | Object | Object mapping time points to color arrays with Molang/numbers. |  | 
| interpolant | *not set* | Molang | A Molang expression that determines which gradient color to use. |  | 

## Client Particles Particle Initial Spin
Sets the starting rotation angle and spin velocity for each particle. Initial rotation provides random orientation variety, while spin_rate creates continuous rotation during the particle's lifetime. Use for debris that tumbles, leaves spinning as they fall, sparks that twist, or any particle needing rotational motion.


#### Client Particles Particle Initial Spin Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation | 0 | Keyed set of strings |  |  | 
| rotation (Alternate 1) | *not set* | Key/item pairs of [Rotation](#rotation) items |  |  | 
| rotation (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation_rate | 0 | Keyed set of strings |  |  | 
| rotation_rate (Alternate 1) | *not set* | Key/item pairs of [Rotation Rate](#rotation-rate) items |  |  | 
| rotation_rate (Alternate 2) | *not set* | Decimal number |  |  | 

## Rotation

#### Rotation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation Rate

#### Rotation Rate Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Initialization
Runs Molang expressions when each individual particle spawns to initialize per-particle variables. Unlike emitter_initialization which runs once per emitter, this executes for every particle—enabling randomized properties, unique trajectories, or per-particle state that persists through the particle's lifetime.


#### Client Particles Particle Initialization Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| per_render_expression | 0 | Keyed set of strings |  |  | 
| per_render_expression (Alternate 1) | *not set* | Key/item pairs of [Per Render Expression](#per-render-expression) items |  |  | 
| per_render_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| per_update_expression | 0 | Keyed set of strings |  |  | 
| per_update_expression (Alternate 1) | *not set* | Key/item pairs of [Per Update Expression](#per-update-expression) items |  |  | 
| per_update_expression (Alternate 2) | *not set* | Decimal number |  |  | 

## Per Render Expression

#### Per Render Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Lifetime Expression
Controls individual particle lifetimes using Molang expressions. The max_lifetime sets the absolute duration limit, while expiration_expression can terminate particles early when conditions are met (like leaving a certain area). Enables dynamic particle populations that respond to game state beyond simple time-based expiration.


#### Client Particles Particle Lifetime Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expiration_expression | 0 | Molang | When the expression is non-zero, the particle expires. Can be a number or Molang expression. |  | 
| expiration_expression (Alternate 1) | *not set* | Key/item pairs of [Expiration Expression](#expiration-expression) items |  |  | 
| expiration_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| max_lifetime | *not set* | Molang | The maximum lifetime of the particle in seconds. Can be a number or Molang expression. |  | 
| max_lifetime (Alternate 1) | *not set* | Key/item pairs of [Max Lifetime](#max-lifetime) items |  |  | 
| max_lifetime (Alternate 2) | *not set* | Decimal number |  |  | 

## Max Lifetime

#### Max Lifetime Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Motion Collision
Enables particle collision with world geometry. Configure collision radius, bounce coefficient (how much velocity is retained), friction to slow sliding, and whether to expire on impact. Essential for physical particles like rain hitting ground, debris bouncing off surfaces, or arrows embedding in blocks.


#### Client Particles Particle Motion Collision Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| coefficient_of_restitution | 0 | Decimal number |  |  | 
| collision_drag | 0 | Decimal number |  |  | 
| collision_radius | *not set* | Decimal number |  |  | 
| enabled | 1 | Keyed set of strings |  |  | 
| enabled (Alternate 1) | *not set* | Key/item pairs of [Enabled](#enabled) items |  |  | 
| enabled (Alternate 2) | *not set* | Decimal number |  |  | 
| events (Collision Event) | *not set* | Array of [Events](#events) items |  |  | 
| events (Alternate 1) | *not set* | [Events](#events) item |  |  | 
| expire_on_contact | false | Boolean true/false |  |  | 

## Enabled

#### Enabled Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Events

#### Collision Event Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event | *not set* | String |  |  | 
| min_speed | *not set* | Decimal number |  |  | 

## Client Particles Particle Motion Dynamic
Applies physics simulation to particle movement including gravity, acceleration, and air resistance. Linear acceleration adds constant force (gravity pulls down, wind pushes sideways), while drag slows particles over time. Rotation acceleration and drag control spinning. Creates natural-feeling motion for smoke rising, debris falling, or leaves drifting.


#### Client Particles Particle Motion Dynamic Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| linear_acceleration | [0, 0, 0] | Molang array | The linear acceleration of particles, as [x, y, z] Molang expressions or numbers. Value must have at least 3 items. Value must have at most 3 items. |  | 
| linear_acceleration (Alternate 1) | *not set* | Key/item pairs of [Linear Acceleration](#linear-acceleration) items |  |  | 
| linear_acceleration (Alternate 2) | *not set* | Decimal number |  |  | 
| linear_drag_coefficient | 0 | Molang | The drag coefficient applied to particle motion. Can be a number or Molang expression. |  | 
| linear_drag_coefficient (Alternate 1) | *not set* | Key/item pairs of [Linear Drag Coefficient](#linear-drag-coefficient) items |  |  | 
| linear_drag_coefficient (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation_acceleration | 0 | Molang | The rotation acceleration. Can be a number or Molang expression. |  | 
| rotation_acceleration (Alternate 1) | *not set* | Key/item pairs of [Rotation Acceleration](#rotation-acceleration) items |  |  | 
| rotation_acceleration (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation_drag_coefficient | 0 | Molang | The rotation drag coefficient. Can be a number or Molang expression. |  | 
| rotation_drag_coefficient (Alternate 1) | *not set* | Key/item pairs of [Rotation Drag Coefficient](#rotation-drag-coefficient) items |  |  | 
| rotation_drag_coefficient (Alternate 2) | *not set* | Decimal number |  |  | 

## Linear Acceleration

#### Linear Acceleration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Linear Drag Coefficient

#### Linear Drag Coefficient Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation Acceleration

#### Rotation Acceleration Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Rotation Drag Coefficient

#### Rotation Drag Coefficient Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Motion Parametric
Controls particle position and rotation using Molang expressions evaluated each frame, overriding physics simulation. Position is relative to emitter origin, allowing mathematical motion patterns like orbits, waves, spirals, or any path describable through equations. Ideal for magical effects, precise choreographed motion, or synchronized particle formations.


#### Client Particles Particle Motion Parametric Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| direction | *not set* | Molang array | Direction of particle motion, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| direction (Alternate 1) | *not set* | Key/item pairs of [Direction](#direction) items |  |  | 
| direction (Alternate 2) | *not set* | Decimal number |  |  | 
| relative_position | *not set* | Molang array | Position offset relative to the particle emitter, as [x, y, z] Molang expressions. Value must have at least 3 items. Value must have at most 3 items. |  | 
| relative_position (Alternate 1) | *not set* | Key/item pairs of [Relative Position](#relative-position) items |  |  | 
| relative_position (Alternate 2) | *not set* | Decimal number |  |  | 
| rotation | *not set* | Keyed set of strings |  |  | 
| rotation (Alternate 1) | *not set* | Key/item pairs of [Rotation](#rotation) items |  |  | 
| rotation (Alternate 2) | *not set* | Decimal number |  |  | 

## Relative Position

#### Relative Position Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Curves

#### Curves Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| horizontal_range | 1 | Keyed set of strings |  |  | 
| horizontal_range (Alternate 1) | *not set* | Key/item pairs of [Horizontal Range](#horizontal-range) items |  |  | 
| horizontal_range (Alternate 2) | *not set* | Decimal number |  |  | 
| input | *not set* | Keyed set of strings |  |  | 
| input (Alternate 1) | *not set* | Key/item pairs of [Input](#input) items |  |  | 
| input (Alternate 2) | *not set* | Decimal number |  |  | 
| nodes | *not set* | Keyed set of strings |  |  | 
| nodes (Alternate 1) | *not set* | Key/item pairs of [Nodes](#nodes) items |  |  | 
| nodes (Alternate 2) | *not set* | Decimal number |  |  | 
| type | *not set* | Object |  |  | 

## Horizontal Range

#### Horizontal Range Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Input

#### Input Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Nodes

#### Nodes Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Effect Description
The description MUST contain an identifier and basic_render_parameters.


#### Client Particles Particle Effect Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| basic_render_parameters | *not set* | [Basic Render Parameters](#client-particles-particle-effect-basic-render-parameters) item | The parameters MUST contain a material and texture. |  | 
| identifier | *not set* | String |  |  | 

## Client Particles Particle Effect Basic Render Parameters
The parameters MUST contain a material and texture.


#### Client Particles Particle Effect Basic Render Parameters Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| material | *not set* | String | The material used for rendering the particle effect. |  | 
| texture | *not set* | String | The texture path used for the particle effect. |  | 

## Client Particles Particle Event Node
Defines actions triggered by particle events like spawning, collision, or expiration. Event nodes can run Molang expressions to modify variables, spawn nested particle effects, play sounds, or control emitter state. Chain multiple effects together for complex reactions like explosions spawning secondary debris particles.


#### Client Particles Particle Event Node Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | 0 | Keyed set of strings |  |  | 
| expression (Alternate 1) | *not set* | Key/item pairs of [Expression](#expression) items |  |  | 
| expression (Alternate 2) | *not set* | Decimal number |  |  | 
| log |  | String |  |  | 
| particle_effect | {"effect":"","pre_effect_expression":0,"type":null} | [Particle Effect](#client-particles-particle-visual-effect-event) item |  |  | 
| randomize | *not set* | [Randomize](#client-particles-particle-event-random-node) item |  |  | 
| sequence | *not set* | [Sequence](#client-particles-particle-event-node) item |  |  | 
| sound_effect | *not set* | [Sound Effect](#client-particles-particle-sound-effect-event) item |  |  | 

## Expression

#### Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

## Client Particles Particle Visual Effect Event
Spawns another particle effect when triggered by particle events, enabling cascading visual sequences. Reference other particle effects by identifier to create chains like explosions spawning embers, impacts creating dust clouds, or magical projectiles trailing sparkles. Builds complex layered effects from simpler reusable components.


#### Client Particles Particle Visual Effect Event Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| effect | *not set* | Object |  |  | 
| pre_effect_expression | 0 | Keyed set of strings |  |  | 
| pre_effect_expression (Alternate 1) | *not set* | Key/item pairs of [Pre Effect Expression](#pre-effect-expression) items |  |  | 
| pre_effect_expression (Alternate 2) | *not set* | Decimal number |  |  | 
| type | *not set* | [Type](#type-choices) choices |  |  | 

## Pre Effect Expression

#### Pre Effect Expression Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | *not set* | String |  |  | 
| version | *not set* | Integer number |  |  | 

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| emitter | Emitter | |
| emitter_bound | Emitter bound | |
| particle | Particle | |
| particle_with_velocity | Particle with velocity | |

## Client Particles Particle Event Random Node
Triggers one of several possible effects randomly when a particle event fires, with weighted probability. Assign weights to different event outcomes for varied responses—like impacts sometimes spawning sparks, sometimes dust, with configurable chances. Adds natural variation to effects without needing complex Molang logic.


#### Client Particles Particle Event Random Node Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| expression | 0 | Keyed set of strings |  |  | 
| expression (Alternate 1) | *not set* | Key/item pairs of [Expression](#expression) items |  |  | 
| expression (Alternate 2) | *not set* | Decimal number |  |  | 
| log |  | String |  |  | 
| particle_effect | {"effect":"","pre_effect_expression":0,"type":null} | [Particle Effect](#client-particles-particle-visual-effect-event) item |  |  | 
| randomize | *not set* | [Randomize](#client-particles-particle-event-random-node) item |  |  | 
| sequence | *not set* | [Sequence](#client-particles-particle-event-node) item |  |  | 
| sound_effect | *not set* | [Sound Effect](#client-particles-particle-sound-effect-event) item |  |  | 
| weight | *not set* | Decimal number |  |  | 

## Client Particles Particle Event Random Node

## Client Particles Particle Event Node

## Client Particles Particle Sound Effect Event
Plays a sound effect when triggered by particle events like spawning, collision, or expiration. Reference sounds defined in sound_definitions.json using their identifier. Synchronizes audio with visual particle moments—sparks crackling, explosions booming, or magical effects chiming for immersive multi-sensory feedback.


#### Client Particles Particle Sound Effect Event Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event_name | *not set* | String |  |  | 