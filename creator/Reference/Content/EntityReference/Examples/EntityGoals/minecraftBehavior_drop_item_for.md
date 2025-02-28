---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.drop_item_for"
description: "Describes the minecraft:behavior.drop_item_for ai behavior component"
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
| cooldown | 0.2 | Decimal number | Total time that the goal is on cooldown before it can be used again. | Cat: `0.25` | 
| drop_item_chance | 1 | Decimal number | The percent chance the entity will drop an item when using this goal. | Cat: `0.7` | 
| entity_types | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to drop an item for. | Cat: `[{"filters":{"test":"is_family","subject":"other","value":"player"},"max_dist":6}]` | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the entity considers it has reached it's target position. | Cat: `1` | 
| loot_table | *not set* | String | The loot table that contains the possible loot the entity can drop with this goal. | Cat: `"loot_tables/entities/cat_gift.json"` | 
| max_head_look_at_height | 10 | Decimal number | The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target. | Cat: `10` | 
| minimum_teleport_distance | 2 | Decimal number | If the target position is farther away than this distance on any tick, the entity will teleport to the target position. | Cat: `2` | 
| offering_distance | 1 | Decimal number | The preferred distance the entity tries to be from the target it is dropping an item for. | Cat: `5` | 
| on_drop_attempt | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | The event to trigger when the entity attempts to drop an item. | Cat: `{"event":"minecraft:cat_gifted_owner","target":"self"}` | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | Cat: `1` | 
| search_count | 0 | Integer number | The number of blocks each tick that the entity will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick. |  | 
| search_height | 1 | Integer number | The Height in blocks the entity will search within to find a valid target position. | Cat: `2` | 
| search_range | 0 | Integer number | The distance in blocks the entity will search within to find a valid target position. | Cat: `5` | 
| seconds_before_pickup | 0 | Decimal number | The numbers of seconds that will pass before the dropped entity can be picked up from the ground. |  | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the entity when using this Goal. | Cat: `1` | 
| target_range | [1, 1, 1] | x, y, z coordinate array | The range in blocks within which the entity searches to find a target to drop an item for. | Cat: `[5,5,5]` | 
| teleport_offset | [0, 1, 0] | x, y, z coordinate array | When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate. | Cat: `[0,1,0]` | 
| time_of_day_range | *not set* | Range of integers | The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0. | Cat: `[0.74999,0.8]` | 

## Samples

#### [Cat](https://github.com/Mojang/bedrock-samples/tree/preview/behavior_pack/entities/cat.json)


```json
"minecraft:behavior.drop_item_for": {
  "priority": 1,
  "seconds_before_pickup": 0,
  "cooldown": 0.25,
  "drop_item_chance": 0.7,
  "offering_distance": 5,
  "minimum_teleport_distance": 2,
  "max_head_look_at_height": 10,
  "target_range": [
    5,
    5,
    5
  ],
  "teleport_offset": [
    0,
    1,
    0
  ],
  "time_of_day_range": [
    0.74999,
    0.8
  ],
  "speed_multiplier": 1,
  "search_range": 5,
  "search_height": 2,
  "search_count": 0,
  "goal_radius": 1,
  "entity_types": [
    {
      "filters": {
        "test": "is_family",
        "subject": "other",
        "value": "player"
      },
      "max_dist": 6
    }
  ],
  "loot_table": "loot_tables/entities/cat_gift.json",
  "on_drop_attempt": {
    "event": "minecraft:cat_gifted_owner",
    "target": "self"
  }
}
```
