---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/debug-utilities.DebugShape Class
description: Contents of the @minecraft/debug-utilities.DebugShape class.
---
# DebugShape Class

## Classes that extend DebugShape
- [*DebugBox*](DebugBox.md)
- [*DebugCircle*](DebugCircle.md)
- [*DebugLine*](DebugLine.md)
- [*DebugSphere*](DebugSphere.md)
- [*DebugText*](DebugText.md)

The base class for all debug shapes. Represents an object in the world and its base properties.

## Properties

### **color**
`color: minecraftserver.RGB;`

The color of the shape.

Type: [*@minecraft/server.RGB*](../../../scriptapi/minecraft/server/RGB.md)

### **hasDuration**
`read-only hasDuration: boolean;`

Returns true if the shape has a limited time span before being removed.

Type: *boolean*

### **location**
`location: minecraftserver.Vector3;`

The location of the shape. For most shapes this is the centre of the shape, except DebugLine and DebugArrow where this represents the start point of the line.

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

### **rotation**
`rotation: minecraftserver.Vector3;`

The rotation of the shape (Euler angles - [Pitch, Yaw, Roll]).

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

### **scale**
`scale: number;`

The scale of the shape. This does not apply to DebugLine or DebugArrow.

Type: *number*

### **timeLeft**
`timeLeft?: number;`

The time left (in seconds) until this shape is automatically removed. Returns 0 if the shape does not have a limited life-span.

Type: *number*

### **totalTimeLeft**
`read-only totalTimeLeft?: number;`

The total initial time-span (in seconds) until this shape is automatically removed. Returns 0 if the shape does not have a limited life-span.

Type: *number*

## Methods
- [remove](#remove)

### **remove**
`
remove(): void
`

Removes this shape from the world. The shape can be re-added via the DebugDrawer's addShape method.
