---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockRecordPlayerComponent Class
description: Contents of the @minecraft/server.BlockRecordPlayerComponent class.
---
# BlockRecordPlayerComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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

### **componentId**
`static read-only componentId = "minecraft:recordPlayer";`

Identifier of this component. Should always be minecraft:recordPlayer.

Type: *string*
