---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Overwriting Vanilla Assets
description: "An article discussing how to customize assets by overwriting their JSON files."
ms.service: minecraft-bedrock-edition
ms.date: 07/09/2025
---

# Overwriting Vanilla Assets
Behavior and resource packs let you add a whole variety of new content to your Minecraft worlds &mdash; mobs, blocks, world generation, and more! But, did you know that you can also use them to amend or modify Minecraft's vanilla functionalities to further customize them as you see fit for your worlds?

As a creator, there are three ways to overwrite vanilla assets. Each method has strengths and limitations for when and how you can use them, so it's important to consider your goals for the entities you’re changing.

-	## Identifier
    Since most assets are referenced by an identifier rather than their filenames, you can overwrite their vanilla values by using the same identifier in the new resource or behavior pack file. Identifier overwrites work for the following asset types:
    - BP Entities

    - RP Entities

    - Animations

    - Models

    - Animation Controllers

    - Spawn Rules

    - Recipes

    - Particles

    - Render Controllers

    Check out our article on [Creating New Entity Types](./IntroductionToAddEntity.md) for a detailed tutorial of how to overwrite assets with their identifier.

-	## Path
    For assets that lack an identifier and are instead referenced by their path, you can overwrite the vanilla values by placing your custom asset in the same path destination. These assets include:
    - Functions

    - Loot Tables

    - Textures

    - Sounds

    - Trade Tables

    - Binary Assets (like .png, .tga, and .ogg files)

    Check out our article on [Creating and Adding Custom Sounds to Minecraft](./AddCustomSounds.md) for a detailed tutorial of how to overwrite assets with their path.

-	## Catalog File
    Some assets require you to copy their vanilla catalog file values into your custom packs to adjust how they render and behave in your world. These assets typically live in vast JSON files that contain an exhaustive list of the snippets you can copy and paste into your custom packs as a foundation for your customization. To leverage them without issues, you should delete most of the content in catalog files when you use them in your packs. Customization via catalog file is best for:
    - All UI files

    - All language files

    - item_texture.json

    - flipbook_textures.json

    - terrain_texture.json

    - sounds.json

    - music_definitions.json

    - sound_definitions.json

    > ![Note]
    > Don’t copy the contents of the entire file directly into your custom packs. Instead, use the files as a reference or to copy specific JSON snippets into your custom pack.

    ### Overwriting Blocks
    Vanilla block *definitions* are mostly immutable, but as a creator, you can override the *textures* for vanilla blocks by using the assets located in:

    - [RP/blocks.json](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/blocks.json)

        Defines the texture set for the in-world and in-hand appearance of blocks; whether a block’s texture is isotropic or anisotropic; and for how blocks sound when they’re placed or destroyed.

    - [RP/textures/terrain_textures.json](https://github.com/Mojang/bedrock-samples/blob/main/resource_pack/textures/terrain_texture.json)

        Defines the image files a texture set uses.


    ### Overwriting Items
    Some vanilla items are data-driven and can therefore be overwritten like compatible blocks, by adjusting the assets’ JSON values. You can find a list of overwritable items in [BP/items/](https://github.com/Mojang/bedrock-samples/tree/main/behavior_pack/items) on the Mojang public GitHub repository.

    > ![Note]
    > Items defined with version 1.10 may have implicit behaviors not shown in the file, so these items can only be overwritten by other items defined by version 1.10.
