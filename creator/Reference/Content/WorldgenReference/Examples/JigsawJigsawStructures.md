---
author: iconicNurdle
ms.author: mikeam
title: Jigsaw Structures Documentation 
description: "A reference document about Jigsaw Structures"
ms.service: minecraft-bedrock-edition
---

# Jigsaw Structures

Jigsaw Structures are large structures comprised of multiple Structure Templates, each containing Jigsaw Blocks to determine their relative placement and constraints. These structures also have rules guiding how and where they are generated within the world. Examples of Jigsaw Structures include Trail Ruins and Trial Chambers.  

Note: Other Jigsaw Structures such as Villages and Bastions use a legacy version of the Jigsaw Structure System and cannot be modified via JSON.

## Properties

- Biome Filter: Specifies the biomes in which the Jigsaw Structure can generate.

- Heightmap Projection: Heightmap used to calculate the relative start height. For example, a `heightmap_projection` of ocean_floor and a `start_height` of 10 means the Jigsaw Structure will begin generating 10 blocks above the ocean floor. Possible values: `world_surface`, `ocean_floor`.

- Identifier: Identifier of the Jigsaw Structure. This is used with commands such as `/locate`, as well as within Structure Set definitions to specify which Jigsaw Structures are included in a given set.

- Max Depth: The maximum recursion depth for Jigsaw Structure Generation. For example, a Jigsaw Structure that builds a road with a max_depth of 5 will only have paths that are a maximum of 5 structures templates in length in any given direction from the origin.

- Start Height: World height at which the Jigsaw Structure should begin generation.

- Start Pool: The first Template Pool to use when generating the Jigsaw Structure.

- Step: Specifies the world generation phase in which the structure is generated. Possible values: `raw_generation`, `lakes`, `local_modifications`, `underground_structures`, `surface_structures`, `strongholds`, `underground_ores`, `underground_decoration`, `fluid_springs`, `vegetal_decoration`, `top_layer_modification`. This is used as a grouping concept to keep similar world-generation features generally bundled together.

- Terrain Adaptation: How the terrain should adapt relative to the generated Jigsaw Structure. Possible values: `bury`, `beard_thin`, `beard_box`, and `encapsulate`.

With `bury`, ambient block density will be added to all pieces of a structure, but only within the Y bounds of its starting piece. This is ideal for structures that need to bury themselves below the surface, but want another set of pieces to stick up through the terrain uncovered.
With `beard_thin`, ambient block density will be added below the structure, and block density will be reduced just above the ground.
With `beard_box`, ambient block density will be added below the structure, and block density will be reduced within the entire box the structure occupies.
With `encapsulate`, ambient block density will be added all around every piece of a structure.

## Example JSON

```json
{ 
  "format_version": "1.21.20", 
  "minecraft:jigsaw": { 
    "description": { 
      "identifier": "minecraft:trail_ruins" 
    }, 
    "biome_filters": [ 
      { 
        "test": "has_biome_tag", 
        "operator": "==", 
        "value": "has_structure_trail_ruins" 
      } 
    ], 
    "step": "underground_structures", 
    "terrain_adaptation": "bury", 
    "start_pool": "minecraft:trail_ruins/tower", 
    "max_depth": 7, 
    "start_height": -15, 
    "heightmap_projection": "world_surface" 
  } 
} 
```
