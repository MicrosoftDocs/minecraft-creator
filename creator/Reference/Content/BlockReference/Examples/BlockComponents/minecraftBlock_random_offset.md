---
author: mammerla
ms.author: mikeam
title: "Block Components Documentation - minecraft:random_offset"
description: "Describes the minecraft:random_offset block component"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Components Documentation - minecraft:random_offset

This component defines a random offset for the block, seeded based on the block's position and the specified range and steps. It affects the block's rendered position, outline, and collision.
If the random offset causes the collision box to extend beyond the bounds of a cube, the offset range will automatically adjust to keep the collision box within the cube.
Culling for this block is performed without considering the random offset.


## Random Offset Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| x | *not set* | [X](#range-of-values-between-two-numbers) item | X coordinate |  | 
| y | *not set* | [Y](#range-of-values-between-two-numbers) item | Y coordinate |  | 
| z | *not set* | [Z](#range-of-values-between-two-numbers) item | Z coordinate |  | 

## Range of values between two numbers
Specifies a range of values between two numbers, with a defined number of steps. This is used to control the variation in block properties such as offset, color, or other attributes.


#### Range of values between two numbers Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| range | *not set* | [Range](#range) item | Range of values |  | 
| steps | *not set* | Integer number | Number of steps between the range |  | 

## Range

#### Range of values Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| max | *not set* | Decimal number | Maximum value of the range |  | 
| min | *not set* | Decimal number | Minimum value of the range |  | 