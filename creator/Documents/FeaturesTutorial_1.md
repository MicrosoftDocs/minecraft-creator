---
author: iconicNurdle
ms.author: mikeam
title: Features Tutorial - A Simple Feature
description: "How to add a simple feature to a world with a behavior pack."
ms.service: minecraft-bedrock-edition
ms.date: 02/20/2025
---

# Features Tutorial - a Simple Feature

This tutorial explains how to create and test a features behavior pack using the **hot_air_balloon** sample feature from the [Minecraft Custom Features Project sample pack](https://github.com/microsoft/minecraft-samples/tree/main/custom_features).

This is considered a "simple" tutorial because it uses only one pack, three subfolders, and four files. 

This is the bare minimum to implement a feature in a Minecraft world.

## More Information

For a more in-depth overview of the parts, take a look at the [Introduction to Features](../Reference/Content/FeaturesReference/Examples/FeaturesIntroduction.md) reference page.

There's even a [Change the World with Features video](https://www.youtube.com/watch?v=kzWSItyz5Pk&t=1s) showing how to save a structure and then put it into the world as a feature.

If you are new to the world of creating, exporting, and importing structures, we have an [Introduction to Structure Blocks tutorial](Structures/IntroductionToStructureBlocks.md).

## Start with the Minecraft Custom Feature Project

1. Go to the [minecraft-samples](https://github.com/microsoft/minecraft-samples/tree/main) page and download the .zip file of the code.

1. Expand/unzip the folder. It will be called **minecraft-samples-main**.

1. Take a look at all the delightful Minecraft sample projects and find **custom_features**.

1. Inside custom_features, find the **example_feature_set** folder.

1. Inside example_feature_set, find the **behavior_packs** folder.

1. Inside the behavior_packs folder, find the second folder named **example_feature_set**.

1. Inside this example_feature_set folder, you will find the folders and files of the project we are using as a starting point for our tutorial. Spoiler alert: the only file we will actually need to copy and paste from this sample is **hot_air_balloon.mcstructure**.

## hot_air_balloon - Behavior Pack Structure

The finished behavior pack will have this structure:

```
- hot_air_balloon_BP (main behavior pack folder)
  - feature_rules (folder)
    - hot_air_balloon_feature_rules.json
  - features (folder)
    - hot_air_balloon_feature.json
  - structures (folder)
    - example (folder)
      - hot_air_balloon.mcstructure
  - manifest.json
```

1. Create the main folder for your behavior pack and call it something like **hot_air_balloon_BP**.

1. Create a manifest.json file in there, like this one.

```
{
  "format_version": 2,
  "header": {
    "description": "Feature: Hot Air Balloon Feature (BP)",
    "name": "TFeature: Hot Air Balloon",
    "uuid":"<PUT A UUID HERE>",
    "version": [1, 0, 0],
    "min_engine_version": [1, 20, 20]
    },
  "modules":
    [
      {
        "description": "Feature: Hot Air Balloon",
        "type": "data",
        "uuid": "<PUT A DIFFERENT UUID HERE>",
        "version": [1, 0, 0]
      }
    ]
}
```

3. Next, create the folders and subfolders, according to the pack structure.

The following content shows the original file content from the sample pack, and then there will be a description about what you should change and why. Then you'll find the modified content you should actually use. 

### feature_rules/hot_air_balloon_feature_rules.json

Original example from the sample pack:

```json
{
  "format_version": "1.13.0",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "example:hot_air_balloon_feature_rules",
      "places_feature": "example:hot_air_balloon_feature"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "the_end"
        }
      ]
    },
    "distribution": {
      "iterations": 10,
      "coordinate_eval_order": "zxy",
      "x": 0,
      "y": "query.heightmap(variable.worldx, variable.worldz)",
      "z": 0
    }
  }
}
```

The `"minecraft:biome_filter"` section will place the balloons only in the End. If you want to have the balloons overhead as soon as you enter the world with your behavior back activated, then you'll need to create a world and make a note of what biome you spawn into.

Changing the biome to "forest" is a pretty good bet, since forest is the most common biome in Minecraft. 

```json
"minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "forest"
        }
      ]
```

Take a look at the [`/locate` command](../Commands/commands/locate.md) page for the latest list of biomes. (This is also a hint for you to use the `locate` command if you can't find your hot air balloons. Also, try looking at night. The balloon glow!)

Also, see that `"operator"` line? That means you can play with this value like a Boolean. If you want a world simply *covered* in hot air balloons (except for the End), try this:

```json
"minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "!=",
          "value": "the_end"
        }
      ]
```

Beware: this will be pretty resource-intensive.

The sample has the iteration setting cranked up to 10 so you will get a noticeable number of balloons when you try it. 
You might want to change the `"iterations"` setting from 10 to a more reasonable 1.

This is the edited file to use for your **hot_air_balloon** feature behavior pack:

**Final EDITED feature_rules/hot_air_balloon_feature_rules.json**

```json
{
  "format_version": "1.13.0",
  "minecraft:feature_rules": {
    "description": {
      "identifier": "example:hot_air_balloon_feature_rules",
      "places_feature": "example:hot_air_balloon_feature"
    },
    "conditions": {
      "placement_pass": "surface_pass",
      "minecraft:biome_filter": [
        {
          "test": "has_biome_tag",
          "operator": "==",
          "value": "forest"
        }
      ]
    },
    "distribution": {
      "iterations": 1,
      "coordinate_eval_order": "zxy",
      "x": 0,
      "y": "query.heightmap(variable.worldx, variable.worldz)",
      "z": 0
    }
  }
}
```

What this code is saying... "Hey Minecraft... use the feature rule whose name is 'example:hot_air_balloon_feature_rules' to place a feature named 'example:hot_air_balloon_feature' during the phase when Minecraft is loading in the surface of the world. But only place the feature in a forest biome, and only place (iterate) one feature per chunk (a chunk is 16 X 16 blocks, remember?), and position each feature relative to the 'y' coordinate of the world."

### features/hot_air_balloon_feature.json

There are features that are used to place other features, and the "minecraft:structure_template_feature" is one of them.

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

This code is saying: "Hey Minecraft! This is the template named "example:hot_air_balloon_feature" that places a structure named "example:hot_air_balloon". Each placed structure can face a random direction (well, any one of the four directions a block can face in Minecraft) and you have to make sure the balloon is only allowed to be placed in the air. (Fun fact: Minecraft air is in blocks, too...)

### structures/example/hot_air_balloon.mcstructure

![Image of a hot air balloon structure](Media/Features/features_tutorial_hot_air_balloon_structure.png)

The .mcstructure itself includes the air between the ground and the balloon, creating the floating effect.

This graphic shows how the feature is distributed in relation to the surface area.

This is the only file we actually needed from the sample pack. If you don't have it, you can make your own structure and export it to this folder using [structure blocks](../Documents/Structures/IntroductionToStructureBlocks.md).

## What Success Looks Like...

This feature has its own light source (blue soul flames!) so it's easier to find your feature at night.

![Image of a forest at night with dozens of beautiful glowing balloons hanging over it. ](Media/Features/features_tutorial_hot_air_balloon_vista_night.png)

Now that you have a working feature, this is a good time to experiment with some of the settings in the files. 

You could try changing the **iteration** parameter in the **feature_rules/hot_air_balloon_feature_rules.json** file from 1.0 to 0.1. Then change it to 10.0 and see the results.

## What's Next?

Want to work with a more complicated feature? 

> [!div class="nextstepaction"]
> [Features Tutorial Advanced](FeaturesTutorial_2.md)
