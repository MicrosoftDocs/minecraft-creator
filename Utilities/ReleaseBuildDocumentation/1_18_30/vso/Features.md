<big>Version: 1.18.30.4</big>

[[_TOC_]]

# Overview

Features are decorations scattered throughout the world. Things such as trees, plants, flowers, springs, ore, and coral are all features. Basically, if it isn't the terrain or a mob, it's probably a feature!
Features can be standalone or composed of multiple sub-features. In practice, most features in Minecraft are defined as a chain of two or more features. These chains typically end with features that place blocks in the world. Other feature types control flow such as conditional, sequential, or random distribution.



# JSON format

All features must specify the version that they target via the "format_version" field. The remainder of the data is contained in independet JSON sub-objects for each supported feature type. These feature types define the behavior of the feature and include properties specific to that behavior. To be valid, a definition must include exactly one of these type objects. See the full feature schema below for additional details and the full list of supported feature types.

**Here is a sample feature**
```
{
  "format_version": "1.13.0",
  "minecraft:ore_feature": {
    "description": {
      "identifier": "minecraft:coal_ore_feature"
    },
    "count": 17,
    "places_block": "minecraft:coal_ore",
    "may_replace": [
      {
        "name": "minecraft:stone"
      }
    ]
  }
}
```



# Adding features

Features are read from JSON files in the "features" subfolder of behavior packs. Loading enforces one feature per file; the file name and the name of the feature must match. Feature names can include a namespace of the form "namespace:feature_name" to help distinguish them from features that may be in other behavior packs. This namespace is not considered when matching the filename to the feature name. For example, in a file called "my_tree_feature.json" both "my_tree_feature" and "my_pack_name:my_tree_feature" would be valid identifiers. If two behavior packs define the same feature name (including namespace), then the feature from the highest pack in the stack will be used. This allows users to override base features if desired.



# Supported features



## minecraft:aggregate_feature

'minecraft:aggregate_feature' places a collection of features in an arbitary order. All features in the collection use the same input position. Features should not depend on each other, as there is no guarantee on the order the features will be placed.
Succeeds if: At lease one feature is placed successfully.
Fails if: All features fail to be placed.


**Example use: scattering multiple different plants around a monument.**
```
{
  "format_version": 1.3.0,
  "minecraft:aggregate_feature": {
    "description": {
      "identifier": "example:monument_with_flowers_feature"
    },
    "features": [
      "monument_feature",
      "scatter_white_flowers_feature",
      "scatter_yellow_flower_feature"
    ]
  }
}
```



## minecraft:sequence_feature

'minecraft:sequence_feature' places a collection of features sequentially, in the order they appear in data. The output position of the previous feature is used as the input position for the next. For example, a tree feature is placed at (0, 0, 0) and places blocks up to (0, 10, 0). The next feature in the sequence begins at (0, 10, 0).
Succeeds if: All features in the sequence are successfully placed.
Fails if: Any feature in the sequence fails to be placed. Features that have not yet been placed at the time of failure are skipped.


**Example use: Scattering fruit throughout the canopy of a tree.**
```
{
  "format_version": 1.3.0,
  "minecraft:sequence_feature": {
    "description": {
      "identifier": "example:oak_tree_then_apples_feature"
    },
    "features": [
      "oak_tree_feature",
      "scatter_apples_feature"
    ]
  }
}
```



## minecraft:beards_and_shavers

'minecraft:beards_and_shavers' will build a 'beard' or 'shave' out space so as to provide a clear space for a feature to place.
Succeeds if: a beard/shave is made (this should always happen).
Fails if: will always return placement pos, but interior feature placement not guaranteed.


**Example use: provides an area for interior structure placement**
```
{"code:beards_and_shavers": {
					"description": {
					  "identifier": "..."
					},
					"places_feature": "minecraft:feature_that_places_a_structure",
					"bounding_box_min": [ -2, 0, -2 ],
					"bounding_box_max": [ 2, 8, 2 ],
					"y_delta": 2.0,
					"surface_block_type": "minecraft:grass",
					"subsurface_block_type": "minecraft:dirt",
					"beard_raggedness_min": 0.1,
					"beard_raggedness_max": 0.3
				}}
```



## minecraft:cave_carver_feature

'minecraft:cave_carver_feature' carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will also only work when placed specifically in the pass "pregeneration_pass".


**Example use: Carve caves normally.**
```
{
			"format_version": "1.16.100",
				"minecraft:cave_feature": {
					"description": {
						"identifier": "minecraft:underground_cave_carver_feature"
					},
					"fill_with": "minecraft:air",
					"width_modifier": 0.0,
					"skip_carve_chance": 15
				}
			}
```



## minecraft:conditional_list

'minecraft:conditional_list' Places the first suitable feature within a collection.
These conditional features will be evaluated in order.
Succeeds if: A condition is successfully resolved.
Fails if: No condition is successfully resolved.


**Example use: assigning a feature to an expression**
```
"conditional_features" : [
						{ 
							"places_feature" : "minecraft:some_feature_or_other",
							"condition" : "query.check_some_block_property(),
						},
					],
					"early_out_scheme": "placement_success"
				
```



## minecraft:fossil_feature

'minecraft:fossil_feature' generates a skeletal structure composed of bone blocks and parametric ore blocks.Succeeds if: The fossil is placed.
Fails if: The fossil is not placed because it overlaps with another structure or because its bounding box has too many corners occupied by air or fluid.


**Example use: Fossil composed of bone blocks and coal ore blocks.**
```
{
					"format_version": "1.16.0",
					"minecraft:fossil_feature": {
						"description": {
							"identifier": "minecraft:fossil_feature"
						},
						"ore_block": "minecraft:coal_ore",
						"max_empty_corners": 4
					}
				}
```



## minecraft:geode_feature

