---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolOptions Interface
description: Contents of the @minecraft/server-editor.ISimpleToolOptions class.
---
# ISimpleToolOptions Interface

A set of options which define the basic properties of a simple tool, and the optional components that are desired.

## Properties

### **activationKeyBinding**
`activationKeyBinding: ISimpleToolKeyPair;`

Type: *ISimpleToolKeyPair*

### **name**
`name: string;`

Type: *string*

### **onFinalize**
`onFinalize: (tool: ISimpleTool) => void;`

Type: *(tool: ISimpleTool) => void*

### **onTeardown**
`onTeardown: (tool: ISimpleTool) => void;`

Type: *(tool: ISimpleTool) => void*

### **propertyPaneOptions**
`propertyPaneOptions: ISimpleToolPaneOptions;`

Type: *ISimpleToolPaneOptions*

### **statusBarOptions**
`statusBarOptions: ISimpleToolStatusBarOptions;`

Type: *ISimpleToolStatusBarOptions*

### **toolRailOptions**
`toolRailOptions: ISimpleToolRailOptions;`

Type: *ISimpleToolRailOptions*
