---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithEntityAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithEntityAfterEventSignal class.
---
# PlayerInteractWithEntityAfterEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

#### **Returns** (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
