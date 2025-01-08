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
subscribe(callback: (arg0: CursorPropertiesChangeAfterEvent) => void): (arg0: CursorPropertiesChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: CursorPropertiesChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*CursorPropertiesChangeAfterEvent*](CursorPropertiesChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
