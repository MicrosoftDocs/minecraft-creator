---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.DataStoreActionContainer Class
description: Contents of the @minecraft/server-editor.DataStoreActionContainer class.
---
# DataStoreActionContainer Class

## Methods
- [bindActionToControl](#bindactiontocontrol)
- [removeActionFromControl](#removeactionfromcontrol)

### **bindActionToControl**
`
bindActionToControl(controlId: string, actionPayload: string): void
`

#### **Parameters**
- **controlId**: *string*
- **actionPayload**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **removeActionFromControl**
`
removeActionFromControl(controlId: string, actionPayload?: string): void
`

#### **Parameters**
- **controlId**: *string*
- **actionPayload**?: *string* = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
