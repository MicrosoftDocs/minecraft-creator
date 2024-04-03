---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithEntityBeforeEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithEntityBeforeEventSignal class.
---
# PlayerInteractWithEntityBeforeEventSignal Class

Manages callbacks that are connected to before a player interacts with an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): (arg: PlayerInteractWithEntityBeforeEvent) => void
`

Adds a callback that will be called before a player interacts with an entity.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*

**Returns** (arg: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void
`

Removes a callback from being called before a player interacts with an entity.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
