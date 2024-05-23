---
author: v-jeffkim
ms.author: mikeam
title: Creating and Adding Custom Sounds 
description: "A tutorial for creating and adding custom sounds to Minecraft: Bedrock Edition"
ms.service: minecraft-bedrock-edition
---

# Creating and Adding Custom Sounds to Minecraft

:::image type="content" source="Media/AddCustomSounds/Custom Sounds 1.png" alt-text="Image of player standing with two jukeboxes.":::

Sounds are a great way to add a sense of immersion to your content. Whether it's blocks, animals, or the ever-important music disc, the sounds you hear while playing Minecraft pull you into the experience. In this tutorial, we will be adding a custom sound that will play when we open a chest, increasing the immersion and personalization of your world.

## Prerequisites

We recommend completing the following before beginning this tutorial:

- [Getting Started with Add-On Development](GettingStarted.md)
- [Introduction to Resource Packs](ResourcePack.md)
- [Introduction to Behavior Packs](BehaviorPack.md)

You will also need the following:

- Download the [Vanilla resource pack](https://aka.ms/resourcepacktemplate)

## Create a Resource Pack

The first step in our journey is to create a resource pack to hold your custom sounds. If you completed the prerequisites as suggested (hint, hint), you're already familiar with this process.

For a quick refresher, see [Introduction to Resource Packs](ResourcePack.md).

For detailed information on resource packs, see the [Comprehensive Resource Pack](ComprehensivePackContents.md) guide.

## Setting up a Sound Directory

Now that the resource pack has been created, it's time to set up a place for our sound files.

1. In **File Explorer**, navigate to the **com.mojang** folder.
1. Open the **development_resource_packs** folder.
1. Open **custom_sound_pack**.
1. Create a folder called **sounds**.

When you're finished, your file structure will look like this:

:::image type="content" source="Media/AddCustomSounds/sound-pack-structure.png" alt-text="Visual representation of the file structure for custom sounds.":::

## Finding the Right Sound

The stage is set, and now it's time to get your custom sound ready! For our example we will be using [Audacity](https://www.audacityteam.org/), however any audio processing software will work as long as it can export files in a .OGG format.

You can either record a sound using your audio software, or use the software to open a sound that has been saved to your computer. Once your file is open in the audio software, it needs to be exported as a .OGG file. This can be done in Audacity by navigating to **File > Export > Export as OGG**.

For this tutorial, we’ll export a custom sound file with the name `chestopen.ogg` (you’ll see why, later).

If you'd like an example sound file to use, download [this sample .OGG file](https://github.com/microsoft/minecraft-samples/tree/main/custom_sounds).

## Housing Your Sound

Congratulations, things are moving along nicely. You have a sound to replace, a new sound ready, and your resource pack is set up. Now it's time to figure out where your sound will live.

From here, you COULD scroll through the list of every Minecraft sound and find the sound file for a chest opening. Instead, we recommend using **CTRL+F** to find the file. For our example, the file we are looking for is the **chestopen** file; it happens to be located at **sounds/random/chestopen**.

Now we know where to place our custom sound file. Navigate to **com.mojang > development_resource_packs > custom_sound_pack > sounds**. In the **sounds** folder, create a new folder named **random** and place your custom **chestopen.ogg** file into it.

## Testing Your Sound

The hard work is over, and now it's time to the test our custom sound! In order to test our sound, create a test world with your **custom_sound_pack** enabled and cheats turned ON, which will allow you to use the `/give` command.

1. Open the chat box
1. Type the following command: `/give @s chest`

Opening the chest should result in your custom sound playing. If that doesn't happen, some troubleshooting may be needed. Some common steps include:

- Checking your file structure
- Checking the file type of your custom sound file

## Next Steps

Congratulations, you have successfully added a custom sound to your world, and now create a world that sounds the way you want to hear. You can make blocks that squeak, swords that apologize when you attack with them, or a world where everything is voiced by YOU! As always, the only limit is what you can imagine.
