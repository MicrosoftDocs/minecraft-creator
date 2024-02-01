---
author: iconicNurdle
ms.author: mikeam
title: Block Documentation - Block Culling
description: "A reference document discussing block culling used in block JSON files"
ms.service: minecraft-bedrock-edition
---

# Block Documentation - Block Culling

These properties are part of Block Culling used within block JSON files. This helps the system determine how to change the appearance of this block.

## Code Example of a Custom Block's Culling JSON file, culling specific faces

This section shows how to specify particular faces in a geometry file for culling checks. Note that face culling and bone culling can both exist in the same culling file.

A face culls (is not visible) if the neighbor in the "direction" direction is full and opaque (a full cube, and drawing using the "opaque" render-method in the `minecraft:material_instances` component).  Note that if a minecraft:transform component rotates the block, the directions rotate as well.

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
      }
    ]
  }
}
```

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|format_version|*not set* | String| Specifies the version of the game this culling file was made for.|
|minecraft:block_culling_rules|*not set*| JSON Object| Container for the description and rules for culling.|
|rules|*not set*|List| List of all components used to identify geometry parts used in culling.|

### Description

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|description|*not set*| JSON Object| Contains the description for culling, currently only the identifier used by minecraft:geometry block components to refer to this culling data.|

### Rules

The rules list specifies the 

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|geometry_part|*not set* | List | Specifies the bone, cube, and face of the face that will be culled. |
|direction|*not set* | String | Specifies the direction of the neighbor block to check for culling.  This direction rotates with a block's Transform component. |

## Code Example of a Custom Block's Culling JSON file, culling specific whole bones

This section shows how to specify particular bones in a geometry file for culling checks.  Note that face culling & bone culling can both exist in the same culling file.

A bone culls (is not visible) if the neighbor in the "direction" direction is full and opaque (a full cube, and drawing using the "opaque" render-method in the `minecraft:material_instances` component). Note that if a `minecraft:transform` component rotates the block, the directions rotate as well.


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
          "bone": "bb_main"
        },
        "direction": "north"
      }
    ]
  }
}
```

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|format_version|*not set* | String| Specifies the version of the game this culling file was made for.|
|minecraft:block_culling_rules|*not set*| JSON Object| Container for the description and rules for culling.|
|rules|*not set*|List| List of all components used to identify geometry parts used in culling.|

### Description

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|description|*not set*| JSON Object| Contains the description for culling, currently only the identifier used by minecraft:geometry block components to refer to this culling data.|

### Rules

The rules list specifies the 

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|geometry_part|*not set* | List | Specifies the bone of the face that will be culled. |
|direction|*not set* | String | Specifies the direction of the neighbor block to check for culling.  This direction rotates with a block's Transform component. |
