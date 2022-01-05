---
author: v-jillheaden
ms.author: v-jillheaden
title: Physically Based Texturing Guide
ms.prod: gaming
description: A guide to creating textures using RTX Physically-Based Rendering
---

# Physically Based Texturing Guide

In this guide, we’ll walk you through the steps of creating your own Minecraft PBR textures, or upgrading your existing textures and texture packs, so that your ray-traced Minecraft worlds take full advantage of everything that Bedrock Minecraft brings to the table.

In addition, we’ll demonstrate how you can create your own high-resolution textures for worlds made of lifelike high definition blocks, and offer an alternative, simpler, easier workflow using the premium Substance Painter application.

## Minecraft Texturing Overview

Most texture files in vanilla Minecraft (Bedrock) only use 2 maps: base color and opacity. The base color map is stored in the RGB channels of the texture. This is the texture map that most people think of when talking about Minecraft textures.

Some textures also have an additional opacity map that is either stored in the alpha channel (for .TGA texture files) or stored implicitly (for .PNG texture files). For Minecraft with RTX, you’ll want to use .TGA files with alpha channels for opacity maps. More on that later.

- Rail opacity map
- Rail opacity map alpha channel

The new PBR system uses these 2 maps, as well as 5 additional ones, to help describe the realistic material surface that is being represented by the texture:

- Metallic map (sometimes called “metalness”)
- Emissive map
- Roughness map
- Normal
- Height map

## Asset Flow

This is how the various PBR texture maps relate to objects in the game:

6 PBR Texture Maps >packed into> 3 Texture Files (.PNG) >defined by a> Texture Set >for each> Block/Item/Object

Currently, each of the 6 PBR maps get packed into the channels of 3 texture files, which are then used by the game. Packing the maps reduces the overall file size and number of files of the new texture set. The texture set must be defined by a JSON file.

For example, for a PBR version of the “gold_ore” block:

- Texture set JSON = **gold_ore.texture_set.json**
    - File names or value-uniforms for up to 3 layers.
    - The JSON schema is explored in the Texture Set JSON Schema section.

- Texture file 1 = **gold_ore.png**
    - Red, Green, and Blue (RGB) channels = Base Color map
    - Alpha (A) channel = None. Not used for this specific texture set since the gold_ore block is intended to be fully opaque.
    - Note: Texture sets that do use opacity maps can store them in this alpha channel. See the Opacity Maps section.

- Texture file 2 = **gold_ore_mer.png**
    - Red channel = Metallic map (grayscale)
    - Green channel = Emissive map (grayscale)
    - Blue channel = Roughness map (grayscale)
    - Alpha (A) channel = None. Alpha is ignored, texture image may be 3-channel on disk to save space in a resource pack.
    -  The “*_mer” suffix is just a reminder that the Metallic, Emissive, and Roughness maps go into the RGB channels, respectively.

- Texture file 3 (option 1)= **gold_ore_normal.png**
    - RGB channels = Normal map
    - Note: mutually exclusive with use of heightmap layer.
    - Alpha (A) channel = None. Not used at this time

- Texture file 3 (option 2) = **gold_ore_heightmap.png**
    - Note: mutually exclusive with use of normal layer. See the Height Maps subsection of the New PBR Texture Maps section.

### Tools Needed

To create your own PBR texture sets, you will need a photo-editing/digital painting application. Here are a few excellent options:

- Adobe Photoshop
- Paint3D
- Paint.net

You will also need a quick plaintext file editor to write your texture set JSON. The default text editor for your operating system will work, but Sublime Text is a good alternative as it supports syntax coloring.

This guide will cover the Photoshop workflow specifically, but the concepts should transfer to other digital painting applications.

### Opacity Maps

Pay special care to the colors that get stored under the alpha channel as on blocks like Glass, the colors will still apply even if masked by full transparency. To mitigate this, ensure the color is fully white, and save the image as a 32-bits/pixel .TGA file to ensure consistency and avoid an unexpected surprise from PNG image exporters.

Save as a 32-bit TGA file

