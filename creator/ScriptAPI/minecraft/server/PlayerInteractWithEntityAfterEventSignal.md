---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInteractWithEntityAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithEntityAfterEventSignal class.
---
# PlayerInteractWithEntityAfterEventSignal Class

Manages callbacks that are connected to after a player interacts with an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): (arg0: PlayerInteractWithEntityAfterEvent) => void
`

Adds a callback that will be called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void
`

Removes a callback from being called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
