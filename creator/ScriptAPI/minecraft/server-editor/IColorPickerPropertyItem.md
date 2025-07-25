---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IColorPickerPropertyItem Interface
description: Contents of the @minecraft/server-editor.IColorPickerPropertyItem class.
---
# IColorPickerPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Color Picker properties

## Properties

### **value**
`read-only value: minecraftserver.RGBA;`

Current value of the property item.

Type: *minecraftserver.RGBA*

## Methods
- [setTitle](#settitle)
- [setTooltip](#settooltip)

### **setTitle**
`
setTitle(title: LocalizedString | void): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *void*
  
  New title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | void): void
`

Updates tooltip of the property item.

#### **Parameters**
- **tooltip**: *LocalizedString* | *void*
  
  New tooltip.

**Returns** *void*
