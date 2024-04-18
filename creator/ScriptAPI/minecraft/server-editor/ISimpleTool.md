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

Type: *IMenu | undefined*

### **name**
`read-only name: string;`

Type: *string*

### **pane**
`read-only pane: ISimpleToolPaneComponent;`

Type: *ISimpleToolPaneComponent*

### **session**
`read-only session: IPlayerUISession;`

Type: *IPlayerUISession*

### **statusBar**
`read-only statusBar: ISimpleToolStatusBarComponent;`

Type: *ISimpleToolStatusBarComponent*

### **toolRail**
`read-only toolRail: ISimpleToolRailComponent;`

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

#### **Parameters**
- **idString**: *string*

**Returns** *ISimpleToolPaneComponent | undefined*

### **hidePane**
`
hidePane(idString: string): void
`

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **logDebug**
`
logDebug(message: string): void
`

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logError**
`
logError(message: string): void
`

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logInfo**
`
logInfo(message: string): void
`

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **logWarn**
`
logWarn(message: string): void
`

#### **Parameters**
- **message**: *string*

**Returns** *void*

### **showPane**
`
showPane(idString: string): void
`

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **showPaneExclusively**
`
showPaneExclusively(idString: string): void
`

#### **Parameters**
- **idString**: *string*

**Returns** *void*

### **teardown**
`
teardown(): void
`

**Returns** *void*
