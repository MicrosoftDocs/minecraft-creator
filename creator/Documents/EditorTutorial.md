---
author: minecraftchloe
ms.author: v-jillheaden
title: Minecraft Bedrock Editor Tutorial
ms.prod: gaming
description: A step-by-step guide for using Minecraft Editor
---

# Minecraft Editor Tutorial

This tutorial is intended to guide you through creating an Editor project, using each tool, and then exporting the project as a world that can be opened in Minecraft. It is also meant to familiarize you with the keyboard shortcuts.

> [!IMPORTANT]
> Just like we add features to the Minecraft game from time to time (like new biomes), Minecraft Editor is still under development.
> It could change from time to time as we get feedback from creators like you.

--------

In this tutorial, you will learn the following:

> [!div class="checklist"]
>
> - How to create an Editor project
> - How to use each tool in Editor, along with its variations and keyboard shortcuts
> - How to export a world and open it in Minecraft

--------

### Requirements

To get started, you need the following:

- A Windows computer
- Keyboard and mouse

It's recommended that the following be completed before beginning this tutorial.

- [How to get Minecraft Bedrock Editor](EditorInstallation.md)
- [Bedrock Editor Overview](EditorOverview.md)

## Getting Started

Launch Minecraft Bedrock Editor.

Open the Editor and select "Create New Project."

creative mode, coordinates on, flat world
World loads
Tool Mode - switch to Crosshair Mode and back again.

close Welcome panel, 
minimize selection panel, 
move to toolbar area
Verify in Tool mode

Move around
WASD, need r-click mouse and hold to unlock camera viewport
THEN WASD shift space to move around
Go into Crosshair Mode, move around
Go into Tool mode
place blocks with tool (block brush), then move around
Select the blocks you placed.
copy, paste.
Cut and paste.
Different pastes.

Paste Preview Practice:
Wanted to mention some additional flow options! 

1. Create the selection
2. Ctrl C (copy) or Ctrl X (cut) to get it into your imaginary clipboard 

Now - pick your journey: 

3. Option 0: What you wrote already! :) 

3. Option 1: Ctrl+Shift+V to see the paste preview *on top of* the original selection / slightly offset [*this is the update we’ll be making].

3. Option 2: Click a block on the ground to select an anchor and then press Ctrl+Shift+V to see the paste preview. 

4. What you have is perfect! 
5. What you have is perfect - not sure if you want to mention you can also hit Ctrl+V or Enter to commit a paste. Totally up to you!  

____________________________________

let go of r-mouse click to interact with stuff
look around
select blocks
l-click, shift, hold, left-click to create the Z, then 2 options, gizmos (corner) and drag it up to change height
or
keybindings - alt-click at some point

Selection Gizmo

why x z y and not x y z? because Minecraft
Resize Gizmo
Move Gizmo

Fill tutorial idea: select and fill with redstone lamp blocks, then select somewhere inside that shape and fill it with redstone blocks to light the lamps.

Paste Preview - Create a tree and use transformations to make different trees.

Build a "tree" (stone tree? lamp tree?)


ARTICLE 3 of 4: Tutorial (Chloe as primary, Stephen as secondary) - make your first map and ideas 

 

Scenarios to try out Editor features  

Make your first map 


Extensions [Hyperlink to separate article] 


----- 

Scenarios to try out Editor features  

Select an entire village. Cut or copy and then paste to different location. Undo everything you did.  

Build a mountain range across an entire chunk, undo every action, and then redo it for fun. 

In Tool, carve a cave using a brush with air blocks. Swap to Crosshair and decorate your cave! Build your own lush cave -- a beautiful oasis! 

Make a giant, floating greenhouse in Tool Mode, and then build your oasis in Crosshair. 

Go into Crosshair. Place a lightning rod. Change the weather (/weather thunder). Swap back to Tool Mode. Unpause via the top menu (or the /command) and try and pause the simulation via the top menu at the exact moment lightning strikes! 

Copy and paste an igloo onto a beach (uses /locate, /tp, select, copy, paste) 

Cut a woodland mansion from one part of the forest to another (uses /locate, /tp, select, cut, paste) 

