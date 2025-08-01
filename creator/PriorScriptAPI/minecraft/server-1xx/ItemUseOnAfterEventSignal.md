---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemUseOnAfterEventSignal Class
description: Contents of the @minecraft/server.ItemUseOnAfterEventSignal class (Version 1.x.x).
---
# ItemUseOnAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

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

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemUseOnAfterEvent) => void): void
`

Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemUseOnAfterEvent*](ItemUseOnAfterEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
