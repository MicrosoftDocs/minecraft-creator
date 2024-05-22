---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CursorProperties Interface
description: Contents of the @minecraft/server-editor.CursorProperties class.
---
# CursorProperties Interface

The CursorProperties interface is used to describe the properties of the Editor 3D block cursor construct.

The 3D block cursor can be queried to retrieve the current properties, and the same property class can be used to set the current properties of the cursor.

This interface is generally used at the activation stage of the active tool to set up the color, visibility and input properties of the 3D block cursor

## Properties

### **controlMode**
`controlMode?: CursorControlMode;`

Enum representing the cursor control mode

- Fixed Mode locks the cursor to a position which is <X> blocks offset from the current player position. The cursor is camera relative, so it will always appear <X> blocks ahead of the players feet

- Keyboard Mode puts the cursor under direct control of the API, and ignores any mouse input.  The cursor can only be moved around using the moveBy method

- KeyboardAndMouse mode puts the cursor under a shared control of onMouseMove and keyboard input.  Any mouse movement events will set the cursor to the position of the mouse/world raycast.  This can be modified using the moveBy method, but any subsequent mouse events will reset the position back to where the raycast intersection occurs

- Mouse mode puts the cursor under control of mouse move events, and moveBy method will be ignored



Type: [*CursorControlMode*](CursorControlMode.md)

### **fillColor**
`fillColor?: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

### **fixedModeDistance**
`fixedModeDistance?: number;`

The fixed distance from the players feet at which the cursor is attached, relative to camera direction.

This is only used when [controlMode] is set to `Fixed`

Type: *number*

### **outlineColor**
`outlineColor?: minecraftserver.RGBA;`

A [Color] Property representing the color of the block cursor object outline

Type: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

### **projectThroughLiquid**
`projectThroughLiquid?: boolean;`

Type: *boolean*

### **targetMode**
`targetMode?: CursorTargetMode;`

An enum representing the cursor target mode

- Block Mode records the block position of the mouse/world raycast intersection

- Face Mode records the block position of the block adjacent to the mouse/world raycast intersection, according to the face of the collision point of the selected block

Type: [*CursorTargetMode*](CursorTargetMode.md)

### **visible**
`visible?: boolean;`

Boolean flag controlling the visibility of the 3D block cursor

Type: *boolean*