'minecraft:geode_feature' generates a rock formation to simulate a geode. Each layer of, and block within, the geode can be replaced. Succeeds if: At least one block within the geode is placed.
Fails if: All blocks within the geode fail to be placed.


**Example use: Diamond geodes with emerald blocks inside and obsidian on the outside.**
```
{
  "format_version": "1.13.0",
  "minecraft:geode_feature": {
	"description": {
	  "identifier": "minecraft:diamond_geode_feature"
	},
	"filler": "minecraft:air",
	"inner_layer": "minecraft:diamond_block",
	"alternate_inner_layer": "minecraft:emerald_block",
	"middle_layer": "minecraft:calcite",
	"outer_layer": "minecraft:obsidian",
	"inner_placements": [
	  {
		"name": "minecraft:amethyst_cluster",
		"states": {
		  "amethyst_cluster_type": "small"
		}
	  }
	],
	"min_outer_wall_distance": 4,
	"max_outer_wall_distance": 7,
	"min_distribution_points": 3,
	"max_distribution_points": 5,
	"min_point_offset": 1,
	"max_point_offset": 3,
	"max_radius": 16,
	"crack_point_offset": 2.0,
	"generate_crack_chance": 0.95,
	"base_crack_size": 2.0,
	"noise_multiplier": 0.025,
	"use_potential_placements_chance": 0.35,
	"use_alternate_layer0_chance": 0.083,
	"placements_require_layer0_alternate": true,
	"invalid_blocks_threshold": 1
  }
}
```



## minecraft:growing_plant_feature

'minecraft:growing_plant_feature' places a growing plant in the world. A growing plant is a column that is anchored either to the ceiling or the floor, based on its growth direction.
The growing plant has a body and a head, where the head is the tip of the plant, and the body consists of the remainder blocks.
This feature can be used to define growing plants with variable body and head blocks, e.g. Cave Vines.


**Example use: Defining a growing plant feature with variable body and head blocks and height distribution.**
```
{
  "format_version": "1.16.0",
  "minecraft:growing_plant_feature": {
    "description": {
      "identifier": "minecraft:cave_vine_feature"
    },
    "height_distribution":  [
      [{"range_min": 1, "range_max": 13}, 2],
      [{"range_min": 1, "range_max": 2}, 3],
      [{"range_min": 1, "range_max": 7}, 10]
    ],
    "growth_direction": "DOWN",
    "age" : {"range_min": 17, "range_max": 26},
    "body_blocks" : [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_body_with_berries", 1 ]
    ],
    "head_blocks" : [
      ["minecraft:cave_vines", 4],
      ["minecraft:cave_vines_head_with_berries", 1 ]
    ],
	"allow_water": true
  }
}
```



## minecraft:hell_cave_carver_feature

'minecraft:hell_cave_carver_feature' carves a cave through the Nether in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will also only work when placed specifically in the pass "pregeneration_pass".


**Example use: Carve nether caves normally.**
```
{
			"format_version": "1.16.100",
				"minecraft:cave_feature": {
					"description": {
						"identifier": "minecraft:hell_cave_carver_feature"
					},
					"fill_with": "minecraft:air"
					"width_modifier": 0.0
				}
			}
```



## minecraft:multiface_feature

'minecraft:multiface_feature' places one or a few multiface blocks on floors/walls/ceilings. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if this feature can be placed on them based on the list provided in the 'can_place_on' field. If no 'can_replace_on' field is specified, the 'place_block' block can be placed on any existing block.
This feature will also try to spread the 'place_block' block around the location in world the feature is placed.
Succeeds if: At least one block is successfully placed.
Fails if: All block placements fail.


**Example use: Blue vines in caves.**
```
{
  "format_version": 1.13.0,
  "minecraft:multiface_feature": {
    "description": {
      "identifier": "example:blue_vines_feature"
    },
    "places_block": "example:blue_vine",
    "search_range": 64,
	"can_place_on_floor": true,
	"can_place_on_ceiling": true,
	"can_place_on_wall": true,
	"chance_of_spreading": 0.5,
    "can_place_on": [
      "minecraft:stone"
    ]
  }
}
```



## minecraft:ore_feature

'minecraft:ore_feature' places a vein of blocks to simulate ore deposits. Despite the name, any block can be placed by this feature. During placement, existing world blocks are checked to see if they can be replaced by the new ore block based on the list provided in the 'may_replace' field of a 'replace_rules' entry. If no 'may_replace' field is specified in a 'replace_rule' entry, the ore block can replace any existing block.
Succeeds if: At least one ore block is successfully placed.
Fails if: All ore block placements fail.


**Example use: Malachite ore in different materials.**
```
{
  "format_version": 1.13.0,
  "minecraft:ore_feature": {
    "description": {
      "identifier": "example:malachite_ore_feature"
    },
	"count": 12,
	"replace_rules": [
		{
			"places_block": "example:malachite_ore",
			"may_replace": [
				"minecraft:stone"
			]
		},
		{
			"places_block": "example:granite_malachite_ore",
			"may_replace": [
				"minecraft:granite"
			]
		},
		{
			"places_block": "example:andesite_malachite_ore",
			"may_replace": [
				"minecraft:andesite"
			]
		}
	]
  }
}
```

**Example use: Oil deposits in the sand.**
```
{
  "format_version": 1.13.0,
  "minecraft:ore_feature": {
    "description": {
      "identifier": "example:oil_deposit_feature"
    },
	"count": 12,
	"replace_rules": [
		{
			"places_block": "example:oil_block",
			"may_replace": [
			  "minecraft:sand"
			]
		}
	]
  }
}
```



## minecraft:partially_exposed_blob_feature

'minecraft:partially_exposed_blob_feature' generates a blob of the specified block with the specified dimensions For the most part the blob is embedded in the specified surface, however a single side is allowed to be exposed.

