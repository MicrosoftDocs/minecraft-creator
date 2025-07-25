---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.IRegisteredKeyBinding Interface
description: Contents of the @minecraft/server-editor.IRegisteredKeyBinding class.
---
# IRegisteredKeyBinding Interface

Key binding that is registered to an input context

## Properties

### **id**
`read-only id: string;`

Unique identifier for the binding.

Type: *string*

## Methods
- [getProcessingState](#getprocessingstate)
- [setProcessingState](#setprocessingstate)

### **getProcessingState**
`
getProcessingState(): KeyProcessingState
`

Returns current processing state of the binding.

**Returns** *KeyProcessingState*

### **setProcessingState**
`
setProcessingState(newState: KeyProcessingState | void): void
`

Updates how the key input will be processed for this binding. If undefined, it will be consumed.

#### **Parameters**
- **newState**: *KeyProcessingState* | *void*
  
  New binding processing state.

**Returns** *void*
