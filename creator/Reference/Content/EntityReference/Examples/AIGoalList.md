---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - AI Goal List
ms.prod: gaming
---

# Entity Documentation - AI Goal list

Below is a list of all the available AI Goals within Minecraft: Bedrock Edition for use with Entity JSON files.

AI Goal |Description
:-----|:----------
[minecraft:behavior.admire_item](EntityGoals/minecraftBehavior_admire_item.md)|`minecraft:behavior.admire_item` allows an entity to admire an object they are holding.
[minecraft:behavior.avoid_block](EntityGoals/minecraftBehavior_avoid_block.md)|`minecraft:behavior.avoid_block` allows an entity to avoid certain blocks.
[minecraft:behavior.avoid_mob_type](EntityGoals/minecraftBehavior_avoid_mob_type.md)|`minecraft:behavior.avoid_mob_type` allows the entity to run away from other entities that meet the criteria specified.
[minecraft:behavior.barter](EntityGoals/minecraftBehavior_barter.md)|`minecraft:behavior.barter` allows an entity to drop an item in return after a player offers a trade by dropping a specific item near the entity.
[minecraft:behavior.beg](EntityGoals/minecraftBehavior_beg.md)|`minecraft:behavior.beg` allows an entity to react by tilting its head when a player is holding select items nearby.
[minecraft:behavior.break_door](EntityGoals/minecraftBehavior_break_door.md)|`minecraft:behavior.break_door` allows an entity to break down doors.
[minecraft:behavior.breed](EntityGoals/minecraftBehavior_breed.md)|`minecraft:behavior.breed` allows an entity to breed with other entities that have been assigned.
[minecraft:behavior.celebrate](EntityGoals/minecraftBehavior_celebrate.md)|`minecraft:behavior.celebrate` allows this entity to celebrate surviving a raid by making celebration sounds and jumping.
[minecraft:behavior.celebrate_survive](EntityGoals/minecraftBehavior_celebrate_survive.md)|`minecraft:behavior.celebrate_survive` allows this entity to celebrate surviving a raid by shooting fireworks.
[minecraft:behavior.charge_attack](EntityGoals/minecraftBehavior_charge_attack.md)|`minecraft:behavior.charge_attack` allows this entity to damage a target by using a running attack.
[minecraft:behavior.charge_held_item](EntityGoals/minecraftBehavior_charge_held_item.md)|`minecraft:behavior.charge_held_item` allows an entity to charge and use their held item.
[minecraft:behavior.circle_around_anchor](EntityGoals/minecraftBehavior_circle_around_anchor.md)|`minecraft:behavior.circle_around_anchor` causes an entity to circle around an anchor point placed near a point or target.
[minecraft:behavior.controlled_by_player](EntityGoals/minecraftBehavior_controlled_by_player.md)|`minecraft:behavior.controlled_by_player` allows the entity to be controlled by the player using an item in the item_controllable property. On every tick, the entity will attempt to rotate towards where the player is facing with the control item whilst simultaneously moving forward.
[minecraft:behavior.croak](EntityGoals/minecraftBehavior_croak.md)|`minecraft:behavior.croak` allows the entity to croak at a random time interval with configurable conditions.
[minecraft:behavior.defend_trusted_target](EntityGoals/minecraftBehavior_defend_trusted_target.md)|`minecraft:behavior.defend_trusted_target` allows an entity to react with an event when a trusted target is attacked.
[minecraft:behavior.defend_village_target](EntityGoals/minecraftBehavior_defend_village_target.md)|`minecraft:behavior.defend_village_target` allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village, this goal will cause the entity to attack the player regardless of filter conditions.
[minecraft:behavior.delayed_attack](EntityGoals/minecraftBehavior_delayed_attack.md)|`minecraft:behavior.delayed_attack` allows the entity to stay in a village and defend the village from aggressors. If a player is in bad standing with the village, this goal will cause the entity to attack the player regardless of filter conditions.
[minecraft:behavior.dig](EntityGoals/minecraftBehavior_dig.md)|`minecraft:behavior.dig` activates the "DIGGING" actor flag during the specified duration. Currently only Warden can use the dig goal.
[minecraft:behavior.drink_milk](EntityGoals/minecraftBehavior_drink_milk.md)|`minecraft:behavior.drink_milk` allows the mob to drink milk based on specified environment conditions.
[minecraft:behavior.door_interact](EntityGoals/minecraftBehavior_door_interact.md)|`minecraft:behavior.door_interact` allows an entity to interact with doors.
[minecraft:behavior.dragonchargeplayer](EntityGoals/minecraftBehavior_dragonchargeplayer.md)|`minecraft:behavior.dragonchargeplayer`  allows this entity to attack a player by charging at them. The player is chosen by the `minecraft:behavior.dragonscanning`. Can only be used by the Ender Dragon.
[minecraft:behavior.dragondeath](EntityGoals/minecraftBehavior_dragondeath.md)|`minecraft:behavior.dragondeath` controls the entity's death state and animation.
[minecraft:behavior.dragonflaming](EntityGoals/minecraftBehavior_dragonflaming.md)|`minecraft:behavior.dragonflaming` allows this entity to use a flame-breath attack. Can only be used by the Ender Dragon.
[minecraft:behavior.dragonholdingpattern](EntityGoals/minecraftBehavior_dragonholdingpattern.md)|`minecraft:behavior.dragonholdingpattern` allows an entity to fly around in a circle around the center podium located in `The End`.
[minecraft:behavior.dragonlanding](EntityGoals/minecraftBehavior_dragonlanding.md)|`minecraft:behavior.dragonlanding` allows an entity to stop flying and transition into perch mode.
[minecraft:behavior.dragonscanning](EntityGoals/minecraftBehavior_dragonscanning.md)|`minecraft:behavior.dragonscanning` allows an entity to look around for a player to attack while in perch mode.
[minecraft:behavior.dragonstrafeplayer](EntityGoals/minecraftBehavior_dragonstrafeplayer.md)|`minecraft:behavior.dragonstrafeplayer` allows this entity to fly around looking for a player to shoot fireballs at. Can only be used by the Ender Dragon.
[minecraft:behavior.dragontakeoff](EntityGoals/minecraftBehavior_dragontakeoff.md)|`minecraft:behavior.dragontakeoff` allows an entity to leave perch mode and go back to flying around.
[minecraft:behavior.drink_potion](EntityGoals/minecraftBehavior_drink_potion.md)|`minecraft:behavior.drink_potion` allows an entity to drink a potion as a reaction to an event or when set conditions are met.
[minecraft:behavior.drop_item_for](EntityGoals/minecraftBehavior_drop_item_for.md)|`minecraft:behavior.drop_item_for` allows the entity to move toward a target, and drop an item near the target. This goal requires a `minecraft:navigation` to execute.
[minecraft:behavior.eat_block](EntityGoals/minecraftBehavior_eat_block.md)|`minecraft:behavior.eat_block` allows the entity to consume a block, replace the eaten block with another block, and trigger an event as a result.
[minecraft:behavior.eat_carried_item](EntityGoals/minecraftBehavior_eat_carried_item.md)|`minecraft:behavior.eat_carried_item` allows an entity to eat any item in its inventory and gain the benefits of the item.
[minecraft:behavior.eat_mob](EntityGoals/minecraftBehavior_eat_mob.md)|`minecraft:behavior.eat_mob` allows the entity to eat a specified mob.
[minecraft:behavior.emerge](EntityGoals/minecraftBehavior_emerge.md)|`minecraft:behavior.emerge` activates the "EMERGING" actor flag during the specified duration and triggers "on_done" at the end.
[minecraft:behavior.enderman_leave_block](EntityGoals/minecraftBehavior_enderman_leave_block.md)|`minecraft:behavior.enderman_leave_block` allows the entity to drop the block they are currently holding.
[minecraft:behavior.enderman_take_block](EntityGoals/minecraftBehavior_enderman_take_block.md)|`minecraft:behavior.enderman_take_block` allows the entity to pick up a nearby block and carry the block in it's hands.
[minecraft:behavior.equip_item](EntityGoals/minecraftBehavior_equip_item.md)|`minecraft:behavior.equip_item` causes an entity to equip an item.
[minecraft:behavior.explore_outskirts](EntityGoals/minecraftBehavior_explore_outskirts.md)|`minecraft:behavior.explore_outskirts` allows an entity to travel beyond the bounds of a village and wander while looking for any points of interest.
[minecraft:behavior.fertilize_farm_block](EntityGoals/minecraftBehavior_fertilize_farm_block.md)|`minecraft:behavior.fertilize_farm_block` allows the mob to search within an area for a growable crop block. If found, the mob will use any available fertilizer in their inventory on the crop. This goal will not execute if the mob does not have a fertilizer item in its inventory.
[minecraft:behavior.find_cover](EntityGoals/minecraftBehavior_find_cover.md)|`minecraft:behavior.find_cover` allows an entity to locate shade in the world.
[minecraft:behavior.find_mount](EntityGoals/minecraftBehavior_find_mount.md)|`minecraft:behavior.find_mount` allows an entity to find another entity to mount.
[minecraft:behavior.find_underwater_treasure](EntityGoals/minecraftBehavior_find_underwater_treasure.md)|`minecraft:behavior.find_underwater_treasure` allows an entity to locate and travel to the nearest point of interest labeled as `ruin` or `shipwreck`.
[minecraft:behavior.flee_sun](EntityGoals/minecraftBehavior_flee_sun.md)|`minecraft:behavior.flee_sun` will make the entity actively avoid the sunlight.
[minecraft:behavior.float](EntityGoals/minecraftBehavior_float.md)|`minecraft:behavior.float` allows an entity to float on water.
[minecraft:behavior.float_wander](EntityGoals/minecraftBehavior_float_wander.md)|`minecraft:behavior.float_wander` allows an entity to float around in a random direction, similar to the `ghast` entity.
[minecraft:behavior.follow_caravan](EntityGoals/minecraftBehavior_follow_caravan.md)|`minecraft:behavior.follow_caravan` allows an entity to be lead with a `Lead` item. Leading the entity actually signals up to ten nearby entities that have been set in the `entity_types` variable to follow each other, forming a caravan.
[minecraft:behavior.follow_mob](EntityGoals/minecraftBehavior_follow_mob.md)|`minecraft:behavior.follow_mob` allows an entity to follow and gather around all types of mobs, both hostile and neutral mobs.
[minecraft:behavior.follow_owner](EntityGoals/minecraftBehavior_follow_owner.md)|`minecraft:behavior.follow_owner` allows an entity to follow a player marked as an owner.
[minecraft:behavior.follow_parent](EntityGoals/minecraftBehavior_follow_parent.md)|`minecraft:behavior.follow_parent` allows an entity that has been tagged as a baby to follow their parent around.
[minecraft:behavior.follow_target_captain](EntityGoals/minecraftBehavior_follow_target_captain.md)|`minecraft:behavior.follow_target_captain` allows an entity to follow a targeted captain.
[minecraft:behavior.go_and_give_items_to_noteblock](EntityGoals/minecraftBehavior_go_and_give_items_to_noteblock.md)|`minecraft:behavior.go_and_give_items_to_noteblock` means the entity will attempt to toss the items from its inventory to a nearby recently played noteblock.
[minecraft:behavior.go_and_give_items_to_owner](EntityGoals/minecraftBehavior_go_and_give_items_to_owner.md)|`minecraft:behavior.go_and_give_items_to_owner` means the entity will attempt to toss the items from its inventory to its owner.
[minecraft:behavior.go_home](EntityGoals/minecraftBehavior_go_home.md)|`minecraft:behavior.go_home` allows an entity to travel back to where it was spawned at and trigger events upon arrival.
[minecraft:behavior.guardian_attack](EntityGoals/minecraftBehavior_guardian_attack.md)|`minecraft:behavior.guardian_attack` allows this entity to use a laser beam attack. Can only be used by Guardians and Elder Guardians.
[minecraft:behavior.harvest_farm_block](EntityGoals/minecraftBehavior_harvest_farm_block.md)|`minecraft:behavior.harvest_farm_block` `minecraft:behavior.harvest_farm_block` allows the entity to search within an area for farmland with air above it. If found, the entity will replace the air block by planting a seed item from its inventory on the farmland block. This goal requires `minecraft:inventory` and `minecraft:navigation` to execute. This goal will not execute if the entity does not have an item in its inventory.
[minecraft:behavior.hide](EntityGoals/minecraftBehavior_hide.md)|`minecraft:behavior.hide` allows an entity to navigate to a specific point of interest that is tied to the entity.
[minecraft:behavior.hold_ground](EntityGoals/minecraftBehavior_hold_ground.md)|`minecraft:behavior.hold_ground` allows an entity to stop in their current location, turn to face a mob they are targeting and react with an event.
[minecraft:behavior.hurt_by_target](EntityGoals/minecraftBehavior_hurt_by_target.md)|`minecraft:behavior.hurt_by_target` allows an entity to react when hit by set target.
[minecraft:behavior.inspect_bookshelf](EntityGoals/minecraftBehavior_inspect_bookshelf.md)|`minecraft:behavior.inspect_bookshelf` allows an entity to look at and inspect a bookshelf.
[minecraft:behavior.investigate_suspicious_location](EntityGoals/minecraftBehavior_investigate_suspicious_location.md)|`minecraft:behavior.investigate_suspicious_location` allows the entity to move towards a "suspicious" position based on data gathered in minecraft:suspect_tracking.
[minecraft:behavior.jump_to_block](EntityGoals/minecraftBehavior_jump_to_block.md) |`minecraft:behavior.jump_to_block` allows the mob to search around for a block to jump to and then jump to that block.
[minecraft:behavior.knockback_roar](EntityGoals/minecraftBehavior_knockback_roar.md)|`minecraft:behavior.knockback_roar` allows an entity to emit a roar effect that knocks back other entities in a set radius from where the roar was emitted.
[minecraft:behavior.lay_down](EntityGoals/minecraftBehavior_lay_down.md)|`minecraft:behavior.lay_down` allows an entity randomly lay down for a period of time.
[minecraft:behavior.lay_egg](EntityGoals/minecraftBehavior_lay_egg.md)|`minecraft:behavior.lay_egg` allows an entity to lay eggs
[minecraft:behavior.leap_at_target](EntityGoals/minecraftBehavior_leap_at_target.md)|`minecraft:behavior.leap_at_target` allows an entity to jump towards a target.
[minecraft:behavior.look_at_entity](EntityGoals/minecraftBehavior_look_at_entity.md)|`minecraft:behavior.look_at_entity` allows an entity to look at a specific entity by rotating the head bone pose within a set limit.
[minecraft:behavior.look_at_player](EntityGoals/minecraftBehavior_look_at_player.md)|`minecraft:behavior.look_at_player` allows an entity to look at the player by rotating the head bone pose within a set limit.
[minecraft:behavior.look_at_target](EntityGoals/minecraftBehavior_look_at_target.md)|`minecraft:behavior.look_at_target` allows an entity to look at the target by rotating the head bone pose within a set limit.
[minecraft:behavior.look_at_trading_player](EntityGoals/minecraftBehavior_look_at_trading_player.md)|`minecraft:behavior.look_at_trading_player` allows an entity to look at the player that is currently trading with the entity.
[minecraft:behavior.make_love](EntityGoals/minecraftBehavior_make_love.md)|`minecraft:behavior.make_love` allows an entity to interact with other similar entities to produce an offspring.
[minecraft:behavior.melee_attack](EntityGoals/minecraftBehavior_melee_attack.md)|`minecraft:behavior.melee_attack` allows entities to make close combat melee attacks.
[minecraft:behavior.mingle](EntityGoals/minecraftBehavior_mingle.md)|`minecraft:behavior.mingle` allows an entity to navigate to the village bell point of interest and interact with other entities that have been assigned.
[minecraft:behavior.mount_pathing](EntityGoals/minecraftBehavior_mount_pathing.md)|`minecraft:behavior.mount_pathing` allows an entity to move around on it's own while mounted. `minecraft:behavior.mount_pathing` also will allow an entity to target another entity for an attack.
[minecraft:behavior.move_indoors](EntityGoals/minecraftBehavior_move_indoors.md)|`minecraft:behavior.move_indoors` allows an entity to move indoors.
[minecraft:behavior.move_outdoors](EntityGoals/minecraftBehavior_move_outdoors.md)|`minecraft:behavior.move_outdoors` allows an entity to move outdoors.
[minecraft:behavior.move_through_village](EntityGoals/minecraftBehavior_move_through_village.md)|`minecraft:behavior.move_through_village` can only be used by villagers. Allows the villagers to create paths around the village.
[minecraft:behavior.move_to_land](EntityGoals/minecraftBehavior_move_to_land.md)|`minecraft:behavior.move_to_land` allows an entity to move to land when in a non-land medium such as lava or water.
[minecraft:behavior.move_to_lava](EntityGoals/minecraftBehavior_move_to_lava.md)|`minecraft:behavior.move_to_lava` allows an entity to move to lava when on land.
[minecraft:behavior.move_to_liquid](EntityGoals/minecraftBehavior_move_to_liquid.md)|`minecraft:behavior.move_to_liquid` allows the mob to move into a liquid when on land.
[minecraft:behavior.move_to_random_block](EntityGoals/minecraftBehavior_move_to_random_block.md)|`minecraft:behavior.move_to_random_block` allows an entity to move to a random block within a set radius.
[minecraft:behavior.move_to_village](EntityGoals/minecraftBehavior_move_to_village.md)|`minecraft:behavior.move_to_village` allows an entity to travel to a random x,y,z coordinate in a village.
[minecraft:behavior.move_to_water](EntityGoals/minecraftBehavior_move_to_water.md)|`minecraft:behavior.move_to_water` allows an entity to move to water when on land.
[minecraft:behavior.move_towards_dwelling_restriction](EntityGoals/minecraftBehavior_move_towards_dwelling_restriction.md)|`minecraft:behavior.move_towards_dwelling_restriction` allows mobs with the dweller component to move toward their Village area that the mob should be restricted to.
[minecraft:behavior.move_towards_home_restriction](EntityGoals/minecraftBehavior_move_towards_home_restriction.md)|`minecraft:behavior.move_towards_home_restriction` allows mobs with the home component to move toward their pre-defined area that the mob should be restricted to.
[minecraft:behavior.move_towards_restriction](EntityGoals/minecraftBehavior_move_towards_restriction.md)|`minecraft:behavior.move_towards_restriction` allows mobs to move toward their pre-defined area that the mob should be restricted to.
[minecraft:behavior.move_towards_target](EntityGoals/minecraftBehavior_move_towards_target.md)|`minecraft:behavior.move_towards_target` allows an entity to move towards a target.
[minecraft:behavior.nap](EntityGoals/minecraftBehavior_nap.md)|`minecraft:behavior.nap` allows mobs to occasionally stop and take a nap under certain conditions.
[minecraft:behavior.nearest_attackable_target](EntityGoals/minecraftBehavior_nearest_attackable_target.md)|`minecraft:behavior.nearest_attackable_target` allows an entity to attack the closest target within a given subset of specific target types.
[minecraft:behavior.nearest_prioritized_attackable_target](EntityGoals/minecraftBehavior_nearest_prioritized_attackable_target.md)|`minecraft:behavior.nearest_prioritized_attackable_target` allows an entity to target and prioritize the nearest valid target.
[minecraft:behavior.ocelot_sit_on_block](EntityGoals/minecraftBehavior_ocelot_sit_on_block.md)|`minecraft:behavior.ocelot_sit_on_block` allows an entity to sit in place, similar to the ocelot entity animation pose.
[minecraft:behavior.ocelotattack](EntityGoals/minecraftBehavior_ocelotattack.md)|`minecraft:behavior.ocelotattack` allows an entity to attack by sneaking and pouncing.
[minecraft:behavior.offer_flower](EntityGoals/minecraftBehavior_offer_flower.md)|`minecraft:behavior.offer_flower` allows an entity to offer a flower to another entity.
[minecraft:behavior.open_door](EntityGoals/minecraftBehavior_open_door.md)|`minecraft:behavior.open_door` allows an entity to interact and open a door.
[minecraft:behavior.owner_hurt_by_target](EntityGoals/minecraftBehavior_owner_hurt_by_target.md)|`minecraft:behavior.owner_hurt_by_target` allows an entity to react when the owner is hit by a target.
[minecraft:behavior.owner_hurt_target](EntityGoals/minecraftBehavior_owner_hurt_target.md)|`minecraft:behavior.owner_hurt_target` allows an entity to react when the owner hits a target.
[minecraft:behavior.panic](EntityGoals/minecraftBehavior_panic.md)|`minecraft:behavior.panic` allows an entity to react when it receives damage.
[minecraft:behavior.peek](EntityGoals/minecraftBehavior_peek.md)|`minecraft:behavior.peek` allows an entity to peek out.
[minecraft:behavior.pet_sleep_with_owner](EntityGoals/minecraftBehavior_pet_sleep_with_owner.md)|`minecraft:behavior.pet_sleep_with_owner` allows an entity to sleep on a bed shared with its' owner.
[minecraft:behavior.pickup_items](EntityGoals/minecraftBehavior_pickup_items.md)|`minecraft:behavior.pickup_items` allows an entity to pick up selected items off the ground.
[minecraft:behavior.play](EntityGoals/minecraftBehavior_play.md)|`minecraft:behavior.play` allows an entity to play with entities that have been tagged as `baby`.
[minecraft:behavior.play_dead](EntityGoals/minecraftBehavior_play_dead.md) |`minecraft:behavior.play_dead` allows the mob to play dead when attacked by other entities. When playing dead, other entities will not target this mob.
[minecraft:behavior.player_ride_tamed](EntityGoals/minecraftBehavior_player_ride_tamed.md)|`minecraft:behavior.player_ride_tamed` allows an entity to be rideable after being tamed by a player.
[minecraft:behavior.raid_garden](EntityGoals/minecraftBehavior_raid_garden.md)|`minecraft:behavior.raid_garden` allows an entity to eat crops that have been planted in a farm.
[minecraft:behavior.ram_attack](EntityGoals/minecraftBehavior_ram_attack.md) |`minecraft:behavior.ram_attack` allows the mob to search for a random target and, if a direct path exists between the mob and the target, it will perform a charge. If the attack hits, the target will be knocked back based on the mob's speed.
[minecraft:behavior.random_breach](EntityGoals/minecraftBehavior_random_breach.md)|`minecraft:behavior.random_breach` allows an entity to breach the surface of the water at a random interval.
[minecraft:behavior.random_fly](EntityGoals/minecraftBehavior_random_fly.md)|`minecraft:behavior.random_fly` allows an entity to fly to a random spot
[minecraft:behavior.random_hover](EntityGoals/minecraftBehavior_random_hover.md)|`minecraft:behavior.random_hover` allows an entity to hover around in random locations.
[minecraft:behavior.random_look_around](EntityGoals/minecraftBehavior_random_look_around.md)|`minecraft:behavior.random_look_around` allows an entity to choose a random direction to look in for a random duration within a range.
[minecraft:behavior.random_look_around_and_sit](EntityGoals/minecraftBehavior_random_look_around_and_sit.md)|`minecraft:behavior.random_look_around_and_sit` allows an entity to sit in place and look around in different directions.
[minecraft:behavior.random_sitting](EntityGoals/minecraftBehavior_random_sitting.md)|`minecraft:behavior.random_sitting` allows an entity to stop and sit for a random duration of time.
[minecraft:behavior.random_stroll](EntityGoals/minecraftBehavior_random_stroll.md)|`minecraft:behavior.random_stroll` allows an entity to choose a random direction to walk towards.
[minecraft:behavior.random_swim](EntityGoals/minecraftBehavior_random_swim.md)|`minecraft:behavior.random_swim` allows an entity to swim in a random point in water.
[minecraft:behavior.ranged_attack](EntityGoals/minecraftBehavior_ranged_attack.md)|`minecraft:behavior.ranged_attack` allows an entity to attack by using ranged shots. `charge_shoot_trigger` must be greater than 0 to enable charged up burst-shot attacks.
[minecraft:behavior.receive_love](EntityGoals/minecraftBehavior_receive_love.md)|`minecraft:behavior.receive_love` allows an entity to mate with another similar entity when approached to breed.
[minecraft:behavior.restrict_open_door](EntityGoals/minecraftBehavior_restrict_open_door.md)|`minecraft:behavior.restrict_open_door` allows an entity to stay indoors while the sun is down.
[minecraft:behavior.restrict_sun](EntityGoals/minecraftBehavior_restrict_sun.md)|`minecraft:behavior.restrict_sun` allows an entity to actively avoid direct sunlight.
[minecraft:behavior.rise_to_liquid_level](EntityGoals/minecraftBehavior_rise_to_liquid_level.md)|`minecraft:behavior.rise_to_liquid_level` allows the mob to stay at a certain level when in liquid.
[minecraft:behavior.roar](EntityGoals/minecraftBehavior_roar.md)|`minecraft:behavior.roar` plays the provided sound and activates the "ROARING" actor flag during the specified duration.
[minecraft:behavior.roll](EntityGoals/minecraftBehavior_roll.md)|`minecraft:behavior.roll` allows an entity roll forward.
[minecraft:behavior.run_around_like_crazy](EntityGoals/minecraftBehavior_run_around_like_crazy.md)|`minecraft:behavior.run_around_like_crazy` allows an entity to run around without a set goal.
[minecraft:behavior.scared](EntityGoals/minecraftBehavior_scared.md)|`minecraft:behavior.scared` allows the a mob to become scared when the weather outside is thundering.
[minecraft:behavior.send_event](EntityGoals/minecraftBehavior_send_event.md)|`minecraft:behavior.send_event` allows an entity to send an event to another entity.
[minecraft:behavior.share_items](EntityGoals/minecraftBehavior_share_items.md)|`minecraft:behavior.share_items` allows an entity to share items they have in their inventory with other specific entities that have been defined.
[minecraft:behavior.silverfish_merge_with_stone](EntityGoals/minecraftBehavior_silverfish_merge_with_stone.md)|`minecraft:behavior.silverfish_merge_with_stone` allows an entity to enter a stone block.
[minecraft:behavior.silverfish_wake_up_friends](EntityGoals/minecraftBehavior_silverfish_wake_up_friends.md)|`minecraft:behavior.silverfish_wake_up_friends` allows an entity to alert other entities of the same family to leave a stone block.
[minecraft:behavior.skeleton_horse_trap](EntityGoals/minecraftBehavior_skeleton_horse_trap.md)|`minecraft:behavior.skeleton_horse_trap` Allows an entity to be Horse Traps and be triggered like them, spawning a lightning bolt and a bunch of horses when a player is nearby.
[minecraft:behavior.sleep](EntityGoals/minecraftBehavior_sleep.md)|`minecraft:behavior.sleep` allows an entity to sleep in a bed.
[minecraft:behavior.slime_attack](EntityGoals/minecraftBehavior_slime_attack.md)|`minecraft:behavior.slime_attack` allows an entity to make a melee attack similar to the `slime` and `magma_cube`.
[minecraft:behavior.slime_float](EntityGoals/minecraftBehavior_slime_float.md)|`minecraft:behavior.slime_float` allows entities to float in water or lava. Can only be used by `slime` and `magma_cube`.
[minecraft:behavior.slime_keep_on_jumping](EntityGoals/minecraftBehavior_slime_keep_on_jumping.md)|`minecraft:behavior.slime_keep_on_jumping` `minecraft:behavior.slime_keep_on_jumping` allows the entity to continuously jump around like a slime.
[minecraft:behavior.slime_random_direction](EntityGoals/minecraftBehavior_slime_random_direction.md)|`minecraft:behavior.slime_random_direction` allows the entity to move in random directions like a slime.
[minecraft:behavior.snacking](EntityGoals/minecraftBehavior_snacking.md)|`minecraft:behavior.snacking` allows an entity to stop and interact with select food items that are nearby.
[minecraft:behavior.sneeze](EntityGoals/minecraftBehavior_sneeze.md)|`minecraft:behavior.sneeze` allows an entity to sneeze and potentially started other entities. While sneezing, the entity may drop an item.
[minecraft:behavior.sniff](EntityGoals/minecraftBehavior_sniff.md)|`minecraft:behavior.sniff` means the entity detects the nearest player within "sniffing_radius" and updates its "minecraft:suspect_tracking" component state.
[minecraft:behavior.sonic_boom](EntityGoals/minecraftBehavior_sonic_boom.md)|`minecraft:behavior.sonic_boom` plays the provided sounds and activates the "SONIC BOOM" actor flag during the specified duration.
[minecraft:behavior.squid_dive](EntityGoals/minecraftBehavior_squid_dive.md)|`minecraft:behavior.squid_dive` allows an entity to dive underwater.
[minecraft:behavior.squid_flee](EntityGoals/minecraftBehavior_squid_flee.md)|`minecraft:behavior.squid_flee` allows an entity to swim away when attacked.
[minecraft:behavior.squid_idle](EntityGoals/minecraftBehavior_squid_idle.md)|`minecraft:behavior.squid_idle` allows an entity to swim in place.
[minecraft:behavior.squid_move_away_from_ground](EntityGoals/minecraftBehavior_squid_move_away_from_ground.md)|`minecraft:behavior.squid_move_away_from_ground` allows an entity to swim away from the ground blocks.
[minecraft:behavior.squid_out_of_water](EntityGoals/minecraftBehavior_squid_out_of_water.md)|`minecraft:behavior.squid_out_of_water` allows an entity to stay close to a ground block when out of water.
[minecraft:behavior.stalk_and_pounce_on_target](EntityGoals/minecraftBehavior_stalk_and_pounce_on_target.md)|`minecraft:behavior.stalk_and_pounce_on_target` allows an entity to stalk a specific target. Once within range of the target, the entity will then leap at the target and deal damage based upon its attack attribute.
[minecraft:behavior.stay_near_noteblock](EntityGoals/minecraftBehavior_stay_near_noteblock.md)|`minecraft:behavior.stay_near_noteblock` means the entity will attempt to stay near a recently played noteblock.
[minecraft:behavior.stay_while_sitting](EntityGoals/minecraftBehavior_stay_while_sitting.md)|`minecraft:behavior.stay_while_sitting` allows an entity to stay in place while sitting.
[minecraft:behavior.stomp_attack](EntityGoals/minecraftBehavior_stomp_attack.md)|`minecraft:behavior.stomp_attack` allows an entity to attack using stomp AoE damage behavior.
[minecraft:behavior.stomp_turtle_egg](EntityGoals/minecraftBehavior_stomp_turtle_egg.md)|`minecraft:behavior.stomp_turtle_egg` allows an entity to target and stomp on turtle eggs when detected.
[minecraft:behavior.stroll_towards_village](EntityGoals/minecraftBehavior_stroll_towards_village.md)|`minecraft:behavior.stroll_towards_village` allows an entity to navigate and search for a nearby village.
[minecraft:behavior.summon_entity](EntityGoals/minecraftBehavior_summon_entity.md)|`minecraft:behavior.summon_entity` allows an entity to attack other entities by summoning new entities.
[minecraft:behavior.swell](EntityGoals/minecraftBehavior_swell.md)|`minecraft:behavior.swell` allows an entity to grow in size when approached, and scale down back to normal after a certain distance.
[minecraft:behavior.swim_idle](EntityGoals/minecraftBehavior_swim_idle.md)|`minecraft:behavior.swim_idle` allows the entity go idle, if swimming. Entity must be in water.
[minecraft:behavior.swim_wander](EntityGoals/minecraftBehavior_swim_wander.md)|`minecraft:behavior.swim_wander` allows the entity to wander around while swimming, when not path-finding.
[minecraft:behavior.swim_with_entity](EntityGoals/minecraftBehavior_swim_with_entity.md)|`minecraft:behavior.swim_with_entity` allows the entity follow another entity. Both entities must be swimming and in water.
[minecraft:behavior.swoop_attack](EntityGoals/minecraftBehavior_swoop_attack.md)|`minecraft:behavior.swoop_attack` allows an entity to attack using swoop attack behavior. Ideal for use with flying mobs. The behavior ends if the entity has a horizontal collision or gets hit.
[minecraft:behavior.take_flower](EntityGoals/minecraftBehavior_take_flower.md)|`minecraft:behavior.take_flower` allows an entity to receive flowers when presented from the `iron_golem` entity.
[minecraft:behavior.target_when_pushed](EntityGoals/minecraftBehavior_target_when_pushed.md)|`minecraft:behavior.target_when_pushed` allows an entity to target an entity when pushed.
[minecraft:behavior.tempt](EntityGoals/minecraftBehavior_tempt.md)|`minecraft:behavior.tempt` allows an entity to be tempted by a set item.
[minecraft:behavior.trade_interest](EntityGoals/minecraftBehavior_trade_interest.md)|`minecraft:behavior.trade_interest` allows an entity to focus on a player that will initiate a trade.
[minecraft:behavior.trade_with_player](EntityGoals/minecraftBehavior_trade_with_player.md)|`minecraft:behavior.trade_with_player` allows an entity to focus on a player that will initiate a trade.
[minecraft:behavior.vex_copy_owner_target](EntityGoals/minecraftBehavior_vex_copy_owner_target.md)|`minecraft:behavior.vex_copy_owner_target` allows an entity of the`vex` family to target the same entity as it's owner.
[minecraft:behavior.vex_random_move](EntityGoals/minecraftBehavior_vex_random_move.md)|`minecraft:behavior.vex_random_move` allows an entity of the`vex` family to move randomly.
[minecraft:behavior.wither_random_attack_pos_goal](EntityGoals/minecraftBehavior_wither_random_attack_pos_goal.md)|`minecraft:behavior.wither_random_attack_pos_goal` allows an entity to attack at random.
[minecraft:behavior.wither_target_highest_damage](EntityGoals/minecraftBehavior_wither_target_highest_damage.md)|`minecraft:behavior.wither_target_highest_damage` allows an entity to focus its attacks on whichever hostile mob has dealt the most damage to it.
[minecraft:behavior.work](EntityGoals/minecraftBehavior_work.md)|`minecraft:behavior.work` allows the NPC to use their jobsite POI.
[minecraft:behavior.work_composter](EntityGoals/minecraftBehavior_work_composter.md)|`minecraft:behavior.work_composter` allows the NPC to use the composter POI to convert excess seeds into bone meal.
