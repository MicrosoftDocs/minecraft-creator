---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IMenuContainer Interface
description: Contents of the @minecraft/server-editor.IMenuContainer class.
---
# IMenuContainer Interface

Manager and container for IMenu objects

## Methods
- [createMenu](#createmenu)
- [getMenu](#getmenu)

### **createMenu**
`
createMenu(props: IMenuCreationParams): IMenu
`

Create a top level item in the container.

#### **Parameters**
- **props**: *IMenuCreationParams*
  
  Configuration for the menu to create

**Returns** *IMenu*

### **getMenu**
`
getMenu(id: string): Promise<IMenu>
`

Search for a menu item, if it's not found defer it to next tick.

#### **Parameters**
- **id**: *string*
  
  Menu identifier

**Returns** *Promise<IMenu>*
