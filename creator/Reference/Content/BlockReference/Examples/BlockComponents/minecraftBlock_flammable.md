---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:flammable"
description: "Describes the minecraft:flammable block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:flammable

Describes the flammable properties for this block. If set to true, default values are used (catch: 5, destroy: 20, same as planks). If set to false, or if this component is omitted, the block will not be able to catch on fire naturally from neighbors, but it can still be directly ignited.

## Alternate Simple Representations

This item can also be represented as a `Boolean true/false`.


## Flammable Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| catch_chance_modifier | 5 | Integer number | A modifier affecting the chance that this block will catch flame when next to a fire. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. For a "catch_chance_modifier" greater than 0, the fire will continue to burn until the block is destroyed (or it will burn forever if the "destroy_chance_modifier" is 0). If the "catch_chance_modifier" is 0, and the block is directly ignited, the fire will eventually burn out without destroying the block (or it will have a chance to be destroyed if "destroy_chance_modifier" is greater than 0). The default value of 5 is the same as that of Planks. |  | 
| destroy_chance_modifier | 20 | Integer number | A modifier affecting the chance that this block will be destroyed by flames when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed by fire. For a "destroy_chance_modifier" of 0, the block will never be destroyed by fire, and the fire will burn forever if the "catch_chance_modifier" is greater than 0. The default value of 20 is the same as that of Planks. |  | 

## Samples
