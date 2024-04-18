---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolPaneOptions Interface
description: Contents of the @minecraft/server-editor.ISimpleToolPaneOptions class.
---
# ISimpleToolPaneOptions Interface

A set of options which define the basic properties of a window pane (or sub-pane) for a simple tool. This pane can be a top level pane, or a child pane of the top level pane, and is the content container for all of the UI controls used by the editor tool. Each pane is uniquely identified by the `id` property, and has a number of optional function closures which are called at various points in the pane's lifecycle. Note that instead of having a single `onFinalize` function, panes implement a pair of `onBeginFinalize` and `onEndFinalize` functions. This is to allow for the pane to be partially constructed BEFORE any child panes are constructed. Once all child panes have been fully finalized, then the `onEndFinalize` function is called to allow the pane to finalize itself.

## Properties

### **childPaneInitiallyVisible**
`childPaneInitiallyVisible: string;`

Type: *string*

### **childPanes**
`childPanes: ISimpleToolPaneOptions[];`

Type: *ISimpleToolPaneOptions[]*

### **childPanesMutuallyExclusive**
`childPanesMutuallyExclusive: boolean;`

Type: *boolean*

### **id**
`id: string;`

Type: *string*

### **onBeginFinalize**
`onBeginFinalize: (pane: ISimpleToolPaneComponent) => void;`

Type: *(pane: ISimpleToolPaneComponent) => void*

### **onEndFinalize**
`onEndFinalize: (pane: ISimpleToolPaneComponent) => void;`

Type: *(pane: ISimpleToolPaneComponent) => void*

### **onHide**
`onHide: (pane: ISimpleToolPaneComponent) => void;`

Type: *(pane: ISimpleToolPaneComponent) => void*

### **onShow**
`onShow: (pane: ISimpleToolPaneComponent) => void;`

Type: *(pane: ISimpleToolPaneComponent) => void*

### **onTeardown**
`onTeardown: (pane: ISimpleToolPaneComponent) => void;`

Type: *(pane: ISimpleToolPaneComponent) => void*

### **titleAltText**
`titleAltText: string;`

Type: *string*

### **titleStringId**
`titleStringId: string;`

Type: *string*
