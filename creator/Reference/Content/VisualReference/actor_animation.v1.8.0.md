---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:actor_animation.v1.8.0"
description: "Describes the minecraft:actor_animation.v1.8.0 visual element"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:actor_animation.v1.8.0


## Actor Animation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| animations | *not set* | Key/item pairs of [Animations](#animations-item-type) items |  |  | 
| format_version | *not set* | Version |  |  | 

## Animations item type

#### Animations Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| anim_time_update | *not set* | Molang | how does time pass when playing the animation. Defaults to "query.anim_time + query.delta_time" which means advance in seconds. |  | 
| blend_weight | *not set* | Molang |  |  | 
| bones | *not set* | Key/item pairs of [Bones](#bones-item-type) items |  |  | 
| loop | *not set* | Boolean true/false | should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame" |  | 
| loop_delay | *not set* | Molang | How long to wait in seconds before looping this animation. Note that this expression is evaluated after each loop and on looping animation only. |  | 
| loop"<"hold_on_last_frame" | *not set* | String | should this animation stop, loop, or stay on the last frame when finished (true, false, "hold_on_last_frame" |  | 
| override_previous_animation | *not set* | Boolean true/false | reset bones in this animation to the default pose before applying this animation |  | 
| particle_effects | *not set* | Key/item pairs of [Particle Effects](#particle-effects-item-type) items |  |  | 
| particle_effects (Alternate 1) | *not set* | Array of [Particle Effects (Alternate 1)](#particle-effects-(alternate-1)-item-type) items |  |  | 
| sound_effects | *not set* | Key/item pairs of [Sound Effects](#sound-effects-item-type) items | sound effects to trigger as this animation plays, keyed by time |  | 
| sound_effects (Alternate 1) | *not set* | Array of [Sound Effects (Alternate 1)](#sound-effects-(alternate-1)-item-type) items |  |  | 
| start_delay | *not set* | Molang | How long to wait in seconds before playing this animation. Note that this expression is evaluated once before playing, and only re-evaluated if asked to play from the beginning again. A looping animation should use 'loop_delay' if it wants a delay between loops. |  | 
| timeline | *not set* | Named set of objects or Keyed set of strings or String |  |  | 
| timeline (Alternate 1) | *not set* | Keyed set of strings or String |  |  | 

## Bones item type

#### Bones Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| position | *not set* | Key/item pairs of [Position](#position-item-type) items |  |  | 
| position (Alternate 1) | *not set* | Molang array |  |  | 
| position (Alternate 2) | *not set* | Molang |  |  | 
| position (Alternate 3) | *not set* | Keyed set of strings |  |  | 
| relative_to | *not set* | [Relative To](#relative-to-item-type) item |  |  | 
| rotation | *not set* | Key/item pairs of [Rotation](#rotation-item-type) items |  |  | 
| rotation (Alternate 1) | *not set* | Array of [Rotation (Alternate 1)](#rotation-(alternate-1)-item-type) items |  |  | 
| rotation (Alternate 2) | *not set* | Molang array |  |  | 
| rotation (Alternate 3) | *not set* | Molang |  |  | 
| rotation (Alternate 4) | *not set* | Keyed set of strings |  |  | 
| scale | *not set* | Key/item pairs of [Scale](#scale-item-type) items |  |  | 
| scale (Alternate 1) | *not set* | Molang array |  |  | 
| scale (Alternate 2) | *not set* | Molang |  |  | 
| scale (Alternate 3) | *not set* | Keyed set of strings |  |  | 

## Position item type

#### Position Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| lerp_mode"<"linear", "catmullrom" | *not set* | String |  |  | 
| post | *not set* | Molang array |  |  | 
| pre | *not set* | Molang array |  |  | 

## Relative To item type

#### Relative To Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| rotation"<"entity" | *not set* | String | if set, makes the bone rotation relative to the entity instead of the bone's parent |  | 

## Rotation item type

#### Rotation Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| lerp_mode"<"linear", "catmullrom" | *not set* | String |  |  | 
| post | *not set* | Molang array |  |  | 
| pre | *not set* | Molang array |  |  | 

## Rotation (Alternate 1) item type

#### Rotation (Alternate 1) Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [xyz] | *not set* | Molang |  |  | 

## Scale item type

#### Scale Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| lerp_mode"<"linear", "catmullrom" | *not set* | String |  |  | 
| post | *not set* | Molang array |  |  | 
| pre | *not set* | Molang array |  |  | 

## Particle Effects item type

#### Particle Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bind_to_actor | *not set* | Boolean true/false | Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor). |  | 
| effect | *not set* | String | The name of a particle effect that should be played |  | 
| locator | *not set* | String | The name of a locator on the actor where the effect should be located |  | 
| pre_effect_script | *not set* | Molang | A Molang script that will be run when the particle emitter is initialized |  | 

## Particle Effects (Alternate 1) item type

#### Particle Effects (Alternate 1) Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bind_to_actor | *not set* | Boolean true/false | Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor). |  | 
| effect | *not set* | String | The name of a particle effect that should be played |  | 
| locator | *not set* | String | The name of a locator on the actor where the effect should be located |  | 
| pre_effect_script | *not set* | Molang | A Molang script that will be run when the particle emitter is initialized |  | 

## Sound Effects item type

#### Sound Effects Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| effect | *not set* | String | Valid sound effect names should be listed in the entity's resource_definition json file. |  | 
| locator | *not set* | String | The name of a locator on the actor where the sound should originate from |  | 

## Sound Effects (Alternate 1) item type

#### Sound Effects (Alternate 1) Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| effect | *not set* | String | Valid sound effect names should be listed in the entity's resource_definition json file. |  | 
| locator | *not set* | String | The name of a locator on the actor where the sound should originate from |  | 