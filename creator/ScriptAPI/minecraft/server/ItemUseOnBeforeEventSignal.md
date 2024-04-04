---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseOnBeforeEventSignal Class
description: Contents of the @minecraft/server.ItemUseOnBeforeEventSignal class.
---
# ItemUseOnBeforeEventSignal Class

Manages callbacks that fire before an item being used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void
`

Adds a callback that will be called before an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

**Returns** (arg: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void
`

Removes a callback from being called before an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemUseOnBeforeEvent*](ItemUseOnBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
