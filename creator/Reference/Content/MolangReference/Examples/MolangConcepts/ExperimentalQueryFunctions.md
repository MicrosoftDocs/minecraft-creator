---
author: v-josjones
ms.author: v-josjones
title: Experimental Query Functions
ms.prod: gaming
---

# Experimental Query Functions

Listed below are the available Experimental Entity Query Functions.

> [!CAUTION]
> These Entity Query functions are marked as Experimental. Click on the hyperlink to view the current [Entity Query Functions](QueryFunctions.md) that are available.

| Name| Description |
|:-----------|:-----------|
| query.actor_property| Takes one argument: the name of the property on the entity. Returns the value of that property if it exists, else 0.0 if not. |
| query.biome_has_all_tags| Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if all of them exist in the biome, else it returns 0.  Eg: query.biome_has_all_tags('is_cold', 'has_trees') |
| query.biome_has_any_tag| Takes either no position (assumes the current entity position) or three parameters: x, y, z (representing the world-origin-relative position), followed by whatever tags you want to query for, and returns 1 if any of them exist in the biome, else it returns 0.  Eg: query.biome_has_any_tag('is_cold', 'has_trees') |
| query.block_has_all_tags| Takes an world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided |
| query.block_has_any_tag| Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided |
| query.bone_orientation_matrix| Takes the name of the bone as an argument.  Returns the bone orientation (as a matrix) of the desired bone provided it exists in the queryable geometry of the mob, else this returns 0.0 (as a float value) and throws a content error. |
| query.bone_orientation_trs| TRS stands for Translate/Rotate/Scale.  Takes the name of the bone as an argument.  Returns the bone orientation matrix decomposed into the component translation/rotation/scale parts of the desired bone provided it exists in the queryable geometry of the mob, else this returns 0.0 (as a float value) and throws a content error.  The returned value is returned as a variable of type 'struct' with members '.t', '.r', and '.s', each with members '.x', '.y', and '.z', and can be accessed as per the following example: v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x; |
| query.client_input_type| Returns either 'mouse', 'touch', 'gamepad', or 'motion_controller' depending on the type of input used by the current client. |
| query.get_nearby_entities| Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (eg: 'minecraft:pig'). |
| query.get_nearby_entities_except_self| Returns the list of entities within the specified distance, taking an optional second argument as a filter for which mob types to accept (eg: 'minecraft:pig'). |
| query.get_ride| Returns the entity this entity is riding if it is riding something, else it returns 0 |
| query.get_riders| Returns the array of entities that are riding this entity |
| query.has_actor_property| Takes one argument: the name of the property on the Actor. Returns 1.0 if a property with the given name exists, 0 otherwise.  |
| query.has_player_rider| Returns 1 if the entity has a player riding it, else it returns 0 |
| query.is_attached| Returns 1.0 if the actor is attached to another actor (such as being held or worn), else it will return 0.0 |
| query.relative_block_has_all_tags| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided |
| query.relative_block_has_any_tag| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided |
| query.scoreboard| Takes one argument - the name of the scoreboard entry for this entity.  Returns the specified scoreboard value for this entity. |
| query.self| Returns the current entity |
| query.target| Returns the target of the current entity if one exists |
