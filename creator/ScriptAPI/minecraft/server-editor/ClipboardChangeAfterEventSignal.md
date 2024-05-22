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
subscribe(callback: (arg: ClipboardChangeAfterEvent) => void): (arg: ClipboardChangeAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*

**Returns** (arg: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ClipboardChangeAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ClipboardChangeAfterEvent*](ClipboardChangeAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
