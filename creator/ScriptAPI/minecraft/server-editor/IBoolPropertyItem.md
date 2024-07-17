---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IBoolPropertyItem Interface
description: Contents of the @minecraft/server-editor.IBoolPropertyItem class.
---
# IBoolPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Vector3 properties

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
setTitle(title: LocalizedString | undefined): void
`

Sets title of the property item.

#### **Parameters**
- **title**: *LocalizedString | undefined*

**Returns** *void*

### **setTooltip**
`
setTooltip(title: LocalizedString | undefined): void
`

Sets tooltip description of the property item.

#### **Parameters**
- **title**: *LocalizedString | undefined*

**Returns** *void*
