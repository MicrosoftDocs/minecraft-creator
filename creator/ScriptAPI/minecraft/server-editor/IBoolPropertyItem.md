---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IBoolPropertyItem Interface
description: Contents of the @minecraft/server-editor.IBoolPropertyItem class.
---
# IBoolPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports boolean properties

## Properties

### **value**
`read-only value: boolean;`

Current value of the property item.

Type: *boolean*

## Methods
- [setTitle](#settitle)
- [setTooltip](#settooltip)

### **setTitle**
`
setTitle(title: LocalizedString | void): void
`

Sets title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *void*

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: BasicTooltipContent | void): void
`

Sets tooltip description of the property item.

#### **Parameters**
- **tooltip**: *BasicTooltipContent* | *void*

**Returns** *void*
