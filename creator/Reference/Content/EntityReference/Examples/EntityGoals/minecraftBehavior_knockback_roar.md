---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.knockback_roar"
description: "Describes the minecraft:behavior.knockback_roar ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.knockback_roar

Allows the mob to perform a damaging knockback that affects all nearby entities.


## Knockback Roar Behavior Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| attack_time | 0.5 | Decimal number | The delay after which the knockback occurs (in seconds). |  | 
| cooldown_time | 0.1 | Decimal number | Time (in seconds) the mob has to wait before using the goal again. |  | 
| damage_filters | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to apply damage to. |  | 
| duration | 1 | Decimal number | The max duration of the roar (in seconds). |  | 
| knockback_damage | 6 | Integer number | The damage dealt by the knockback roar. |  | 
| knockback_filters | *not set* | Minecraft filter | The list of conditions another entity must meet to be a valid target to apply knockback to. |  | 
| knockback_height_cap | 0.4 | Decimal number | The maximum height for vertical knockback. |  | 
| knockback_horizontal_strength | 4 | Integer number | The strength of the horizontal knockback. |  | 
| knockback_range | 4 | Integer number | The radius (in blocks) of the knockback effect. |  | 
| knockback_vertical_strength | 4 | Integer number | The strength of the vertical knockback. |  | 
| on_roar_end | *not set* | [Minecraft Event Trigger](../Definitions/NestedTables/triggers.md) | Event that is triggered when the roar ends. |  | 
| priority | *not set* | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. |  | 

## Samples
