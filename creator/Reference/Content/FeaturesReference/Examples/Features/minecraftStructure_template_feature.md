---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Features Documentation - minecraft:structure_template_feature
ms.prod: gaming
---

# Features Documentation - minecraft:structure_template_feature

`minecraft:structure_template_feature` places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the `adjustment_radius` that satisfies all constraints. If none are found, the structure will not be placed.

**Succeeds if**
The structure is placed in the world.

**Fails if**
The structure fails to be placed within the world.

## Example

### Place a hot air balloon structure that "floats" in the air

```json
{
  "format_version": 1.13.0,
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
          "example:air"
        ]
      }
    }
  }
}
```
