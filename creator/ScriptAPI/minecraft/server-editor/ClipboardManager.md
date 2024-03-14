---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ClipboardManager Class
description: Contents of the @minecraft/server-editor.ClipboardManager class.
---
# ClipboardManager Class

The ClipboardManager (accessible from the [*@minecraft/server-editor.ExtensionContext*](../../minecraft/server-editor/ExtensionContext.md)) is responsible for the management of all [*@minecraft/server-editor.ClipboardItem*](../../minecraft/server-editor/ClipboardItem.md) objects, and provides the user the ability to create new [*@minecraft/server-editor.ClipboardItem*](../../minecraft/server-editor/ClipboardItem.md) objects for use within an extension.



## Properties

### **clipboard**
`read-only clipboard: ClipboardItem;`

The primary [*@minecraft/server-editor.ClipboardItem*](../../minecraft/server-editor/ClipboardItem.md) object is always present (even if it's empty) and cannot be deleted.  This object represents the main ClipboardItem object which is always accessible through the UI for cut/paste operations

Type: [*ClipboardItem*](ClipboardItem.md)

> [!WARNING]
> This property can throw errors when used.

## Methods
- [create](#create)

### **create**
`
create(): ClipboardItem
`

Create a new  [*@minecraft/server-editor.ClipboardItem*](../../minecraft/server-editor/ClipboardItem.md) object

**Returns** [*ClipboardItem*](ClipboardItem.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
