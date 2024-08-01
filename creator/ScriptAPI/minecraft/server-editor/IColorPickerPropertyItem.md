---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IColorPickerPropertyItem Interface
description: Contents of the @minecraft/server-editor.IColorPickerPropertyItem class.
---
# IColorPickerPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Color Picker properties

## Properties

### **value**
`read-only value: RGBA;`

Current value of the property item.

Type: *RGBA*

## Methods
- [setTitle](#settitle)
- [setTooltip](#settooltip)

### **setTitle**
`
setTitle(title: LocalizedString | undefined): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString | undefined*
  
  New title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | undefined): void
`

Updates tooltip of the property item.

#### **Parameters**
- **tooltip**: *LocalizedString | undefined*
  
  New tooltip.

**Returns** *void*
