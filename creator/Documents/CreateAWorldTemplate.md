---
author: iconicNurdle
ms.author: mikeam
title: Create a World Template from an Exported World
description: "Tutorial regarding the structure and process of creating a world template"
ms.service: minecraft-bedrock-edition
---

# Create a World Template from an Exported World

If you created a really neat Minecraft world and you wanted to share that world with other players, you have some options. 

You could export the world and send out copies of it, or you could create a template of the world

Worlds in the Minecraft Marketplace, like [survival spawns](SurvivalSpawnCreation.md), are typically world templates. When a player creates a world from the template, they get their own fresh copy of the world.

So where do world templates come from? Well, they are basically a zipped Minecraft world that contains the proper **manifest.json** file, a **texts** folder with some files inside it, and has the file extension **.mctemplate**.

If your exported world has neat stuff added to it, like [add-on packs](GettingStarted.md), those get included, too.

When you import a world file (**.mcworld**), it gets added to the list of Worlds and you just open it and get mining and crafting.

When you import a world template (**.mctemplate**), it goes into the list of world templates and Minecraft knows to use it to create a world that will then be added to your list of worlds.

Let's start with the simplest possible Minecraft world and learn some cool renaming tricks.

## Unpacking, Examining, and Re-Packing a Minecraft World File

In this first part, we are going to create a world, export it, change the file extension on the name, unzip it, look at the contents, zip the contents back up, and open it again in Minecraft. This is just to get you used to tinkering around in Minecraft files so things make more sense when you start making changes.

Ready? Here we go!

1. Launch Minecraft, create a world, give it a memorable name like **New_World**, and play in it to test it out. (I love it when instructions tell me to play Minecraft!)

2. Save and quit the world to go back to the Minecraft **Play** screen that shows all of your worlds.

![Minecraft UI with list of worlds displayed. New_World is the only one on the list.](Media/CreateAWorldTemplate/UI_list_of_worlds_step_2.png)

3. Click the **Edit** button for that world to go to the **Edit World** screen.

![Edit World screen with the General tab selected, Export World button is visible under the File Management header.](Media/CreateAWorldTemplate/edit_world_export_step_3.png)

4. On the General tab, in the File Management section, find the **Export World** button and click it. The Save As window will be displayed.

![Windows Save As dialog window showing that the .mcworld file will be saved to the Desktop, inside a Minbecraft World folder.](Media/CreateAWorldTemplate/world_save_as.png)

5. Choose a location that is easy for you to find, like in a folder on your computer's Desktop, and click the **Export** button.

6. Minimize Minecraft and go find the exported world file. It will have a Minecraft icon and the .mcworld file extension.

7. Change the file extension from **.mcworld** to **.zip**.

![Image showing that the New_World.mcworld file has had the extension renamed to .zip, and the computer is displaying a Rename warning window.](Media/CreateAWorldTemplate/are_you_sure.png)

8. Your computer will warn you that the file might become unusable and ask "Are you sure you want to change it?" We're sure. Click **Yes**. The file's icon will look different.

![Image of the New_World.zip file displayed with a typical ZIP file icon.](Media/CreateAWorldTemplate/changed_to_dot_zip.png)

9. Double-click the zip file to open it and choose **Extract All**. The structure should look something like this:

![Contents of the New_World.zip folder before they are unzipped/extracted](Media/CreateAWorldTemplate/extract_all.png)

10. Open the files and check them out in Visual Studio code, but don't move them or change the names of anything.

### Structure of a Minecraft World package (without Add-On packs)

This is the baseline for our project.

-------------------------

- **db** folder that contains files similar to this:

000005.ldb - Microsoft Access Record-Locking Information
000006.log - Text Document
LDB and LOG files are part of the database implementation for how your map is stored. They are binary and not friendly for editing by hand, so don't touch these!


    - **000005.ldb** - Binary file, not editable
    - **000006.log** - Binary file, not editable
    - **CURRENT** - File that contains something like "MANIFEST-000004"
    - **MANIFEST-000004** - Binary file that cannot be opened