Note: In the initial release of Minecraft with RTX, the client will use the same textures for both RTX enabled and disabled. This means that an opacity value that is tuned for RTX enabled might look too transparent when RTX is disabled.  To help balance this out, the game will only use the upper half of the range of the texture’s alpha channel (0.5 - 1) when RTX is enabled, but it will map this range to the full range of opacity in the game so no functionality is lost. For RTX disabled, the full range of the alpha channel will be mapped to the full range opacity in the game.

Examples:

If the texture’s alpha channel value = 0 (black), then:

For RTX enabled in the game, texture opacity =  0 (fully transparent)

For RTX disabled in the game, texture opacity = 0 (fully transparent)


If the texture’s alpha channel value = 0.5 (middle gray), then:

For RTX enabled in the game, texture opacity =  0 (still fully transparent)

For RTX disabled in the game, texture opacity = 0.5 (50% opaque)


If the texture’s alpha channel value = 0.75 (light gray), then:

For RTX enabled in the game, texture opacity =  0.5 (50% opaque)

For RTX disabled in the game, texture opacity = 0.75 (75% opaque)


If the texture’s alpha channel value = 1 (white), then:

For RTX enabled in the game, texture opacity =  1 (fully opaque)

For RTX disabled in the game, texture opacity = 1 (fully opaque)

## Texture Set JSON Schema

To begin your PBR enhancements for any texture, you must start it off with a JSON file to define the PBR settings. For further info and documentation, head to the official Minecraft.net page.

The JSON schema is defined as follows:

format_version: The schema version this JSON was written for.
minecraft:texture_set:  The material definitions for the PBR Texture
color: Your base color layer.
This can be a quoted image file name reference (PNG, TGA, or JPG file types allowed), with or without file extension.
It can also be a comma-separated square bracketed list of 3 or 4 values of Red, Green, Blue, and Alpha to set the whole texture as a uniform color. These values can range between 0 and 255.
It can also be an ARGB hex value as a string beginning with the # character.
This layer is required and your texture will be a pink/black checkerboard otherwise.
metalness_emissive_roughness: Your texture containing metallicity, emissivity, and roughness information.
This can be a quoted image file name reference (PNG, TGA, or JPG file types allowed), with or without file extension.
It can also be a square bracketed list of 3 values for metallicity, emissivity, and roughness to set the texture uniformly. These values can range between 0 and 255.
It can also be an RGB hex value as a string beginning with the # character.
Excluding this layer will result in the texture having a non-metallic matte look.
normal: Your material containing per-pixel normals for the texture.
This can only be a quoted filename reference (PNG, TGA, or JPG file types allowed), with or without  file extension.
It is mutually exclusive with heightmap.

heightmap: Your material containing per-pixel heights for the texture.

This can only be a quoted filename reference (PNG, TGA, or JPG file types allowed), with or without file extension.
It is mutually exclusive with normal.
For the file name, take the name of the original texture without the extension and add it to the beginning of .texture_set.json, for instance, gold_ore.texture_set.json, for the gold_ore.png. Then the JSON file goes into the same folder.

Here is an example JSON file following the texture set schema, also demonstrating the correct value usage for each definition:

```json
{
        "format_version": "1.16.100",
        "minecraft:texture_set": {
        "color": [118, 185, 0, 255],
        "metalness_emissive_roughness": “#0008FF”,
        "normal": "an_example_normal"
    }
}
```

Further details on each of these texture set attributes are explained in depth in the following.

## New PBR Texture Maps
The PBR system doesn’t require you to use all of the PBR maps for every texture set. However, you will get the best looking results if you do.

### Metallic map - How metallic is a pixel in your texture:
Value of 0 (black) means non-metallic (wool, wood, plastic, dirt, grass. etc.)
Value of 1 (white) means fully metallic (gold, iron, copper, etc.)
Grayscale values between 0 and 1 can also be used. Values other than black or white will function, but are usually incorrect in PBR rendering.  A well-made metallic map will usually contain black and white pixels only.

**Metallic map example**

