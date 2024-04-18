---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Widget Class
description: Contents of the @minecraft/server-editor.Widget class.
---
# Widget Class

## Classes that extend Widget
- [*CustomWidget*](CustomWidget.md)
- [*LineWidget*](LineWidget.md)

## Properties

### **valid**
`read-only valid: boolean;`

Type: *boolean*

## Methods
- [deleteWidget](#deletewidget)
- [getIsSelected](#getisselected)
- [getIsVisible](#getisvisible)
- [setIsSelected](#setisselected)
- [setIsVisible](#setisvisible)

### **deleteWidget**
`
deleteWidget(): void
`

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getIsSelected**
`
getIsSelected(): boolean
`

**Returns** *boolean*

### **getIsVisible**
`
getIsVisible(): boolean
`

**Returns** *boolean*

### **setIsSelected**
`
setIsSelected(isSelected: boolean): void
`

#### **Parameters**
- **isSelected**: *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setIsVisible**
`
setIsVisible(isVisible: boolean): void
`

#### **Parameters**
- **isVisible**: *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.
