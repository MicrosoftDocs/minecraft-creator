---
author: docsbryce
ms.author: v-bbortree
title: Entity Documentation - entity_type
ms.prod: gaming
---

# Entity Documentation - entity_types

`entity_types` is a specific type of JSON object used by Minecraft: Bedrock Edition in order to encapsulate entity data that can be used in certain behaviors and components.

## Parameters

|Name |Default Value |Type |Description |
|:-----|:--------------|:-----|:------------|
|filters | |Minecraft Filter|Conditions that make this entry in the list valid. |
|max_dist |16 |Decimal |Maximum distance this mob can be away to be a valid choice. |
|must_see |false |Boolean |If true, the mob has to be visible to be a valid choice. |
|must_see_forget_duration |3.0 | Boolean |Determines the amount of time in seconds that this mob will look for a target before forgetting about it and looking for a new one when the target isn't visible any more. |
|sprint_speed_multiplier |1.0 |Decimal |Multiplier for the running speed. A value of 1.0 means the speed is unchanged. |
|walk_speed_multiplier |1.0 |Decimal |Multiplier for the walking speed. A value of 1.0 means the speed is unchanged. |
