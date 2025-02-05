---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IModalControlPane Interface
description: Contents of the @minecraft/server-editor.IModalControlPane class.
---
# IModalControlPane Interface

## Extends
- *IPane*

A sub pane for modal control elements.

## Methods
- [addBool](#addbool)
- [addButton](#addbutton)
- [addDivider](#adddivider)

### **addBool**
`
addBool(value: IObservableProp<boolean>, options: IBoolPropertyItemOptions): IBoolPropertyItem
`

Adds a togglable boolean item to the pane.

#### **Parameters**
- **value**: *IObservableProp<boolean>*
- **options**: *IBoolPropertyItemOptions*

**Returns** *IBoolPropertyItem*

### **addButton**
`
addButton(action: (() => void) | RegisteredAction<NoArgsAction>, options: IButtonPropertyItemOptions): IButtonPropertyItem
`

Adds a button to the pane and binds the specified action to the button activation.

#### **Parameters**
- **action**: *(() => void) | RegisteredAction<NoArgsAction>*
- **options**: *IButtonPropertyItemOptions*

**Returns** *IButtonPropertyItem*

### **addDivider**
`
addDivider(): IPropertyItemBase
`

Adds an divider item to the pane.

**Returns** *IPropertyItemBase*
