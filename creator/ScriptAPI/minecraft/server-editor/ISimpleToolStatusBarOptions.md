---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolStatusBarOptions Interface
description: Contents of the @minecraft/server-editor.ISimpleToolStatusBarOptions class.
---
# ISimpleToolStatusBarOptions Interface

A set of options which define the basic properties of a status bar item for a simple tool.

## Properties

### **alignment**
`alignment: EditorStatusBarAlignment;`

The alignment of the status bar item within the parent status bar container

Type: *EditorStatusBarAlignment*

### **displayAltText**
`displayAltText: string;`

The text for the status bar item

Type: *string*

### **onFinalize**
`onFinalize: (statusBar: ISimpleToolStatusBarComponent) => void;`

Type: *(statusBar: ISimpleToolStatusBarComponent) => void*

### **onHide**
`onHide: (statusBar: ISimpleToolStatusBarComponent) => void;`

Type: *(statusBar: ISimpleToolStatusBarComponent) => void*

### **onShow**
`onShow: (statusBar: ISimpleToolStatusBarComponent) => void;`

Type: *(statusBar: ISimpleToolStatusBarComponent) => void*

### **onTeardown**
`onTeardown: (statusBar: ISimpleToolStatusBarComponent) => void;`

Type: *(statusBar: ISimpleToolStatusBarComponent) => void*

### **size**
`size: number;`

The size of the status bar item within the parent status bar container

Type: *number*

### **visibility**
`visibility: SimpleToolStatusBarVisibility;`

Determine the status bar visibility based on the existence and visibility of the tool's root property pane

Type: *SimpleToolStatusBarVisibility*
