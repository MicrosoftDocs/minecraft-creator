---
author: JDHeaden
ms.author: v-jillheaden
title: Molang Documentation - Experimental Query Functions
ms.prod: gaming
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
| query.biome_has_any_tag| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if any of them exist in the biome, else it returns 0. For example: `query.biome_has_any_tag('is_cold', 'has_trees')`. |
| query.block_has_all_tags| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| query.block_has_any_tag| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| query.block_neighbor_has_all_tags| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| query.block_neighbor_has_any_tag| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| query.bone_orientation_matrix| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes the name of the bone as an argument. Returns the bone orientation (as a matrix) of the desired bone provided it exists in the queryable geometry of the mob, else this returns the identity matrix and throws a content error. |
| query.bone_orientation_trs| (EXPERIMENTAL. Enable **Molang Features** to use.) `trs` stands for Translate/Rotate/Scale. Takes the name of the bone as an argument.  Returns the bone orientation matrix decomposed into the component translation/rotation/scale parts of the desired bone provided it exists in the queryable geometry of the mob, else this returns the identity matrix and throws a content error.  The returned value is returned as a variable of type 'struct' with members '.t', '.r', and '.s', each with members '.x', '.y', and '.z', and can be accessed like this: `v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x;`. |
| query.client_input_type| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns either 'mouse', 'touch', 'gamepad', or 'motion_controller' depending on the type of input used by the current client. |
| query.cooldown_time| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the total cooldown time in seconds for the item held or worn by the specified equipment slot name (and optional second numerical slot id), otherwise returns 0. Uses the same name and ID that the replaceitem command takes when querying entities. |
| query.cooldown_time_remaining| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the cooldown time remaining in seconds for specified cooldown type or the item held or worn by the specified equipment slot name (and optional second numerical slot id), otherwise returns 0. Uses the same name and ID that the replaceitem command takes when querying entities. Returns highest cooldown if no parameters are supplied. |
| query.get_nearby_entities| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (For example: 'minecraft:pig'). |
| query.get_nearby_entities_except_self| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (For example: 'minecraft:pig'). |
| query.get_ride| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the entity this entity is riding if it is riding something, else it returns 0. |
| query.get_riders| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the array of entities that are riding this entity. |
| query.has_actor_property| (EXPERIMENTAL. Enable **Holiday Creator Features** AND **Upcoming Creator Features** to use.) Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.has_player_rider| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns 1 if the entity has a player riding it, else it returns 0. |
| query.has_property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.is_attached| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns 1.0 if the actor is attached to another actor (such as being held or worn), else it will return 0.0. |
| query.is_cooldown_type| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns 1.0 if the specified held or worn item has the specified cooldown type name, otherwise returns 0.0. First argument is the cooldown name to check for, second argument is the equipment slot name, and optional third argument is the numerical slot id. For second and third arguments, uses the same name and ID that the replaceitem command takes when querying entities. |
| query.is_spectator| (EXPERIMENTAL. Enable 'Spectator Mode' to use.) Returns 1.0 if the entity is spectator, else it returns 0.0. |
| query.property| (EXPERIMENTAL. Enable 'Holiday Creator Features' AND 'Upcoming Creator Features' to use.) Takes one argument: the name of the property on the entity. Returns the value of that property if it exists, else 0.0 if not. |
| query.relative_block_has_all_tags| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| query.relative_block_has_any_tag| (EXPERIMENTAL. Enable **Molang Features** to use.) Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| query.scoreboard| (EXPERIMENTAL. Enable **Molang Features** to use.) DEPRECATED The incoming Actor Property feature will replace the need for querying hidden scoreboard data. Current client-side scoreboard code is only meant for supporting the standard UI elements.) Takes one argument - the name of the scoreboard entry for this entity. Returns the specified scoreboard value for this entity. |
| query.self| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the current entity. |
| query.target| (EXPERIMENTAL. Enable **Molang Features** to use.) Returns the target of the current entity if one exists. |
