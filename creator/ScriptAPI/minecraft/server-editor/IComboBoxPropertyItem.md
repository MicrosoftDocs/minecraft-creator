---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IComboBoxPropertyItem Interface
description: Contents of the @minecraft/server-editor.IComboBoxPropertyItem class.
---
# IComboBoxPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Combo Box properties

## Properties

### **value**
`read-only value: string;`

Current value of the property item.

Type: *string*

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
