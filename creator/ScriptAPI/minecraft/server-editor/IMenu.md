---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IMenu Interface
description: Contents of the @minecraft/server-editor.IMenu class.
---
# IMenu Interface

@beta

## Properties

### **id**
`read-only id: string;`

Unique ID for the menu

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **submenu**
`read-only submenu: IMenu[];`

Sub menus of this menu

Type: *IMenu[]*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [addItem](#additem)
- [addSeparator](#addseparator)
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

#### **Returns** *IMenu*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **addSeparator**
`
addSeparator(): IMenu
`

Create a separator

#### **Returns** *IMenu*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **dispose**
`
dispose(): void
`

Destroy the menu and all of its children.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **hide**
`
hide(): void
`

Hide the menu and all of its children.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **replaceAction**
`
replaceAction(action: RegisteredAction<NoArgsAction>): void
`

Replaces the current associated menu action with a new action

#### **Parameters**
- **action**: *RegisteredAction<NoArgsAction>*
  
  The registered action to associated with this menu item

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **show**
`
show(): void
`

Show the menu and all of its children.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
