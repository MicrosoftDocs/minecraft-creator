---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-gametest.SculkSpreader Class
description: Contents of the @minecraft/server-gametest.SculkSpreader class.
---
# SculkSpreader Class

Implements a class that can be used for testing sculk spreading behaviors. This sculk spreader class can drive the growth of sculk around a particular block.

## Properties

### **maxCharge**
`read-only maxCharge: number;`

Gets the maximum charge of a sculk spreader.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [addCursorsWithOffset](#addcursorswithoffset)
- [getCursorPosition](#getcursorposition)
- [getNumberOfCursors](#getnumberofcursors)
- [getTotalCharge](#gettotalcharge)

### **addCursorsWithOffset**
`
addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void
`

Adds a cursor - which is a notional waypoint that the sculk will spread in the direction of.

#### **Parameters**
- **offset**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **charge**: *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getCursorPosition**
`
getCursorPosition(index: number): minecraftserver.Vector3
`

Retrieves the current position of the specified cursor.

#### **Parameters**
- **index**: *number*

**Returns** [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getNumberOfCursors**
`
getNumberOfCursors(): number
`

Returns a number of overall cursors for this sculk spreader.

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getTotalCharge**
`
getTotalCharge(): number
`

Gets the total current charge of the sculk spreader.

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
