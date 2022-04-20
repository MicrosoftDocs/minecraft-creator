---
author: JDHeaden
ms.author: v-jillheaden
title: Data Driven Overworld Height
ms.prod: gaming
description: A tutorial that demonstrates how to use a behavior pack to constrain the height of a world.
---

# Data-Driven Overworld Height

Creators can use this feature to change the height of an existing world or to create a void map. This will improve performance by reducing memory and enabling more creative flexibility.

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to create a void world in Minecraft: Bedrock Edition.
> - How to change the height of an existing world.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction To Behavior Packs](ResourcePack.md)

## Limitations

This feature will not modify your existing world generation to fit into a new height range. Instead, when you add the behavior pack containing the JSON file to an existing world, the world will be sliced at the given min and max values and the chunks outside the min and max range will be saved in LevelDB, but will not be visible.

Everything outside of the `min` and `max` coordinates will become invisible and above that height will not be buildable. Additionally, there will be no new world generation outside of your saved areas and those areas will generate as `type=void`.

There is currently no blending and world generation will not scale to the custom height.

This feature will not impact existing and saved custom biomes as it just slices the view at the customized heights However, it will stop new custom biomes from generating since all unsaved areas will generate as void.

The scope of this feature is to introduce a void generator with modifiable heights to reduce memory usage and make this functionality easier for creators.

## Here is how to use the Data Driven Overworld Height behavior pack

### First, use it to create a void world

1. Close Minecraft if you have it running.

1. Create the behavior pack folder with the usual manifest.json file.

1. Create a folder on the same level as the manifest file and name it **dimensions**.

1. Create a file inside the dimensions folder and name it **overworld.json**.

1. Put this code into the file and save it. Note that the only mutable values in this code for now are the `min` and `max` values. You cannot modify the generator type or the dimension identifier.

    ```json
    {
      "format_version": "1.18.0",
        "minecraft:dimension": {
          "description": {
            "identifier": "minecraft:overworld"
          },
          "components": {
            "minecraft:dimension_bounds": {
              "min": -16,
              "max": 256
          },
          "minecraft:generation": {
              "generator_type": "void"
          }
        }
      }
    }
    ```

1. Load the behavior pack as usual.

1. Launch Minecraft and make a creative mode world with coordinates shown and the behavior pack active.

1. Go into the world. It should look like this:

:::image type="content" source="Media/DataDrivenOverworldHeight/DDOH_void.png" alt-text="Image of a void world":::

The buildable height of the void world is constrained by the min and max bounds. In this case, we set it to (-16, 256). If you try to place a block outside of the min and max values you set in the JSON file, you get a message saying that the block couldn’t be placed.

### About those min and max values...

You can change the values for min and max to any multiples of 16 between -512 and 512 that you like.

### Next, use it on an existing world

In this section, we will see what happens if we apply the data pack to a “vanilla” generated world. (This can also be done on your existing custom world, but as always, we recommend you make a backup!)

1. Make a vanilla creative world with Show Coordinates active but do not apply the behavior pack to it yet.

2. Go into the world so that it generates and saves terrain at the usual height.

3. Save and Quit the world, then shut down Minecraft.

4. Open the **overworld.json** file you created in the previous section and set the min and max to values that you know are smaller than the generated world. (We're using smaller values just for the purpose of this demo, of course you can set it larger, too!) Remember, they have to be multiples of 16. To really see a drastic difference, you could set them to `min: -16` and `max: 16`.

5. Launch Minecraft and activate the behavior pack for the world.

6. When you go back into the world, it should look quite a bit different. It will be cut down to the height you specified and you will not be able to build beyond those limits.

:::image type="content" source="Media/DataDrivenOverworldHeight/DDOH_cut_world.png" alt-text="Image of a world cut down to given min and max coordinates":::

(I assure you this was perfectly normal vanilla world before the data pack was applied.)

### What happened

When you take an existing world and add the data driven dimension behavior pack, two things happen:

1. The buildable height range is restricted to whatever heights you specified.

1. Void generation occurs outside of your saved areas. This means if you ran around a world on the x coordinate in a circle with a radius of 12, and then you add the behavior pack, only the chunks in that radius (plus the buffer of chunks that we save beyond that radius) will be saved. Outside of that, the terrain will generate as void.

1. Using this feature will stop world generation beyond the saved areas. It works by generating any new areas as a void. You will see this if you run to the edge of originally saved our areas of your world. 
 
:::image type="content" source="Media/DataDrivenOverworldHeight/DDOH_end_of_the_world.png" alt-text="Image of the end of a generated world":::

## What if I remove the behavior pack?

Your original height range will be restored, along with saved chunks that were hidden from the height restriction.If you go to new (unsaved) areas, regular world generation will occur, but parts that were explored when the behavior pack was active will remain void - because that is how they were generated and saved.

This is why you should always make backups, so you can iterate on your desired changes!

:::image type="content" source="Media/DataDrivenOverworldHeight/DDOH_scary_hole.png" alt-text="Image of a hole created by the behavior pack":::

## What's Next?

Now that you have seen how this behavior pack works, here are some tutorials about doing even more customization to your world.

> [!div class="nextstepaction"]
> [Introduction to Add Entity](introductiontoaddentity.md)
> [Introduction to Commands](CommandsIntroduction.md)