Make a parkour map (https://docs.microsoft.com/minecraft/creator/documents/parkourworldwalkthrough)  

Create an upside-down world. 

Change dimensions while you’re building.  

 

 

Make your first map 


ROUGH NOTES (delete after harvesting goodness from them! )

How to use the Editor

Follow
1

Edit

Chloe Bouxsein
Feb 1
Status: Last updated 1-Feb 2023 with latest /main release functionality

How to use the Editor
The short URL for this page is: aka.ms/EditorHowADO 

Welcome! Välkommen! 🎉 We are so excited you're here and building with Minecraft's Bedrock Editor, where we want to empower and make it possible for Creators of all skillsets to easily create high-quality experiences.

For playtesting guidance, view this page.

And ensure you also join these Slack channels:

#bp_editor_feedback  - Notifications when new builds are ready to Playtest
#ask_editor  - General questions about the Editor
Table of contents
General overview - Editor Modes, Tool Mode Controls, Tool Mode UI
Ideas of things to do - Use the features!
Keybindings and slash commands
FAQ
Who to contact
General Overview
Editor is in-game.
We are inheriting as much as makes sense from Vanilla.
The work API/scripting has done has enabled us to create this experience.
Without the work by Ore UI, we wouldn't have an in-game UI that is accessible and localized.
Without the support of OSI, the input layer wouldn't work as well as it does.
Without the support of Features, we wouldn't have been able to do the work we have on layered abilities and pausing.
All UI/UX will be server-driven, meaning that 3P extension creators using our public API don't need to think about where their script is running or what UI framework is powering it.
Creators will be able to build their own Editor extensions via our public API.
Being able to make changes via the newly created input layer via a cursor is a feat of engineering prowess given the complexities many have experienced with GameFace.
Editor Modes
There are two modes within the Editor:

Tool: Focused on using the multi-block editing tools as available via the UI and free-moving cursor.
Crosshair: More precise, single-block edits using a crosshair in 1st person. Utilizes existing Vanilla keybindings.
While we expect we will always have 2 modes, our goal is to transition Crosshair single-block edits to also be supported in Tool. Having a dedicated Tool Mode has also unlocked the full keyboard for keybindings on tools and creator extensions.

Tool Mode Controls
Rotate camera / unlock movement in Tool Mode: Hold down right mouse button. In Crosshair, you do not need to hold down the right mouse button.
Toggling between Tool and Crosshair Modes can be achieved via the button at the bottom of the viewport. When in Crosshair, you will need to use the keybinding.
Tool Mode UI
Toolrail: Left array of tools. We will be matching to a standard that only tools with a modal/additional properties will appear in the toolrail -- eg. Selection, Fill.
Action bar: Top array. We will be matching to a standard that only tools with a single action and no modal will appear in the action bar -- eg. undo/redo/cut/copy/paste.
Menu: Very top. Dropdown menus -- eg. File, Edit, Help.
Ideas of things to do
A list of some things to do by feature to more thoroughly test out the Editor. One way to get started for inspiration on your own is to play maps from the Marketplace and then test out replicated from scratch within the Editor!

✨ If you come up with some additional fun things to do, we welcome you to directly edit this page for others! We've even proactively created a section for you to add your ideas if they don't fit in the categories below.

🌐 Basic navigation in the Editor
Quick teleport using the grapple teleport extension (click G while in Tool Mode)
While in Tool Mode, hold down right mouse button and navigate via WASD Shift/Space
Toggle between Tool and Crosshair modes to experience the difference using Ctrl Tab
🐭 Selection
The functionality that enables the rest! 😃 Size adjustment is done unidirectionally, so if adjusting via the modal, become skilled at adjusting your origin.

At this point we haven't hooked the cursor to click-to-select quite yet, which means you're relying on cursor + keyboard shortcuts.

Select a single block (Ctrl A) and adjust the size of it via the selection panel. Then fill it with something, or cut/copy/paste what you selected!
Select a region using 2-clicks (Ctrl-A at 2 points -- pro-tip: opposite corners and then change your Y). Adjust the size of it via the selection panel. Then fill it with something, or cut/copy/paste what you selected!
Select something and then deselect it (Ctrl D)
🪣 Fill
This transaction is added to the undo/redo stack, and fills with whatever block you specify.

Select an entire village and fill it with any block. (Note: filling it with air is a bit synonymous with deleting it)
Select a mountain and fill the volume with a different block.
Create an ocean.
⬅️ Undo / ➡️ Redo
Every player-initiated transaction can be undone or redone. Use the hotkeys in either Tool or Crosshair, or the UI available in Tool. This also works if you're toggling between Tool and Crosshair and making edits between the two modes.

Remove a village and undo that action. Bonus points if you can stress test for us by spamming undo/redo enough to get a warning.
Build a mountain range across an entire chunk, undo every action, and then redo it for fun.
Select and fill an entire chunk with a block, undo, and redo. Let us know if anything breaks, please!
👀 Using Tool + Crosshair Together!
Tool is for multi-block editing, Crosshair is for precision. While our goal is to enable single-block and precision editing using the cursor in Tool, we're not there yet! Here are some things to do:

In Tool, carve a cave using a brush with air blocks. Swap to Crosshair and decorate your cave! Build your own lush cave -- a beautiful oasis!
Make a giant greenhouse in Tool Mode, and then build your oasis in Crosshair.
Create a giant castle, and then swap to Crosshair to construct a sorting machine with redstone.
⏯ Pause actors
By default, the Editor has all actors paused. The scenarios below assume it's still paused.

Go into Crosshair Mode, open inventory, and put 9 spawn eggs in your hotbar. Spawn a bunch of the mobs. You'll see they are frozen! Go back to Tool Mode. Unpause via the top menu. They all move! Wow!! To pause again, select Pause from the top menu.
Go into Crosshair. Place a lightning rod. Change the weather (/weather thunder). Swap back to Tool Mode. Unpause via the top menu and try and pause the simulation via the top menu at the exact moment lightning strikes!
⚙️ Player and world settings
Stop the day cycle!
Create a giant glass container in the sky. Go into crosshair mode and place every single mob inside of the container. Unpause the simulation and watch all of the mobs in-action. Toggle pause/unpause.
Swap dimensions. Chaotically copy a village from the overworld to the End or Nether!
✂️ Cut / 📸 Copy / 🤖 Paste
These transactions add to the undo/redo stack and the clipboard. Currently, the clipboard works between dimensions, but when you swap dimensions your undo/redo stack is wiped. Eventually we would like to have undo/redo stacks that are per dimension.

Copy and paste an igloo onto a beach (uses /locate, /tp, select, copy, paste)
Cut a woodland mansion from one part of the forest to another (uses /locate, /tp, select, cut, paste)
Copy an entire mountain range or giant peak, teleport to another location, and paste the mountain range (uses select, copy, /tp, paste)
Move a village (uses select, cut, /tp, paste)
❌ Delete (aka fill with air blocks)
This transaction adds to the undo/redo stack.

Select an entire village and delete it.
Select an entire mountain and delete it.
/locate an ancient city. Navigate to those coordinates. Delete a 50x50x50 region of all blocks above the Y value of the ancient city so there's a steep cliff to surprise drop into an ancient city.
🗺 Map ideas
Carve a valley, create 7 mountain plateaus surrounding it, and paste selections from different biomes on each plateau.
Make a parkour map (Learning Portal guide) 
Recreate the Hallelujah Mountains (from Avatar ).
Recreate Victoria Falls 
Recreate Machu Pichu 
Make a massive maze
Make a cave in the sky
Build your own mountain range and make a cave winding through it
Build a cube city
Make your own landscape from flat world, including mountain caves
Move an overworld village to the nether or the end.
Make your own extension!
We are building the base Editing experience and supporting our Creator Community in building their own extensions with our public API! We will have thorough GitHub documentation about this, but for now here is our ADO documentation: Getting Started - Editor Extension Development Guide !

✨ Other ideas - Add here! ✨
If you have ideas that don't fit neatly into the above sections, just add it here! And if you're comfortable, add your Slack handle so we can reach out and thank you! 🥰

Keybindings and slash commands
🔎 Reminder: When in Tool Mode, in order to move with WASD Shift/Space, you must hold down the right mouse button. In Crosshair, utilize Vanilla keybindings.

Keybindings
Action	Keybinding	Mode
Forward	W (*Tool: Hold down right mouse button)	Tool + Crosshair
Left	A (*Tool: Hold down right mouse button)	Tool + Crosshair
Backward	S (*Tool: Hold down right mouse button)	Tool + Crosshair
Right	D (*Tool: Hold down right mouse button)	Tool + Crosshair
Up	Space (*Tool: Hold down right mouse button)	Tool + Crosshair
Down	Shift (*Tool: Hold down right mouse button)	Tool + Crosshair
Increase speed	Quickly press W twice (*Tool: Hold down right mouse button)	Tool + Crosshair
Fly toggle	Quickly press space twice	Crosshair
Display 3D cursor - baseline for Tool Mode	Esc	Tool only
Selection mode	Ctrl S	Tool only
Selection: Single block	Single left mouse click	Tool only
Selection: 2-step XZ region selection	Left mouse click while holding Shift	Tool only
Selection: 3-step XZY region selection	Left mouse click while holding Shift for XZ, and to select Y move your cursor and press Alt while left clicking	Tool only
Deselect	Ctrl D	Tool only
Fill	Select an area and either Ctrl F while in Selection mode or use Fill in the Selection panel	Tool only
Undo	Ctrl Z or Ctrl Delete (if /effect is applied)	Tool + Crosshair
Redo	Ctrl Y	Tool + Crosshair
Cut	Ctrl X	Tool only
Copy	Ctrl C	Tool only
Paste	Ctrl V	Tool only
Delete	Delete	Tool only
Grapple teleport	Point at something and press G	Tool only
Brush	Ctrl B	Tool only
Open cmd window	/	Tool + Crosshair
Toggle from Tool to Crosshair Mode	Button at top right of viewport or Ctrl Tab	Tool + Crosshair
Get to Tool Mode from Crosshair Mode	Esc or Ctrl Tab	Crosshair only
Pending/upcoming
Action	Keybinding	Mode
Zoom in UI	Ctrl +	Tool only
Zoom out UI	Ctrl -	Tool only



## What's Next?

Now that you have gone through the Tutorial...?

> [!div class="nextstepaction"]
> [Editor Overview](EditorOverview.md)
