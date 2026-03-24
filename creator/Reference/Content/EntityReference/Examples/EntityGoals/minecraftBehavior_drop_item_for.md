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

## Entity Drop Item For Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| cooldown | 0.25 | Decimal number | Total time that the goal is on cooldown before it can be used again. | 
| drop_item_chance | 1 | Decimal number | The percent chance the entity will drop an item when using this goal. Value must be <= 1. | 
| entity_types | [] | Array of objects | The list of conditions another entity must meet to be a valid target to drop an item for. | 
| entity_types (Entity Types) | *not set* | [Entity Types (Entity Types)](#entity-types-entity-types) item |  | 
| goal_radius | 0.5 | Decimal number | Distance in blocks within the mob considers it has reached the goal. This is the "wiggle room" to stop the AI from bouncing back and forth trying to reach a specific spot. Value must be > 0. | 
| loot_table |  | String | The loot table that contains the possible loot the entity can drop with this goal. | 
| max_head_look_at_height | 10 | Decimal number | The maximum height the entities head will look at when dropping the item. The entity will always be looking at its target. | 
| minimum_teleport_distance | 2 | Decimal number | If the target position is farther away than this distance on any tick, the entity will teleport to the target position. | 
| offering_distance | 1 | Decimal number | The preferred distance the entity tries to be from the target it is dropping an item for. | 
| on_drop_attempt | {"event":"","filters":{"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null},"target":"self"} | [Drop Attempt](#entity-actordefinitiontrigger) item | The event to trigger when the entity attempts to drop an item. | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 
| search_count | 0 | Integer number | The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. | 
| search_height | 1 | Integer number | The height in blocks the entity will search within to find a valid target position. Value must be > 0. | 
| search_range | 0 | Integer number | The distance in blocks the entity will search within to find a valid target position. Value must be > 0. | 
| seconds_before_pickup | 0 | Decimal number | The numbers of seconds that will pass before the dropped entity can be picked up from the ground. | 
| speed_multiplier | 1 | Decimal number | Movement speed multiplier of the mob when using this goal. | 
| target_range | [1, 1, 1] | Array of numbers | The range in blocks within which the entity searches to find a target to drop an item for. | 
| target_range (Target Range) | *not set* | [Target Range (Target Range)](#target-range-target-range) item |  | 
| teleport_offset | [0, 1, 0] | Array of numbers | When the entity teleports, offset the teleport position by this many blocks in the X, Y, and Z coordinate. | 
| teleport_offset (Teleport Offset) | *not set* | [Teleport Offset (Teleport Offset)](#teleport-offset-teleport-offset) item |  | 
| time_of_day_range | {"max":1,"min":0} | [Time Of Day Range](#item-components-floatrange) item | The valid times of day that this goal can be used. For reference: noon is 0.0, sunset is 0.25, midnight is 0.5, and sunrise is 0.75, and back to noon for 1.0. | 

### search_count

The number of randomly selected blocks each tick that the mob will check within its search range and height for a valid block to move to. A value of 0 will have the mob check every block within range in one tick.


### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

### Entity Types (Entity Types)

#### Entity Types Properties

**JSON path:** `entity_types`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| check_if_outnumbered | false | Boolean true/false | If true, the mob will check if its outnumbered | 
| cooldown | 0 | Integer number | The amount of time in seconds that the mob has to wait before selecting a target of the same type again | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Conditions that make this entry in the list valid | 
| filters (Alternate 1) | *not set* | Object |  | 
| max_dist | 16 | Decimal number | Maximum distance this mob can be away to be a valid choice | 
| max_flee | 10 | Decimal number | Maximum distance this mob can be from the target to stop fleeing | 
| max_height | -1 | Decimal number | Maximum height this mob can be away to be a valid choice | 
| must_see | *not set* | Boolean true/false | If true, the mob has to be visible to be a valid choice | 
| must_see_forget_duration | 3 | Integer number | Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more | 
| priority | 0 | Integer number | Priority for this mob type | 
| reevaluate_description | false | Boolean true/false | If true, the mob will stop being targeted if it stops meeting any conditions. | 
| sprint_speed_multiplier | 1 | Decimal number | Multiplier for the sprinting speed. A value of 1.0 means the speed is unchanged | 
| walk_speed_multiplier | 1 | Decimal number | Multiplier for the walking speed. A value of 1.0 means the speed is unchanged | 

#### Filters

##### Filters Properties

**JSON path:** `entity_types > filters`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| domain | *not set* | Object | The domain the test should be performed in. | 
| operator | *not set* | Object | The comparison to apply with 'value'. | 
| subject | *not set* | Object | The subject of this filter test. | 
| test | *not set* | String | The name of the test to apply. | 
| value | *not set* | Object | The value being compared with the test. | 

### Entity ActorDefinitionTrigger
Triggers an entity event when specified conditions are met. Events activate component groups that change entity behavior—transforming villagers into zombie villagers, switching mobs to aggressive mode, or triggering growth stages. Combine with filters to create conditional state machines that respond to gameplay.


#### Entity ActorDefinitionTrigger Properties

**JSON path:** `on_drop_attempt`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| event |  | String |  | 
| filters (Filters) | {"AND":null,"NOT":null,"OR":null,"all":null,"all_of":null,"any":null,"any_of":null,"none_of":null} | [Filters](#filters) item | Filters allow data objects to specify test criteria which allows their use. | 
| filters (Alternate 1) | *not set* | Object |  | 
| target | self | [Target](#target-choices) choices |  | 

#### filters

Filters allow data objects to specify test criteria which allows their use. Filters can be defined by a single object of type (Filter Test), an array of tests, collection groups, or a combination of these objects.


### Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| baby | Baby | |
| block | Block | |
| damager | Damager | |
| holder | Holder | |
| item | Item | |
| other | Other | |
| parent | Parent | |
| player | Player | |
| self | Self | |
| target | Target | |

### Target Range (Target Range)

#### Target Range Properties

**JSON path:** `target_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | 0 | Decimal number |  | 
| y | 0 | Decimal number |  | 
| z | 0 | Decimal number |  | 

### Teleport Offset (Teleport Offset)

Same structure as [Target Range (Target Range)](#target-range-target-range).


### Item Components FloatRange
Has minimum and maximum float values.


#### Item Components FloatRange Properties

**JSON path:** `time_of_day_range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 

## Samples
