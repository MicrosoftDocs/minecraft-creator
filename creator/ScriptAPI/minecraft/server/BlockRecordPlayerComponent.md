---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockRecordPlayerComponent Class
description: Contents of the @minecraft/server.BlockRecordPlayerComponent class.
---
# BlockRecordPlayerComponent Class

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can play a record.

## Methods
- [ejectRecord](#ejectrecord)
- [getRecord](#getrecord)
- [isPlaying](#isplaying)
- [pauseRecord](#pauserecord)
- [playRecord](#playrecord)
- [setRecord](#setrecord)

### **ejectRecord**
`
ejectRecord(): void
`

Ejects the currently set record of this record-playing block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getRecord**
`
getRecord(): ItemStack | undefined
`

Gets the currently set record of this record-playing block.

**Returns** [*ItemStack*](ItemStack.md) | *undefined*
  
Notes:
- This function can throw errors.

### **isPlaying**
`
isPlaying(): boolean
`

Returns true if the record-playing block is currently playing a record.

**Returns** *boolean*
  
Notes:
- This function can throw errors.

### **pauseRecord**
`
pauseRecord(): void
`

Pauses the currently playing record of this record-playing block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **playRecord**
`
playRecord(): void
`

Plays the currently set record of this record-playing block.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setRecord**
`
setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void
`

Sets and plays a record based on an item type.

#### **Parameters**
- **recordItemType**?: [*ItemType*](ItemType.md) | *string* = `null`
- **startPlaying**?: *boolean* = `true`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:record_player";`

Type: *string*
