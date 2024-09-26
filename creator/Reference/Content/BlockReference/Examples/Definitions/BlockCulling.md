---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - Block Culling
description: "A reference document discussing block culling used in block JSON files"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block Culling

These properties are part of Block Culling used within block JSON files. This helps the system determine how to change the appearance of this block.

## Code Example of a Custom Block's Culling JSON file

This section shows how to specify particular faces and/or bones in a geometry file for culling checks. 
Note that face culling and bone culling can both exist in the same culling file.

A face or bone culls (becomes invisible) if the neighbor in the `"direction"` direction is full and opaque (a full cube, and drawing using the "opaque" render-method in the `minecraft:material_instances component`). 
Note that if a `minecraft:transform` component rotates the block, the directions rotate as well.

```json
{
  "format_version": "1.20.60",
  "minecraft:block_culling_rules": {
    "description": {
       "identifier": "test:sushi_cull"
    },
    "rules": [
      {
       "geometry_part": { 
          "bone": "bb_main",
          "cube": 0, 
          "face": "north" 
        },
        "direction": "north"
      },
      {
        "geometry_part": { 
          "bone": "bb_main", 
          "cube": 0, 
          "face": "south" 
        },
        "direction": "south"
      },
      {
        "geometry_part": { 
          "bone": "bb_main"
        },
        "direction": "east"
      }
    ]
  }
}
```

**Example: minecraft:geometry.full_block**

```json
{
  "format_version": "1.20.60",
  "minecraft:block_culling_rules": {
    "description": {
      "identifier": "demo:my_glass_block"
    },
    "rules": [
      {
       "geometry_part": { 
          "bone": "block",
          "cube": 0,
          "face": "north" 
        },
        "direction": "north"
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
          "face": "west"
        },
        "direction": "west"
      },
      {
        "geometry_part": {
          "bone": "block",
          "cube": 0, 
          "face": "up"
        },
        "direction": "up"
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

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|format_version|*not set* | String| Specifies the version of the game this entity was made in. If the version is lower than the current version, any changes made to the entity in the vanilla version will be applied to it.|
|minecraft:block_culling_rules|*not set*| JSON Object| JSON container used for descriptions, especially the identifier for the name of the culled version of the block..|
|rules|*not set*|List| List of all components used to identify geometry parts used in culling.|

### Description

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|description|*not set* | JSON Object | Contains the identifier used by minecraft:geometry block components to refer to this culling data |

### Rules

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|geometry_part|*not set* | JSON Object | Specifies the bone, cube, and face that the block will be culled. The cube and face fields are optional to allow culling a specific face. Omitting these fields will cull the whole bone. |
|direction|*not set* | String | Specifies the direction of the neighbor block to check for culling. This direction rotates with a block's Transform component. |
