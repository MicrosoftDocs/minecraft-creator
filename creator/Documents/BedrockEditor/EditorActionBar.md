---
author: cam-wilkerson
ms.author: v-cwilkerson
title: Minecraft Bedrock Editor Action Bar
description: "An overview of the Action Bar part of Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 09/04/2025
---

# Editor Action Bar

The Action Bar gives you one‑click access to common actions like Undo/Redo, Reload, and mode switching. It lives below the menu bar, with configurable slots on either side of the UI. To add an action to the bar, press the [+] on either the right or left side and choose the action you want to add to the bar from the menu. 
> [!TIP]
> To remove an Action, click the little triangle in the lower left corner of the action and choose **Clear** from the drop-down menu.

![Editor UI with the action bar highlighted](Media/editor_overview_action_bar.png)


## Details

The Action Bar has quick functions like **undo** and **redo** that affect the things you do to the world, including some of the actions you can do in Crosshair Mode. Common Action Bar commands include: Undo, Redo, Attach Debugger, Keyboard Settings (Input Mapping), Reload, and the Crosshair/Tool Mode toggle.

> [!TIP]
> Action Bar commands are just shortcuts&mdash;every Action Bar button corresponds to an action that can also be triggered from menus or via a keyboard shortcut. Extensions can register their own Action Bar items through the Editor UI API. See `IActionBar`, `IActionBarItem`, and the predefined `CoreActionBarItemType` list in the Script API docs.


## Using the Action Bar

### Add items
1. Click the **[+]** on the left or right side of the Action Bar.
2. Pick an item from the menu to add it to that side.

### Remove items
1. Click the small triangle in the lower left corner of the action.
2. Choose **Clear** to remove the action from the bar.

> [!NOTE]
> For Hotbar management (block slots 1–9), see the Editor Overview and Hotkeys pages. The Action Bar is separate from the block Hotbar.


## Keyboard shortcuts

Some Action Bar items have default shortcuts. For the full list, see [Editor Hotkeys](../BedrockEditor/EditorKeyboardInputs.md).

|Command |Shortcut |
|:-------|:-------|
| Undo | `Ctrl Z` |
| Redo | `Ctrl Y` |
| Attach Debugger | - |
| Input Mapping | - |
| Reload | - |
| Crosshair Mode| `Ctrl Tab` |

