---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityRemoveBeforeEventSignal Class
description: Contents of the @minecraft/server.EntityRemoveBeforeEventSignal class.
---
# EntityRemoveBeforeEventSignal Class

Allows registration for an event that fires when an entity is being removed from  the game (for example, unloaded, or a few seconds after they are dead.)

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void
`

Will call your function every time an entity is being removed from the game.

#### **Parameters**
- **callback**: (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void*
  
  Function to call.

**Returns** (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void* - Returns a closure that can be used in subsequent unsubscribe operations.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void
`

Unsubscribes your function from subsequent calls when an entity is being removed.

#### **Parameters**
- **callback**: (arg: [*EntityRemoveBeforeEvent*](EntityRemoveBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
