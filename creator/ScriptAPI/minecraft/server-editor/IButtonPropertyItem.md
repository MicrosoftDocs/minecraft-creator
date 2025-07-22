---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IButtonPropertyItem Interface
description: Contents of the @minecraft/server-editor.IButtonPropertyItem class.
---
# IButtonPropertyItem Interface

## Extends
- *IPropertyItemBase*

A property item which supports Button properties

## Methods
- [replaceAction](#replaceaction)
- [setIcon](#seticon)
- [setTitle](#settitle)
- [setTooltip](#settooltip)

### **replaceAction**
`
replaceAction(action: RegisteredAction<NoArgsAction>): void
`

Replace action assigned to the button.

#### **Parameters**
- **action**: *RegisteredAction<NoArgsAction>*
  
  New action to replace the existing with.

**Returns** *void*

### **setIcon**
`
setIcon(icon: string | void): void
`

Updates icon of the button.

#### **Parameters**
- **icon**: *string* | *void*
  
  New button icon.

**Returns** *void*

### **setTitle**
`
setTitle(title: LocalizedString | void): void
`

Updates title of the button.

#### **Parameters**
- **title**: *LocalizedString* | *void*
  
  New button title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: BasicTooltipContent | void): void
`

Updates tooltip description of the button.

#### **Parameters**
- **tooltip**: *BasicTooltipContent* | *void*
  
  New button tooltip.

**Returns** *void*
