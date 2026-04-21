---
author: chipotle
ms.author: mikeam
title: Managing Village Generation
description: "How to prevent villages from spawning when a player creates a new world."
ms.service: minecraft-bedrock-edition
ms.date: 04/14/2026
---

# Managing Village Generation

Depending on the kind of Minecraft world you're envisioning, you may want to prevent villages from being generated in specific biomes, or anywhere in the world. In this tutorial, you'll learn how to create a Behavior Pack that prevents villages from spawning.

## Prerequisites

You should be familiar with the following articles:

- [Introduction to Behavior Packs](./BehaviorPack.md)
- [Introduction to Resource Packs](./ResourcePack.md)

> [!IMPORTANT]
>
> Since this pack overwrites biomes, creators will need to keep their biome files up to date with the current Minecraft release, so their players get new biome changes with new releases!

## How it works

Village generation is controlled by the `minecraft:village_type` component in biome definition files. By creating a Behavior Pack that overrides the biome definitions and removes this component, Villages will no longer spawn.

Since villages are spawned during world creation, the override needs to happen before world creation starts.

| Element              | Supported? |
|----------------------|------------|
| [World Templates][1] | Yes        |
| [Dynamic Worlds][2]  | Yes        |
| [Add-Ons][3]         | No         |

[1]: ./CreateAWorldTemplate.md
[2]: https://www.minecraft.net/en-us/article/introducing-dynamic-worlds
[3]: ./GettingStarted.md

This Behavior Pack won't remove existing villages in previously-generated chunks. If you use it as an add-on in an existing world, it will prevent villages from generating in _new_ chunks, but already explored areas will keep their villages.

## Creating the pack

1. Create a new folder called **no_villages** for the behavior pack.

    :::image type="content" source="./Media/villages/no-villages-pack.png" alt-text="Directory layout for the No Villages Behavior Pack.":::


2.  Inside the **no_villages** folder, create a **manifest.json** file:

    ```json
    {
      "format_version": 2,
      "header": {
        "name": "No Villages",
        "description": "Prevents villages from generating in new worlds.",
        "uuid": "YOUR-HEADER-UUID-HERE",
        "version": [1, 0, 0],
        "min_engine_version": [1, 21, 0]
      },
      "modules": [
        {
          "description": "Removes village generation from all biomes.",
          "type": "data",
          "uuid": "YOUR-MODULE-UUID-HERE",
          "version": [1, 0, 0]
        }
      ]
    }
    ```

    > [!IMPORTANT]
    >
    > Replace `YOUR-HEADER-UUID-HERE` and `YOUR-MODULE-UUID-HERE` with two _different_ randomly-generated UUIDs. You can use any UUID generator to do so, but the UUIDs must be unique!

3. Create a **biomes** subfolder inside **no_villages**.

4. For each biome that normally spawns villages, you'll need to provide an overridden copy of its biome file with the `minecraft:village_type` component removed.

    > [!TIP]
    >
    > You can get copies of the current biome files at <https://github.com/Mojang/bedrock-samples/tree/main/behavior_pack/biomes>.

    The 10 biomes that generate villages are:

    - **cold_taiga.biome.json**
    - **cold\_taiga_hills.biome.json**
    - **desert.biome.json**
    - **ice_plains.biome.json**
    - **meadow.biome.json**
    - **plains.biome.json**
    - **savanna.biome.json**
    - **sunflower_plains.biome.json**
    - **taiga.biome.json**
    - **taiga_hills.biome.json**

    To override village generation in all these biomes, you'll need to copy all 10 files into your new **biomes** folder.

5. In each **\*.biome.json** file, find the `minecraft:village_type`block and delete it. Here's an example using the **cold_taiga.biome.json** file:

```json
{
  "format_version": "1.26.0",
  "minecraft:biome": {
    "description": {
      "identifier": "minecraft:cold_taiga"
    },
    "components": {
      "minecraft:climate": {
        "downfall": 0.4,
        "snow_accumulation": [0.125, 0.5],
        "temperature": -0.5
      },
      "minecraft:overworld_height": {
        "noise_type": "taiga"
      },
      "minecraft:surface_builder": {
        "builder": {
          "type": "minecraft:overworld",
          "sea_floor_depth": 7,
          "sea_floor_material": "minecraft:gravel",
          "foundation_material": "minecraft:stone",
          "mid_material": "minecraft:dirt",
          "top_material": "minecraft:grass_block",
          "sea_material": "minecraft:water"
        }
      },
      "minecraft:overworld_generation_rules": {
        "hills_transformation": "minecraft:cold_taiga_hills",
        "mutate_transformation": "minecraft:cold_taiga_mutated",
        "generate_for_climates": [
          ["frozen", 1]
        ]
      },
      "minecraft:village_type": {  // ** DELETE THIS **
        "type": "taiga"            // ** DELETE THIS **
      },                           // ** DELETE THIS **
      "minecraft:tags": {
        "tags": [
          "animal", "cold", "forest", "monster",
          "overworld", "taiga", "has_structure_trail_ruins",
          "spawns_cold_variant_farm_animals"
        ]
      }
    }
  }
}
```

6. Repeat the same process for the other nine biome files.

## Create the Behavior Pack

1. Zip up the **no_villages** folder and rename the resulting archive with an **\*.mcpack** extension (i.e., **no_villages.mcpack**).

2. Double-click **no_villages.mcpack** to import it into Minecraft.

> [!TIP]
>
> You can also copy the **no_villages** folder directly to Bedrock Edition's **behavior_packs** directory:
>
> `%appdata%\Minecraft Bedrock\users\shared\games\com.mojang\behavior_packs`

## Test the Behavior Pack

1. Launch Minecraft and select **Play** -> **Create New World** -> **Create New World**.
2. Go to the **Behavior Packs** section.
3. Find **No Villages** in the available packs list and activate it.
4. Create the world.

Now, villages won't generate in any biome.

## Going further

- Only the biomes overridden in your Behavior Pack will no longer have villages. If you want to keep villages in some biomes, don't include their **\*.biome.json** file.
- You can change the village type from its default to one of the other allowed values (`default`, `desert`, `ice`, `savanna`, or `taiga`) to generate a different kind of village in that biome.
- To re-enable villages in a world, just deactivate the behavior pack. This won't add villages to already-created chunks, though!
