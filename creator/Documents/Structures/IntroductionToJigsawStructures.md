---
author: iconicNurdle
ms.author: mikeam
title: Introduction to Jigsaw Structures
description: "An overview of Jigsaw Structures in Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Introduction to Jigsaw Structures

In this overview, you will be learning about Jigsaw Structures! Jigsaw Structures are large structures composed of multiple structures generated from templates. These structure templates contain Jigsaw Blocks which specify how each structure template should connect to one another when they are created in the game.

Jigsaw Structures can generate randomly in the world. Examples of Vanilla Jigsaw Structures include Trail Ruins and Trial Chambers.

>[!IMPORTANT]
> This feature is currently experimental, subject to change, and is only available when the **Data-driven Jigsaw Structures** experiment is enabled for a world.

## On the Minecraft Creator Channel

A brief tutorial on creating with Jigsaw structures is available on the [Minecraft Creator Channel](https://aka.ms/mcv):

> [!VIDEO https://www.youtube.com/embed/57sLxXDkaA0]

## Terminology

| Term | Definition |
|:-----------|:-----------|
| Jigsaw Block | A special block placed within Structure Templates that specifies how and where structure templates should connect to one another when generating a Jigsaw Structure. |
| Jigsaw Structure | Large structures made up of multiple Structure Templates. The Jigsaw Blocks contained within the individual templates specify how individual pieces fit together to form the larger structure. Jigsaw Structures can generate naturally in the world. Vanilla examples include Trail Ruins and Trial Chambers. |
| Structure Set | Group of Jigsaw Structures and world placement rules, such as a village set containing all village biome variants. |
| Structure Template | A predefined volume of blocks created using a Structure Block that are stored in packs as .nbt or .mcstructure files. |
| Template Pool | A weighted set of Structure Templates. Jigsaw Blocks can specify a Template Pool, which is used to select the next Structure Template to connect to during Jigsaw Structure generation. Jigsaw definitions also specify a Start Pool, which is the first Template Pool used when generating a Jigsaw Structure. |

### Pack Structure

Jigsaw Structures are defined using these four JSON files:

- mystructure.json
- mystructureprocessor.json
- mystructureset.json
- mytemplatepool.json

These files are stored within the **worldgen** folder of the behavior pack in this structure:

```
behavior_packs 
  <pack_name> 
    worldgen 
      jigsaw_structures 
        mystructure.json 
      processors 
        mystructureprocessor.json 
      structure_sets 
        mystructureset.json 
      template_pools 
        mytemplatepool.json
```

## Processors

Processors are functions that run when placing a Structure Template in the world. Currently, the only supported processor is the Block Rules processor, which describes how individual blocks of Structure Templates should be modified when placed in the world. For example, you might want to randomly replace half of the cobblestone blocks with mossy cobblestone. Or you might want to replace gravel with suspicious gravel and add a loot table.

The example below shows how a Structure Template can be dynamically modified at generation time to replace blocks and add loot tables.

The first rule randomly replaces 20% of Gravel blocks with Dirt blocks. The second rule replaces 10% of Gravel blocks with Coarse Dirt blocks. 

The third rule replaces 10% of Mud Bricks blocks with Packed Mud. 

Finally, the fourth rule replaces a single random Gravel block with a Suspicious Gravel block and adds a loot table to it.

- [Reference: Worldgen Processors](./../../Reference/Content/WorldgenReference/Examples/JigsawProcessors.md)

```json
{
  "format_version": "1.21.20", 
  "minecraft:processor_list": { 
    "description": { 
      "identifier": "minecraft:trail_ruins_roads_archaeology" 
    }, 
    "processors": [ 
      { 
        "processor_type": "minecraft:rule", 
        "rules": [ 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:gravel", 
              "probability": 0.2 
            }, 
            "output_state": { 
              "name": "minecraft:dirt" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:gravel", 
              "probability": 0.1 
            }, 
            "output_state": { 
              "name": "minecraft:coarse_dirt" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:random_block_match", 
              "block": "minecraft:mud_bricks", 
              "probability": 0.1 
            }, 
            "output_state": { 
              "name": "minecraft:packed_mud" 
            } 
          }, 
          { 
            "input_predicate": { 
              "predicate_type": "minecraft:block_match", 
              "block": "minecraft:gravel" 
            }, 
            "position_predicate": { 
              "predicate_type": "minecraft:archeology_block_loot", 
              "limit": 1, 
              "loot_table": "loot_tables/entities/trail_ruins_brushable_block_common.json", 
              "block_mapping": [ 
                { 
                  "key": "minecraft:gravel", 
                  "value": "minecraft:suspicious_gravel" 
                } 
              ] 
            } 
          } 
        ] 
      } 
    ] 
  } 
} 
```

### Template Pool

Template Pools are groups of related structure templates with assigned weights and processors. During world generation, the Jigsaw Structure "Start Pool" specifies which Template Pool to use first. A Structure Template is then randomly chosen from the pool and placed as the first structure piece. Jigsaw Blocks within the placed structure may also specify Template Pools from which subsequent structure pieces are placed recursively until the Jigsaw Structure becomes fully generated.

- [Reference: Worldgen Template Pools](./../../Reference/Content/WorldgenReference/Examples/JigsawTemplatePools.md)

**Template Pool Example**

```json
{ 
  "format_version": "1.21.20", 
  "minecraft:template_pool": { 
    "description": { 
      "identifier": "minecraft:trail_ruins/tower/tower_top" 
    }, 
    "elements": [ 
      { 
        "element": { 
          "element_type": "minecraft:single_pool_element", 
          "location": "minecraft:trail_ruins/tower/tower_top_1", 
          "processors": "minecraft:trail_ruins_tower_top_archaeology" 
        }, 
        "weight": 1 
      }, 
      { 
        "element": { 
          "element_type": "minecraft:single_pool_element", 
          "location": "minecraft:trail_ruins/tower/tower_top_2", 
          "processors": "minecraft:trail_ruins_tower_top_archaeology",
          "projection": "minecraft:terrain_matching" 
        }, 
        "weight": 2 
      }, 
    ] 
  } 
} 
```

### Jigsaw Structures

Jigsaw Structures are large structures comprised of multiple Structure Templates, each containing Jigsaw Blocks to determine their relative placement and constraints. These structures also have rules guiding how and where they are generated within the world. Examples of Jigsaw Structures include Trail Ruins and Trial Chambers.

- [Reference: Worldgen Template Pools](./../../Reference/Content/WorldgenReference/Examples/JigsawJigsawStructures.md)

>[!Note]
> Other Jigsaw Structures such as Villages and Bastions use a legacy version of the Jigsaw Structure System and cannot be modified via JSON.

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

### Structure Sets

A Structure Set contains a set of Jigsaw Structures and rules for how those structures should be placed in the world relative to other instances of structures from the same set. Each structure within a set is paired with a weight that influences how frequently it is chosen.

- [Reference: Worldgen Structure Sets](./../../Reference/Content/WorldgenReference/Examples/JigsawStructureSets.md)

**Structure Set Example**

Jigsaw Structures placed (red) with 32 spacing, (blue) 4 separation. Each pixel is 1 chunk.

```json
{ 
  "format_version": "1.21.20", 
  "minecraft:structure_set": { 
     "description": { 
       "identifier": "minecraft:trail_ruins" 
     }, 
     "placement": { 
       "type": "minecraft:random_spread", 
       "salt": 83469867, 
       "separation": 8, 
       "spacing": 34, 
       "spread_type": "linear" 
     }, 
     "structures": [ 
       { 
        "structure": "minecraft:trail_ruins", 
        "weight": 1 
       } 
     ] 
  } 
} 
```

## What's Next?

Now that you have read about the parts, let's learn how to use jigsaw structures.

> [A Jigsaw Tutorial](JigsawTutorial.md)
