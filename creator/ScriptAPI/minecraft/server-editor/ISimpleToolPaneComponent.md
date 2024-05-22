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

Get a list of the unique ID's of all of the child panes

Type: *string[]*

### **id**
`read-only id: string;`

Get the unique ID of the pane

Type: *string*

### **isVisible**
`read-only isVisible: boolean;`

Check the visibility of the pane

Type: *boolean*

### **pane**
`read-only pane: IPropertyPane;`

Get a reference to actual property pane implementation that was constructed by the tool. This reference is used to construct the UI components that are displayed in the pane.

Type: *IPropertyPane*

### **session**
`read-only session: IPlayerUISession;`

Get a reference to the IPlayerUISession. This is the primary interface to the editor UI and all of the editor extension controls

Type: *IPlayerUISession*

### **simpleTool**
`read-only simpleTool: ISimpleTool;`

Get a reference to the parent tool.

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

Find a pane reference by unique ID

#### **Parameters**
- **idString**: *string*

**Returns** *ISimpleToolPaneComponent | undefined*

### **hidePane**
`
hidePane(): void
`

Hide the pane. Although the parent pane is used to execute the visibility request, the hidePane function will NOT affect the visibility of any sibling panes -- so it is possible to hide all of the child panes of a parent using this function

**Returns** *void*

### **reconstructPane**
`
reconstructPane(): void
`

This causes the reconstruction of the pane (and the child panes) as if the tool was being constructed for the first time. This is unfortunately necessary until such time that all of our UI components are able to communicate dynamically with their client counterparts. Certain controls require a full teardown and reconstruction to properly update their state. This is undergoing code changes and should become unnecessary in the future.

**Returns** *void*

### **showPane**
`
showPane(): void
`

Show the pane. Note, if this is a sub-pane, then this function will ask the parent for permission to show, and may result in the visibility of any sibling panes to change as a result (depending on the `mutually exclusive visibility` flag)

**Returns** *void*