**Example use: Blobs of Magma blocks partially embedded in the floors of flooded caves.**
```
{
    "format_version": "1.13.0",
    "minecraft:partially_exposed_blob_feature": {
      "description": {
        "identifier": "minecraft:underwater_magma_feature"
      },
      "places_block": "minecraft:magma",
      "placement_radius_around_floor": 1,
      "placement_probability_per_valid_position": 0.5,
      "exposed_face": "up"
    }
  }
}
```



## minecraft:rect_layout

'minecraft:rect_layout' scans the surface of a Chunk, calling place() on the surface of each block column.
Succeeds if: A Feature is successfully placed within a Chunk.
Fails if: No Feature could be placed within a Chunk.


**Example use: Scans the surface of a chunk and places a feature if able**
```

			{
				"ratio_of_empty_space": 0.5,
				"feature_areas":[
					{
						"feature": "minecraft:tree",
						"area_dimensions": [Width,Height]
					},
					{
						"feature": "minecraft:tree2",
						"area_dimensions": [Width,Height]
					}
				]
			}
		
```



## minecraft:scan_surface

'minecraft:scan_surface' scans the surface of a Chunk, calling place() on the surface of each block column.
Succeeds if: A Feature was successfully placed during the scan.
Fails if: No Feature was placed during the course of the scan.


**Example use: Scans the surface of a chunk and places a feature if able**
```
{"scan_surface_feature": "example:apple_feature"}
```



## minecraft:scatter_feature

'minecraft:scatter_feature' scatters a feature throughout a chunk. The 'x', 'y', and 'z' fields are per-coordinate parameters. Note that coordinates represent an offset from the input position, not an absolute position. Coordinates may be a single value, a random distribution, or Molang expression that resolves to a numeric value. The 'coordinate_eval_order' field is provided for finer control of coordinate resolution (particularly when using the 'grid' distribution). 'iterations' controls how many individual placements should occur if the 'scatter_chance' check succeeds. The 'scatter_chance' check happens once, so either all placements will run or none will.
Succeeds if: At least one feature placement succeeds.
Fails if: All feature placements fail.


**Example use: Scattering flowers at sea level across half the chunks in a biome.**
```
{
  "format_version": 1.13.0,
  "minecraft:scatter_feature": {
    "description": {
      "identifier": "example:scatter_flowers_feature"
    },
    "places_feature": "example:flower_feature",
    "iterations": 10,
    "scatter_chance": 50.0,
    "x": {
      "distribution": "uniform",
      "extent": [ 0, 15 ]
    },
    "y": 64,
    "z": {
      "distribution": "uniform",
      "extent": [ 0, 15 ]
    }
  }
}
```



## minecraft:sculk_patch_feature

Feature type 'minecraft:sculk_patch_feature' has not yet been documented.



## minecraft:search_feature

'minecraft:search_feature' sweeps a volume searching for a valid placement location for its referenced feature. The 'search_volume' field specifies the axis-aligned bounding box that defines the boundaries of the search. The search sweeps along the axis defined by the 'search_axis' field, layer by layer. For example, if 'search_axis' = '-x', blocks with greater x values will be checked before blocks with lower x values. Each layer is searched from the bottom-left to the top-right before moving to the next layer along the axis. By default, only one valid position must be found, but this can be altered by specifying the 'required_successes' field. If fewer than the required successes are found, no placement will occur.
Succeeds if: The number of valid positions is equal to the value specified by 'required_successes'.
Fails if: The number of valid positions is less than the value specified by 'required_successes'.


**Example use: Attaching apples to a tree canopy**
```
{
  "format_version": 1.13.0,
  "minecraft:search_feature": {
    "description": {
      "identifier": "example:find_valid_apples_feature"
    },
    "places_feature": "example:apple_feature",
    "search_volume": {
      "min": [ -3, -3, -3 ],
      "max": [ 3, 3, 3 ]
    },
    "search_axis": "-y",
    "required_successes": 3
}
```



## minecraft:single_block_feature

'minecraft:single_block_feature' places a single block in the world. The 'may_place_on' and 'may_replace' fields are allowlists which specify where the block can be placed. If these fields are omitted, the block can be placed anywhere. The block's internal survivability and placement rules can optionally be enforced with the 'enforce_survivability_rules' and 'enforce_placement_rules' fields. These rules are specified per-block and are typically designed to produce high quality gameplay or natural behavior. However, enabling this enforcement may make it harder to debug placement failures.
Succeeds if: The block is successfully placed in the world.
Fails if: The block fails to be placed.


**Example use: Placing a single pumpkin block.**
```
{
  "format_version": 1.13.0,
  "minecraft:single_block_feature": {
    "description": {
      "identifier": "example:single_pumpkin_feature"
    },
    "places_block": "example:pumpkin",
    "enforce_placement_rules": true,
    "enforce_survivability_rules": true,
    "may_place_on": [
      "example:grass"
    ],
    "may_replace": [
      "example:air"
    ]
  }
}
```



## minecraft:snap_to_surface_feature

'minecraft:snap_to_surface_feature' snaps the y-value of a feature placement pos to the floor or the ceiling within the provided 'vertical_search_range'. The placement biome is preserved. If the snap position goes outside of the placement biome, placement will fail.


**Example use: Define a feature that snaps the 'cave_vine_feature' to the ceiling.**
```
{
  "format_version": "1.16.0",
  "minecraft:snap_to_surface_feature": {
    "description": {
      "identifier": "minecraft:cave_vine_snapped_to_ceiling_feature"
    },
    "feature_to_snap":  "minecraft:cave_vine_feature",
    "vertical_search_range":  12,
    "surface": "ceiling"
  }
}
```



## minecraft:structure_template_feature

