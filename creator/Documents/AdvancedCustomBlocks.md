---
author: JDHeaden
ms.author: v-jillheaden
title: Guide to Redstone
ms.prod: gaming
description: "A guide to using Redstone in Minecraft: Bedrock Edition"
---

# A Guide to Redstone

This guide is intended to show you some basic ways to use redstone components so that you might feel inspired to try your own projects and feel more prepared to go learn from other redstone creators.

In this tutorial you will learn the following:

> [!div class="checklist"]
>
> - Basic redstone components and how they work.

### Requirements

It’s recommended that the following be completed before beginning this tutorial:

- [Introduction to Commands](CommandsIntroduction.md)

This guide assumes that you know how to make a flat, creative-mode world and how to give yourself the things you need, like redstone dust and pistons.

## Redstone Fundamentals

What is redstone? Redstone is kind of like electrical circuits within Minecraft. As with electrical circuits, it's possible to build incredibly sophisticated machines based on the combination of simple connections and switches among components.

### Using redstone torches, redstone blocks, and redstone dust

You can power most redstone devices, like a redstone lamp, by putting a redstone torch on an adjacent block.

Putting the torch on the lamp itself will not power it.

Placing a redstone block on the lamp will power it.

:::image type="content" source="Media/Redstone/torch_block_basics.png" alt-text="Image of lamps being powered by a torch next to it, not being powered by a torch placed on it, and being powered by being placed on a redstone block.":::

Redstone dust acts like a conduit between a power source and a component. As the power signal travels farther from the power source, it gets weaker at a predictable rate. The redstone signal coming out of a power source starts at 15 and decreases by 1 for each block the line of redstone dust is extended.

Let's do an experiment to test this:

1. Give yourself redstone dust and a redstone torch.

1. Place one handful of redstone dust dust on the ground. It makes a dark red blob.

1. Place a redstone torch next to the blob. The redstone blob will glow and align itself to point towards the torch. Neat!

1. Place more redstone dust to continue the line in one direction. Notice that the glow gets fainter as you get farther from the torch.

1. Extend the line at least 15 blocks.

    :::image type="content" source="Media/Redstone/signal_strength_line.png" alt-text="Image of a line showing diminishing signal strength":::

1. Give yourself a piston and place it anywhere around the dark end of the redstone line. The pistons won't do anything if the signal is too weak to make the redstone touching the piston glow.

    :::image type="content" source="Media/Redstone/inactive_pistons.png" alt-text="Image of 3 inactive pistons":::

1. Place another piston next to the glowing part of the redstone. It should extend.

    :::image type="content" source="Media/Redstone/active_pistons.png" alt-text="Image of 3 active pistons":::

1. You could also add another redstone torch to boost the power.

    :::image type="content" source="Media/Redstone/booster_torch.png" alt-text="Image of a redstone torch boosting the signal and activating pistons":::

### Random redstone dust, torch, and block facts, in no particular order

- A blob of redstone dust will power all the blocks around it and the block it is placed on.
- Redstone blocks and redstone torches each have a signal strength of 15.
- Power radiates out from a redstone torch in all directions, as shown in this grid that is powered by one redstone torch.

:::image type="content" source="Media/Redstone/signal_strength_grid.png" alt-text="Image of a grid showing diminishing signal strength":::

- A redstone torch powers the block above it, takes redstone signal from it, and powers all adjacent redstone components including above and below the torch.
- A redstone torch will not power the is block it is placed on. Placing a redstone torch on a powered block will deactivate the block.
- The redstone torch or redstone block must be next to or below the piston to power it. Placing the torch or block in front of the piston will not power it.
- Redstone torches don't power the block they're on. For example, putting a redstone torch on top of a piston will not power it, but placing a redstone block on top of a piston will power it.
- A redstone torch can be deactivated by powering the block it is placed on.

- Power from a redstone torch is continuous. Power can also travel in pulses called "ticks" and there are ways to vary the rate.

## Time Tick and Redstone Tick

In Minecraft, the term for time passing is "ticks" and time passes at 20 ticks per second. Redstone signals pass at the rate of 10 ticks per second.
By controlling the speed of the ticks, you can control the speed at which a component does something. So, as you experiment with how different components are powered, keep in mind that the power does not have to be continuous.

