---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IPropertyItemBase Interface
description: Contents of the @minecraft/server-editor.IPropertyItemBase class.
---
# IPropertyItemBase Interface

Common base for all property items

## Properties

### **enable**
`enable: boolean;`

If the item is enabled in the UI.

Type: *boolean*

### **id**
`read-only id: string;`

Unique ID for the property item.

Type: *string*

### **paneId**
`read-only paneId: string;`

The parent pane id.

Type: *string*

### **typeName**
`read-only typeName: PropertyItemType;`

The type name of the target property.

Type: *PropertyItemType*

### **visible**
`visible: boolean;`

If the item should be visible in the UI.

Type: *boolean*
