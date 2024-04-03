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
subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*

**Returns** (arg: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*SelectionEventAfterEvent*](SelectionEventAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
