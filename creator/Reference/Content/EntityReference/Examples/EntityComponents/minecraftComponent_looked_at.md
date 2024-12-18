---
author: iconicNurdle
ms.author: mikeam
title: Entity Documentation - minecraft:looked_at
description: "A reference document detailing the 'looked_at' entity component"
ms.service: minecraft-bedrock-edition
---

# Entity Documentation - minecraft:looked_at

`minecraft:looked_at` defines the behavior when another entity looks at the owner entity.

## Parameters

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
| field_of_view | 26 | Decimal | Defines, in degrees, the width of the field of view for entities looking at the owner entity. If `"scale_fov_by_distance"` is set to `true`, then this value corresponds to the field of view at a distance of one block between the entities. |
| filters | *not set*| Minecraft Filter | Defines which entities are considered when searching for entities looking at the owner entity. |
| find_players_only | false | Boolean | Limits the search to only the nearest Player that meets the specified "filters" rather than all nearby entities. |
| line_of_sight_obstruction_type | collision | String | Defines the type of block shape used to check for line of sight obstructions. Valid values: "outline", "collision", "collision_for_camera". |
|look_at_locations | *not set* | List | A list of locations on the owner entity towards which line of sight checks are performed. At least one location must be unobstructed for the entity to be considered as looked at. Valid values: "head", "body", "feet". |
| looked_at_cooldown| [0, 0]| Range [a, b] | Specifies the range for the random number of seconds that must pass before the owner entity can check again for entities looking at it, after detecting an entity looking at it. |
| looked_at_event | *not set* | String | Defines the event to trigger when an entity is detected looking at the owner entity. |
| not_looked_at_event | *not set* | String | Defines the event to trigger when no entity is found looking at the owner entity. |
| scale_fov_by_distance | True | Boolean | When true, the field of view narrows as the distance between the owner entity and the entity looking at it increases. This ensures that the width of the view cone remains somewhat constant towards the owner entity position, regardless of distance. |
| search_radius | 10| Decimal | Maximum distance the owner entity will search for entities looking at it. |
| set_target | "once_and_stop_scanning" | String | Defines if and how the owner entity will set entities that are looking at it as its combat targets. <br>Valid values: <br>"never", looking entities are never set as targets, but events are emitted. <br>"once_and_stop_scanning", the first detected looking entity is set as target. Scanning and event emission is suspended if and until the owner entity has a target. <br> "once_and_keep_scanning", the first detected looking entity is set as target. Scanning and event emission continues. |


