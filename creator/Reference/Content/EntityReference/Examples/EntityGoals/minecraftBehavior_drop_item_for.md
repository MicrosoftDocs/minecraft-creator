---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drop_item_for"
description: "Describes the minecraft:behavior.drop_item_for ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.drop_item_for

Allows the entity to move toward a target, and drop an item near the target.

> [!Note]
> Requires the following component in order to work properly:
> 
> * [Navigation (minecraft:navigation)](../EntityComponents/minecraftComponent_navigation.md)
> 

## Drop Item For Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| cooldown | 0.2 | Decimal number | Total time that the goal is on cooldown before it can be used again. |  | 
| drop_item_chance | 1 | Decimal number | The percent chance the entity will drop an item when using this goal. |  | 
| entity_types | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to drop an item for. |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. |  | 
| loot_table | *not set* | String | The loot table that contains the possible loot the entity can drop with this goal. |  | 
| max_head_look_at_height | 10 | Decimal number | The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target. |  | 
| minimum_teleport_distance | 2 | Decimal number | If the target position is farther away than this distance on any tick, the entity will teleport to the target position. |  | 
| offering_distance | 1 | Decimal number | The preferred distance the entity tries to be from the target it is dropping an item for. |  | 
| on_drop_attempt | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the entity attempts to drop an item. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_count | 0 | Integer number | The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |  | 
| search_height | 1 | Integer number | The height in blocks the entity will search within to find a valid target position. |  | 
| search_range | 0 | Integer number | The distance in blocks the entity will search within to find a valid target position. |  | 
| seconds_before_pickup | 0 | Decimal number | The numbers of seconds that will pass before the dropped entity can be picked up from the ground. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. |  | 
| target_range | [1, 1, 1] | x, y, z coordinate array | The range in blocks within which the entity searches to find a target to drop an item for. |  | 
| teleport_offset | [0, 1, 0] | x, y, z coordinate array | When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate. |  | 
| time_of_day_range | *not set* | Range of integers | The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0. |  | 

## Samples
