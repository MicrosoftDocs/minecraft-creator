---
author: JDHeaden
ms.author: v-jillheaden
title: Molang Documentation - Query Functions
ms.prod: gaming
---

# Molang Documentation - Query Functions

Query Functions are operators that access a wide variety of information. They can return simple true or false values (1.0 or 0.0) or more complex data. See the list of functions below for per-query documentation. For query functions that do not take parameters, use: `query.function_name`. For query functions that do take parameters, use parentheses with commas separating the arguments like: `query.function_name(1, 2, 'three')`.

### Example

```JSON
"position": [ 0.0, "query.is_baby ? -8.0 : 0.0", "query.is_baby ? 4.0 : 0.0" ]
```

## List of Entity Queries

> [!IMPORTANT]
> The list below includes only entity queries that are live. Click this: [Experimental Entity Queries](ExperimentalQueryFunctions.md) for the experimental ones.

| Name| Description |
|:-----------|:-----------|
| query.above_top_solid| Returns the height of the block immediately above the highest solid block at the input (x,z) position. |
| query.actor_count| Returns the number of actors rendered in the last frame. |
| query.all| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if all of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. |
| query.all_animations_finished| Only valid in an animation controller.  Returns 1.0 if all animations in the current animation controller state have played through at least once, else it returns 0.0. |
| query.all_tags| Returns 1.0 if the item or block has all of the tags specified, else it return 0.0. |
| query.anger_level| If available, returns the anger level of the actor as an integer value from 0 to 1 less than the 'max_anger' defined on the actor, otherwise returns 0. Only returns a non-zero value in behavior packs. |
| query.anim_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| query.any| Requires at least 3 arguments. Evaluates the first argument, then returns 1.0 if any of the following arguments evaluate to the same value as the first. Otherwise it returns 0.0. |
| query.any_animation_finished| Only valid in an animation controller.  Returns 1.0 if any animation in the current animation controller state has played through at least once, else it returns 0.0. |
| query.any_tag| Returns 1.0 if the item or block has any of the tags specified, else it returns 0.0. |
| query.approx_eq| Returns 1.0 if all of the arguments are within 0.000000 of each other, else it returns 0.0. |
| query.armor_color_slot| Takes the armor slot index as a parameter and returns the color of the armor in the requested slot. |
| query.armor_material_slot| Takes the armor slot index as a parameter and returns the armor material type in the requested armor slot. |
| query.armor_texture_slot| Takes the armor slot index as a parameter and returns the texture type of the requested slot. |
| query.average_frame_time| Returns the time in *seconds* of the average frame time over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.average_frame_time' (or the equivalent 'query.average_frame_time(0)') will return the frame time of the frame before the current one.  'query.average_frame_time(1)' will return the average frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.block_face| Returns the block face for this (only valid for certain triggers such as placing blocks, or interacting with block) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.block_property| Returns the value of the associated block's Block State. |
| query.blocking| Returns 1.0 if the entity is blocking, else it returns 0.0. |
| query.body_x_rotation| Returns the body pitch rotation if called on an actor, else it returns 0.0. |
| query.body_y_rotation| Returns the body yaw rotation if called on an actor, else it returns 0.0. |
| query.bone_aabb| Returns the axis aligned bounding box of a bone as a struct with members '.min', '.max', along with '.x', '.y', and '.z' values for each. |
| query.bone_origin| Returns the initial (from the .geo) pivot of a bone as a struct with members '.x', '.y', and '.z'. |
| query.bone_rotation| Returns the initial (from the .geo) rotation of a bone as a struct with members '.x', '.y', and '.z' in degrees. |
| query.camera_distance_range_lerp| Takes two distances (any order) and return a number from 0 to 1 based on the camera distance between the two ranges clamped to that range.  For example, 'query.camera_distance_range_lerp(10, 20)' will return 0 for any distance less than or equal to 10, 0.2 for a distance of 12, 0.5 for 15, and 1 for 20 or greater.  If you pass in (20, 10), a distance of 20 will return 0.0. |
| query.camera_rotation| Returns the rotation of the camera.  Requires one argument representing the rotation axis you would like: (0 for x, 1 for y). |
| query.can_climb| Returns 1.0 if the entity can climb, else it returns 0.0. |
| query.can_damage_nearby_mobs| Returns 1.0 if the entity can damage nearby mobs, else it returns 0.0. |
| query.can_fly| Returns 1.0 if the entity can fly, else it returns 0.0. |
| query.can_power_jump| Returns 1.0 if the entity can power jump, else it returns 0.0. |
| query.can_swim| Returns 1.0 if the entity can swim, else it returns 0.0. |
| query.can_walk| Returns 1.0 if the entity can walk, else it returns 0.0. |
| query.cape_flap_amount| Returns value between 0.0 and 1.0 with 0.0 meaning "cape is fully down" and 1.0 means "cape is fully up." |
| query.cardinal_block_face_placed_on| DEPRECATED (please use query.block_face instead) Returns the block face for this (only valid for on_placed_by_player trigger) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_facing_2d| Returns the current facing of the player ignoring up/down part of the direction (North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.cardinal_player_facing| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| query.combine_entities| Combines any valid entity references from all arguments into a single array.  Note that order is not preserved, and duplicates and invalid values are removed. |
| query.count| Counts the number of things passed to it (arrays are counted as the number of elements they contain; non-arrays count as 1). |
| query.current_squish_value| Returns the squish value for the current entity, or 0.0 if this doesn't make sense. |
| query.day| Returns the day of the current level. |
| query.death_ticks| Returns the elapsed ticks since the mob started dying. |
| query.debug_output| Debug log a value to the output debug window for builds that have one. |
| query.delta_time| Returns the time in seconds since the previous frame. |
| query.distance_from_camera| Returns the distance of the root of this actor or particle emitter from the camera. |
| query.effect_emitter_count| Returns the total number of active emitters of the callee's particle effect type. |
| query.effect_particle_count| Returns the total number of active particles of the callee's particle effect type. |
| query.equipment_count| Returns the number of equipped armor pieces for an actor from 0 to 4, not counting items held in hands. (To query for hand slots, use query.is_item_equipped or query.is_item_name_any).|
| query.equipped_item_all_tags| Takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 1 if all of the tags are on that equipped item, 0 otherwise. |
| query.equipped_item_any_tag| Takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 0 if none of the tags are on that equipped item or 1 if at least 1 tag exists. |
| query.equipped_item_is_attachable| Takes the desired hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns whether the item is an attachable or not. |
| query.eye_target_x_rotation| Returns the X eye rotation of the entity if it makes sense, else it returns 0.0. |
| query.eye_target_y_rotation| Returns the Y eye rotation of the entity if it makes sense, else it returns 0.0. |
| query.facing_target_to_range_attack| Returns 1.0 if the entity is attacking from range (minecraft:behavior.ranged_attack), else it returns 0.0. |
| query.frame_alpha| Returns the ratio (from 0 to 1) of how much between AI ticks this frame is being rendered. |
| query.get_actor_info_id| Returns the integer ID of an actor by its string name. |
| query.get_animation_frame| Returns the current texture of the item. |
| query.get_default_bone_pivot| Gets the specified axis of the specified bone orientation pivot. |
| query.get_equipped_item_name| DEPRECATED (Use query.is_item_name_any instead if possible so names can be changed later without breaking content.) Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''. |
| query.get_locator_offset| Gets specified axis of the specified locator offset. |
| query.get_name| DEPRECATED (Use query.is_name_any instead if possible so names can be changed later without breaking content.) Get the name of the mob if there is one, otherwise return ''. |
| query.get_root_locator_offset| Gets specified axis of the specified locator offset of the root model. |
| query.ground_speed| Returns the ground speed of the entity in meters/second. |
| query.had_component_group| Usable only in behavior packs when determining the default value for an entity's Property. Requires one string argument. If the entity is being loaded from data that was last saved with a component_group with the specified name, returns 1.0, otherwise returns 0.0. The purpose of this query is to allow entity definitions to change and still be able to load the correct state of entities.  |
| query.has_any_family| Returns 1 if the entity has any of the specified families, else 0. |
| query.has_armor_slot| Takes the armor slot index as a parameter and returns 1.0 if the entity has armor in the requested slot, else it returns 0.0. |
| query.has_biome_tag| Returns whether or not a Block Placement Target has a specific biome tag. |
| query.has_block_property| Returns 1.0 if the associated block has the given block property or 0.0 if not. |
| query.has_cape| Returns 1.0 if the player has a cape, else it returns 0.0. |
| query.has_collision| Returns 1.0 if the entity has collisions enabled, else it returns 0.0. |
| query.has_gravity| Returns 1.0 if the entity is affected by gravity, else it returns 0.0. |
| query.has_owner| Returns true if the entity has an owner ID, else it returns false. |
| query.has_rider| Returns 1.0 if the entity has a rider, else it returns 0.0. |
| query.has_target| Returns 1.0 if the entity has a target, else it returns 0.0. |
| query.head_roll_angle| Returns the roll angle of the head of the entity if it makes sense, else it returns 0.0. |
| query.head_x_rotation| Takes one argument as a parameter. Returns the nth head x rotation of the entity if it makes sense, else it returns 0.0. |
| query.head_y_rotation| Takes one argument as a parameter. Returns the nth head y rotation of the entity if it makes sense, else it returns 0.0. |
| query.health| Returns the health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.heartbeat_interval| Returns the heartbeat interval of the actor in seconds. Returns 0 when the actor has no heartbeat. |
| query.heartbeat_phase| Returns the heartbeat phase of the actor. 0.0 if at start of current heartbeat, 1.0 if at the end. Returns 0 on errors or when the actor has no heartbeat. Available on the Client (Resource Packs) only. |
| query.heightmap| Takes two arguments: X and Z world values. Returns the world height (Y value) of the terrain at the specified position. |
| query.hurt_direction| Returns the hurt direction for the actor, otherwise returns 0. |
| query.hurt_time| Returns the hurt time for the actor, otherwise returns 0. |
| query.in_range| Requires 3 numerical arguments: some value, a minimum, and a maximum. If the first argument is between the minimum and maximum (inclusive), returns 1.0. Otherwise it returns 0.0. |
| query.invulnerable_ticks| Returns the number of ticks of invulnerability the entity has left if it makes sense, else it returns 0.0. |
| query.is_admiring| Returns 1.0 if the entity is admiring, else it returns 0.0. |
| query.is_alive| Returns 1.0 if the entity is alive, and 0.0 if it's dead. |
| query.is_angry| Returns 1.0 if the entity is angry, else it returns 0.0. |
| query.is_attached_to_entity| Returns 1.0 if the actor is attached to an entity, else it will return 0.0. |
| query.is_avoiding_block| Returns 1.0 if the entity is fleeing from a block, else it returns 0.0. |
| query.is_avoiding_mobs| Returns 1.0 if the entity is fleeing from mobs, else it returns 0.0. |
| query.is_baby| Returns 1.0 if the entity is a baby, else it returns 0.0. |
| query.is_breathing| Returns 1.0 if the entity is breathing, else it returns 0.0. |
| query.is_bribed| Returns 1.0 if the entity has been bribed, else it returns 0.0. |
| query.is_carrying_block| Returns 1.0 if the entity is carrying a block, else it returns 0.0. |
| query.is_casting| Returns 1.0 if the entity is casting, else it returns 0.0. |
| query.is_celebrating| Returns 1.0 if the entity is celebrating, else it returns 0.0. |
| query.is_celebrating_special| Returns 1.0 if the entity is doing a special celebration, else it returns 0.0. |
| query.is_charged| Returns 1.0 if the entity is charged, else it returns 0.0. |
| query.is_charging| Returns 1.0 if the entity is charging, else it returns 0.0. |
| query.is_chested| Returns 1.0 if the entity has chests attached to it, else it returns 0.0. |
| query.is_critical| Returns 1.0 if the entity is critical, else it returns 0.0. |
| query.is_croaking| Returns 1.0 if the entity is croaking, else it returns 0.0. |
| query.is_dancing| Returns 1.0 if the entity is dancing, else it returns 0.0. |
| query.is_delayed_attacking| Returns 1.0 if the entity is attacking using the delayed attack, else it returns 0.0. |
| query.is_digging| Returns 1.0 if the entity is digging, else it returns 0.0. |
| query.is_eating| Returns 1.0 if the entity is eating, else it returns 0.0. |
| query.is_eating_mob| Returns 1.0 if the entity is eating a mob, else it returns 0.0. |
| query.is_elder| Returns 1.0 if the entity is an elder version of it, else it returns 0.0. |
| query.is_emerging| Returns 1.0 if the entity is emerging, else it returns 0.0. |
| query.is_emoting| Returns 1.0 if the entity is emoting, else it returns 0.0. |
| query.is_enchanted| Returns 1.0 if the entity is enchanted, else it returns 0.0. |
| query.is_fire_immune| Returns 1.0 if the entity is immune to fire, else it returns 0.0. |
| query.is_first_person| Returns 1.0 if the entity is being rendered in first person mode, else it returns 0.0. |
| query.is_ghost| Returns 1.0 if an entity is a ghost, else it returns 0.0. |
| query.is_gliding| Returns 1.0 if the entity is gliding, else it returns 0.0. |
| query.is_grazing| Returns 1.0 if the entity is grazing, or 0.0 if not. |
| query.is_idling| Returns 1.0 if the entity is idling, else it returns 0.0. |
| query.is_ignited| Returns 1.0 if the entity is ignited, else it returns 0.0. |
| query.is_illager_captain| Returns 1.0 if the entity is an illager captain, else it returns 0.0. |
| query.is_in_contact_with_water| Returns 1.0 if the entity is in contact with any water (water, rain, splash water bottle), else it returns 0.0. |
| query.is_in_love| Returns 1.0 if the entity is in love, else it returns 0.0. |
| query.is_in_ui| Returns 1.0 if the entity is rendered as part of the UI, else it returns 0.0. |
| query.is_in_water| Returns 1.0 if the entity is in water, else it returns 0.0. |
| query.is_in_water_or_rain| Returns 1.0 if the entity is in water or rain, else it returns 0.0. |
| query.is_interested| Returns 1.0 if the entity is interested, else it returns 0.0. |
| query.is_invisible| Returns 1.0 if the entity is invisible, else it returns 0.0. |
| query.is_item_equipped| Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if there is an item in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| query.is_item_name_any| Takes an equipment slot name (see the replaceitem command) and an optional slot index value. After that, takes one or more full name (with 'namespace:') strings to check for. Returns 1.0 if an item in the specified slot has any of the specified names, otherwise returns 0.0. An empty string '' can be specified to check for an empty slot. Note that querying slot.enderchest, slot.saddle, slot.armor, or slot.chest will only work in behavior packs. A preferred query to query.get_equipped_item_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_jumping| Returns 1.0 if the entity is jumping, else it returns 0.0. |
| query.is_laying_down| Returns 1.0 if the entity is laying down, else it returns 0.0. |
| query.is_laying_egg| Returns 1.0 if the entity is laying an egg, else it returns 0.0. |
| query.is_leashed| Returns 1.0 if the entity is leashed to something, else it returns 0.0. |
| query.is_levitating| Returns 1.0 if the entity is levitating, else it returns 0.0. |
| query.is_lingering| Returns 1.0 if the entity is lingering, else it returns 0.0. |
| query.is_moving| Returns 1.0 if the entity is moving, else it returns 0.0. |
| query.is_name_any| Takes one or more arguments. If the entity's name is any of the specified string values, returns 1.0. Otherwise returns 0.0. A preferred query to query.get_name, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_on_fire| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| query.is_on_ground| Returns 1.0 if the entity is on the ground, else it returns 0.0. |
| query.is_on_screen| Returns 1.0 if this is called on an entity at a time when it is known if it is on screen, else it returns 0.0. |
| query.is_onfire| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| query.is_orphaned| Returns 1.0 if the entity is orphaned, else it returns 0.0. |
| query.is_owner_identifier_any| Takes one or more arguments. Returns whether the root actor identifier is any of the specified strings. A preferred query to query.owner_identifier, as it can be adjusted by Mojang to avoid breaking content if names are changed. |
| query.is_persona_or_premium_skin| Returns 1.0 if the player has a persona or premium skin, else it returns 0.0. |
| query.is_playing_dead| Returns 1.0 if the entity is playing dead, else it returns 0.0. |
| query.is_powered| Returns 1.0 if the entity is powered, else it returns 0.0. |
| query.is_pregnant| Returns 1.0 if the entity is pregnant, else it returns 0.0. |
| query.is_ram_attacking| Returns 1.0 if the entity is using a ram attack, else it returns 0.0. |
| query.is_resting| Returns 1.0 if the entity is resting, else it returns 0.0. |
| query.is_riding| Returns 1.0 if the entity is riding, else it returns 0.0. |
| query.is_roaring| Returns 1.0 if the entity is currently roaring, else it returns 0.0. |
| query.is_rolling| Returns 1.0 if the entity is rolling, else it returns 0.0. |
| query.is_saddled| Returns 1.0 if the entity has a saddle, else it returns 0.0. |
| query.is_scared| Returns 1.0 if the entity is scared, else it returns 0.0. |
| query.is_selected_item| Returns true if the player has selected an item in the inventory, else it returns 0.0. |
| query.is_shaking| Returns 1.0 if the entity is casting, else it returns 0.0. |
| query.is_shaking_wetness| Returns 1.0 if the entity is shaking water off, else it returns 0.0. |
| query.is_sheared| Returns 1.0 if the entity is able to be sheared and is sheared, else it returns 0.0. |
| query.is_shield_powered| Returns 1.0f if the entity has an active powered shield if it makes sense, else it returns 0.0. |
| query.is_silent| Returns 1.0 if the entity is silent, else it returns 0.0. |
| query.is_sitting| Returns 1.0 if the entity is sitting, else it returns 0.0. |
| query.is_sleeping| Returns 1.0 if the entity is sleeping, else it returns 0.0. |
| query.is_sneaking| Returns 1.0 if the entity is sneaking, else it returns 0.0. |
| query.is_sneezing| Returns 1.0 if the entity is sneezing, else it returns 0.0. |
| query.is_sniffing| Returns 1.0 if the entity is sniffing, else it returns 0.0. |
| query.is_sonic_boom| Returns 1.0 if the entity is using sonic boom, else it returns 0.0. |
| query.is_sprinting| Returns 1.0 if the entity is sprinting, else it returns 0.0. |
| query.is_stackable| Returns 1.0 if the entity is stackable, else it returns 0.0. |
| query.is_stalking| Returns 1.0 if the entity is stalking, else it returns 0.0. |
| query.is_standing| Returns 1.0 if the entity is standing, else it returns 0.0. |
| query.is_stunned| Returns 1.0 if the entity is currently stunned, else it returns 0.0. |
| query.is_swimming| Returns 1.0 if the entity is swimming, else it returns 0.0. |
| query.is_tamed| Returns 1.0 if the entity is tamed, else it returns 0.0. |
| query.is_transforming| Returns 1.0 if the entity is transforming, else it returns 0.0. |
| query.is_using_item| Returns 1.0 if the entity is using an item, else it returns 0.0. |
| query.is_wall_climbing| Returns 1.0 if the entity is climbing a wall, else it returns 0.0. |
| query.item_in_use_duration| Returns the amount of time an item has been in use in seconds up to the maximum duration, else 0.0 if it doesn't make sense. |
| query.item_is_charged| Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if the item is charged in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| query.item_max_use_duration| Returns the maximum amount of time the item can be used, else 0.0 if it doesn't make sense. |
| query.item_remaining_use_duration| Returns the amount of time an item has left to use, else 0.0 if it doesn't make sense.Item queried is specified by the slot name 'main_hand' or 'off_hand'. Time remaining is normalized using the normalization value, only if one is given, else it is returned in seconds. |
| query.item_slot_to_bone_name| Requires one parameter: the name of the equipment slot.  This function returns the name of the bone this entity has mapped to that slot. |
| query.key_frame_lerp_time| Returns the ratio between the previous and next key frames |
| query.last_frame_time| Returns the time in *seconds* of the last frame.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.last_frame_time' (or the equivalent 'query.last_frame_time(0)') will return the frame time of the frame before the current one.  'query.last_frame_time(1)' will return the frame time of two frames ago.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Passing an index more than the available data will return the oldest frame stored. |
| query.last_hit_by_player| Returns 1.0 if the entity was last hit by the player, else it returns 0.0. If called by the client always returns 0.0. |
| query.lie_amount| Returns the lie down amount for the entity. |
| query.life_span| Returns the limited life span of an entity, or 0.0 if it lives forever |
| query.life_time| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| query.lod_index| Takes an array of distances and returns the zero - based index of which range the actor is in based on distance from the camera. For example, 'query.lod_index(10, 20, 30)' will return 0, 1, or 2 based on whether the mob is less than 10, 20, or 30 units away from the camera, or it will return 3 if it is greater than 30. |
| query.log| Debug log a value to the content log. |
| query.main_hand_item_max_duration| Returns the use time maximum duration for the main hand item if it makes sense, else it returns 0.0. |
| query.main_hand_item_use_duration| Returns the use time for the main hand item. |
| query.mark_variant| Returns the entity's mark variant. |
| query.max_durability| Returns the max durability an item can take. |
| query.max_health| Returns the maximum health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| query.max_trade_tier| Returns the maximum trade tier of the entity if it makes sense, else it returns 0.0. |
| query.maximum_frame_time| Returns the time in *seconds* of the most expensive frame over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.maximum_frame_time' (or the equivalent 'query.maximum_frame_time(0)') will return the frame time of the frame before the current one.  'query.maximum_frame_time(1)' will return the maximum frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.minimum_frame_time| Returns the time in *seconds* of the least expensive frame over the last 'n' frames.  If an argument is passed, it is assumed to be the number of frames in the past that you wish to query.  'query.minimum_frame_time' (or the equivalent 'query.minimum_frame_time(0)') will return the frame time of the frame before the current one.  'query.minimum_frame_time(1)' will return the minimum frame time of the previous two frames.  Currently we store the history of the last 30 frames, although note that this may change in the future.  Asking for more frames will result in only sampling the number of frames stored. |
| query.model_scale| Returns the scale of the current entity. |
| query.modified_distance_moved| Returns the total distance the entity has moved horizontally in meters (since the entity was last loaded, not necessarily since it was originally created) modified along the way by status flags such as is_baby or on_fire. |
| query.modified_move_speed| Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire. |
| query.moon_brightness| Returns the brightness of the moon (FULL_MOON=1.0, WANING_GIBBOUS=0.75, FIRST_QUARTER=0.5, WANING_CRESCENT=0.25, NEW_MOON=0.0, WAXING_CRESCENT=0.25, LAST_QUARTER=0.5, WAXING_GIBBOUS=0.75). |
| query.moon_phase| Returns the phase of the moon (FULL_MOON=0, WANING_GIBBOUS=1, FIRST_QUARTER=2, WANING_CRESCENT=3, NEW_MOON=4, WAXING_CRESCENT=5, LAST_QUARTER=6, WAXING_GIBBOUS=7). |
| query.movement_direction| Returns the specified axis of the normalized position delta of the entity. |
| query.noise| Queries Perlin Noise Map. |
| query.on_fire_time| Returns the time that the entity is on fire, else it returns 0.0. |
| query.out_of_control| Returns 1.0 if the entity is out of control, else it returns 0.0. |
| query.overlay_alpha| DEPRECATED (Do not use - this function is deprecated and will be removed). |
| query.owner_identifier| DEPRECATED (Use query.is_owner_identifier_any instead if possible so names can be changed later without breaking content.) Returns the root actor identifier. |
| query.player_level| Returns the players level if the actor is a player, otherwise returns 0 |
| query.position| Returns the absolute position of an actor.  Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). |
| query.position_delta| Returns the position delta for an actor.  Takes one argument that represents the desired axis (0 == x-axis, 1 == y-axis, 2 == z-axis). |
| query.previous_squish_value| Returns the previous squish value for the current entity, or 0.0 if this doesn't make sense. |
| query.remaining_durability| Returns the how much durability an item has remaining. |
| query.roll_counter| Returns the roll counter of the entity. |
| query.rotation_to_camera| Returns the rotation required to aim at the camera.  Requires one argument representing the rotation axis you would like (0 for x, 1 for y) |
| query.shake_angle| Returns the shaking angle of the entity if it makes sense, else it returns 0.0. |
| query.shake_time| Returns the shake time of the entity. |
| query.shield_blocking_bob| Returns the how much the offhand shield should translate down when blocking and being hit. |
| query.show_bottom| Returns 1.0 if we render the entity's bottom, else it returns 0.0. |
| query.sit_amount| Returns the current sit amount of the entity. |
| query.skin_id| Returns the entity's skin ID |
| query.sleep_rotation| Returns the rotation of the bed the player is sleeping on. |
| query.sneeze_counter| Returns the sneeze counter of the entity. |
| query.spellcolor| Returns a struct representing the entity spell color for the specified entity. The struct contains '.r' '.g' '.b' and '.a' members, each 0.0 to 1.0. If no actor is specified, each member value will be 0.0. |
| query.standing_scale| Returns the scale of how standing up the entity is. |
| query.structural_integrity| Returns the structural integrity for the actor, otherwise returns 0. |
| query.surface_particle_color| Returns the particle color for the block located in the surface below the actor (scanned up to 10 blocks down). The struct contains '.r' '.g' '.b' and '.a' members, each 0.0 to 1.0. If no actor is specified or if no surface is found, each member value is set to 0.0. Available on the Client (Resource Packs) only. |
| query.surface_particle_texture_coordinate| Returns the texture coordinate for generating particles for the block located in the surface below the actor (scanned up to 10 blocks down) in a struct with 'u' and 'v' keys. If no actor is specified or if no surface is found, u and v will be 0.0. Available on the Client (Resource Packs) only. |
| query.surface_particle_texture_size| Returns the texture size for generating particles for the block located in the surface below the actor (scanned up to 10 blocks down). If no actor is specified or if no surface is found, each member value will be 0.0. Available on the Client (Resource Packs) only. |
| query.swell_amount| Returns how swollen the entity is. |
| query.swelling_dir| Returns the swelling direction of the entity if it makes sense, else it returns 0.0. |
| query.swim_amount| Returns the amount the current entity is swimming. |
| query.tail_angle| Returns the angle of the tail of the entity if it makes sense, else it returns 0.0. |
| query.target_x_rotation| Returns the x rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| query.target_y_rotation| Returns the y rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| query.texture_frame_index| Returns the icon index of the experience orb |
| query.time_of_day| Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in. |
| query.time_since_last_vibration_detection| Returns the time in seconds since the last vibration detected by the actor. On errors or if no vibration has been detected yet, returns -1. Available on the Client (Resource Packs) only. |
| query.time_stamp| Returns the current time stamp of the level. |
| query.total_emitter_count| Returns the total number of active emitters in the world. |
| query.total_particle_count| Returns the total number of active particles in the world. |
| query.trade_tier| Returns the trade tier of the entity if it makes sense, else it returns 0.0. |
| query.unhappy_counter| Returns how unhappy the entity is. |
| query.variant| Returns the entity's variant index. |
| query.vertical_speed| Returns the speed of the entity up or down in meters/second, where positive is up. |
| query.walk_distance| Returns the walk distance of the entity. |
| query.wing_flap_position| Returns the wing flap position of the entity, or 0.0 if this doesn't make sense. |
| query.wing_flap_speed| Returns the wing flap speed of the entity, or 0.0 if this doesn't make sense. |
| query.yaw_speed| Returns the entity's yaw speed. |
