---
author: mammerla
ms.author: v-jillheaden
title: Converting Texture Packs from Java Edition to Bedrock Edition
ms.prod: gaming
---

# Converting Texture Packs from Minecraft: Java Edition to Minecraft: Bedrock Edition

This article discusses the general tasks required to manually convert a resource pack made for Java Edition to a texture pack for Bedrock Edition. The actual creation of custom textures and features for a custom texture pack is not within the scope of this article. It’s assumed that the creator has sufficient knowledge and experience with a raster graphics editor, such as Adobe Photoshop, to create and edit the texture files as necessary. Note that not all tools may support the required file formats or alpha channels.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - Differences in texture packs between Bedrock Edition and Java Edition.
> - The changes necessary to convert a pack from Java Edition to Bedrock Edition.

### Requirements

It is recommended that the following be completed before beginning this tutorial.

- [Differences Between Minecraft: Bedrock Edition and Minecraft: Java Edition](DifferencesBetweenBedrockAndJava.md)

## Texture Pack Differences Between Java and Bedrock Editions

In general, the differences between texture packs for Java Edition and Bedrock Edition are as follows:

- The directory structure
- The naming conventions (filenames)
- The file formats (`.png` vs `.tga`)
- The file types (single face vs. UV)
- The method of defining some features such as animated textures
- The metadata files (`.json`).

|Content|Bedrock Edition|Notes|
|:---|:---|:---|
|Animation|Block animations controlled by `flipbook_textures.json`, can be customized|External site: [Block Animations](https://minecraft.fandom.com/wiki/Bedrock_Edition_animation_documentation)|
|Spawn Egg|Individual spawn egg textures||
|Potion bottle|Individual potion bottles||
|Color maps|`.json` file||
|Transparency or emissive|`.tga` file with alpha channel `.png` for items|Some textures with transparent or emissive pixels need to be saved in Targa (`.tga`) file format with an alpha channel for the mask|
|Particles|Completely data driven| |
|Geometry|Custom mob geometry, UVs|Geometry can be updated with programs such as [Blockbench](https://www.blockbench.net/) or [Blender](https://www.blender.org/)|

## Best Practices

Start with a copy of a valid custom Java Edition texture pack and a copy of the vanilla Bedrock Edition texture pack. The conversion process will replace the vanilla Bedrock Edition texture files with custom texture files from the Java Edition pack. There are some required Bedrock Edition texture files that have different file formats and file types, and some that don’t exist in the Java Edition pack will need to be created. Advanced customizations in the Java Edition pack may or may not be possible to duplicate in the Bedrock Edition pack and aren’t within the scope of this article.

- Obtain the most current version of the vanilla Bedrock Edition texture pack for reference.
- [Download for the most recent Bedrock Edition resource pack](https://aka.ms/resourcepacktemplate), which contains textures.
- Setup File Explorer windows side by side -- one with your Java Edition texture pack, and one with the vanilla Bedrock Edition texture pack. This vanilla Bedrock Edition pack will become your custom Bedrock Edition texture pack at the end of this process, as the vanilla texture files are replaced with your custom ones.
- Obtain and install the latest version of the Minecraft Bedrock Edition game app.
- In general, copy over your Java Edition texture files to the copy of the vanilla Bedrock Edition texture pack. Make sure that every Java Edition file copied over is replacing an existing Bedrock Edition file. If there is no corresponding Bedrock Edition file, it’s not needed and shouldn’t be present in the Bedrock Edition pack.

**Nonexistent:** Don’t copy over any Java Edition files that don’t exist in the Bedrock Edition vanilla texture pack. This includes `.mcmeta` files.

**Do Not Replace:** Do not copy over any non-texture Java Edition files including data files.

**No Changes:** Many textures require no changes whatsoever and can be dropped into the Bedrock Edition pack straight away. Begin replacing textures in the vanilla Bedrock Edition texture pack with your Java Edition texture files where the filenames are exactly the same. Test the modified pack and verify the replaced files are seen in-game. Repeat with all the textures with no filename change required until completed.

**Name Change Only:** Many textures require only a filename change for Bedrock Edition. Change your Java Edition texture filenames to their corresponding Bedrock Edition filenames and replace the ones in the vanilla Bedrock Edition texture pack. Test the pack in-game to verify that these textures are working.

**Format Change Required:** Unlike Java Edition textures, Bedrock Edition uses alpha channels for transparency. Some textures with transparency may need to be saved in TGA format for Bedrock Edition. If your texture is not rendering correctly in PNG, convert to TGA and indicate transparent pixels in the alpha channel with a mask (*white is solid and black is transparent*). Note that while PNG may work, TGA is the preferred format.

- For blocks that support emissive, emissive pixels are indicated as an alpha channel mask. Note that transparency and emissive are mutually exclusive. (Examples: phantom eyes, spider eyes, Endermen eyes, etc.)
- For blocks and items and entities that support dye colors, areas that are to be colored by dyes are defined in an alpha channel mask with **grey** pixels (not black or white). (Examples: leather armor, fireworks charge.)

**New Texture Files Required:** Some textures in Bedrock Edition require additional textures to be created. Examples include potions and spawn eggs. In Java Edition, a base texture is recolored automatically by the game, but in Bedrock Edition, each color texture must be explicitly defined. For example, each mob spawn egg must have its own texture file.

**File Type Change Required:** For some blocks and entities, Bedrock Edition requires UV maps instead of individual files for each face. The individual Java Edition textures will need to be combined into one UV map, with alpha channels if needed. For example, the pig_saddle.png contains the full pig texture instead of just the saddle texture.

**Flipbook animation:** Where in Java Edition packs texture animation frames are defined in individual .mcmeta text files, Bedrock Edition combines all the texture animation definitions into a single `flipbook_textures.json` file. In general, you can edit the corresponding animation definitions in `flipbook_textures.json` to reflect the customizations in the `.mcmeta` files.

## Packaging Changes

|Java Edition textures folder subdirectories|Bedrock Edition textures folder subdirectories|
|:---|:---|
|block|blocks|
|colormap|colormap|
|effect|:---|
|entity|entity|
|environment|environment|
|font|:---|
|gui|gui|
|item|items|
|map|map|
|misc|misc|
|models|models|
|painting|painting|
|particle|particle|
|:---|persona_thumbnails|

|Sample Java Edition texture filenames|Sample Bedrock Edition texture filenames|
|:---|:---|
|beehive_end.png|beehive_top.png|
|honeycomb_block.png|honeycomb.png|
|honey_block_bottom.png|honey_bottom.png|
|honey_block_side.png|honey_side.png|
|honey_block_top.png|honey_top.png|
|wither_rose.png|flower_wither_rose.png|
|block_iron.png|iron_block.png|

## Advanced Options

The following advanced techniques and options are beyond the scope of this article, including:

- HD textures and related issues
- Customizing `animation_controllers.json`
- Custom UI
- Custom model geometry
- Customizing animated textures
- Custom sounds
- Customizing behavior packs

## What's Next?

If you want to learn more about resource packs, which makes use of textures, see the resource pack tutorial.

> [!div class="nextstepaction"]
> [Introduction to Resource Packs](ResourcePack.md)
