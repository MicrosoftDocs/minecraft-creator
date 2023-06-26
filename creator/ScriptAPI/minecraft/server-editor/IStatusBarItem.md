---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IStatusBarItem Interface
description: Contents of the @minecraft/server-editor.IStatusBarItem class.
---
# IStatusBarItem Interface

@beta

## Properties

### **id**
`read-only id: string;`

Unique ID for the item.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **text**
`text: string;`

Text to display.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [hide](#hide)
- [show](#show)

### **hide**
`
hide(): void
`

Hide the Status Bar Item.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **show**
`
show(): void
`

Show the Status Bar Item.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
