---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .CursorControlMode Enumeration
description: Contents of the .CursorControlMode enumeration.
---
# CursorControlMode Enumeration

An enumeration used by the 3D block cursor [*@minecraft/server-editor.Cursor*](../../minecraft/server-editor/Cursor.md)

## Constants
### **Keyboard**
`Keyboard = 0`

Using Keyboard mode will remove the dependence of the 3D block cursor on the player mouse position.  The 3D block cursor can be positioned using the keyboard (or the Cursor move methods on the cursor object) and the position will not be reset if the mouse is moved
### **Mouse**
`Mouse = 1`

The Mouse movement mode will disable keyboard or manual 3D block cursor movement and make the 3D block cursor only react to player mouse movement
### **KeyboardAndMouse**
`KeyboardAndMouse = 2`

This is generally the default move mode for the 3D block cursor.  

The 3D block cursor can be positioned using the keyboard (or the Cursor move methods on the cursor object) but the position will be reset to the block location under the players mouse position if any mouse movement is detected.
### **Fixed**
`Fixed = 3`

When in fixed mode, the 3D block cursor will remain in a fixed position directly in front of the players facing direction.  It cannot be moved without moving the player (or adjusting the fixed block distance).

This mode is useful for addressing block locations in the air (put the cursor into fixed mode, and fly the player until the desired air block is beneath the cursor, at which point it is selectable without being clickable)
