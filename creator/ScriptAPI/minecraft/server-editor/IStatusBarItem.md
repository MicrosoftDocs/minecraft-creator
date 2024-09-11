---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IStatusBarItem Interface
description: Contents of the @minecraft/server-editor.IStatusBarItem class.
---
# IStatusBarItem Interface

## Properties

### **id**
`read-only id: string;`

Unique ID for the item.

Type: *string*

## Methods
- [getText](#gettext)
- [hide](#hide)
- [setText](#settext)
- [show](#show)

### **getText**
`
getText(): LocalizedString
`

Returns display text of the item.

**Returns** *LocalizedString*

### **hide**
`
hide(): void
`

Hide the Status Bar Item.

**Returns** *void*

### **setText**
`
setText(text: LocalizedString): void
`

Updates display text of the item.

#### **Parameters**
- **text**: *LocalizedString*
  
  New display text

**Returns** *void*

### **show**
`
show(): void
`

Show the Status Bar Item.

**Returns** *void*
