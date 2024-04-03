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
subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void
`

Adds a callback that will be called before an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

**Returns** (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void
`

Removes a callback from being called before an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseBeforeEvent*](ItemUseBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
