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
subscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): (arg: PlayerInteractWithEntityAfterEvent) => void
`

Adds a callback that will be called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

**Returns** (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void
`

Removes a callback from being called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
