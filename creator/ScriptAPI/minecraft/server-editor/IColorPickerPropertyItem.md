---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
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
setTitle(title: LocalizedString | undefined): void
`

Updates title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *undefined*
  
  New title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | undefined): void
`

Updates tooltip of the property item.

#### **Parameters**
- **tooltip**: *LocalizedString* | *undefined*
  
  New tooltip.

**Returns** *void*
