---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
