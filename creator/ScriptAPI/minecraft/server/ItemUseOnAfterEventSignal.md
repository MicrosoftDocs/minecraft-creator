---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseOnAfterEventSignal Class
description: Contents of the @minecraft/server.ItemUseOnAfterEventSignal class.
---
# ItemUseOnAfterEventSignal Class

Manages callbacks that are connected to an item being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemUseOnAfterEvent) => void): (arg0: ItemUseOnAfterEvent) => void
`

Adds a callback that will be called when an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemUseOnAfterEvent*](ItemUseOnAfterEvent.md)) => *void*

**Returns** (arg0: [*ItemUseOnAfterEvent*](ItemUseOnAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemUseOnAfterEvent) => void): void
`

Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemUseOnAfterEvent*](ItemUseOnAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
