---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemUseAfterEventSignal class.
---
# ItemUseAfterEventSignal Class

Manages callbacks that are connected to an item use event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void
`

Adds a callback that will be called when an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*

**Returns** (arg: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void
`

Removes a callback from being called when an item is used.

#### **Parameters**
- **callback**: (arg: [*ItemUseAfterEvent*](ItemUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
