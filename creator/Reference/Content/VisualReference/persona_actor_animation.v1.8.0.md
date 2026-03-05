---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:persona_actor_animation.v1.8.0"
description: "Describes the minecraft:persona_actor_animation.v1.8.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:persona_actor_animation.v1.8.0

Defines a persona actor animation document with format_version 1.8.0.


## Persona Actor Animation (v1.8.0) Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| animations | *not set* | Key/item pairs of [Animations](#animations) items |  | 
| format_version | *not set* | Version |  | 

### Animations

#### Animations Properties

**JSON path:** `animations`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| anim_time_update | *not set* | Molang | how does time pass when playing the animation. Defaults to "query.anim_time + query.delta_time" which means advance in seconds. | 
| blend_weight | *not set* | Molang |  | 
| bones | *not set* | Key/item pairs of [Bones](#bones) items |  | 
| loop | *not set* | Boolean true/false | should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame" | 
| loop_delay | *not set* | Molang | How long to wait in seconds before looping this animation. Note that this expression is evaluated after each loop and on looping animation only. | 
| loop"<"hold_on_last_frame" | *not set* | String | should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame" | 
| override_previous_animation | *not set* | Boolean true/false | reset bones in this animation to the default pose before applying this animation | 
| particle_effects | *not set* | Key/item pairs of [Particle Effects](#particle-effects) items |  | 
| particle_effects (as Array of objects) | *not set* | Array of [Particle Effects](#particle-effects) items |  | 
| sound_effects | *not set* | Key/item pairs of [Sound Effects](#sound-effects) items | sound effects to trigger as this animation plays, keyed by time | 
| sound_effects (as Array of objects) | *not set* | Array of [Sound Effects](#sound-effects) items |  | 
| start_delay | *not set* | Molang | How long to wait in seconds before playing this animation. | 
| timeline | *not set* | Named set of objects |  | 
| timeline (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

#### start_delay

How long to wait in seconds before playing this animation.  Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again.  A looping animation should use 'loop_delay' if it wants a delay between loops.


#### Bones

##### Bones Properties

**JSON path:** `animations > bones`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| position | *not set* | Key/item pairs of [Position](#position) items |  | 
| position (as Molang array) | *not set* | Molang array |  | 
| position (as Molang) | *not set* | Molang |  | 
| position (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| relative_to | *not set* | [Relative To](#relative-to) item |  | 
| rotation | *not set* | Key/item pairs of [Rotation](#rotation) items |  | 
| rotation (as Array of objects) | *not set* | Array of [Rotation](#rotation) items |  | 
| rotation (as Molang array) | *not set* | Molang array |  | 
| rotation (as Molang) | *not set* | Molang |  | 
| rotation (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| scale | *not set* | Key/item pairs of [Scale](#scale) items |  | 
| scale (as Molang array) | *not set* | Molang array |  | 
| scale (as Molang) | *not set* | Molang |  | 
| scale (as Keyed set of strings) | *not set* | Keyed set of strings |  | 

##### Position

###### Position Properties

**JSON path:** `animations > bones > position`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| lerp_mode"<"linear", "catmullrom" | *not set* | String |  | 
| post | *not set* | Molang array |  | 
| pre | *not set* | Molang array |  | 

##### Relative To

###### Relative To Properties

**JSON path:** `animations > bones > relative_to`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| rotation"<"entity" | *not set* | String | if set, makes the bone rotation relative to the entity instead of the bone's parent | 

##### Rotation

Same structure as [Position](#position).


##### Scale

Same structure as [Position](#position).


#### Particle Effects

##### Particle Effects Properties

**JSON path:** `animations > particle_effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bind_to_actor | *not set* | Boolean true/false | Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor). | 
| effect | *not set* | String | The name of a particle effect that should be played | 
| locator | *not set* | String | The name of a locator on the actor where the effect should be located | 
| pre_effect_script | *not set* | Molang | A Molang script that will be run when the particle emitter is initialized | 

#### Sound Effects

##### Sound Effects Properties

**JSON path:** `animations > sound_effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effect | *not set* | String | Valid sound effect names should be listed in the entity's resource_definition json file. | 
| locator | *not set* | String | The name of a locator on the actor where the sound should originate from | 