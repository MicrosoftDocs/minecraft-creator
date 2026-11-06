---
author: brian-schwartz
ms.author: brisch
title: Minecraft Bedrock Editor Hotkeys
description: "An overview of the keyboard input shortcuts in Minecraft Bedrock Editor"
ms.service: minecraft-bedrock-edition
ms.date: 10/14/2026
---

# Editor Hotkeys

You can use the Keyboard Settings to view the default keyboard shortcuts and set custom keyboard shortcuts. Custom shortcuts are available in Editor and all Editor extensions!

For a context-sensitive list while you work, press **F1** in Tool mode to open [Control Help](EditorControlHelp.md). Control Help displays general shortcuts and the shortcuts for the active tool, using your current key bindings.

Open **File** > **Keyboard Settings**, or add Keyboard Settings to the Action Bar.

To set a custom keyboard shortcut:

1. Open Keyboard Settings.

2. Use the left pane to locate the input you want to map. 

3. Click the **Shortcut** field for the input.

4. Press the keyboard buttons that you want to use for your custom shortcut. 

5. Click **Save**.
    > [!NOTE]
    > All custom shortcuts must be saved before closing the Keyboard Settings window. If you do not save your custom shortcuts, they will revert to the default shortcuts when the window is closed.

To clear a keyboard shortcut, right-click it or click the **Unbind** button in the far-right column. Both methods for clearing a shortcut will remove it entirely, including the default key binding.

## Input Mapping

|Function|Description|
|:----|:----|
|Name|The name of the action you want to perform.|
|Shortcut| Click on the input field and press the keys you want to bind. Press ENTER or unfocus to confirm the binding, or press Esc to reset it. Right-clicking while focused on the field will unbind the current binding.|
|Exclusive| When the Exclusive toggle is enabled, single-key actions will only activate if no other modifiers are present or if the specified modifier combination is used alongside the key.|
|Save All| Saves all of the new bindings.|
|Reset All| Restores all bindings to the previous setting.|
|Save| Saves the new bindings.|
|Reset| Resets the bindings on the current page.|
|Restore All Defaults| Restores all default bindings for all pages of the mappings.|
|Restore Defaults| Restores default bindings for this page.|

Input Maps fall into one of two main groups &mdash; Core Tools and Modal Tools.


## Core Tools

### Project

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Delete Selection Contents | Delete | On |
| Redo | Ctrl+Y | - |
| Toggle Mode | Ctrl+Tab | - |
| Undo | Ctrl+Z | - |


