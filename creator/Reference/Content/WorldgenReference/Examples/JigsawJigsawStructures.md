---
author: mammerla
ms.author: mikeam
title: Jigsaw Structures Documentation 
description: "A reference document about Jigsaw Structures"
ms.service: minecraft-bedrock-edition
ms-date: 04/29/2025
---

# Jigsaw Structures

Before taking a look at Jigsaw Structures, we should first start at structures themselves; as a reminder, a structure is a large decoration and arrangement of blocks, potentially covering many chunks of space.

Jigsaw Structures are large structures comprised of multiple Structure Templates, each containing Jigsaw Blocks to determine their relative placement and constraints. Template Pools contain any number of Structure Templates, which can contain any number of Jigsaw Blocks, which may connect to one Template Pool.

These structures also have rules guiding how and where they are generated within the world. Examples of Jigsaw Structures include Trail Ruins and Trial Chambers.

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-Driven Jigsaw Structures** experiment is enabled for a world.

> [!NOTE]
> Currently only Trail Ruins can be modified via JSON with the Data-Driven Jigsaw Structure Experimental Toggle turned on. Other Jigsaw Structures such as Villages and Bastions use a legacy version of the Jigsaw Structure System and cannot be modified via JSON.

## Construction

At a high level, Jigsaw Structures are constructed by placing a single template; adding any Jigsaw Blocks within it, to a pending list. Then, if there is more depth that can be iterated, and there are pending Jigsaw Blocks to process, we will repeat. 

Jigsaw Blocks act like connectors, allowing structures to grow by attaching new pieces. The `max_depth` sets a limit on how many times new pieces can be added through these connectors. Once the limit is reached, the structure stops expanding, preventing infinite growth.

> Note: This process can be relatively time consuming depending on the complexity and quantity of Jigsaw Blocks in any given template.

## Properties

