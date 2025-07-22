---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IProgressIndicatorPropertyItem Interface
description: Contents of the @minecraft/server-editor.IProgressIndicatorPropertyItem class.
---
# IProgressIndicatorPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports ProgressIndicator properties

## Properties

### **progress**
`read-only progress: Readonly<number> | void;`

Current progress of the property item.

Type: *Readonly<number>* | *void*

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

Updates tooltip description of property item.

#### **Parameters**
- **tooltip**: *LocalizedString* | *void*
  
  New tooltip.

**Returns** *void*
