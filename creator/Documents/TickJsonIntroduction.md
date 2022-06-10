---
author: JDHeaden
ms.author: v-jillheaden
title: Introduction to tick.json
ms.prod: gaming
description: "A tutorial that introduces a Creator on how to use tick.json to repeatedly execute functions"
---

# Introduction to tick.json

While command blocks are great for running a series of commands based on in-game events, Minecraft: Bedrock Edition offers the ability to use the in-game tick function to repeatedly run a series of functions by using a file called **`tick.json`**. This file is stored in the **`functions`** folder of a behavior pack, next to all the function files themselves.

>[!Note]
>`tick.json` runs the commands every game tick, which is 20 times per second.

>[!Important]
> Unlike repeating command blocks, `tick.json` will execute commands before the world has fully loaded in. This might cause unintended behavior if you do not plan function usage carefully.
> 
> Be cautious not to run too many commands every tick, as it could affect performance, especially in low-end devices.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to create the `tick.json` file
> - How to use tick.json to run functions

### Requirements

It's recommended that the following be completed before beginning this tutorial:

- [Introduction To Behavior Packs](BehaviorPack.md)
- [Introduction to Commands](CommandsIntroduction.md)
- [Introduction to Functions](FunctionsIntroduction.md)

You will also need the following:

- Your own behavior pack folder that already contains a `manifest.json` file.
- A Minecraft world with cheats enabled.

## Setting up the Functions Folder

Before creating `tick.json`, you will need to have functions for it to run. This example creates two function files to demonstrate how `tick.json` calls the files repeatedly.

1. If you don't already have one create a folder inside your behavior pack and name it **`functions`**. This folder should be on the same level as your `manifest.json` file.
2. Open the **`functions`** folder and create a text file.
3. Name the file **`first_function.mcfunction`**.
4. Open the file and enter `say one` on the first line.
5. Save the file.
6. Create another function file and name it **`second_function.mcfunction`**.
7. Open the file and enter `say two` on the first line.
8. Save the file.

Now there are two function files ready to be used.

## Creating `tick.json`

The `tick.json` file contains a list of the functions that you want to execute on every tick of the game. You can also set the order that the functions will be called.

1. Inside the **`functions`** folder, create a text file and name it **`tick.json`**.
1. Copy the following text and paste it into your **`tick.json`** file. Save the file.

```json
 {
    "values": [
        "first_function", "second_function"
    ]
  }
```

`values` is the only item in this file. The values are the names of the functions to run, the same as specified in the `/function` command.

## Testing the file

Launch Minecraft and activate the behavior pack.
When the world loads, there will be repeated messages displayed on the screen from **[Server]**.

:::image type="content" source="Media/TickJson/tickjson_displays_one_two.png" alt-text="Chat area of screen displays repeated messages [Server] one [Server] two":::

>[!Note]
> `tick.json` merges across multiple behavior packs. If you have multiple packs active, all functions specified in each pack's `tick.json` file will be run every tick.

## What's Next?

> [!div class="nextstepaction"]
> [Block JSON Documentation](../Reference/Content/BlockReference/index.yml)
