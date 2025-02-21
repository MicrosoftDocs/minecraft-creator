---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseBeforeEventSignal Class
description: Contents of the @minecraft/server.ItemUseBeforeEventSignal class.
---
# ItemUseBeforeEventSignal Class

Manages callbacks that fire before an item is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemUseBeforeEvent) => void): (arg0: ItemUseBeforeEvent) => void
`

Adds a callback that will be called before an item is used.

#### **Parameters**
- **callback**: (arg0: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

**Returns** (arg0: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemUseBeforeEvent) => void): void
`

Removes a callback from being called before an item is used.

#### **Parameters**
- **callback**: (arg0: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
