---
author: mammerla
ms.author: mikeam
title: "Particle Effects Documentation - Particle Effects"
description: "A reference document describing all current Particle Effects"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particle Effects Documentation

| Particle Effects | Description |
|:-----|:----------|
| [Color Proxy](ParticleComponents/color_proxy.md)| Defines color gradients with smooth interpolation for particle effects. |
| [DirectionSettings Proxy](ParticleComponents/directionsettings_proxy.md)| Controls the initial direction and velocity of emitted particles. |
| [emitter_initialization](ParticleComponents/emitter_initialization.md)| Defines Molang expressions that run when the emitter is created and on each update. |
| [emitter_lifetime_events proxy](ParticleComponents/emitter_lifetime_events_proxy.md)| Controls emitter lifetime events like creation and expiration. |
| [emitter_lifetime_events travel_distance_events](ParticleComponents/emitter_lifetime_events_travel_distance_events.md)| Triggers particle events when the emitter has traveled a specified distance. |
| [emitter_lifetime_expression](ParticleComponents/emitter_lifetime_expression.md)| Controls when the emitter activates and expires using Molang expressions. |
| [emitter_lifetime_looping](ParticleComponents/emitter_lifetime_looping.md)| Creates repeating particle effects that cycle between active and dormant phases. |
| [emitter_lifetime_once](ParticleComponents/emitter_lifetime_once.md)| Creates a single-burst particle effect that runs once and stops. |
| [emitter_local_space proxy](ParticleComponents/emitter_local_space_proxy.md)| Controls whether particles inherit emitter position and rotation. |
| [emitter_rate_instant](ParticleComponents/emitter_rate_instant.md)| Spawns all particles in a single instant burst when the emitter activates. |
| [emitter_rate_manual](ParticleComponents/emitter_rate_manual.md)| Allows manual control over particle emission through events rather than automatic spawning. |
| [emitter_rate_steady](ParticleComponents/emitter_rate_steady.md)| Continuously spawns particles at a consistent rate over time. |
| [emitter_shape_box](ParticleComponents/emitter_shape_box.md)| Emits particles from random positions within a rectangular box volume. |
| [emitter_shape_custom](ParticleComponents/emitter_shape_custom.md)| Emits particles from positions calculated by custom Molang expressions. |
| [emitter_shape_disc](ParticleComponents/emitter_shape_disc.md)| Emits particles from random positions on a flat circular disc. |
| [emitter_shape_entity_aabb](ParticleComponents/emitter_shape_entity_aabb.md)| Emits particles from random positions within the attached entity's axis-aligned bounding box. |
| [emitter_shape_point](ParticleComponents/emitter_shape_point.md)| Emits all particles from a single point in space, offset from the emitter origin. |
| [emitter_shape_sphere](ParticleComponents/emitter_shape_sphere.md)| Emits particles from random positions within a spherical volume. |
| [ParticleLifetimeEvents Proxy](ParticleComponents/particlelifetimeevents_proxy.md)| Controls particle lifetime events like creation and expiration. |
| [particle_appearance_billboard](ParticleComponents/particle_appearance_billboard.md)| Controls how particle sprites render and orient toward the camera. |
| [particle_appearance_billboard flipbook_data](ParticleComponents/particle_appearance_billboard_flipbook_data.md)| Enables sprite sheet animation for particle billboards, cycling through frames over the particle's lifetime. |
| [Particle Appearance Billboard Flipbook Data 1.21.0 Misc](ParticleComponents/particle_appearance_billboard_flipbook_data_1.21.0.md)| Particle Appearance Billboard Flipbook Data 1.21.0 Misc |
| [particle_appearance_tinting](ParticleComponents/particle_appearance_tinting.md)| Applies color tinting to particle textures, from simple solid colors to complex gradients. |
| [particle_curve_bezier_chain](ParticleComponents/particle_curve_bezier_chain.md)| Creates smooth, organic animation curves using chained bezier segments. |
| [particle_curve_bezier_chain node_proxy](ParticleComponents/particle_curve_bezier_chain_node_proxy.md)| Defines a control point in a bezier chain curve, specifying position and slope at that point. |
| [particle_curve_linear](ParticleComponents/particle_curve_linear.md)| Creates animation curves using linear interpolation between keyframe values. |
| [particle_document](ParticleComponents/particle_document.md)| A resource pack particle effect definition document for Minecraft Bedrock Edition. |
| [particle_effect](ParticleComponents/particle_effect.md)| Defines a particle effect that can be spawned by entities, blocks, or scripts. |
| [particle_effect basic_render_parameters](ParticleComponents/particle_effect_basic_render_parameters.md)| The parameters MUST contain a material and texture. |
| [particle_effect component](ParticleComponents/particle_effect_component.md)| Container for all particle effect components that define behavior and appearance. |
| [particle_effect description](ParticleComponents/particle_effect_description.md)| The description MUST contain an identifier and basic_render_parameters. |
| [particle_event_node](ParticleComponents/particle_event_node.md)| Defines actions triggered by particle events like spawning, collision, or expiration. |
| [particle_event_random_node](ParticleComponents/particle_event_random_node.md)| Triggers one of several possible effects randomly when a particle event fires, with weighted probability. |
| [particle_initialization](ParticleComponents/particle_initialization.md)| Runs Molang expressions when each individual particle spawns to initialize per-particle variables. |
| [particle_initial_spin](ParticleComponents/particle_initial_spin.md)| Sets the starting rotation angle and spin velocity for each particle. |
| [particle_lifetime_expression](ParticleComponents/particle_lifetime_expression.md)| Controls individual particle lifetimes using Molang expressions. |
| [particle_motion_collision](ParticleComponents/particle_motion_collision.md)| Enables particle collision with world geometry. |
| [particle_motion_collision_event](ParticleComponents/particle_motion_collision_event.md)| Defines the event triggered when a particle collides with a block or surface. |
| [particle_motion_dynamic](ParticleComponents/particle_motion_dynamic.md)| Applies physics simulation to particle movement including gravity, acceleration, and air resistance. |
| [particle_motion_parametric](ParticleComponents/particle_motion_parametric.md)| Controls particle position and rotation using Molang expressions evaluated each frame, overriding physics simulation. |
| [particle_sound_effect_event](ParticleComponents/particle_sound_effect_event.md)| Plays a sound effect when triggered by particle events like spawning, collision, or expiration. |
| [particle_visual_effect_event](ParticleComponents/particle_visual_effect_event.md)| Spawns another particle effect when triggered by particle events, enabling cascading visual sequences. |
| [UV Proxy](ParticleComponents/uv_proxy.md)| Controls UV texture mapping and flipbook animation for particles. |