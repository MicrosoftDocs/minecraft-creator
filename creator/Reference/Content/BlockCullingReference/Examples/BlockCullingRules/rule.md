---
author: mammerla
ms.author: mikeam
title: "Block Culling Documentation - minecraft:rule"
description: "Describes the minecraft:rule block culling"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Culling Documentation - minecraft:rule


## Client Block Rule Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| condition | *not set* | [Condition](#condition-choices) choices |  |  | 
| cull_against_full_and_opaque | true | Boolean true/false | If set to false, then culling against full and opaque blocks will not be considered. |  | 
| direction | *not set* | [Direction](#direction-choices) choices |  |  | 
| geometry_part | *not set* | [Geometry Part](#client-block-rule-geometry-part) item |  |  | 

### Condition choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| default | Default | The condition will succeed if the neighbor is a full and opaque block.|
| same_block | Same block | The condition wil succeed if the neighbor block as the same identifier.|
| same_block_permutation | Same block permutation | The condition will succeed if the neighbor block has the same identifier and is the exact same permutation.|
| same_culling_layer | Same culling layer | The condition will succeed if if the neighbor block shares the same culling_layer as the block being occluded, defined in the geometry component.|

### Direction choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| down | Down | |
| east | East | |
| north | North | |
| south | South | |
| up | Up | |
| west | West | |

## Client Block Rule Geometry Part

#### Client Block Rule Geometry Part Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| bone | *not set* | String |  |  | 
| cube | *not set* | Integer number |  |  | 
| face | *not set* | [Face](#face-choices) choices |  |  | 

### Face choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| down | Down | |
| east | East | |
| north | North | |
| south | South | |
| up | Up | |
| west | West | |