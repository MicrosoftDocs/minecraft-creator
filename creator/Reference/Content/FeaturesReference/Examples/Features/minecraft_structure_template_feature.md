---
author: mammerla
ms.author: mikeam
title: "Feature Documentation - minecraft:structure_template_feature"
description: "Describes the minecraft:structure_template_feature feature type"
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# Feature Documentation - minecraft:structure_template_feature

Places a structure in the world. The structure must be stored as a .mcstructure file in the `structures` subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the adjustment_radius that satisfies all constraints. If none are found, the structure will not be placed. Succeeds if the structure is placed in the world. Fails if the structure fails to be placed within the world.


## Structure Template Feature Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| adjustment_radius | *not set* | Integer number | How far the structure is allowed to move when searching for a valid placement position. Search is radial, stopping when the nearest valid position is found. Defaults to 0 if omitted. |  | 
| constraints | *not set* | [Constraints](#constraints-item-type) item | Specific constraints that must be satisfied when placing this structure. |  | 
| description | *not set* | [Description](#description-item-type) item |  |  | 
| facing_direction"<"north", "south", "east", "west", "random" | *not set* | String | Direction the structure will face when placed in the world. Defaults to "random" if omitted. |  | 
| format_version | *not set* | String |  |  | 

## Constraints item type

#### Constraints Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_intersection | *not set* | [Block Intersection](#block-intersection-item-type) item | When specified, ensures the structure only intersects with allowlisted blocks. |  | 
| grounded | *not set* | Object | When specified, ensures the structure is on the ground. |  | 
| unburied | *not set* | Object | When specified, ensures the structure has air above it. |  | 

## Block Intersection item type

#### Block Intersection Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| block_allowlist|block_whitelist | *not set* | Array of strings |  |  | 

## Description item type

#### Description Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| identifier | *not set* | String | The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename. |  | 

## Samples

#### [Example](example)


```json
"minecraft:structure_template_feature": {
  "format_version": "1.13.0",
  "minecraft:aggregate_feature": {
    "format_version": "1.13.0",
    "minecraft:structure_template_feature": {
      "description": {
        "identifier": "example:hot_air_balloon_feature"
      },
      "structure_name": "example:hot_air_balloon",
      "adjustment_radius": 8,
      "facing_direction": "random",
      "constraints": {
        "unburied": {},
        "block_intersection": {
          "block_allowlist": [
            "minecraft:air"
          ]
        }
      }
    }
  }
}
```
