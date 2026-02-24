---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:chest_obstruction"
description: "Describes the minecraft:chest_obstruction block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:chest_obstruction

The description identifier of the chest obstruction component
Experimental toggles required: Upcoming Creator Features.


## Chest Obstruction Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| obstruction_rule | shape | String | [optional] How the block should be evaluated by a chest during chest opening. Must be one of the following options:<br>"always" - Will always oba chest from opening when directly above it.<br>"never" - Will never obstruct a chest from opening when directly above it.<br>"shape" - Will use the Blocks AABB shape to determine if the chest is obstructed from opening when directly above it; this is the default value if no rule is provided. |  | 