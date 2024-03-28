---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.SelectionManager Class
description: Contents of the @minecraft/server-editor.SelectionManager class.
---
# SelectionManager Class

The SelectionManager (accessible from the [*@minecraft/server-editor.ExtensionContext*](../../minecraft/server-editor/ExtensionContext.md)) is responsible for the management of all [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) objects, and provides the user the ability to create new [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) objects for use within an extension.

## Properties

### **selection**
`read-only selection: Selection;`

The primary [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) object is always present (even if it's empty) and cannot be deleted.  This object represents the main selection object which is always accessible through the UI, and by default is synchronized between the client and server.

Type: [*Selection*](Selection.md)

> [!WARNING]
> This property can throw errors when used.

## Methods
- [create](#create)

### **create**
`
create(): Selection
`

Create a new, empty [*@minecraft/server-editor.Selection*](../../minecraft/server-editor/Selection.md) object

**Returns** [*Selection*](Selection.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
