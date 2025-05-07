---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemReleaseUseAfterEventSignal Class
description: Contents of the @minecraft/server.ItemReleaseUseAfterEventSignal class (Version 1.x.x).
---
# ItemReleaseUseAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemReleaseUseAfterEventSignal.md).

Manages callbacks that are connected to the releasing of charging for a chargeable item.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): (arg0: ItemReleaseUseAfterEvent) => void
`

Adds a callback that will be called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg0: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*

**Returns** (arg0: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: ItemReleaseUseAfterEvent) => void): void
`

Removes a callback from being called when a chargeable item is released from charging.

#### **Parameters**
- **callback**: (arg0: [*ItemReleaseUseAfterEvent*](ItemReleaseUseAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
