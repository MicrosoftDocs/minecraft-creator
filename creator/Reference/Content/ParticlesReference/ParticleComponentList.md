---
author: mammerla
ms.author: v-jillheaden
title: Particle Component List
ms.prod: gaming
---

# Particle Component List

There are two types of components used with particle systems in Minecraft: Bedrock Edition: **emitter** components and **particle** components.

> [!NOTE]
> For fields in these components, the following shorthand is used:
>
> ```JSON
> <float> - field takes a floating point input
> <float/Molang> - field takes a floating point input or a Molang expression
> <default:val> - specifies the default value used if no value is given
> <bool> - `true` or `false`
> <string> - a string of characters like this: "Hello! I'm a string."
> <default> - not a part of the particular line; this just says what the field defaults to if not otherwise specified
> ```

## Emitter Components

### Initial State Components

- [Emitter Local Space component](ParticleComponents\minecraftEmitter_local_space.md)
- [Emitter Initialization component](ParticleComponents\minecraftEmitter_initialization.md)

### Emitter Rate Components

- [Emitter Rate Instant component](ParticleComponents\minecraftEmitter_rate_instant.md)
- [Emitter Rate Steady component](ParticleComponents\minecraftEmitter_rate_steady.md)
- [Emitter Rate Manual component](ParticleComponents\minecraftEmitter_rate_manual.md)

### Emitter Lifetime Components

- [Emitter Lifetime Looping component](ParticleComponents\minecraftEmitter_lifetime_looping.md)
- [Emitter Lifetime Once component](ParticleComponents\minecraftEmitter_lifetime_once.md)
- [Emitter Lifetime Expression component](ParticleComponents\minecraftEmitter_lifetime_expression.md)
- [Emitter Lifetime Events component](ParticleComponents\minecraftEmitter_lifetime_events.md)

### Emitter Shape Components

- [Emitter Shape Point component](ParticleComponents\minecraftEmitter_shape_point.md)
- [Emitter Shape Sphere component](ParticleComponents\minecraftEmitter_shape_sphere.md)
- [Emitter Shape Box component](ParticleComponents\minecraftEmitter_shape_box.md)
- [Emitter Shape Custom component](ParticleComponents\minecraftEmitter_shape_custom.md)
- [Emitter Shape Entity-AABB component](ParticleComponents\minecraftEmitter_shape_entity-AABB.md)
- [Emitter Disc component](ParticleComponents\minecraftEmitter_disc.md)

## Particle Components

### Particle Initial State Components

- [Particle Initial Speed component](ParticleComponents\minecraftParticle_initial_speed.md)
- [Particle Initial Spin component](ParticleComponents\minecraftParticle_initial_spin.md)

### Particle Motion Components

- [Particle Motion Dynamic component](ParticleComponents\minecraftParticle_motion_dynamic.md)
- [Particle Motion Parametric component](ParticleComponents\minecraftParticle_motion_parametric.md)
- [Particle Motion Collision component](ParticleComponents\minecraftParticle_motion_collision.md)

### Particle Appearance Components

- [Particle Appearance Billboard component](ParticleComponents\minecraftParticle_appearance_billboard.md)
- [Particle Appearance Tinting component](ParticleComponents\minecraftParticle_appearance_tinting.md)
- [Particle Appearance Lighting component](ParticleComponents\minecraftParticle_appearance_lighting.md)

### Particle Lifetime Components

- [Particle Lifetime Expression component](ParticleComponents\minecraftParticle_lifetime_expression.md)
- [Particle Lifetime Events component](ParticleComponents\minecraftParticle_lifetime_events.md)
- [Particle Expire if in Blocks component](ParticleComponents\minecraftParticle_expire_if_in_blocks.md)
- [Particle Expire if Not in Blocks component](ParticleComponents\minecraftParticle_expire_if_not_in_blocks.md)
- [Particle Lifetime Kill-Plane component](ParticleComponents\minecraftParticle_lifetime_kill-plane.md)