- **level.dat** - DAT file that contains important data about your Minecraft world
- **level.dat_old** - DAT_OLD File that can be used as a backup for the other DAT file. 
- **levelname.txt** - Text document that holds the name of the world: "New_World"
- **world_behavior_packs.json** - JSON Source File that is blank if no behavior packs are active in the world when it is created
- **world_icon.jpeg** - JPEG File that contains the first image Minecraft displays for the world
- **world_resource_packs.json** - JSON Source File that is blank if no resource packs are active in the world when it is created

---------------------------

11. Edit the **world_icon.jpeg** file in an app like Paint.

![Image of the world with added "My Edited World!" text](Media/CreateAWorldTemplate/edited_world_icon_jpeg.png)

Don't get too attached to your edited world icon, though. Whenever you play the world and then save and exit, Minecraft makes a new icon to replace it to reflect your gameplay. We just want to make changes to this first one to distinguish it from the original world.

### Re-Packaging a Minecraft World

Now, we're going to zip everything back up, rename the zip to **.mcworld**, and open it again in Minecraft.

1. Inside the world folder, select all of the individual files.

2. With all of the files selected, right-click any one of the selected files and choose **Compress to ZIP file**.

![Image of the New_World folder with files selected and right-click context menu displayed; Compress to ZIP file option is selected.](Media/CreateAWorldTemplate/re-zip_world_contents.png)

3. The zip file will be created among the other files and the computer will automatically give it the same name as the file you right-clicked. That's okay. You can rename the zip file to something distinctive like **New_World_EDITED.zip**.

![Image of the world files selected and the context menu displayed. The Compress to ZIP file option is selected.](Media/CreateAWorldTemplate/new_world_edited_zip.png)

4. After the zip file is created, use the rename option to change the **.zip** extension to **.mcworld**.

![Image showing the New_World_EDITED.zip file](Media/CreateAWorldTemplate/new_world_edited_mcworld.png)

>[!NOTE]
> You can just give the new zip file the name **New_World.mcworld** as it's being created, but I wanted to show you that the final **.mcworld** file is simply a renamed **.zip** file.

>[!IMPORTANT]
> Do **not** try to zip the whole folder and rename it from .zip to .mcworld.
> When the computer zips a file, it creates a folder for the things you want zipped, so the world folder goes inside another folder and Minecraft will not be able to import the world.

![Image of the New_World_EDITED.mcworld file displayed with the Minecraft icon.](Media/CreateAWorldTemplate/new_world_edited_mcworld_done.png)

After you change the file extension to **.mcworld**, the file will have the Minecraft logo on it.

5. Double-click the **New_World.mcworld** to launch Minecraft and import the world. You should see messages that confirm that the world has started and finished being imported successfully.

6. Click **Play** to go to the Play screen, where this world will be displayed along with any others.

![Image of Minecraft with the Worlds tab displayed. The original and edited worlds named New_World are displayed.](Media/CreateAWorldTemplate/theres_the_edited_world.png)

7. When you play the edited world, it will look just like the original one.

Okay. Now that we know what a world file has in it, and how to zip and rename the contents, let's learn about the structure of a World Template.

## Creating a World Template

All you need to do to turn a Minecraft world into a world template is:

1. Create a working exported world with any configurations and add-on packs activated.

2. Add the proper **manifest.json** file.

3. Optional: Create a folder named **texts** with 2 text files inside: **en_US.lang** and **languages.json**.

After you zip everything up, rename the file to have a **.mctemplate** extension.

That's it!

### manifest.json

The `manifest.json` for a world template should have these contents:

- `name`: this field is always `pack.name`
- `description`: this field is always `pack.description`
- `version`: this tells the game what version of the pack this is. Always create new content with `[1, 0 ,0]`
- `uuid`: generate **two different UUIDs** from this site: <https://www.uuidgenerator.net/version4>.
- `type`: this tells the game to treat this pack as a world template

**Template world template manifest.json:**

```json
{
  "header": {
    "name": "pack.name",
    "description": "pack.description",
    "version": [1, 0, 0],
    "uuid": "<GENERATE A UUID>"
  },
  "modules": [
    {
      "version": [1, 0, 0],
      "type": "world_template",
      "uuid": "<GENERATE A UUID>"
    }
  ],
  "format_version": 2
}
```

>- `"name: "pack.name"` - This is the name that will be on the imported template file in the world_templates folder.

### Texts folder 

The **texts** folder is where the name and description of your world is defined in the `en_US.lang` file.

