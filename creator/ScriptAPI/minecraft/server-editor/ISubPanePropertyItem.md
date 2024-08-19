---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISubPanePropertyItem Interface
description: Contents of the @minecraft/server-editor.ISubPanePropertyItem class.
---
# ISubPanePropertyItem Interface

## Extends
- *IPropertyItemBase*
- *IPropertyPane*

A property item which supports Sub Pane properties

## Methods
- [setAlignment](#setalignment)
- [setDirection](#setdirection)

### **setAlignment**
`
setAlignment(alignment: LayoutAlignment): void
`

Updates layout alignment of the sub pane.

#### **Parameters**
- **alignment**: *LayoutAlignment*
  
  New layout alignment.

**Returns** *void*

### **setDirection**
`
setDirection(direction: LayoutDirection): void
`

Updates layout direction of the sub pane.

#### **Parameters**
- **direction**: *LayoutDirection*
  
  New layout direction.

**Returns** *void*
