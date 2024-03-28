---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IPropertyItem Interface
description: Contents of the @minecraft/server-editor.IPropertyItem class.
---
# IPropertyItem Interface

## Properties

### **enable**
`enable: boolean;`

If the item is enabled in the UI.

Type: *boolean*

### **id**
`read-only id: string;`

Unique ID for the property item.

Type: *string*

### **obj**
`read-only obj: T;`

The object associated.

Type: *T*

### **paneId**
`read-only paneId: string;`

The parent pane id.

Type: *string*

### **property**
`read-only property: Prop;`

The target property of the object associated.

Type: *Prop*

### **typeName**
`read-only typeName: EDITOR_PANE_PROPERTY_ITEM_TYPE;`

The type name of the target property.

Type: *EDITOR_PANE_PROPERTY_ITEM_TYPE*

### **value**
`read-only value: T[Prop];`

The value of the property.

Type: *T[Prop]*

### **visible**
`visible: boolean;`

If the item should be visible in the UI.

Type: *boolean*

## Methods
- [dispose](#dispose)

### **dispose**
`
dispose(): void
`

Destroy the property item.

**Returns** *void*
