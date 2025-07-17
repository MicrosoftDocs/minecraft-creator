---
author: mammerla
ms.author: mikeam
title: "Entity Filter Types Documentation - Entity Filter Types"
description: "A reference document describing all current Entity Filter Types"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Filter Types Documentation

| Entity Filter Types | Description |
|:-----|:----------|
| [actor_health](Filters/actor_health.md)| Tests the health of the subject. |
| [all_slots_empty](Filters/all_slots_empty.md)| Returns true when the designated equipment location for the subject entity is completely empty. |
| [any_slot_empty](Filters/any_slot_empty.md)| Returns true when the designated equipment location for the subject entity has any empty slot. |
| [bool_property](Filters/bool_property.md)| Returns true when the bool actor property matches the value provided. |
| [clock_time](Filters/clock_time.md)| Compares the current time with a float value in the range (0.0, 1.0). 0.0= Noon 0.25= Sunset 0.5= Midnight 0.75= Sunrise |
| [distance_to_nearest_player](Filters/distance_to_nearest_player.md)| Compares the distance to the nearest Player with a float value. |
| [enum_property](Filters/enum_property.md)| Returns true when the enum actor property matches the value provided. |
| [float_property](Filters/float_property.md)| Returns true when the float actor property matches the value provided. |
| [has_ability](Filters/has_ability.md)| Returns true when the subject entity has the named ability. |
| [has_biome_tag](Filters/has_biome_tag.md)| Tests whether the biome the subject is in has the specified tag. |
| [has_component](Filters/has_component.md)| Returns true when the subject entity contains the named component. |
| [has_container_open](Filters/has_container_open.md)| Returns true when the subject Player entity has opened a container. |
| [has_damage](Filters/has_damage.md)| Returns true when the subject entity receives the named damage type. |
| [has_damaged_equipment](Filters/has_damaged_equipment.md)| Tests for the presence of a damaged named item in the designated slot of the subject entity. |
| [has_equipment](Filters/has_equipment.md)| Tests for the presence of a named item in the designated slot of the subject entity. |
| [has_equipment_tag](Filters/has_equipment_tag.md)| Tests for the presence of an item with the named tag in the designated slot of the subject entity. |
| [has_mob_effect](Filters/has_mob_effect.md)| Tests whether the Subject has the specified mob effect. |
| [has_nametag](Filters/has_nametag.md)| Tests if the subject has been given a custom name. |
| [has_property](Filters/has_property.md)| Tests for the presence of a property of the subject entity. |
| [has_ranged_weapon](Filters/has_ranged_weapon.md)| Returns true when the subject entity is holding a ranged weapon like a bow or crossbow. |
| [has_silk_touch](Filters/has_silk_touch.md)| Tests if the subject is holding an item with silk touch. |
| [has_tag](Filters/has_tag.md)| Returns true if the subject entity has the tag provided. |
| [has_target](Filters/has_target.md)| Returns true if the subject entity has a valid target. |
| [has_trade_supply](Filters/has_trade_supply.md)| Tests whether the target has any trade supply left. |
| [home_distance](Filters/home_distance.md)| Tests the distance between the subject and its home. |
| [hourly_clock_time](Filters/hourly_clock_time.md)| Compares the current 24 hour time with an int value in the range[0, 24000] |
| [inactivity_timer](Filters/inactivity_timer.md)| Tests if the specified duration in seconds of inactivity for despawning has been reached. |
| [int_property](Filters/int_property.md)| Returns true when the int actor property matches the value provided. |
| [in_block](Filters/in_block.md)| Returns true when the subject entity is inside a specified Block type. |
| [in_caravan](Filters/in_caravan.md)| Returns true if the subject entity is in a caravan. |
| [in_clouds](Filters/in_clouds.md)| Returns true when the subject entity is in the clouds. |
| [in_contact_with_water](Filters/in_contact_with_water.md)| Returns true when the subject entity in contact with any water: water, rain, splash water bottle. |
| [in_lava](Filters/in_lava.md)| Returns true when the subject entity is in lava. |
| [in_nether](Filters/in_nether.md)| Returns true when the subject entity is in Nether. |
| [in_overworld](Filters/in_overworld.md)| Returns true when the subject entity is in Overworld. |
| [in_water](Filters/in_water.md)| Returns true when the subject entity is in water. |
| [in_water_or_rain](Filters/in_water_or_rain.md)| Returns true when the subject entity is in water or rain. |
| [is_altitude](Filters/is_altitude.md)| Tests the current altitude against a provided value. |
| [is_avoiding_mobs](Filters/is_avoiding_mobs.md)| Returns true if the subject entity is fleeing from other mobs. |
| [is_baby](Filters/is_baby.md)| Returns true when the subject entity is a baby. |
| [is_biome](Filters/is_biome.md)| Tests whether the Subject is currently in the named biome. |
| [is_block](Filters/is_block.md)| Returns true when the block has the given name. |
| [is_bound_to_creaking_heart](Filters/is_bound_to_creaking_heart.md)| Tests that the Creaking Heart that spawned the subject Creaking still exists. |
| [is_brightness](Filters/is_brightness.md)| Tests the current brightness against a provided value in the range (0.0f, 1.0f). |
| [is_climbing](Filters/is_climbing.md)| Returns true if the subject entity is climbing. |
| [is_color](Filters/is_color.md)| Returns true if the subject entity is the named color. |
| [is_daytime](Filters/is_daytime.md)| Returns true during the daylight hours. |
| [is_difficulty](Filters/is_difficulty.md)| Tests the current difficulty level of the game. |
| [is_family](Filters/is_family.md)| Returns true when the subject entity is a member of the named family. |
| [is_game_rule](Filters/is_game_rule.md)| Tests whether a named game rule is active. |
| [is_humid](Filters/is_humid.md)| Tests whether the Subject is in an area with humidity |
| [is_immobile](Filters/is_immobile.md)| Returns true if the subject entity is immobile. |
| [is_in_village](Filters/is_in_village.md)| Tests whether the Subject is inside the bounds of a village. |
| [is_leashed](Filters/is_leashed.md)| Returns true if the subject entity is leashed. |
| [is_leashed_to](Filters/is_leashed_to.md)| Returns true if the subject entity leashed to the calling entity. |
| [is_mark_variant](Filters/is_mark_variant.md)| Returns true if the subject entity is the mark variant number provided. |
| [is_missing_health](Filters/is_missing_health.md)| Tests if the subject is not at full health. |
| [is_moving](Filters/is_moving.md)| Returns true if the subject entity is moving. |
| [is_navigating](Filters/is_navigating.md)| Tests if the subject is currently pathfinding. |
| [is_owner](Filters/is_owner.md)| Returns true if the subject entity is the owner of the calling entity. |
| [is_panicking](Filters/is_panicking.md)| Tests if the subject is panicking. |
| [is_persistent](Filters/is_persistent.md)| Tests if the subject's persistence matches the bool value passed in. |
| [is_raider](Filters/is_raider.md)| Tests if the subject is a raider. |
| [is_riding](Filters/is_riding.md)| Returns true if the subject entity is riding on another entity. |
| [is_riding_self](Filters/is_riding_self.md)| Returns true if the subject entity is riding the calling entity. |
| [is_sitting](Filters/is_sitting.md)| Tests if the subject is sitting. |
| [is_skin_id](Filters/is_skin_id.md)| Returns true if the subject entity is the skin id number provided. |
| [is_sleeping](Filters/is_sleeping.md)| Tests whether the Subject is sleeping. |
| [is_sneaking](Filters/is_sneaking.md)| Returns true if the subject entity is sneaking. |
| [is_sneak_held](Filters/is_sneak_held.md)| Returns true if the subject entity has the sneak input held. |
| [is_snow_covered](Filters/is_snow_covered.md)| Tests whether the Subject is in an area with snow cover |
| [is_sprinting](Filters/is_sprinting.md)| Tests if the subject is sprinting. |
| [is_target](Filters/is_target.md)| Returns true if the subject entity is the target of the calling entity. |
| [is_temperature_type](Filters/is_temperature_type.md)| Tests whether the current temperature is a given type. |
| [is_temperature_value](Filters/is_temperature_value.md)| Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0f is the coldest temp and 1.0f is the hottest. |
| [is_underground](Filters/is_underground.md)| Returns true when the subject entity is underground. |
| [is_underwater](Filters/is_underwater.md)| Returns true when the subject entity is under water. |
| [is_variant](Filters/is_variant.md)| Returns true if the subject entity is the variant number provided. |
| [is_vehicle_family](Filters/is_vehicle_family.md)| Returns true when the subject entity's vehicle is a member of the named family. |
| [is_visible](Filters/is_visible.md)| Returns true if the subject entity is visible. |
| [is_waterlogged](Filters/is_waterlogged.md)| Tests if the subject block is submerged in water. |
| [is_weather](Filters/is_weather.md)| DEPRECATED |
| [light_level](Filters/light_level.md)| Tests is the mob is outside of the specified light level range (0, 16). |
| [moon_intensity](Filters/moon_intensity.md)| Compares the current moon intensity with a float value in the range (0.0, 1.0) |
| [moon_phase](Filters/moon_phase.md)| Compares the current moon phase with an integer value in the range (0, 7). |
| [on_fire](Filters/on_fire.md)| Tests if the subject is on fire. |
| [on_ground](Filters/on_ground.md)| Returns true when the subject entity is on ground. |
| [on_hot_block](Filters/on_hot_block.md)| Tests if the subject is on a hot block. |
| [on_ladder](Filters/on_ladder.md)| Returns true when the subject entity is on a ladder. |
| [owner_distance](Filters/owner_distance.md)| Tests the distance between the subject and its owner. |
| [random_chance](Filters/random_chance.md)| Returns true if the random chance rolls 0 out of a specified max range. |
| [rider_count](Filters/rider_count.md)| Returns the number of riders on this entity. |
| [surface_mob](Filters/surface_mob.md)| Tests if the subject is a surface mob. |
| [taking_fire_damage](Filters/taking_fire_damage.md)| Tests if the subject is taking fire damage. |
| [target_distance](Filters/target_distance.md)| Tests the distance between the calling entity and its target. |
| [trusts](Filters/trusts.md)| Returns true if the subject is trusted by entity. |
| [was_last_hurt_by](Filters/was_last_hurt_by.md)| Tests if the subject is the last player who attacked the entity in the last 400 seconds, or the last mob to do so in the last 60 seconds. |
| [weather](Filters/weather.md)| Tests the current weather in the dimension against a provided weather value. |
| [weather_at_position](Filters/weather_at_position.md)| Tests the current weather, at the actor's position, against a provided weather value. |