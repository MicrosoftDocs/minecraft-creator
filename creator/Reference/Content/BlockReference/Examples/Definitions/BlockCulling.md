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
          "face": "north" },
        "direction": "north"
       },
       {
        "geometry_part": { 
          "bone": "bb_main", 
          "cube": 0, 
          "face": "south" },
        "direction": "south"
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

### Rules

The rules list specifies the 

|Name |Default Value  |Type  |Description  |
|:----------|:----------|:----------|:----------|
|geometry_part|*not set* | List | Specifies the bone, cube, face, and direction that the block will be culled. |
