---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-gametest.SculkSpreader Class
description: Contents of the @minecraft/server-gametest.SculkSpreader class.
---
# SculkSpreader Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
addCursorsWithOffset(offset: @minecraft/server.BlockLocation, charge: number): void
`

Adds a cursor - which is a notional waypoint that the sculk will spread in the direction of.

#### **Parameters**
- **offset**: [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)
- **charge**: *number*

### **getCursorPosition**
`
getCursorPosition(index: number): @minecraft/server.BlockLocation
`

Retrieves the current position of the specified cursor.

#### **Parameters**
- **index**: *number*

#### **Returns** [*@minecraft/server.BlockLocation*](../server/BlockLocation.md)

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