'minecraft:structure_template_feature' places a structure in the world. The structure must be stored as a .mcstructure file in the "structures" subdirectory of a behavior pack. It is possible to reference structures that are part of other behavior packs, they do not need to come from the same behavior pack as this feature. Constraints can be defined to specify where the structure is allowed to be placed. During placement, the feature will search for a position within the 'adjustment_radius' that satisfies all constraints. If none are found, the structure will not be placed.
Succeeds if: The structure is placed in the world.
Fails if: The structure fails to be placed within the world.


**Example use: Place a hot air balloon structure that "floats" in the air.**
```
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



## minecraft:surface_relative_threshold_feature

'minecraft:surface_relative_threshold_feature' determines whether the provided position is below the estimated surface level of the world, and places a feature if so.If the provided position is above configured surface or the surface is not available, placement will fail. This feature only works for Overworld generators using world generation 1.18 or later.


**Example use: Define a feature that places the 'underwater_magma_snap_to_surface_feature', if the given position is at least two blocks below estimated surface level.**
```
{
	"format_version": "1.16.0",
	"minecraft:surface_relative_threshold_feature": {
	"description": {
	  "identifier": "minecraft:underwater_magma_underground_feature"
	},
	"feature_to_snap": "minecraft:underwater_magma_snap_to_surface_feature",
	"minimum_distance_below_surface": 2
  }
}
```



## minecraft:underwater_cave_carver_feature

'minecraft:underwater_cave_carver_feature' carves a cave through the world in the current chunk, and in every chunk around the current chunk in an 8 radial pattern.This feature will specifically target creating caves only below sea level.
This feature will also only work when placed specifically in the pass "pregeneration_pass".


**Example use: Carve caves normally.**
```
{
			"format_version": "1.16.100",
				"minecraft:underwater_cave_carver_feature": {
					"description": {
						"identifier": "minecraft:underground_cave_carver_feature"
					},
					"fill_with": "minecraft:water"
					"width_modifier": 0.0,
					"replace_air_with": "minecraft:flowing_water"
				}
			}
