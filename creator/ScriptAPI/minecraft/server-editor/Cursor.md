---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.Cursor Class
description: Contents of the @minecraft/server-editor.Cursor class.
---
# Cursor Class

The 3D block cursor is controlled through this read only object and provides the Editor some control over the input methods, display properties and positioning of the 3D block cursor within the world.

The 3D block cursor is a native object which is constantly calculating a screen/mouse -> world raycast, and recording the resultant block collision position and facing direction.

Depending on the properties of the cursor state, this is not always true – the cursor can also be manually manipulated by keyboard input and moved around independently of mouse movement; when the mouse is moved, the block cursor will return to the mouse/world ray intersection point.

The cursor can also be set to either block or face mode; block mode represents the block the mouse is pointing at, and face mode represents the adjacent block that the mouse is pointing at (i.e. the block attached to the face of the intersection point).

In practical use, each tool when activated grabs the current cursor state object and stores it.  The active tool then sets the current state to represent the functionality of the tool (color, input mode, etc).  When the tool loses focus, it restores the cursor state using the stored state object that was grabbed during activation.

The 3D block cursor can also be used to query the current block at which the mouse is pointing (or the current block to which the cursor has been manually moved by the user)

## Properties

### **faceDirection**
`read-only faceDirection: number;`

The face at of the block beneath the 3D block cursor which is intersected by the mouse raycast

Type: *number*

Notes:
  - This property can throw errors when used.

### **isVisible**
`read-only isVisible: boolean;`

Query whether or not the 3D block cursor is visible or hidden

Type: *boolean*

Notes:
  - This property can throw errors when used.

## Methods
- [getPosition](#getposition)
- [getProperties](#getproperties)
- [getRay](#getray)
- [hide](#hide)
- [moveBy](#moveby)
- [resetToDefaultState](#resettodefaultstate)
- [setProperties](#setproperties)
- [show](#show)

### **getPosition**
`
getPosition(): minecraftserver.Vector3
`

Get the world position of the 3D block cursor

**Returns** [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getProperties**
`
getProperties(): CursorProperties
`

Get a property object which represents the current properties of the 3D block cursor.

**Returns** [*CursorProperties*](CursorProperties.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getRay**
`
getRay(): CursorRay
`

**Returns** [*CursorRay*](CursorRay.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **hide**
`
hide(): void
`

Hide the 3D block cursor from view until the corresponding [*@minecraft/server-editor.Cursor.show*](../../../scriptapi/minecraft/server-editor/Cursor.md#show) function is called
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **moveBy**
`
moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3
`

Manually offset the 3D block cursor by given amount.  Depending on the [*@minecraft/server-editor.CursorProperties.controlMode*](../../../scriptapi/minecraft/server-editor/CursorProperties.md#controlmode) - this function may have no effect

#### **Parameters**
- **offset**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
  
  Amount by which the 3D block cursor should be moved

**Returns** [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md) - Return the newly modified position (or previous position if movement was restricted)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **resetToDefaultState**
`
resetToDefaultState(): void
`

Reset the 3D block cursor to the system default state
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setProperties**
`
setProperties(properties: CursorProperties): void
`

Set the 3D block cursor properties to a given state

#### **Parameters**
- **properties**: [*CursorProperties*](CursorProperties.md)
  
  A set of optional parameters within a property state which represent the intended 3D block cursor state
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **show**
`
show(): void
`

Make the 3D block cursor visible on screen
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
