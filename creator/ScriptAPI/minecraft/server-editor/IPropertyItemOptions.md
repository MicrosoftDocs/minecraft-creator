---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server-editor.IPropertyItemOptions Interface
description: Contents of the @minecraft/server-editor.IPropertyItemOptions class.
ms.service: minecraft-bedrock-edition
---
# IPropertyItemOptions Interface

## Properties

### **enable**
`enable: boolean;`

If the item is enabled in the UI.

Type: *boolean*

### **onChange**
`onChange: OnChangeCallback<PropertyBag, string>;`

Callback to execute when the value is updated.

Type: *OnChangeCallback<PropertyBag, string>*

### **titleAltText**
`titleAltText: string;`

Fallback display text if no loc ID

Type: *string*

### **titleStringId**
`titleStringId: string;`

Loc ID (resolved on client)

Type: *string*

### **visible**
`visible: boolean;`

If the item should be visible in the UI.

Type: *boolean*
