---
author: mammerla
ms.author: mikeam
title: "Particles Documentation - minecraft:emitter_lifetime_events_proxy"
description: "Describes the minecraft:emitter_lifetime_events_proxy particle component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Particles Documentation - minecraft:emitter_lifetime_events_proxy

Controls emitter lifetime events like creation and expiration.


## Client Particles Emitter Lifetime Events Proxy Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| creation_event | [] | Array of strings |  | 
| creation_event (as String) | *not set* | String |  | 
| expiration_event | [] | Array of strings |  | 
| expiration_event (as String) | *not set* | String |  | 
| looping_travel_distance_events | [] | Array of [Looping Travel Distance Events](#client-particles-emitter-lifetime-events-travel-distance-events) items |  | 
| timeline | {} | Array of strings |  | 
| timeline (as String) | *not set* | String |  | 
| travel_distance_events | {} | Array of strings |  | 
| travel_distance_events (as String) | *not set* | String |  | 

### Client Particles Emitter Lifetime Events Travel Distance Events
Triggers particle events when the emitter has traveled a specified distance. Useful for trail effects that change behavior—such as a projectile leaving a smoke trail that intensifies as it travels, or a mob's footsteps spawning dust particles at regular intervals as it walks.


#### Client Particles Emitter Lifetime Events Travel Distance Events Properties

**JSON path:** `looping_travel_distance_events`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| distance | *not set* | Decimal number |  | 
| effects | *not set* | Array of strings |  | 
| effects (as String) | *not set* | String |  | 