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

Type: *IPlayerUISession*

### **simpleTool**
`read-only simpleTool: ISimpleTool;`

Type: *ISimpleTool*

## Methods
- [setupSimpleTool](#setupsimpletool)
- [teardown](#teardown)

### **setupSimpleTool**
`
setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void
`

#### **Parameters**
- **session**: *IPlayerUISession*
- **options**: *ISimpleToolOptions*

**Returns** *void*

### **teardown**
`
teardown(): void
`

**Returns** *void*
