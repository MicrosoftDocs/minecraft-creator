---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IButtonPanePropertyItem Interface
description: Contents of the @minecraft/server-editor.IButtonPanePropertyItem class.
---
# IButtonPanePropertyItem Interface

## Extends
- *IPropertyItemBase*
- *IPane*

A property item pane which supports multiple buttons

## Methods
- [addButton](#addbutton)

### **addButton**
`
addButton(action: ButtonPropertyItemSupportedActionTypes, options: IButtonPropertyItemOptions): IButtonPropertyItem
`

Adds a button to the pane and binds the specified action to the button interaction.

#### **Parameters**
- **action**: *ButtonPropertyItemSupportedActionTypes*
- **options**: *IButtonPropertyItemOptions*

**Returns** *IButtonPropertyItem*
