---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ILinkPropertyItem Interface
description: Contents of the @minecraft/server-editor.ILinkPropertyItem class.
---
# ILinkPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Link properties

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

Sets title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *void*

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | void): void
`

Sets tooltip description of the property item.

#### **Parameters**
- **tooltip**: *LocalizedString* | *void*

**Returns** *void*
