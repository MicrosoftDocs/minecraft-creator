---
author: mammerla
ms.author: v-bbortree
title: How to add a Custom Block
ms.prod: gaming
description: "A tutorial that introduces a Creator on how to make a custom block within Minecraft: Bedrock Edition"
---

# How to add a Custom Block

Minecraft's behavior packs and resource packs allow you to create custom content for the game. Custom blocks are a great way for creators to start adding interactive content for Players. Through this tutorial, you will build a new block that will be called **canvas block** that has different textures and can be placed in the world by a Player.

:::image type="content" source="Media/CustomBlocks/Adding-a-Custom-Block.jpg" alt-text="Image of Alex holding the completed custom block":::

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to use JSON to define a new block.
> - How to assign textures to a new block.
> - Some of the behaviors and components that blocks can access.
> - What **.lang** is and how it's used for in-game text.

### Requirements

It’s recommended that the following be completed before beginning this tutorial:

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction To Resource Packs](ResourcePack.md)
- [Introduction To Behavior Packs](BehaviorPack.md)

You will also need the following:

- Download the [Vanilla resource pack](https://aka.ms/resourcepacktemplate)
- A Minecraft World with `Holiday Creator Features` enabled.

>[!IMPORTANT]
>Holiday Creator Features contain experimental gameplay features. As with all experiments, you may see additions, removals, and changes in functionality in Minecraft versions without significant advanced warning.
>
>To learn more about Experimental Features, please visit [Experimental Features in Minecraft: Bedrock Edition](ExperimentalFeaturesToggle.md).

## Setting up the Resource JSON File

Block entity definitions are handled differently in the resource pack. Blocks are stored in a single JSON file that will contain definitions for each custom block.

1. Open your **com.mojang** folder.
1. Double-click on the folder **development_resource_packs** to open it.
1. Open the **My_RESOURCE_Pack** folder. If you do not have this folder, please refer to the tutorials in the Requirements section of this document.
1. Inside the **My_RESOURCE_Pack** folder, create a text document and name it **blocks.json**.
1. Double-click on **blocks.json** to open it in a text editor.

### blocks.json

The blocks.json file has a similar set up to the manifest.json file and has requirements that need to be met in order for it to work correctly. The canvas block will use a custom texture for four of the sides, and a different texture for the top and bottom that you are going to bring over from the Vanilla Resource Pack.

1. Copy the following text and paste it into your **blocks.json** file.

    ```json
    {
    "format_version": "1.16.0",
      "helloworld:canvasblock": {
        "textures": {
            "up": "log_top",
            "down": "log_top",
            "side": "canvasblock"
            },
        "sound":"grass"
        }
    }
    ```

1. Save the file.

#### Textures and Sub-textures

As shown in the JSON code, the canvas block is using two textures. The top and bottom are using the existing **log_top.png** while the other sides are using a custom texture. Blocks can also be assigned a single texture to cover every side of a block with the same texture.

`"textures": "canvasblock"`

Textures can be broken down into sub-texture groups. `up`, `down`, and `side` are all sub-textures that allow a creator to define which face gets a certain texture. `side` can also be broken down into cardinal directions `north`, `east`, `south` , and `west`.

### terrain_texture.json

With the block defined in the **blocks.json** file, the next step is to associate the texture names with a texture file path. This is done in a `terrain_texture.json` file.

1. In **File Explorer**, navigate to the **My_RESOURCE_Pack** folder and open the **textures** folder.
1. Inside the **textures** folder, create a text document and name it  **terrain_texture.json**.
1. Double-click on **terrain_texture.json** to open it in a text editor.
1. Copy and paste the following code into **terrain_texture.json**:

    ```json
    {
      "resource_pack_name": "My_BEHAVIOR_Pack",
      "texture_name": "atlas.terrain",
      "padding": 8,
      "num_mip_levels": 4,
      "texture_data": {
        "canvasblock": {
          "textures": "textures/blocks/canvasblock"
        },
        "log_top":{
          "textures": "textures/blocks/log_top"
        }
      }
    }
    ```

1. Save the file.

### The Canvas Texture

![A PNG file that can be downloaded and used in place of a custom texture made in a photo editor](Media/CustomBlocks/canvasblock.png)

The canvas block texture will need to be created and placed in the Resource Pack.

> [!NOTE]
> The image above has been provided for the `canvasblock.png` but feel free to use a different texture.

If you are using the one provided:

1. Download the file to your computer.
1. Place `canvasblock.png` in the `My_RESOURCE_Pack/textures/blocks` folder.

If you are creating a custom one:

1. Check that the **Width** and **Height** to are set **16** each.
1. Save the file as `canvasblock.png` in the `My_RESOURCE_Pack/textures/blocks` folder.

#### Adding the log_top.png

The `log_top.png` file will also need to be added to the texture folder in the behavior pack because the `terrain_texture.json` file will look for both textures in the My_RESOURCE_Pack folder.

1. Navigate to the `Vanilla_Resource_Pack\textures\blocks` folder and copy `log_top.png`.
1. Navigate to `My_RESOURCE_Pack/textures/blocks` and paste a copy of `log_top.png`.

## Setting up the Behavior JSON file

With the work in the resource pack done, the behavior pack will need to be updated with the canvas block's components.

1. In **File Explorer**, navigate to the folder **My_BEHAVIOR_Pack**, located in the **development_behavior_packs** folder.
1. Inside the **My_BEHAVIOR_Pack** folder, create a folder and name it **blocks**.
1. Double-click on **blocks** to open the folder.
1. Inside the **blocks** folder, create a text document and name it **canvasblock.json**.
1. Double-click on **canvasblock.json** to open it in a text editor.

### Description

In the file, you will need to define what the block is, similar to the `manifest.json` file.

1. Copy and paste the following code into your **canvasblock.json** file:

```json
{
    "format_version": "1.19.20",
    "minecraft:block": {
        "description": {
            "identifier": "helloworld:canvasblock",
            "is_experimental": false,
            "register_to_creative_menu": true
        },
        "components": {
            "minecraft:destructible_by_explosion": {
              "explosion_resistance": 0
            },
            "minecraft:friction": 0.4,
            "minecraft:flammable": {
              "catch_chance_modifier": 5,
              "destroy_chance_modifier": 20
            },
            "minecraft:light_emission": 1
        }
    }
}
```

2. Save the file.

The identifier that was used in the resource pack is defined here. The block is also set to appear in the creative menu and is not set as an experimental piece of content.

- **`destructible_by_explosion`** determines whether this block can be destroyed by explosions, and can be specified as either a boolean or an object. In object form as shown above, the field explosion_resistance describes how resistant the block is to explosions. Higher values mean the block is less likely to break when near an explosion
- **`friction`** is used to drive player and entity speeds while walking on this block, in a range of 0.0 to 0.9. Wood and dirt are set to a friction of 0.4 while ice is set to 0.02.
- **`flammable`** is used to contain properties on how the block handles fire events.
  - **`catch_chance_modifier`** is a modifier to the chance that the block will catch on fire from its neighbors. Values are greater than or equal to 0, with a higher number meaning more likely to catch on fire. The default value of 5 is the same as that of Planks.
  - **`destroy_chance_modifier`**  is a modifier to the chance that the block will be destroyed when on fire. Values are greater than or equal to 0, with a higher number meaning more likely to be destroyed when on fire. The default value of 20 is the same as that of Planks.
- **`map_color`** is the color, in hex format, that is used by the map in order to symbolize the block.
- **`light_emission`** is how much light the block emits, in a range of 0 to 15. Higher value means more light will be emitted.

## Setting the block name with .lang

Now that both of the packs are set up and completed, the last thing is to add the name of the block using a **.lang** file.

1. In **File Explorer**, navigate to the folder **My_RESOURCE_Pack**.
1. Inside the **My_RESOURCE_Pack** folder, create a folder and name it **texts**.
1. Double-click on **texts** to open the folder.
1. Inside the **texts** folder, create a new text document and name it **en_US.lang**.
1. Double-click on **en_US.lang** to open it in a text editor.

### .lang

.lang is a file type that Minecraft uses to provide in-game text for different languages for concepts within Add-Ons. .lang files are used as a convenient way to organize all custom text within an Add-On in a single location and for localizing creator content.

1. Copy and paste the following into **en_US.lang**:
`tile.helloworld:canvasblock.name=Canvas Block`
1. Save and close the file.

This code sets the name of the block to be `Canvas Block` in the game.

### Testing the block

With the canvas block defined in both the behavior pack and resource pack, you can now test it in-game.

>[!IMPORTANT]
>You will need to have a Minecraft world where cheats are enabled in order to add the block to your inventory.
>
>You will also need to have both **My_RESOURCE_Pack** and **My_BEHAVIOR_Pack** enabled in the world so you can get access to the canvas block.

1. Open up the chat dialogue box (press T or Enter on Windows 10 OS).
1. Type the following command: `/give @p helloworld:canvasblock`

## What's Next?

With your first custom block completed, it is recommended to view the Block JSON reference documentation to learn more about how blocks are defined within Minecraft.

> [!div class="nextstepaction"]
> [Block JSON Documentation](../Reference/Content/BlockReference/index.yml)
