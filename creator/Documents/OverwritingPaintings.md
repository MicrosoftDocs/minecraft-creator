---
author: cam-wilkerson
ms.author: v-cwilkerson
title: "Create Custom Paintings: An Introduction to Resource Packs"
description: "An introduction to Resource Packs and a tutorial on overwriting .png files to make a custom painting"
ms.service: minecraft-bedrock-edition
ms.date: 07/25/2025
---

# Create a Custom Painting

Now that you know how to use a Resource Pack to make an add-on for Minecraft: Bedrock Edition, you're ready to start customizing your worlds! Custom paintings are one of the most straightforward changes you can make to Minecraft's vanilla values, but there are a few things to keep in mind.

To allow new paintings into the game without breaking backwards compatibility for Bedrock Creators, we made the process pretty simple&mdash;just overwrite a vanilla painting's image file with the image you want to see instead.

Paintings are randomly called based on their size and the amount of space available on the wall you're placing them on. There's currently no way to guarantee the painting you place will show your custom image unless you overwrite all the image files associated with paintings of that size. Otherwise, in game you may need to place and remove a painting multiple times in game before you get your custom painting.


In this tutorial, you'll learn:

> [!div class="checklist"]
>
> - Where the texture files for vanilla paintings live.
> - How to overwrite a file to change its vanilla value.
> - How to create a resource pack that adds your custom painting(s).


## Bedrock Samples Repository

There is a public GitHub repository that contains the latest resource and behavior examples for creating add-ons for Minecraft: Bedrock Edition. The [bedrock-samples](https://github.com/Mojang/bedrock-samples/tree/main) repository contains the source of those files, with all the values for vanilla Minecraft assets.


## Requirements

It's recommended you complete the following tuorials before beginning this tutorial.

> [!div class="checklist"]
>
> - [Getting Started with Add-On Development](GettingStarted.md)
> - [Introduction to Resource Packs](./ResourcePack.md)


## Building the Resource Pack

For Minecraft to find and use your resource files, you must set up the folders and files in a specific way. Check out [Introduction to Resource Packs](./ResourcePack.md) for a guide on creating and structuring your resource pack if you don't already know how to.


## Overwriting older paintings

Older paintings are stored as coordinates in a single large image (kz.png) in the public repository.

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
| Name | Filename | Size (px) | Coordinates |
|:----------|:----------|:----------|:------|
|Kebab|kz.png|16x16|0.0f, 16.0f, 0.0f, 16.0f|
|Aztec|kz.png|16x16|16.0f, 32.0f, 0.0f, 16.0f|
|Alban|kz.png|16x16|32.0f, 48.0f, 0.0f, 16.0f|
|Aztec2|kz.png|16x16|48.0f, 64.0f, 0.0f, 16.0f|
|Bomb|kz.png|16x16|64.0f, 80.0f, 0.0f, 16.0f|
|Plant|kz.png|16x16|80.0f, 96.0f, 0.0f, 16.0f|
|Wasteland|kz.png|16x16|96.0f, 112.0f, 0.0f, 16.0f|
|Pool|kz.png|32x16|0.0f, 32.0f, 32.0f, 48.0f|
|Courbet|kz.png|32x16|32.0f, 64.0f, 32.0f, 48.0f|
|Sea|kz.png|32x16|64.0f, 96.0f, 32.0f, 48.0f|
|Sunset|kz.png|32x16|96.0f, 128.0f, 32.0f, 48.0f|
|Creebet|kz.png|32x16|128.0f, 160.0f, 32.0f, 48.0f|
|Wanderer|kz.png|16x32|0.0f, 16.0f, 64.0f, 96.0f|
|Graham|kz.png|16x32|16.0f, 32.0f, 64.0f, 96.0f|
|Match|kz.png|32x32|0.0f, 32.0f, 128.0f, 160.0f|
|Bust|kz.png|32x32|32.0f, 64.0f, 128.0f, 160.0f|
|Stage|kz.png|32x32|64.0f, 96.0f, 128.0f, 160.f|
|Void|kz.png|32x32|96.0f, 128.0f, 128.0f, 160.0f|
|SkullAndRoses|kz.png|32x32|128.0f, 160.0f, 128.0f, 160.0f|
|Wither|kz.png|32x32|160.0f, 192.0f, 128.0f, 160.0f|
|Fighters|kz.png|64x32|0.0f, 64.0f, 96.0f, 128.0f|
|Pointer|kz.png|64x64|0.0f, 64.0f, 192.0f, 256.0f|
|Pigscene|kz.png|64x64|64.0f, 128.0f, 192.0f, 256.0f|
|BurningSkull|kz.png|64x64|128.0f, 192.0f, 192.0f, 256.0f|
|Skeleton|kz.png|64x48|192.0f, 256.0f, 64.0f, 112.0f|
|DonkeyKong|kz.png|64x48|192.0f, 256.0f, 112.0f, 160.0f|
|Earth|kz.png|32x32|0.0f, 32.0f, 160.0f, 192.0f|
|Wind|kz.png|32x32|32.0f, 64.0f, 160.0f, 192.0f|
|Fire|kz.png|32x32|64.0f, 96.0f, 160.0f, 192.0f|
|Water|kz.png|32x32|96.0f, 128.0f, 160.0f, 192.0f|

## Overwriting newer paintings
Newer paintings have their own files in [bedrock-samples](https://github.com/Mojang/bedrock-samples/tree/main/resource_pack/textures/painting), so you don't need to add coordinates for Minecraft to know what painting you want to change. To overrwite a vanilla painting that has its own file:

1. Create a new resource pack folder in com.mojang.

2. Build the file structure in your new resource pack for a new texture.

3. Add a new folder in **textures** called **painting**.

4. Create the .png file for your new painting and save it in **painting** with the filename of the vanilla painting you want to replace.
    > [!Tip]
    > Make your new .png file match the pixel size of the file you're replacing to prevent resolution distortions. 

### Paintings and details
| Name | Filename | Size (px) |
|:----------|:----------|:----------|
|Baroque|baroque.png|32x32|
|Humble|humble.png|32x32|
|Meditative|meditative.png|16x16|
|Prarie_Ride|prarie_ride.png|16x32|
|Unpacked|unpacked.png|64x64|
|Backyard|backyard.png|48x64|
|Bouquet|bouquet.png|48x48|
|Cavebird|cavebird.png|48x48|
|Changing|changing.png|64x32|
|Cotan|cotan.png|48x48|
|Endboss|endboss.png|48x48|
|Fern|fern.png|48x48|
|Finding|finding.png|64x32|
|Lowmist|lowmist.png|64x32|
|Orb|orb.png|64x64|
|Owlemons|owlemons.png|48x48|
|Passage|passage.png|64x32|
|Pond|pond.png|48x64|
|Sunflowers|sunflowers.png|48x48|
|Tides|tides.png|48x48|


## What's Next?

Now that you know how to overwrite vanilla files, you're ready to learn more about Resource Packs and what else you can do with them!

> [!div class="nextstepaction"]
>
> - [Create a Custom Die Block](./AddCustomDieBlock.md)
> - [Create a Sushi Block](./AdvancedCustomBlocks.md)
> - [Create an Animated Block Texture](./CreateAnimatedBlockTexture.md)