---
author: JimSeaman42
ms.author: mikeam
title: Molang Documentation - Query Functions
description: "A reference document detailing the query functions available via Molang"
ms.service: minecraft-bedrock-edition
---

# Molang Documentation - Query Functions

Query Functions are operators that access a wide variety of information. They can return simple true/false values (1.0 or 0.0) or more complex data. See the list of functions below for per-query documentation. For query functions that do not take parameters, use: `query.function_name`. For query functions that do take parameters, use parentheses with commas separating the arguments like: `query.function_name(1, 2, 'three')`.

> [!IMPORTANT]
> The list below includes only entity queries that are live. See [Experimental Entity Queries](ExperimentalQueryFunctions.md) for experimental Molang query functions.

## Example

```json
"position": [ 0.0, "query.is_baby ? -8.0 : 0.0", "query.is_baby ? 4.0 : 0.0" ]
```

## List of Entity Queries

Listed below are the currently available Molang query functions in the latest retail build at the time of this writing. Not all query functions are available in respective Molang contexts (e.g., client-side animations vs. server-side animations); where possible, client-only Molang query functions are noted.

| Name | Description |
|:---------|:---------|
| query.above_top_solid| Returns the height of the block immediately above the highest solid block at the input (x,z) position. Example: `query.above_top_solid(variable.x, variable.z)` |
| query.actor_count| Returns the number of entities rendered in the last frame. |
| query.all| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if all of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. Example: `query.all(1, variable.x, variable.y)` |
| query.all_animations_finished| Only valid in an animation controller. Returns 1.0 if all animations in the current animation controller state have played through at least once, else it returns 0.0. |
| query.all_tags| Returns 1.0 if the item or block has all of the tags specified, else it return 0.0. |
| query.anger_level| If available, returns the anger level of the entity as an integer value from 0 to 1 less than the `max_anger` defined on the entity, otherwise returns 0. Only returns a non-zero value in behavior packs. |
| query.anim_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| query.any| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if any of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. |
| query.any_animation_finished| Only valid in an animation controller. Returns 1.0 if any animation in the current animation controller state has played through at least once, else it returns 0.0. |
| query.any_tag| Returns 1.0 if the item or block has any of the tags specified, else it returns 0.0. |
| query.approx_eq| Returns 1.0 if all of the arguments are within the smallest unit of measurement possible for the computer running this query of each other, else it returns 0.0. |
| query.armor_color_slot| Takes the armor slot index as a parameter and returns the color value (0=Red, 1=Green, 2=Blue, 3=Alpha) of the armor in the requested slot. Valid values for the armor slot index are: 0=head, 1=chest, 2=legs, 3=feet, and 4=body.|
| query.armor_damage_slot| Takes the armor slot index as a parameter and returns the damage value of the armor in the requested slot. Valid values for the armor slot index are: 0=head, 1=chest, 2=legs, 3=feet, and 4=body.|
| query.armor_material_slot| Takes the armor slot index as a parameter and returns the armor material type (0=Default, 1=Enchanted, 2=Leather, 3=Enchanted Leather) in the requested armor slot. |
| query.armor_texture_slot| Takes the armor slot index as a parameter, and returns the texture type of the requested slot. The valid values for the armor slot index are: 0=head, 1=chest, 2=legs, 3=feet, and 4=body. |
| query.average_frame_time| Returns the time in *seconds* of the average frame time over the last `n` frames. If an argument is passed, it is assumed to be the number of frames in the past that you wish to query. `query.average_frame_time` (or the equivalent `query.average_frame_time(0)`) will return the frame time of the frame before the current one. `query.average_frame_time(1)` will return the average frame time of the previous two frames. Currently we store the history of the last 30 frames, although note that this may change in the future. Asking for more frames will result in only sampling the number of frames stored. |
| query.block_face| Returns the block face for this (only valid for certain triggers such as placing blocks, or interacting with block) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.block_has_all_tags| Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| query.block_has_any_tags| Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| query.block_neighbor_has_all_tags| Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| query.block_neighbor_has_any_tags| Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| query.block_property| (No longer available in pack min_engine_version 1.20.40) Returns the value of the associated block's state. To be replaced with block_state. |
| query.block_state| Returns the value of the associated block's Block State. |
| query.blocking| Returns 1.0 if the entity is blocking damage, else it returns 0.0. Applies to a player blocking with a shield. |
| query.body_x_rotation| Returns the body pitch rotation if called on an entity, else it returns 0.0. |
| query.body_y_rotation| Returns the body yaw rotation if called on an entity, else it returns 0.0. |
| query.bone_aabb| Returns the axis aligned bounding box of a bone as a struct with members `.min`, `.max`, along with `.x`, `.y`, and `.z` values for each. |
| query.bone_orientation_matrix| Takes the name of the bone as an argument. Returns the bone orientation (as a matrix) of the desired bone provided it exists in the queryable geometry of the entity, else this returns the identity matrix and throws a content error. |
| query.bone_orientation_trs| TRS stands for 'Translate/Rotate/Scale.' Takes the name of the bone as an argument. Returns the bone orientation matrix decomposed into the component translation/rotation/scale parts of the desired bone provided it exists in the queryable geometry of the entity, else this returns the identity matrix and throws a content error. The returned value is returned as a variable of type `struct` with members `.t`, `.r`, and `.s`, each with members `.x`, `.y`, and `.z`, and can be accessed as per this example: v.my_variable = q.bone_orientation_trs('rightarm'); return v.my_variable.r.x; |
| query.bone_origin| Returns the initial (from the .geo) pivot of a bone as a struct with members `.x`, `.y`, and `.z`. |
| query.bone_rotation| Returns the initial (from the .geo) rotation of a bone as a struct with members `.x`, `.y`, and `.z` in degrees. |
| query.camera_distance_range_lerp| Takes two distances (any order) and return a number from 0 to 1 based on the camera distance between the two ranges clamped to that range. For example, `query.camera_distance_range_lerp(10, 20)` will return 0 for any distance less than or equal to 10, 0.2 for a distance of 12, 0.5 for 15, and 1 for 20 or greater. If you pass in (20, 10), a distance of 20 will return 0.0. |
| query.camera_rotation| Returns the rotation of the camera. Requires one argument representing the rotation axis you would like: (0 for x, 1 for y). |
| query.can_climb| Returns 1.0 if the entity has `can_climb` component, else it returns 0.0. Is determined by intrinsic "can climb" property of a mob.|
| query.can_damage_nearby_mobs| Returns 1.0 if the entity can damage nearby mobs, else it returns 0.0. Applies to riptide-enchanted trident. |
| query.can_fly| Returns 1.0 if the entity has `can_fly` component, else it returns 0.0. Applies to allay, bat, bee, ghast, parrot, wither. |
| query.can_power_jump| Returns 1.0 if the entity has `can_power_jump` component, else it returns 0.0. |
| query.can_swim| Returns 1.0 if the entity has `can_swim` component, else it returns 0.0. |
| query.can_walk| Returns 1.0 if the entity has `can_walk` component, else it returns 0.0. |
| query.cape_flap_amount| Returns value between 0.0 and 1.0 with 0.0 meaning "cape is fully down" and 1.0 means "cape is fully up." |
| query.cardinal_block_face_placed_on| DEPRECATED (please use query.block_face instead) Returns the block face for this (only valid for on_placed_by_player trigger) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing_2d| Returns the current facing of the player ignoring up/down part of the direction (North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_player_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.combine_entities| Combines any valid entity references from all arguments into a single array. Note that order is not preserved, and duplicates and invalid values are removed. |
| query.cooldown_time| Returns the total cooldown time in seconds for the item held or worn by the specified equipment slot name (and if required second numerical slot id), otherwise returns 0. Uses the same name and id that the replaceitem command takes when querying entities. |
| query.cooldown_time_remaining| Returns the cooldown time remaining in seconds for specified cooldown type or the item held or worn by the specified equipment slot name (and if required second numerical slot id), otherwise returns 0. Uses the same name and id that the replaceitem command takes when querying entities. Returns highest cooldown if no parameters are supplied. |
| query.count| Counts the number of things passed to it (arrays are counted as the number of elements they contain; non-arrays count as 1). |
| query.current_squish_value| Returns the squish value for the current entity, or 0.0 if this doesn't make sense. Applies to slimes and magma cubes. |
| query.day| Returns the current day of existence of the current world. When the world is first created, that is day `1`. |
| query.death_ticks| Returns the elapsed ticks since the mob started dying. |
| query.debug_output| Debug log a value to the output debug window for builds that have one. |
| query.delta_time| Returns the time in seconds since the previous frame. |
| query.distance_from_camera| Returns the distance of the root of this entity or particle emitter from the camera. |
| query.effect_emitter_count| Returns the total number of active emitters of the callee's particle effect type. |
| query.effect_particle_count| Returns the total number of active particles of the callee's particle effect type. |
| query.equipment_count| Returns the number of equipped pieces of armor for an entity from 0 to 5, not counting items held in hands. (To query for hand slots, use `query.is_item_equipped` or `query.is_item_name_any`).|
| query.equipped_item_all_tags| Takes a slot name followed by any tags you want to check for in the form of `tag_name` and returns 1 if all of the tags are on that equipped item, 0 otherwise. `query.equipped_item_any_tag('slot.weapon.mainhand', 'minecraft:is_shovel')` |
| query.equipped_item_any_tag| Takes a slot name followed by any tag you want to check for in the form of `tag_name` and returns 0 if none of the tags are on that equipped item or 1 if at least 1 tag exists. |
| query.equipped_item_is_attachable| Takes the desired hand slot as a parameter (0 or `main_hand` for main hand, 1 or `off_hand` for off hand), and returns whether the item is an attachable item or not. Applies to armor. |
| query.eye_target_x_rotation| Returns the X eye rotation of the entity, else it returns 0.0. Applies to guardian. |
| query.eye_target_y_rotation| Returns the Y eye rotation of the entity, else it returns 0.0. Applies to guardian. |

| Name | Description |
|:---------|:---------|
| query.facing_target_to_range_attack| Returns 1.0 if the entity is attacking from range (minecraft:behavior.ranged_attack), else it returns 0.0. |
| query.frame_alpha| Returns the ratio (from 0 to 1) of how much between AI ticks this frame of animation is being rendered. |
| query.get_actor_info_id| Returns the integer ID of an entity corresponding to its string name. Relates to item data fields in recipes, Applies to game versions 1.19.80 and higher. |
| query.get_animation_frame| Returns the current texture of an item whose appearance can change (such as a drawn bow). |
| query.get_default_bone_pivot| Gets the specified axis of the specified bone orientation pivot. |
| query.get_equipped_item_name| DEPRECATED (Use `query.is_item_name_any` instead if possible so names can be changed later without breaking content.) Takes one optional hand slot as a parameter (0 or `main_hand` for main hand, 1 or `off_hand` for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns empty. |
| query.get_locator_offset| Gets specified axis of the specified locator offset. |
| query.get_name| DEPRECATED (Use query.is_name_any instead if possible so names can be changed later without breaking content.) Get the name of the mob if there is one, otherwise return ``. Use only in "animations":. |
| query.get_root_locator_offset| Gets specified axis of the specified locator offset of the root model. |
| query.ground_speed| Returns the current ground speed of the entity in meters/second. |
| query.had_component_group| Usable only in behavior packs when determining the default value for an entity's Property. Requires one string argument. If the entity is being loaded from data that was last saved with a component_group with the specified name, returns 1.0, otherwise returns 0.0. The purpose of this query is to allow entity definitions to change and still be able to load the correct state of entities. |
| query.has_any_family| Returns 1 if the entity has any of the specified families, else 0. |
| query.has_armor_slot| Takes the armor slot index (0=helmet, 1=chestplate, 2=leggings, 3=boots) as a parameter and returns 1.0 if the entity has armor in the requested slot, else it returns 0.0. |
| query.has_biome_tag| Returns whether or not a Block Placement Target has a specific biome tag. |
| query.has_block_property| (No longer available in pack min_engine_version 1.20.40) Returns 1.0 if the associated block has the given block state or 0.0 if not. |
| query.has_block_state| Returns 1.0 if the associated block has the given block state or 0.0 if not. |
| query.has_cape| Returns 1.0 if the player has a cape, else it returns 0.0. |
| query.has_collision| Returns 1.0 if the entity has collisions enabled, else it returns 0.0. |
| query.has_gravity| Returns 1.0 if the entity is affected by gravity, else it returns 0.0. |
| query.has_head_gear| Returns boolean whether an entity has an item in their head armor slot or not, or false if no entity in current context. |
| query.has_owner| Returns 1.0 if the entity has an owner ID, else it returns 0.0. Pertains to wolf. |
| query.has_player_rider| Returns 1 if the entity has a player riding it in any seat, else it returns 0.|
| query.has_property| Takes one argument: the name of the property on the entity. Returns 1.0 if a property with the given name exists, 0 otherwise.|
| query.has_rider| Returns 1.0 if the entity has a rider, else it returns 0.0. |
| query.has_target| Returns 1.0 if the entity has a target for a behavior, else it returns 0.0. |
| query.head_roll_angle| Returns the roll angle of the head of the entity if it makes sense, else it returns 0.0. Applies to how a wolf looks at a player holding food. |
| query.head_x_rotation| Takes one argument as a parameter. Returns the nth head x rotation of the entity if it makes sense, else it returns 0.0. |
| query.head_y_rotation| Takes one argument as a parameter. Returns the nth head y rotation of the entity if it makes sense, else it returns 0.0. Horses, zombie horses, skeleton horses, donkeys and mules require a second parameter that clamps rotation in degrees. |
| query.health| Returns the health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.heartbeat_interval| Returns the heartbeat interval of the entity in seconds. Returns 0 when the entity has no heartbeat. |
| query.heartbeat_phase| Returns the heartbeat phase of the entity. 0.0 if at start of current heartbeat, 1.0 if at the end. Returns 0 on errors or when the entity has no heartbeat. Available on clients (Resource Packs) only. |
| query.heightmap| Takes two arguments: X and Z world values. Returns the world height (Y value) of the terrain at the specified position. |
| query.hurt_direction| Returns the hurt direction for the entity, otherwise returns 0. |
| query.hurt_time| Returns the hurt time for the entity, otherwise returns 0. |
| query.in_range| Requires 3 numerical arguments: some value, a minimum, and a maximum. If the first argument is between the minimum and maximum (inclusive), returns 1.0. Otherwise it returns 0.0. |
| query.invulnerable_ticks| Returns the number of ticks of invulnerability the entity has left if it makes sense, else it returns 0.0. Applies to wither.|

| Name | Description |
|:---------|:---------|
| query.is_admiring| Returns 1.0 if the entity is admiring, else it returns 0.0. Pertains to piglin. |
| query.is_alive| Returns 1.0 if the entity is alive, and 0.0 if it's dead. |
| query.is_angry| Returns 1.0 if the entity is angry, else it returns 0.0. |
| query.is_attached| Returns 1.0 if the entity is attached to another entity (such as being held or worn), else it will return 0.0. Available only with resource packs.|
| query.is_attached_to_entity| Returns 1.0 if the entity is attached to an entity, else it will return 0.0. Pertains to player holding a fireworks rocket. |
| query.is_avoiding_block| Returns 1.0 if the entity is fleeing from a block, else it returns 0.0. |
| query.is_avoiding_mobs| Returns 1.0 if the entity is fleeing from mobs, else it returns 0.0. Pertains to wandering trader. |
| query.is_baby| Returns 1.0 if the entity has `is_baby` component, else it returns 0.0. |
| query.is_breathing| Returns 1.0 if the entity is breathing, else it returns 0.0. |
| query.is_bribed| Returns 1.0 if the bribeable entity has been bribed, else it returns 0.0. Pertains to bribing a dolphin with a fish.|
| query.is_carrying_block| Returns 1.0 if the entity is carrying a block, else it returns 0.0. Pertains to an Enderman carrying a block. |
| query.is_casting| Returns 1.0 if the entity is casting, else it returns 0.0. Pertains to evoker. |
| query.is_celebrating| Returns 1.0 if the entity is celebrating, else it returns 0.0.|
| query.is_celebrating_special| Returns 1.0 if the entity is doing a special celebration, else it returns 0.0. Pertains to a piglin celebrating a special hunt.|
| query.is_charged| Returns 1.0 if the entity has the `is_charged` component, else it returns 0.0. |
| query.is_charging| Returns 1.0 if the entity is charging, else it returns 0.0. Applies to animation controller for player, vex, and drowned. |
| query.is_chested| Returns 1.0 if the entity has has the `is_chested` component, else it returns 0.0.|
| query.is_cooldown_type| Returns 1.0 if the specified held or worn item has the specified cooldown type name, otherwise returns 0.0. First argument is the cooldown name to check for, second argument is the equipment slot name, and if required third argument is the numerical slot id. For second and third arguments, uses the same name and id tha tthe replaceitem command takes when querying entities. |
| query.is_critical| Returns 1.0 if the entity is at a critical level of damage, else it returns 0.0. |
| query.is_croaking| Returns 1.0 if the entity is croaking, else it returns 0.0. |
| query.is_dancing| Returns 1.0 if the entity is dancing, else it returns 0.0. Applies to parrot and allay. |
| query.is_delayed_attacking| Returns 1.0 if the entity is attacking using the delayed attack, else it returns 0.0. Applies to ravager. |
| query.is_digging| Returns 1.0 if the entity is digging, else it returns 0.0. |
| query.is_eating| Returns 1.0 if the entity is eating, else it returns 0.0. Applies to panda.|
| query.is_eating_mob| Returns 1.0 if the entity is eating a mob, else it returns 0.0. |
| query.is_elder| Returns 1.0 if the entity is an elder version of it, else it returns 0.0. Applies to guardian.|
| query.is_emerging| Returns 1.0 if the entity is emerging, else it returns 0.0. |
| query.is_emoting| Returns 1.0 if the entity is emoting, else it returns 0.0. Applies to player. |
| query.is_enchanted| Returns 1.0 if the entity is enchanted, else it returns 0.0. Applies to armor, bow, crossbow, shield.|
| query.is_feeling_happy| (No longer available in pack min_engine_version 1.20.50. Deprecated) Returns 1.0 if behavior.timer_flag_2 is running, else it returns 0.0.|
| query.is_fire_immune| Returns 1.0 if the entity has the `fire_immune` component, else it returns 0.0. |
| query.is_first_person| Returns 1.0 if the entity is being rendered in first person mode, else it returns 0.0. |
| query.is_ghost| Returns 1.0 if an entity is a ghost, else it returns 0.0. Applies to guardian.|
| query.is_gliding| Returns 1.0 if the entity is gliding, else it returns 0.0. Applies to elytra. |
| query.is_grazing| Returns 1.0 if the entity is grazing, or 0.0 if not. Applies to horse and sheep grazing animation.|
| query.is_idling| Returns 1.0 if the entity is idle, else it returns 0.0. |
| query.is_ignited| Returns 1.0 if the entity has the `is_ignited` component, else it returns 0.0. |
| query.is_illager_captain| Returns 1.0 if the entity has the `is_illager_captain` component, else it returns 0.0. |
| query.is_in_contact_with_water| Returns 1.0 if the entity is in contact with any water (water, rain, splash water bottle), else it returns 0.0. |
| query.is_in_lava| Returns 1.0 if the entity is in lava, else it returns 0.0.|
| query.is_in_love| Returns 1.0 if the entity has love hearts animation active, else it returns 0.0. |
| query.is_in_ui| Returns 1.0 if the entity is rendered as part of the UI, else it returns 0.0. |
| query.is_in_water| Returns 1.0 if the entity is in water, else it returns 0.0. |
| query.is_in_water_or_rain| Returns 1.0 if the entity is in water or rain, else it returns 0.0. |
| query.is_interested| Returns 1.0 if the entity is interested, else it returns 0.0. Applies to fox and wolf.|
| query.is_invisible| Returns 1.0 if the entity is invisible (using render controllers), else it returns 0.0. Applies to spider, Enderman, and phantom. |
| query.is_item_equipped| Takes one optional hand slot as a parameter (0 or `main_hand` for main hand, 1 or `off_hand` for off hand), and returns 1.0 if there is an item in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| query.is_item_name_any| Takes an equipment slot name (see the replaceitem command) and an optional slot index value. After that, takes one or more full name (with `namespace:`) strings to check for. Returns 1.0 if an item in the specified slot has any of the specified names, otherwise returns 0.0. An empty string `` can be specified to check for an empty slot. Note that querying slot.enderchest, slot.saddle, slot.armor, or slot.chest will only work in behavior packs. A preferred query to query.get_equipped_item_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_jumping| Returns 1.0 if the entity is jumping, else it returns 0.0. |
| query.is_laying_down| Returns 1.0 if the entity is laying down, else it returns 0.0.  |
| query.is_laying_egg| Returns 1.0 if the entity is laying an egg, else it returns 0.0. |
| query.is_leashed| Returns 1.0 if the entity is attached to another entity with a lead, else it returns 0.0. Pertains to the wandering trader and associated llamas. |
| query.is_levitating| Returns 1.0 if the entity is levitating, else it returns 0.0. Pertains to how fish are animated swimming in water. |
| query.is_lingering| Returns 1.0 if the potion type or effect is lingering, else it returns 0.0. |
| query.is_local_player| Takes no arguments. Returns 1.0 if the entity is the local player for the current game window, else it returns 0.0. In splitscreen returns 0.0 for the other local players for other views. Always returns 0.0 if used in a behavior pack. |
| query.is_moving| Returns 1.0 if the entity is moving, else it returns 0.0. |
| query.is_name_any| Takes one or more arguments. If the entity's name is any of the specified string values, returns 1.0. Otherwise returns 0.0. A preferred query to query.get_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_on_fire| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| query.is_on_ground| Returns 1.0 if the entity is on the ground, else it returns 0.0. |
| query.is_on_screen| Returns 1.0 if this is called on an entity at a time when it is known if it is on screen, else it returns 0.0. |
| query.is_onfire| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| query.is_orphaned| Returns 1.0 if the entity is orphaned, else it returns 0.0. This is part of the "sittable" component. |
| query.is_owner_identifier_any| Takes one or more arguments. Returns whether the root entity identifier is any of the specified strings. A preferred query to query.owner_identifier, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_persona_or_premium_skin| Returns 1.0 if the player has a persona or premium skin, else it returns 0.0. |
| query.is_playing_dead| Returns 1.0 if the entity is playing dead, else it returns 0.0. Applies to axolotl.|
| query.is_powered| Returns 1.0 if the entity is powered, else it returns 0.0. Applies to bee animation. |
| query.is_pregnant| Returns 1.0 if the entity is pregnant, else it returns 0.0. Applies to turtles and frogs.|
| query.is_ram_attacking| Returns 1.0 if the entity is using a ram attack, else it returns 0.0. Pertains to goats. |
| query.is_resting| Returns 1.0 if the entity is resting, else it returns 0.0.Applies to bat. |
| query.is_riding| Returns 1.0 if the entity is riding, else it returns 0.0. |
|query.is_rising| (No longer available in pack min_engine_version 1.20.50. Deprecated.) Returns 1.0 if behavior.timer_flag_2 is running, else it returns 0.0.|
| query.is_roaring| Returns 1.0 if the entity is currently roaring, else it returns 0.0. Applies to ravager and warden.|
| query.is_rolling| Returns 1.0 if the entity is rolling, else it returns 0.0. Pertains to panda.|
| query.is_saddled| Returns 1.0 if the entity has the `is_saddled` component, else it returns 0.0. |
| query.is_scared| Returns 1.0 if the entity is scared, else it returns 0.0. Pertains to a panda being startled by a baby panda sneeze. |
| query.is_scenting| (No longer available in pack min_engine_version 1.20.50.Deprecated.) Returns 1.0 if behavior.timer_flag_1 is running, else it returns 0.0.|
| query.is_searching| Returns 1.0 if the entity is searching, else it returns 0.0. |
| query.is_selected_item| Returns true if the player has selected an item in the inventory, else it returns 0.0. |
| query.is_shaking| Returns 1.0 if the entity is shaking, else it returns 0.0. Pertains to a hoglin, piglin, piglin brute, skeleton, strider, or villager, zombie villager |
| query.is_shaking_wetness| Returns 1.0 if the entity is shaking water off, else it returns 0.0. Pertains to wet wolves. |
| query.is_sheared| Returns 1.0 if the entity has the `is_sheared` component, else it returns 0.0. Applies to sheep and snow golem.|
| query.is_shield_powered| Returns 1.0 if the entity has an active powered shield if it makes sense, else it returns 0.0. Pertains to wither boss armor. |
| query.is_silent| Returns 1.0 if the entity is silent, else it returns 0.0. |
| query.is_sitting| Returns 1.0 if the entity is sitting, else it returns 0.0. Pertains to fox, parrot, wolf. |
| query.is_sleeping| Returns 1.0 if the entity is sleeping, else it returns 0.0. Pertains to fox.|
| query.is_sneaking| Returns 1.0 if the entity is sneaking, else it returns 0.0. Pertains to fox.|
| query.is_sneezing| Returns 1.0 if the entity is sneezing, else it returns 0.0. Applies to baby panda.|
| query.is_sniffing| Returns 1.0 if the entity is sniffing, else it returns 0.0. |
| query.is_sonic_boom| Returns 1.0 if the entity is using sonic boom, else it returns 0.0. |
| query.is_sprinting| Returns 1.0 if the entity is sprinting, else it returns 0.0. Pertains to player, piglin, and rabbit. |
| query.is_stackable| Returns 1.0 if the entity has `is_stackable` component, else it returns 0.0. |
| query.is_stalking| Returns 1.0 if the entity is stalking, else it returns 0.0. Applies to fox.|
| query.is_standing| Returns 1.0 if the entity is standing, else it returns 0.0. Pertains to non-grazing animation of donkey, mule, horse, skeleton horse, and zombie horse. |
| query.is_stunned| Returns 1.0 if the entity has the `is_stunned` component, else it returns 0.0. Pertains to ravager. |
| query.is_swimming| Returns 1.0 if the entity is swimming, else it returns 0.0. Pertains to player movement.|
| query.is_tamed| Returns 1.0 if the entity has the `is_tamed` component, else it returns 0.0. |
| query.is_transforming| Returns 1.0 if the entity is transforming, else it returns 0.0. Pertains to husk, or zombie. |
| query.is_using_item| Returns 1.0 if the entity is using an item, else it returns 0.0. Applies to allay.|
| query.is_wall_climbing| Returns 1.0 if the entity is climbing a wall, else it returns 0.0. |

| Name | Description |
|:---------|:---------|
| query.item_in_use_duration| Returns the amount of time an item has been in use in seconds up to the maximum duration, else 0.0 if it doesn't make sense. |
| query.item_is_charged| Takes one optional hand slot as a parameter (0 or `main_hand` for main hand, 1 or `off_hand` for off hand), and returns 1.0 if the item is charged in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. Pertains to crossbow.|
| query.item_max_use_duration| Returns the maximum amount of time the item can be used, else 0.0 if it doesn't make sense. Applies to brush.|
| query.item_remaining_use_duration| Returns the amount of time an item has left to use, else 0.0 if it doesn't make sense. Item queried is specified by the slot name `main_hand` or `off_hand`. Time remaining is normalized using the normalization value, only if one is given, else it is returned in seconds. Applies to crossbow.|
| query.item_slot_to_bone_name| Requires one parameter: the name of the equipment slot. This function returns the name of the bone this entity has mapped to that slot. Applies to crossbow, shield, spyglass, and trident.|
| query.key_frame_lerp_time| Returns the ratio between the previous and next key frames in an animation. |
| query.last_frame_time| Returns the time in *seconds* of the last frame. If an argument is passed, it is assumed to be the number of frames in the past that you wish to query. `query.last_frame_time` (or the equivalent `query.last_frame_time(0)`) will return the frame time of the frame before the current one. `query.last_frame_time(1)` will return the frame time of two frames ago. Currently we store the history of the last 30 frames, although note that this may change in the future. Passing an index more than the available data will return the oldest frame stored. |
| query.last_hit_by_player| Returns 1.0 if the entity was last hit by the player, else it returns 0.0. If called by the client always returns 0.0. Relates to the `on_death` component. |
| query.lie_amount| Returns the lie down amount for the entity. Applies to panda. |
| query.life_span| Returns the limited life span of an entity, or 0.0 if it lives forever. Applies to evocation fang. |
| query.life_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| query.lod_index| Takes an array of distances and returns the zero - based index of which range the entity is in based on distance from the camera. For example, `query.lod_index(10, 20, 30)` will return 0, 1, or 2 based on whether the mob is less than 10, 20, or 30 units away from the camera, or it will return 3 if it is greater than 30. |
| query.log| Debug log a value to the content log file. |
| query.main_hand_item_max_duration| Returns the use time maximum duration for the main hand item if it makes sense, else it returns 0.0. Used for item use computations. |
| query.main_hand_item_use_duration| Returns the use time for the main hand item. Used for item use computations. |
| query.mark_variant| Returns the entity's mark variant, if entity has the `mark_variant` component. |
| query.max_durability| Returns the max durability of an item. |
| query.max_health| Returns the maximum health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.max_trade_tier| Returns the maximum trade tier of the entity if it can perform trades, else it returns 0.0. |
| query.maximum_frame_time| Returns the time in *seconds* of the most expensive frame over the last `n` frames. If an argument is passed, it is assumed to be the number of frames in the past that you wish to query. `query.maximum_frame_time` (or the equivalent `query.maximum_frame_time(0)`) will return the frame time of the frame before the current one. `query.maximum_frame_time(1)` will return the maximum frame time of the previous two frames. Currently we store the history of the last 30 frames, although note that this may change in the future. Asking for more frames will result in only sampling the number of frames stored. |
| query.minimum_frame_time| Returns the time in *seconds* of the least expensive frame over the last `n` frames. If an argument is passed, it is assumed to be the number of frames in the past that you wish to query. `query.minimum_frame_time` (or the equivalent `query.minimum_frame_time(0)`) will return the frame time of the frame before the current one. `query.minimum_frame_time(1)` will return the minimum frame time of the previous two frames. Currently we store the history of the last 30 frames, although note that this may change in the future. Asking for more frames will result in only sampling the number of frames stored. |
| query.model_scale| Returns the scale of the current entity. Can be used with the `is_baby` component.|
| query.modified_distance_moved| Returns the total distance the entity has moved horizontally in meters since the entity was last loaded, not necessarily since it was originally created. Distance can be affected by status flags such as `is_baby` or `on_fire`. |
| query.modified_move_speed| Returns the current walk speed of the entity and can be modified with status flags such as `is_baby` or `on_fire.` |
| query.moon_brightness| Returns the brightness of the moon (full_moon=1.0, waning_gibbous=0.75, first_quarter=0.5, waning_crescent=0.25, new_moon=0.0, waxing_crescent=0.25, last_quarter=0.5, waxing_gibbous=0.75). |
| query.moon_phase| Returns the phase of the moon (full_moon=0, waning_gibbous=1, first_quarter=2, waning_crescent=3, new_moon=4, waxing_crescent=5, last_quarter=6, waxing_gibbous=7). |
| query.movement_direction| Returns the specified axis of the normalized position delta of the entity. Pertains to elytra.|
| query.noise| Queries Perlin Noise Map. Pertains to terrain generation. Takes x and z coordinates and generates a number that emulates a random noise pattern seen in nature. |
| query.on_fire_time| Returns the time that the entity has been on fire, else it returns 0.0. |
| query.out_of_control| Returns 1.0 if the entity has the `out_of_control` component, else it returns 0.0. Pertains to boats and chest boats.|
| query.overlay_alpha| DEPRECATED (Do not use - this function is deprecated and will be removed). |
| query.owner_identifier| DEPRECATED (Use `query.is_owner_identifier_any` instead, if possible, so names can be changed later without breaking content.) Returns the root entity identifier. Applies to attachables such as armor. |
| query.player_level| Returns the player's experience level if the entity is a player, otherwise returns 0. |
| query.position| Returns the absolute position of an entity. Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). |
| query.position_delta| Returns the position delta for an entity. Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). Pertains to player animation. |
| query.previous_squish_value| Returns the previous squish value for the current entity, or 0.0 if this doesn't make sense. Applies to slimes and magma cubes.  |
| query.property| Takes one argument: The name of the property on the entity. Returns the value of that property if it exists, else 0.0 if not. |
| query.relative_block_has_all_tags| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if that block at that position has all of the tags provided. |
| query.relative_block_has_any_tags| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if that block at that position has any of the tags provided. |
| query.remaining_durability| Returns the amount of durability an item has remaining. |
| query.ride_body_x_rotation| Returns the body pitch world-rotation of the ride an entity, else it returns 0.0. |
| query.ride_body_y_rotation| Returns the body yaw world-rotation of the ride of on an entity, else it returns 0.0. |
| query.ride_head_x_rotation| Returns the head x world-rotation of the ride of an entity, else it returns 0.0. |
| query.ride_head_y_rotation| Takes one optional argument as a parameter. Returns the head y world-rotation of the ride of an entity, else it returns 0.0. First parameter only for horses, zombie horses, skeleton horses, donkeys and mules that clamps rotation in degrees. |
| query.rider_body_x_rotation| Returns the body pitch world-rotation of a valid rider at the provided index if called on an entity, else it returns 0.0. |
| query.rider_body_y_rotation| Returns the body yaw world-rotation of a valid rider at the provided index if called on an entity, else it returns 0.0. |
| query.rider_head_x_rotation| Takes one argument as a parameter. Returns the head x world-rotation of the rider entity at the provided index, else it returns 0.0. |
| query.rider_head_y_rotation| Takes one or two arguments as parameters. Returns the head y world-rotation of the rider entity at the provided index, else it returns 0.0. Horses, zombie horses, skeleton horses, donkeys and mules require a second parameter that clamps rotation in degrees. |
| query.roll_counter| Returns the roll counter of the entity. Pertains to panda.|
| query.rotation_to_camera| Returns the rotation required to aim at the camera. Requires one argument representing the rotation axis you would like (0 for x, 1 for y) |
| query.scoreboard| Takes one argument - the name of the scoreboard entry for this entity. Returns the specified scoreboard value for this entity. Available only with behavior packs.|

