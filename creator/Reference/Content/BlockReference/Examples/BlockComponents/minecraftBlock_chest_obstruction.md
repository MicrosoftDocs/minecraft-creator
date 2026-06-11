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

This defines how a block reacts to a chest being opened underneath it.


## Block Chest Obstruction Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| obstruction_rule | shape | [Obstruction Rule](#obstruction-rule-choices) choices | [optional] How the block should be evaluated by a chest during chest opening. | 

### obstruction_rule

[optional] How the block should be evaluated by a chest during chest opening. Must be one of the following options: "always" - Will always oba chest from opening when directly above it. "never" - Will never obstruct a chest from opening when directly above it. "shape" - Will use the Blocks AABB shape to determine if the chest is obstructed from opening when directly above it; this is the default value if no rule is provided.


### Obstruction Rule choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| always | Always | |
| never | Never | |
| shape | Shape | |