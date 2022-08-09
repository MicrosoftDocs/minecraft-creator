---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockRecordPlayerComponent Class
description: Contents of the mojang-minecraft.BlockRecordPlayerComponent class.
---
# BlockRecordPlayerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can play a record.

## Properties

### **location**
`read-only location: BlockLocation;`

Type: [*BlockLocation*](BlockLocation.md)

## Methods
- [clearRecord](#clearrecord)
- [isPlaying](#isplaying)
- [setRecord](#setrecord)

### **clearRecord**
`
clearRecord(): void
`
Clears the currently playing record of this record-playing block.
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
setRecord(recordItemType: ItemType): void
`
Sets and plays a record based on an item type.

#### **Parameters**
- **recordItemType**: [*ItemType*](ItemType.md)
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "recordPlayer";`

Type: *string*