In the example above, the block has uniform roughness on all of its surfaces, but it is using a metallic map to control which pixels are metallic (white), and which pixels are non-metallic (black). The metallic pixels look more like gold while the non-metallic pixels look more like shiny, yellow plastic.

### Emissive map - How much a pixel in your texture should glow:

Value of 0 (black) means no glow
Value of 1 (white) means the strongest glow
Grayscale values between 0 and 1 can also be used
The Color of the glow is determined by the pixels in the base color map

**Emissive Map Example**

### Roughness map - How rough (to the touch) is a pixel in your texture:

Value of 0 (black) means very smooth (glass, polished stone, etc.)
Value of 1 (white) means very rough (dry dirt, bark, wool, etc.)
Grayscale values between 0 and 1 can also be used

**Roughness Map Example**

In the example above, the block has uniform metalness on all of its surfaces, but it is using a roughness map to control which pixels are very rough (white), which pixels are very smooth (black), and some pixels that are somewhere in between (gray). The smooth, less rough pixels look more like shiny blue gemstones while the rough pixels look more like rough gray rock.

### Normal map - how raised is a pixel in your texture

Normal maps use the 3 color channels (RGB) in the texture to change how light behaves when hitting the texture. By doing this, it can fake surface details that appear to stick up or recede down into the surface of the 3D mesh.

**Normal Map Example**

RGB values of (128, 128, 255) means the pixel doesn’t stick up or recede down when lit. It will appear at the height of the surface of the 3D mesh. When in doubt, use this default color for your normal map, or don’t use one at all to save on file size.

**Normal Map Default Color**

RGB values other than this default color (above) should not be manually painted unless you’re confident working with normal maps this way. Normal maps are usually automatically generated from other height information when using specific software applications. More details can be found later in this document.

### Height map - alternative to a normal map for giving pixels height or depth.

Height maps have some limitations and should only be used for pixelated texture sets like the 16x16 pixel vanilla Minecraft textures. If you’re painting non-pixelated textures, consider using a normal map instead of a heightmap.

Heightmaps use a 1 color channel (grayscale) in the texture to change how light behaves when hitting the texture.

- R channel values mean the pixel sticks up or recedes inward.
- Value of 1 means the pixel will appear to stick out
- Value of 0 means the pixel will recede inward
- Value of 0.5 means no surface change

### Height Map Example

**Defining the Texture Set**

First things first, let’s start our PBR texture set for the Gold Ore block before we start texturing our example, with the gold_ore.texture_set.json texture set JSON:

```json
{
    "format_version": "1.16.100",
    "minecraft:texture_set": {
        "color": "gold_ore",
        "metalness_emissive_roughness": "gold_ore_mer",
        "normal": "gold_ore_normal"
    }
}
```

## Creating the Base Color and Opacity Texture File

### Defining the Texture Set

First things first, let’s start our PBR texture set for the Gold Ore block before we start texturing our example, with the gold_ore.texture_set.json texture set JSON:
{
    "format_version": "1.16.200",
    "minecraft:texture_set": {
        "color": "gold_ore",
        "metalness_emissive_roughness": "gold_ore_mer",
        "normal": "gold_ore_normal"
    }
}

### Creating the Base Color and Opacity Texture File

Let’s create custom base color and opacity maps:

1. Open a vanilla Minecraft texture in the app as a starting point, or skip to Step 2.

**Open a vanilla Minecraft texture to start**

1. Create a new document at the texture resolution that you want. (16x16 pixels for most vanilla Minecraft textures) Also, 72 pixels/inch is recommended for the pixel density.

**Create a new Photoshop file with these specs**

1. Create working layers for the base color and opacity map (if needed). Paint what you want and make any edits in these layers. In the example below, multiple layers have been painted to edit the base color map (more gold!).

**Create layers for opacity and other features**

1. Once you have the base color and opacity map layers looking the way you want, it’s a good idea to save your Photoshop document using the name of the object’s texture set.

For this example, this file was saved as “gold_ore.PSD”. Next, we need to save out a texture file that the game can use.

