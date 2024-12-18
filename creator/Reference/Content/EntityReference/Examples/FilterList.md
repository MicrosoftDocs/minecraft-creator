---
author: JimSeaman42
ms.author: mikeam
title: Entity Documentation - FilterList
description: "A reference document listing all available filters for use with Entity JSON files"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - Filter list

Below is a list of all the available filters within Minecraft: Bedrock Edition for use with Entity JSON files.

|Filter |Description|
|:------|:----------|
|[actor_health](Filters/actor_health.md)|`actor_health` allows a creator to test the health of an entity. |
|[all_slots_empty](Filters/all_slots_empty.md)|Returns true when the designated equipment location for the subject entity is completely empty. |
|[any_slot_empty](Filters/any_slot_empty.md)|Returns true when the designated equipment location for the subject entity has any empty slot. |
|[bool_property](Filters/bool_property.md)|`bool_property` allows a creator to compare an entity property to a boolean value. |
|[clock_time](Filters/clock_time.md)|`clock_time` allows a creator to compare the current time with a float value in the range (0.0, 1.0). |
|[distance_to_nearest_player](Filters/distance_to_nearest_player.md)|`distance_to_nearest_player` compares the distance to the nearest player with a float value. |
|[enum_property](Filters/enum_property.md)|`enum_property` allows a creator to compare an entity property to an enum value. |
|[float_property](Filters/float_property.md)|`float_property` allows a creator to compare an entity property to a float value. |
|[has_ability](Filters/has_ability.md)|Returns true when the subject entity has the named ability. |
|[has_biome_tag](Filters/has_biome_tag.md)|Tests whether the biome the subject is in has the specified tag. |
|[has_component](Filters/has_component.md)|Returns true when the subject entity contains the named component. |
|[has_container_open](Filters/has_container_open.md)|Returns true when the subject player entity has opened a container. |
|[has_damage](Filters/has_damage.md)|Returns true when the subject entity receives the named damage type. |
|[has_equipment](Filters/has_equipment.md)|Tests for the presence of a named item in the designated slot of the subject entity. |
|[has_mob_effect](Filters/has_mob_effect.md)|Tests whether the Subject has the specified mob effect. |
|[has_nametag](Filters/has_nametag.md)|Returns true when the subject entity contains the named component. |
|[has_property](Filters/has_property.md)|Tests for the presence of a property of the subject entity. |
|[has_ranged_weapon](Filters/has_ranged_weapon.md)|Returns true when the subject entity is holding a ranged weapon like a bow or crossbow. |
|[has_silk_touch](Filters/has_silk_touch.md)|Tests if the subject is holding an item with silk touch. |
|[has_tag](Filters/has_tag.md)|Returns true if the subject entity has the tag provided. |
|[has_target](Filters/has_target.md)|Returns true if the subject entity has a valid target. |
|[has_trade_supply](Filters/has_trade_supply.md)|Tests whether the target has any trade supply left. Will return false if the target cannot be traded with. |
|[hourly_clock_time](Filters/hourly_clock_time.md)|Compares the current 24 hour time with an int value in the range[0, 24000] |
|[in_block](Filters/in_block.md)|Returns true when the subject entity is inside a specified Block type. |
|[in_caravan](Filters/in_caravan.md)|Returns true if the subject entity is in a caravan. |
|[in_clouds](Filters/in_clouds.md)|Returns true when the subject entity is in the clouds. |
|[in_contact_with_water](Filters/in_contact_with_water.md)|Returns true when the subject entity in contact with any water: water, rain, splash water bottle. |
|[in_lava](Filters/in_lava.md)|Returns true when the subject entity is in lava. |
|[in_nether](Filters/in_nether.md)|Returns true when the subject entity is in Nether. |
|[in_water_or_rain](Filters/in_water_or_rain.md)|Returns true when the subject entity is in water or rain. |
|[in_water](Filters/in_water.md)|Returns true when the subject entity is in water. |
|[inactivity_timer](Filters/inactivity_timer.md)|Tests if the specified duration in seconds of inactivity. |
|[int_property](Filters/int_property.md)|Returns true when the `int` entity property matches the value provided.|
|[is_altitude](Filters/is_altitude.md)|Tests the current altitude against a provided value. |
|[is_avoiding_mobs](Filters/is_avoiding_mobs.md)|Returns true if the subject entity is fleeing from other mobs. |
|[is_baby](Filters/is_baby.md)|Returns `true` when the subject entity is a baby. |
|[is_biome](Filters/is_biome.md)|Tests whether the Subject is currently in the named biome. |
|[is_block](Filters/is_block.md)|Returns true when the block has the given name. |
|[is_brightness](Filters/is_brightness.md)|Tests the current brightness against a provided value in the range (0.0, 1.0). |
|[is_climbing](Filters/is_climbing.md)|Returns true if the subject entity is climbing. |
|[is_color](Filters/is_color.md)|Returns true if the subject entity is the named color. |
|[is_daytime](Filters/is_daytime.md)|Returns true during the daylight hours. |
|[is_difficulty](Filters/is_difficulty.md)|Tests the current difficulty level of the game. |
|[is_family](Filters/is_family.md)|Returns true when the subject entity is a member of the named family. |
|[is_game_rule](Filters/is_game_rule.md)|Tests whether a named game rule is active. |
|[is_humid](Filters/is_humid.md)|Tests whether the subject is in an area with humidity. |
|[is_immobile](Filters/is_immobile.md)|Returns true if the subject entity is immobile. An entity is immobile if it lacks AI goal components, has just changed dimensions, or if it is a mob and has no health. |
|[is_in_village](Filters/is_in_village.md)|Tests whether the Subject is inside the bounds of a village. |
|[is_leashed](Filters/is_leashed.md)|Returns true if the subject entity is leashed. |
|[is_leashed_to](Filters/is_leashed_to.md)|Returns true if the subject entity leashed to the calling entity. |
|[is_mark_variant](Filters/is_mark_variant.md)|Returns true if the subject entity is the mark variant number provided. |
|[is_missing_health](Filters/is_missing_health.md)|Tests if the subject is not at full health. |
|[is_moving](Filters/is_moving.md)|Returns true if the subject entity is moving. |
|[is_navigating](Filters/is_navigating.md)|Returns true if the subject entity is navigating. |
|[is_owner](Filters/is_owner.md)|Returns true if the subject entity is the owner of the calling entity. |
|[is_persistent](Filters/is_persistent.md)|Tests if the subject's persistence matches the bool value passed in. |
|[is_raider](Filters/is_raider.md)|Returns true if the subject entity is a raider. |
|[is_riding](Filters/is_riding.md)|Returns true if the subject entity is riding on another entity. |
|[is_skin_id](Filters/is_skin_id.md)|Returns true if the subject entity uses the skin id number provided. |
|[is_sleeping](Filters/is_sleeping.md)|Tests whether the subject is sleeping. |
|[is_sneak_held](Filters/is_sneak_held.md)|Returns true if the subject entity has the sneak input held. |
|[is_sneaking](Filters/is_sneaking.md)|Tests whether the subject is sneaking. |
|[is_snow_covered](Filters/is_snow_covered.md)|Tests whether the subject is in an area covered by snow. |
|[is_target](Filters/is_target.md)|Returns true if the subject entity is the target of the calling entity. |
|[is_temperature_type](Filters/is_temperature_type.md)|Tests whether the current temperature is a given type. |
|[is_temperature_value](Filters/is_temperature_value.md)|Tests the current temperature against a provided value in the range (0.0, 1.0) where 0.0 is the coldest temp and 1.0 is the hottest. |
|[is_underground](Filters/is_underground.md)|Returns true when the subject entity is underground. An entity is considered underground if there are non-solid blocks above it. |
|[is_underwater](Filters/is_underwater.md)|Returns true when the subject entity is under water. |
|[is_variant](Filters/is_variant.md)|Returns true if the subject entity is the variant number provided. |
|[is_visible](Filters/is_visible.md)|Returns true if the subject entity is visible. |
|[is_waterlogged](Filters/is_waterlogged.md)|Tests if the subject block is submerged in water. |
|[light_level](Filters/light_level.md)|Tests if the entity is outside of the specified light level range. The range is set between 0 and 16. |
|[moon_intensity](Filters/moon_intensity.md)|Compares the current moon intensity with a float value in the range of 0.0 and 1.0 |
|[moon_phase](Filters/moon_phase.md)|Compares the current moon intensity with a float value in the range of 0.0 and 1.0 |
|[on_fire](Filters/on_fire.md)|Tests if the subject is on fire. |
|[on_ground](Filters/on_ground.md)|Returns true when the subject entity is on the ground. |
|[on_hot_block](Filters/on_hot_block.md)|Tests if the subject is on a hot block. |
|[on_ladder](Filters/on_ladder.md)|Returns true when the subject entity is on a ladder. |
|[owner_distance](Filters/owner_distance.md)|Tests the distance between the calling entity and its owner.|
|[random_chance](Filters/random_chance.md)|Returns true if the random chance rolls 0 out of a specified max range. |
|[rider_count](Filters/rider_count.md)|Returns the number of riders on this entity. |
|[surface_mob](Filters/surface_mob.md)|Tests if the subject is a surface mob. |
|[target_distance](Filters/target_distance.md)|Tests the distance between the calling entity and its target. |
|[trusts](Filters/trusts.md)|Returns true if the subject is trusted by entity. |
|[was_last_hurt_by](Filters/was_last_hurt_by.md)|Tests if the subject is the last player who attacked the entity in the last 400 seconds, or the last mob to do so in the last 60 seconds.|
|[weather_at_position](Filters/weather_at_position.md)|Tests the current weather, at the entities position, against a provided weather value.|
|[weather](Filters/weather.md)|Tests for the current weather state the entity is experiencing. |
