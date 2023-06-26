---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IPropertyItemOptions class.
---
# IPropertyItemOptions Interface

@beta

## Properties

### **enable**
`enable: boolean;`

If the item is enabled in the UI.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **onChange**
`onChange: OnChangeCallback<PropertyBag, string>;`

Callback to execute when the value is updated.

Type: *OnChangeCallback<PropertyBag, string>*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **titleAltText**
`titleAltText: string;`

Fallback display text if no loc ID

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **titleStringId**
`titleStringId: string;`

Loc ID (resolved on client)

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **visible**
`visible: boolean;`

If the item should be visible in the UI.

Type: *boolean*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.
