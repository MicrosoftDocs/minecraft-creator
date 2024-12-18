---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ISimpleToolRailComponent Interface
description: Contents of the @minecraft/server-editor.ISimpleToolRailComponent class.
---
# ISimpleToolRailComponent Interface

## Properties

### **session**
`read-only session: IPlayerUISession;`

Get a reference to the IPlayerUISession. This is the primary interface to the editor UI and all of the editor extension controls

Type: *IPlayerUISession*

### **simpleTool**
`read-only simpleTool: ISimpleTool;`

Get a reference to the parent tool.

Type: *ISimpleTool*

### **toolRail**
`read-only toolRail: IModalTool;`

Get the implementation interface of the underlying tool rail component

Type: *IModalTool*
