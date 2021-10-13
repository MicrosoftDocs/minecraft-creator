---
author: v-jeffreykim
ms.author: v-jeffreykim
title: Data Driven Overworld Dimensions
ms.prod: gaming
description: How creators can make use of the new data driven dimensions feature of the Caves and Cliffs Part II update
---
# Data Driven Overworld Dimensions

Data driven dimensions is an experimental feature introduced in the Caves and Cliffs: Part II update. This feature allows creators to modify the minimum and maximum height of the overworld and introduces the `void` generator type.

In this tutorial, you will learn the following;

> [!div class="checklist"]
>
> - How to add a dimensions JSON file to the behavior pack.
> - How to modify the minimum/maximum world height using the dimensions JSON file.
> - How to generate a Void world using the dimensions JSON file.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Behavior Packs](BehaviorPack.md)

## Adding the Dimensions JSON File

The data driven dimensions feature requires creators to add a file to the behavior pack. The file can be named anything you want, but it must be added to a folder named `dimensions` in the root directory of the behavior pack and the identifier value must equal `minecraft:overworld`. 

Sample Dimensions JSON file path:

```json
myBehaviorPack/dimensions/overworld.json
```

Sample Dimensions JSON file:

```json
{ 
  "format_version": "1.18.0", 
  "minecraft:dimension": { 
    "description": { 
      "identifier": "minecraft:overworld" 
    }, 
    "components": { 
      "minecraft:dimension_bounds": { 
        "min": -32, "max": 128 
      }, 
      "minecraft:generation": { 
          "generator_type": "void" 
      } 
    }
  }
}
```

## Height Rules

You can adjust the minimum and maximum height of your generated world using the `minecraft:dimension_bounds` component of the Dimensions JSON file.

Example:

```json
"components": { 
  "minecraft:dimension_bounds": { 
    "min": -0, "max": 64 
  }, 
}
```

> [!NOTE]
> World height values must be within the range of `-512` to `512` and `min` and `max` values must be divisible by 16.

## Void World Generation

Using the `minecraft:generation` component of the Dimensions JSON file, you can use your behavior pack to generate a Void world. A Void world is a world where all generated chunks are populated by air blocks.

Example:

```json
"components": { 
  "minecraft:generation": { 
    "generator_type": "void" 
  } 
}
```

Void worlds can be used to easily generate SkyBlock maps and other types of Minecraft worlds to create unique player experiences.

To generate a SkyBlock map, follow these instructions:

1. Create a new Minecraft world, but *do not* add the Dimensions JSON file to your behavior pack.
1. Explore the chunks that you want to keep so that they are saved when you exit the world.
    ![Mock-up representation of how to create a Void world 1](Media\DataDrivenOverworldDimensions\DataDrivenDimensions_VoidSkyBlockWorld1.png)
1. Add the Dimensions JSON file to your behavior pack, using the `"generator_type": "void"` and any world height bounds you want to implement.
1. Load your world and the explored chunks will remain as they were when saved, while all unexplored chunks will be populated with air blocks.
    ![Mock-up representation of how to create a Void world 2](Media\DataDrivenOverworldDimensions\DataDrivenDimensions_VoidSkyBlockWorld2.png)
