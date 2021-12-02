---
author: v-jillheaden
ms.author: v-jillheaden
title: Introduction to tick.json
ms.prod: gaming
description: "A tutorial that introduces a Creator on how to use tick.json to repeatedly execute functions"
---

# Introduction to tick.json

If you want to execute function files continuously without the need for command blocks, entities, or a ticking area, you can create a **tick.json** file. This file is stored in the **functions** folder of a behavior pack next to the function files you want to run.

>[!Important]
> While this is a valuable file when you're trying to stay away from using repeating command blocks in-game, it's known for executing function files before the world has fully loaded in. This might cause unintended command behavior and crashes.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to set up the file structure in your behavior pack to use tick.json.
> - How to use tick.json to run function files.

### Requirements

It’s recommended that the following be completed before beginning this tutorial:

- [Introduction To Behavior Packs](BehaviorPack.md)
- [Introduction to Commands](CommandsIntroduction.md)

You will also need the following:

- Your own behavior pack folder that already contains a `manifest.json` file.
- A Minecraft world with cheats enabled.

## Setting up the Functions Folder

The **tick.json** file contains the names of functions that you want to run continuously. Before creating tick.json, you will need to have functions for it to run. This example creates two function files to demonstrate how tick.json calls the files repeatedly.

1. If you don't already have one create a folder inside your behavior pack and name it **functions**. This folder should be on the same level as your `manifest.json` file.
1. Open the **functions** folder and create a text file.
1. Name the file **function_say_one.mcfunction**.
1. Open the file and enter `say one` on the first line. 
1. Save the file.
1. Create another function file and name it **function_say_two.mcfunction**.
1. Open the file and enter `say two` on the first line. 
1. Save the file.

Now there are two files for tick.json to call.

## Creating tick.json

The tick.json file contains a list of the functions that you want to execute on every tick of the game. You can also set the order that the functions will be called.

1. Inside the **functions** folder, create a text file and name it **tick.json**.
1. Copy the following text and paste it into your **tick.json** file. Save the file.

  ```json
   {
      "values": [
          "function_say_one", "function_say_two"
      ]
    }
 ```

The tick.json file uses only the `values` key, and the values are the names of the functions to run, without the .mcfunction extension.

## Testing the file

Launch Minecraft and activate the behavior pack.
When the world loads, there will be repeated messages displayed on the screen from **[Server]**.

:::image type="content" source="Media/TickJson/tickjson_displays_one_two.png" alt-text="Chat area of screen displays repeated messages [Server] one [Server] two":::

## What's Next?

> [!div class="nextstepaction"]
> [Block JSON Documentation](../Reference/Content/BlockReference/index.yml)
