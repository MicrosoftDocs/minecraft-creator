---
author: mammerla
ms.author: mikeam
title: "Entity Documentation - minecraft:behavior.charge_held_item"
description: "Describes the minecraft:behavior.charge_held_item ai behavior component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Entity Documentation - minecraft:behavior.charge_held_item

Allows an entity to charge and use their held item.


## Entity Charge Held Item Behavior Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| control_flags | [] | [Control Flags](#control-flags-choices) choices |  | 
| items | NA | String | The list of items that can be used to charge the held item. This list is required and must have at least one item in it. Value must have at least 1 items. | 
| items (as Keyed set of strings) | *not set* | Keyed set of strings |  | 
| priority | 0 | Integer number | As priority approaches 0, the priority is increased. The higher the priority, the sooner this behavior will be executed as a goal. | 

### Control Flags choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| jump | Jump | |
| look | Look | |
| move | Move | |

## Samples