>[!Note]
> For most game objects, transparent pixels in the opacity map must also be painted black in the base color map (e.g. tree leaves). However, there are exceptions where the transparent pixels must also be painted white in the base color map in order to appear correct in the game (e.g. rails). Some experimentation may be necessary.

5. (Optional, for non-opaque objects only) - Duplicate your opacity map layers, merge the duplicates together to create a single layer, and then copy it (Ctrl+C).

6. (Optional, for non-opaque objects only) - In the Channels tab, create a new alpha channel, and paste (Ctrl+V) your merged opacity map into this channel. Click on the small gray box to the left of the RGB channel to make the RGB channels visible again.

Creat a new alpha channel, if needed
You now have your base color map being stored in the RGB channels and the opacity map stored in the alpha channel.

7. (Optional, for non-opaque objects only) - Go back to the Layers tab and hide any of your opacity map layers. Only your base color map layers should be showing.

8. Re-save the .PSD.

9. Use the Save As command to save a .PNG texture file that can be used by the game.
Note on opacity: You will save out a 32-bits/pixel .TGA file at this step if your object is intended to be non-opaque and uses an opacity map in the alpha channel. See the Opacity Maps section above.

> [!Note]
> File naming is important at this step! This .PNG should have the same name as the game object that you are modifying. For this example, this file was saved as “gold_ore.PNG”.

10. You have successfully created the first of 3 texture files for a complete PBR texture set.

### Creating the Metallic, Emissive, and Roughness Texture File

Next, you’ll want to create the second PBR texture file combining the metallic, emissive, and roughness PBR maps.

1. (Optional) Open a vanilla Minecraft texture in Photoshop or a similar app as a starting point, or skip to the next step.

Open a vanilla Minecraft texture to start

2. Create a new document at the same texture resolution as your first texture file (base color and opacity map). (16x16 pixels for most vanilla Minecraft textures) Again, 72 pixels/inch is recommended for the pixel density.

**Create a new Photoshop file with the same specs as the previous one**

3. Create working layers for the metallic, emissive, and roughness map. Paint what you want and make any edits in these layers.

>[!Note]
> You only need to paint these maps using grayscale values.

In the example below, multiple layers have been painted to create the desired roughness map result.

**Create layers**

4. Make sure to place layers of each map type into layer groups. This is important for the next few steps.

**Group the layers**

5. Right-click on the Metallic layer group and select “Blending Options”.

6. Uncheck the green (G) and blue (B) channels:

Uncheck Green and Blue channels

7. Click “OK” to close the Blending Options window for the Metallic layer group.

8. Right-click on the Emissive layer group and select “Blending Options”.

9. Uncheck the red (R) and blue (B) channels:

**Uncheck Red and Blue channels**

10. Click “OK” to close the Blending Options window for the Emissive layer group.

11. Right-click on the Roughness layer group and select “Blending Options”.

12. Uncheck the red (R) and green (G) channels:

Uncheck Red and Green channels

13. Click “OK” to close the Blending Options window for the Roughness layer group.

14. Once you have the metallic, emissive, and roughness map layers looking the way you want, it’s a good idea to save your Photoshop document using the name of the object’s texture set with the addition of the *_mer suffix.

For this example, this file was saved as “gold_ore_mer.PSD”. Next, we need to save out a texture file that the game can use.

15. Use the Save As command to save a .PNG texture file that can be used by the game.

>[!Note]
> Again, file naming is important at this step. This .PNG file should have the same name as the game object that you are modifying with the addition of the *_mer suffix. For this example, the file was saved as “gold_ore_mer.PNG”.

16. You have successfully created the second of 3 texture files for a complete PBR texture set.

### Creating the Normal Texture File

Normal maps are usually created using specialized tools. There are many professional software options as well as some great, free alternatives available:

Free Tool - xNormal
Adobe Photoshop - Filters → 3D → Generate Normal Map
PBR Painting - Substance Painter
PBR Painting - Quixel Mixer
Example of a brick wall PBR texture set (left) and its normal map (right):

