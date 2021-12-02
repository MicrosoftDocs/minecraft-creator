---
author: v-jillheaden
ms.author: v-jillheaden
title: Introduction to functions
ms.prod: gaming
description: "A tutorial that introduces a Creator on how to use functions"
---

# Introduction to Functions

Function files can be used to group together multiple commands. This makes it easier to run multiple commands at once by calling the function file in the chat box.

>[!Tip]
> Minecraft **cannot** run more than 10,000 lines of functions in one function file. This includes any other function files that are executed inside of the original file.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to create a function file.
> - How to use a function file in-game.

### Requirements

It’s recommended that the following be completed before beginning this tutorial:

- [Introduction To Behavior Packs](BehaviorPack.md)
- [Introduction to Commands](CommandsIntroduction.md)

You will also need the following:

- Your own behavior pack folder that already contains a `manifest.json` file.
- A Minecraft world with cheats enabled.

## Setting up the Functions Folder

Function files have a .mcfunction extension and they live in the **functions** folder of your behavior pack. 

1. Start by creating a folder inside your behavior pack and name it **functions**. This folder should be on the same level as your `manifest.json` file.
1. Open the **functions** folder and create a text file.
1. Name the file **ouch.mcfunction**.
1. Open the file, then copy and paste the following code into it:

    ```json
    say Bye...
    teleport @s ~10 ~10 ~10 true
    say OUCH!
    ```
1. Save the file.

Notice, you don't have to start the commands with `/`.

## Testing the function

1. Launch Minecraft and press `/` to open chat.
1. Enter `/function ouch`.

## What's Next?

> [!div class="nextstepaction"]
> [Block JSON Documentation](../Reference/Content/BlockReference/index.yml)
