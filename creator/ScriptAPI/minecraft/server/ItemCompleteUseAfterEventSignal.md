---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCompleteUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemCompleteUseAfterEventSignal class.
---
# ItemCompleteUseAfterEventSignal Class

Manages callbacks that are connected to the completion of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void
`

Adds a callback that will be called when a chargeable item completes charging.

#### **Parameters**
- **callback**: (arg: [*ItemCompleteUseAfterEvent*](ItemCompleteUseAfterEvent.md)) => *void*

**Returns** (arg: [*ItemCompleteUseAfterEvent*](ItemCompleteUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void
`

Removes a callback from being called when a chargeable item completes charging.

#### **Parameters**
- **callback**: (arg: [*ItemCompleteUseAfterEvent*](ItemCompleteUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