```



## minecraft:tree_feature

Feature type 'minecraft:tree_feature' has not yet been documented.



## minecraft:vegetation_patch_feature

Feature type 'minecraft:vegetation_patch_feature' has not yet been documented.



## minecraft:weighted_random_feature

'minecraft:weighted_random_feature' randomly selects and places a feature based on a weight value. Weights are relative, with higher values making selection more likely.
Succeeds if: The selected feature is placed.
Fails if: The selected feature fails to be placed.


**Example use: Selecting and placing a variant of a flower.**
```
{
  "format_version": 1.13.0,
  "minecraft:weighted_random_feature": {
    "description": {
      "identifier": "example:select_flower_feature"
    },
    "features": [
      [ "example:white_flower_feature", 1 ],
      [ "example:red_flower_feature", 2 ],
      [ "example:blue_flower_feature", 1 ],
      [ "example:yellow_flower_feature", 4 ]
    ]
  }
}
```

**Feature schema**

**Here is the complete feature schema**
```
  {
      version "format_version"
      object "minecraft:aggregate_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*] // Collection of features to be placed one by one. No guarantee of order. All features use the same input position.
          {
              feature_reference "<any array element>" : opt
          }
          enumerated_value "early_out"<"none", "first_failure", "first_success"> : opt // LIKELY TO BE CHANGED: Do not continue placing features once either the first success or first failure has occurred.
      }
      object "minecraft:sequence_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*] // List of features to be placed in sequence. The output position of the previous feature is used as the input position to the next.
          {
              feature_reference "<any array element>" : opt
          }
      }
      object "minecraft:beards_and_shavers" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          array "bounding_box_min" // Dimensions of the Bounding Box
          {
              float "[0..0]"
              float "[1..1]"
              float "[2..2]"
          }
          array "bounding_box_max" // Dimensions of the Bounding Box
          {
              float "[0..0]"
              float "[1..1]"
              float "[2..2]"
          }
          float "y_delta" // Y Delta for BAS
           "surface_block_type" // Reference to the block to be placed.
           "subsurface_block_type" // Reference to the block to be placed.
          float "beard_raggedness_min" : opt // Y Delta for BAS
          float "beard_raggedness_max" : opt // Y Delta for BAS
      }
      object "minecraft:cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
      }
      object "minecraft:conditional_list" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "conditional_features" // Array of Features, and their associated Conditions, for attempted placement. These features will be evaluated as ordered.
          {
              object "<any array element>" : opt
              {
                  feature_reference "places_feature" // Feature to be placed.
                  molang "condition" // Condition for placing associated Feature
              }
          }
          enumerated_value "early_out_scheme"<"condition_success", "placement_success"> : opt // Denote whether placement should end on first successful placement or first passed condition.
      }
      object "minecraft:fossil_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "ore_block"
          int "max_empty_corners"
      }
      object "minecraft:geode_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "filler" // The block to fill the inside of the geode.
           "inner_layer" // The block that forms the inside layer of the geode shell.
           "alternate_inner_layer" // The block that has a chance of generating instead of inner_layer.
           "middle_layer" // The block that forms the middle layer of the geode shell.
           "outer_layer" // The block that forms the outer shell of the geode.
          array "inner_placements"[1,*] : opt
          {
               "<any array element>" // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
          }
          int "min_outer_wall_distance"<1-10> // The minimum distance each distribution point must be from the outer wall. [0,10]
          int "max_outer_wall_distance"<1-20> // The maximum distance each distribution point can be from the outer wall. [0,20]
          int "min_distribution_points"<1-10> // The minimum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,10]
          int "max_distribution_points"<1-20> // The maximum number of points inside the distance field that can get generated. The distance field is the area consisting of all points with a minimum distance to all destribution points. [0,20]
          int "min_point_offset"<0-10> // The lowest possible value of random offset applied to the position of each distribution point. [0,10]
          int "max_point_offset"<0-10> // The highest possible value of random offset applied to the position of each distribution point. [0,10]
          int "max_radius" // The maximum possible radius of the geode generated.
          int "crack_point_offset"<0-10> // An offset applied to each distribution point that forms the geode crack opening. [0,10]
          float "generate_crack_chance"<0.000000-1.000000> // The likelihood of a geode generating with a crack in its shell. [0,1]
          float "base_crack_size"<0.000000-5.000000> // How large the crack opening of the geode should be when generated. [0,5]
          float "noise_multiplier" // A multiplier applied to the noise that is applied to the distribution points within the geode. Higher = more noisy.
          float "use_potential_placements_chance"<0.000000-1.000000> // The likelihood that a special block will be placed on the inside of the geode. [0,1]
          float "use_alternate_layer0_chance"<0.000000-1.000000> // The likelihood that a block in the innermost layer of the geode will be replaced with an alternate option. [0,1]
          bool "placements_require_layer0_alternate" // If true, the potential placement block will only be placed on the alternate layer0 blocks that get placed. Potential placement blocks are blocks that depend on the existance of another block to be placed. The latter are the layer0 alternate blocks.
          int "invalid_blocks_threshold" // The threshold of invalid blocks for a geode to have a distribution point in before it aborts generation entirely.
      }
      object "minecraft:growing_plant_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "height_distribution"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted heights that placement will select from.
              {
                   "[0..0]" // Plant height.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          string "growth_direction" // Direction that the plant grows towards. Valid values: UP and DOWN
           "age" : opt // Age of the head of the plant.
          array "body_blocks"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the body of the plant.
              {
                   "[0..0]" // Plant body block.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          array "head_blocks"[1,*]
          {
              array "<any array element>"[2] // Collection of weighted block descriptor that placement will select from for the head of the plant.
              {
                   "[0..0]" // Plant head block.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
          bool "allow_water" : opt // Plant blocks can be placed in water.
      }
      object "minecraft:hell_cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
      }
      object "minecraft:multiface_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "places_block" // Reference to the block to be placed.
          int "search_range"<1-64> // How far, in blocks, this feature can search for a valid position to place.
          bool "can_place_on_floor" // Can this feature be placed on the ground (top face of a block)?
          bool "can_place_on_ceiling" // Can this feature be placed on the ceiling (bottom face of a block)?
          bool "can_place_on_wall" // Can this feature be placed on the wall (side faces of a block)?
          float "chance_of_spreading"<0.000000-1.000000> // For each block placed by this feature, how likely will that block spread to another?
          array "can_place_on"[1,*] : opt
          {
               "<any array element>" : opt // A list of blocks that the block in this feature can be placed on. Omit this field to allow any block to be placed on.
          }
      }
      object "minecraft:ore_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          int "count"<1-*> // The number of blocks to be placed.
          float "discard_chance_on_air_exposure"<0.000000-1.000000> : opt // Chance of discarding placement if neighboring block is Air.
          array "replace_rules"[1,*] : opt
          {
              object "<any array element>" // Collection of replace rules that will be checked in order of definition. If a rule is resolved, the rest will not be resolved for that block position.
              {
                   "places_block" // Reference to the block to be placed.
                  array "may_replace"[1,*] : opt
                  {
                       "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
                  }
              }
          }
      }
      object "minecraft:partially_exposed_blob_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          int "placement_radius_around_floor"<1-8> // Defines the cubic radius of the blob. [1, 8]
          float "placement_probability_per_valid_position"<0.000000-1.000000> // The probability of trying to place a block at each position within the placement bounds. [0,1]
          string "exposed_face" : opt // Defines a block face that is allowed to be exposed to air and/or water. Other faces need to be embedded for blocks to be placed by this feature. Defaults to upwards face.
           "places_block" // Reference to the block to be placed.
      }
      object "minecraft:rect_layout" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          float "ratio_of_empty_space" : opt // Ratio of a Chunk to be filled with empty space rather than features.
          array "feature_areas"[1,4294967295]
          {
              object "<any array element>" : opt
              {
                  feature_reference "feature" // Feature to be placed.
                  array "area_dimensions" // Dimensions (size) of the associated Feature.
                  {
                      int "[0..0]"
                      int "[1..1]"
                  }
              }
          }
      }
      object "minecraft:scan_surface" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "scan_surface_feature" // Named reference of feature to be placed
      }
      object "minecraft:scatter_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          bool "project_input_to_floor" : opt // If true, snaps the y-value of the scattered position to the terrain heightmap. If false or unset, y-value is unmodified.
          molang "iterations" // Number of scattered positions to generate
          object "scatter_chance" : opt // Probability numerator / denominator that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
          {
              int "numerator"<1-*>
              int "denominator"<1-*>
          }
          molang "scatter_chance" : opt // Probability (0-100] that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
          enumerated_value "coordinate_eval_order"<"xyz", "xzy", "yxz", "yzx", "zxy", "zyx"> : opt // The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy".
          molang "x" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
          object "x" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
          {
              enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
              int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
              int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
              array "extent"[2]
              {
                  molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
              }
          }
          molang "z" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
          object "z" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
          {
              enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
              int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
              int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
              array "extent"[2]
              {
                  molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
              }
          }
          molang "y" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
          object "y" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
          {
              enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
              int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
              int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
              array "extent"[2]
              {
                  molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
              }
          }
      }
      object "minecraft:sculk_patch_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "can_place_sculk_patch_on"
          {
               "<any array element>" : opt
          }
           "central_block" : opt
          float "central_block_placement_chance"<0.000000-1.000000> : opt
          int "cursor_count"<0-32>
          int "charge_amount"<1-1000>
          int "spread_attempts"<1-64>
          int "growth_rounds"<0-8>
          int "spread_rounds"<0-8>
      }
      object "minecraft:search_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "places_feature" // Named reference of feature to be placed
          object "search_volume" // Axis-aligned bounding box that will be searched for valid placement positions. Expressed as offsets from the input position.
          {
              array "min"[3] // Minimum extent of the bounding volume expressed as [ x, y, z ]
              {
                  int "[0..0]" // x_min
                  int "[1..1]" // y_min
                  int "[2..2]" // z_min
              }
              array "max"[3] // Maxium extent of the bounding volume expressed as [ x, y, z ]
              {
                  int "[0..0]" // x_max
                  int "[1..1]" // y_max
                  int "[2..2]" // z_max
              }
          }
          enumerated_value "search_axis"<"-x", "+x", "-y", "+y", "-z", "+z"> // Axis that the search will sweep along through the 'search_volume'
          int "required_successes"<1-*> : opt // Number of valid positions the search must find in order to place the referenced feature
      }
      object "minecraft:single_block_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "places_block" // Reference to the block to be placed.
          bool "enforce_placement_rules" // If true, enforce the block's canPlace check.
          bool "enforce_survivability_rules" // If true, enforce the block's canSurvive check.
          object "may_attach_to" : opt
          {
              int "min_sides_must_attach"<1-4> : opt
              bool "auto_rotate" : opt // Automatically rotate the block to attach sensibly.
               "top" : opt
              array "top" : opt
              {
                   "<any array element>"
              }
               "bottom" : opt
              array "bottom" : opt
              {
                   "<any array element>"
              }
               "north" : opt
              array "north" : opt
              {
                   "<any array element>"
              }
               "east" : opt
              array "east" : opt
              {
                   "<any array element>"
              }
               "south" : opt
              array "south" : opt
              {
                   "<any array element>"
              }
               "west" : opt
              array "west" : opt
              {
                   "<any array element>"
              }
               "all" : opt
              array "all" : opt
              {
                   "<any array element>"
              }
               "sides" : opt
              array "sides" : opt
              {
                   "<any array element>"
              }
          }
          array "may_replace" : opt
          {
               "<any array element>" : opt // A list of blocks that may be replaced during placement. Omit this field to allow any block to be replaced.
          }
      }
      object "minecraft:snap_to_surface_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "feature_to_snap" // Named reference of feature to be snapped
          int "vertical_search_range" // Range to search for a floor or ceiling for snaping the feature.
          string "surface" : opt // Defines the surface that the y-value of the placement position will be snapped to. Valid values: 'ceiling', 'floor' and 'random_horizontal'
          bool "allow_air_placement" : opt // Determines whether the feature can snap through air blocks. Defaults to true.
          bool "allow_underwater_placement" : opt // Determines whether the feature can snap through water blocks. Defaults to false.
      }
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
                  array "block_allowlist|block_whitelist"
                  {
                       "<any array element>" : opt // List of blocks the owning structure is allowed to intersect with.
                  }
              }
          }
      }
      object "minecraft:surface_relative_threshold_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          feature_reference "feature_to_place" // Named reference of feature to be placed
          int "minimum_distance_below_surface" : opt // The minimum number of blocks required to be between the estimated surface level and a valid place for this feature. Defaults to zero.
      }
      object "minecraft:underwater_cave_carver_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          block_reference "fill_with" : opt // Reference to the block to fill the cave with.
          molang "width_modifier" : opt // How many blocks to increase the cave radius by, from the center point of the cave.
          int "skip_carve_chance"<1-*> : opt // The chance to skip doing the carve (1 / value).
          int "height_limit" : opt // The height limit where we attempt to carve.
          float_range "y_scale" : opt // The scaling in y.
          float_range "horizontal_radius_multiplier" : opt // Horizontal radius multiplier.
          float_range "vertical_radius_multiplier" : opt // Vertical radius multiplier.
          float_range "floor_level" : opt // Floor Level.
          block_reference "replace_air_with" : opt // Reference to the block to replace air blocks with.
      }
      object "minecraft:tree_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
           "base_block" : opt
          array "base_block" : opt
          {
               "<any array element>"
          }
          object "base_cluster" : opt
          {
              array "may_replace"
              {
                   "<any array element>" : opt
              }
              int "num_clusters"<1-*>
              int "cluster_radius"<0-*>
          }
          array "may_grow_on" : opt
          {
               "<any array element>"
          }
          array "may_replace" : opt
          {
               "<any array element>"
          }
          array "may_grow_through" : opt
          {
               "<any array element>"
          }
          object "acacia_trunk" : opt
          {
              int "trunk_width"
              object "trunk_height"
              {
                  int "base"<1-*>
                  array "intervals" : opt
                  {
                      int "<any array element>"<1-*> : opt
                  }
                  int "min_height_for_canopy"<1-*> : opt
              }
              object "trunk_lean"
              {
                  bool "allow_diagonal_growth"
                   "lean_height"
                   "lean_steps"
                   "lean_length" : opt
              }
               "trunk_block"
              object "branches" : opt
              {
                   "branch_length"
                   "branch_position"
                  chance_information "branch_chance"
                  object "branch_canopy" : opt
                  {
                      object "acacia_canopy" : opt
                      {
                          int "canopy_size"<1-*>
                           "leaf_block"
                          bool "simplify_canopy" : opt
                      }
                      object "canopy" : opt
                      {
                          object "canopy_offset"
                          {
                              int "min"
                              int "max"
                          }
                          int "min_width"<0-*> : opt
                          object "canopy_slope" : opt
                          {
                              int "rise"<1-*> : opt
                              int "run"<1-*> : opt
                          }
                          chance_information "variation_chance" : opt
                          array "variation_chance" : opt
                          {
                              chance_information "<any array element>" : opt
                          }
                           "leaf_block"
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                      }
                      object "fancy_canopy" : opt
                      {
                          int "height"<1-*>
                          int "radius"<0-*>
                           "leaf_block"
                      }
                      object "mega_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          int "core_width"<1-*> : opt
                          bool "simplify_canopy" : opt
                           "leaf_block"
                      }
                      object "mega_pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          float "radius_step_modifier"<0.000000-*>
                          int "core_width"<1-*> : opt
                           "leaf_block"
                      }
                      object "pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<1-*>
                           "leaf_block"
                      }
                      object "roofed_canopy" : opt
                      {
                          int "canopy_height"<3-*>
                          int "core_width"<1-*>
                          int "outer_radius"<0-*>
                          int "inner_radius"<0-*>
                           "leaf_block"
                      }
                      object "spruce_canopy" : opt
                      {
                           "lower_offset"
                           "upper_offset"
                           "max_radius"
                           "leaf_block"
                      }
                  }
              }
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fallen_trunk" : opt
          {
               "log_length"
               "stump_height" : opt
               "height_modifier" : opt
               "trunk_block"
              feature_reference "log_decoration_feature" : opt
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fancy_trunk" : opt
          {
              object "trunk_height"
              {
                  int "base"<1-*>
                  int "variance"<1-*>
                  float "scale"
              }
              int "trunk_width"<1-*>
              object "branches"
              {
                  float "slope"
                  float "density"
                  float "min_altitude_factor"<0.000000-1.000000>
              }
               "trunk_block"
              float "width_scale"<0.000000-*>
              float "foliage_altitude_factor"<0.000000-1.000000>
          }
          object "mega_trunk" : opt
          {
              int "trunk_width"
              object "trunk_height"
              {
                  int "base"<1-*>
                  array "intervals" : opt
                  {
                      int "<any array element>"<1-*> : opt
                  }
              }
               "trunk_block"
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
              object "branches" : opt
              {
                  int "branch_length"<1-*>
                  float "branch_slope"
                   "branch_interval"
                  object "branch_altitude_factor"
                  {
                      float "min"<0.000000-1.000000>
                      float "max"<0.000000-1.000000>
                  }
                  object "branch_canopy" : opt
                  {
                      object "acacia_canopy" : opt
                      {
                          int "canopy_size"<1-*>
                           "leaf_block"
                          bool "simplify_canopy" : opt
                      }
                      object "canopy" : opt
                      {
                          object "canopy_offset"
                          {
                              int "min"
                              int "max"
                          }
                          int "min_width"<0-*> : opt
                          object "canopy_slope" : opt
                          {
                              int "rise"<1-*> : opt
                              int "run"<1-*> : opt
                          }
                          chance_information "variation_chance" : opt
                          array "variation_chance" : opt
                          {
                              chance_information "<any array element>" : opt
                          }
                           "leaf_block"
                          object "canopy_decoration" : opt
                          {
                              chance_information "decoration_chance"
                               "decoration_block" : opt
                              int "num_steps" : opt
                              enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
                          }
                      }
                      object "fancy_canopy" : opt
                      {
                          int "height"<1-*>
                          int "radius"<0-*>
                           "leaf_block"
                      }
                      object "mega_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          int "core_width"<1-*> : opt
                          bool "simplify_canopy" : opt
                           "leaf_block"
                      }
                      object "mega_pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<0-*>
                          float "radius_step_modifier"<0.000000-*>
                          int "core_width"<1-*> : opt
                           "leaf_block"
                      }
                      object "pine_canopy" : opt
                      {
                           "canopy_height"
                          int "base_radius"<1-*>
                           "leaf_block"
                      }
                      object "roofed_canopy" : opt
                      {
                          int "canopy_height"<3-*>
                          int "core_width"<1-*>
                          int "outer_radius"<0-*>
                          int "inner_radius"<0-*>
                           "leaf_block"
                      }
                      object "spruce_canopy" : opt
                      {
                           "lower_offset"
                           "upper_offset"
                           "max_radius"
                           "leaf_block"
                      }
                  }
              }
          }
          object "trunk" : opt
          {
               "trunk_height"
               "height_modifier" : opt
              object "can_be_submerged" : opt
              {
                  int "max_depth"<1-*>
              }
              bool "can_be_submerged" : opt
               "trunk_block"
              object "trunk_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "acacia_canopy" : opt
          {
              int "canopy_size"<1-*>
               "leaf_block"
              bool "simplify_canopy" : opt
          }
          object "canopy" : opt
          {
              object "canopy_offset"
              {
                  int "min"
                  int "max"
              }
              int "min_width"<0-*> : opt
              object "canopy_slope" : opt
              {
                  int "rise"<1-*> : opt
                  int "run"<1-*> : opt
              }
              chance_information "variation_chance" : opt
              array "variation_chance" : opt
              {
                  chance_information "<any array element>" : opt
              }
               "leaf_block"
              object "canopy_decoration" : opt
              {
                  chance_information "decoration_chance"
                   "decoration_block" : opt
                  int "num_steps" : opt
                  enumerated_value "step_direction"<"down", "up", "out", "away"> : opt
              }
          }
          object "fancy_canopy" : opt
          {
              int "height"<1-*>
              int "radius"<0-*>
               "leaf_block"
          }
          object "mega_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<0-*>
              int "core_width"<1-*> : opt
              bool "simplify_canopy" : opt
               "leaf_block"
          }
          object "mega_pine_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<0-*>
              float "radius_step_modifier"<0.000000-*>
              int "core_width"<1-*> : opt
               "leaf_block"
          }
          object "pine_canopy" : opt
          {
               "canopy_height"
              int "base_radius"<1-*>
               "leaf_block"
          }
          object "roofed_canopy" : opt
          {
              int "canopy_height"<3-*>
              int "core_width"<1-*>
              int "outer_radius"<0-*>
              int "inner_radius"<0-*>
               "leaf_block"
          }
          object "spruce_canopy" : opt
          {
               "lower_offset"
               "upper_offset"
               "max_radius"
               "leaf_block"
          }
          object "random_spread_canopy" : opt
          {
               "canopy_height"
               "canopy_radius"
              int "leaf_placement_attempts"<1-*>
              array "leaf_blocks"
              {
                  array "<any array element>"[2]
                  {
                       "[0..0]"
                      float "[1..1]"
                  }
              }
          }
      }
      object "minecraft:vegetation_patch_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "replaceable_blocks"
          {
               "<any array element>" : opt
          }
           "ground_block"
          feature_reference "vegetation_feature"
          string "surface" : opt
           "depth"
          float "extra_deep_block_chance" : opt
          int "vertical_range"
          float "vegetation_chance" : opt
           "horizontal_radius"
          float "extra_edge_column_chance"<0.000000-*> : opt
          bool "waterlogged" : opt
      }
      object "minecraft:weighted_random_feature" : opt
      {
          object "description"
          {
              string "identifier" // The name of this feature in the form 'namespace_name:feature_name'. 'feature_name' must match the filename.
          }
          array "features"[1,*]
          {
              array "<any array element>"[2] : opt // Collection of weighted features that placement will select from.
              {
                  feature_reference "[0..0]" // Named reference to a feature.
                  float "[1..1]" // Weight used in random selection. Value is relative to other weights in the collection.
              }
          }
      }
  }

