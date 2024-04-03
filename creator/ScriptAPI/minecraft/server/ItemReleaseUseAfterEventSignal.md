---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemReleaseUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemReleaseUseAfterEventSignal class.
---
# ItemReleaseUseAfterEventSignal Class

Manages callbacks that are connected to the releasing of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void
`

Adds a callback that will be called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*

**Returns** (arg: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void
`

Removes a callback from being called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
