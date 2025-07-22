---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.INumberPropertyItem Interface
description: Contents of the @minecraft/server-editor.INumberPropertyItem class.
---
# INumberPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Number properties

## Properties

### **value**
`read-only value: Readonly<number>;`

Current value of the property item.

Type: *Readonly<number>*

## Methods
- [setTitle](#settitle)
- [setTooltip](#settooltip)
- [updateLimits](#updatelimits)

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

### **updateLimits**
`
updateLimits(limits: {
        min?: number;
        max?: number;
    }): void
`

Updates number limits and clamps the current value.

#### **Parameters**
- **limits**: *{
        min?: number;
        max?: number;
    }*

**Returns** *void*
