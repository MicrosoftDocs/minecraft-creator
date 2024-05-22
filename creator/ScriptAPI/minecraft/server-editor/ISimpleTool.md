---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleTool Interface
description: Contents of the @minecraft/server-editor.ISimpleTool class.
---
# ISimpleTool Interface

The simple tool wrapper will create, bind and manage the lifecycle of all the desired components. The wrapper is designed to obfuscate and simplify the process of creating a simple editor tool so that a creator can get on with the job of just creating the tool functionality without getting mired in the irrelevant details of component lifecycle and visibility management. The wrapper will also attempt to codify particular implementation patterns and requirements that are common to all editor tools, and enforce them in a consistent way. It should also go some way to insulating the creator from underlying system and implementation changes as the editor evolves.

## Properties

### **menu**
`read-only menu: IMenu | undefined;`

Get a reference to the menu component that was automatically created for the tool This generally only happens if the tool is a global tool (i.e. has a pane and does not have a tool rail component) In this case a menu item is automatically created and some visibility controls are inserted. If you have additional menu options you want to add, this is the ideal control to add children to

Type: *IMenu | undefined*

### **name**
`read-only name: string;`

Get the tool name

Type: *string*

### **pane**
`read-only pane: ISimpleToolPaneComponent;`

Get a reference to the root (primary) property pane component - if no component was requested, this function will throw an error

Type: *ISimpleToolPaneComponent*

### **session**
`read-only session: IPlayerUISession;`

Get a reference to the IPlayerUISession. This is the primary interface to the editor UI and all of the editor extension controls

Type: *IPlayerUISession*

### **statusBar**
`read-only statusBar: ISimpleToolStatusBarComponent;`

Get a reference to the status bar component - if no component was requested, this function will throw an error

Type: *ISimpleToolStatusBarComponent*

### **toolRail**
`read-only toolRail: ISimpleToolRailComponent;`

Get a reference to the tool rail component - if no component was requested, this function will throw an error

Type: *ISimpleToolRailComponent*

## Methods
- [findPane](#findpane)
- [hidePane](#hidepane)
- [logDebug](#logdebug)
- [logError](#logerror)
- [logInfo](#loginfo)
- [logWarn](#logwarn)
- [showPane](#showpane)
- [showPaneExclusively](#showpaneexclusively)
- [teardown](#teardown)

### **findPane**
`
findPane(idString: string): ISimpleToolPaneComponent | undefined
`

Find a pane or subpane by it's unique ID.

#### **Parameters**
- **idString**: *string*

**Returns** *ISimpleToolPaneComponent | undefined*

### **hidePane**
`
hidePane(idString: string): void
`

Hide a particular pane or subpane by it's unique ID. If no ID is provided (or cannot be found) the function will throw an error Although the parent pane is used to execute the visibility request, the hidePane function will NOT affect the visibility of any sibling panes -- so it is possible to hide all of the child panes of a parent using this function

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **logDebug**
`
logDebug(message: string): void
`

Send a tagged Debug log message to the console. The tag will contain the tool name

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logError**
`
logError(message: string): void
`

Send a tagged Error log message to the console. The tag will contain the tool name

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logInfo**
`
logInfo(message: string): void
`

Send a tagged Informational log message to the console. The tag will contain the tool name

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logWarn**
`
logWarn(message: string): void
`

Send a tagged Warning log message to the console. The tag will contain the tool name

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **showPane**
`
showPane(idString: string): void
`

Show a particular pane or subpane by it's unique ID. If no ID is provided (or cannot be found) the function will throw an error Note that the showPane function (when used with a child pane) will use the parent pane to execute the visibility request. In this case, if the child panes are marked as mututally exclusive, then the siblings of the requested pane will be hidden

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **showPaneExclusively**
`
showPaneExclusively(idString: string): void
`

Much like the showPane function, but will hide all other panes that are not the requested pane irrespective of the exclusivity setting

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **teardown**
`
teardown(): void
`

A teardown function implemented by the ISimpleTool implementation, and is called by the system during editor extension shutdown. Don't override this function - instead, implement the onTeardown event in the ISimpleToolOptions structure

**Returns** *void*
