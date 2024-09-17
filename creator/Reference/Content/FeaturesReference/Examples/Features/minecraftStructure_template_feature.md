---
author: iconicNurdle
ms.author: mikeam
title: Features Documentation - minecraft:structure_template_feature
description: "A reference document detailing the 'structure_template_feature' feature"
ms.service: minecraft-bedrock-edition
---

# Features Documentation - minecraft:structure_template_feature

`minecraft:structure_template_feature` places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the `adjustment_radius` that satisfies all constraints. If none are found, the structure will not be placed.

**Succeeds if**
The structure is placed in the world.

**Fails if**
The structure fails to be placed within the world.

### Schema

```json
object "minecraft:structure_template_feature" : opt
{
  object "description"
  {
    string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
  }
  structure_reference "structure_name" // Reference to the structure to be placed.
  int "adjustment_radius"<0-16> : opt // How far the structure is allowed to move when searching for a valid placement position. Search is radial, stopping when the nearest valid position is found. Defaults to 0 if omitted.
  enumerated_value "facing_direction"<"north", "south", "east", "west", "random"> : opt // Direction the structure will face when placed in the world. Defaults to "random" if omitted.
  object "constraints" // Specific constraints that must be satisfied when placing this structure.
  {
    object "grounded" : opt // When specified, ensures the structure is on the ground.
    object "unburied" : opt // When specified, ensures the structure has air above it.
    object "block_intersection" : opt // When specified, ensures the structure only intersects with allowlisted blocks.
    {
      array "block_allowlist"
      {
        "<any array element>" : opt // List of blocks the owning structure is allowed to intersect with.
      }
    }
  }
}
```

### Example

Place a hot air balloon structure that "floats" in the air

```json
{
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
```
