---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IActionBar Interface
description: Contents of the @minecraft/server-editor.IActionBar class.
---
# IActionBar Interface

Manager for IActionBarItem objects.

## Methods
- [registerItem](#registeritem)
- [unregisterItem](#unregisteritem)

### **registerItem**
`
registerItem(id: string, action: RegisteredAction<NoArgsAction>, props: IActionBarItemCreationParams): IActionBarItem
`

Add a new action bar item to the collection.

#### **Parameters**
- **id**: *string*
  
  Unique item identifier.
- **action**: *RegisteredAction<NoArgsAction>*
  
  Action to be invoked.
- **props**: *IActionBarItemCreationParams*
  
  Configuration for the item to create.

**Returns** *IActionBarItem*

### **unregisterItem**
`
unregisterItem(id: string): void
`

Remove an action item from the collection.

#### **Parameters**
- **id**: *string*
  
  Unique item identifier.

**Returns** *void*