If you do not have this folder and its contents, then the name of your world template will be "pack.name" as specified in the manifest.

### en_US.lang 

This is where the name and description of your world are defined. You are required to have these two lines in your `.lang` file:

- **Pack name:** `pack.name=[name of pack]`
- **Pack description:** `pack.description=[description of pack]`

**Template en_US.lang:**

The names after the `=` are what will show up in the UI of the game.

```json
pack.name=Western World
pack.description=Howdy partner
```

## languages.json (optional)

This file tells the game what languages your skin pack supports. The only language currently required is English. If you would like to support other languages, you can create additional `xx_YY.lang` files and edit them to tell the game to support those languages.

**Template languages.json:**

```json
[
    "en_US"
]
```

## world_icon.jpeg

This is the image that shows up when your world is created from the template. For world templates in the marketplace, this icon should be in a similar style as the key art. Non-marketplace templates do not need a world icon, but if a template is made from an existing world, the world icon will already be available to use.

- **Dimensions:** 800x450px
- **File format:** JPEG

## Using a World Template

The easiest way to import a world template into Minecraft is to double-click it and let Minecraft do the rest.
You should see "Import started..." and "Successfully imported '<Your Template Name>'" messages.

After Minecraft launches, click Play.
Because we are working with a template instead of a world, it will not be shown in your list of worlds.
Instead, click Create New.
On the Create... page, scroll down to the Imported Templates collection. Your template should be listed there. Click it to create a world from the template.

## Troubleshooting

While you learn how to create and modify worlds and templates, you are probably going to import and re-import your files. You will get "Failed to import" errors if you already have content with the same UUIDs loaded into your com.mojang folder.

Instead of creating new UUIDs for each manifest.json file, you can clean out the contents of the MinecraftWorlds and Minecraft Templates folders in your com.mojang folder.

You might not want to throw anything away until you're sure you don't need it, so rather than deleting the contents of these folders, you might want to drag the contents to a backup folder.

If you accidentally drag the entire folder out of your **com.mojang** folder, it should be okay. Minecraft will just make a new one.

1. Go to your com.mojang folder, as explained in the [Getting Started](GettingStarted.md) tutorial.

2. All of your existing worlds are in the **MinecraftWorlds** folder. You can remove the ones you don't need. Names of worlds are not terribly descriptive (like "XqZXZZQdBQQ"), so if you're not sure which world you're about to pull out of the folder, take a look inside the **texts** folder. The **.lang** file (like **en_US.lang**) will have the name of the world in the `pack.name=` line.

3. All of your imported templates are in the **world_templates** folder. Minecraft puts them in there during the import process.

## Variation: Add-On Packs

If you activate add-on packs in a world and then export it, this is what you get:


When you make that world into a template, the file structure looks like this:



## World Template Variation: Random Seed

You can give players a random world each time they use your template with two steps:

1. Starting with any unzipped, exported world, delete the **db** folder.

2. Add `"allow_random_seed" : true` to the manifest.json.

**Sample random seed world template manifest.json file**

```json
{
  "header": {
    "name": "pack.name",
    "description": "pack.description",
    "version": [1, 0, 0],
    "uuid": "<FIRS GENERATED UUID>",
    "allow_random_seed" : true

  },
  "modules": [
    {
      "version": [1, 0, 0],
      "type": "world_template",
      "uuid": "<SECOND GENERATED UUID>"
    }
  ],
  "format_version": 2
}
```

After the world is created, the world seed is locked and no longer editable.

### Base Game Versioning

Resource pack and behavior pack folder names in world templates must be **10 characters or shorter**. This is due to an issue on Xbox where long paths may cause resource or behavior packs to not load properly. We suggest using an acronym of the contents title for folder names.

> [!WARNING]
> With the release of `1.18`, templates created with base game version `1.17.4` or earlier will be updated with the new world generation tool and may break content when building new maps based upon that template.
>
> To learn more about this scenario, please visit [Updating a World Template's Base Game Version to 1.18](BaseGameVersioning.md#updating-a-world-templates-base-game-version-to-118)

> [!IMPORTANT]
> The default max file path allowed in Windows 10 is 260 characters. Please be mindful when setting up the folder directory and use shorthand naming conventions if you are near the character limit.
