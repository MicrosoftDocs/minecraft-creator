---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.CursorPropertyChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.CursorPropertyChangeAfterEventSignal class.
---
# CursorPropertyChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): (arg: CursorPropertiesChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*

**Returns** (arg: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
