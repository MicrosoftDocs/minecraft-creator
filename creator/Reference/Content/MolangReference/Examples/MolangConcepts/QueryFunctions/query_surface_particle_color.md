---
author: mammerla
ms.author: mikeam
title: "Molang Documentation - minecraft:query_surface_particle_color"
description: "Describes the minecraft:query_surface_particle_color molang"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Molang Documentation - minecraft:query_surface_particle_color

Returns the particle color for the block located in the surface below the actor (scanned up to 10 blocks down). The struct contains '.r' '.g' '.b' and '.a' members, each 0.0 to 1.0. If no actor is specified or if no surface is found, each member value is set to 0.0. Available on the Client (Resource Packs) only.
