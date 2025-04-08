---
author: mammerla
ms.author: mikeam
title: Biome JSON and Overview
description: "A reference document discussing biomes and custom biomes"
ms.service: minecraft-bedrock-edition
---

# Biome JSON and Overview

> [!VIDEO https://www.youtube.com/embed/zMF3JPahrPQ]
*This video is an excellent way to quickly get up to speed on experimental custom biome features*

'Biomes' are what we call a named set of properties that drive how the game behaves in a particular area. This includes resource pack settings like what music automatically plays or the color of the sky, and behavior pack settings like whether snow accumulates or what sorts of mobs can spawn there.

 The blocks that are at every surface position in a Biome are typically specified by that Biome -- for example water, in the ocean or sand in the desert. Otherwise, the blocks that you may think of when you visualize a particular Biome are from other systems like '[features](../FeaturesTaxonomy.md)' (for example tree leaves, flowers, and iron ore). Similarly, structures and entities may be associated with Biomes but are not part of the Biome itself.

Minecraft biomes can have different terrain characteristics. By writing custom biome data you could change the:

- general shape of the terrain
- ratio of frequency of biome types
- blocks that make up the biome, both at the surface and down below
- distribution of decorative features like trees, grass, and flowers
- mobs that spawn
- climate
- ...and more!

Also, be sure to check out [the ways to customize the audio and visual experience of a biome](./../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md) for more on using client biomes files to customize audio and visual aspects of a biome.

### How does the Minecraft Overworld generate?

In simple terms, the Minecraft engine combines the level seed and the three-dimensional XYZ coordinates of a block to generate a set of smoothly changing 'noise' values. These are called things like 'humidity', 'erosion', and 'weirdness'. The game then uses those 'noise' values to two different bits of logic. The first bit of logic is used to generate a relatively simple shape of the world. You can imagine this as Minecraft with only air, water, and stone. The second bit of logic chooses which Biome should be assigned to that location. For example a warm and dry area with flat terrain that isn't too high might be assigned to be a Desert. 

After the general shape of the world is made, and the Biome is selected, the visually interesting work of placing 'features' is done - for example a Desert area gets cacti installed. (This glosses over several other interesting steps like placement of structures and creation of caves. This game is complicated!) Finally, after all of the block generation is done, the game can start running various gameplay things in the area, like spawning the appropriate entities or doing the calculations required to turn a concept like 'open fence gate' to the series of geometry shapes required to render the area to the screen.

### How does this compare to the Overworld before Caves & Cliffs Part 2?

The 'Caves & Cliffs Part 2' update changed the Minecraft Overworld in several big ways. The relevant change is that the generation logic was upgraded from a 2-dimensional approach to a 3-dimensional approach. One part of that change is obvious - being able to consider the Y coordinate (which holds the height of a position) meant that one Biome's blocks and features could be generated directly above another Biome's blocks and features. For example, a Plains could be visible at the surface while digging straight down (Editor note: don't do that) could reveal the Deep Dark or a Lush Cave.

The other big part of the change from 2-D to 3-D Biomes was where in that process the Biome was selected. Before the change, the Biome was selected much earlier, to the degree that it could affect the shape of the world before any of the Biome-specific blocks and features were placed. This change was necessary for a variety of reasons, but it did have the side-effect that Biomes no longer caused themselves to appear in the Overworld simply by being known to the game engine. Unfortunately, this meant that custom biomes as defined by the older experiment stopped appearing in the Overworld.

## Adding custom biomes

Custom biomes can be deployed in one of two ways:

1. Supplying a behavior pack biome definition that overrides an Overworld biome definition. For example, a biome definition with an identifier of `desert` will override the definition of vanilla desert biomes. You could install dirt as a replacement for sand, for example.
1. New [partial biome replacements](./CustomPartialBiomeReplacement.md). With this experimental feature, you can insert new biomes that, for example, take over some portion of an existing vanilla biome.

You can see examples of these types of biome overrides on GitHub via the [Chill Oasis sample](https://github.com/microsoft/minecraft-samples/tree/main/chill_oasis_blocks_and_features).

Keep in mind that a lot of power in custom biomes is found in the ability to override visual and audio aspects of the biome. In addition to behavior pack biome overrides of the kinds of blocks a biome will add, you can override several visual and audio characteristics of a biome in the [client biome definition](./../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md).

## Biome JSON definitions

Biomes are read from JSON files in the biomes subfolders of behavior packs. Loading enforces one biome per file; and the file name and the actual biome name must match. Adding a file with a new name to the biome data location will make it available for the game to use, while existing biomes can be overridden using files that match their existing name. Note that if you add a new biome, you'll need to write component data that allows it to participate in world generation, or else it won't show up in your worlds!

Biomes are read from JSON files in the biomes subfolders of behavior packs. 

## JSON format

All biomes should specify the version that they target via the `"format_version"` field. The remainder of the biome data is divided into independent JSON sub-objects, or components.

In general, a **component** defines what game behaviors a biome participates in, and the **component fields** define how it participates.

There are basically two categories of components:

1. Namespaced components, such as those with a 'name:' prefix, that map to specific behaviors in-game. They may have member fields that parameterize that behavior. Only names that have a valid mapping are supported.

1. 'tags' which are defined under the "minecraft:tags" component. Tags consist of alphanumeric characters, along with '.' and '_'. A tag is attached to the biome so that either code or data may check for its existence.

## Biome Definitions

Contains a description and components to define a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|description| Object of type biome Description| Required| Non-component settings, including the biome name.|
|components| Object of type biome Components| Required| Components for this biome.|

## Biome Description

Contains non-component settings for a biome.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|identifier| String| Required| The name of the biome, used by other features like the '/locate biome' command.|

## Biome JSON File

Contains a format version and a biome definition

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|format_version| String| Required| Version of the JSON schema used by this file|
|minecraft:biome| Object of type biome Definition| Required| A single biome definition|

## Block Specifier

Specifies a particular block. Can be a string block name or a JSON object.

|Name |Type |Required |Description |
|:-----------|:-----------|:-------|:-----------|
|name| String| Required| Name of the block|
|states| Object| Optional| Contains members named after each state, with Boolean, integer, or string values.|

## Biome Components

See [this article](./../../Reference/Content/BiomesReference/Examples/ComponentList.md) for a list of biome components you can use within a behavior pack.

See [this article](./../../Reference/Content/ClientBiomesReference/Examples/ClientBiomesOverview.md) for a list of client biome components you can use within a resource pack.

### Example

```json
{
  "plains": {
    "format_version": "1.20.60",
    "minecraft:climate": {
      "downfall": 0.4,
      "snow_accumulation": [ 0.0, 0.125 ],
      "temperature": 0.8
    },
    "minecraft:overworld_height": {
      "noise_type": "lowlands"
    },
    "minecraft:surface_parameters": {
      "sea_floor_depth": 7,
      "sea_floor_material": "minecraft:gravel",
      "foundation_material": "minecraft:stone",
      "mid_material": "minecraft:dirt",
      "top_material": "minecraft:grass_block"
    },
    "minecraft:overworld_generation_rules": {
      "hills_transformation": [
        [ "forest_hills", 1 ],
        [ "forest", 2 ]
      ],
      "mutate_transformation": "sunflower_plains",
      "generate_for_climates": [
        [ "medium", 3 ],
        [ "warm", 1 ],
        [ "cold", 1 ]
      ]
    },

    "minecraft:tags": {
      "tags": [
        "animal",
        "monster",
        "overworld",
        "plains"
      ]
    }
  }
}
```
