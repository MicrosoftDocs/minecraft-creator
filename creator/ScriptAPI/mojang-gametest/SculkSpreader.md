---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.SculkSpreader Class
description: Contents of the mojang-gametest.SculkSpreader class.
---
# SculkSpreader Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Implements a class that can be used for testing sculk spreading behaviors. This sculk spreader class can drive the growth of sculk around a particular block.

## Properties

### **maxCharge**
`read-only maxCharge: number;`

Gets the maximum charge of a sculk spreader.

Type: *number*

## Methods
- [addCursorsWithOffset](#addcursorswithoffset)
- [getCursorPosition](#getcursorposition)
- [getNumberOfCursors](#getnumberofcursors)
- [getTotalCharge](#gettotalcharge)

### **addCursorsWithOffset**
`
addCursorsWithOffset(offset: mojang-minecraft.BlockLocation, charge: number): void
`
Adds a cursor - which is a notional waypoint that the sculk will spread in the direction of.

#### **Parameters**
- **offset**: [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md)
- **charge**: *number*

### **getCursorPosition**
`
getCursorPosition(index: number): mojang-minecraft.BlockLocation
`
Retrieves the current position of the specified cursor.

#### **Parameters**
- **index**: *number*

#### **Returns** [*mojang-minecraft.BlockLocation*](../mojang-minecraft/BlockLocation.md)
> [!WARNING]
> This function can throw errors.

### **getNumberOfCursors**
`
getNumberOfCursors(): number
`
Returns a number of overall cursors for this sculk spreader.

#### **Returns** *number*
> [!WARNING]
> This function can throw errors.

### **getTotalCharge**
`
getTotalCharge(): number
`
Gets the total current charge of the sculk spreader.

#### **Returns** *number*
> [!WARNING]
> This function can throw errors.
