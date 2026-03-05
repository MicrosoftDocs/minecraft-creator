---
author: mammerla
ms.author: mikeam
title: "Visuals Documentation - minecraft:actor_animation_controller.v1.10.0"
description: "Describes the minecraft:actor_animation_controller.v1.10.0 visual element"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Visuals Documentation - minecraft:actor_animation_controller.v1.10.0

Animation controllers are state machines that control which animations play and when. They support states with animations, transitions based on Molang conditions, particle effects, and sound effects. Each state can blend between animations and trigger events on entry and exit.


## Animation Controller (v1.10.0) Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| animation_controllers | *not set* | Key/item pairs of [Animation Controllers](#animation-controllers) items |  | 
| format_version | *not set* | Version |  | 

### Animation Controllers

#### Animation Controllers Properties

**JSON path:** `animation_controllers`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| initial_state | *not set* | String |  | 
| states | *not set* | Key/item pairs of [States](#states) items |  | 

#### States

##### States Properties

**JSON path:** `animation_controllers > states`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| animations | *not set* | Array of objects |  | 
| animations (as Array of strings) | *not set* | Array of strings |  | 
| animations (as Molang) | *not set* | Molang |  | 
| blend_transition | *not set* | Object | Specifies the cross-fade time in seconds when transitioning to another state | 
| blend_via_shortest_path | *not set* | Boolean true/false | When blending a transition to another state, animate each euler axis through the shortest rotation, instead of by value | 
| on_entry | *not set* | Array of strings |  | 
| on_exit | *not set* | Array of strings |  | 
| particle_effects | *not set* | Array of [Particle Effects](#particle-effects) items |  | 
| particle_effects (as Array of strings) | *not set* | Array of strings |  | 
| sound_effects | *not set* | Array of [Sound Effects](#sound-effects) items |  | 
| sound_effects (as Array of strings) | *not set* | Array of strings | Collection of sounds to trigger on entry to this animation state. | 
| transitions | *not set* | Array of objects |  | 
| transitions (as Array of strings) | *not set* | Array of strings |  | 
| variables | *not set* | Key/item pairs of [Variables](#variables) items |  | 

##### Particle Effects

###### Particle Effects Properties

**JSON path:** `animation_controllers > states > particle_effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| bind_to_actor | *not set* | Boolean true/false | Set to false to have the effect spawned in the world without being bound to an actor (by default an effect is bound to the actor). | 
| effect | *not set* | String | The name of a particle effect that should be played | 
| locator | *not set* | String | The name of a locator on the actor where the effect should be located | 
| pre_effect_script | *not set* | Molang | A Molang script that will be run when the particle emitter is initialized | 

##### Sound Effects

###### Sound Effects Properties

**JSON path:** `animation_controllers > states > sound_effects`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| effect | *not set* | String | Valid sound effect names should be listed in the entity's resource_definition json file. | 
| locator | *not set* | String | The name of a locator on the actor where the sound should originate from | 

##### Variables

###### Variables Properties

**JSON path:** `animation_controllers > states > variables`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| input | *not set* | Molang |  | 
| remap_curve | *not set* | Object |  | 