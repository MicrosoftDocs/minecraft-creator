---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerInteractWithBlockAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockAfterEventSignal class.
---
# PlayerInteractWithBlockAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

#### **Returns** (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
