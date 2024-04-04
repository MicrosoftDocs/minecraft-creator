---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithBlockBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockBeforeEventSignal class.
---
# PlayerInteractWithBlockBeforeEventSignal Class

Manages callbacks that are connected to before a player interacts with a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): (arg: PlayerInteractWithBlockBeforeEvent) => void
`

Adds a callback that will be called before a player interacts with a block.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

**Returns** (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void
`

Removes a callback from being called before a player interacts with a block.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockBeforeEvent*](PlayerInteractWithBlockBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
