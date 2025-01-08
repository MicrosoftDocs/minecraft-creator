---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetComponentBase Class
description: Contents of the @minecraft/server-editor.WidgetComponentBase class.
---
# WidgetComponentBase Class

## Classes that extend WidgetComponentBase
- [*WidgetComponentClipboard*](WidgetComponentClipboard.md)
- [*WidgetComponentEntity*](WidgetComponentEntity.md)
- [*WidgetComponentGizmo*](WidgetComponentGizmo.md)
- [*WidgetComponentGuide*](WidgetComponentGuide.md)
- [*WidgetComponentRenderPrimitive*](WidgetComponentRenderPrimitive.md)
- [*WidgetComponentSpline*](WidgetComponentSpline.md)
- [*WidgetComponentText*](WidgetComponentText.md)

## Properties

### **componentType**
`read-only componentType: WidgetComponentType;`

Type: [*WidgetComponentType*](WidgetComponentType.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **location**
`read-only location: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

Notes:
  - This property can throw errors when used.
    - Throws [*@minecraft/server.InvalidWidgetComponentError*](../../minecraft/server/InvalidWidgetComponentError.md)

### **lockToSurface**
`lockToSurface: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **name**
`read-only name: string;`

Type: *string*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **offset**
`offset: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

Notes:
  - This property can't be edited in read-only mode.

### **valid**
`read-only valid: boolean;`

Type: *boolean*

### **visible**
`visible: boolean;`

Type: *boolean*

### **widget**
`read-only widget: Widget;`

Type: [*Widget*](Widget.md)

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

## Methods
- [delete](#delete)
- [setStateChangeEvent](#setstatechangeevent)

### **delete**
`
"delete"(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)

### **setStateChangeEvent**
`
setStateChangeEvent(eventFunction?: (arg0: WidgetComponentStateChangeEventData) => void): void
`

#### **Parameters**
- **eventFunction**?: (arg0: [*WidgetComponentStateChangeEventData*](WidgetComponentStateChangeEventData.md)) => *void* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetComponentError*](InvalidWidgetComponentError.md)