### Components that emit redstone power

These are things that can power redstone components even though there is no redstone in their recipes.

- Button: press to get a short pulse of power.
- Lever: toggles full signal strength on or off.
- Pressure plate, wood or stone: sends a pulse of power when you press or step on it. They can be activated by mobs stepping on them, too. Different mobs may activate the pressure plates at different strengths. For example, the signal strength emitted when a creeper steps on the plate is lower than the strength emitted when an iron golem steps on it. When the player or mob leaves the plate, it will deactivate after 5 redstone ticks. A wooden pressure plate also activates if an item is dropped on it.
- Weighted pressure plate, iron ("heavy") or gold ("light"): signal strength grows as the number of entities (players, mobs, or items) on top of it increases. Light plate requires fewer items for maximum signal strength than heavy plate needs.
- Tripwire: emits signal strength when wire is activated (tripped).
- Lectern with a book on it: emits a pulse of power as you turn the pages.

## Common redstone components

- Piston and sticky piston: These stay extended for as long as they are powered. A piston can push up to 12 blocks. Sticky pistons can pull the block stuck to it back again. Pistons take one tick to extend, zero ticks to retract.

- Repeater: Place along a line of redstone dust to continue the signal. As long as a signal strength of 1 or higher is going into the repeater, it will output the maximum level of 15. Redstone repeaters only power the dust or component directly in front of them. They have a built-in delay of 1 tick and can be toggled to extend the delay to 4 ticks. If the input pulse delay is shorter than the delay toggled on the repeater, it will extend the pulse. For example, if you route a 1-tick pulse into a 4-tick repeater, the pulse gets extended to 4 ticks.

  :::image type="content" source="Media/Redstone/repeater.png" alt-text="Image of a repeater extending a redstone signal.":::

- Comparator: Unlike a repeater, the comparator outputs the same signal strength that comes into the back of it. Comparators also take in a signal running into the side and compare it to the strength of the signal coming into the back.
In normal mode (when the light is NOT switched on) then it will not output a signal if the strength of the signal running into the side is stronger than the signal strength running into the back. If the redstone comparator is in subtract mode (meaning the light is on), it will subtract the signal strength that comes into the side from the signal strength that comes into the back and output the result. So, if a signal strength of 10 is running through a comparator that is in subtract mode (light ON) and we put in a signal strength of 7, the it will output a signal strength of 3.

  :::image type="content" source="Media/Redstone/comparator1.png" alt-text="Image of a comparator comparing 2 redstone signals.":::

(Remember, the signal starts at 15 and then goes down by one for each segment of redstone dust.)

- Observer: Has two sides - observer face and output face. When the face detects a block update, it emits a signal out of the back.

- Daylight sensor: produces different levels of power depending on the level of light it detects. It can be inverted to emit light when it detects darkness. To invert it, place one and left-click on it. It will turn blue.

- Dropper: Spits out a random item from its inventory when powered directly or powered by an adjacent block. For example, if loaded with a horse spawn egg, when activated, it drops a horse spawn egg. If loaded with arrows, it spits out an arrow.

- Dispenser: Works like the dropper, but has special powers depending on what items are loaded into it. For example, if it is loaded with a horse spawn egg, it dispenses a horse. If loaded with arrows, it will fire the arrow. Other items with special behavior include armor stands, boats, bone meal, potions, and buckets.

- Observer: When it detects block updates with its face, it sends a one-tick pulse through the red spot on the back. Observers will emit a pulse when they are moved by pistons.

- Trapped chest: activates when opened. Signal varies according to how many players are viewing the contents.

- Noteblock: plays a note when it receives a signal.

- Redstone lamp: produces light when powered.

- TNT: activates when powered directly or by an adjacent powered block. Fuse time is 40 redstone ticks.

## What's Next?

Now that you know more about redstone, you could use it to enhance a "Complete the Monument" map.

> [!div class="nextstepaction"]
> [How to make a Complete the Monument World](CommandsHowToMakeACTMWorld.md)