### Tool Mode

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Add Navigation Position | Ctrl+K | - |
| Copy Selection | Ctrl+C | - |
| Cut Selection | Ctrl+X | - |
| Deselect Selection | Ctrl+D | - |
| Fill Selection Contents | Ctrl+F | - |
| Go To Next Navigation Position | Ctrl+] | - |
| Go To Previous Navigation Position | Ctrl+[ | - |
| Control Help | F1 | - |
| Open Console | / | On |
| Paste Preview| Ctrl+V | - |
| Paste | Ctrl+Shift+V | - |
| Select Hotbar 1 | 1 | On |
| Select Hotbar 2 | 2 | On |
| Select Hotbar 3 | 3 | On |
| Select Hotbar 4 | 4 | On |
| Select Hotbar 5 | 5 | On |
| Select Hotbar 6 | 6 | On |
| Select Hotbar 7 | 7 | On |
| Select Hotbar 8 | 8 | On |
| Select Hotbar 9 | 9 | On |
| Show Game Menu | Ctrl+Q | - |
| Show Log Panel | Ctrl+H | - |
| Toggle Selection Tool | Ctrl+S | - |
| Toggle Summon Tool | Ctrl+Shift+S | - |


### Viewport

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Fly to Cursor | G | On |
| Fly to Selection | Ctrl+Shift+F | On |
| Move Back | S | On |
| Move Up | E | On |
| Move Down | Q | On |
| Move Forward | W | On |
| Move Left | A | On |
| Move Right | D | On |
| Decrease Move Speed Multiplier | Shift+Q | - |
| Increase Move Speed Multiplier | Shift+E | - |


## Modal Tools


### Selection

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Move Cursor Up | PgUp | On |
| Move Cursor Down | PgDn | On |
| Move Cursor Back | Down Arrow | On |
| Move Cursor Forward | Up Arrow | On |
| Move Cursor Left | Left Arrow | On |
| Move Cursor Right | Right Arrow | On |
| Move Selection Up | Alt+PgUp | - |
| Move Selection Down | Alt+PgDn | - |
| Move Selection Back | Alt+Down Arrow | - |
| Move Selection Forward | Alt+Up Arrow | - |
| Move Selection Left | Alt+Left Arrow | - |
| Move Selection Right | Alt+Right Arrow | - |
| Grow Selection Up | Shift+PgUp | - |
| Grow Selection Down | Shift+PgDn | - |
| Grow Selection Back | Shift+Down Arrow | - |
| Grow Selection Forward | Shift+Up Arrow | - |
| Grow Selection Left | Shift+Left Arrow | - |
| Grow Selection Right | Shift+Right Arrow | - |
| Shrink Selection Up | Ctrl+PgUp | - |
| Shrink Selection Down | Ctrl+PgDn | - |
| Shrink Selection Back | Ctrl+Down Arrow | - |
| Shrink Selection Forward | Ctrl+Up Arrow | - |
| Shrink Selection Left | Ctrl+Left Arrow | - |
| Shrink Selection Right | Ctrl+Right Arrow | - |


### Brush

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Brush Tool | Ctrl+B | - |

### Primitives

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Place Primitive | Enter | - |
| Cancel Placement | Esc or Delete | - |
| Nudge Forward/Back/Left/Right | Arrow keys | - |
| Nudge Up/Down | PgUp/PgDn | - |


### Paste Preview

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Clear Preview | Ctrl+D | - |
| Enable Fixed Distance | F | - |
| Adjacent Target Mode | - | On |
| Block Target Mode | B | On |
| Mouse Tracking | C | On |
| Toggle Mode (Paste/Compose) | M | On |
| Move Offset Back | Ctrl+Shift+Down Arrow | - |
| Move Offset Down | Ctrl+Shift+PgDn | - |
| Move Offset Forward | Ctrl+Shift+Up Arrow | - |
| Move Offset Left | Ctrl+Shift+Left Arrow | - |
| Move Offset Right | Ctrl+Shift+Right Arrow | - |
| Move Offset Up | Ctrl+Shift+PgUp | - |
| Move Origin Back | Ctrl+Down Arrow | - |
| Move Origin Down | Ctrl+PgDn | - |
| Move Origin Forward | Ctrl+Up Arrow | - |
| Move Origin Left | Ctrl+Left Arrow | - |
| Move Origin Right | Ctrl+Right Arrow | - |
| Move Origin Up | Ctrl+PgUp | - |
| Move Preview Back | Down Arrow | On |
| Move Preview Down | PgDn | On |
| Move Preview Forward | Up Arrow | On |
| Move Preview Left | Left Arrow | On |
| Move Preview Right | Right Arrow | On |
| Move Preview Up | PgUp | On |
| Paste at Cursor | Enter or Ctrl+V | - |
| Rotate Preview Clockwise | R | On |
| Rotate Preview Counter Clockwise | Shift+R | - |
| Toggle Mirror X | Ctrl+Shift+X | On |
| Toggle Mirror Z | Ctrl+Shift+Z | On |


### Line

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Line Tool | Ctrl+L | - |
| Fill Line | Ctrl+F | - |
| Convert to Selection | Alt+S | - |
| Adjust Line Thickness | Shift+Up/Down/Left/Right| -|
| Select All | Ctrl+A | - |
| Deselect | Ctrl+D | - |
| Deselect All | Ctrl+Shift+D | - |
| Clear All | Ctrl+BACKSPACE | - |
| Clear selected | Ctrl+Shift+BACKSPACE | - |
| Delete Contents | Shift+Delete | - |
| Delete Contents and Deselect | Delete | On |
| Delete Selected | Delete | - |
| Move Selected Back | Ctrl+Shift+Down Arrow | - |
| Move Selected Up | Ctrl+Shift+PgUp | - |
| Move Selected Down | Ctrl+Shift+PgDn | - |
| Move Selected Forward | Ctrl+Shift+Up Arrow | - |
| Move Selected Left | Ctrl+Shift+Left Arrow | - |
| Move Selected Right | Ctrl+Shift+Right Arrow | - |


### Terrain

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Terrain Tool | Ctrl+T | - |
| Cycle Terrain Modes (Flatten/Elevation/Smooth/Roughen) | Ctrl+T | - |
| Flatten: Both | Shift+F | - |
| Flatten: Down | Shift+D | - |
| Flatten: Up | Shift+U | - |


### Extrude

| Name | Shortcut | Exclusive |
|:----|:----|:----|
|Extrude Tool| Ctrl+Shift+E | - |


### Workbench

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Workbench Tool | Ctrl+W | - |
| Primary Action (Left-click equivalent) | (Numpad +) | - |
| Secondary Action (Shift+Left-click) | Shift+(Numpad +) | - |
| Tertiary Action (Ctrl+Left-click) | Ctrl+(Numpad +) | - |
| Quaternary Action (Ctrl+Shift+Left-click) | Ctrl+Shift+(Numpad +) | - |


### Summon

| Name | Shortcut | Exclusive |
|:----|:----|:----|
| Summon Tool | Ctrl+Shift+S | - |
| Clear Selection | Ctrl+D | - |
| Delete Entity | Delete | On |
| Move Selected Back | Down Arrow | On |
| Move Selected Down | PgDn | On |
| Move Selected Forward |Up Arrow  | On |
| Move Selected Left | Left Arrow | On |
| Move Selected Right | Right Arrow | On |
| Move Selected Up | PgUp | On |


## Tool Mode and Crosshair Mode controls

In Tool Mode, hold the right mouse button while navigating with **W**, **A**, **S**, **D**, **E** (up), and **Q** (down). Crosshair Mode uses Minecraft's gameplay bindings instead. View those bindings in **Settings** > **Controls** > **Keyboard & Mouse**; don't use the gameplay movement bindings as a reference for Editor's viewport.

Use **Ctrl+Tab** to switch modes. Press **Esc** in Crosshair Mode to return to Tool Mode.

Selection gestures depend on whether **2-Point Selection** is enabled. See [Selection Tool](EditorSelectionTool.md#marquee-selection) for the two-corner workflow and the distinction from the default three-point workflow.

> [!NOTE]
> The Flood tool and Viewport **Fly to Selection** action both have **Ctrl+Shift+F** as a default binding in different input maps. Use the tool rail to open [Flood](EditorFlood.md) directly, or review and customize the bindings in Keyboard Settings.
