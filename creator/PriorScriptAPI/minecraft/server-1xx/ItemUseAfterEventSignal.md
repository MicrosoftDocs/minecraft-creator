---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemUseAfterEventSignal class (Version 1.x.x).
---
# ItemUseAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemUseAfterEventSignal.md).

Manages callbacks that are connected to an item use event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemUseAfterEvent) => void): (arg0: ItemUseAfterEvent) => void
`

Adds a callback that will be called when an item is used.

#### **Parameters**
- **callback**: (arg0: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*

**Returns** (arg0: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemUseAfterEvent) => void): void
`

Removes a callback from being called when an item is used.

#### **Parameters**
- **callback**: (arg0: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
