---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:particle_event_random_node"
description: "Describes the minecraft:particle_event_random_node particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:particle_event_random_node

Triggers one of several possible effects randomly when a particle event fires, with weighted probability. Assign weights to different event outcomes for varied responses—like impacts sometimes spawning sparks, sometimes dust, with configurable chances. Adds natural variation to effects without needing complex Molang logic.


## Client Particles Particle Event Random Node Properties

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

## Client Particles Particle Event Node

## Client Particles Particle Sound Effect Event
Plays a sound effect when triggered by particle events like spawning, collision, or expiration. Reference sounds defined in sound_definitions.json using their identifier. Synchronizes audio with visual particle moments—sparks crackling, explosions booming, or magical effects chiming for immersive multi-sensory feedback.


#### Client Particles Particle Sound Effect Event Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| event_name | *not set* | String |  |  | 