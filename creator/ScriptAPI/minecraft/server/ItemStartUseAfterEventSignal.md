---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemStartUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemStartUseAfterEventSignal class.
---
# ItemStartUseAfterEventSignal Class

Manages callbacks that are connected to the start of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemStartUseAfterEvent) => void): (arg0: ItemStartUseAfterEvent) => void
`

Adds a callback that will be called when a chargeable item starts charging.

#### **Parameters**
- **callback**: (arg0: [*ItemStartUseAfterEvent*](ItemStartUseAfterEvent.md)) => *void*

**Returns** (arg0: [*ItemStartUseAfterEvent*](ItemStartUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemStartUseAfterEvent) => void): void
`

Removes a callback from being called when a chargeable item starts charging.

#### **Parameters**
- **callback**: (arg0: [*ItemStartUseAfterEvent*](ItemStartUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
