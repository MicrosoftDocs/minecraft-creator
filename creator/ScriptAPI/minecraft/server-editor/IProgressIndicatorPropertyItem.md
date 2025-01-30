---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IProgressIndicatorPropertyItem Interface
description: Contents of the @minecraft/server-editor.IProgressIndicatorPropertyItem class.
---
# IProgressIndicatorPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports ProgressIndicator properties

## Properties

### **progress**
`read-only progress: Readonly<number> | undefined;`

Current progress of the property item.

Type: *Readonly<number> | undefined*

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

Updates tooltip description of property item.

#### **Parameters**
- **tooltip**: *LocalizedString | undefined*
  
  New tooltip.

**Returns** *void*
