---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemStopUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemStopUseAfterEventSignal class.
---
# ItemStopUseAfterEventSignal Class

Manages callbacks that are connected to the stopping of charging for an item that has a registered minecraft:chargeable component.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void
`

Adds a callback that will be called when a chargeable item stops charging.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseAfterEvent*](ItemStopUseAfterEvent.md)) => *void*

**Returns** (arg: [*ItemStopUseAfterEvent*](ItemStopUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void
`

Removes a callback from being called when a chargeable item stops charging.

#### **Parameters**
- **callback**: (arg: [*ItemStopUseAfterEvent*](ItemStopUseAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
