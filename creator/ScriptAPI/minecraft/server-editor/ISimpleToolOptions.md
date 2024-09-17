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
`activationKeyBinding: ISimpleToolKeyBinding;`

A key binding that will activate the tool. Note that if the tool is a modal tool, then the key binding will be tied to the tool rail activation, and appear as a tooltip on the tool rail button. If the tool is a global tool, then the key binding will be tied to a menu item in the View menu, and appear as a stateful menu item which will control the pane visibility. If there's no pane required, then the key binding is ignored

Type: *ISimpleToolKeyBinding*

### **name**
`name: string;`

The name of the tool. This will be used to identify the tool in the UI and logs and will be used in the View \> [Tool Name] menu item (if it's a global tool)

Type: *string*

### **onFinalize**
`onFinalize: (tool: ISimpleTool) => void;`

The finalize function is executed after each of the components have been created and finalized during construction

Type: *(tool: ISimpleTool) => void*

### **onTeardown**
`onTeardown: (tool: ISimpleTool) => void;`

The teardown function is executed when the tool is being torn down and only after the individual components have executed their own teardown functions

Type: *(tool: ISimpleTool) => void*

### **propertyPaneOptions**
`propertyPaneOptions: ISimpleToolPaneOptions;`

The options structure for an optional property pane component

Type: *ISimpleToolPaneOptions*

### **statusBarOptions**
`statusBarOptions: ISimpleToolStatusBarOptions;`

The options structure for an optional status bar component

Type: *ISimpleToolStatusBarOptions*

### **toolRailOptions**
`toolRailOptions: ISimpleToolRailOptions;`

The options structure for an optional tool rail component

Type: *ISimpleToolRailOptions*
