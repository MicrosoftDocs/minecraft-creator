---
author: RileyManns
ms.author: v-jillheaden
title: Introduction to the Tickingarea Command
ms.prod: gaming
description: A guide about ticking areas.
---

# Introduction to Ticking Areas

Minecraft time passes (typically) only in the chunks of the world where there is a player. The chunk of area around a player is where time passes in ticks, so we call this a "ticking area." In this area, crops grow, mobs spawn, and command blocks function as intended. But when the player leaves the ticking area, time stops. Crops don't grow, mobs won't spawn, and command blocks stop functioning. If you want command block to work all the time, no matter where players are, you can use the `/tickingarea` command.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - How to create a ticking area.
> - How to find out what ticking areas have been created.
> - What it means if a ticking area is preloaded.

### Requirements

It’s recommended that the following be completed before beginning this tutorial.

- [Introduction to Commands](CommandsIntroduction.md)
- [Introduction to Command Blocks](CommandBlocks.md)

You will need a Minecraft world with cheats enabled and coordinates shown.

## add

Ticking areas are not made up of blocks - they are made up of the chunks Minecraft uses to create worlds. 

When you use the `/tickingarea add ...` command, it uses the parameters you give it to draw a shape that extends all the way up and all the way down from where you place it - like a column. But, you won't actually see the shape in the game, so it's like an imaginary column. Any chunks that are touched by this column are included in the ticking area. This chunk, or collection of chunks, is then saved with a name that you give it as a ticking area.

You can have up to 10 ticking areas in one world and you can keep track of them by name or by their coordinates.

There are two ways to draw the shapes used to add a ticking area:

**`/tickingarea add <from: x y z> <to: x y z> [name: string]`**
This one draws an imaginary square, rectangle, or cube - depending on what coordinates you give it. Remember: the `y` coordinate doesn't really matter because the shape extends upwards and downwards to the boundaries of your world.

**`/tickingarea add circle <center: x y z> <radius> int> [name: string]`**
This one draws an imaginary circle with a maximum radius of 4.

1. Before you add a ticking area, give yourself a command block that gives you an emerald once every 15 ticks.

1. Note the coordinates of the command block.

1. Travel in one direction away from the command block until you notice the command stops. This means you have traveled out of the chunk containing the command block.

1. Add a ticking area around the command block's coordinates. If you placed the command block at `0 72 0`, then you could use `/tickingarea add circle 0 72 0 3 emerald_block`.

1. You will start getting emeralds again.

### list

To see a list of all of the ticking areas in a world, use:

**`/tickingarea list [all-dimensions]`**

### remove

To remove a ticking area from the game use:

```
/tickingarea remove <name:string>
```

or

```
/tickingarea remove <position x y z>
```

### remove_all

To remove all of the ticking areas from the game use:

```
/tickingarea remove_all
```

## Preloaded ticking areas

Ticking areas typically load after the world containing them is launched, unless you use the `preload` overload. This could be a useful tool for you if you're having problems with the order things are loading into a world.

:::image type="content" source="Media/TickingArea/loading_ticking_areas.png" alt-text="Image of the loading ticking areas message as Minecraft launches":::

Like the `tickingarea add` command, there are two syntaxes for the preload overload: one taking a position and one taking an area name.

```
/tickingarea preload <position> [optional preload value] 

/tickingarea preload <area name> [optional preload value] 
```

If the optional preload value is not specified, then the command queries the current preload value. This will print out the ticking area info as well as message with a count of how many matching areas area marked with `preload`.

For `/tickingarea add...`, there is an option value to specify that the new area should preload, for both the box and circle variants.

```
/tickingarea add <min position> <max position> [optional name] [optional preload value] 

/tickingarea add circle <center position> <radius in chunks> [optional name] [optional preload value]
```

## Using the Schedule command with a ticking area

Creators can use the `/schedule` command to make the game wait for chunks and entities to be loaded before executing a series of commands, such as those configured in a ticking area. This is important for our creators so that they can know when they can run their commands in each area.

### Syntax of the /schedule command

```
/schedule on_area_loaded add <from: x y z> <to: x y z> <function:filepath> 

/schedule on_area_loaded add circle <center: x y z> <radius: int> <function: filepath> 

/schedule on_area_loaded add tickingarea <name: string> <function: filepath>
```

## What's Next?

Now that you have learned more about ticking areas, you could learn more about scoreboard operations or create a Complete the Monument challenge.

> [!div class="nextstepaction"]
> [Scoreboard Operations Tutorial](ScoreboardOperationsTutorial.md)
> [Complete the Monument](CommandsHowToMakeACTMWorld.md)
