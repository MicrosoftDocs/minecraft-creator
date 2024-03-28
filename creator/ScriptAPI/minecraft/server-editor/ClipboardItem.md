---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ClipboardItem Class
description: Contents of the @minecraft/server-editor.ClipboardItem class.
---
# ClipboardItem Class

A ClipboardItem is a handle to an object which represents a set of blocks in a contained bounding area (most likely copied from the world)

## Properties

### **isEmpty**
`read-only isEmpty: boolean;`

Return whether there is any block content in the item

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [clear](#clear)
- [getPredictedWriteAsCompoundBlockVolume](#getpredictedwriteascompoundblockvolume)
- [getPredictedWriteAsSelection](#getpredictedwriteasselection)
- [getSize](#getsize)
- [readFromSelection](#readfromselection)
- [readFromWorld](#readfromworld)
- [writeToWorld](#writetoworld)

### **clear**
`
clear(): void
`

Clear the contents of the item

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getPredictedWriteAsCompoundBlockVolume**
`
getPredictedWriteAsCompoundBlockVolume(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): minecraftserver.CompoundBlockVolume
`

Create a [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) container which represents the occupied block volumes within the ClipboardItem.

This function does not perform any write operations, and instead returns only a prediction of the volume area which would be affected as part of a write operation with a given set of write options.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  A world location to which the ClipboardItem may potentially be written (nothing is actually written as part of this operation)
- **options**?: [*ClipboardWriteOptions*](ClipboardWriteOptions.md) = `null`
  
  An optional set of write parameters which govern how the ClipboardItem should be potentially applied to the world

**Returns** [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) - A [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) which represents the occupied block volumes within the ClipboardItem as they would be written to the world with the specified [*@minecraft/server-editor.ClipboardWriteOptions*](../../minecraft/server-editor/ClipboardWriteOptions.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getPredictedWriteAsSelection**
`
getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection
`

Create a [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) container which represents the occupied block volumes within the ClipboardItem.

This function does not perform any write operations, and instead returns only a prediction of the volume area which would be affected as part of a write operation with a given set of write options.

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  A world location to which the ClipboardItem may potentially be written (nothing is actually written as part of this operation)
- **options**?: [*ClipboardWriteOptions*](ClipboardWriteOptions.md) = `null`
  
  An optional set of write parameters which govern how the ClipboardItem should be potentially applied to the world

**Returns** [*Selection*](Selection.md) - A [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) which represents the occupied block volumes within the ClipboardItem as they would be written to the world with the specified [*@minecraft/server-editor.ClipboardWriteOptions*](../../minecraft/server-editor/ClipboardWriteOptions.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getSize**
`
getSize(): minecraftserver.Vector3
`

Get the bounding size of the ClipboardItem

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **readFromSelection**
`
readFromSelection(selection: Selection): void
`

Copy the contents of the area represented by a [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) volume into the ClipboardItem

#### **Parameters**
- **selection**: [*Selection*](Selection.md)
  
  A volume which represents the area to be copied

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **readFromWorld**
`
readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void
`

Copy the contents of a rectangular volume into the Clipboard Item

#### **Parameters**
- **from**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  The world location of one corner of a bounding volume
- **to**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  The world location of the opposite corner of a bounding volume

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **writeToWorld**
`
writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean
`

Apply the contents of a ClipboardItem to the world at a given location using a set of write options

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  The root point of the world location to which the ClipboardItem is written (this is modified by the various anchor, offset and rotation parameters of the [*@minecraft/server-editor.ClipboardWriteOptions*](../../minecraft/server-editor/ClipboardWriteOptions.md)
- **options**?: [*ClipboardWriteOptions*](ClipboardWriteOptions.md) = `null`
  
  An optional set of write parameters which modify the properties of the ClipboardItem as it is applied to the world

**Returns** *boolean* - Success or Failure

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