### Brick wall PBR texture

**The normal map of a brick wall PBR texture**

Create a normal map using your preferred tool or workflow at the same resolution as your first texture file (base color and opacity map). Again, 72 pixels/inch is recommended for the pixel density.

Use the Save As command to save a .PNG texture file that can be used by the game.
Note: Again, file naming is important at this step. This .PNG should have the same name as the game object that you are modifying with the addition of the *_normal suffix. For this example, the file was saved as “gold_ore_normal.PNG”.

If you’re not familiar with creating normal maps, you can always just leave it out or create a “blank” normal map by filling a texture with (128, 128, 255) RGB color and saving the .PNG file.

Alternatively, since the “gold_ore” example is a pixelated texture, we could have also used the height map option to create surface details. The file name would still be “gold_ore_normal.TGA” in this example, but the information stored in the texture channels would be different. See the Height Maps subsection of the New PBR Texture Maps section above for more info.

Finished! You have created the third and final texture file for a complete PBR texture set.
Alternate Workflow: Using Photoshop’s Generate Image Assets Function
Instead of having 3 Photoshop .PSD files for each of the 3 PBR texture files, you could alternatively use a single .PSD file and take advantage of Photoshop’s Generate → Image Assets function in the File menu.

**Generate Image Assets in Photoshop**

As long as you create a layer group for each PBR texture file and name it with the correct file name and file type (.png), they will save themselves automatically after each change (after you initially save the .PSD file).

More information can be found here.

> [!Note]
> Since this function cannot output .TGA files, you won’t be able to use it to save a texture file with an alpha channel like those needed for non-opaque texture sets.

Caveats for Creating Mirrors with Perfect Reflections
Using PBR maps like metalness and roughness along with ray tracing, you can create highly reflective materials like shiny plastics, smooth metal, or polished stone. All of these will have high quality reflections.

However, for perfectly reflective objects like mirrors, you’ll want to configure your PBR maps to enable a perfect mirror.  If you use a solid black roughness map (0.0) and a solid white (1.0) metalness map, the game will interpret your material as a perfect mirror. This means that the ray tracing code can take some shorter paths during its calculations since it knows that the material will fully reflect the environment without any additional details to take into account.

## Creating Mirrors utilizing Adobe Substance Painter

### How to Create PBR Textures in Substance by Adobe

If you have access to the Substance Painter app, you can create higher resolution PBR texture sets in a much more intuitive manner. This software lets you see all of the maps of your PBR texture set displayed in real-time on mesh geometry. This allows you to tune your texture maps as you work without having to launch the game, move any files around, or modify channels.

#### Start a new project in Substance, using these specs

1. Launch the application and select New Project from the File menu.

2. Template = Unreal Engine 4 - This will automatically set a variety of application and viewer settings. Feel free to try other options or make your own template!

3. File → Select - This is where you select what mesh you would like to display and paint your textures on. For Minecraft with RTX, using a 1 meter by 1 meter cube mesh with just 6 faces (no subdivisions) will give you an exact preview of how your textures will look when mapped onto a block in the game. Using the .FBX mesh format is recommended.

4. Document Resolution - This is the texture resolution that you’re targeting. Note: This setting can be changed later non-destructively at any time. For HD textures, it’s recommended to work at 1024 - you’ll get lots of detail in your textures with minimal pixelation, the app will run nice and fast on most PC setups, and your HD textures should look sharp in the game.

If you’ve only ever worked with textures in vanilla Minecraft, you’ll notice that you can’t select 16 pixels by 16 pixels here for your resolution (the lowest is 128). However, you can always author and export textures at 128x128 (or larger) and scale them down later in an image-editing application like Photoshop.

5. Normal Map Format = DirectX (leave as default)

6. Compute Tangent Space Per Fragment = True (leave as default)

7. Add - (Optional) Here you can choose to import any supporting textures that you already have completed. If replacing a vanilla Minecraft texture with an HD version, it can be helpful to import the vanilla texture here for use as a reference. Note: This import step can also be performed later at any time. For this example, the vanilla “iron_block” texture file is going to be imported when the new project is created to be used as a reference.

