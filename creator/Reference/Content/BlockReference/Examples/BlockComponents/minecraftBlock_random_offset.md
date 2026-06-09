---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:random_offset"
description: "Describes the minecraft:random_offset block component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:random_offset

This component defines a random offset for the block, seeded based on the block's position and the specified range and steps. It affects the block's rendered position, outline, and collision.
If the random offset causes the collision box to extend beyond the bounds of a cube, the offset range will automatically adjust to keep the collision box within the cube.
Culling for this block is performed without considering the random offset.


## Random Offset Properties

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| x | {"range":{"max":0,"min":0},"steps":0} | [X](#block-range-and-steps) item | X coordinate | 
| y | {"range":{"max":0,"min":0},"steps":0} | [Y](#block-range-and-steps) item | Y coordinate | 
| z | {"range":{"max":0,"min":0},"steps":0} | [Z](#block-range-and-steps) item | Z coordinate | 

### Block Range And Steps
Defines an integer block state with a range of valid values and optional step increment. Used for block properties like growth stages (0-7 for crops), signal strength (0-15 for redstone), or rotation angles. The game only allows values within the specified min/max range at the given step intervals.


#### Block Range And Steps Properties

**JSON path:** `x`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| range | *not set* | [Range](#item-floatrange) item | The range of the random offset. Check that the limits imposed on the range (minimum, maximum and maximum distance between values) are respected | 
| steps | 0 | Integer number | The number of steps between the range. Specify 0 for all possible values between the range. | 

#### Item FloatRange
Specifies a numeric range between minimum and maximum values for randomized item properties. Used for variable durability, damage ranges, or timing intervals. The game picks a random value within the range when the property is evaluated, adding natural variation to item behavior.


##### Item FloatRange Properties

**JSON path:** `x > range`

|Name       |Default Value |Type |Description |
|:----------|:-------------|:----|:-----------|
| max | 0 | Decimal number |  | 
| min | 0 | Decimal number |  | 