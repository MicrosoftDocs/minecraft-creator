---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/debug-utilities.DebugArrow Class
description: Contents of the @minecraft/debug-utilities.DebugArrow class.
---
# DebugArrow Class

## Extends
- [*DebugLine*](DebugLine.md)

The length of the arrow's head/tip.

## Properties

### **headLength**
`headLength: number;`

Adds a new debug shape to the world.

Type: *number*

### **headRadius**
`headRadius: number;`

The radius of the arrow's head/tip.

Type: *number*

### **headSegments**
`headSegments: number;`

The number of segments for the base circle of the arrow's head/tip (default: 4).

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new DebugArrow(location: minecraftserver.Vector3, endLocation: minecraftserver.Vector3)
`

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
- **endLocation**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

**Returns** [*DebugArrow*](DebugArrow.md)
