---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ITextPropertyItem Interface
description: Contents of the @minecraft/server-editor.ITextPropertyItem class.
---
# ITextPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Text properties

## Properties

### **value**
`read-only value: Readonly<LocalizedString>;`

Current value of the property item.

Type: *Readonly<LocalizedString>*

## Methods
- [setAlignment](#setalignment)
- [setTitle](#settitle)

### **setAlignment**
`
setAlignment(alignment: LayoutAlignment): void
`

Gets layout alignment of the property item.

#### **Parameters**
- **alignment**: *LayoutAlignment*

**Returns** *void*

### **setTitle**
`
setTitle(title: LocalizedString | void): void
`

Sets title of the property item.

#### **Parameters**
- **title**: *LocalizedString* | *void*

**Returns** *void*
