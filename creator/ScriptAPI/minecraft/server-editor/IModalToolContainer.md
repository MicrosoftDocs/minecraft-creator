---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IModalToolContainer Interface
description: Contents of the @minecraft/server-editor.IModalToolContainer class.
---
# IModalToolContainer Interface

@beta

## Properties

### **currentTools**
`read-only currentTools: IModalTool[];`

Tools within this container.

Type: *IModalTool[]*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **selectedOptionId**
`read-only selectedOptionId: string;`

The id of the selected tool in container.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [addTool](#addtool)
- [dispose](#dispose)
- [hide](#hide)
- [removeTool](#removetool)
- [setSelectedOptionId](#setselectedoptionid)
- [show](#show)

### **addTool**
`
addTool(params: ModalToolCreationParameters): IModalTool
`

Create a new tool in the modal tool container represented via button on the tool rail.

#### **Parameters**
- **params**: *ModalToolCreationParameters*
  
  Construction parameters for the new tool

#### **Returns** *IModalTool*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **dispose**
`
dispose(): void
`

Destroy the menu and its items.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **hide**
`
hide(): void
`

Hide the tool container and its items.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **removeTool**
`
removeTool(id: string): void
`

Remove an existing tool by id from the tool container

#### **Parameters**
- **id**: *string*
  
  Name of the tool to remove.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setSelectedOptionId**
`
setSelectedOptionId(value: string | undefined, update: boolean): void
`

Sets the selected tool.

#### **Parameters**
- **value**: *string | undefined*
- **update**: *boolean*

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **show**
`
show(): void
`

Show the tool container and its items.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
