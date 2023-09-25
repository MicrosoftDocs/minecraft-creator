---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.BlockRecordPlayerComponent Class
description: Contents of the @minecraft/server.BlockRecordPlayerComponent class.
ms.service: minecraft-bedrock-edition
---
# BlockRecordPlayerComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can play a record.

## Methods
- [clearRecord](#clearrecord)
- [isPlaying](#isplaying)
- [setRecord](#setrecord)

### **clearRecord**
`
clearRecord(): void
`

Clears the currently playing record of this record-playing block.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **isPlaying**
`
isPlaying(): boolean
`

Returns true if the record-playing block is currently playing a record.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **setRecord**
`
setRecord(recordItemType: ItemType | string): void
`

Sets and plays a record based on an item type.

#### **Parameters**
- **recordItemType**: [*ItemType*](ItemType.md) | *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:recordPlayer";`

Type: *string*
