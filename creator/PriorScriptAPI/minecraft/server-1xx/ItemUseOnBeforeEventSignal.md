---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemUseOnBeforeEventSignal Class
description: Contents of the @minecraft/server.ItemUseOnBeforeEventSignal class (Version 1.x.x).
---
# ItemUseOnBeforeEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module.

> [!CAUTION]
> This class is deprecated and will be removed in 2.0.0.

Manages callbacks that fire before an item being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): (arg0: ItemUseOnBeforeEvent) => void
`

Adds a callback that will be called before an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

**Returns** (arg0: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemUseOnBeforeEvent) => void): void
`

Removes a callback from being called before an item is used on a block.

#### **Parameters**
- **callback**: (arg0: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
