---
author: v-josjones
ms.author: v-josjones
title: Block Documentation - minecraft:part_visibility
ms.prod: gaming
---

# Block Documentation - minecraft:part_visibility

`minecraft:part_visibility` maps bone names in a geometry file to a condition that turns their rendering on/off. The condition should be a Molang query that uses block properties to determine true/false.

Supported queries include `has_block_property`, `block_property`, and other queries that can evaluate without knowledge of the block's in-game positional or player affected data.

## Default Parameter

|Default Value|Type |
|:----|:----|
|*not set*| JSON Object|

