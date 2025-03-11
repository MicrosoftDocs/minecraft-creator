---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IPane Interface
description: Contents of the @minecraft/server-editor.IPane class.
---
# IPane Interface

Pane represents a container for UI components.

## Properties

### **id**
`read-only id: string;`

Unique identifier for the pane.

Type: *string*

### **visible**
`visible: boolean;`

Check visibility of the pane

Type: *boolean*

## Methods
- [hide](#hide)
- [show](#show)

### **hide**
`
hide(): void
`

Hide the pane.

**Returns** *void*

### **show**
`
show(): void
`

Show the pane and all of its items.

**Returns** *void*
