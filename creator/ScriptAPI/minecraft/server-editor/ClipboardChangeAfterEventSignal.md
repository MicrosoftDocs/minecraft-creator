---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ClipboardChangeAfterEventSignal Class
description: Contents of the @minecraft/server-editor.ClipboardChangeAfterEventSignal class.
---
# ClipboardChangeAfterEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): (arg0: ClipboardChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg0: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ClipboardChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg0: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
