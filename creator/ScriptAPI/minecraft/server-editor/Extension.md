---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Extension Class
description: Contents of the @minecraft/server-editor.Extension class.
---
# Extension Class

Editor Extensions are the basis for all player specific, editor specific functionality within the game.  Almost all editor functionality is exported and available within the context of an [*@minecraft/server-editor.ExtensionContext*](../../minecraft/server-editor/ExtensionContext.md)

When the script manager initializes during level loading, the scripts are loaded from the behavior packs and executed.  As part of the global execution context, the scripts are free to register any number of extensions.

An Editor Extension is defined a name, an activation function and a shutdown function.



It is not recommended to directly use this function as the contract is not guaranteed to be stable, instead prefer [*@minecraft/server-editor.registerEditorExtension*](../../minecraft/server-editor/minecraft-server-editor.md#registereditorextension) as it provides additional functionality and a stable contract.

## Properties

### **defaultToolGroupId**
`read-only defaultToolGroupId: string;`

Default identifier for tool rail grouping. All modal tools created from the extension will use this.

Type: *string*

### **description**
`read-only description: string;`

Description specified during registration for the extension.

Type: *string*

### **name**
`read-only name: string;`

Name of the extension.

Type: *string*

### **notes**
`read-only notes: string;`

Notes specified during registration for the extension.

Type: *string*
