---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.PlayerDimensionChangeBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerDimensionChangeBeforeEventSignal class.
ms.service: minecraft-bedrock-edition
---
# PlayerDimensionChangeBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to player dimension change requests.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerDimensionChangeBeforeEvent) => void): (arg: PlayerDimensionChangeBeforeEvent) => void
`

Subscribes the specified callback to player dimension change before events.

#### **Parameters**
- **callback**: (arg: [*PlayerDimensionChangeBeforeEvent*](PlayerDimensionChangeBeforeEvent.md)) => *void*
  
  Callback function to subscribe to the event.

#### **Returns** (arg: [*PlayerDimensionChangeBeforeEvent*](PlayerDimensionChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerDimensionChangeBeforeEvent) => void): void
`

Removes the specified callback from being called by player dimension change before events.

#### **Parameters**
- **callback**: (arg: [*PlayerDimensionChangeBeforeEvent*](PlayerDimensionChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
