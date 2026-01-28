---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:looked_at"
description: "Describes the minecraft:looked_at entity component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:looked_at

Defines the behavior when another entity looks at the owner entity.


## Looked At Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| field_of_view | 26 | Decimal number | Defines, in degrees, the width of the field of view for entities looking at the owner entity. If "scale_fov_by_distance" is set to true, this value corresponds to the field of view at a distance of one block between the entities. |  | 
| filters | *not set* | Minecraft filter | Defines which entities are considered when searching for entities looking at the owner entity. |  | 
| find_players_only | false | Boolean true/false | Limits the search to only the nearest Player that meets the specified "filters" rather than all nearby entities. |  | 
| line_of_sight_obstruction_type | collision | String | Defines the type of block shape used to check for line of sight obstructions. Valid values: "outline", "collision", "collision_for_camera". |  | 
| look_at_locations | *not set* | Array of strings | A list of locations on the owner entity towards which line of sight checks are performed. At least one location must be unobstructed for the entity to be considered as looked at. |  | 
| looked_at_cooldown | *not set* | Range of integers | Specifies the range for the random number of seconds that must pass before the owner entity can check again for entities looking at it, after detecting an entity looking at it. |  | 
| looked_at_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when an entity is detected looking at the owner entity. |  | 
| min_looked_at_duration | 0 | Decimal number | Defines the minimum, continuous time the owner entity has to be looked at before being considered as such. Defaults to 0 if not explicitly specified. |  | 
| not_looked_at_event | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Defines the event to trigger when no entity is found looking at the owner entity. |  | 
| scale_fov_by_distance | true | Boolean true/false | When true, the field of view narrows as the distance between the owner entity and the entity looking at it increases. This ensures that the width of the view cone remains somewhat constant towards the owner entity position, regardless of distance. |  | 
| search_radius | 10 | Decimal number | Maximum distance the owner entity will search for entities looking at it. |  | 
| set_target | false | [Set Target](#set-target-choices) choices | Defines if and how the owner entity will set entities that are looking at it as its combat targets. Valid values: 'never', 'once_and_stop_scanning', 'once_and_keep_scanning'. |  | 
| set_target (Alternate 1) | *not set* | Integer number from a list of choices | Set to true/false for legacy boolean targeting behavior. |  | 

### Set Target choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| never | Never | |
| once_and_stop_scanning | Once And Stop Scanning | |
| once_and_keep_scanning | Once And Keep Scanning | |

## Samples
