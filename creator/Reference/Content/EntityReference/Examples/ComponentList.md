---
author: mammerla
ms.author: mikeam
title: "Entity Components Documentation - Entity Components"
description: "A reference document describing all current Entity Components"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

| Entity Components | Description |
|:-----|:----------|
| [minecraft:addrider](EntityComponents/minecraftComponent_addrider.md)| Adds a rider to the entity. |
| [minecraft:admire_item](EntityComponents/minecraftComponent_admire_item.md)| Allows an entity to ignore attackable targets for a given duration |
| [minecraft:ageable](EntityComponents/minecraftComponent_ageable.md)| Adds a timer for the entity to grow up. |
| [minecraft:ambient_sound_interval](EntityComponents/minecraftComponent_ambient_sound_interval.md)| Delay for an entity playing its sound |
| [minecraft:anger_level](EntityComponents/minecraftComponent_anger_level.md)| Compels the entity to track anger towards a set of nuisances. |
| [minecraft:angry](EntityComponents/minecraftComponent_angry.md)| Defines an entity's 'angry' state using a timer. |
| [minecraft:annotation.break_door](EntityComponents/minecraftComponent_annotation_break_door.md)| Allows an entity to break doors, assuming that that flags set up for the component to use in navigation. |
| [minecraft:annotation.open_door](EntityComponents/minecraftComponent_annotation_open_door.md)| Allows the entity to open doors. |
| [minecraft:area_attack](EntityComponents/minecraftComponent_area_attack.md)| A component that does damage to entities that get within range. |
| [minecraft:attack](EntityComponents/minecraftComponent_attack.md)| Allows an entity to define an entity's melee attack and any additional effects on it's attack. |
| [minecraft:attack_cooldown](EntityComponents/minecraftComponent_attack_cooldown.md)| Adds a cooldown to an entity. |
| [Attack Damage](EntityComponents/minecraftComponent_attack_damage.md)| Specifies how much damage is dealt by the entity when it attacks. |
| [Balloonable](EntityComponents/minecraftComponent_balloonable.md)| Allows this entity to have a balloon attached and defines the conditions and events for this entity when is ballooned. |
| [minecraft:barter](EntityComponents/minecraftComponent_barter.md)| Enables the component to drop an item as a barter exchange. |
| [minecraft:block_climber](EntityComponents/minecraftComponent_block_climber.md)| Allows the player to detect and manuever on the scaffolding block. |
| [minecraft:block_sensor](EntityComponents/minecraftComponent_block_sensor.md)| Fires off a specified event when a block in the block list is broken within the sensor range. |
| [minecraft:body_rotation_always_follows_head](EntityComponents/minecraftComponent_body_rotation_always_follows_head.md)| Causes the entity's body to always be automatically rotated to align with the entity's head. <br>Does not override the "minecraft:body_rotation_blocked" component. |
| [minecraft:body_rotation_axis_aligned](EntityComponents/minecraftComponent_body_rotation_axis_aligned.md)| Causes the entity's body to automatically rotate to align with the nearest cardinal direction based on its current facing direction. <br>Combining this with the "minecraft:body_rotation_blocked" component will cause the entity to align to the nearest cardinal direction and remain fixed in that orientation, regardless of future changes in its facing direction. |
| [minecraft:body_rotation_blocked](EntityComponents/minecraftComponent_body_rotation_blocked.md)| When set, the entity will no longer visually rotate their body to match their facing direction. |
| [minecraft:boostable](EntityComponents/minecraftComponent_boostable.md)| Defines the conditions and behavior of a rideable entity's boost. |
| [minecraft:boss](EntityComponents/minecraftComponent_boss.md)| Defines the current state of the boss for updating the boss HUD. |
| [minecraft:break_blocks](EntityComponents/minecraftComponent_break_blocks.md)| Specifies the blocks that the entity can break as it moves around. |
| [minecraft:breathable](EntityComponents/minecraftComponent_breathable.md)| Defines what blocks this entity can breathe in and gives them the ability to suffocate. |
| [minecraft:breedable](EntityComponents/minecraftComponent_breedable.md)| Allows an entity to establish a way to get into the love state used for breeding. |
| [minecraft:bribeable](EntityComponents/minecraftComponent_bribeable.md)| Defines the way an entity can get into the 'bribed' state. |
| [minecraft:buoyant](EntityComponents/minecraftComponent_buoyant.md)| Enables an entity to float on the specified liquid blocks. |
| [minecraft:burns_in_daylight](EntityComponents/minecraftComponent_burns_in_daylight.md)| Specifies if a mob burns in daylight. |
| [minecraft:cannot_be_attacked](EntityComponents/minecraftComponent_cannot_be_attacked.md)| When set, blocks entities from attacking the owner entity unless they have the "minecraft:ignore_cannot_be_attacked" component. |
| [minecraft:can_climb](EntityComponents/minecraftComponent_can_climb.md)| Allows an entity to climb ladders. |
| [minecraft:can_fly](EntityComponents/minecraftComponent_can_fly.md)| Marks the entity as being able to fly, the pathfinder won't be restricted to paths where a solid block is required underneath it. |
| [minecraft:can_join_raid](EntityComponents/minecraftComponent_can_join_raid.md)| Determines that this entity can join an existing raid. |
| [minecraft:can_power_jump](EntityComponents/minecraftComponent_can_power_jump.md)| Allows the entity to power jump like the Horse does in Vanilla. |
| [minecraft:celebrate_hunt](EntityComponents/minecraftComponent_celebrate_hunt.md)| Specifies hunt celebration behaviour. |
| [minecraft:collision_box](EntityComponents/minecraftComponent_collision_box.md)| Sets the width and height of the Entity's collision box. |
| [minecraft:color](EntityComponents/minecraftComponent_color.md)| Defines the entity's main color. |
| [minecraft:color2](EntityComponents/minecraftComponent_color2.md)| Defines the entity's second texture color. |
| [minecraft:combat_regeneration](EntityComponents/minecraftComponent_combat_regeneration.md)| Gives `Regeneration I` and removes `Mining Fatigue` from the mob that kills the entity's attack target. |
| [minecraft:conditional_bandwidth_optimization](EntityComponents/minecraftComponent_conditional_bandwidth_optimization.md)| Defines the Conditional Spatial Update Bandwidth Optimizations of this entity. |
| [minecraft:custom_hit_test](EntityComponents/minecraftComponent_custom_hit_test.md)| List of hitboxes for melee and ranged hits against the entity. |
| [minecraft:damage_over_time](EntityComponents/minecraftComponent_damage_over_time.md)| Applies defined amount of damage to the entity at specified intervals. |
| [minecraft:damage_sensor](EntityComponents/minecraftComponent_damage_sensor.md)| Defines what events to call when this entity is damaged by specific entities or items. |
| [minecraft:dash](EntityComponents/minecraftComponent_dash.md)| Ability for a rideable entity to dash. |
| [minecraft:default_look_angle](EntityComponents/minecraftComponent_default_look_angle.md)| Sets this entity's default head rotation angle. |
| [minecraft:despawn](EntityComponents/minecraftComponent_despawn.md)| Despawns the Actor when the despawn rules or optional filters evaluate to true. |
| [minecraft:dimension_bound](EntityComponents/minecraftComponent_dimension_bound.md)| Prevents the entity from changing dimension through portals. |
| [minecraft:drying_out_timer](EntityComponents/minecraftComponent_drying_out_timer.md)| Adds a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire 'stopped_drying_out_event' |
| [minecraft:dweller](EntityComponents/minecraftComponent_dweller.md)| Compels an entity to join and migrate between villages and other dwellings. |
| [minecraft:economy_trade_table](EntityComponents/minecraftComponent_economy_trade_table.md)| Defines this entity's ability to trade with players. |
| [minecraft:entity_armor_equipment_slot_mapping](EntityComponents/minecraftComponent_entity_armor_equipment_slot_mapping.md)| It defines to which armor slot an item equipped to 'minecraft:equippable''s second slot should be equipped to. |
| [minecraft:entity_sensor](EntityComponents/minecraftComponent_entity_sensor.md)| A component that owns multiple subsensors, each one firing an event when a set of conditions are met by other entities within the defined range. |
| [minecraft:environment_sensor](EntityComponents/minecraftComponent_environment_sensor.md)| Creates a trigger based on environment conditions. |
| [minecraft:equipment](EntityComponents/minecraftComponent_equipment.md)| Sets the Equipment table to use for this Entity. |
| [minecraft:equippable](EntityComponents/minecraftComponent_equippable.md)| Defines an entity's behavior for having items equipped to it. |
| [minecraft:equip_item](EntityComponents/minecraftComponent_equip_item.md)| The entity puts on the desired equipment. |
| [minecraft:exhaustion_values](EntityComponents/minecraftComponent_exhaustion_values.md)| Defines how much exhaustion each player action should take. |
| [minecraft:experience_reward](EntityComponents/minecraftComponent_experience_reward.md)| . |
| [minecraft:explode](EntityComponents/minecraftComponent_explode.md)| Defines how the entity explodes. |
| [minecraft:fire_immune](EntityComponents/minecraftComponent_fire_immune.md)| Sets that this entity doesn't take damage from fire. |
| [minecraft:floats_in_liquid](EntityComponents/minecraftComponent_floats_in_liquid.md)| Sets that this entity can float in liquid blocks. |
| [minecraft:flocking](EntityComponents/minecraftComponent_flocking.md)| Allows entities to flock in groups in water or not. |
| [minecraft:flying_speed](EntityComponents/minecraftComponent_flying_speed.md)| Speed in Blocks that this entity flies at. |
| [minecraft:follow_range](EntityComponents/minecraftComponent_follow_range.md)| Defines the range, in blocks, that a mob will pursue a target. |
| [minecraft:friction_modifier](EntityComponents/minecraftComponent_friction_modifier.md)| Defines how much friction affects this entity. |
| [minecraft:game_event_movement_tracking](EntityComponents/minecraftComponent_game_event_movement_tracking.md)| Allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. |
| [minecraft:genetics](EntityComponents/minecraftComponent_genetics.md)| Defines the way a mob's genes and alleles are passed on to its offspring, and how those traits manifest in the child. |
| [minecraft:giveable](EntityComponents/minecraftComponent_giveable.md)| Defines sets of items that can be used to trigger events when used on this entity. |
| [minecraft:ground_offset](EntityComponents/minecraftComponent_ground_offset.md)| Sets the offset from the ground that the entity is actually at. |
| [minecraft:group_size](EntityComponents/minecraftComponent_group_size.md)| Keeps track of entity group size in the given radius. |
| [minecraft:grows_crop](EntityComponents/minecraftComponent_grows_crop.md)| Could increase crop growth when entity walks over crop |
| [minecraft:healable](EntityComponents/minecraftComponent_healable.md)| How entities heal |
| [Health](EntityComponents/minecraftComponent_health.md)| Default and maximum health settings |
| [minecraft:heartbeat](EntityComponents/minecraftComponent_heartbeat.md)| Defines the entity's heartbeat. |
| [minecraft:hide](EntityComponents/minecraftComponent_hide.md)| Moves to and hides at their owned POI or the closest nearby. |
| [minecraft:home](EntityComponents/minecraftComponent_home.md)| Saves a home position for when the the entity is spawned. |
| [minecraft:horse.jump_strength](EntityComponents/minecraftComponent_horse.jump_strength.md)| Determines the jump height for a horse or similar entity, like a donkey. |
| [minecraft:hurt_on_condition](EntityComponents/minecraftComponent_hurt_on_condition.md)| Defines a set of conditions under which an entity should take damage. |
| [minecraft:ignore_cannot_be_attacked](EntityComponents/minecraftComponent_ignore_cannot_be_attacked.md)| When set, blocks entities from attacking the owner entity unless they have the "minecraft:ignore_cannot_be_attacked" component. |
| [minecraft:input_air_controlled](EntityComponents/minecraftComponent_input_air_controlled.md)| When configured as a rideable entity, the entity will be controlled using WASD controls and mouse to move in three dimensions. |
| [minecraft:input_ground_controlled](EntityComponents/minecraftComponent_input_ground_controlled.md)| When configured as a rideable entity, the entity will be controlled using WASD controls. |
| [minecraft:inside_block_notifier](EntityComponents/minecraftComponent_inside_block_notifier.md)| Verifies whether the entity is inside any of the listed blocks. |
| [minecraft:insomnia](EntityComponents/minecraftComponent_insomnia.md)| Adds a timer since last rested to see if phantoms should spawn. |
| [minecraft:instant_despawn](EntityComponents/minecraftComponent_instant_despawn.md)| Despawns the Actor immediately. |
| [minecraft:interact](EntityComponents/minecraftComponent_interact.md)| Defines interactions with this entity. |
| [minecraft:inventory](EntityComponents/minecraftComponent_inventory.md)| Defines this entity's inventory properties. |
| [minecraft:is_baby](EntityComponents/minecraftComponent_is_baby.md)| Sets that this entity is a baby. |
| [minecraft:is_charged](EntityComponents/minecraftComponent_is_charged.md)| Sets that this entity is charged. |
| [minecraft:is_chested](EntityComponents/minecraftComponent_is_chested.md)| Sets that this entity is currently carrying a chest. |
| [minecraft:is_collidable](EntityComponents/minecraftComponent_is_collidable.md)| Allows other mobs to have vertical and horizontal collisions with this mob. |
| [minecraft:is_dyeable](EntityComponents/minecraftComponent_is_dyeable.md)| Allows dyes to be used on this entity to change its color. |
| [minecraft:is_hidden_when_invisible](EntityComponents/minecraftComponent_is_hidden_when_invisible.md)| The entity can hide from hostile mobs while invisible. |
| [minecraft:is_ignited](EntityComponents/minecraftComponent_is_ignited.md)| Sets that this entity is currently on fire. |
| [minecraft:is_illager_captain](EntityComponents/minecraftComponent_is_illager_captain.md)| Sets that this entity is an Illager Captain. |
| [minecraft:is_pregnant](EntityComponents/minecraftComponent_is_pregnant.md)| Sets that this entity is currently pregnant. |
| [minecraft:is_saddled](EntityComponents/minecraftComponent_is_saddled.md)| Sets that this entity is currently saddled. |
| [minecraft:is_shaking](EntityComponents/minecraftComponent_is_shaking.md)| Sets that this entity is currently shaking. |
| [minecraft:is_sheared](EntityComponents/minecraftComponent_is_sheared.md)| Sets that this entity is currently sheared. |
| [minecraft:is_stackable](EntityComponents/minecraftComponent_is_stackable.md)| Allows instances of this entity to have vertical and horizontal collisions with each other. |
| [minecraft:is_stunned](EntityComponents/minecraftComponent_is_stunned.md)| Sets that this entity is currently stunned. |
| [minecraft:is_tamed](EntityComponents/minecraftComponent_is_tamed.md)| Sets that this entity is currently tamed. |
| [minecraft:item_controllable](EntityComponents/minecraftComponent_item_controllable.md)| Defines what items can be used to control this entity while ridden. |
| [minecraft:item_hopper](EntityComponents/minecraftComponent_item_hopper.md)| Determines that this entity is an item hopper. |
| [minecraft:jump.dynamic](EntityComponents/minecraftComponent_jump.dynamic.md)| Defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob. |
| [minecraft:jump.static](EntityComponents/minecraftComponent_jump.static.md)| Gives the entity the ability to jump. |
| [minecraft:knockback_resistance](EntityComponents/minecraftComponent_knockback_resistance.md)| Compels an entity to resist being knocked backwards by a melee attack. |
| [minecraft:lava_movement](EntityComponents/minecraftComponent_lava_movement.md)| Allows a custom movement speed across lava blocks. |
| [minecraft:leashable](EntityComponents/minecraftComponent_leashable.md)| Describes how this mob can be leashed to other items |
| [minecraft:leashable_to](EntityComponents/minecraftComponent_leashable_to.md)| Allows players to leash entities to this entity, retrieve those already leashed to it, or free them using shears. |
| [minecraft:looked_at](EntityComponents/minecraftComponent_looked_at.md)| Defines the behavior when another entity looks at the owner entity. |
| [minecraft:loot](EntityComponents/minecraftComponent_loot.md)| Sets the loot table for what items this entity drops upon death. |
| [minecraft:managed_wandering_trader](EntityComponents/minecraftComponent_managed_wandering_trader.md)| Manages the entity's ability to trade. |
| [minecraft:mark_variant](EntityComponents/minecraftComponent_mark_variant.md)| Mark Variant is typically used as an additional per-type way (besides `variant`) to express a different visual form of the same mob. |
| [minecraft:mob_effect](EntityComponents/minecraftComponent_mob_effect.md)| A component that applies a mob effect to entities that get within range. |
| [minecraft:mob_effect_immunity](EntityComponents/minecraftComponent_mob_effect_immunity.md)| Entities with this component will have an immunity to the provided mob effects. |
| [minecraft:movement](EntityComponents/minecraftComponent_movement.md)| This component represents the foundational movement of an entity. |
| [minecraft:movement.amphibious](EntityComponents/minecraftComponent_movement.amphibious.md)| This move control allows the mob to swim in water and walk on land. |
| [minecraft:movement.basic](EntityComponents/minecraftComponent_movement.basic.md)| This component accents the movement of an entity. |
| [Dolphin Movement](EntityComponents/minecraftComponent_movement.dolphin.md)| This component can control how dolphins move, in a dolphin-esque style. |
| [minecraft:movement.fly](EntityComponents/minecraftComponent_movement.fly.md)| This move control causes the mob to fly. |
| [minecraft:movement.generic](EntityComponents/minecraftComponent_movement.generic.md)| This move control allows a mob to fly, swim, climb, etc. |
| [Glide Movement](EntityComponents/minecraftComponent_movement.glide.md)| This move control causes the mob to glide. |
| [minecraft:movement.hover](EntityComponents/minecraftComponent_movement.hover.md)| This move control causes the mob to hover. |
| [minecraft:movement.jump](EntityComponents/minecraftComponent_movement.jump.md)| Move control that causes the mob to jump as it moves with a specified delay between jumps. |
| [minecraft:movement.skip](EntityComponents/minecraftComponent_movement.skip.md)| This move control causes the mob to hop as it moves. |
| [minecraft:movement_sound_distance_offset](EntityComponents/minecraftComponent_movement.sound_distance_offset.md)| Sets the offset used to determine the next step distance for playing a movement sound. |
| [minecraft:movement.sway](EntityComponents/minecraftComponent_movement.sway.md)| This move control causes the mob to sway side to side giving the impression it is swimming. |
| [minecraft:nameable](EntityComponents/minecraftComponent_nameable.md)| Allows this entity to be named (e.g. |
| [minecraft:navigation.climb](EntityComponents/minecraftComponent_navigation.climb.md)| Allows this entity to generate paths that include vertical walls like the vanilla Spiders do. |
| [minecraft:navigation.float](EntityComponents/minecraftComponent_navigation.float.md)| Allows this entity to generate paths by flying around the air like the regular Ghast. |
| [minecraft:navigation.fly](EntityComponents/minecraftComponent_navigation.fly.md)| Allows this entity to generate paths in the air like the vanilla Parrots do. |
| [minecraft:navigation.generic](EntityComponents/minecraftComponent_navigation.generic.md)| Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block. |
| [minecraft:navigation.hover](EntityComponents/minecraftComponent_navigation.hover.md)| Allows this entity to generate paths in the air like the vanilla Bees do. |
| [minecraft:navigation.swim](EntityComponents/minecraftComponent_navigation.swim.md)| Allows this entity to generate paths that include water. |
| [minecraft:navigation.walk](EntityComponents/minecraftComponent_navigation.walk.md)| Walking style of the mob |
| [minecraft:out_of_control](EntityComponents/minecraftComponent_out_of_control.md)| Defines the entity's 'out of control' state. |
| [minecraft:peek](EntityComponents/minecraftComponent_peek.md)| Defines the entity's 'peek' behavior, defining the events that should be called during it. |
| [minecraft:persistent](EntityComponents/minecraftComponent_persistent.md)| Defines whether an entity should be persistent in the game world. |
| [minecraft:physics](EntityComponents/minecraftComponent_physics.md)| Defines physics properties of an actor, including if it is affected by gravity or if it collides with objects. |
| [minecraft:player.exhaustion](EntityComponents/minecraftComponent_player.exhaustion.md)| Defines the player's exhaustion level. |
| [minecraft:player.experience](EntityComponents/minecraftComponent_player.experience.md)| Defines how much experience each player action should take. |
| [minecraft:player.level](EntityComponents/minecraftComponent_player.level.md)| Defines the player's level. |
| [minecraft:player.saturation](EntityComponents/minecraftComponent_player.saturation.md)| Defines the player's need for food. |
| [minecraft:preferred_path](EntityComponents/minecraftComponent_preferred_path.md)| Specifies costing information for mobs that prefer to walk on preferred paths. |
| [minecraft:projectile](EntityComponents/minecraftComponent_projectile.md)| Allows the entity to be a thrown entity. |
| [minecraft:pushable](EntityComponents/minecraftComponent_pushable.md)| Defines what can push an entity between other entities and pistons. |
| [minecraft:push_through](EntityComponents/minecraftComponent_push_through.md)| Sets the distance through which the entity can push through. |
| [minecraft:raid_trigger](EntityComponents/minecraftComponent_raid_trigger.md)| Attempts to trigger a raid at the entity's location. |
| [minecraft:rail_movement](EntityComponents/minecraftComponent_rail_movement.md)| Defines the entity's movement on the rails. |
| [minecraft:rail_sensor](EntityComponents/minecraftComponent_rail_sensor.md)|  |
| [minecraft:ravager_blocked](EntityComponents/minecraftComponent_ravager_blocked.md)| Defines the ravager's response to their melee attack being blocked. |
| [minecraft:reflect_projectiles](EntityComponents/minecraftComponent_reflect_projectiles.md)| [EXPERIMENTAL] Allows an entity to reflect projectiles. |
| [minecraft:remove_in_peaceful](EntityComponents/minecraftComponent_remove_in_peaceful.md)| Denotes entities that are not allowed to exist in "Peaceful" difficulty. |
| [minecraft:renders_when_invisible](EntityComponents/minecraftComponent_renders_when_invisible.md)| When set, the entity will render even when invisible. |
| [minecraft:rideable](EntityComponents/minecraftComponent_rideable.md)| This entity can be ridden |
| [minecraft:scale](EntityComponents/minecraftComponent_scale.md)| Sets the entity's visual size. |
| [minecraft:scale_by_age](EntityComponents/minecraftComponent_scale_by_age.md)| Defines the entity's size interpolation based on the entity's age. |
| [minecraft:scheduler](EntityComponents/minecraftComponent_scheduler.md)| Fires off scheduled mob events at time of day events. |
| [minecraft:shareables](EntityComponents/minecraftComponent_shareables.md)| Defines a list of items the mob wants to share or pick up. |
| [minecraft:shooter](EntityComponents/minecraftComponent_shooter.md)| Defines the entity's ranged attack behavior. |
| [minecraft:sittable](EntityComponents/minecraftComponent_sittable.md)| Defines the entity's 'sit' state. |
| [minecraft:skin_id](EntityComponents/minecraftComponent_skin_id.md)| Skin ID value. |
| [minecraft:sound_volume](EntityComponents/minecraftComponent_sound_volume.md)| Sets the entity's base volume for sound effects. |
| [minecraft:spawn_entity](EntityComponents/minecraftComponent_spawn_entity.md)| Adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior). |
| [minecraft:spell_effects](EntityComponents/minecraftComponent_spell_effects.md)| Allows an entity to add or remove status effects from itself. |
| [minecraft:strength](EntityComponents/minecraftComponent_strength.md)| Defines the entity's strength to carry items. |
| [minecraft:suspect_tracking](EntityComponents/minecraftComponent_suspect_tracking.md)| Allows this entity to remember suspicious locations |
| [minecraft:tameable](EntityComponents/minecraftComponent_tameable.md)| This entity can be tamed |
| [minecraft:tamemount](EntityComponents/minecraftComponent_tamemount.md)| Allows the Entity to be tamed by mounting it. |
| [minecraft:target_nearby_sensor](EntityComponents/minecraftComponent_target_nearby_sensor.md)| Defines the entity's range within which it can see or sense other entities to target them. |
| [minecraft:teleport](EntityComponents/minecraftComponent_teleport.md)| Defines an entity's teleporting behavior. |
| [minecraft:tick_world](EntityComponents/minecraftComponent_tick_world.md)| Defines if the entity ticks the world and the radius around it to tick. |
| [minecraft:timer](EntityComponents/minecraftComponent_timer.md)| Adds a timer after which an event will fire. |
| [Trade Resupply](EntityComponents/minecraftComponent_trade_resupply.md)| Resupplies an entity's trade. |
| [minecraft:trade_table](EntityComponents/minecraftComponent_trade_table.md)| Defines this entity's ability to trade with players. |
| [minecraft:trail](EntityComponents/minecraftComponent_trail.md)| Causes an entity to leave a trail of blocks as it moves about the world. |
| [minecraft:transformation](EntityComponents/minecraftComponent_transformation.md)| Defines an entity's transformation from the current definition into another |
| [minecraft:transient](EntityComponents/minecraftComponent_transient.md)| An entity with this component will NEVER persist, and forever disappear when unloaded. |
| [Trust](EntityComponents/minecraftComponent_trust.md)| Allows this entity to trust multiple players. |
| [minecraft:trusting](EntityComponents/minecraftComponent_trusting.md)| Defines the rules for a mob to trust players. |
| [minecraft:type_family](EntityComponents/minecraftComponent_type_family.md)| Defines the families this entity belongs to. |
| [minecraft:underwater_movement](EntityComponents/minecraftComponent_underwater_movement.md)| Defines the speed with which an entity can move through water. |
| [minecraft:variable_max_auto_step](EntityComponents/minecraftComponent_variable_max_auto_step.md)| Entities with this component will have a maximum auto step height that is different depending on whether they are on a block that prevents jumping. |
| [minecraft:variant](EntityComponents/minecraftComponent_variant.md)| Variant is typically used as a per-type way to express a different visual form of the same mob. |
| [minecraft:vibration_damper](EntityComponents/minecraftComponent_vibration_damper.md)| Vibrations emitted by this entity will be ignored. |
| [minecraft:vibration_listener](EntityComponents/minecraftComponent_vibration_listener.md)| Allows the entity to listen to vibration events. |
| [minecraft:walk_animation_speed](EntityComponents/minecraftComponent_walk_animation_speed.md)| Sets the speed multiplier for this entity's walk animation speed. |
| [minecraft:wants_jockey](EntityComponents/minecraftComponent_wants_jockey.md)| Sets that this entity wants to become a jockey. |
| [minecraft:water_movement](EntityComponents/minecraftComponent_water_movement.md)|  |

## Internal/Deprecated Components
These components are either deprecated or internal to Minecraft and not usable in custom content.

| Entity Components | Description |
|:-----|:----------|
| [scaffolding_climber](EntityComponents/minecraftComponent_scaffolding_climber.md)| Allows the player to detect and manuever on the scaffolding block. |