| Name | Description |
|:---------|:---------|
| query.shake_angle| Returns the shaking angle of the entity if it makes sense, else it returns 0.0. Applies to wolf.|
| query.shake_time| Returns the shake time of the entity. Applies to shot arrow, thrown trident.|
| query.shield_blocking_bob| Returns the how much the offhand shield translates down when blocking and being hit. |
| query.show_bottom| Returns 1.0 if we render the entity's bottom, else it returns 0.0. |
| query.sit_amount| Returns the current sit amount of the entity. Pertains to panda. |
| query.skin_id| Returns the entity's skin ID. Related to `skin_id` component. |
| query.sleep_rotation| Returns the rotation of the bed the player is sleeping on. |
| query.sneeze_counter| Returns the sneeze counter of the entity. Pertains to panda.|
| query.spellcolor| Returns a struct representing the entity spell color for the specified entity. The struct contains `.r` `.g` `.b` and `.a` members, each 0.0 to 1.0. If no entity is specified, each member value will be 0.0. Pertains to evoker spell particles. |
| query.standing_scale| Returns the scale of how far up the entity is standing. Pertains to polar bear. |
| query.state_time| Only valid in an animation controller. Returns the time in seconds in the current animation controller state. |
| query.structural_integrity| Returns the structural integrity for the entity, otherwise returns 0. Applies to minecart.|
| query.surface_particle_color| Returns the particle color for the block located in the surface below the entity (scanned up to 10 blocks down). The struct contains `.r` `.g` `.b` and `.a` members, each 0.0 to 1.0. If no entity is specified or if no surface is found, each member value is set to 0.0. Available on clients (Resource Packs) only. |
| query.surface_particle_texture_coordinate| Returns the texture coordinate for generating particles for the block located in the surface below the entity (scanned up to 10 blocks down) in a struct with `u` and `v` keys. If no entity is specified or if no surface is found, u and v will be 0.0. Available on clients (Resource Packs) only. |
| query.surface_particle_texture_size| Returns the texture size for generating particles for the block located in the surface below the entity (scanned up to 10 blocks down). If no entity is specified or if no surface is found, each member value will be 0.0. Available on clients (Resource Packs) only. |
| query.swell_amount| Returns how swollen the entity is. Applies to creeper and wither.|
| query.swelling_dir| Returns the swelling direction of the entity if it makes sense, else it returns 0.0. Applies to overlay color of creeper preparing to explode.|
| query.swim_amount| Returns the amount the current entity is animated as swimming.  |
| query.tail_angle| Returns the angle of the tail of the entity if it makes sense, else it returns 0.0. Pertains to donkey, horse, mule, skeleton horse, wolf, zombie horse.|
| query.target_x_rotation| Returns the x rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| query.target_y_rotation| Returns the y rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| query.texture_frame_index| Returns the icon index of the entity. Applies to experience orb. |
| query.time_of_day| Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in. |
| query.time_since_last_vibration_detection| Returns the time in seconds since the last vibration detected by the entity. On errors or if no vibration has been detected yet, returns -1. Available on clients (Resource Packs) only. |
| query.time_stamp| Returns the current time stamp of the level. Pertains to cod, piglin, pufferfish, tropical fish, salmon.  |
| query.timer_flag_1| Returns 1.0 if behavior.timer_flag_1 is running, else it returns 0.0.|
| query.timer_flag_2| Returns 1.0 if behavior.timer_flag_2 is running, else it returns 0.0.|
| query.timer_flag_3| Returns 1.0 if behavior.timer_flag_3 is running, else it returns 0.0.|
| query.total_emitter_count| Returns the total number of active emitters in the world. |
| query.total_particle_count| Returns the total number of active particles in the world. |
| query.trade_tier| Returns the trade tier of the entity if it makes sense, else it returns 0.0. Applies to villager. |
| query.unhappy_counter| Always returns zero. This query was originally meant to indicate panda unhappiness, but due to an early code change it has always only returned zero. |
| query.variant| Returns the entity's variant index. Relates to `variant` component. |
| query.vertical_speed| Returns the speed of the entity up or down in meters/second, where positive is up. |
| query.walk_distance| Returns the total distance traveled by an entity while on the ground and not sneaking. |
| query.wing_flap_position| Returns the wing flap position of the entity, or 0.0 if this doesn't make sense. Pertains to dragon and parrot. |
| query.wing_flap_speed| Returns the wing flap speed of the entity, or 0.0 if this doesn't make sense. Pertains to parrot. |
| query.yaw_speed| Returns the entity's yaw speed. Related to how an entity moves, `body_y_rotation`. |
