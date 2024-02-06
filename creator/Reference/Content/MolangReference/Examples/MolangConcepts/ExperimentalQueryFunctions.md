---
author: iconicNurdle
ms.author: mikeam
title: Molang Documentation - Experimental Query Functions
description: "A reference document detailing experimental Molang query functions"
ms.service: minecraft-bedrock-edition
monikerRange: "=minecraft-bedrock-experimental"
---

# Molang Documentation - Experimental Query Functions

Welcome to the Experimental Entity Query functions.

> [!CAUTION]
> Because these Entity Query functions are marked as Experimental, you must make sure the toggle **Experimental Molang Features** is active in order to use them. To learn how, visit [Experimental Features in Minecraft: Bedrock Edition](../../../../../Documents/ExperimentalFeaturesToggle.md)
>
> Click here: [Entity Query Functions](QueryFunctions.md) to view what is currently available.

| Name| Description |
|:-----------|:-----------|
| query.biome_has_all_tags| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if all of them exist in the biome, else it returns 0.  For example: `query.biome_has_all_tags('is_cold', 'has_trees')`. |
| query.client_input_type| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns either 'mouse', 'touch', 'gamepad', or 'motion_controller' depending on the type of input used by the current client. |
| query.get_nearby_entities| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (For example: 'minecraft:pig'). |
| query.get_nearby_entities_except_self| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (For example: 'minecraft:pig'). |
| query.get_ride| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the entity this entity is riding if it is riding something, else it returns 0. |
| query.get_riders| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the array of entities that are riding this entity. |
| query.has_actor_property| (EXPERIMENTAL. Enable **Holiday Creator Features** AND **Upcoming Creator Features** to use.) Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.has_player_rider| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns 1 if the entity has a player riding it, else it returns 0. |
| query.has_property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.is_attached| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns 1.0 if the actor is attached to another actor (such as being held or worn), else it will return 0.0. |
| query.is_feeling_happy| (EXPERIMENTAL. Enable **Sniffer** to use.)Returns 1.0 if the entity is feeling happy, else it returns 0.0. |
| query.is_rising| (EXPERIMENTAL. Enable **Sniffer** to use.)Returns 1.0 if the entity is rising, else it returns 0.0. |
| query.is_scenting| (EXPERIMENTAL. Enable **Sniffer** to use.)Returns 1.0 if the entity is scenting, else it returns 0.0. |
| query.is_searching| (EXPERIMENTAL. Enable **Sniffer** to use.)Returns 1.0 if the entity is searching, else it returns 0.0. |
| query.is_spectator| (EXPERIMENTAL. Enable 'Spectator Mode' to use.) Returns 1.0 if the entity is spectator, else it returns 0.0. |
| query.property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the entity. Returns the value of that property if it exists, else 0.0 if not. |
| query.scoreboard| (EXPERIMENTAL. Enable **Molang Features** to use.) DEPRECATED The incoming Actor Property feature will replace the need for querying hidden scoreboard data. Current client-side scoreboard code is only meant for supporting the standard UI elements.) Takes one argument - the name of the scoreboard entry for this entity. Returns the specified scoreboard value for this entity. |
| query.self| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the current entity. |
| query.target| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the target of the current entity if one exists. |
