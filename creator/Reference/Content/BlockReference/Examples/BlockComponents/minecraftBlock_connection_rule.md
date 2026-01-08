---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:connection_rule"
description: "Describes the minecraft:connection_rule block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:connection_rule

Defines whether other blocks such as fences, walls, bars, and glass panes are allowed to connect to this block.
Experimental toggles required: Upcoming Creator Features (in format versions before 1.26.0).


## Connection Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| accepts_connections_from | all | String | The type of block allowed to connect to this block. Currently, the options are: `all` (default), `only_fences`, and `none`. Note that the `only_fences` option allows connections from all Vanilla fences excluding NetherBrick. |  | 
| enabled_directions | ['north', 'south', 'east', 'west'] | Array of strings | The cardinal directions that connection is enabled for: `north`, `south`, `east`, and `west`. All directions are enabled by default. Note that if `none` is specified for `accepts_connections_from`, this field will not be used. |  | 