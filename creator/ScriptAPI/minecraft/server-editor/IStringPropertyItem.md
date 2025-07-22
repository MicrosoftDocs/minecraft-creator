---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IStringPropertyItem Interface
description: Contents of the @minecraft/server-editor.IStringPropertyItem class.
---
# IStringPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports String properties

## Properties

### **value**
`read-only value: Readonly<string>;`

Current value of the property item.

Type: *Readonly<string>*

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
setTooltip(tooltip: BasicTooltipContent | void): void
`

Updates tooltip description of property item.

#### **Parameters**
- **tooltip**: *BasicTooltipContent* | *void*
  
  New tooltip.

**Returns** *void*
