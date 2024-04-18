---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolPaneComponent Interface
description: Contents of the @minecraft/server-editor.ISimpleToolPaneComponent class.
---
# ISimpleToolPaneComponent Interface

The Simple Tool pane component represents the main window (or sub-window) for an editor tool. The pane components are stored as a hierarchy (see the `ISimpleToolPaneOptions` interface for more details) and are the main containers for all of the UI controls used by the editor tool. Panes are optional (a tool doesn't necessarily need to have a pane), but if a pane is present, then it is one of two type - Modal Pane (appears on the left side of the display; visibility is tied to the `ISimpleToolRail` component) (Note that there can be only one modal pane visible at a time) - Global Pane (appears on the right side of the display; visibility is up to the creator/user)

## Properties

### **childPaneList**
`read-only childPaneList: string[];`

Type: *string[]*

### **id**
`read-only id: string;`

Type: *string*

### **isVisible**
`read-only isVisible: boolean;`

Type: *boolean*

### **pane**
`read-only pane: IPropertyPane;`

Type: *IPropertyPane*

### **session**
`read-only session: IPlayerUISession;`

Type: *IPlayerUISession*

### **simpleTool**
`read-only simpleTool: ISimpleTool;`

Type: *ISimpleTool*

## Methods
- [findPane](#findpane)
- [hidePane](#hidepane)
- [reconstructPane](#reconstructpane)
- [showPane](#showpane)

### **findPane**
`
findPane(idString: string): ISimpleToolPaneComponent | undefined
`

#### **Parameters**
- **idString**: *string*

**Returns** *ISimpleToolPaneComponent | undefined*

### **hidePane**
`
hidePane(): void
`

**Returns** *void*

### **reconstructPane**
`
reconstructPane(): void
`

**Returns** *void*

### **showPane**
`
showPane(): void
`

**Returns** *void*
