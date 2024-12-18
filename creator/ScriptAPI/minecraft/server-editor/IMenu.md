---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IMenu Interface
description: Contents of the @minecraft/server-editor.IMenu class.
---
# IMenu Interface

## Properties

### **checked**
`checked: boolean;`

If defined, the menu will show a checked or unchecked checkbox.

Type: *boolean*

### **enabled**
`enabled: boolean;`

The menu will be in either an enabled or disabled state

Type: *boolean*

### **id**
`read-only id: string;`

Unique ID for the menu

Type: *string*

### **submenu**
`read-only submenu: IMenu[];`

Sub menus of this menu

Type: *IMenu[]*

## Methods
- [addItem](#additem)
- [dispose](#dispose)
- [hide](#hide)
- [replaceAction](#replaceaction)
- [show](#show)

### **addItem**
`
addItem(params: IMenuCreationParams, action: RegisteredAction<NoArgsAction>): IMenu
`

Create a child menu on this menu.

#### **Parameters**
- **params**: *IMenuCreationParams*
  
  The menu creation parameters for the sub item being added
- **action**: *RegisteredAction<NoArgsAction>*
  
  The action to associate with the menu item. Only a subset of actions are supported

**Returns** *IMenu*

### **dispose**
`
dispose(): void
`

Destroy the menu and all of its children.

**Returns** *void*

### **hide**
`
hide(): void
`

Hide the menu and all of its children.

**Returns** *void*

### **replaceAction**
`
replaceAction(action: RegisteredAction<NoArgsAction>): void
`

Replaces the current associated menu action with a new action

#### **Parameters**
- **action**: *RegisteredAction<NoArgsAction>*
  
  The registered action to associated with this menu item

**Returns** *void*

### **show**
`
show(): void
`

Show the menu and all of its children.

**Returns** *void*
