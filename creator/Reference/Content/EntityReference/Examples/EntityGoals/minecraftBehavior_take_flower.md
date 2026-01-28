---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.take_flower"
description: "Describes the minecraft:behavior.take_flower ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.take_flower

Allows the mob to accept flowers from another mob with the minecraft:offer_flower behavior.

> [!Note]
> Can only be used on the following type of entity:
> 
> * Villager (minecraft:villager)
> 

## Take Flower Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| filters | *not set* | Minecraft filter | Conditions that need to be met for the behavior to start. |  | 
| max_head_rotation_y | 30 | Decimal number | Maximum rotation (in degrees), on the Y-axis, this entity can rotate its head while trying to look at the target. |  | 
| max_rotation_x | 30 | Decimal number | Maximum rotation (in degrees), on the X-axis, this entity can rotate while trying to look at the target. |  | 
| max_wait_time | 20 | Decimal number | The maximum amount of time (in seconds) for the mob to randomly wait for before taking the flower. |  | 
| min_distance_to_target | 2 | Decimal number | Minimum distance (in blocks) for the entity to be considered having reached its target. |  | 
| min_wait_time | 4 | Decimal number | The minimum amount of time (in seconds) for the mob to randomly wait for before taking the flower. |  | 
| on_take_flower | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event triggered when the entity takes a flower from another entity. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 
| search_area | [6, 2, 6] | x, y, z coordinate array | The dimensions of the AABB used to search for a potential mob to take a flower from. |  | 
| speed_multiplier | 0.5 | Decimal number | Movement speed multiplier of the mob when using this AI Goal. |  | 

## Samples
