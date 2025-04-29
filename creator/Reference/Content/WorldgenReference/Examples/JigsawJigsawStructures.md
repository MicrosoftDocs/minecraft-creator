---
author: mammerla
ms.author: mikeam
title: Jigsaw Structures Documentation 
description: "A reference document about Jigsaw Structures"
ms.service: minecraft-bedrock-edition
ms-date: 04/29/2025
---

# Jigsaw Structures

Before taking a look at Jigsaw Structures, we should first start at sturctures themselves; as a reminder, a structure is a large decoration and arrangement of blocks, potentially covering many chunks of space.

Jigsaw Structures are large structures comprised of multiple Structure Templates, each containing Jigsaw Blocks to determine their relative placement and constraints. Template Pools contain any number of structure templates, which can contain any number of jigsaw blocks, which may connect to one template pool.

These structures also have rules guiding how and where they are generated within the world. Examples of Jigsaw Structures include Trail Ruins and Trial Chambers.

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-driven Jigsaw Structures** experiment is enabled for a world.

> [!NOTE]
> Currently only Trail Ruins can be modified via JSON with the Data Driven-Jigsaw Structure Experimental Toggle turned on. Other Jigsaw Structures such as Villages and Bastions use a legacy version of the Jigsaw Structure System and cannot be modified via JSON.

## Construction

At a high level Jigsaw structures are constructed by placing a single template; adding any jigsaw blocks within it, to a pending list. Then if there is more depth that can be iterated, and there are pending jigsaw blocks to process, we will repeat. 

Jigsaw blocks act like connectors, allowing structures to grow by attaching new pieces. The `max_depth` sets a limit on how many times new pieces can be added through these connectors. Once the limit is reached, the structure stops expanding, preventing infinite growth.

> Note: This process can be relatively time consuming depending on the complexity and quantity of jigsaw blocks in any given template.

## Properties

