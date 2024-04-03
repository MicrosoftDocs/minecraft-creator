---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithBlockAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithBlockAfterEventSignal class.
---
# PlayerInteractWithBlockAfterEventSignal Class

Manages callbacks that are connected to after a player interacts with a block.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): (arg: PlayerInteractWithBlockAfterEvent) => void
`

Adds a callback that will be called after a player interacts with a block.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void
`

Removes a callback from being called after a player interacts with a block.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithBlockAfterEvent*](PlayerInteractWithBlockAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
