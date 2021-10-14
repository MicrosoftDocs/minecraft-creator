---
author: v-josjones
ms.author: v-josjones
title: Introduction to Resource Packs
ms.prod: gaming
description: A tutorial that is an introduction to Resource Packs and how to add a custom texture to an in-game block.
---

# Introduction to Resource Packs

Before building your first Add-On, you will need to create a pack in order to add any custom content in Minecraft: Bedrock Edition. There are two types of packs that a creator can make: resource and behavior packs. A **resource pack** is a folder structure that will contain all of your custom models, sounds, textures and any custom content that is made. resource packs are commonly used to add user generated content to Minecraft in order to augment a player's experience.

:::image type="content" source="Media/BehaviorPack/Introduction-to-Behavior-Packs.jpg" alt-text="A cow chasing Steve with anger in it's bovine heart":::
In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - Understand how a **resource pack** is created.
> - How a **manifest file** is created.
> - How custom textures are loaded into Minecraft.
> - The concept of **Pack Stacking** when working with Add-On content.

### Requirements

It’s recommended that the following be completed before beginning this tutorial:

- [Getting Started with Add-On Development](GettingStarted.md)

You will also need the following:

- Download the [Vanilla resource pack](https://aka.ms/resourcepacktemplate)

## Building the Resource Pack

In order to create a new resource pack, you will need to create a new folder to contain a manifest file that can be read by Minecraft, and the custom content that will be loaded into the game.

1. Open up your game location folder **com.mojang**
1. Double-click on the folder **development_resource_packs**.
1. Right-click in the File Explorer window and select **New** and then **Folder** to create a new folder.
1. Name the new folder **HelloWorldRP**.
1. Double-click on **HelloWorldRP** to open the folder.
   	![image of newly created folder with a single Folder called HelloWorldRP located within](Media/ResourcePack/helloworldrp.png)

### The Manifest File

In order to load a resource pack into Minecraft, a manifest file will need to be generated. The manifest file is a JSON file that contains the following information;

- **Description**: In-game description of what the resource pack does.
- **Name**: In-game name of the resource pack.
- **UUID**: Universally Unique Identifier.
- **Version**: Version of the resource pack.
- **Minimum Engine Version**: Required version of Minecraft that this pack will work in.

Since the file is written in JSON, Minecraft will be able to parse the information from the file and display it in the Add-On section. Inside the file, the information will be split into two separate sections; header and modules. The header section will contain the overall information for the pack, while modules will contain the dedicated packages information.

1. Right-click in the Explorer window and select **New**, then select **Text Document**.
1. Set the name to **manifest.json**.
    1. You will need to change the file extension from .txt to .json. If your Explorer window does not show file extensions, you can enable **File Name Extensions** under the **View** tab.
    ![image of newly created JSON file named Manifest located within the HelloWorldRP folder](Media/ResourcePack/manifest_file.png)
1. Double-click on **manifest.json** to open it in a Text Editor.
1. Copy/Paste the following code snippet into your text editor.

```json
	{
	  "format_version": 2,
	  "header": {
        "description": "My First Add-On!",
	    "name": "Hello WorldRP",
	    "uuid":"",
	    "version": [1, 0, 0],
	    "min_engine_version": [1, 16, 0]
	  },
	  "modules": [
	    {
	      "description": "My First Add-On!",
	      "type": "resources",
	      "uuid": "",
	      "version": [1, 0, 0]
	    }
	  ]
	}
```

> [!NOTE]
> For `format_version`, `2` is used as the value for the manifest.json file. While `"1.16.0` or `[1.16.0]` are used in vanilla manifest files, it is recommended to use the latest `"format_version": 2` for custom content.

### UUID

Universally Unique Identifier, or UUID for short, is a unique number used to identify different software. For Minecraft, the UUID is used to define a specific pack and prevent any duplicate software from causing issues. For both header and modules, there will need to be 2 different UUID numbers entered between the quotes. You can use an online UUID Generator such as [UUID Generator](https://www.uuidgenerator.net/).

![Image of UUIDGenerator.net home screen with a custom UUID generated out](\Media\BehaviorPack\UUID.png)

1. Copy and paste a UUID into the header section. The UUID will need to be pasted between the quotation ("") marks in order to be read correctly.
1. Reload the webpage in order to generate a new UUID for use in the Modules section.
1. Copy and paste the new UUID into the modules section in-between the quotation marks.
1. Save the manifest file.

> [!NOTE]
> To learn more about how a manifest.json file works, you can view the [manifest.json](../Reference/Content/AddonsReference/Examples/AddonManifest.md) page in the Addons documentation by clicking on the link above.

## Changing the dirt block

With the manifest file completed, you can now start adding custom content to Minecraft. Let’s get started by applying a new texture to the vanilla dirt block.

1. In File Explorer, in the **HelloWorldRP** folder, right-click and select **New**, then select **Folder**.
1. Rename the folder to **textures**.
1. Double-click on the **textures** folder.
1. Right-click and select **New**, then select **Folder**.
1. Rename the folder to **blocks**.
1. Double-click on the **blocks** folder.
	![image of the Windows Explorer Address Bar showcasing the 2 new folders named textures and blocks](Media/ResourcePack/blocks_folder.png)

### Creating the texture

Now that the folder structure is created, you can now place your custom textures here. A png file is also provided that you can download and place in your folder.

![A PNG file that can be downloaded and used in place of a custom texture made in a photo editor](Media/ResourcePack/dirt.png)

1. Open up an image editor such as Paint3D, MS Paint or Photoshop.
    1. In this tutorial, MS Paint will be used.
1. In the **Toolbar**, select **File**, then select **Properties**.
1. Set the **Width** and **Height** to **16 pixels** each.

You can now design a pattern or any artwork in the editor. In this example, a simple fill color has been added.

> [!IMPORTANT]
> While MS Paint is used for this example for it's quick and easy access, there are a few drawbacks as well.
>
> - MS Paint does *not* support alpha channels that are commonly used for transparency effects in Minecraft.
> - MS Paint does *not* support .tga files types.

1. When done with your texture, select **File** and then select **Save As a PNG**.
1. Navigate to the **blocks** folder.
1. Save the file as **dirt.png**.

### Testing the pack

Now that the pack has both a manifest file and a texture, you can now launch Minecraft and test your new Add-On.

> [!IMPORTANT]
> **Pack Stacking** is when content is loaded on top of vanilla content, causing each object that has the same name in both packs to be overwritten by the *latest* applied pack (in our example, the Dirt texture is overwritten by our custom texture).
>
> If another pack that uses the dirt.png file is loaded **after** helloWorldBP, then Minecraft will use the latest dirt.png that was applied.

Since the custom texture is named dirt.png, the texture will be used on every single dirt block in game.

1. Launch Minecraft.
1. When Minecraft has launched and reached the main menu, select **Play**.
1. Select **Create a new world**.
1. Under **Settings**, scroll down to the **Add-On** section.
1. Click on **resource packs** to see all available packs.
1. Under all of the packs, select **HelloWorldRP** to add the pack to the world.
1. **Launch** your world.
![Image of Minecraft's Settings page with the Add-On menu selected for resource packs. There is a red rectangle outlining the HelloWorldRP in the menu](Media/ResourcePack/addonsettings.png)

## What's Next?

With a custom texture now a part of your Minecraft world, its now time to look at behavior packs and how you can alter existing entity behaviors. In the next section, you will learn how to add an aggressive behavior to a normally peaceful cow entity.

> [!div class="nextstepaction"]
> [Behavior pack](BehaviorPack.md)