| Name| Default Value| Requirement Status| Type| Description| Example Values|
| ----| -------------| ------------------| ----| -----------| --------------|
| [description](#description) | *not set* | Required | JSON Object | Object containing the identifier of the Jigsaw Structure. This MUST contain an identifier. |  |
| [biome_filters](#biome_filters) | *not set* | Optional | Array of JSON Objects | Biomes in which the Jigsaw Structure can generate.|  |
| [step](#step) | *not set* | Required | String | Specifies the world generation phase in which the Jigsaw Structure is generated.| trail_ruins: `"underground_structures"` |
| [terrain_adaptation](#terrain_adaptation) | `"none"` | Optional | String | How the terrain should adapt relative to the generated Jigsaw Structure. | trail_ruins: `"bury"` |
| start_pool  | *not set* | Required | String | The first Template Pool to use when generating the Jigsaw Structure.| trail_ruins: `"minecraft:trail_ruins/tower"` |
| start_jigsaw_name | *not set* | Optional | String | The name of the Jigsaw Block from the `start_pool` to be placed first.|  |
| [max_depth](#max_depth) | *not set* | Required | Positive Integer | The maximum recursion depth for Jigsaw Structure generation. | trail_ruins: `7`  |
| [start_height](#start_height) | *not set* | Required | JSON Object | Height at which the Jigsaw Structure's `start_pool` should begin. |  |
| [heightmap_projection](#heightmap_projection) | `"world_surface"` | Optional | String | Used to calculate the relative `start_height`. |  |
| [dimension_padding](#dimension_padding) | `0` | Optional | Positive Integer or<br>JSON Object | Dimension padding prevents the structure from getting cut off at the top or bottom of the world. |  |
| max_distance_from_center | `80` | Optional | Positive Integer | The max distance from the jigsaw pieces to the structure start. 1 to 128 inclusive.| trail_ruins: `80` |
| [pool_aliases](#pool_aliases) | *not set* | Optional | Array of JSON Objects | Pool Aliases are used to determine which Template Pool can be a substitute. |  |
| [liquid_settings](#liquid_settings) | `"apply_waterlogging"` | Optional | String | How to handle waterloggable blocks overlapping with existing liquid. |  |

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

### Description

Object containing the identifier of the Jigsaw Structure. This MUST contain an identifier.

#### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| identifier | *not set* | Required | String | Identifier of the Jigsaw Structure. This is referenced by Structure Sets when adding Structures to the world generation. This will also be used in commands such as the `/locate` command.<br><br>Must include a namespace. The 'minecraft' namespace must not be used, unless overriding a Vanilla item.|  trail_ruins: `"minecraft:trail_ruins"`  | 

### biome_filters

Biomes in which the Jigsaw Structure can generate.

Biome filters are just a type of Entity Filter that only iterative over biomes. As such, most of the available [tests](../../EntityReference/Examples/FilterList.md), while functional, may not be useful in the context of biomes.

> [!NOTE]
> Generally speaking, the most useful `test` will be [`"has_biome_tag"`](../../EntityReference/Examples/Filters/has_biome_tag.md). With a `value` of the strings of the tags you're looking for. Here is a list of available [biome tags](../../entityreference/examples/definitions/nestedtables/biome_filter.md).

#### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| subject | `"self"` | Optional | String | The subject of this filter test. For biome_filters, you'll want to use the default value.<br><br>Here is a list of available [subjects](../../entityreference/examples/filters/has_biome_tag.md). |  |
| test | *not set* | Required | String | The filter test applied to each biome.<br><br>Here is a list of available [tests](../../entityreference/examples/filterlist.md). | trail_ruins: `"has_biome_tag"` |
| operator | `"=="` | Optional | String | The comparison to apply with `value`.<br><br> Here is a list of available [operators](../../entityreference/examples/filters/has_biome_tag.md#operator-choices).  | trail_ruins: `"=="` |
| value | *not set* | Required | Varies | The data the test will test with.<br><br> The expected type can be different for each [test](../../entityreference/examples/filterlist.md). | trail_ruins: `"has_structure_trail_ruins"` |

```json
"biome_filters": [ 
  { 
    "test": "has_biome_tag", 
    "value": "has_structure_trail_ruins" 
  } 
], 
```

### step

Specifies the world generation phase in which the structure is generated. This is used as a grouping concept to keep similar world-generation features generally bundled together. Useful for ordering the structures against each other.

#### Values
|Value      |Order       |
|:----------|:-----------|
| `"raw_generation"` | 1 |
| `"lakes"` | 2 |
| `"local_modifications"` | 3 |
| `"underground_structures"` | 4 |
| `"surface_structures"` | 5 |
| `"strongholds"` | 6 |
| `"underground_ores"` | 7 |
| `"underground_decoration"` | 8 |
| `"fluid_springs"` | 9 |
| `"vegetal_decoration"` | 10 |
| `"top_layer_modification"`  | 11 |


### terrain_adaptation

How the terrain should adapt relative to the generated Jigsaw Structure. 

> Note: "Beard" is the phrase used to denote the act of adding mass below structures that happen to get spawned floating in air.

#### Values
|Value      |Description |
|:----------|:-----------|
| `"none"` | Do not adjust ambient block density. |
| `"bury"` | Ambient block density will be added to all pieces of a structure, but only within the Y bounds of its starting piece. This is ideal for structures that need to bury themselves below the surface, but want another set of pieces to stick up through the terrain uncovered. |
| `"beard_thin"` | Ambient block density will be added below the structure and block density will be reduced just above the ground. |
| `"beard_box"` | Ambient block density will be added below the structure, and block density will be reduced within the entire box the structure occupies. |
| `"encapsulate"` | Ambient block density will be added all around every piece of a structure. |

### max_depth

The maximum recursive steps the generation can take. Value between 0 and 20 (inclusive).

For example, a Jigsaw Structure that builds a road with a `max_depth` of 5 will only have paths that are a maximum of 5 structures templates in length in any given direction from the origin.

### start_height

The height provider which gives us the offset at which the Jigsaw Structure's `start_pool` should begin. 

> [!NOTE]
> This is an offset from the `heightmap_projection`. If `heightmap_projection` is set, it is recommended to use the [`"absolute"`](#absolute) Vertical Anchor for ease of use.

##### height provider type

The `type` of the the height provider. These values determine the format of the `start_height` JSON Object. That is, the rest of properties of the object.

#### Values

|Value      |Description |
|:----------|:-----------|
| `"constant"` | Constant anchor point.<br>[`start_height`](#start_height) now expects the rest of the parameters to match the [`"constant"`](#constant-height-provider) format. |
| `"uniform"` | Uniform distribution of possible anchor points.<br>Requires that the [`start_height`](#start_height)'s `value` be in the [`"uniform"`](#uniform-height-provider) format. |

#### `"constant"` height provider

When the `type` is `"constant"` it now also expects one vertical anchor point to use as the constant height.

##### Properties
|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#height-provider-type) | *not set* | Required | String | Determines the rest of the parameters in this JSON Object. |  `"constant"` |
| value | *not set* | Required | JSON Object  | The [Vertical Anchor](#vertical-anchor) to use as the constant height. |  trail_ruins: `{ "absolute": -15 }` |

```json
"start_height": {
  "type": "constant",
  "value": {
    "absolute": 10 
  }, 
},
```

#### `"uniform"` height provider

When the `type` is `"uniform"` it now also expects two vertical anchor points to use as the minimum and maximum heights over which to perform the uniform distribution.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#height-provider-type) | *not set* | Required | String | Determines the rest of the parameters in this JSON Object. | `"uniform"` |
| min | *not set* | Required | JSON Object | The [Vertical Anchor](#vertical-anchor) to use as the minimum value of the uniform distribution. |  |
| max | *not set* | Required | JSON Object | The [Vertical Anchor](#vertical-anchor) to use as the maximum value of the uniform distribution. |  |

```json
"start_height": {
  "type": "uniform",
  "min": {
    "below_top": 100 
  },
  "max": {
    "below_top": 200
  } 
},
```

### Vertical Anchor

A vertical anchor defines a point in the dimension to offset from. There are four types and each has it own individually named property:

#### Absolute

An absolute height.

#### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| absolute | *not set* | Required | Integer | An absolute height. |  trail_ruins: `-15` |

#### Above Bottom

A relative height above the bottom of the dimension. Must be positive. 

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| above_bottom | *not set* | Required | Positive Integer | A relative height above the bottom of the dimension. |  |

#### Below Top

A relative height below the top of the dimension. Must be positive. 

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| below_top | *not set* | Required | Positive Integer | A relative height below the top of the dimension. |  |

#### From Sea

A relative height starting at the dimension's sea level.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| from_sea | *not set* | Required | Integer | A relative height starting at the dimensions sea level. |  |


### heightmap_projection

The heightmap that should be used when determining the starting height.

#### Values

|Value      |Description |
|:----------|:-----------|
| `"world_surface"` | Begin generating relative to the first non-air block encountered from the top down. |
| `"ocean_floor"` | Begin generating relative to the first motion-blocking block encountered from the top down. |

For example, this:

```json
"heightmap_projection": "ocean_floor",
"start_height": {
  "type": "constant",
  "value": { 
     "absolute": 10 
  }, 
},
```

means that the Jigsaw Structure will begin generating 10 blocks above the ocean floor.

### dimension_padding

Used to specify the padding at the top and bottom of the dimension when placing Jigsaw Structures. Stops the structure from attempting to place blocks where they cannot be placed. This prevents the structure from creating holes in the bedrock or being cut off at the top.

#### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| bottom | `0` | Optional | Positive Integer | Distance in blocks from the bottom of the dimension that may not be used by the Jigsaw Structure. |  |
| top | `0` | Optional | Positive Integer | Distance in blocks from the top of the dimension that may not be used by the Jigsaw Structure. | |


### pool_aliases 

Used to rewire jigsaw pool connections by redirecting pool references in an individual structure. Done by specifying aliases for Template Pools.  This can allow for themes across a full structure. 

For instance: an alias `chambers/melee`, can be replaced by `chambers/melee/normal`, `chambers/melee/poison` or `chambers/melee/wither` which are specialized Template Pools.

##### pool alias type

The `type` of the pool alias. These values determine the format of each individual pool alias JSON Object. That is, the rest of the properties on the object.

##### Values

|Value      |Description |
|:----------|:-----------|
| `"direct"` | Pool alias for a Direct target.<br>[`pool_aliases`](#pool_aliases) now expects the rest of the parameters to match the [`"direct"`](#direct-pool-alias) format. |
| `"random"` | Pool alias for a Random list of targets.<br>[`pool_aliases`](#pool_aliases) now expects the rest of the parameters to match the [`"random"`](#random-pool-alias) format. |
| `"random_group"` | Pool alias for a RandomGroup of aliases.<br>[`pool_aliases`](#pool_aliases) now expects the rest of the parameters to match the [`"random_group"`](#random_group-pool-alias) format. |

#### direct pool alias

Pool alias for a Direct target.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#pool-alias-type) | *not set* | Required | String | Determines the rest of the parameters in this JSON Object. |  `"direct"` |
| alias | *not set* | Required | String | The alias of the Template Pool to replace. |  |
| target | *not set* | Required | String | The Template Pool to substitute when matched. |  |

```json
"pool_aliases" : [
  {
    "type": "direct",
    "alias": "test:trial_chambers/ranged",
    "target": "test:trial_chambers/skeleton"
  },
],
```

#### random pool alias

Pool alias for a Random list of targets.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#pool-alias-type) | *not set* | Required | String | Determines the rest of the parameters in this JSON Object. |  `"random"` |
| alias | *not set* | Required | String | The alias of the Template Pool to replace.|  |
| targets | *not set* | Required | JSON Object | A [weighted random list](#weighted-random-item) containing [items](#weighted-random-item) that contain potential Template Pools that will be randomly chosen from when the alias matches. |  |

```json
"pool_aliases": [
  {
    "type": "random",
    "alias": "test:trial_chambers/small_melee",
    "targets": [
      {
        "data": "test:trial_chambers/small_melee/slime",
        "weight": 1
      },
      {
        "data": "test:trial_chambers/small_melee/cave_spider",
        "weight": 1
      },
    ],
  },
],
```

#### random_group pool alias

Pool alias for a RandomGroup of aliases.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| [type](#pool-alias-type) | *not set* | Required | String | Determines the rest of the parameters in this JSON Object. |  `"random_group"` |
| groups | *not set* | Required | JSON Object | A [weighted random list](#weighted-random-item) containing [items](#weighted-random-item) that contain [pool alias](#pool_aliases) items. The pool alias types can be any valid type except [`random_group`](#random_group-pool-alias). |  |

```json
"pool_aliases": [
  {
	  "type": "random_group",
    "groups": [
        {
          "data": [
            {
              "type": "direct",
              "alias": "test:trial_chambers/ranged",
              "target": "test:trial_chambers/skeleton"
            },
            {
              "type": "direct",
              "alias": "test:trial_chambers/slow_ranged",
              "target": "test:trial_chambers/slow_ranged/skeleton"
            }
          ],
          "weight": 1
      },
      {
        "data": [
          {
            "type": "random",
            "alias": "test:trial_chambers/small_melee",
            "targets": [
              {
                "data": "test:trial_chambers/small_melee/slime",
                "weight": 1
              },
              {
                "data": "test:trial_chambers/small_melee/cave_spider",
                "weight": 1
              }
            ]
          }
        ],
        "weight": 1
      }
    ]
  }
],
```

### Weighted Random List

A weighted random list is a collection of items where each item is assigned a specific weight, representing its probability of being selected. The weights determine how likely each item is to be chosen when a random selection is made. Items with higher weights have a greater chance of being selected compared to items with lower weights.

Consider a list of fruits with associated weights:
- Apple: 1
- Banana: 2
- Cherry: 3

The total weight is: 1 + 2 + 3 = 6

The probability of selecting each fruit is:

- Apple: `1/6 ≈ 16.67%`
- Banana: `2/6 ≈ 33.33%`
- Cherry: `3/6 ≈ 50%`

#### Weighted Random Item

A used by [Weighted Random Lists](#weighted-random-list). the `weight` property must be positive. The `data` property can be anything.

##### Properties

|Name       |Default Value |Requirement Status |Type |Description |Example Values |
|:----------|:-------------|:------------------|:----|:-----------|:------------- |
| data | *not set* | Required | JSON Object | The data used when randomly selected. |  |
| weight | *not set* | Required | Positive Integer | The weight of the item relative to the total weight of all items in the list. |  |

### liquid_settings

How to handle waterloggable blocks overlapping with existing liquid.

#### Values
|Value      |Description |
|:----------|:-----------|
| `"apply_waterlogging"` | Causes a waterloggable block to become waterlogged, if it overlaps with existing liquid. |
| `"ignore_waterlogging"` | Do not waterlog any waterloggable blocks that overlap existing liquid. |