```



# Attaching features

Features must be attached to at least one biome in order to show up in the world. During world generation, biomes attempt to place their attached features chunk-by-chunk. Features can be attached in two ways:
1) Via a feature rule definition
2) Via the "minecraft:forced_features" biome component




# Feature rules

Feature rules are separate JSON definition files found in the "feature_rules" subfolder of behavior packs. Feature rules follow the same filename rules as features. Each feature rule controls exactly one feature and serves as the root of a chain of feature data. To attach a feature to a biome with a feature rule, the "conditions" object must include the "minecraft:biome_filter" field. This is a list of filter tests that are performed on each biome to determine if the feature should be attached. Most relevant is the "has_biome_tag" test.

**Here is a sample feature rule**
```
{
  "format_version": "1.13.0",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "minecraft:birch_forest_surface_trees_feature",
      "places_feature": "minecraft:legacy:birch_forest_tree_feature"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "forest"
        },
        {
          "all_of": [
            {
              "test": "has_biome_tag",
              "operator": "==",
              "value": "birch"
            },
            {
              "test": "has_biome_tag",
              "operator": "!=",
              "value": "mutated"
            }
          ]
        }
      ]
    },
    "distribution": {
      "iterations": 1,
      "x": 0,
      "y": 0,
      "z": 0
    }
  }
}
```



# Feature rule schema

****
```
  {
      version "format_version"
      object "minecraft:feature_rules"
      {
          object "description"
          {
              string "identifier" // The name of this feature rule in the format 'namespace_name:rule_name'. 'rule_name' must match the filename.
              feature_reference "places_feature" // Named reference to the feature controlled by this rule.
          }
          object "conditions" // Parameters to control where and when the feature will be placed.
          {
              string "placement_pass" // When the feature should be placed relative to others. Earlier passes in the list are guaranteed to occur before later passes. Order is not guaranteed within each pass.
              biome_filter_group "minecraft:biome_filter" : opt // List of filter tests to determine which biomes this rule will attach to.
          }
          object "distribution" : opt // Parameters controlling the initial scatter of the feature.
          {
              molang "iterations" // Number of scattered positions to generate
              object "scatter_chance" : opt // Probability numerator / denominator that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
              {
                  int "numerator"<1-*>
                  int "denominator"<1-*>
              }
              molang "scatter_chance" : opt // Probability (0-100] that this scatter will occur.  Not evaluated each iteration; either no iterations will run, or all will.
              enumerated_value "coordinate_eval_order"<"xyz", "xzy", "yxz", "yzx", "zxy", "zyx"> : opt // The order in which coordinates will be evaluated. Should be used when a coordinate depends on another. If omitted, defaults to "xzy".
              molang "x" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
              object "x" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
              {
                  enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                  int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                  int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                  array "extent"[2]
                  {
                      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  }
              }
              molang "z" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
              object "z" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
              {
                  enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                  int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                  int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                  array "extent"[2]
                  {
                      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  }
              }
              molang "y" : opt // Expression for the coordinate (evaluated each iteration).  Mutually exclusive with random distribution object below.
              object "y" : opt // Distribution for the coordinate (evaluated each iteration).  Mutually exclusive with Molang expression above.
              {
                  enumerated_value "distribution"<"uniform", "gaussian", "inverse_gaussian", "triangle", "fixed_grid", "jittered_grid"> // Type of distribution - uniform random, gaussian (centered in the range), triangle (centered in the range), or grid (either fixed-step or jittered)
                  int "step_size"<1-*> : opt // When the distribution type is grid, defines the distance between steps along this axis
                  int "grid_offset"<0-*> : opt // When the distribution type is grid, defines the offset along this axis
                  array "extent"[2]
                  {
                      molang "[0..0]" : opt // Lower bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                      molang "[1..1]" : opt // Upper bound (inclusive) of the scatter range, as an offset from the input point to scatter around
                  }
              }
          }
      }
  }

```



# Forced features

Features attached with the second method are called "forced" or "explicit" features. Unlike feature rules, forced features are not defined in separate JSON files. Instead, they are specified in the existing biome JSON definitions via the "minecraft:forced_features" component. Like feature rules, this component includes fields that define when features should be placed ("placement_pass") and how they should be scattered ("distribution"). For more information about biome components (including the complete JSON schema), consult the biome documentation.

