---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IStatusBar Interface
description: Contents of the @minecraft/server-editor.IStatusBar class.
---
# IStatusBar Interface

Manager and container for IStatusBarItem objects

## Methods
- [createItem](#createitem)
- [removeItem](#removeitem)

### **createItem**
`
createItem(props: IStatusBarItemCreationParams): IStatusBarItem
`

Create a item in status bar

#### **Parameters**
- **props**: *IStatusBarItemCreationParams*
  
  Properties to create status bar item

**Returns** *IStatusBarItem*

### **removeItem**
`
removeItem(id: string): void
`

Remove an existing status bar item

#### **Parameters**
- **id**: *string*
  
  Status bar item identifier

**Returns** *void*
