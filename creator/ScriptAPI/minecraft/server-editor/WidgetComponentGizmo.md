---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.WidgetComponentGizmo Class
description: Contents of the @minecraft/server-editor.WidgetComponentGizmo class.
---
# WidgetComponentGizmo Class

## Extends
- [*WidgetComponentBase*](WidgetComponentBase.md)

## Properties

### **activated**
`activated: boolean;`

Type: *boolean*

### **enabledAxes**
`enabledAxes: Axis;`

Type: [*Axis*](Axis.md)

Notes:
  - This property can't be edited in read-only mode.

### **normalizedOffsetOverride**
`normalizedOffsetOverride?: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [setStateChangeEvent](#setstatechangeevent)

### **setStateChangeEvent**
`
setStateChangeEvent(eventFunction?: (arg0: WidgetComponentGizmoStateChangeEventParameters) => void): void
`

#### **Parameters**
- **eventFunction**?: (arg0: [*WidgetComponentGizmoStateChangeEventParameters*](WidgetComponentGizmoStateChangeEventParameters.md)) => *void* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)
