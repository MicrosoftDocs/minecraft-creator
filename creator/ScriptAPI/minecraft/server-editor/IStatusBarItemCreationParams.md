---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IStatusBarItemCreationParams Interface
description: Contents of the @minecraft/server-editor.IStatusBarItemCreationParams class.
---
# IStatusBarItemCreationParams Interface

Properties required to create a status bar item

## Properties

### **alignment**
`alignment?: StatusBarAlignment;`

Alignment of item within status bar. If undefined, it will be left aligned.

Type: *StatusBarAlignment*

### **icon**
`icon?: string;`

Optional icon image resource of the item.

Type: *string*

### **size**
`size?: number;`

Size of the status bar item. If undefined, it will wrap text content.

Type: *number*

### **text**
`text?: LocalizedString;`

Default localized display text of the item. If undefined, it will be empty string.

Type: *LocalizedString*

### **visible**
`visible?: boolean;`

Default visibility of the item. If undefined, it will be true.

Type: *boolean*
