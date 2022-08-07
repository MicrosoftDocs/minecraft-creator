---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - Component List
ms.prod: gaming
---

# Entity Documentation - Component list

Below is a list of all the available Components within Minecraft: Bedrock Edition for use with Entity JSON files.

|Component |Description|
|:-----|:----------|
|[minecraft:addrider](EntityComponents/minecraftComponent_addrider.md)|`minecraft:addrider` adds a rider to the entity. |
|[minecraft:admire_item](EntityComponents/minecraftComponent_admire_item.md)|`minecraft:admire_item` allows an entity to ignore attackable targets for a given duration. |
|[minecraft:ageable](EntityComponents/minecraftComponent_ageable.md) |`minecraft:ageable` will add a timer for the entity to grow up. It can be accelerated by giving the entity the items it likes as defined by `feedItems`. |
|[minecraft:angry](EntityComponents/minecraftComponent_angry.md) |`minecraft:angry` defines the entity's 'angry' state using a timer.|
|[minecraft:annotation_break_door](EntityComponents/minecraftComponent_annotation_break_door.md) |`minecraft:annotation.break_door` allows an entity to break doors, assuming that that flags set up for the component to use in navigation. |
|[minecraft:annotation_open_door](EntityComponents/minecraftComponent_annotation_open_door.md) |`minecraft:annotation.open_door` allows an entity to to open doors, assuming that that flags set up for the component to use in navigation. |
|[minecraft:area_attack](EntityComponents/minecraftComponent_area_attack.md) |`minecraft:area_attack` is a component that does damage to entities that get within range. |
|[minecraft:attack_cooldown](EntityComponents/minecraftComponent_attack_cooldown.md) |`minecraft:attack_cooldown` adds a cooldown to an entity. The intention of this cooldown is to be used to prevent the entity from attempting to acquire new attack targets.|
|[minecraft:barter](EntityComponents/minecraftComponent_barter.md) |`minecraft:barter` enables the component to drop an item as a barter exchange. |
|[minecraft:block_climber](EntityComponents/minecraftComponent_block_climber.md) |`minecraft:block_climber` allows the player to detect and maneuver on the scaffolding block. |
|[minecraft:block_sensor](EntityComponents/minecraftComponent_block_sensor.md) |`minecraft:block_sensor` will fire off a specified event when a block in the block list is broken within the sensor range. |
|[minecraft:boostable](EntityComponents/minecraftComponent_boostable.md) |`minecraft:boostable` defines the conditions and behavior of a rideable entity's boost. |
|[minecraft:boss](EntityComponents/minecraftComponent_boss.md) |`minecraft:boss` defines the current state of the boss for updating the boss HUD. |
|[minecraft:break_blocks](EntityComponents/minecraftComponent_break_blocks.md) |`minecraft:break_blocks` specifies the blocks that the entity can break as it moves around. |
|[minecraft:breathable](EntityComponents/minecraftComponent_breathable.md) |`minecraft:breathable` allows an entity to breathe in certain blocks and gives them the ability to suffocate. |
|[minecraft:breedable](EntityComponents/minecraftComponent_breedable.md) |`minecraft:breedable` allows an entity to establish a way to get into the `love` state used for breeding. |
|[minecraft:bribeable](EntityComponents/minecraftComponent_bribeable.md) |`minecraft:bribeable` allows an entity to establish a way to get into the `bribed` state.|
|[minecraft:buoyant](EntityComponents/minecraftComponent_buoyant.md) |`minecraft:buoyant` allows an entity to float on the specified liquid blocks. |
|[minecraft:burns_in_daylight](EntityComponents/minecraftComponent_burns_in_daylight.md) |`minecraft:burns_in_daylight` allows an entity to burn when it's daylight. |
|[minecraft:celebrate_hunt](EntityComponents/minecraftComponent_celebrate_hunt.md) |`minecraft:celebrate_hunt` allows an entity to celebration when hunting a specific entity. |
|[minecraft:combat_regeneration](EntityComponents/minecraftComponent_combat_regeneration.md) |`minecraft:combat_regeneration` gives Regeneration I and removes Mining Fatigue from the mob that kills the Actor's attack target. |
|[minecraft:conditional_bandwidth_optimization](EntityComponents/minecraftComponent_conditional_bandwidth_optimization.md) |`minecraft:conditional_bandwidth_optimization` defines the Conditional Spatial Update Bandwidth Optimizations of this entity. |
|[minecraft:custom_hit_test](EntityComponents/minecraftComponent_custom_hit_test.md) |`minecraft:custom_hit_test` defines a list of hitboxes for melee and ranged hits against the entity.|
|[minecraft:damage_over_time](EntityComponents/minecraftComponent_damage_over_time.md) |`minecraft:damage_over_time` applies a defined amount of damage to the entity at specified intervals.|
|[minecraft:damage_sensor](EntityComponents/minecraftComponent_damage_sensor.md) |`minecraft:damage_sensor` defines what events to call when this entity is damaged by specific entities or items.|
|[minecraft:despawn](EntityComponents/minecraftComponent_despawn.md) |`minecraft:despawn` allows an entity despawn when the despawn rules or optional filters evaluate to true.|
|[minecraft:drying_out_timer](EntityComponents/minecraftComponent_drying_out_timer.md) |`minecraft:drying_out_timer` sets a timer for drying out that will count down and fire 'dried_out_event' or will stop as soon as the entity will get under rain or water and fire `stopped_drying_out_event`.|
|[minecraft:economy_trade_table](EntityComponents/minecraftComponent_economy_trade_table.md) |`minecraft:economy_trade_table` defines this entity's ability to trade with players.|
|[minecraft:entity_sensor](EntityComponents/minecraftComponent_entity_sensor.md) |`minecraft:entity_sensor` is a component that fires an event when a set of conditions are met by other entities within the defined range.|
|[minecraft:environment_sensor](EntityComponents/minecraftComponent_environment_sensor.md) |`minecraft:environment_sensor` creates a trigger based on environment conditions.|
|[minecraft:equip_item](EntityComponents/minecraftComponent_equip_item.md) |`minecraft:equip_item` causes the entity to put on the desired equipment.|
|[minecraft:equippable](EntityComponents/minecraftComponent_equippable.md) |`minecraft:equippable` defines an entity's behavior for having items equipped to it.|
|[minecraft:experience_reward](EntityComponents/minecraftComponent_experience_reward.md) |`minecraft:experience_reward` defines the amount of experience rewarded when the entity dies or is successfully bred.|
|[minecraft:explode](EntityComponents/minecraftComponent_explode.md) |`minecraft:explode` defines how the entity explodes.|
|[minecraft:flocking](EntityComponents/minecraftComponent_flocking.md) |`minecraft:flocking` allows entities to flock in groups in water or not.|
|[minecraft:game_event_movement_tracking](EntityComponents/minecraftComponent_game_event_movement_tracking.md) |`minecraft:game_event_movement_tracking` allows an entity to emit `entityMove`, `swim` and `flap` game events, depending on the block the entity is moving through. It is added by default to every mob. Add it again to override its behavior.|
|[minecraft:genetics](EntityComponents/minecraftComponent_genetics.md) |`minecraft:genetics` defines the way a mob's genes and alleles are passed on to it's offspring, and how those traits manifest in the child. |
|[minecraft:giveable](EntityComponents/minecraftComponent_giveable.md) |`minecraft:giveable` defines sets of items that can be used to trigger events when used on this entity. The item will also be taken and placed in the entity's inventory.|
|[minecraft:group_size](EntityComponents/minecraftComponent_group_size.md) |`minecraft:group_size` keeps track of entity group size in the given radius.|
|[minecraft:grows_crop](EntityComponents/minecraftComponent_grows_crop.md) |`minecraft:grows_crop` could increase crop growth when entity walks over crop.|
|[minecraft:healable](EntityComponents/minecraftComponent_healable.md) |`minecraft:healable` defines the interactions with this entity for healing it.|
|[minecraft:home](EntityComponents/minecraftComponent_home.md) |`minecraft:home` saves a home point of interest for when the the entity is spawned.|
|[minecraft:hurt_on_condition](EntityComponents/minecraftComponent_hurt_on_condition.md) |`minecraft:hurt_on_condition` defines a set of conditions under which an entity should take damage.|
|[minecraft:inside_block_notifier](EntityComponents/minecraftComponent_inside_block_notifier.md) |`minecraft:inside_block_notifier` verifies whether the entity is inside any of the listed blocks.|
|[minecraft:insomnia](EntityComponents/minecraftComponent_insomnia.md) |`minecraft:insomnia` adds a timer since last rested to see if phantoms should spawn.|
|[minecraft:instant_despawn](EntityComponents/minecraftComponent_instant_despawn.md) |`minecraft:instant_despawn` despawns the Actor immediately.|
|[minecraft:interact](EntityComponents/minecraftComponent_interact.md) |`minecraft:interact` defines interactions with this entity.|
|[minecraft:inventory](EntityComponents/minecraftComponent_inventory.md) |`minecraft:inventory` defines how an entity's inventory is managed.|
|[minecraft:item_hopper](EntityComponents/minecraftComponent_item_hopper.md) |`minecraft:item_hopper` allows an entity to function like a `hopper` block.|
|[minecraft:jump.dynamic](EntityComponents/minecraftComponent_jump.dynamic.md) |`minecraft:jump.dynamic` defines a dynamic type jump control that will change jump properties based on the speed modifier of the mob.|
|[minecraft:jump.static](EntityComponents/minecraftComponent_jump.static.md) |`minecraft:jump.static` gives the entity the ability to jump.|
|[minecraft:leashable](EntityComponents/minecraftComponent_leashable.md) |`minecraft:leashable` allows this entity to be leashed and defines the conditions and events for this entity when is leashed.|
|[minecraft:lookat](EntityComponents/minecraftComponent_lookat.md) |`minecraft:lookat` defines the behavior when another entity looks at this entity.|
|[minecraft:managed_wandering_trader](EntityComponents/minecraftComponent_managed_wandering_trader.md) |`minecraft:managed_wandering_trader` manages the entity's ability to trade. |
|[minecraft:mob_effect](EntityComponents/minecraftComponent_mob_effect.md) |`minecraft:mob_effect` applies a mob effect to entities that get within range.|
|[minecraft:movement.amphibious](EntityComponents/minecraftComponent_movement.amphibious.md) |`minecraft:movement.amphibious` allows the mob to swim in water and walk on land.|
|[minecraft:movement.basic](EntityComponents/minecraftComponent_movement.basic.md) |`minecraft:movement.basic` defines the movement of an entity.|
|[minecraft:movement.fly](EntityComponents/minecraftComponent_movement.fly.md) |`minecraft:movement.fly` causes the mob to fly.|
|[minecraft:movement.generic](EntityComponents/minecraftComponent_movement.generic.md) |`minecraft:movement.generic`allows a mob to fly, swim, climb, etc. |
|[minecraft:movement.hover](EntityComponents/minecraftComponent_movement.hover.md) |`minecraft:movement.hover` causes the mob to hover.|
|[minecraft:movement.jump](EntityComponents/minecraftComponent_movement.jump.md) |`minecraft:movement.jump` causes the mob to jump as it moves with a specified delay between jumps.|
|[minecraft:movement.skip](EntityComponents/minecraftComponent_movement.skip.md) |`minecraft:movement.skip` causes the mob to hop as it moves.|
|[minecraft:movement.sway](EntityComponents/minecraftComponent_movement.sway.md) |`minecraft:movement.sway` causes the mob to sway side to side giving the impression it is swimming.|
|[minecraft:nameable](EntityComponents/minecraftComponent_nameable.md) |`minecraft:nameable` allows this entity to be named (e.g. using a name tag).|
|[minecraft:navigation.climb](EntityComponents/minecraftComponent_navigation.climb.md) |`minecraft:navigation.climb` allows this entity to generate paths that include vertical walls like the vanilla Spiders do. |
|[minecraft:navigation.float](EntityComponents/minecraftComponent_navigation.float.md) |`minecraft:navigation.float` allows this entity to generate paths by flying around the air like the regular Ghast.|
|[minecraft:navigation.fly](EntityComponents/minecraftComponent_navigation.fly.md) |`minecraft:navigation.fly` allows this entity to generate paths in the air like the vanilla Parrots do.|
|[minecraft:navigation.generic](EntityComponents/minecraftComponent_navigation.generic.md) |`minecraft:navigation.generic` allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block. |
|[minecraft:navigation.hover](EntityComponents/minecraftComponent_navigation.hover.md) |`minecraft:navigation.hover` allows this entity to generate paths in the air like the vanilla Bees do. Keeps them from falling out of the skies and doing predictive movement.|
|[minecraft:navigation.swim](EntityComponents/minecraftComponent_navigation.swim.md) |`minecraft:navigation.swim` allows this entity to generate paths that include water.|
|[minecraft:navigation.walk](EntityComponents/minecraftComponent_navigation.walk.md) |`minecraft:navigation.walk` allows this entity to generate paths by walking around and jumping up and down a block like regular mobs.|
|[minecraft:out_of_control](EntityComponents/minecraftComponent_out_of_control.md) |`minecraft:out_of_control` defines the entity's 'out of control' state.|
|[minecraft:peek](EntityComponents/minecraftComponent_peek.md) |`minecraft:peek` defines the entity's `peek` behavior, defining the events that should be called during it.|
|[minecraft:persistent](EntityComponents/minecraftComponent_persistent.md) |`minecraft:persistent` defines whether an entity should be persistent in the game world.|
|[minecraft:physics](EntityComponents/minecraftComponent_physics.md) |`minecraft:physics` defines physics properties of an entity, including if it is affected by gravity or if it collides with objects.|
|[minecraft:preferred_path](EntityComponents/minecraftComponent_preferred_path.md) |`minecraft:preferred_path` specifies costing information for mobs that prefer to walk on preferred paths.|
|[minecraft:projectile](EntityComponents/minecraftComponent_projectile.md) |`minecraft:projectile` allows the entity to be a thrown entity.|
|[minecraft:pushable](EntityComponents/minecraftComponent_pushable.md) |`minecraft:pushable` defines what can push an entity between other entities and pistons.|
|[minecraft:raid_trigger](EntityComponents/minecraftComponent_raid_trigger.md) |`minecraft:raid_trigger`attempts to trigger a raid at the entity's location. |
|[minecraft:rail_movement](EntityComponents/minecraftComponent_rail_movement.md) |`minecraft:rail_movement` defines the entity's movement on the rails. An entity with this component is only allowed to move on the rail.|
|[minecraft:rail_sensor](EntityComponents/minecraftComponent_rail_sensor.md) |`minecraft:rail_sensor` defines the entity's behavior when passing over an activated or deactivated rail.|
|[minecraft:ravager_blocked](EntityComponents/minecraftComponent_ravager_blocked.md) |`minecraft:ravager_blocked` defines the ravager's response to their melee attack being blocked.|
|[minecraft:rideable](EntityComponents/minecraftComponent_rideable.md) |`minecraft:rideable` determines whether this entity can be ridden. Allows specifying the different seat positions and quantity.|
|[minecraft:scaffolding_climber](EntityComponents/minecraftComponent_scaffolding_climber.md) |`minecraft:scaffolding_climber` allows the player to detect and manuever on the scaffolding block.|
|[minecraft:scale_by_age](EntityComponents/minecraftComponent_scale_by_age.md) |`minecraft:scale_by_age` defines the entity's size interpolation based on the entity's age.|
|[minecraft:scheduler](EntityComponents/minecraftComponent_scheduler.md) |`minecraft:scheduler` fires off scheduled mob events at time of day events.|
|[minecraft:shareables](EntityComponents/minecraftComponent_shareables.md) |`minecraft:shareables` defines a list of items the mob wants to share or pick up.|
|[minecraft:shooter](EntityComponents/minecraftComponent_shooter.md) |`minecraft:shooter` defines the entity's ranged attack behavior. |
|[minecraft:sittable](EntityComponents/minecraftComponent_sittable.md) |`minecraft:sittable` defines the entity's `sit` state.|
|[minecraft:spawn_entity](EntityComponents/minecraftComponent_spawn_entity.md) |`minecraft:spawn_entity` adds a timer after which this entity will spawn another entity or item (similar to vanilla's chicken's egg-laying behavior).|
|[minecraft:tameable](EntityComponents/minecraftComponent_tameable.md) |`minecraft:tameable` defines the rules for a mob to be tamed by the player.|
|[minecraft:tamemount](EntityComponents/minecraftComponent_tamemount.md) |`minecraft:tamemount` allows the Entity to be tamed by mounting it. |
|[minecraft:target_nearby_sensor](EntityComponents/minecraftComponent_target_nearby_sensor.md) |`minecraft:target_nearby_sensor` defines the entity's range within which it can see or sense other entities to target them. |
|[minecraft:teleport](EntityComponents/minecraftComponent_teleport.md) |`minecraft:teleport` defines an entity's teleporting behavior.|
|[minecraft:tick_world](EntityComponents/minecraftComponent_tick_world.md) |`minecraft:tick_world` defines if the entity ticks the world and the radius around it to tick. |
|[minecraft:timer](EntityComponents/minecraftComponent_timer.md) |`minecraft:timer` adds a timer after which an event will fire.|
|[minecraft:trade_table](EntityComponents/minecraftComponent_trade_table.md) |`minecraft:trade_table` defines this entity's ability to trade with players.|
|[minecraft:trail](EntityComponents/minecraftComponent_trail.md) |`minecraft:trail` causes an entity to leave a trail of blocks as it moves about the world. |
|[minecraft:transformation](EntityComponents/minecraftComponent_transformation.md) |`minecraft:transformation` defines an entity's transformation from the current definition into another.|
|[minecraft:trusting](EntityComponents/minecraftComponent_trusting.md) |`minecraft:trusting` defines the rules for a mob to trust players. |
|[minecraft:water_movement](EntityComponents/minecraftComponent_water_movement.md) |`minecraft:water_movement` defines the speed with which an entity can move through water. |