8. Click “OK”. The application should open this new project that you’re creating and look something like this:

///TODO Add screenshot

9. It’s a good idea to add the emissive map to your texture set list at this point. Even if your texture set isn’t going to use emissivity, don’t worry, it will default to black (0.0) and won’t hurt anything.
Note: You can also add an opacity map to your texture set list in the same way if you’re planning on creating a non-fully opaque texture set.

### How to make an opacity map

10. (Optional) Next, add your texture reference to a new fill layer in the Base Color slot. You’ll find your imported reference texture on the Shelf under the Project heading.

**Define a texture reference**

Layers are automatically set to bilinear filtering when created, which can make pixelated textures like vanilla Minecraft textures look blurry. To correct this, just set the layer’s Filtering to Nearest. However, if you’re not using pixelated textures, leave your layer filtering on the default setting of bilinear HQ.

From here, it’s also a good idea to set this reference layer to have full roughness (1.0), no metalness (0.0), and no emissivity (black: 0, 0, 0). This will make sure that the reference texture is displayed in Painter as close to the vanilla game as it can be.

>[!Note]
> If you didn’t import reference textures or other resources when you created the project, you can do so at any time using the Import Resources button on the Shelf.

**Use this button to import textures at any time**

11. Now is a great time to save your project. It’s recommended to name your Painter project after the game object whose texture set you are replacing. For this example, this project file has been saved as “iron_block.SPP”. Naming your project this way will make things easier when exporting your texture set later.

**Save your project**

12. From here, you can create your texture set with all of its PBR maps as you see fit.

In this example, a new fill layer was added (with some adjustment sub-layers) to create a dark, high definition iron material.

**Create your PBR texture set**

13. Next, a new fill layer adding an indent detail to give the surface of the block some new character.

**Add a fill layer**

14. And finally, another fill layer to add some dirt collecting in the corners of the indent and some scratches randomly across the surface.

**Add another fill layer to give your texture some extra detailps**

15. Re-save as needed.

16. Now that the whole texture set is looking great inside Painter, you need to export your textures.

    Select: File → Export Textures to open the export subwindow.

17. Create a new export preset configuration like this, which will output your texture set in a way that can be used by the game build.

**Create a new export preset configuration by following the squiggly lines**

Note that the “$project” prefix on each output map will name each of the exported texture files after the name of the project. So, if you named your project after the game object that this texture set will belong to, all of your exported textures will immediately be ready for use in the game without any additional renaming.

18. Once you have your export preset set up, select it in the “Config” field and use these recommended settings:

- Location - This can be the textures location for the resource pack that you’re working on. This makes things easier because you can export textures from Painter and they will immediately show up or be updated in the same folder that the game is referencing when it runs (assuming that you have your resource pack activated in the game).

- PNG - Use this setting to ensure that your files can be used by the game and that they are as small and efficient as possible.

- Texture set resolution - This is the size of the textures that will be exported. This setting is independent of the resolution of your project. So, if you want you work on your project at one resolution and then export files at another resolution. 1024x1024 is recommended for HD texture sets.
Define your texture's export resolution
Note: The example above is for a fully opaque texture set. If you are using an opacity map in your texture set list for transparency, you will want to export your base color map as a targa (.TGA) file (instead of a .PNG) with the opacity map being stored in the alpha channel.

**Follow more squiggly lines to save as a TGA if you're using transparencies**

19. Re-save your project! This will save your export settings as well, which will make your workflow much faster as you do further iterations with your texture set.

20. Finished! You have created your first set of HD PBR textures for Minecraft with RTX! Refer to the earlier sections, Resource Pack Setup and How to Test Your Textures in the Game, to find instructions on how to view your new textures in the game.

Credit:
All textures were created with “Substance”  the leading software solution for 3D digital materials.
https://www.substance3d.com/
@Substance3d
#MadeWithSubstance
#CreateWithSubstance
