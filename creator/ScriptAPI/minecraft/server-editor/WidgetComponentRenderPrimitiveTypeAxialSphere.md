---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetComponentRenderPrimitiveTypeAxialSphere Class
description: Contents of the @minecraft/server-editor.WidgetComponentRenderPrimitiveTypeAxialSphere class.
---
# WidgetComponentRenderPrimitiveTypeAxialSphere Class

## Extends
- [*WidgetComponentRenderPrimitiveTypeBase*](WidgetComponentRenderPrimitiveTypeBase.md)

## Properties

### **center**
`center: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **color**
`color?: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

### **radius**
`radius: number;`

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [constructor](#constructor)

### **constructor**
`
new WidgetComponentRenderPrimitiveTypeAxialSphere(center: minecraftserver.Vector3, radius: number, color?: minecraftserver.RGBA)
`

#### **Parameters**
- **center**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **radius**: *number*
- **color**?: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md) = `null`

**Returns** [*WidgetComponentRenderPrimitiveTypeAxialSphere*](WidgetComponentRenderPrimitiveTypeAxialSphere.md)
  
Notes:
- This function can't be called in read-only mode.
