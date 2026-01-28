---
author: mammerla
ms.author: mikeam
title: "Spawn Rules Documentation - Spawn Rules"
description: "A reference document describing all current Spawn Rules"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Spawn Rules Documentation

| Spawn Rules | Description |
|:-----|:----------|
| [Spawn BiomeConditions](SpawnRulesComponents/spawn_biomeconditions.md)| Defines the conditions under which an entity can spawn, including biome filters, brightness, height, and herd settings. |
| [Spawn BrightnessFilter](SpawnRulesComponents/spawn_brightnessfilter.md)| Restricts mob spawning based on light level at the spawn location. |
| [Spawn DelayFilter](SpawnRulesComponents/spawn_delayfilter.md)| Delays entity spawning by a configurable amount of time after spawn conditions are met. |
| [Spawn DensityLimit](SpawnRulesComponents/spawn_densitylimit.md)| Limits how many of this entity type can exist in an area, with separate caps for surface and underground spawning. |
| [Spawn Description](SpawnRulesComponents/spawn_description.md)| The description block that identifies which entity these spawn rules apply to, via the entity identifier (e.g., 'minecraft:zombie'). |
| [Spawn DifficultyFilter](SpawnRulesComponents/spawn_difficultyfilter.md)| Restricts mob spawning to specific difficulty levels (Peaceful, Easy, Normal, Hard). |
| [Spawn DistanceFilter](SpawnRulesComponents/spawn_distancefilter.md)| Controls spawning based on distance from the nearest player. |
| [Spawn HeightFilter](SpawnRulesComponents/spawn_heightfilter.md)| Restricts entity spawning to specific Y-coordinate ranges. |
| [Spawn Herd](SpawnRulesComponents/spawn_herd.md)| Configures group spawning behavior, including minimum and maximum herd size. |
| [Spawn MobEventFilter](SpawnRulesComponents/spawn_mobeventfilter.md)| Controls spawning based on whether a specific mob event is active. |
| [Spawn PermuteType](SpawnRulesComponents/spawn_permutetype.md)| Weighted spawn permutation that selects which entity variant to spawn. |
| [Spawn PlayerInVillageFilter](SpawnRulesComponents/spawn_playerinvillagefilter.md)| Restricts spawning based on whether a player is within village boundaries. |
| [Spawn Rules](SpawnRulesComponents/spawn_rules.md)| Defines the complete spawn rules for an entity type, including population control group, spawn conditions (biome, light, difficulty, etc.), and herd configuration. |
| [spawn_rules_document](SpawnRulesComponents/spawn_rules_document.md)| A spawn rules definition document for Minecraft Bedrock Edition. |
| [spawn_rules_header](SpawnRulesComponents/spawn_rules_header.md)| Defines the header fields for a spawn_rules document. |
| [Spawn Weight](SpawnRulesComponents/spawn_weight.md)| Defines the relative probability of this entity spawning compared to other entities in the same biome and spawn pool. |
| [Spawn WorldAgeFilter](SpawnRulesComponents/spawn_worldagefilter.md)| Restricts spawning based on how long the world has existed (measured in ticks). |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Spawn Rules | Description |
|:-----|:----------|
| [spawn_spawnaboveblockfilter](SpawnRulesComponents/spawn_spawnaboveblockfilter.md)| Filters spawning based on blocks above the spawn location. |