| Properties| Type| Description|
| ----------| ----| -----------|
| description | ```{ "identifier": "<string>" }``` | Identifier of the Structure This is referenced by Structure Sets when adding Structures to the world generation. This will also be used in commands such as the `/locate` command. |
| biome_filter | `<BiomeFilter>` | Any valid Biome Filter can be used.|
| step | `<GenerationStep>` | Specifies the world generation phase in which the structure is generated. One of the following: `raw_generation`, `lakes`,`local_modifications`, `underground_structures`, `surface_structures`,`strongholds`, `underground_ores`, `underground_decoration`, `fluid_springs`,`vegetal_decoration`, `top_layer_modification`. This is used as a grouping concept to keep similar world-generation features generally bundled together.|
| terrain_adaptation | [`<Adaptation>`](#terrain-adaptations) |How the terrain should adapt relative to the generated Jigsaw Structure. One of the following: `bury`, `beard_thin`, `beard_box`, and `encapsulate`.|
| start_pool  | `<string>` | The first Template Pool to use when generating the Structure.|
| start_jigsaw_name | `<string>` | (optional) The name of the jigsaw block the structure start attaches to.|
| max_depth | `<Positive Integer>` | The maximum recursive steps the generation can take. Value between 0 and 20 (inclusive).|
| start_height | [`<HeightProvider>`](#height-provider) | If `heightmap_projection` is not set, the structure will start at the provided value. If it is provided it will act as an offset.|
| heightmap_projection | `<Projection>` | The heightmap that should be used when determining the starting height. One of the following: `world_surface`, `ocean_floor`.|
| dimension_padding | [`<Integer or DimensionPadding>`](#dimension-padding) |(Optional) Defaults to `0`. Padding at the top and bottom of the dimension.|
| max_distance_from_center | `<Positive Integer>` |The max distance from the jigsaw pieces to the structure start, 1 to 128 inclusive.|
| liquid_settings | `<type>` | (Optional) Defaults to `apply_waterlogging`. How blocks are handled when overlapping with `minecraft:water`.<br><li>If `apply_waterlogging` is set, the block will be waterlogged when placed in water.</li><li>If `ignore_waterlogging` is set, the block will retain it's state.</li></br>|
| pool_aliases | [`{<type>, <...>}`](#pool-aliases) | (Optional) Used to rewire jigsaw pool connections by redirecting pool references in individual structure. |

## Terrain Adaptations

With `bury`, ambient block density will be added to all pieces of a structure, but only within the Y bounds of its starting piece. This is ideal for structures that need to bury themselves below the surface, but want another set of pieces to stick up through the terrain uncovered.

With `beard_thin`, ambient block density will be added below the structure, and block density will be reduced just above the ground.

With `beard_box`, ambient block density will be added below the structure, and block density will be reduced within the entire box the structure occupies.

With `encapsulate`, ambient block density will be added all around every piece of a structure.

## Height Provider

`"type": <type>`: The type of height provider. One of `constant` or `uniform`.

If the type is `constant`:
- [`"value": <VerticalAnchor>`](#vertical-anchor): The vertical anchor to use as the constant height.

If the type is `uniform`:
- [`"min_inclusive": <VerticalAnchor>`](#vertical-anchor): The vertical anchor to use as the minimum height.
- [`"max_inclusive": <VerticalAnchor>`](#vertical-anchor): The vertical anchor to use as the maximum height.

### Vertical Anchor

A vertical anchor defines a point in the dimension to offset from. You must only specify one of the following fields.

- `"absolute": <Integer>`: An absolute height
- `"above_bottom": <Integer>`: Must be positive. A relative height above the bottom of the dimension. 
- `"below_top": <Integer>`: Must be positive. A relative height below the top of the dimension.
- `"from_sea": <Integer>`: A relative height starting at the dimensions sea level.

## Dimension Padding

Used to specify the padding at the top and bottom of the dimension when placing structures. Preventing the structure from attempting to place blocks where they cannot be placed. This prevents the structure from creating holes in the bedrock or being cut off at the top.

- `"bottom": <Integer>`: Optional, defaults to `0`. Must be positive. Distance in blocks from the bottom of the dimension that may not be used by the structure
- `"top": <Integer>`: Optional, defaults to `0`. Must be positive. Distance in blocks from the top of the dimension that may not be used by the structure

## Pool Aliases 

Used to specify aliases for template pools.  This can allow for themes across a full structure. e.g. An alias `chambers/melee`, can be replaced by `chambers/melee/normal`, `chambers/melee/poison` or `chambers/melee/wither` which are specialized template pools.
  
`"type": <type>`: The type of pool alias.  One of `direct`, `random` or `random_group`

If the type is `direct`:

- `"alias": "<String>"`: The template pool id used to determine which pool to replace.
- `"target": "<String>"`: the template pool to substitute when matched.

If the type is `random`:

- `"alias": "<String>"`: The template pool id used to determine which pool to replace.
- `"targets": [<WeightedRandomItem(String)>, ...]`: A list of weighted template pools that will be randomly chosen from when the alias matches.
  
If the type is `random_group`:

- `"groups": [<WeightedRandomItem(PoolAlias)>, ...]`: A list of weighted pool alias items. the pool alias type cannot be any valid type except `random_group`.

### Weighted Random Item

Item of a weighted random list/array which has a weight and the data it represents.

- `"data": <DataType>`: The data used when randomly selected.
- `"weight": <Integer>`: The weight of the item relative to the total weight of all items in the list.

## Example JSON

The JSON below shows how to combine the properties above to make `trail_ruins`.

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
        "value": "has_structure_trail_ruins" 
      } 
    ], 
    "step": "underground_structures", 
    "terrain_adaptation": "bury", 
    "start_pool": "minecraft:trail_ruins/tower", 
    "max_depth": 7, 
    "start_height": {
        "type": "constant",
        "value": { "absolute": -15 }, 
    },
    "heightmap_projection": "world_surface",
    "max_distance_from_center": 80
  } 
} 
```