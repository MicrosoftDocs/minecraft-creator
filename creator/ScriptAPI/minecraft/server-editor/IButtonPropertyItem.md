---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
setIcon(icon: string | undefined): void
`

Updates icon of the button.

#### **Parameters**
- **icon**: *string | undefined*
  
  New button icon.

**Returns** *void*

### **setTitle**
`
setTitle(title: LocalizedString | undefined): void
`

Updates title of the button.

#### **Parameters**
- **title**: *LocalizedString | undefined*
  
  New button title.

**Returns** *void*

### **setTooltip**
`
setTooltip(tooltip: LocalizedString | undefined): void
`

Updates tooltip description of the button.

#### **Parameters**
- **tooltip**: *LocalizedString | undefined*
  
  New button tooltip.

**Returns** *void*
