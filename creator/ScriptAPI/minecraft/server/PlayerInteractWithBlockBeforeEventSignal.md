---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithBlockBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockBeforeEventSignal class.
---
# PlayerInteractWithBlockBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

#### **Returns** (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
