---
author: mammerla
ms.author: v-jimseaman
title: How to Add Custom Sounds 
ms.prod: gaming
description: "A tutorial for adding custom sounds to Minecraft: Bedrock Edition"
---

# Adding Custom Sounds to Minecraft

:::image type="content" source="Media/AddCustomSounds/Custom Sounds 1.png" alt-text="Image of player standing with two jukeboxes.":::

Sounds are a great way to add a sense of immersion to your content. Whether it's blocks, animals, or the ever-important music disc, the sounds you hear while playing Minecraft pull you into the experience. In this tutorial, we will be changing the sound of a chest opening to a sound of your choosing, adding not just immersion but personalization to your world.

## Prerequisites

It is recommended that the following be completed before beginning this tutorial:

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction to Resource Packs](ResourcePack.md)
- [Introduction to Behavior Packs](BehaviorPack.md)

You will also need the following:

- Download the [Vanilla resource pack](https://aka.ms/resourcepacktemplate)

## Create a Resource Pack

The first step in our journey is to create a resource pack to hold your custom sounds. If you completed the prerequisites as suggested (hint, hint), you're already familiar with this process.

For those who like to skip ahead, here's the quick version:

1. In ***File Explorer***, navigate to the ***com.mojang*** folder.
1. Open the ***development_resource_packs*** folder.
1. Create a new folder for the sound resource pack. We will be calling ours ***custom_sound_pack***.
1. Open the ***custom_sound_pack*** folder and create a text file.
1. Rename the text file ***manifest.json***.
1. Open ***manifest.json*** in a text editor.
1. Copy the code below into the ***manifest.json*** file, and add UUID codes as noted. Remember, you can obtain UUIDs from UUIDgenerator.net.

```json
{
    "format_version": 2,
    "header": {
      "description": "Updating sounds with fun alternatives!",
      "name": "My Sound Test Pack",
      "uuid":"",
      "version": [1, 0, 0],
      "min_engine_version": [1, 16, 0]
     },
    "modules": [
      {
        "description": "My Sound Add-On!",
        "type": "resources",
        "uuid": "",
        "version": [1, 0, 0]
      }
    ]
   }
```

## Setting up a Sound Directory

Now that the resource pack has been created, it's time to set up a figurative neighborhood for our sound files.

1. In **File Explorer**, navigate to the **com.mojang** folder
1. Open the **development_resource_packs** folder
1. Open **custom_sound_pack**
1. Create a folder called **sounds**

## Finding the Right Sound

The stage is set, and now it's time to get your custom sound ready! For our example we will be using [Audacity](https://www.audacityteam.org/), however any audio processing software will work as long as it can export files in a .OGG format.

You can either record a sound using your audio software, or use the software to open a sound that has been saved to your computer. Once your file is open in the audio software, it needs to be exported as a .OGG file. This can be done in Audacity by navigating to **File > Export > Export as OGG**.

## Housing Your Sound

Congratulations, things are moving along nicely. You have a sound to replace, a new sound ready, and your resource pack is set up. Now it's time to figure out where your sound will live.

1. In **File Explorer**, navigate to the **com.mojang** folder
1. Open the **sound_definitions.json** file

From here (in theory) you COULD scroll through the list of every Minecraft sound, however we recommend using **CTRL+F** to find the file. For our example, the file we are looking for is the 'chestopen' file; it happens to be located at 'sounds/random/chestopen'

We now know the address of the sound, so to continue our analogy, let's build it a home. Navigate to **com.mojang > development_resource_packs > custom_sound_pack > sounds**. In the **sounds** folder, create a new folder named **random** (a gold star if you already guessed the folder name from context clues... Great work!).

Now that we have the appropriate file structure, we can move **chestopen.ogg** into the **random** folder.

## Testing Your Sound

The hard work is (hopefully) over, and now it's time to the hear the sweet fruits of your labor! In order to test your sound, create a test world with your **custom_sound_pack** enabled and cheats turned ON, which will allow you to use the '/give' command. Once you're logged in, it's time to test.

1. Open the chat box
1. Type the following command: /give @s chest

Opening the chest should result in your custom sound playing. If that's not the result, some troubleshooting may be in order. Some common steps include checking your file structure, and verifying the formatting of the custom sound file.

## Next Steps

Congratulations, you have successfully added a custom sound to your world, and now there's no limit to what you can do. You can make blocks that squeak, swords that apologize when you attack with them, or a world where everything is voiced by YOU! As always, the only limit is what you can imagine.
