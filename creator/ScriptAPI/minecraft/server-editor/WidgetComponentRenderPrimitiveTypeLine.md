---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetComponentRenderPrimitiveTypeLine Class
description: Contents of the @minecraft/server-editor.WidgetComponentRenderPrimitiveTypeLine class.
---
# WidgetComponentRenderPrimitiveTypeLine Class

## Extends
- [*WidgetComponentRenderPrimitiveTypeBase*](WidgetComponentRenderPrimitiveTypeBase.md)

## Properties

### **color**
`color: minecraftserver.RGBA;`

Type: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

### **end**
`end: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **start**
`start: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [constructor](#constructor)

### **constructor**
`
new WidgetComponentRenderPrimitiveTypeLine(start: minecraftserver.Vector3, end: minecraftserver.Vector3, color: minecraftserver.RGBA)
`

#### **Parameters**
- **start**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **end**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **color**: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

**Returns** [*WidgetComponentRenderPrimitiveTypeLine*](WidgetComponentRenderPrimitiveTypeLine.md)
  
Notes:
- This function can't be called in read-only mode.
