---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/debug-utilities.DebugLine Class
description: Contents of the @minecraft/debug-utilities.DebugLine class.
---
# DebugLine Class

## Extends
- [*DebugShape*](DebugShape.md)

## Classes that extend DebugLine
- [*DebugArrow*](DebugArrow.md)

A debug shape class that represents a line segment.

## Properties

### **endLocation**
`endLocation: minecraftserver.Vector3;`

The end location of the line segment. The final line will spawn between location and endLocation.

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new DebugLine(location: minecraftserver.Vector3, endLocation: minecraftserver.Vector3)
`

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
- **endLocation**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

**Returns** [*DebugLine*](DebugLine.md)
