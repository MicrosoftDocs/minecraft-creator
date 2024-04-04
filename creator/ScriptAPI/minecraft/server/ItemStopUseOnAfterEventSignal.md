---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemStopUseOnAfterEventSignal Class
description: Contents of the @minecraft/server.ItemStopUseOnAfterEventSignal class.
---
# ItemStopUseOnAfterEventSignal Class

Manages callbacks that are connected to an item stops used on a block event.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void
`

Adds a callback that will be called when an item stops being used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

**Returns** (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void
`

Removes a callback from being called when an item is used on a block.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseOnAfterEvent*](ItemStopUseOnAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
