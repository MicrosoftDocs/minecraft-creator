---
author: mammerla
ms.author: mikeam
title: "Block Culling Documentation - minecraft:block_culling"
description: "Describes the minecraft:block_culling block culling"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Block Culling Documentation - minecraft:block_culling


## Client Block Block Culling Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| description | *not set* | [Description](#client-block-description) item |  |  | 
| rules | *not set* | [Rules](#client-block-rule) item |  |  | 

## Client Block Description

#### Client Block Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The namespace and identifier for this culling rule. |  | 

## Client Block Rule

#### Client Block Rule Properties

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

## Samples

#### [Culling Rules Horizontal Glass](/block_culling/horizontal_glass.culling_rules.json)


```json
{
  "format_version": "1.21.80",
  "minecraft:block_culling_rules": {
    "description": {
      "identifier": "demo:horizontal_glass"
    },
    "rules": [
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "north"
        },
        "direction": "north",
        "condition": "same_block"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "south"
        },
        "direction": "south",
        "condition": "same_block"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "east"
        },
        "direction": "east",
        "condition": "same_block"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "west"
        },
        "direction": "west",
        "condition": "same_block"
      }
    ]
  }
}
```

#### [Culling Rules Leaves](/block_culling/leaves.culling_rules.json)


```json
{
  "format_version": "1.21.80",
  "minecraft:block_culling_rules": {
    "description": {
      "identifier": "demo:leaves"
    },
    "rules": [
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "north"
        },
        "direction": "north",
        "condition": "same_culling_layer"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "west"
        },
        "direction": "west",
        "condition": "same_culling_layer"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "up"
        },
        "direction": "up",
        "condition": "same_culling_layer"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "south"
        },
        "direction": "south"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "east"
        },
        "direction": "east"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0,
          "face": "down"
        },
        "direction": "down"
      }
    ]
  }
}
```
