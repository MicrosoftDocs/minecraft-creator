---
author: mammerla
ms.author: mikeam
title: "Molang Query Functions Documentation - Molang Query Functions"
description: "A reference document describing all current Molang Query Functions"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

| Molang Query Functions | Description |
|:-----|:----------|
| [query.above_top_solid](queryfunctions/query_above_top_solid.md)| Returns the height of the block immediately above the highest solid block at the input (x,z) position |
| [query.actor_count](queryfunctions/query_actor_count.md)| Returns the number of actors rendered in the last frame. |
| [query.all](queryfunctions/query_all.md)| Requires at least 3 arguments. |
| [query.all_animations_finished](queryfunctions/query_all_animations_finished.md)| Only valid in an animation controller. |
| [query.all_tags](queryfunctions/query_all_tags.md)| Returns if the item or block has all of the tags specified. |
| [query.anger_level](queryfunctions/query_anger_level.md)| Returns the anger level of the actor [0,n). |
| [query.anim_time](queryfunctions/query_anim_time.md)| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| [query.any](queryfunctions/query_any.md)| Requires at least 3 arguments. |
| [query.any_animation_finished](queryfunctions/query_any_animation_finished.md)| Only valid in an animation controller. |
| [query.any_tag](queryfunctions/query_any_tag.md)| Returns if the item or block has any of the tags specified. |
| [query.approx_eq](queryfunctions/query_approx_eq.md)| Returns 1.0 if all of the arguments are within 0.000000 of each other, else 0.0. |
| [query.armor_color_slot](queryfunctions/query_armor_color_slot.md)| Takes the armor slot index as a parameter, and returns the color of the armor in the requested slot. |
| [query.armor_damage_slot](queryfunctions/query_armor_damage_slot.md)| Takes the armor slot index as a parameter, and returns the damage value of the requested slot. |
| [query.armor_material_slot](queryfunctions/query_armor_material_slot.md)| Takes the armor slot index as a parameter, and returns the armor material type in the requested armor slot. |
| [query.armor_texture_slot](queryfunctions/query_armor_texture_slot.md)| Takes the armor slot index as a parameter, and returns the texture type of the requested slot. |
| [query.average_frame_time](queryfunctions/query_average_frame_time.md)| Returns the time in *seconds* of the average frame time over the last 'n' frames. |
| [query.blocking](queryfunctions/query_blocking.md)| Returns 1.0 if the entity is blocking, else it returns 0.0. |
| [query.block_face](queryfunctions/query_block_face.md)| Returns the block face for this (only valid for certain triggers such as placing blocks, or interacting with block) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| [query.block_has_all_tags](queryfunctions/query_block_has_all_tags.md)| Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| [query.block_has_any_tag](queryfunctions/query_block_has_any_tag.md)| Takes a world-origin-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| [query.block_neighbor_has_all_tags](queryfunctions/query_block_neighbor_has_all_tags.md)| Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| [query.block_neighbor_has_any_tag](queryfunctions/query_block_neighbor_has_any_tag.md)| Takes a block-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| [query.block_property](queryfunctions/query_block_property.md)| (No longer available in pack min_engine_version 1.20.40.) Returns the value of the associated block's Block State. |
| [query.block_state](queryfunctions/query_block_state.md)| Returns the value of the associated block's Block State. |
| [query.body_x_rotation](queryfunctions/query_body_x_rotation.md)| Returns the body pitch rotation if called on an actor, else it returns 0.0. |
| [query.body_y_rotation](queryfunctions/query_body_y_rotation.md)| Returns the body yaw rotation if called on an actor, else it returns 0.0. |
| [query.bone_aabb](queryfunctions/query_bone_aabb.md)| Returns the axis aligned bounding box of a bone as a struct with members '.min', '.max', along with '.x', '.y', and '.z' values for each. |
| [query.bone_orientation_matrix](queryfunctions/query_bone_orientation_matrix.md)| Takes the name of the bone as an argument. |
| [query.bone_orientation_trs](queryfunctions/query_bone_orientation_trs.md)| TRS stands for Translate/Rotate/Scale. |
| [query.bone_origin](queryfunctions/query_bone_origin.md)| Returns the initial (from the .geo) pivot of a bone as a struct with members '.x', '.y', and '.z'. |
| [query.bone_rotation](queryfunctions/query_bone_rotation.md)| Returns the initial (from the .geo) rotation of a bone as a struct with members '.x', '.y', and '.z' in degrees. |
| [query.camera_distance_range_lerp](queryfunctions/query_camera_distance_range_lerp.md)| Takes two distances (any order) and return a number from 0 to 1 based on the camera distance between the two ranges clamped to that range. |
| [query.camera_rotation](queryfunctions/query_camera_rotation.md)| Returns the rotation of the camera. |
| [query.can_climb](queryfunctions/query_can_climb.md)| Returns 1.0 if the entity can climb, else it returns 0.0. |
| [query.can_damage_nearby_mobs](queryfunctions/query_can_damage_nearby_mobs.md)| Returns 1.0 if the entity can damage nearby mobs, else it returns 0.0. |
| [query.can_dash](queryfunctions/query_can_dash.md)| Returns 1.0 if the entity can dash, else it returns 0.0 |
| [query.can_fly](queryfunctions/query_can_fly.md)| Returns 1.0 if the entity can fly, else it returns 0.0. |
| [query.can_power_jump](queryfunctions/query_can_power_jump.md)| Returns 1.0 if the entity can power jump, else it returns 0.0. |
| [query.can_swim](queryfunctions/query_can_swim.md)| Returns 1.0 if the entity can swim, else it returns 0.0. |
| [query.can_walk](queryfunctions/query_can_walk.md)| Returns 1.0 if the entity can walk, else it returns 0.0. |
| [query.cape_flap_amount](queryfunctions/query_cape_flap_amount.md)| Returns value between 0.0 and 1.0 with 0.0 meaning cape is fully down and 1.0 is cape is fully up. |
| [query.cardinal_block_face_placed_on](queryfunctions/query_cardinal_block_face_placed_on.md)| DEPRECATED (please use query.block_face instead) Returns the block face for this (only valid for on_placed_by_player trigger) (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| [query.cardinal_facing](queryfunctions/query_cardinal_facing.md)| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| [query.cardinal_facing_2d](queryfunctions/query_cardinal_facing_2d.md)| Returns the current facing of the player ignoring up/down part of the direction (North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| [query.cardinal_player_facing](queryfunctions/query_cardinal_player.facing.md)| Returns the current facing of the player (Down=0.0, Up=1.0, North=2.0, South=3.0, West=4.0, East=5.0, Undefined=6.0). |
| [query.client_max_render_distance](queryfunctions/query_client_max_render_distance.md)| Returns the max render distance in chunks of the current client. |
| [query.client_memory_tier](queryfunctions/query_client_memory_tier.md)| Returns a number representing the client RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. |
| [query.combine_entities](queryfunctions/query_combine_entities.md)| Combines any valid entity references from all arguments into a single array. |
| [query.cooldown_time](queryfunctions/query_cooldown_time.md)| Returns the total cooldown time in seconds for the item held or worn by the specified equipment slot name (and if required second numerical slot id), otherwise returns 0. |
| [query.cooldown_time_remaining](queryfunctions/query_cooldown_time_remaining.md)| Returns the cooldown time remaining in seconds for specified cooldown type or the item held or worn by the specified equipment slot name (and if required second numerical slot id), otherwise returns 0. |
| [query.count](queryfunctions/query_count.md)| Counts the number of things passed to it (arrays are counted as the number of elements they contain; non-arrays count as 1). |
| [query.current_squish_value](queryfunctions/query_current_squish_value.md)| Returns the squish value for the current entity, or 0.0 if this doesn't make sense. |
| [query.dash_cooldown_progress](queryfunctions/query_dash_cooldown_progress.md)| (No longer available in pack min_engine_version 1.20.50.) DEPRECATED. |
| [query.day](queryfunctions/query_day.md)| Returns the day of the current level. |
| [query.death_ticks](queryfunctions/query_death_ticks.md)| Returns the elapsed ticks since the mob started dying. |
| [query.debug_output](queryfunctions/query_debug_output.md)| debug log a value to the output debug window for builds that have one |
| [query.delta_time](queryfunctions/query_delta_time.md)| Returns the time in seconds since the previous frame. |
| [query.distance_from_camera](queryfunctions/query_distance_from_camera.md)| Returns the distance of the root of this actor or particle emitter from the camera. |
| [query.effect_emitter_count](queryfunctions/query_effect_emitter_count.md)| Returns the total number of active emitters of the callee's particle effect type. |
| [query.effect_particle_count](queryfunctions/query_effect_particle_count.md)| Returns the total number of active particles of the callee's particle effect type. |
| [query.equipment_count](queryfunctions/query_equipment_count.md)| Returns the number of equipped armor pieces for an actor from 0 to 5, not counting items held in hands. |
| [query.equipped_item_all_tags](queryfunctions/query_equipped_item_all_tags.md)| Takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 1 if all of the tags are on that equipped item, 0 otherwise. |
| [query.equipped_item_any_tag](queryfunctions/query_equipped_item_any_tag.md)| Takes a slot name followed by any tag you want to check for in the form of 'tag_name' and returns 0 if none of the tags are on that equipped item or 1 if at least 1 tag exists. |
| [query.equipped_item_is_attachable](queryfunctions/query_equipped_item_is_attachable.md)| Takes the desired hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns whether the item is an attachable or not. |
| [query.eye_target_x_rotation](queryfunctions/query_eye_target_x_rotation.md)| Returns the X eye rotation of the entity if it makes sense, else it returns 0.0. |
| [query.eye_target_y_rotation](queryfunctions/query_eye_target_y_rotation.md)| Returns the Y eye rotation of the entity if it makes sense, else it returns 0.0. |
| [query.facing_target_to_range_attack](queryfunctions/query_facing_target_to_range_attack.md)| Returns 1.0 if the entity is attacking from range (i.e. |
| [query.frame_alpha](queryfunctions/query_frame_alpha.md)| Returns the ratio (from 0 to 1) of how much between AI ticks this frame is being rendered. |
| [query.get_actor_info_id](queryfunctions/query_get_actor_info_id.md)| Returns the integer id of an actor by its string name. |
| [query.get_animation_frame](queryfunctions/query_get_animation_frame.md)| Returns the current texture of the item |
| [query.get_default_bone_pivot](queryfunctions/query_get_default_bone_pivot.md)| Gets specified axis of the specified bone orientation pivot. |
| [query.get_equipped_item_name](queryfunctions/query_get_equipped_item_name.md)| DEPRECATED (Use query.is_item_name_any instead if possible so names can be changed later without breaking content.) Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and a second parameter (0=default) if you would like the equipped item or any non-zero number for the currently rendered item, and returns the name of the item in the requested slot (defaulting to the main hand if no parameter is supplied) if there is one, otherwise returns ''. |
| [query.get_locator_offset](queryfunctions/query_get_locator_offset.md)| Gets specified axis of the specified locator offset. |
| [query.get_name](queryfunctions/query_get_name.md)| DEPRECATED (Use query.is_name_any instead if possible so names can be changed later without breaking content.)Get the name of the mob if there is one, otherwise return ''. |
| [query.get_root_locator_offset](queryfunctions/query_get_root_locator_offset.md)| Gets specified axis of the specified locator offset of the root model. |
| [query.graphics_mode_is_any](queryfunctions/query_graphics_mode_is_any.md)| Takes in one or more arguments ('simple', 'fancy', 'deferred', 'raytraced'). |
| [query.ground_speed](queryfunctions/query_ground_speed.md)| Returns the ground speed of the entity in meters/second. |
| [query.had_component_group](queryfunctions/query_had_component_group.md)| Usable only in behavior packs when determining the default value for an entity's Property. |
| [query.has_any_family](queryfunctions/query_has_any_family.md)| Returns 1 if the entity has any of the specified families, else 0. |
| [query.has_any_leashed_entity_of_type](queryfunctions/query_has_any_leashed_entity_of_type.md)| Returns whether or not the entity is currently leashing other entities of the designated types. |
| [query.has_armor_slot](queryfunctions/query_has_armor_slot.md)| Takes the armor slot index as a parameter, and returns 1.0 if the entity has armor in the requested slot, else it returns 0.0. |
| [query.has_biome_tag](queryfunctions/query_has_biome_tag.md)| Returns whether or not a Block Placement Target has a specific biome tag |
| [query.has_block_property](queryfunctions/query_has_block_property.md)| (No longer available in pack min_engine_version 1.20.40.) Returns 1.0 if the associated block has the given block state or 0.0 if not. |
| [query.has_block_state](queryfunctions/query_has_block_state.md)| Returns 1.0 if the associated block has the given block state or 0.0 if not. |
| [query.has_cape](queryfunctions/query_has_cape.md)| Returns 1.0 if the player has a cape, else it returns 0.0. |
| [query.has_collision](queryfunctions/query_has_collision.md)| Returns 1.0 if the entity has collisions enabled, else it returns 0.0. |
| [query.has_dash_cooldown](queryfunctions/query_has_dash_cooldown.md)| Returns 1.0 if the entity has cooldown on its dash, else it returns 0.0 |
| [query.has_gravity](queryfunctions/query_has_gravity.md)| Returns 1.0 if the entity is affected by gravity, else it returns 0.0. |
| [query.has_head_gear](queryfunctions/query_has_head_gear.md)| Returns boolean whether an Actor has an item in their head armor slot or not, or false if no actor in current context |
| [query.has_owner](queryfunctions/query_has_owner.md)| Returns true if the entity has an owner ID else it returns false |
| [query.has_player_rider](queryfunctions/query_has_player.rider.md)| Returns 1 if the entity has a player riding it in any seat, else it returns 0. |
| [query.has_property](queryfunctions/query_has_property.md)| Takes one argument: the name of the property on the Actor. |
| [query.has_rider](queryfunctions/query_has_rider.md)| Returns 1.0 if the entity has a rider, else it returns 0.0 |
| [query.has_target](queryfunctions/query_has_target.md)| Returns 1.0 if the entity has a target, else it returns 0.0 |
| [query.head_roll_angle](queryfunctions/query_head_roll_angle.md)| Returns the roll angle of the head of the entity if it makes sense, else it returns 0.0. |
| [query.head_x_rotation](queryfunctions/query_head_x_rotation.md)| Takes one argument as a parameter. |
| [query.head_y_rotation](queryfunctions/query_head_y_rotation.md)| Takes one argument as a parameter. |
| [query.health](queryfunctions/query_health.md)| Returns the health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| [query.heartbeat_interval](queryfunctions/query_heartbeat_interval.md)| Returns the heartbeat interval of the actor in seconds. |
| [query.heartbeat_phase](queryfunctions/query_heartbeat_phase.md)| Returns the heartbeat phase of the actor. |
| [query.heightmap](queryfunctions/query_heightmap.md)| Queries Height Map |
| [query.hurt_direction](queryfunctions/query_hurt_direction.md)| Returns the hurt direction for the actor, otherwise returns 0. |
| [query.hurt_time](queryfunctions/query_hurt_time.md)| Returns the hurt time for the actor, otherwise returns 0. |
| [query.invulnerable_ticks](queryfunctions/query_invulnerable_ticks.md)| Returns the number of ticks of invulnerability the entity has left if it makes sense, else it returns 0.0. |
| [query.in_range](queryfunctions/query_in_range.md)| Requires 3 numerical arguments: some value, a minimum, and a maximum. |
| [query.is_admiring](queryfunctions/query_is_admiring.md)| Returns 1.0 if the entity is admiring, else it returns 0.0. |
| [query.is_alive](queryfunctions/query_is_alive.md)| Returns 1.0 if the entity is alive, and 0.0 if it's dead. |
| [query.is_angry](queryfunctions/query_is_angry.md)| Returns 1.0 if the entity is angry, else it returns 0.0. |
| [query.is_attached](queryfunctions/query_is_attached.md)| Returns 1.0 if the entity is attached to another entity (such as being held or worn), else it will return 0.0. |
| [query.is_attached_to_entity](queryfunctions/query_is_attached_to_entity.md)| Returns 1.0 if the actor is attached to an entity, else it will return 0.0. |
| [query.is_avoiding_block](queryfunctions/query_is_avoiding_block.md)| Returns 1.0 if the entity is fleeing from a block, else it returns 0.0. |
| [query.is_avoiding_mobs](queryfunctions/query_is_avoiding_mobs.md)| Returns 1.0 if the entity is fleeing from mobs, else it returns 0.0. |
| [query.is_baby](queryfunctions/query_is_baby.md)| Returns 1.0 if the entity is a baby, else it returns 0.0. |
| [query.is_breathing](queryfunctions/query_is_breathing.md)| Returns 1.0 if the entity is breathing, else it returns 0.0. |
| [query.is_bribed](queryfunctions/query_is_bribed.md)| Returns 1.0 if the entity has been bribed, else it returns 0.0. |
| [query.is_carrying_block](queryfunctions/query_is_carrying_block.md)| Returns 1.0 if the entity is carrying a block, else it returns 0.0. |
| [query.is_casting](queryfunctions/query_is_casting.md)| Returns 1.0 if the entity is casting, else it returns 0.0. |
| [query.is_celebrating](queryfunctions/query_is_celebrating.md)| Returns 1.0 if the entity is celebrating, else it returns 0.0. |
| [query.is_celebrating_special](queryfunctions/query_is_celebrating_special.md)| Returns 1.0 if the entity is doing a special celebration, else it returns 0.0. |
| [query.is_charged](queryfunctions/query_is_charged.md)| Returns 1.0 if the entity is charged, else it returns 0.0. |
| [query.is_charging](queryfunctions/query_is_charging.md)| Returns 1.0 if the entity is charging, else it returns 0.0. |
| [query.is_chested](queryfunctions/query_is_chested.md)| Returns 1.0 if the entity has chests attached to it, else it returns 0.0. |
| [query.is_cooldown_type](queryfunctions/query_is_cooldown_type.md)| Returns 1.0 if the specified held or worn item has the specified cooldown type name, otherwise returns 0.0. |
| [query.is_crawling](queryfunctions/query_is_crawling.md)| Returns 1.0 if the entity is crawling, else it returns 0.0 |
| [query.is_critical](queryfunctions/query_is_critical.md)| Returns 1.0 if the entity is critical, else it returns 0.0. |
| [query.is_croaking](queryfunctions/query_is_croaking.md)| Returns 1.0 if the entity is croaking, else it returns 0.0. |
| [query.is_dancing](queryfunctions/query_is_dancing.md)| Returns 1.0 if the entity is dancing, else it returns 0.0. |
| [query.is_delayed_attacking](queryfunctions/query_is_delayed_attacking.md)| Returns 1.0 if the entity is attacking using the delayed attack, else it returns 0.0. |
| [query.is_digging](queryfunctions/query_is_digging.md)| Returns 1.0 if the entity is digging, else it returns 0.0. |
| [query.is_eating](queryfunctions/query_is_eating.md)| Returns 1.0 if the entity is eating, else it returns 0.0. |
| [query.is_eating_mob](queryfunctions/query_is_eating_mob.md)| Returns 1.0 if the entity is eating a mob, else it returns 0.0. |
| [query.is_elder](queryfunctions/query_is_elder.md)| Returns 1.0 if the entity is an elder version of it, else it returns 0.0. |
| [query.is_emerging](queryfunctions/query_is_emerging.md)| Returns 1.0 if the entity is emerging, else it returns 0.0. |
| [query.is_emoting](queryfunctions/query_is_emoting.md)| Returns 1.0 if the entity is emoting, else it returns 0.0. |
| [query.is_enchanted](queryfunctions/query_is_enchanted.md)| Returns 1.0 if the entity is enchanted, else it returns 0.0. |
| [query.is_feeling_happy](queryfunctions/query_is_feeling_happy.md)| (No longer available in pack min_engine_version 1.20.50.) DEPRECATED after 1.20.40. |
| [query.is_fire_immune](queryfunctions/query_is_fire_immune.md)| Returns 1.0 if the entity is immune to fire, else it returns 0.0. |
| [query.is_first_person](queryfunctions/query_is_first_person.md)| Returns 1.0 if the entity is being rendered in first person mode, else it returns 0.0. |
| [query.is_ghost](queryfunctions/query_is_ghost.md)| Returns 1.0 if an entity is a ghost, else it returns 0.0. |
| [query.is_gliding](queryfunctions/query_is_gliding.md)| Returns 1.0 if the entity is gliding, else it returns 0.0. |
| [query.is_grazing](queryfunctions/query_is_grazing.md)| Returns 1.0 if the entity is grazing, or 0.0 if not. |
| [query.is_idling](queryfunctions/query_is_idling.md)| Returns 1.0 if the entity is idling, else it returns 0.0. |
| [query.is_ignited](queryfunctions/query_is_ignited.md)| Returns 1.0 if the entity is ignited, else it returns 0.0. |
| [query.is_illager_captain](queryfunctions/query_is_illager_captain.md)| Returns 1.0 if the entity is an illager captain, else it returns 0.0. |
| [query.is_interested](queryfunctions/query_is_interested.md)| Returns 1.0 if the entity is interested, else it returns 0.0. |
| [query.is_invisible](queryfunctions/query_is_invisible.md)| Returns 1.0 if the entity is invisible, else it returns 0.0. |
| [query.is_in_contact_with_water](queryfunctions/query_is_in_contact_with_water.md)| Returns 1.0 if the entity is in contact with any water (water, rain, splash water bottle), else it returns 0.0. |
| [query.is_in_lava](queryfunctions/query_is_in_lava.md)| Returns 1.0 if the entity is in lava, else it returns 0.0. |
| [query.is_in_love](queryfunctions/query_is_in_love.md)| Returns 1.0 if the entity is in love, else it returns 0.0. |
| [query.is_in_ui](queryfunctions/query_is_in_ui.md)| Returns 1.0 if the entity is rendered as part of the UI, else it returns 0.0. |
| [query.is_in_water](queryfunctions/query_is_in_water.md)| Returns 1.0 if the entity is in water, else it returns 0.0. |
| [query.is_in_water_or_rain](queryfunctions/query_is_in_water_or_rain.md)| Returns 1.0 if the entity is in water or rain, else it returns 0.0. |
| [query.is_item_equipped](queryfunctions/query_is_item_equipped.md)| Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if there is an item in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| [query.is_item_name_any](queryfunctions/query_is_item_name_any.md)| Takes an equipment slot name (see the replaceitem command) and an optional slot index value. |
| [query.is_jumping](queryfunctions/query_is_jumping.md)| Returns 1.0 if the entity is jumping, else it returns 0.0. |
| [query.is_jump_goal_jumping](queryfunctions/query_is_jump.goal_jumping.md)| Returns 1.0 if the entity is doing a jump goal jump, else it returns 0.0. |
| [query.is_laying_down](queryfunctions/query_is_laying_down.md)| Returns 1.0 if the entity is laying down, else it returns 0.0. |
| [query.is_laying_egg](queryfunctions/query_is_laying_egg.md)| Returns 1.0 if the entity is laying an egg, else it returns 0.0. |
| [query.is_leashed](queryfunctions/query_is_leashed.md)| Returns 1.0 if the entity is leashed to something, else it returns 0.0. |
| [query.is_levitating](queryfunctions/query_is_levitating.md)| Returns 1.0 if the entity is levitating, else it returns 0.0. |
| [query.is_lingering](queryfunctions/query_is_lingering.md)| Returns 1.0 if the entity is lingering, else it returns 0.0. |
| [query.is_local_player](queryfunctions/query_is_local_player.md)| Takes no arguments. |
| [query.is_moving](queryfunctions/query_is_moving.md)| Returns 1.0 if the entity is moving, else it returns 0.0. |
| [query.is_name_any](queryfunctions/query_is_name_any.md)| Takes one or more arguments. |
| [query.is_onfire](queryfunctions/query_is_onfire.md)| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| [query.is_on_fire](queryfunctions/query_is_on_fire.md)| Returns 1.0 if the entity is on fire, else it returns 0.0. |
| [query.is_on_ground](queryfunctions/query_is_on_ground.md)| Returns 1.0 if the entity is on the ground, else it returns 0.0. |
| [query.is_on_screen](queryfunctions/query_is_on_screen.md)| Returns 1.0 if this is called on an entity at a time when it is known if it is on screen, else it returns 0.0. |
| [query.is_orphaned](queryfunctions/query_is_orphaned.md)| Returns 1.0 if the entity is orphaned, else it returns 0.0. |
| [query.is_owner_identifier_any](queryfunctions/query_is_owner_identifier_any.md)| Takes one or more arguments. |
| [query.is_persona_or_premium_skin](queryfunctions/query_is_persona_or_premium_skin.md)| Returns 1.0 if the player has a persona or premium skin, else it returns 0.0. |
| [query.is_playing_dead](queryfunctions/query_is_playing_dead.md)| Returns 1.0 if the entity is playing dead, else it returns 0.0. |
| [query.is_powered](queryfunctions/query_is_powered.md)| Returns 1.0 if the entity is powered, else it returns 0.0. |
| [query.is_pregnant](queryfunctions/query_is_pregnant.md)| Returns 1.0 if the entity is pregnant, else it returns 0.0. |
| [query.is_ram_attacking](queryfunctions/query_is_ram_attacking.md)| Returns 1.0 if the entity is using a ram attack, else it returns 0.0. |
| [query.is_resting](queryfunctions/query_is_resting.md)| Returns 1.0 if the entity is resting, else it returns 0.0. |
| [query.is_riding](queryfunctions/query_is_riding.md)| Returns 1.0 if the entity is riding, else it returns 0.0. |
| [query.is_riding_any_entity_of_type](queryfunctions/query_is_riding_any_entity_of_type.md)| Returns whether or not the entity is currently riding an entity of any of the designated types. |
| [query.is_rising](queryfunctions/query_is_rising.md)| (No longer available in pack min_engine_version 1.20.50.) DEPRECATED after 1.20.40. |
| [query.is_roaring](queryfunctions/query_is_roaring.md)| Returns 1.0 if the entity is currently roaring, else it returns 0.0. |
| [query.is_rolling](queryfunctions/query_is_rolling.md)| Returns 1.0 if the entity is rolling, else it returns 0.0. |
| [query.is_saddled](queryfunctions/query_is_saddled.md)| Returns 1.0 if the entity has a saddle, else it returns 0.0. |
| [query.is_scared](queryfunctions/query_is_scared.md)| Returns 1.0 if the entity is scared, else it returns 0.0. |
| [query.is_scenting](queryfunctions/query_is_scenting.md)| (No longer available in pack min_engine_version 1.20.50.) DEPRECATED after 1.20.40. |
| [query.is_searching](queryfunctions/query_is_searching.md)| Returns 1.0 if the entity is searching, else it returns 0.0. |
| [query.is_selected_item](queryfunctions/query_is_selected_item.md)| Returns true if the player has selected an item in the inventory, else it returns 0.0. |
| [query.is_shaking](queryfunctions/query_is_shaking.md)| Returns 1.0 if the entity is casting, else it returns 0.0. |
| [query.is_shaking_wetness](queryfunctions/query_is_shaking_wetness.md)| Returns 1.0 if the entity is shaking water off, else it returns 0.0. |
| [query.is_sheared](queryfunctions/query_is_sheared.md)| Returns 1.0 if the entity is able to be sheared and is sheared, else it returns 0.0. |
| [query.is_shield_powered](queryfunctions/query_is_shield_powered.md)| Returns 1.0f if the entity has an active powered shield if it makes sense, else it returns 0.0. |
| [query.is_silent](queryfunctions/query_is_silent.md)| Returns 1.0 if the entity is silent, else it returns 0.0. |
| [query.is_sitting](queryfunctions/query_is_sitting.md)| Returns 1.0 if the entity is sitting, else it returns 0.0. |
| [query.is_sleeping](queryfunctions/query_is_sleeping.md)| Returns 1.0 if the entity is sleeping, else it returns 0.0. |
| [query.is_sneaking](queryfunctions/query_is_sneaking.md)| Returns 1.0 if the entity is sneaking, else it returns 0.0. |
| [query.is_sneezing](queryfunctions/query_is_sneezing.md)| Returns 1.0 if the entity is sneezing, else it returns 0.0. |
| [query.is_sniffing](queryfunctions/query_is_sniffing.md)| Returns 1.0 if the entity is sniffing, else it returns 0.0. |
| [query.is_sonic_boom](queryfunctions/query_is_sonic_boom.md)| Returns 1.0 if the entity is using sonic boom, else it returns 0.0. |
| [query.is_spectator](queryfunctions/query_is_spectator.md)| Returns 1.0 if the entity is spectator, else it returns 0.0. |
| [query.is_sprinting](queryfunctions/query_is_sprinting.md)| Returns 1.0 if the entity is sprinting, else it returns 0.0. |
| [query.is_stackable](queryfunctions/query_is_stackable.md)| Returns 1.0 if the entity is stackable, else it returns 0.0. |
| [query.is_stalking](queryfunctions/query_is_stalking.md)| Returns 1.0 if the entity is stalking, else it returns 0.0. |
| [query.is_standing](queryfunctions/query_is_standing.md)| Returns 1.0 if the entity is standing, else it returns 0.0. |
| [query.is_stunned](queryfunctions/query_is_stunned.md)| Returns 1.0 if the entity is currently stunned, else it returns 0.0. |
| [query.is_swimming](queryfunctions/query_is_swimming.md)| Returns 1.0 if the entity is swimming, else it returns 0.0. |
| [query.is_tamed](queryfunctions/query_is_tamed.md)| Returns 1.0 if the entity is tamed, else it returns 0.0. |
| [query.is_transforming](queryfunctions/query_is_transforming.md)| Returns 1.0 if the entity is transforming, else it returns 0.0. |
| [query.is_using_item](queryfunctions/query_is_using_item.md)| Returns 1.0 if the entity is using an item, else it returns 0.0. |
| [query.is_wall_climbing](queryfunctions/query_is_wall_climbing.md)| Returns 1.0 if the entity is climbing a wall, else it returns 0.0. |
| [query.item_in_use_duration](queryfunctions/query_item_in_use_duration.md)| Returns the amount of time an item has been in use in seconds up to the maximum duration, else 0.0 if it doesn't make sense. |
| [query.item_is_charged](queryfunctions/query_item_is_charged.md)| Takes one optional hand slot as a parameter (0 or 'main_hand' for main hand, 1 or 'off_hand' for off hand), and returns 1.0 if the item is charged in the requested slot (defaulting to the main hand if no parameter is supplied), otherwise returns 0.0. |
| [query.item_max_use_duration](queryfunctions/query_item_max_use_duration.md)| Returns the maximum amount of time the item can be used, else 0.0 if it doesn't make sense. |
| [query.item_remaining_use_duration](queryfunctions/query_item_remaining_use_duration.md)| Returns the amount of time an item has left to use, else 0.0 if it doesn't make sense.Item queried is specified by the slot name 'main_hand' or 'off_hand'.Time remaining is normalized using the normalization value, only if one is given, else it is returned in seconds. |
| [query.item_slot_to_bone_name](queryfunctions/query_item_slot_to_bone_name.md)| query.item_slot_to_bone_name requires one parameter: the name of the equipment slot. |
| [query.key_frame_lerp_time](queryfunctions/query_key_frame_lerp_time.md)| Returns the ratio between the previous and next key frames. |
| [query.last_frame_time](queryfunctions/query_last_frame_time.md)| Returns the time in *seconds* of the last frame. |
| [query.last_hit_by_player](queryfunctions/query_last_hit_by_player.md)| Returns 1.0 if the entity was last hit by the player, else it returns 0.0. |
| [query.last_input_mode_is_any](queryfunctions/query_last_input_mode_is_any.md)| Takes one or more arguments ('keyboard_and_mouse', 'touch', 'gamepad', or 'motion_controller'). |
| [query.leashed_entity_count](queryfunctions/query_leashed_entity_count.md)| Returns the number of entities for which this entity is the leash holder. |
| [query.lie_amount](queryfunctions/query_lie_amount.md)| Returns the lie down amount for the entity. |
| [query.life_span](queryfunctions/query_life_span.md)| Returns the limited life span of an entity, or 0.0 if it lives forever |
| [query.life_time](queryfunctions/query_life_time.md)| Returns the time in seconds since the current animation started, else 0.0 if not called within an animation. |
| [query.log](queryfunctions/query_log.md)| debug log a value to the content log |
| [query.main_hand_item_max_duration](queryfunctions/query_main_hand_item_max_duration.md)| Returns the use time maximum duration for the main hand item if it makes sense, else it returns 0.0. |
| [query.main_hand_item_use_duration](queryfunctions/query_main_hand_item_use_duration.md)| Returns the use time for the main hand item. |
| [query.mark_variant](queryfunctions/query_mark_variant.md)| Returns the entity's mark variant |
| [query.maximum_frame_time](queryfunctions/query_maximum_frame_time.md)| Returns the time in *seconds* of the most expensive frame over the last 'n' frames. |
| [query.max_durability](queryfunctions/query_max_durability.md)| Returns the max durability an item can take. |
| [query.max_health](queryfunctions/query_max_health.md)| Returns the maximum health of the entity, or 0.0 if it doesn't make sense to call on this entity. |
| [query.max_trade_tier](queryfunctions/query_max_trade_tier.md)| Returns the maximum trade tier of the entity if it makes sense, else it returns 0.0 |
| [query.minimum_frame_time](queryfunctions/query_minimum_frame_time.md)| Returns the time in *seconds* of the least expensive frame over the last 'n' frames. |
| [query.model_scale](queryfunctions/query_model_scale.md)| Returns the scale of the current entity. |
| [query.modified_distance_moved](queryfunctions/query_modified_distance_moved.md)| Returns the total distance the entity has moved horizontally in meters (since the entity was last loaded, not necessarily since it was originally created) modified along the way by status flags such as is_baby or on_fire. |
| [query.modified_move_speed](queryfunctions/query_modified_move_speed.md)| Returns the current walk speed of the entity modified by status flags such as is_baby or on_fire. |
| [query.moon_brightness](queryfunctions/query_moon_brightness.md)| Returns the brightness of the moon (FULL_MOON=1.0, WANING_GIBBOUS=0.75, FIRST_QUARTER=0.5, WANING_CRESCENT=0.25, NEW_MOON=0.0, WAXING_CRESCENT=0.25, LAST_QUARTER=0.5, WAXING_GIBBOUS=0.75). |
| [query.moon_phase](queryfunctions/query_moon_phase.md)| Returns the phase of the moon (FULL_MOON=0, WANING_GIBBOUS=1, FIRST_QUARTER=2, WANING_CRESCENT=3, NEW_MOON=4, WAXING_CRESCENT=5, LAST_QUARTER=6, WAXING_GIBBOUS=7). |
| [query.movement_direction](queryfunctions/query_movement.direction.md)| Returns the specified axis of the normalized position delta of the entity. |
| [query.noise](queryfunctions/query_noise.md)| Queries Perlin Noise Map |
| [query.on_fire_time](queryfunctions/query_on_fire_time.md)| Returns the time that the entity is on fire, else it returns 0.0. |
| [query.out_of_control](queryfunctions/query_out_of_control.md)| Returns 1.0 if the entity is out of control, else it returns 0.0. |
| [query.overlay_alpha](queryfunctions/query_overlay_alpha.md)| DEPRECATED (Do not use - this function is deprecated and will be removed). |
| [query.owner_identifier](queryfunctions/query_owner_identifier.md)| DEPRECATED (Use query.is_owner_identifier_any instead if possible so names can be changed later without breaking content.) Returns the root actor identifier. |
| [query.player_level](queryfunctions/query_player.level.md)| Returns the players level if the actor is a player, otherwise returns 0. |
| [query.position](queryfunctions/query_position.md)| Returns the absolute position of an actor. |
| [query.position_delta](queryfunctions/query_position_delta.md)| Returns the position delta for an actor. |
| [query.previous_squish_value](queryfunctions/query_previous_squish_value.md)| Returns the previous squish value for the current entity, or 0.0 if this doesn't make sense. |
| [query.property](queryfunctions/query_property.md)| Takes one argument: the name of the property on the entity. |
| [query.relative_block_has_all_tags](queryfunctions/query_relative_block_has_all_tags.md)| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has all of the tags provided. |
| [query.relative_block_has_any_tag](queryfunctions/query_relative_block_has_any_tag.md)| Takes an entity-relative position and one or more tag names, and returns either 0 or 1 based on if the block at that position has any of the tags provided. |
| [query.remaining_durability](queryfunctions/query_remaining_durability.md)| Returns how much durability an item has remaining. |
| [query.rider_body_x_rotation](queryfunctions/query_rider_body_x_rotation.md)| Returns the body pitch world-rotation of a valid rider at the provided index if called on an entity, else it returns 0.0. |
| [query.rider_body_y_rotation](queryfunctions/query_rider_body_y_rotation.md)| Returns the body yaw world-rotation of a valid rider at the provided index if called on an entity, else it returns 0.0. |
| [query.rider_head_x_rotation](queryfunctions/query_rider_head_x_rotation.md)| Takes one argument as a parameter. |
| [query.rider_head_y_rotation](queryfunctions/query_rider_head_y_rotation.md)| Takes one or two arguments as parameters. |
| [query.ride_body_x_rotation](queryfunctions/query_ride_body_x_rotation.md)| Returns the body pitch world-rotation of the ride an entity, else it returns 0.0. |
| [query.ride_body_y_rotation](queryfunctions/query_ride_body_y_rotation.md)| Returns the body yaw world-rotation of the ride of on an entity, else it returns 0.0. |
| [query.ride_head_x_rotation](queryfunctions/query_ride_head_x_rotation.md)| Returns the head x world-rotation of the ride of an entity, else it returns 0.0. |
| [query.ride_head_y_rotation](queryfunctions/query_ride_head_y_rotation.md)| Takes one optional argument as a parameter. |
| [query.roll_counter](queryfunctions/query_roll_counter.md)| Returns the roll counter of the entity. |
| [query.rotation_to_camera](queryfunctions/query_rotation_to_camera.md)| Returns the rotation required to aim at the camera. |
| [query.scoreboard](queryfunctions/query_scoreboard.md)| Takes one argument - the name of the scoreboard entry for this entity. |
| [query.server_memory_tier](queryfunctions/query_server_memory_tier.md)| Returns a number representing the server RAM memory tier, 0 = 'SuperLow', 1 = 'Low', 2 = 'Mid', 3 = 'High', or 4 = 'SuperHigh'. |
| [query.shake_angle](queryfunctions/query_shake_angle.md)| Returns the shaking angle of the entity if it makes sense, else it returns 0.0. |
| [query.shake_time](queryfunctions/query_shake_time.md)| Returns the shake time of the entity. |
| [query.shield_blocking_bob](queryfunctions/query_shield_blocking_bob.md)| Returns the how much the offhand shield should translate down when blocking and being hit. |
| [query.show_bottom](queryfunctions/query_show_bottom.md)| Returns 1.0 if we render the entity's bottom, else it returns 0.0. |
| [query.sit_amount](queryfunctions/query_sit_amount.md)| Returns the current sit amount of the entity. |
| [query.skin_id](queryfunctions/query_skin_id.md)| Returns the entity's skin ID |
| [query.sleep_rotation](queryfunctions/query_sleep_rotation.md)| Returns the rotation of the bed the player is sleeping on. |
| [query.sneeze_counter](queryfunctions/query_sneeze_counter.md)| Returns the sneeze counter of the entity. |
| [query.spellcolor](queryfunctions/query_spellcolor.md)| Returns a struct representing the entity spell color for the specified entity. |
| [query.standing_scale](queryfunctions/query_standing_scale.md)| Returns the scale of how standing up the entity is. |
| [query.state_time](queryfunctions/query_state_time.md)| Only valid in an animation controller. |
| [query.structural_integrity](queryfunctions/query_structural_integrity.md)| Returns the structural integrity for the actor, otherwise returns 0. |
| [query.surface_particle_color](queryfunctions/query_surface_particle_color.md)| Returns the particle color for the block located in the surface below the actor (scanned up to 10 blocks down). |
| [query.surface_particle_texture_coordinate](queryfunctions/query_surface_particle_texture_coordinate.md)| Returns the texture coordinate for generating particles for the block located in the surface below the actor (scanned up to 10 blocks down) in a struct with 'u' and 'v' keys. |
| [query.surface_particle_texture_size](queryfunctions/query_surface_particle_texture_size.md)| Returns the texture size for generating particles for the block located in the surface below the actor (scanned up to 10 blocks down). |
| [query.swelling_dir](queryfunctions/query_swelling_dir.md)| Returns the swelling direction of the entity if it makes sense, else it returns 0.0. |
| [query.swell_amount](queryfunctions/query_swell_amount.md)| Returns how swollen the entity is. |
| [query.swim_amount](queryfunctions/query_swim_amount.md)| Returns the amount the current entity is swimming. |
| [query.tail_angle](queryfunctions/query_tail_angle.md)| Returns the angle of the tail of the entity if it makes sense, else it returns 0.0. |
| [query.target_x_rotation](queryfunctions/query_target_x_rotation.md)| Returns the x rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| [query.target_y_rotation](queryfunctions/query_target_y_rotation.md)| Returns the y rotation required to aim at the entity's current target if it has one, else it returns 0.0. |
| [query.timer_flag_1](queryfunctions/query_timer_flag_1.md)| Returns 1.0 if behavior.timer_flag_1 is running, else it returns 0.0. |
| [query.timer_flag_2](queryfunctions/query_timer_flag_2.md)| Returns 1.0 if behavior.timer_flag_2 is running, else it returns 0.0. |
| [query.timer_flag_3](queryfunctions/query_timer_flag_3.md)| Returns 1.0 if behavior.timer_flag_3 is running, else it returns 0.0. |
| [query.time_of_day](queryfunctions/query_time_of_day.md)| Returns the time of day (midnight=0.0, sunrise=0.25, noon=0.5, sunset=0.75) of the dimension the entity is in. |
| [query.time_since_last_vibration_detection](queryfunctions/query_time_since_last_vibration_detection.md)| Returns the time in seconds since the last vibration detected by the actor. |
| [query.time_stamp](queryfunctions/query_time_stamp.md)| Returns the current time stamp of the level |
| [query.total_emitter_count](queryfunctions/query_total_emitter_count.md)| Returns the total number of active emitters in the world. |
| [query.total_particle_count](queryfunctions/query_total_particle_count.md)| Returns the total number of active particles in the world. |
| [query.touch_only_affects_hotbar](queryfunctions/query_touch_only_affects_hotbar.md)| Returns 1.0 if the touch input only affects the touchbar, otherwise returns 0.0. |
| [query.trade_tier](queryfunctions/query_trade_tier.md)| Returns the trade tier of the entity if it makes sense, else it returns 0.0 |
| [query.unhappy_counter](queryfunctions/query_unhappy_counter.md)| Always returns zero. |
| [query.variant](queryfunctions/query_variant.md)| Returns the entity's variant index |
| [query.vertical_speed](queryfunctions/query_vertical_speed.md)| Returns the speed of the entity up or down in meters/second, where positive is up. |
| [query.walk_distance](queryfunctions/query_walk_distance.md)| Returns the total distance traveled by an entity while on the ground and not sneaking. |
| [query.wing_flap_position](queryfunctions/query_wing_flap_position.md)| Returns the wing flap position of the entity, or 0.0 if this doesn't make sense. |
| [query.wing_flap_speed](queryfunctions/query_wing_flap_speed.md)| Returns the wing flap speed of the entity, or 0.0 if this doesn't make sense. |
| [query.yaw_speed](queryfunctions/query_yaw_speed.md)| Returns the entity's yaw speed |