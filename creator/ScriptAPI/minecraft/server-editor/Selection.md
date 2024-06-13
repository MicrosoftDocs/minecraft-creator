---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Selection Class
description: Contents of the @minecraft/server-editor.Selection class.
---
# Selection Class

The Selection represents a volume in space, which may potentially be made up of one or more block locations.  These block locations do not need to be contiguous, and a Selection represent an irregular shape.

It's important to note that a Selection is only a representation of the volume shape space - and does NOT represent the actual contents of the space.

## Properties

### **isEmpty**
`read-only isEmpty: boolean;`

Returns a boolean representing whether or not there are any volumes pushed to the selection stack

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **visible**
`visible: boolean;`

Set whether or not the selection volume is visible to the client user.

NOTE: Use this option carefully - Selection volumes are generally server-only, but marking a volume as visible causes the volume (and all volume operations) to be synchronized with the client game which can potentially generate excessive network traffic.



Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [clear](#clear)
- [getBlockLocationIterator](#getblocklocationiterator)
- [getBoundingBox](#getboundingbox)
- [getFillColor](#getfillcolor)
- [getOutlineColor](#getoutlinecolor)
- [getVolumeOrigin](#getvolumeorigin)
- [moveBy](#moveby)
- [moveTo](#moveto)
- [peekLastVolume](#peeklastvolume)
- [popVolume](#popvolume)
- [pushVolume](#pushvolume)
- [set](#set)
- [setFillColor](#setfillcolor)
- [setOutlineColor](#setoutlinecolor)

### **clear**
`
clear(): void
`

Clear the contents of the Selection

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getBlockLocationIterator**
`
getBlockLocationIterator(): minecraftserver.BlockLocationIterator
`

Fetch a block iterator which can be used to step across the Selection shape.  Each call to the iterator will return the next block location within the Selection bounds which is actually selected.

Block iteration is not guaranteed to be contiguous - it is possible to create irregular selection shapes by adding volumes to a selection which may or may not be contiguous or adjacent to other volumes within the selection.

The Block iterator will return only selected volume locations

**Returns** [*@minecraft/server.BlockLocationIterator*](../../minecraft/server/BlockLocationIterator.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getBoundingBox**
`
getBoundingBox(): minecraftserver.BoundingBox
`

Return a bounding rectangle that contains all of the volumes within the selection (the bounding rectangle does NOT represent the shape of the selection, only the largest rectangle that will fit all of the volumes)

**Returns** [*@minecraft/server.BoundingBox*](../../minecraft/server/BoundingBox.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getFillColor**
`
getFillColor(): minecraftserver.RGBA
`

Return the color of the on-screen selection container hull

**Returns** [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getOutlineColor**
`
getOutlineColor(): minecraftserver.RGBA
`

Return the color of the on-screen selection container outline

**Returns** [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getVolumeOrigin**
`
getVolumeOrigin(): minecraftserver.Vector3
`

Get the origin of the CompoundBlockVolume that makes up the block component part of selection

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **moveBy**
`
moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3
`

Translate a selection by a given amount (this causes all of the volumes within the selection to be moved by the specified offset)

#### **Parameters**
- **delta**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  The amount by which to move

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - Return the newly moved position

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **moveTo**
`
moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3
`

Move the selection to an absolute world location (causing all of the volumes within the selection to be moved to a location relative to the world location)

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  The world location to which to relocate the selection

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) - Return the newly moved position

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **peekLastVolume**
`
peekLastVolume(forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity): minecraftserver.CompoundBlockVolumeItem | undefined
`

Fetch the volume information of the last compound volume that was pushed to the volume stack without affecting the stack itself

#### **Parameters**
- **forceRelativity**?: [*@minecraft/server.CompoundBlockVolumePositionRelativity*](../../minecraft/server/CompoundBlockVolumePositionRelativity.md) = `null`
  
  See the description for [*@minecraft/server.CompoundBlockVolume.peekLastVolume*](../../minecraft/server/CompoundBlockVolume.md#peeklastvolume)

**Returns** [*@minecraft/server.CompoundBlockVolumeItem*](../../minecraft/server/CompoundBlockVolumeItem.md) | *undefined* - Returns undefined if the stack is empty

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **popVolume**
`
popVolume(): void
`

Remove the volume information that was last pushed to the volume stack.  This will reduce the stack item length by 1

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **pushVolume**
`
pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void
`

Push a compound volume item (a volume and action pair) to the volume stack.

#### **Parameters**
- **item**: [*@minecraft/server.CompoundBlockVolumeItem*](../../minecraft/server/CompoundBlockVolumeItem.md)
  
  Item to push to the stack

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **set**
`
"set"(other: minecraftserver.CompoundBlockVolume | Selection): void
`

Replace the contents of the current selection with a new specified selection.  This operation will delete the current contents and copy the contents of the new selection to the target selection - it does this by content, not by reference.

#### **Parameters**
- **other**: [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) | [*Selection*](Selection.md)
  
  [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) - set the block component part of this selection to the specified compound block volume.  This will completely replace all block volume definitions in the selection.
  
  [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) - replace the selection with the specified selection

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setFillColor**
`
setFillColor(color: minecraftserver.RGBA): void
`

Set the color of the hull of the selection object if it is visible. 

#### **Parameters**
- **color**: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setOutlineColor**
`
setOutlineColor(color: minecraftserver.RGBA): void
`

Set the color of the outline around the selection object if it is visible

#### **Parameters**
- **color**: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
