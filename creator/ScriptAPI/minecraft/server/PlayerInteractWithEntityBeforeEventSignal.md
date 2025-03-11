---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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
subscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): (arg0: PlayerInteractWithEntityBeforeEvent) => void
`

Adds a callback that will be called before a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*

**Returns** (arg0: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerInteractWithEntityBeforeEvent) => void): void
`

Removes a callback from being called before a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityBeforeEvent*](PlayerInteractWithEntityBeforeEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
