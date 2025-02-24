---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.PrimarySelectionChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.PrimarySelectionChangeAfterEventSignal class.
---
# PrimarySelectionChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: SelectionEventAfterEvent) => void): (arg0: SelectionEventAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*

**Returns** (arg0: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: SelectionEventAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
