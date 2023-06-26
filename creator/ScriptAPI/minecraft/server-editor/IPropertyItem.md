---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IPropertyItem Interface
description: Contents of the @minecraft/server-editor.IPropertyItem class.
---
# IPropertyItem Interface

@beta

## Properties

### **enable**
`enable: boolean;`

If the item is enabled in the UI.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **id**
`read-only id: string;`

Unique ID for the property item.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **obj**
`read-only obj: T;`

The object associated.

Type: *T*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **paneId**
`read-only paneId: string;`

The parent pane id.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **property**
`read-only property: Prop;`

The target property of the object associated.

Type: *Prop*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **typeName**
`read-only typeName: EDITOR_PANE_PROPERTY_ITEM_TYPE;`

The type name of the target property.

Type: *EDITOR_PANE_PROPERTY_ITEM_TYPE*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **value**
`read-only value: T[Prop];`

The value of the property.

Type: *T[Prop]*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **visible**
`visible: boolean;`

If the item should be visible in the UI.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [dispose](#dispose)

### **dispose**
`
dispose(): void
`

Destroy the property item.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
