---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - Component List
description: "A reference document listing all available entity components"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - Component list

Below is a list of all available Components within Minecraft: Bedrock Edition for use with Entity JSON files.

|Component |Description|
|:-----|:----------|
|[minecraft:addrider](EntityComponents/minecraftComponent_addrider.md)|`minecraft:addrider` adds a rider to the entity. |
|[minecraft:admire_item](EntityComponents/minecraftComponent_admire_item.md)|`minecraft:admire_item` compels an entity to ignore attackable targets for a given duration. |
|[minecraft:ageable](EntityComponents/minecraftComponent_ageable.md) |`minecraft:ageable` adds a timer for the entity to grow up. |
|[minecraft:ambient_sound_interval](EntityComponents/minecraftComponent_ambient_sound_interval.md) |`minecraft:ambient_sound_interval` will set the entity's delay between playing its ambient sound. |
|[minecraft:anger_level](EntityComponents/minecraftComponent_anger_level.md) |`minecraft:anger_level` compels the entity to track anger towards a set of nuisances.|
|[minecraft:angry](EntityComponents/minecraftComponent_angry.md) |`minecraft:angry` defines the entity's 'angry' state when using a timer.|
|[minecraft:annotation_break_door](EntityComponents/minecraftComponent_annotation_break_door.md) |`minecraft:annotation.break_door` compels an entity to break doors, presuming that the appropriate flags are set up for the component to use in navigation. |
|[minecraft:annotation_open_door](EntityComponents/minecraftComponent_annotation_open_door.md) |`minecraft:annotation.open_door` compels an entity to to open doors, assuming that the appropriate flags are set up for the component to use in navigation. |
|[minecraft:area_attack](EntityComponents/minecraftComponent_area_attack.md) |`minecraft:area_attack` is a component that does damage to entities within a defined range. |
|[minecraft:attack](EntityComponents/minecraftComponent_attack.md) |`minecraft:attack` compels an entity to define melee attacks and any additional effects on said attacks. |
|[minecraft:attack_cooldown](EntityComponents/minecraftComponent_attack_cooldown.md) |`minecraft:attack_cooldown` adds a cooldown to an entity.|
|[minecraft:attack_damage](EntityComponents/minecraftComponent_attack_damage.md) |`minecraft:attack_damage` specifies how much damage is dealt by the entity when it attacks.|
|[minecraft:balloonable](EntityComponents/minecraftComponent_balloonable.md) |`minecraft:balloonable` allows the entity to have a balloon attached, and defines the conditions and events for the entity when it is ballooned.|
|[minecraft:barter](EntityComponents/minecraftComponent_barter.md) |`minecraft:barter` enables the entity to drop an item as a barter exchange. |
|[minecraft:block_climber](EntityComponents/minecraftComponent_block_climber.md) |`minecraft:block_climber` allows the player to detect and maneuver on the scaffolding block. |
|[minecraft:block_sensor](EntityComponents/minecraftComponent_block_sensor.md) |`minecraft:block_sensor` initiates a specified event when a block in the block list is broken within the sensor range. |
|[minecraft:body_rotation_blocked](EntityComponents/minecraftComponent_body_rotation_blocked.md) |When set, the entity will no longer visually rotate their body to match their facing direction. |
|[minecraft:boostable](EntityComponents/minecraftComponent_boostable.md) |`minecraft:boostable` defines the conditions and behavior of a rideable entity's boost. |
|[minecraft:boss](EntityComponents/minecraftComponent_boss.md) |`minecraft:boss` defines the current state of the boss for updating the boss HUD. |
|[minecraft:break_blocks](EntityComponents/minecraftComponent_break_blocks.md) |`minecraft:break_blocks` specifies blocks that the entity can break as it moves around. |
|[minecraft:breathable](EntityComponents/minecraftComponent_breathable.md) |`minecraft:breathable` allows an entity to breathe in certain blocks and gives them the ability to suffocate. |
|[minecraft:breedable](EntityComponents/minecraftComponent_breedable.md) |`minecraft:breedable` compels an entity to establish a way to get into the `love` state used for breeding. |
|[minecraft:bribeable](EntityComponents/minecraftComponent_bribeable.md) |`minecraft:bribeable` compels an entity to establish a way to get into the `bribed` state.|
|[minecraft:buoyant](EntityComponents/minecraftComponent_buoyant.md) |`minecraft:buoyant` allows an entity to float on the specified liquid blocks. |
|[minecraft:burns_in_daylight](EntityComponents/minecraftComponent_burns_in_daylight.md) |`minecraft:burns_in_daylight` compels an entity to burn when it's daylight. |
|[minecraft:can_climb](EntityComponents/minecraftComponent_can_climb.md) |`minecraft:can_climb` allows an entity to climb ladders. |
|[minecraft:can_fly](EntityComponents/minecraftComponent_can_fly.md) |`minecraft:can_fly` allows an entity the ability to fly. |
|[minecraft:can_power_jump](EntityComponents/minecraftComponent_can_power_jump.md) |`minecraft:can_power_jump` allows an entity to power jump similar to the `horse` entity. |
|[minecraft:celebrate_hunt](EntityComponents/minecraftComponent_celebrate_hunt.md) |`minecraft:celebrate_hunt` compels an entity to celebrate when hunting a specific entity. |
|[minecraft:color](EntityComponents/minecraftComponent_color.md) |`minecraft:color` defines the entity's main color. |
|[minecraft:color2](EntityComponents/minecraftComponent_color2.md) |`minecraft:color2` defines the entity's second texture color. |
|[minecraft:combat_regeneration](EntityComponents/minecraftComponent_combat_regeneration.md) |`minecraft:combat_regeneration` gives Regeneration I and removes Mining Fatigue from the entity that kills the Actor's attack target. |
|[minecraft:conditional_bandwidth_optimization](EntityComponents/minecraftComponent_conditional_bandwidth_optimization.md) |`minecraft:conditional_bandwidth_optimization` defines the Conditional Spatial Update Bandwidth Optimizations of this entity. |
|[minecraft:custom_hit_test](EntityComponents/minecraftComponent_custom_hit_test.md) |`minecraft:custom_hit_test` defines a list of hitboxes for melee and ranged hits against the entity.|
|[minecraft:damage_absorption](EntityComponents/minecraftComponent_damage_absorption.md) | `minecraft:damage_absorption` allows an item to absorb damage that would otherwise be dealt to its wearer. For this to happen, the item needs to be equipped in an armor slot. The absorbed damage reduces the item's durability, with any excess damage being ignored. Because of this, the item also needs a `minecraft:durability` component.|
|[minecraft:damage_over_time](EntityComponents/minecraftComponent_damage_over_time.md) |`minecraft:damage_over_time` applies a defined amount of damage to the entity at specified intervals.|
|[minecraft:damage_sensor](EntityComponents/minecraftComponent_damage_sensor.md) |`minecraft:damage_sensor` defines what events to initiate when the entity is damaged by specific entities or items.|
|[minecraft:default_look_angle](EntityComponents/minecraftComponent_default_look_angle.md) |`minecraft:default_look_angle` sets the entity's default head rotation angle. |
|[minecraft:despawn](EntityComponents/minecraftComponent_despawn.md) |`minecraft:despawn` compels an entity despawn when the despawn rules or optional filters evaluate to true.|
|[minecraft:drying_out_timer](EntityComponents/minecraftComponent_drying_out_timer.md) |`minecraft:drying_out_timer` sets a timer for drying out that will count down and initiate 'dried_out_event' or will stop as soon as the entity gets under rain or water, initiating `stopped_drying_out_event`.|
|[minecraft:dweller](EntityComponents/minecraftComponent_dweller.md) |`minecraft:dweller` compels an entity to join and migrate between villages and other dwellings.|
|[minecraft:economy_trade_table](EntityComponents/minecraftComponent_economy_trade_table.md) |`minecraft:economy_trade_table` defines the entity's ability to trade with players.|
|[minecraft:entity_armor_equipment_slot_mapping](EntityComponents/minecraftComponent_entity_armor_equipment_slot_mapping.md) |`minecraft:entity_armor_equipment_slot_mapping` specifies the armor slot where an item in the `minecraft:equippable` second slot should be equipped.|
|[minecraft:entity_sensor](EntityComponents/minecraftComponent_entity_sensor.md) |`minecraft:entity_sensor` initiates an event when a set of conditions are met by other entities within the defined range.|
|[minecraft:environment_sensor](EntityComponents/minecraftComponent_environment_sensor.md) |`minecraft:environment_sensor` creates a trigger based on environment conditions.|
|[minecraft:equip_item](EntityComponents/minecraftComponent_equip_item.md) |`minecraft:equip_item` compels the entity to put on the desired equipment.|
|[minecraft:equipment](EntityComponents/minecraftComponent_equipment.md) |`minecraft:equipment` sets the equipment table to use for the entity. |
|[minecraft:equippable](EntityComponents/minecraftComponent_equippable.md) |`minecraft:equippable` defines an entity's behavior for having items equipped to it.|
|[minecraft:exhaustion_values](EntityComponents/minecraftComponent_exhaustion_values.md) |`minecraft:exhaustion_values` defines how much exhaustion each player action should take.|
|[minecraft:experience_reward](EntityComponents/minecraftComponent_experience_reward.md) |`minecraft:experience_reward` defines the amount of experience rewarded when the entity dies or is successfully bred.|
|[minecraft:explode](EntityComponents/minecraftComponent_explode.md) |`minecraft:explode` defines how the entity explodes.|
|[minecraft:fire_immune](EntityComponents/minecraftComponent_fire_immune.md) |`minecraft:fire_immune` allows an entity to take 0 damage from fire. |
|[minecraft:floats_in_liquid](EntityComponents/minecraftComponent_floats_in_liquid.md) |`minecraft:floats_in_liquid` allows the entity the ability to float in liquid blocks.|
|[minecraft:flocking](EntityComponents/minecraftComponent_flocking.md) |`minecraft:flocking` allows entities to flock in groups in water.|
|[minecraft:flying_speed](EntityComponents/minecraftComponent_flying_speed.md) |`minecraft:flying_speed` sets the speed, in blocks, this entity flies. |
|[minecraft:follow_range](EntityComponents/minecraftComponent_follow_range.md) |`minecraft:follow_range` defines the range of blocks the entity will pursue a target.|
|[minecraft:friction_modifier](EntityComponents/minecraftComponent_friction_modifier.md) |`minecraft:friction_modifier` defines how much friction affects the entity. |
|[minecraft:game_event_movement_tracking](EntityComponents/minecraftComponent_game_event_movement_tracking.md) |`minecraft:game_event_movement_tracking` compels an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through.|
|[minecraft:genetics](EntityComponents/minecraftComponent_genetics.md) |`minecraft:genetics` defines the way the entity's genes and alleles are passed on to its offspring, and how those traits manifest in the child. |
|[minecraft:giveable](EntityComponents/minecraftComponent_giveable.md) |`minecraft:giveable` defines sets of items that can be used to trigger events when used on the entity. The item will also be taken and placed in the entity's inventory.|
|[minecraft:ground_offset](EntityComponents/minecraftComponent_ground_offset.md) |`minecraft:ground_offset` sets the offset from the ground that the entity is actually at.|
|[minecraft:group_size](EntityComponents/minecraftComponent_group_size.md) |`minecraft:group_size` keeps track of entity group size in the given radius.|
|[minecraft:grows_crop](EntityComponents/minecraftComponent_grows_crop.md) |`minecraft:grows_crop` could increase crop growth when entity walks over crop.|
|[minecraft:healable](EntityComponents/minecraftComponent_healable.md) |`minecraft:healable` defines the interactions with the entity for healing it.|
|[minecraft:health](EntityComponents/minecraftComponent_health.md) |`minecraft:health` specifies how much life an entity has when spawned.|
|[minecraft:heartbeat](EntityComponents/minecraftComponent_heartbeat.md) |`minecraft:heartbeat` defines the entity heartbeat.|
|[minecraft:hide](EntityComponents/minecraftComponent_hide.md) |`minecraft:hide` compels the entity to move to and hide at their owned POI or the closest nearby.|
|[minecraft:home](EntityComponents/minecraftComponent_home.md) |`minecraft:home` saves a home point of interest for when the entity is spawned.|
|[minecraft:horse.jump_strength](EntityComponents/minecraftComponent_horse.jump_strength.md) |`minecraft:horse.jump_strength` defines the jump height for a horse or similar entity, such as a donkey.|
|[minecraft:hurt_on_condition](EntityComponents/minecraftComponent_hurt_on_condition.md) |`minecraft:hurt_on_condition` defines a set of conditions under which the entity should take damage.|
|[minecraft:input_ground_controlled](EntityComponents/minecraftComponent_input_ground_controlled.md) |`minecraft:input_ground_controlled` allows a ridable entity to be controlled using keyboard controls when ridden by a player. |
|[minecraft:inside_block_notifier](EntityComponents/minecraftComponent_inside_block_notifier.md) |`minecraft:inside_block_notifier` verifies whether the entity is inside any of the listed blocks.|
|[minecraft:insomnia](EntityComponents/minecraftComponent_insomnia.md) |`minecraft:insomnia` adds a timer since last rested to see if phantoms should spawn.|
|[minecraft:instant_despawn](EntityComponents/minecraftComponent_instant_despawn.md) |`minecraft:instant_despawn` despawns the entity immediately.|
|[minecraft:interact](EntityComponents/minecraftComponent_interact.md) |`minecraft:interact` defines interactions with the entity.|
|[minecraft:inventory](EntityComponents/minecraftComponent_inventory.md) |`minecraft:inventory` defines how an entity's inventory is managed.|
|[minecraft:is_baby](EntityComponents/minecraftComponent_is_baby.md) |`minecraft:is_baby` sets that the entity is a baby. |
|[minecraft:is_charged](EntityComponents/minecraftComponent_is_charged.md) |`minecraft:is_charged` sets that the entity is charged. |
|[minecraft:is_chested](EntityComponents/minecraftComponent_is_chested.md) |`minecraft:is_chested` sets that the entity is currently carrying a chest.|
|[minecraft:is_dyeable](EntityComponents/minecraftComponent_is_dyeable.md) |`minecraft:is_dyeable` allows the entity to be interacted with dyes to change its color. |
|[minecraft:is_hidden_when_invisible](EntityComponents/minecraftComponent_is_hidden_when_invisible.md) |`minecraft:is_hidden_when_invisible` sets that the entity can hide from hostile mobs while invisible. |
|[minecraft:is_ignited](EntityComponents/minecraftComponent_is_ignited.md) |`minecraft:is_ignited` sets that the entity is currently on fire. |
|[minecraft:is_illager_captain](EntityComponents/minecraftComponent_is_illager_captain.md) |`minecraft:is_illager_captain` sets that the entity is an illager captain. |
|[minecraft:is_saddled](EntityComponents/minecraftComponent_is_saddled.md) |`minecraft:is_saddled` sets that the entity is currently saddled. |
|[minecraft:is_shaking](EntityComponents/minecraftComponent_is_shaking.md) |`minecraft:is_shaking` sets an entity is currently shaking. |
|[minecraft:is_sheared](EntityComponents/minecraftComponent_is_sheared.md) |`minecraft:is_sheared` sets that this entity is currently sheared. |
|[minecraft:is_stackable](EntityComponents/minecraftComponent_is_stackable.md) |`minecraft:is_stackable` sets that this entity can be stacked. |
|[minecraft:is_stunned](EntityComponents/minecraftComponent_is_stunned.md) |`minecraft:is_stunned` sets that this entity is currently stunned. |
|[minecraft:is_tamed](EntityComponents/minecraftComponent_is_tamed.md) |`minecraft:is_tamed` sets that this entity is currently tamed. |
|[minecraft:item_controllable](EntityComponents/minecraftComponent_item_controllable.md) |`minecraft:item_controllable` allows an entity to be controlled by an item when riding this entity. |
|[minecraft:item_hopper](EntityComponents/minecraftComponent_item_hopper.md) |`minecraft:item_hopper` compels an entity to function like a `hopper` block.|
|[minecraft:jump.dynamic](EntityComponents/minecraftComponent_jump.dynamic.md) |`minecraft:jump.dynamic` defines a dynamic type jump control that will change jump properties based on the speed modifier of the entity.|
|[minecraft:jump.static](EntityComponents/minecraftComponent_jump.static.md) |`minecraft:jump.static` gives the entity the ability to jump.|
|[minecraft:knockback_resistance](EntityComponents/minecraftComponent_knockback_resistance.md) |`minecraft:knockback_resistance` allows an entity to resist being knocked backwards by a melee attack.|
|[minecraft:lava_movement](EntityComponents/minecraftComponent_lava_movement.md) |`minecraft:lava_movement` allows an entity a custom movement speed across lava blocks.|
|[minecraft:leashable](EntityComponents/minecraftComponent_leashable.md) |`minecraft:leashable` allows this entity to be leashed and defines the conditions and events for the entity when leashed.|
|[minecraft:lookat](EntityComponents/minecraftComponent_lookat.md) |`minecraft:lookat` defines the behavior when another entity looks at this entity.|
|[minecraft:loot](EntityComponents/minecraftComponent_loot.md) |`minecraft:loot` sets the loot table for what items the entity drops upon death. |
|[minecraft:managed_wandering_trader](EntityComponents/minecraftComponent_managed_wandering_trader.md) |`minecraft:managed_wandering_trader` manages the entity's ability to trade. |
|[minecraft:mark_variant](EntityComponents/minecraftComponent_mark_variant.md) |`minecraft:mark_variant` sets the variant for the entity to be used. |
|[minecraft:mob_effect](EntityComponents/minecraftComponent_mob_effect.md) |`minecraft:mob_effect` applies a mob effect to entities that get within range.|
|[minecraft:movement.amphibious](EntityComponents/minecraftComponent_movement.amphibious.md) |`minecraft:movement.amphibious` allows the entity to swim in water and walk on land.|
|[minecraft:movement.basic](EntityComponents/minecraftComponent_movement.basic.md) |`minecraft:movement.basic` defines the movement of the entity.|
|[minecraft:movement.dolphin](EntityComponents/minecraftComponent_movement.dolphin.md) |`minecraft:movement.dolphin` defines the movement of a dolphin-like entity.|
|[minecraft:movement.fly](EntityComponents/minecraftComponent_movement.fly.md) |`minecraft:movement.fly` causes the entity to fly.|
|[minecraft:movement.generic](EntityComponents/minecraftComponent_movement.generic.md) |`minecraft:movement.generic`allows the entity to fly, swim, climb, etc. |
|[minecraft:movement.glide](EntityComponents/minecraftComponent_movement.glide.md) |`minecraft:movement.glide`defines the movement control for flying entities with a gliding movement. |
|[minecraft:movement.hover](EntityComponents/minecraftComponent_movement.hover.md) |`minecraft:movement.hover` causes the entity to hover.|
|[minecraft:movement.jump](EntityComponents/minecraftComponent_movement.jump.md) |`minecraft:movement.jump` causes the entity to jump as it moves with a specified delay between jumps.|
|[minecraft:movement.skip](EntityComponents/minecraftComponent_movement.skip.md) |`minecraft:movement.skip` causes the entity to hop as it moves.|
|[minecraft:movement.sway](EntityComponents/minecraftComponent_movement.sway.md) |`minecraft:movement.sway` causes the entity to sway side to side giving the impression it is swimming.|
|[minecraft:nameable](EntityComponents/minecraftComponent_nameable.md) |`minecraft:nameable` allows the entity to be named (e.g. using a name tag).|
|[minecraft:navigation.climb](EntityComponents/minecraftComponent_navigation.climb.md) |`minecraft:navigation.climb` compels the entity to generate paths that include vertical walls like the vanilla Spiders do. |
|[minecraft:navigation.float](EntityComponents/minecraftComponent_navigation.float.md) |`minecraft:navigation.float` compels the entity to generate paths by flying around the air like the regular Ghast.|
|[minecraft:navigation.fly](EntityComponents/minecraftComponent_navigation.fly.md) |`minecraft:navigation.fly` compels the entity to generate paths in the air like the vanilla Parrots do.|
|[minecraft:navigation.generic](EntityComponents/minecraftComponent_navigation.generic.md) |`minecraft:navigation.generic` compels the entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block. |
|[minecraft:navigation.hover](EntityComponents/minecraftComponent_navigation.hover.md) |`minecraft:navigation.hover` compels the entity to generate paths in the air like the vanilla Bees do. Keeps them from falling from the skies and doing predictive movement.|
|[minecraft:navigation.swim](EntityComponents/minecraftComponent_navigation.swim.md) |`minecraft:navigation.swim` compels the entity to generate paths that include water.|
|[minecraft:navigation.walk](EntityComponents/minecraftComponent_navigation.walk.md) |`minecraft:navigation.walk` compels the entity to generate paths by walking around and jumping up and down a block.|
|[minecraft:out_of_control](EntityComponents/minecraftComponent_out_of_control.md) |`minecraft:out_of_control` defines the entity's 'out of control' state.|
|[minecraft:peek](EntityComponents/minecraftComponent_peek.md) |`minecraft:peek` defines the entity's `peek` behavior.|
|[minecraft:persistent](EntityComponents/minecraftComponent_persistent.md) |`minecraft:persistent` defines whether an entity should be persistent in the game world.|
|[minecraft:physics](EntityComponents/minecraftComponent_physics.md) |`minecraft:physics` defines physics properties of an entity, including if it is affected by gravity or if it collides with objects.|
|[minecraft:player.exhaustion](EntityComponents/minecraftComponent_player.exhaustion.md) |`minecraft:player.exhaustion` defines the player's exhaustion level.|
|[minecraft:player.experience](EntityComponents/minecraftComponent_player.experience.md) |`minecraft:player.experience` defines how much experience each player action should take.|
|[minecraft:player.level](EntityComponents/minecraftComponent_player.level.md) |`minecraft:player.level` defines the player's level.|
|[minecraft:player.saturation](EntityComponents/minecraftComponent_player.saturation.md) |`minecraft:player.saturation` defines the player's need for food.|
|[minecraft:preferred_path](EntityComponents/minecraftComponent_preferred_path.md) |`minecraft:preferred_path` specifies costing information for entities that prefer to walk on preferred paths.|
|[minecraft:projectile](EntityComponents/minecraftComponent_projectile.md) |`minecraft:projectile` allows the entity to be a thrown entity.|
|[minecraft:push_through](EntityComponents/minecraftComponent_push_through.md) |`minecraft:push_through` sets the distance the entity can push through. |
|[minecraft:pushable](EntityComponents/minecraftComponent_pushable.md) |`minecraft:pushable` defines what can push an entity between other entities and pistons.|
|[minecraft:raid_trigger](EntityComponents/minecraftComponent_raid_trigger.md) |`minecraft:raid_trigger`attempts to trigger a raid at the entity's location. |
|[minecraft:rail_movement](EntityComponents/minecraftComponent_rail_movement.md) |`minecraft:rail_movement` defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.|
|[minecraft:rail_sensor](EntityComponents/minecraftComponent_rail_sensor.md) |`minecraft:rail_sensor` defines the entity's behavior when passing over an activated or deactivated rail.|
|[minecraft:ravager_blocked](EntityComponents/minecraftComponent_ravager_blocked.md) |`minecraft:ravager_blocked` defines the ravager's response to their melee attack being blocked.|
|[minecraft:rideable](EntityComponents/minecraftComponent_rideable.md) |`minecraft:rideable` determines whether the entity can be ridden.|
|[minecraft:scaffolding_climber](EntityComponents/minecraftComponent_scaffolding_climber.md) |`minecraft:scaffolding_climber` allows the player to detect and manuever on the scaffolding block.|
|[minecraft:scale](EntityComponents/minecraftComponent_scale.md) |`minecraft:scale` sets the entity's visual size by scaling the model size. |
|[minecraft:scale_by_age](EntityComponents/minecraftComponent_scale_by_age.md) |`minecraft:scale_by_age` defines the entity's size interpolation based on the entity's age.|
|[minecraft:scheduler](EntityComponents/minecraftComponent_scheduler.md) |`minecraft:scheduler` initiates scheduled entity events at time of day events.|
|[minecraft:shareables](EntityComponents/minecraftComponent_shareables.md) |`minecraft:shareables` defines a list of items the entity wants to share or pick up.|
|[minecraft:shooter](EntityComponents/minecraftComponent_shooter.md) |`minecraft:shooter` defines the entity's ranged attack behavior. The "minecraft:behavior.ranged_attack" goal uses this component to determine which projectiles to shoot. |
|[minecraft:sittable](EntityComponents/minecraftComponent_sittable.md) |`minecraft:sittable` defines the entity's `sit` state.|
|[minecraft:skin_id](EntityComponents/minecraftComponent_skin_id.md) |`minecraft:skin_id` sets the entity's Skin ID value. Can be used to differentiate skins, such as base skins for villagers.|
|[minecraft:sound_volume](EntityComponents/minecraftComponent_sound_volume.md) |`minecraft:sound_volume` sets the entity's base volume for sound effects. |
|[minecraft:spawn_entity](EntityComponents/minecraftComponent_spawn_entity.md) |`minecraft:spawn_entity` adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).|
|[minecraft:strength](EntityComponents/minecraftComponent_strength.md) |`minecraft:strength` defines the entity's ability to carry items.|
|[minecraft:tameable](EntityComponents/minecraftComponent_tameable.md) |`minecraft:tameable` defines the rules for an entity to be tamed by the player.|
|[minecraft:tamemount](EntityComponents/minecraftComponent_tamemount.md) |`minecraft:tamemount` allows the entity to be tamed by mounting it. |
|[minecraft:target_nearby_sensor](EntityComponents/minecraftComponent_target_nearby_sensor.md) |`minecraft:target_nearby_sensor` defines the entity's range within which it can see or sense other entities to target them. |
|[minecraft:teleport](EntityComponents/minecraftComponent_teleport.md) |`minecraft:teleport` defines an entity's teleporting behavior.|
|[minecraft:tick_world](EntityComponents/minecraftComponent_tick_world.md) |`minecraft:tick_world` defines if the entity ticks the world and the radius around it to tick. |
|[minecraft:timer](EntityComponents/minecraftComponent_timer.md) |`minecraft:timer` adds a timer after which an event will initiate.|
|[minecraft:trade_table](EntityComponents/minecraftComponent_trade_table.md) |`minecraft:trade_table` defines this entity's ability to trade with players.|
|[minecraft:trail](EntityComponents/minecraftComponent_trail.md) |`minecraft:trail` causes an entity to leave a trail of blocks as it moves about the world. |
|[minecraft:transformation](EntityComponents/minecraftComponent_transformation.md) |`minecraft:transformation` defines an entity's transformation from the current definition into another.|
|[minecraft:trust](EntityComponents/minecraftComponent_trust.md) |`minecraft:trust` allows the entity to trust one or more players.|
|[minecraft:trusting](EntityComponents/minecraftComponent_trusting.md) |`minecraft:trusting` defines the rules for an entity to trust players. |
|[minecraft:type_family](EntityComponents/minecraftComponent_type_family.md) |`minecraft:type_family` defines the families the entity belongs to. |
|[minecraft:underwater_movement](EntityComponents/minecraftComponent_underwater_movement.md) |`minecraft:underwater_movement` defines the speed an entity can move in the water. |
|[minecraft:variant](EntityComponents/minecraftComponent_variant.md) |`minecraft:variant` is used to differentiate the component group of a variant of an entity from others, such as `ocelot`, `villager` and `horse`. |
|[minecraft:walk_animation_speed](EntityComponents/minecraftComponent_walk_animation_speed.md) |`minecraft:walk_animation_speed` sets the speed multiplier for the entity's walk animation speed. |
|[minecraft:wants_jockey](EntityComponents/minecraftComponent_wants_jockey.md) |`minecraft:wants_jockey` sets that the entity wants to become a jockey. |
|[minecraft:water_movement](EntityComponents/minecraftComponent_water_movement.md) |`minecraft:water_movement` defines the speed with which an entity can move through water. |
|[minecraft:variable_max_auto_step](EntityComponents/minecraftComponent_variable_max_auto_step.md) |`minecraft:variable_max_auto_step` defines a maximum auto step height that is different depending on whether the entity is on a block that prevents jumping. |
