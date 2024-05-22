---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.SimpleToolWrapper Class
description: Contents of the @minecraft/server-editor.SimpleToolWrapper class.
---
# SimpleToolWrapper Class

A simple class wrapper to inherit in your tool which contains the initialization and storage of the simple tool component utility. See one of the `Simple` samples to see how to use this class and the wrapper framework

## Properties

### **session**
`read-only session: IPlayerUISession;`

The player UI session that the tool is running in Use this to access the player UI session, or any of the session's components

Type: *IPlayerUISession*

### **simpleTool**
`read-only simpleTool: ISimpleTool;`

The simple tool instance that is created and managed by the wrapper Use this to access any of the tools components, or mess with the tools window visibility

Type: *ISimpleTool*

## Methods
- [setupSimpleTool](#setupsimpletool)
- [teardown](#teardown)

### **setupSimpleTool**
`
setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void
`

Setup the simple tool instance with the given options This will create and initialize the simple tool instance

#### **Parameters**
- **session**: *IPlayerUISession*
- **options**: *ISimpleToolOptions*

**Returns** *void*

### **teardown**
`
teardown(): void
`

Teardown the simple tool instance This will call the teardown function on the simple tool instance This function is automatically invoked by the Editor Extension system when the editor is shutting down

**Returns** *void*
