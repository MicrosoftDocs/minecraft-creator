---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ActionManager Interface
description: Contents of the @minecraft/server-editor.ActionManager class.
---
# ActionManager Interface

Binds actions to the client and manages their lifetime. Action managers are managed on a per player basis since client side UI is per player.

## Properties

### **activeToolId**
`activeToolId: string | undefined;`

The active tool ID

Type: *string | undefined*

## Methods
- [createAction](#createaction)

### **createAction**
`
createAction(rawAction: T): RegisteredAction<T>
`

Creates an action and registers it on the client

#### **Parameters**
- **rawAction**: *T*
  
  The raw action to create. See ActionTypes for supported parameters

**Returns** *RegisteredAction<T>*
