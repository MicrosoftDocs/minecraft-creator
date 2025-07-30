---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Create Custom Paintings: An Introduction to Resource Packs"
description: "An introduction to Resource Packs and a tutorial on overwriting .png files to make a custom painting"
ms.service: minecraft-bedrock-edition
ms.date: 07/25/2025
---

# Create a Custom Painting

Now that you know how to use a [Resource Pack](./ResourcePack.md) to make an add-on for Minecraft: Bedrock Edition, you're ready to start customizing your worlds! Custom paintings are one of the most straightforward changes you can make to Minecraft's vanilla values, but there are a few things to keep in mind.

To allow new paintings into the game without breaking backwards compatibility for Bedrock Creators, we made the process pretty simple&mdash;just overwrite a vanilla painting's image file with the image you want to see instead.

Paintings are randomly called based on their size and the amount of space available on the wall you're placing them on. There's currently no way to guarantee the painting you place will show your custom image, so you may need to place and remove a painting multiple times before you get your custom painting in game.


In this tutorial, you'll learn:

> [!div class="checklist"]
>
> - Where the texture files for vanilla paintings live.
> - How to overwrite a file to change its vanilla value.
> - How to create a resource pack that adds your custom painting(s).


## The bedrock-samples repository

There is a public GitHub repository that contains the latest resource and behavior examples for creating add-ons for Minecraft: Bedrock Edition. The [bedrock-samples](https://github.com/Mojang/bedrock-samples/tree/main) repository contains the source of those files, with all the values for [these paintings](https://github.com/Mojang/bedrock-samples/tree/main/resource_pack/textures/painting) and lots of other vanilla Minecraft assets.


## Requirements

It's recommended you complete the following tutorials before beginning this guide.

> [!div class="checklist"]
>
> - [Getting Started with Add-On Development](GettingStarted.md)
> - [Introduction to Resource Packs](./ResourcePack.md)


## Building the Resource Pack

For Minecraft to find and use your resource files, you must set up the folders and files in a specific way. Check out [Introduction to Resource Packs](./ResourcePack.md) for a guide on creating and structuring your resource pack if you don't already know how to.


## Overwriting older paintings

Older paintings (paintings from before v1.21.00) are stored as coordinates in a single large image (kz.png) in the public repository.

1. Create a new resource pack folder in com.mojang.

2. Build the file structure in your new resource pack for a new texture.

3. Add a new folder in **textures** called **painting**. 

4. Use your web browser to open [bedrock-samples](https://github.com/Mojang/bedrock-samples/).

5. Find **kz.png**, the image file that contains all of Minecraft's older paintings.
    > [!Tip]
    > You can find the textures folder with the following path: `bedrock-samples/tree/main/resource_pack/textures/painting`

6. Copy **kz.png** to your **painting** folder.

7. Open **kz.png** in an image editor and replace the painting's vanilla image (found in **kz.png**, at the  coordinates below) with your new one.

8. Save your changes to **kz.png**

### Paintings and details
| Name | Image | Filename | Size (px) | Coordinates |
|:----------|:-------|----------|:----------|:------|
|Kebab|:::image type="content" source="Media/OverwritingPaintings/kebab.png" alt-text="Kebab med tre pepperoni painting":::|kz.png|16x16|0.0f, 16.0f, 0.0f, 16.0f|
|Aztec|:::image type="content" source="Media/OverwritingPaintings/aztec.png" alt-text="Aztec painting":::|kz.png|16x16|16.0f, 32.0f, 0.0f, 16.0f|
|Alban|:::image type="content" source="Media/OverwritingPaintings/alban.png" alt-text="Albanian painting":::|kz.png|16x16|32.0f, 48.0f, 0.0f, 16.0f|
|Aztec2|:::image type="content" source="Media/OverwritingPaintings/aztec2.png" alt-text="Aztec painting #2":::|kz.png|16x16|48.0f, 64.0f, 0.0f, 16.0f|
|Bomb|:::image type="content" source="Media/OverwritingPaintings/bomb.png" alt-text="Target Successfully Bombed painting":::|kz.png|16x16|64.0f, 80.0f, 0.0f, 16.0f|
|Plant|:::image type="content" source="Media/OverwritingPaintings/plant.png" alt-text="Paradisträd painting":::|kz.png|16x16|80.0f, 96.0f, 0.0f, 16.0f|
|Wasteland|:::image type="content" source="Media/OverwritingPaintings/wasteland.png" alt-text="Wasteland painting":::|kz.png|16x16|96.0f, 112.0f, 0.0f, 16.0f|
|Pool|:::image type="content" source="Media/OverwritingPaintings/pool.png" alt-text="The Pool painting":::|kz.png|32x16|0.0f, 32.0f, 32.0f, 48.0f|
|Courbet|:::image type="content" source="Media/OverwritingPaintings/courbet.png" alt-text="Bonjour Monsieur Courbet painting":::|kz.png|32x16|32.0f, 64.0f, 32.0f, 48.0f|
|Sea|:::image type="content" source="Media/OverwritingPaintings/seaside.png" alt-text="Seaside painting":::|kz.png|32x16|64.0f, 96.0f, 32.0f, 48.0f|
|Sunset|:::image type="content" source="Media/OverwritingPaintings/sunset.png" alt-text="Sunset painting":::|kz.png|32x16|96.0f, 128.0f, 32.0f, 48.0f|
|Creebet|:::image type="content" source="Media/OverwritingPaintings/creebet.png" alt-text="Creebet painting":::|kz.png|32x16|128.0f, 160.0f, 32.0f, 48.0f|
|Wanderer|:::image type="content" source="Media/OverwritingPaintings/wanderer.png" alt-text="Wanderer painting":::|kz.png|16x32|0.0f, 16.0f, 64.0f, 96.0f|
|Graham|:::image type="content" source="Media/OverwritingPaintings/graham.png" alt-text="Graham painting":::|kz.png|16x32|16.0f, 32.0f, 64.0f, 96.0f|
|Match|:::image type="content" source="Media/OverwritingPaintings/match.png" alt-text="Match painting":::|kz.png|32x32|0.0f, 32.0f, 128.0f, 160.0f|
|Bust|:::image type="content" source="Media/OverwritingPaintings/bust.png" alt-text="Bust painting":::|kz.png|32x32|32.0f, 64.0f, 128.0f, 160.0f|
|Stage|:::image type="content" source="Media/OverwritingPaintings/stage.png" alt-text="The Stage Is Set painting":::|kz.png|32x32|64.0f, 96.0f, 128.0f, 160.f|
|Void|:::image type="content" source="Media/OverwritingPaintings/void.png" alt-text="The Void painting":::|kz.png|32x32|96.0f, 128.0f, 128.0f, 160.0f|
|SkullAndRoses|:::image type="content" source="Media/OverwritingPaintings/skull_and_roses.png" alt-text="Skull and Roses painting":::|kz.png|32x32|128.0f, 160.0f, 128.0f, 160.0f|
|Wither|:::image type="content" source="Media/OverwritingPaintings/wither.png" alt-text="Wither painting":::|kz.png|32x32|160.0f, 192.0f, 128.0f, 160.0f|
|Fighters|:::image type="content" source="Media/OverwritingPaintings/fighters.png" alt-text="The Fighters painting":::|kz.png|64x32|0.0f, 64.0f, 96.0f, 128.0f|
|Pointer|:::image type="content" source="Media/OverwritingPaintings/pointer.png" alt-text="Pointer painting":::|kz.png|64x64|0.0f, 64.0f, 192.0f, 256.0f|
|Pigscene|:::image type="content" source="Media/OverwritingPaintings/pigscene.png" alt-text="Pigscene painting":::|kz.png|64x64|64.0f, 128.0f, 192.0f, 256.0f|
|BurningSkull|:::image type="content" source="Media/OverwritingPaintings/burningskull.png" alt-text="Burning Skull painting":::|kz.png|64x64|128.0f, 192.0f, 192.0f, 256.0f|
|Skeleton|:::image type="content" source="Media/OverwritingPaintings/skeleton.png" alt-text="Mortal Coil painting":::|kz.png|64x48|192.0f, 256.0f, 64.0f, 112.0f|
|DonkeyKong|:::image type="content" source="Media/OverwritingPaintings/donkeykong.png" alt-text="Kong painting":::|kz.png|64x48|192.0f, 256.0f, 112.0f, 160.0f|
|Earth|:::image type="content" source="Media/OverwritingPaintings/earth.png" alt-text="Earth painting":::|kz.png|32x32|0.0f, 32.0f, 160.0f, 192.0f|
|Wind|:::image type="content" source="Media/OverwritingPaintings/wind.png" alt-text="Wind painting":::|kz.png|32x32|32.0f, 64.0f, 160.0f, 192.0f|
|Fire|:::image type="content" source="Media/OverwritingPaintings/fire.png" alt-text="Fire painting":::|kz.png|32x32|64.0f, 96.0f, 160.0f, 192.0f|
|Water|:::image type="content" source="Media/OverwritingPaintings/water.png" alt-text="Water painting":::|kz.png|32x32|96.0f, 128.0f, 160.0f, 192.0f|

## Overwriting newer paintings
Newer paintings have their own files in [bedrock-samples](https://github.com/Mojang/bedrock-samples/tree/main/resource_pack/textures/painting), so you don't need to add coordinates for Minecraft to know what painting you want to change. To overrwite a vanilla painting that has its own file:

1. Create a new resource pack folder in com.mojang.

2. Build the file structure in your new resource pack for a new texture.

3. Add a new folder in **textures** called **painting**.

4. Create the .png file for your new painting and save it in **painting** with the filename of the vanilla painting you want to replace.
    > [!Tip]
    > Make your new .png file match the pixel size of the file you're replacing to prevent resolution distortions. 

### Paintings and details
| Name | Image | Filename | Size (px) |
|:----------|:---------|:----------|:----------|
|Baroque|:::image type="content" source="Media/OverwritingPaintings/baroque.png" alt-text="Baroque painting":::|baroque.png|32x32|
|Humble|:::image type="content" source="Media/OverwritingPaintings/humble.png" alt-text="Humble painting":::|humble.png|32x32|
|Meditative|:::image type="content" source="Media/OverwritingPaintings/meditative.png" alt-text="Meditative painting":::|meditative.png|16x16|
|Prairie_Ride|:::image type="content" source="Media/OverwritingPaintings/prairie_ride.png" alt-text="Prairie ride painting":::|prairie_ride.png|16x32|
|Unpacked|:::image type="content" source="Media/OverwritingPaintings/unpacked.png" alt-text="Unpacked painting":::|unpacked.png|64x64|
|Backyard|:::image type="content" source="Media/OverwritingPaintings/backyard.png" alt-text="Backyard painting":::|backyard.png|48x64|
|Bouquet|:::image type="content" source="Media/OverwritingPaintings/bouquet.png" alt-text="Bouquet painting":::|bouquet.png|48x48|
|Cavebird|:::image type="content" source="Media/OverwritingPaintings/cavebird.png" alt-text="Cavebird painting":::|cavebird.png|48x48|
|Changing|:::image type="content" source="Media/OverwritingPaintings/changing.png" alt-text="Changing painting":::|changing.png|64x32|
|Cotan|:::image type="content" source="Media/OverwritingPaintings/cotan.png" alt-text="Cotan painting":::|cotan.png|48x48|
|Endboss|:::image type="content" source="Media/OverwritingPaintings/endboss.png" alt-text="Endboss painting":::|endboss.png|48x48|
|Fern|:::image type="content" source="Media/OverwritingPaintings/fern.png" alt-text="Fern painting":::|fern.png|48x48|
|Finding|:::image type="content" source="Media/OverwritingPaintings/finding.png" alt-text="Finding painting":::|finding.png|64x32|
|Lowmist|:::image type="content" source="Media/OverwritingPaintings/lowmist.png" alt-text="Lowmist painting":::|lowmist.png|64x32|
|Orb|:::image type="content" source="Media/OverwritingPaintings/orb.png" alt-text="Orb painting":::|orb.png|64x64|
|Owlemons|:::image type="content" source="Media/OverwritingPaintings/owlemons.png" alt-text="Owlemons painting":::|owlemons.png|48x48|
|Passage|:::image type="content" source="Media/OverwritingPaintings/passage.png" alt-text="Passage painting":::|passage.png|64x32|
|Pond|:::image type="content" source="Media/OverwritingPaintings/pond.png" alt-text="Pond painting":::|pond.png|48x64|
|Sunflowers|:::image type="content" source="Media/OverwritingPaintings/sunflowers.png" alt-text="Sunflowers painting":::|sunflowers.png|48x48|
|Tides|:::image type="content" source="Media/OverwritingPaintings/tides.png" alt-text="Tides painting":::|tides.png|48x48|


## What's Next?

Now that you know how to overwrite vanilla files, you're ready to learn more about Resource Packs and what else you can do with them!

> [!div class="nextstepaction"]
>
> - [Create a Custom Die Block](./AddCustomDieBlock.md)
> - [Create a Sushi Block](./AdvancedCustomBlocks.md)
> - [Create an Animated Block Texture](./CreateAnimatedBlockTexture.md)