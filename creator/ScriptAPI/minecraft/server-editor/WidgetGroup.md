---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetGroup Class
description: Contents of the @minecraft/server-editor.WidgetGroup class.
---
# WidgetGroup Class

## Properties

### **selectedWidgetCount**
`read-only selectedWidgetCount: number;`

Type: *number*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)

### **visible**
`visible: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **visibleBounds**
`visibleBounds: boolean;`

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [createWidget](#createwidget)
- [delete](#delete)
- [deleteWidget](#deletewidget)
- [deselectAllWidgets](#deselectallwidgets)
- [selectAllWidgets](#selectallwidgets)

### **createWidget**
`
createWidget(location: minecraftserver.Vector3, options?: WidgetCreateOptions): Widget
`

#### **Parameters**
- **location**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
- **options**?: [*WidgetCreateOptions*](WidgetCreateOptions.md) = `null`

**Returns** [*Widget*](Widget.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)

### **delete**
`
"delete"(): void
`
  
Notes:
- This function can't be called in read-only mode.

### **deleteWidget**
`
deleteWidget(widgetToDelete: Widget): void
`

#### **Parameters**
- **widgetToDelete**: [*Widget*](Widget.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*InvalidWidgetError*](InvalidWidgetError.md), [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)

### **deselectAllWidgets**
`
deselectAllWidgets(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)

### **selectAllWidgets**
`
selectAllWidgets(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)
