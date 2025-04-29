---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemStartUseOnAfterEventSignal Class
description: Contents of the @minecraft/server.ItemStartUseOnAfterEventSignal class (Version 1.x.x).
---
# ItemStartUseOnAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemStartUseOnAfterEventSignal.md).

Manages callbacks that are connected to an item starting being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): (arg0: ItemStartUseOnAfterEvent) => void
`

Adds a callback that will be called when an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemStartUseOnAfterEvent*](ItemStartUseOnAfterEvent.md)) => *void*

**Returns** (arg0: [*ItemStartUseOnAfterEvent*](ItemStartUseOnAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemStartUseOnAfterEvent) => void): void
`

Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemStartUseOnAfterEvent*](ItemStartUseOnAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
